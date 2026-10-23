const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');

// Files to process (relative to project root)
const TARGET_FILES = [
  'src/pages/investir/creerEntreprise/creerEntreprise.tsx',
  'src/pages/investir/facteursProduction/facteursProduction.tsx',
  'src/pages/investir/droitInvestisseur/droitInvestisseur.tsx',
  'src/pages/investir/droitInvestisseur/SectionNav.tsx',
  'src/pages/investir/incitation/incitation.tsx',
  // component modals
  'src/components/factorGrid.tsx',
  'src/components/factorModal.tsx',
  'src/components/foncierModal.tsx',
  'src/components/mainOeuvreModal.tsx',
  'src/components/costsBySectorModal.tsx',
  'src/components/fiscaliteModal.tsx',
];

// Languages to generate (excluding French which already exists)
const LANGUAGES = ['en', 'zh', 'ar', 'es'];

const FR_JSON_PATH = path.join('src', 'assets', 'translations', 'fr.json');
const langJsonPaths = LANGUAGES.reduce((obj, lng) => {
  obj[lng] = path.join('src', 'assets', 'translations', `${lng}.json`);
  return obj;
}, {});

// Load existing French translations (or create empty structure)
let frJson = {};
if (fs.existsSync(FR_JSON_PATH)) {
  frJson = JSON.parse(fs.readFileSync(FR_JSON_PATH, 'utf8'));
}
if (!frJson.investir) frJson.investir = {};

// Prepare language JSON objects (load existing or start fresh)
const langJson = {};
LANGUAGES.forEach(lng => {
  if (fs.existsSync(langJsonPaths[lng])) {
    langJson[lng] = JSON.parse(fs.readFileSync(langJsonPaths[lng], 'utf8'));
  } else {
    langJson[lng] = {};
  }
  if (!langJson[lng].investir) langJson[lng].investir = {};
});

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '_')
    .replace(/_+/g, '_')
    .substring(0, 30)
    .replace(/^_+|_+$/g, '');
}

TARGET_FILES.forEach(relPath => {
  const absolutePath = path.resolve(relPath);
  if (!fs.existsSync(absolutePath)) {
    console.warn('File not found:', absolutePath);
    return;
  }
  const code = fs.readFileSync(absolutePath, 'utf8');
  const ast = parser.parse(code, {
    sourceType: 'module',
    plugins: ['typescript', 'jsx'],
  });

  const pageKey = path.basename(relPath, '.tsx'); // e.g., creerEntreprise, droitsDesInvestisseurs
  if (!frJson.investir[pageKey]) frJson.investir[pageKey] = {};
  LANGUAGES.forEach(lng => {
    if (!langJson[lng].investir[pageKey]) langJson[lng].investir[pageKey] = {};
  });

  // Track whether we already added import/useTranslation
  let hasI18nImport = false;
  let useTranslationInserted = false;

  traverse(ast, {
    ImportDeclaration(path) {
      if (path.node.source.value === 'react-i18next') {
        hasI18nImport = true;
      }
    },
    JSXText(path) {
      const raw = path.node.value;
      const text = raw.trim();
      if (text.length < 2) return; // ignore whitespace or very short strings
      const key = slugify(text);
      if (!key) return;
      // Add to translation objects
      frJson.investir[pageKey][key] = text;
      LANGUAGES.forEach(lng => {
        const placeholder = `${text} (${lng.toUpperCase()})`;
        langJson[lng].investir[pageKey][key] = placeholder;
      });
      // Replace JSX text with t('investir.<page>.<key>')
      const callExp = t.callExpression(t.identifier('t'), [
        t.stringLiteral(`investir.${pageKey}.${key}`),
      ]);
      const jsxExpr = t.jsxExpressionContainer(callExp);
      path.replaceWith(jsxExpr);
    },
    // Handle string literals used as attribute values (e.g., title="...", aria-label="...")
    JSXAttribute(path) {
      const attrValue = path.node.value;
      if (!attrValue || attrValue.type !== 'StringLiteral') return;
      const text = attrValue.value.trim();
      if (text.length < 2) return;
      const key = slugify(text);
      if (!key) return;
      frJson.investir[pageKey][key] = text;
      LANGUAGES.forEach(lng => {
        const placeholder = `${text} (${lng.toUpperCase()})`;
        langJson[lng].investir[pageKey][key] = placeholder;
      });
      const callExp = t.callExpression(t.identifier('t'), [
        t.stringLiteral(`investir.${pageKey}.${key}`),
      ]);
      path.node.value = t.jsxExpressionContainer(callExp);
    },
  });

  // Insert import if missing
  if (!hasI18nImport) {
    const importDecl = t.importDeclaration(
      [t.importSpecifier(t.identifier('useTranslation'), t.identifier('useTranslation'))],
      t.stringLiteral('react-i18next')
    );
    ast.program.body.unshift(importDecl);
  }

  // Insert const { t } = useTranslation(); after the first function/component decl
  traverse(ast, {
    FunctionDeclaration(path) {
      if (!useTranslationInserted) {
        const stmt = t.variableDeclaration('const', [
          t.variableDeclarator(
            t.objectPattern([
              t.objectProperty(t.identifier('t'), t.identifier('t'), false, true),
            ]),
            t.callExpression(t.identifier('useTranslation'), [])
          ),
        ]);
        path.get('body').unshiftContainer('body', stmt);
        useTranslationInserted = true;
      }
    },
    VariableDeclarator(path) {
      // For arrow function components
      if (!useTranslationInserted && t.isArrowFunctionExpression(path.node.init)) {
        const funcBody = path.node.init.body;
        if (t.isBlockStatement(funcBody)) {
          const stmt = t.variableDeclaration('const', [
            t.variableDeclarator(
              t.objectPattern([
                t.objectProperty(t.identifier('t'), t.identifier('t'), false, true),
              ]),
              t.callExpression(t.identifier('useTranslation'), [])
            ),
          ]);
          funcBody.body.unshift(stmt);
          useTranslationInserted = true;
        }
      }
    },
  });

  const output = generate(ast, { retainLines: true, compact: false }, code).code;
  fs.writeFileSync(absolutePath, output, 'utf8');
  console.log('Processed', relPath);
});

// Write back translation JSON files
fs.writeFileSync(FR_JSON_PATH, JSON.stringify(frJson, null, 2), 'utf8');
LANGUAGES.forEach(lng => {
  fs.writeFileSync(langJsonPaths[lng], JSON.stringify(langJson[lng], null, 2), 'utf8');
});

console.log('Translation extraction and code update completed.');

const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');

const TARGET_FILES = [
  'src/pages/investir/creerEntreprise/creerEntreprise.tsx',
  'src/pages/investir/droitInvestisseur/droitInvestisseur.tsx',
  'src/pages/investir/droitInvestisseur/SectionNav.tsx',
  'src/pages/investir/incitation/incitation.tsx',
  'src/pages/investir/facteursProduction/facteursProduction.tsx',
  'src/components/factorGrid.tsx',
  'src/components/factorModal.tsx',
  'src/components/foncierModal.tsx',
  'src/components/mainOeuvreModal.tsx',
  'src/components/costsBySectorModal.tsx',
  'src/components/fiscaliteModal.tsx'
];

const FR_JSON_PATH = 'src/assets/translations/fr.json';
let frJson = JSON.parse(fs.readFileSync(FR_JSON_PATH, 'utf8'));

if (!frJson.investir) {
  frJson.investir = {};
}

function generateKey(text) {
  let key = text.toLowerCase()
    .replace(/[^a-z0-9]/g, '_')
    .replace(/_+/g, '_')
    .substring(0, 30);
  if (key.startsWith('_')) key = key.substring(1);
  if (key.endsWith('_')) key = key.substring(0, key.length - 1);
  return key;
}

TARGET_FILES.forEach(filePath => {
  const absolutePath = path.join(__dirname, filePath);
  if (!fs.existsSync(absolutePath)) return;
  
  const code = fs.readFileSync(absolutePath, 'utf8');
  
  let hasUseTranslationImport = false;
  
  const ast = parser.parse(code, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript']
  });

  const pageKey = path.basename(filePath, '.tsx');
  if (!frJson.investir[pageKey]) {
    frJson.investir[pageKey] = {};
  }
  const pageDict = frJson.investir[pageKey];

  traverse(ast, {
    ImportDeclaration(path) {
      if (path.node.source.value === 'react-i18next') {
        hasUseTranslationImport = true;
      }
    },
    JSXText(path) {
      const text = path.node.value.trim();
      if (text.length > 1 && /[a-zA-Z]/.test(text)) {
        const key = generateKey(text);
        if (!key) return;
        pageDict[key] = text;
        
        path.replaceWith(
          t.jsxExpressionContainer(
            t.callExpression(t.identifier('t'), [t.stringLiteral(`investir.${pageKey}.${key}`)])
          )
        );
      }
    }
  });
  
  // Basic insertion of import { useTranslation } from "react-i18next";
  let outputCode = generate(ast, {}, code).code;
  if (!hasUseTranslationImport) {
    outputCode = `import { useTranslation } from "react-i18next";\n` + outputCode;
  }
  
  // Basic insertion of const { t } = useTranslation();
  // We'll rely on regex for this to avoid complex AST injection
  outputCode = outputCode.replace(/(const [A-Z][a-zA-Z0-9_]* = \([^)]*\) => {)/, "$1\n  const { t } = useTranslation();\n");
  
  fs.writeFileSync(absolutePath, outputCode);
  console.log(`Processed ${filePath}`);
});

fs.writeFileSync(FR_JSON_PATH, JSON.stringify(frJson, null, 2));
console.log('Finished updating fr.json');

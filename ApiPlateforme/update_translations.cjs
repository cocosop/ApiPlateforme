const fs = require('fs');

// Fetch the base structure from EN
const en = JSON.parse(fs.readFileSync('./src/assets/translations/en.json', 'utf8'));
const basePotentiel = en.pages_secteurs.potentiel;

// ES Translation
const esPotentiel = JSON.parse(JSON.stringify(basePotentiel));
esPotentiel.titre = "Potencial de Inversión de Camerún";
esPotentiel.description = "Explore los sectores estratégicos que ofrecen las mejores oportunidades de inversión en Camerún. Haga clic en un sector para descubrir sus detalles.";
esPotentiel.filtres = {
  "tous": "Todos los Sectores",
  "piliers": "Pilares Prioritarios",
  "domaines": "Áreas Clave",
  "socles": "Cimientos Fundamentales"
};
esPotentiel.categories = {
  "pilier": "Pilar",
  "domaine": "Dominio",
  "socle": "Cimiento",
  "secteur_pilier": "Sector Pilar",
  "domaine_cle": "Dominio Clave",
  "secteur_socle": "Sector Cimiento"
};
esPotentiel.titres_categories = {
  "pilier": "Pilares - Sectores Prioritarios",
  "domaine": "Dominios Clave - Crecimiento Económico",
  "socle": "Cimientos - Fundamentos del Desarrollo",
  "all": "Todos los Sectores de Inversión"
};
esPotentiel.instructions = "Haga clic en un sector para explorar sus oportunidades de inversión";
esPotentiel.explorer = "Explorar este sector";
esPotentiel.modal = {
  "opportunites_investissement": "Oportunidades de inversión",
  "onglets": {
    "apercu": "Visión general",
    "opportunites": "Oportunidades",
    "defis": "Desafíos",
    "soutien": "Apoyo Gubernamental"
  },
  "apercu_titre": "Visión general del sector",
  "opportunites_titre": "Oportunidades de Inversión",
  "defis_titre": "Desafíos a Superar",
  "soutien_titre": "Apoyo Gubernamental",
  "garanties_titre": "Garantías de la Carta de Inversiones:",
  "garanties": [
    "Seguridad jurídica OHADA",
    "Libertad de empresa garantizada",
    "Exenciones fiscales y aduaneras",
    "Acuerdos bilaterales de protección",
    "Ventanilla única API Camerún"
  ]
};

// Update ES
const es = JSON.parse(fs.readFileSync('./src/assets/translations/es.json', 'utf8'));
es.pages_secteurs.potentiel = esPotentiel;
if (en.navbar && en.navbar.voir_plus) {
  es.navbar.voir_plus = "Ver más";
}
fs.writeFileSync('./src/assets/translations/es.json', JSON.stringify(es, null, 2));

// AR Translation
const arPotentiel = JSON.parse(JSON.stringify(basePotentiel));
arPotentiel.titre = "إمكانيات الاستثمار في الكاميرون";
arPotentiel.description = "استكشف القطاعات الاستراتيجية التي تقدم أفضل فرص الاستثمار في الكاميرون. انقر فوق قطاع لاكتشاف تفاصيله.";
arPotentiel.filtres = {
  "tous": "جميع القطاعات",
  "piliers": "الركائز ذات الأولوية",
  "domaines": "المجالات الرئيسية",
  "socles": "الأسس الأساسية"
};
arPotentiel.categories = {
  "pilier": "ركيزة",
  "domaine": "مجال",
  "socle": "أساس",
  "secteur_pilier": "قطاع الركيزة",
  "domaine_cle": "المجال الرئيسي",
  "secteur_socle": "قطاع الأساس"
};
arPotentiel.titres_categories = {
  "pilier": "الركائز - القطاعات ذات الأولوية",
  "domaine": "المجالات الرئيسية - النمو الاقتصادي",
  "socle": "الأسس - أسس التنمية",
  "all": "جميع قطاعات الاستثمار"
};
arPotentiel.instructions = "انقر على قطاع لاستكشاف فرص الاستثمار فيه";
arPotentiel.explorer = "استكشاف هذا القطاع";
arPotentiel.modal = {
  "opportunites_investissement": "فرص الاستثمار",
  "onglets": {
    "apercu": "نظرة عامة",
    "opportunites": "الفرص",
    "defis": "التحديات",
    "soutien": "الدعم الحكومي"
  },
  "apercu_titre": "نظرة عامة على القطاع",
  "opportunites_titre": "فرص الاستثمار",
  "defis_titre": "التحديات التي يجب التغلب عليها",
  "soutien_titre": "الدعم الحكومي",
  "garanties_titre": "ضمانات ميثاق الاستثمار:",
  "garanties": [
    "الأمن القانوني لأوهادا (OHADA)",
    "حرية العمل مضمونة",
    "الإعفاءات الضريبية والجمركية",
    "اتفاقيات الحماية الثنائية",
    "النافذة الموحدة لوكالة ترويج الاستثمار بالكاميرون"
  ]
};

// Update AR
const ar = JSON.parse(fs.readFileSync('./src/assets/translations/ar.json', 'utf8'));
ar.pages_secteurs.potentiel = arPotentiel;
if (en.navbar && en.navbar.voir_plus) {
  ar.navbar.voir_plus = "عرض المزيد";
}
fs.writeFileSync('./src/assets/translations/ar.json', JSON.stringify(ar, null, 2));

// ZH Translation
const zhPotentiel = JSON.parse(JSON.stringify(basePotentiel));
zhPotentiel.titre = "喀麦隆投资潜力";
zhPotentiel.description = "探索喀麦隆提供最佳投资机会的战略领域。点击一个领域以了解详情。";
zhPotentiel.filtres = {
  "tous": "所有领域",
  "piliers": "优先支柱",
  "domaines": "关键领域",
  "socles": "基本基础"
};
zhPotentiel.categories = {
  "pilier": "支柱",
  "domaine": "领域",
  "socle": "基础",
  "secteur_pilier": "支柱领域",
  "domaine_cle": "关键领域",
  "secteur_socle": "基础领域"
};
zhPotentiel.titres_categories = {
  "pilier": "支柱 - 优先领域",
  "domaine": "关键领域 - 经济增长",
  "socle": "基础 - 发展的基础",
  "all": "所有投资领域"
};
zhPotentiel.instructions = "点击一个领域以探索其投资机会";
zhPotentiel.explorer = "探索此领域";
zhPotentiel.modal = {
  "opportunites_investissement": "投资机会",
  "onglets": {
    "apercu": "概览",
    "opportunites": "机会",
    "defis": "挑战",
    "soutien": "政府支持"
  },
  "apercu_titre": "领域概览",
  "opportunites_titre": "投资机会",
  "defis_titre": "需要克服的挑战",
  "soutien_titre": "政府支持",
  "garanties_titre": "投资宪章的保证：",
  "garanties": [
    "OHADA的法律保障",
    "保证企业自由",
    "免税和免关税",
    "双边保护协议",
    "喀麦隆投资促进局单一窗口"
  ]
};

// Update ZH
const zh = JSON.parse(fs.readFileSync('./src/assets/translations/zh.json', 'utf8'));
zh.pages_secteurs.potentiel = zhPotentiel;
if (en.navbar && en.navbar.voir_plus) {
  zh.navbar.voir_plus = "查看更多";
}
fs.writeFileSync('./src/assets/translations/zh.json', JSON.stringify(zh, null, 2));

console.log("Successfully updated es.json, ar.json, zh.json with potentiel translations.");

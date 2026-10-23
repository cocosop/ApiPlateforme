import json
import os

base = '/home/anse/Bureau/compulec/API_site/ApiPlateforme/ApiPlateforme/src/assets/translations/'

translations = {
  "fr": {
    "fiscalite": {
      "title": "Fiscalité Camerounaise",
      "subtitle": "Aperçu complet des obligations fiscales et douanières pour les entreprises opérant au Cameroun.",
      "sys_fiscal": "Système Fiscal Complet",
      "impot_societe": "Impôt sur les Sociétés",
      "tva_standard": "TVA Standard",
      "patente": "Patente Locale (du CA)",
      "regimes": "Régimes d'Imposition",
      "regime_liberatoire": { "title": "Impôt Libératoire", "l1": "CA annuel < 10 M FCFA", "l2": "Paiement trimestriel", "l3": "Dispense de TVA et Patente" },
      "regime_simplifie": { "title": "Régime Simplifié (RSI)", "l1": "CA : 10 M - 50 M FCFA", "l2": "Comptabilité allégée OHADA", "l3": "Ne collectent pas la TVA" },
      "regime_reel": { "title": "Régime Réel", "l1": "CA > 50 M FCFA", "l2": "Comptabilité normale OHADA", "l3": "Collecte et déduction TVA" },
      "tva_droits": "TVA & Droits Spéciaux",
      "exo_tva": { "title": "Exonérations TVA", "l1": "Exportations", "l2": "Zones franches industrielles", "l3": "Services éducatifs et médicaux" },
      "droits_accise": { "title": "Droits d'Accise", "l1_k": "Boissons alcoolisées", "l1_v": "35% (+ abattement)", "l2_k": "Tabacs", "l2_v": "42.5% (+ abattement)" },
      "fisc_locale": "Fiscalité Locale & Foncière",
      "patente_licences": { "title": "Patente et Licences", "l1": "1% du CA annuel", "l2": "Alcoolisées (4x patente), Non-alcoolisées (2x patente)" },
      "taxe_fonciere": { "title": "Taxe Foncière (0.11%)", "l1": "0.11% sur terrains et bâtiments", "l2": "5-10% du loyer annuel (retenue à la source)" },
      "tarifs_douaniers": "Tarifs Douaniers CEMAC",
      "table": { "col1": "Catégorie", "col2": "Taux", "col3": "Base de calcul", "col4": "Exemples" },
      "data": {
        "d1": { "cat": "Biens de première nécessité", "base": "Valeur en douane", "ex": "Médicaments, produits de base" },
        "d2": { "cat": "Matières premières", "base": "Valeur EXW", "ex": "Acier, produits agricoles bruts" },
        "d3": { "cat": "Biens intermédiaires", "base": "Valeur CAF", "ex": "Pièces automobiles, composants" },
        "d4": { "cat": "Biens de consommation", "base": "Valeur totale", "ex": "Électronique, véhicules" }
      }
    },
    "factor_modal": {
      "intrants": {
        "def": "Définition des Intrants",
        "desc": "Les « intrants » comprennent les matières premières, consommables, accessoires, outillages et machines importés. Les produits achetés localement au Cameroun sont considérés comme sans frais d'achat supplémentaires.",
        "tarif": "Tarif Douanier",
        "tarif_desc": "Le tarif douanier sur les produits importés varie de",
        "transitaire": "Frais de Transitaire",
        "financiers": "Frais Financiers",
        "financiers_desc": "Les frais financiers relatifs aux achats varient entre"
      },
      "transport": {
        "t1": "Transport de marchandises",
        "t1_desc": "Coût moyen par tonne",
        "t2": "Transport de liquides",
        "t2_desc": "Coût moyen par litre",
        "t3": "Transport aérien",
        "t3_desc": "Coût moyen par kilogramme",
        "t4": "Transport du personnel",
        "t4_desc": "Coût mensuel moyen"
      },
      "terrain": {
        "title": "Tarification des Terrains",
        "t1": "Terrains Aménagés",
        "t2": "Terrains Bâtis",
        "desc": "Coût annuel"
      },
      "energie": {
        "title": "Tarification Énergétique",
        "carburants": "Carburants",
        "carb_l1": "Super Carburant",
        "carb_l2": "Gasoil",
        "carb_l3": "Pétrole",
        "elec": "Électricité - Basse Tension",
        "gaz": "Gaz Distribué",
        "gaz_l1": "Bouteille 12 kg",
        "gaz_l2": "Bouteille 6 kg",
        "eau": "Eau",
        "eau_l1": "Eau potable",
        "eau_l2": "Eau industrielle"
      },
      "telecom": {
        "title": "Télécommunications au Cameroun",
        "t1": "Téléphonie Fixe (CAMTEL)",
        "t1_l1": "Fixe à fixe",
        "t1_l2": "Intra-provincial",
        "t1_l3": "National",
        "t1_l4": "Fixe à mobile",
        "t2": "Téléphonie Mobile",
        "t2_l1": "National",
        "t2_l2": "SMS national",
        "t2_l3": "SMS international",
        "t2_l4": "Appels internationaux",
        "t3": "Internet & Fournisseurs",
        "t3_l1": "Faible débit",
        "t3_l2": "ADSL",
        "t3_l3": "Haut débit",
        "t3_desc": "Fournisseurs: CAMTEL, MTN, Orange, Nexttel"
      },
      "personnel": {
        "title": "Coûts du Personnel",
        "t1": "Salaire Minimum",
        "t1_desc": "Inchangé depuis 2014",
        "t2": "Salaires par Catégorie",
        "t2_l1": "Cadres",
        "t2_l2": "Employés",
        "t2_l3": "Ouvriers",
        "t3": "Cotisations Sociales",
        "t3_l1": "Familiale",
        "t3_l2": "Risques",
        "t3_l3": "Pension",
        "t4": "Zones Géographiques",
        "t4_l1": "Zone 1: Douala, Yaoundé",
        "t4_l2": "Zone 2: Autres villes"
      },
      "assurance": {
        "title": "Coûts d'Assurance",
        "t1": "Incendie Immeubles",
        "t1_l1": "Bureaux",
        "t1_l2": "Habitations mixtes",
        "t2": "Accident de Travail",
        "t2_desc": "Inclus dans charges sociales",
        "t3": "Transport",
        "t3_desc": "Véhicules utilitaires:"
      },
      "banque": {
        "title": "Frais Bancaires",
        "t1": "Intérêts Bancaires",
        "t1_l1": "Long terme",
        "t1_l2": "Moyen terme",
        "t1_l3": "Crédits",
        "t2": "Frais de Service",
        "t2_desc1": "jusqu'à",
        "t2_title2": "Dépôts à Terme",
        "t2_taux": "Taux:"
      },
      "no_data": "Informations détaillées à venir pour ce facteur."
    }
  },
  "en": {
    "fiscalite": {
      "title": "Cameroonian Taxation",
      "subtitle": "Comprehensive overview of tax and customs obligations for businesses operating in Cameroon.",
      "sys_fiscal": "Comprehensive Tax System",
      "impot_societe": "Corporate Tax",
      "tva_standard": "Standard VAT",
      "patente": "Local Business Tax",
      "regimes": "Tax Regimes",
      "regime_liberatoire": { "title": "Discharge Tax", "l1": "Annual turnover < 10M FCFA", "l2": "Quarterly payment", "l3": "Exempt from VAT and Business Tax" },
      "regime_simplifie": { "title": "Simplified Regime (RSI)", "l1": "Turnover: 10M - 50M FCFA", "l2": "Simplified OHADA accounting", "l3": "Does not collect VAT" },
      "regime_reel": { "title": "Actual Regime", "l1": "Turnover > 50M FCFA", "l2": "Standard OHADA accounting", "l3": "Collects and deducts VAT" },
      "tva_droits": "VAT & Special Duties",
      "exo_tva": { "title": "VAT Exemptions", "l1": "Exports", "l2": "Industrial free zones", "l3": "Educational and medical services" },
      "droits_accise": { "title": "Excise Duties", "l1_k": "Alcoholic beverages", "l1_v": "35% (+ allowance)", "l2_k": "Tobacco", "l2_v": "42.5% (+ allowance)" },
      "fisc_locale": "Local & Property Tax",
      "patente_licences": { "title": "Business Tax and Licenses", "l1": "1% of annual turnover", "l2": "Alcoholic (4x tax), Non-alcoholic (2x tax)" },
      "taxe_fonciere": { "title": "Property Tax (0.11%)", "l1": "0.11% on land and buildings", "l2": "5-10% of annual rent (withholding tax)" },
      "tarifs_douaniers": "CEMAC Customs Tariffs",
      "table": { "col1": "Category", "col2": "Rate", "col3": "Tax base", "col4": "Examples" },
      "data": {
        "d1": { "cat": "Basic necessities", "base": "Customs value", "ex": "Medicines, basic goods" },
        "d2": { "cat": "Raw materials", "base": "EXW value", "ex": "Steel, raw agricultural products" },
        "d3": { "cat": "Intermediate goods", "base": "CIF value", "ex": "Auto parts, components" },
        "d4": { "cat": "Consumer goods", "base": "Total value", "ex": "Electronics, vehicles" }
      }
    },
    "factor_modal": {
      "intrants": {
        "def": "Definition of Inputs",
        "desc": "« Inputs » include imported raw materials, consumables, accessories, tools, and machinery. Products purchased locally in Cameroon are considered to have no additional purchasing costs.",
        "tarif": "Customs Tariff",
        "tarif_desc": "The customs tariff on imported products ranges from",
        "transitaire": "Forwarding Fees",
        "financiers": "Financial Costs",
        "financiers_desc": "Financial costs related to purchases vary between"
      },
      "transport": {
        "t1": "Freight transport",
        "t1_desc": "Average cost per ton",
        "t2": "Liquid transport",
        "t2_desc": "Average cost per liter",
        "t3": "Air transport",
        "t3_desc": "Average cost per kilogram",
        "t4": "Personnel transport",
        "t4_desc": "Average monthly cost"
      },
      "terrain": {
        "title": "Land Pricing",
        "t1": "Developed Land",
        "t2": "Built Land",
        "desc": "Annual cost"
      },
      "energie": {
        "title": "Energy Pricing",
        "carburants": "Fuels",
        "carb_l1": "Premium Fuel",
        "carb_l2": "Diesel",
        "carb_l3": "Kerosene",
        "elec": "Electricity - Low Voltage",
        "gaz": "Distributed Gas",
        "gaz_l1": "12 kg cylinder",
        "gaz_l2": "6 kg cylinder",
        "eau": "Water",
        "eau_l1": "Drinking water",
        "eau_l2": "Industrial water"
      },
      "telecom": {
        "title": "Telecommunications in Cameroon",
        "t1": "Fixed Telephony (CAMTEL)",
        "t1_l1": "Fixed to fixed",
        "t1_l2": "Intra-provincial",
        "t1_l3": "National",
        "t1_l4": "Fixed to mobile",
        "t2": "Mobile Telephony",
        "t2_l1": "National",
        "t2_l2": "National SMS",
        "t2_l3": "International SMS",
        "t2_l4": "International calls",
        "t3": "Internet & Providers",
        "t3_l1": "Low speed",
        "t3_l2": "ADSL",
        "t3_l3": "High speed",
        "t3_desc": "Providers: CAMTEL, MTN, Orange, Nexttel"
      },
      "personnel": {
        "title": "Personnel Costs",
        "t1": "Minimum Wage",
        "t1_desc": "Unchanged since 2014",
        "t2": "Salaries by Category",
        "t2_l1": "Executives",
        "t2_l2": "Employees",
        "t2_l3": "Workers",
        "t3": "Social Contributions",
        "t3_l1": "Family",
        "t3_l2": "Risks",
        "t3_l3": "Pension",
        "t4": "Geographic Zones",
        "t4_l1": "Zone 1: Douala, Yaoundé",
        "t4_l2": "Zone 2: Other cities"
      },
      "assurance": {
        "title": "Insurance Costs",
        "t1": "Building Fire",
        "t1_l1": "Offices",
        "t1_l2": "Mixed housing",
        "t2": "Work Accident",
        "t2_desc": "Included in social charges",
        "t3": "Transport",
        "t3_desc": "Utility vehicles:"
      },
      "banque": {
        "title": "Bank Fees",
        "t1": "Bank Interests",
        "t1_l1": "Long term",
        "t1_l2": "Medium term",
        "t1_l3": "Credits",
        "t2": "Service Fees",
        "t2_desc1": "up to",
        "t2_title2": "Term Deposits",
        "t2_taux": "Rate:"
      },
      "no_data": "Detailed information coming soon for this factor."
    }
  },
  "es": {
    "fiscalite": {
      "title": "Fiscalidad Camerunesa",
      "subtitle": "Descripción general de las obligaciones fiscales y aduaneras para empresas en Camerún.",
      "sys_fiscal": "Sistema Fiscal Integral",
      "impot_societe": "Impuesto de Sociedades",
      "tva_standard": "IVA Estándar",
      "patente": "Impuesto Comercial Local",
      "regimes": "Regímenes Fiscales",
      "regime_liberatoire": { "title": "Impuesto Liberatorio", "l1": "Volumen anual < 10M FCFA", "l2": "Pago trimestral", "l3": "Exento de IVA e Impuesto Comercial" },
      "regime_simplifie": { "title": "Régimen Simplificado (RSI)", "l1": "Volumen: 10M - 50M FCFA", "l2": "Contabilidad OHADA simplificada", "l3": "No recauda IVA" },
      "regime_reel": { "title": "Régimen Real", "l1": "Volumen > 50M FCFA", "l2": "Contabilidad OHADA normal", "l3": "Recauda y deduce IVA" },
      "tva_droits": "IVA y Derechos Especiales",
      "exo_tva": { "title": "Exenciones de IVA", "l1": "Exportaciones", "l2": "Zonas francas industriales", "l3": "Servicios educativos y médicos" },
      "droits_accise": { "title": "Impuestos Especiales", "l1_k": "Bebidas alcohólicas", "l1_v": "35% (+ bonificación)", "l2_k": "Tabaco", "l2_v": "42.5% (+ bonificación)" },
      "fisc_locale": "Fiscalidad Local y de Propiedad",
      "patente_licences": { "title": "Patentes y Licencias", "l1": "1% del volumen anual", "l2": "Alcohólicas (4x patente), No alcohólicas (2x patente)" },
      "taxe_fonciere": { "title": "Impuesto a la Propiedad (0.11%)", "l1": "0.11% sobre terrenos y edificios", "l2": "5-10% del alquiler anual (retención)" },
      "tarifs_douaniers": "Aranceles Aduaneros CEMAC",
      "table": { "col1": "Categoría", "col2": "Tasa", "col3": "Base imponible", "col4": "Ejemplos" },
      "data": {
        "d1": { "cat": "Bienes de primera necesidad", "base": "Valor en aduana", "ex": "Medicamentos, productos básicos" },
        "d2": { "cat": "Materias primas", "base": "Valor EXW", "ex": "Acero, productos agrícolas crudos" },
        "d3": { "cat": "Bienes intermedios", "base": "Valor CIF", "ex": "Repuestos, componentes" },
        "d4": { "cat": "Bienes de consumo", "base": "Valor total", "ex": "Electrónica, vehículos" }
      }
    },
    "factor_modal": {
      "intrants": {
        "def": "Definición de Insumos",
        "desc": "Los « insumos » incluyen materias primas, consumibles, accesorios, herramientas y maquinaria importada. Los productos comprados localmente en Camerún no tienen costos adicionales de compra.",
        "tarif": "Arancel Aduanero",
        "tarif_desc": "El arancel aduanero sobre los productos importados varía del",
        "transitaire": "Gastos de Envío",
        "financiers": "Costos Financieros",
        "financiers_desc": "Los costos financieros relacionados con las compras varían entre"
      },
      "transport": {
        "t1": "Transporte de mercancías",
        "t1_desc": "Costo promedio por tonelada",
        "t2": "Transporte de líquidos",
        "t2_desc": "Costo promedio por litro",
        "t3": "Transporte aéreo",
        "t3_desc": "Costo promedio por kilogramo",
        "t4": "Transporte de personal",
        "t4_desc": "Costo mensual promedio"
      },
      "terrain": {
        "title": "Precios de Terrenos",
        "t1": "Terrenos Urbanizados",
        "t2": "Terrenos Edificados",
        "desc": "Costo anual"
      },
      "energie": {
        "title": "Precios de Energía",
        "carburants": "Combustibles",
        "carb_l1": "Combustible Súper",
        "carb_l2": "Diésel",
        "carb_l3": "Petróleo",
        "elec": "Electricidad - Baja Tensión",
        "gaz": "Gas Distribuido",
        "gaz_l1": "Cilindro de 12 kg",
        "gaz_l2": "Cilindro de 6 kg",
        "eau": "Agua",
        "eau_l1": "Agua potable",
        "eau_l2": "Agua industrial"
      },
      "telecom": {
        "title": "Telecomunicaciones en Camerún",
        "t1": "Telefonía Fija (CAMTEL)",
        "t1_l1": "Fijo a fijo",
        "t1_l2": "Intra-provincial",
        "t1_l3": "Nacional",
        "t1_l4": "Fijo a móvil",
        "t2": "Telefonía Móvil",
        "t2_l1": "Nacional",
        "t2_l2": "SMS nacional",
        "t2_l3": "SMS internacional",
        "t2_l4": "Llamadas internacionales",
        "t3": "Internet y Proveedores",
        "t3_l1": "Baja velocidad",
        "t3_l2": "ADSL",
        "t3_l3": "Alta velocidad",
        "t3_desc": "Proveedores: CAMTEL, MTN, Orange, Nexttel"
      },
      "personnel": {
        "title": "Costos de Personal",
        "t1": "Salario Mínimo",
        "t1_desc": "Sin cambios desde 2014",
        "t2": "Salarios por Categoría",
        "t2_l1": "Ejecutivos",
        "t2_l2": "Empleados",
        "t2_l3": "Obreros",
        "t3": "Cotizaciones Sociales",
        "t3_l1": "Familiar",
        "t3_l2": "Riesgos",
        "t3_l3": "Pensión",
        "t4": "Zonas Geográficas",
        "t4_l1": "Zona 1: Duala, Yaundé",
        "t4_l2": "Zona 2: Otras ciudades"
      },
      "assurance": {
        "title": "Costos de Seguro",
        "t1": "Incendio de Edificios",
        "t1_l1": "Oficinas",
        "t1_l2": "Vivienda mixta",
        "t2": "Accidente de Trabajo",
        "t2_desc": "Incluido en cargas sociales",
        "t3": "Transporte",
        "t3_desc": "Vehículos utilitarios:"
      },
      "banque": {
        "title": "Gastos Bancarios",
        "t1": "Intereses Bancarios",
        "t1_l1": "Largo plazo",
        "t1_l2": "Medio plazo",
        "t1_l3": "Créditos",
        "t2": "Cargos por Servicio",
        "t2_desc1": "hasta",
        "t2_title2": "Depósitos a Plazo",
        "t2_taux": "Tasa:"
      },
      "no_data": "Información detallada próximamente para este factor."
    }
  },
  "ar": {
    "fiscalite": {
      "title": "الضرائب في الكاميرون",
      "subtitle": "نظرة عامة شاملة على الالتزامات الضريبية والجمركية للشركات.",
      "sys_fiscal": "نظام ضريبي شامل",
      "impot_societe": "ضريبة الشركات",
      "tva_standard": "ضريبة القيمة المضافة القياسية",
      "patente": "الضريبة التجارية المحلية",
      "regimes": "الأنظمة الضريبية",
      "regime_liberatoire": { "title": "الضريبة الإبرائية", "l1": "الدوران السنوي < 10م فرنك", "l2": "دفع ربع سنوي", "l3": "معفى من ضريبة القيمة المضافة" },
      "regime_simplifie": { "title": "النظام المبسط", "l1": "الدوران: 10م - 50م فرنك", "l2": "محاسبة مبسطة", "l3": "لا تحصل ضريبة القيمة المضافة" },
      "regime_reel": { "title": "النظام الفعلي", "l1": "الدوران > 50م فرنك", "l2": "محاسبة عادية", "l3": "تحصل وتخصم الضريبة" },
      "tva_droits": "الضرائب والرسوم الخاصة",
      "exo_tva": { "title": "الإعفاءات", "l1": "الصادرات", "l2": "المناطق الحرة الصناعية", "l3": "الخدمات التعليمية والطبية" },
      "droits_accise": { "title": "رسوم الإنتاج", "l1_k": "المشروبات الكحولية", "l1_v": "35% (+ بدل)", "l2_k": "التبغ", "l2_v": "42.5% (+ بدل)" },
      "fisc_locale": "الضرائب المحلية والعقارية",
      "patente_licences": { "title": "براءات الاختراع والتراخيص", "l1": "1% من الدوران السنوي", "l2": "كحولية (4x)، غير كحولية (2x)" },
      "taxe_fonciere": { "title": "ضريبة الملكية (0.11%)", "l1": "0.11% على الأراضي والمباني", "l2": "5-10% من الإيجار السنوي" },
      "tarifs_douaniers": "التعريفات الجمركية CEMAC",
      "table": { "col1": "الفئة", "col2": "المعدل", "col3": "أساس الضريبة", "col4": "أمثلة" },
      "data": {
        "d1": { "cat": "الضروريات الأساسية", "base": "القيمة الجمركية", "ex": "الأدوية والسلع الأساسية" },
        "d2": { "cat": "المواد الخام", "base": "قيمة EXW", "ex": "الصلب، المنتجات الزراعية" },
        "d3": { "cat": "السلع الوسيطة", "base": "قيمة CIF", "ex": "قطع غيار السيارات" },
        "d4": { "cat": "السلع الاستهلاكية", "base": "القيمة الإجمالية", "ex": "الإلكترونيات، السيارات" }
      }
    },
    "factor_modal": {
      "intrants": {
        "def": "تعريف المدخلات",
        "desc": "تشمل «المدخلات» المواد الخام والمعدات المستوردة. تعتبر المنتجات المشتراة محليًا بدون تكاليف إضافية.",
        "tarif": "التعريفة الجمركية",
        "tarif_desc": "تتراوح التعريفة الجمركية على المنتجات المستوردة من",
        "transitaire": "رسوم الشحن",
        "financiers": "التكاليف المالية",
        "financiers_desc": "تختلف التكاليف المالية المتعلقة بالمشتريات بين"
      },
      "transport": {
        "t1": "نقل البضائع",
        "t1_desc": "متوسط التكلفة للطن",
        "t2": "نقل السوائل",
        "t2_desc": "متوسط التكلفة للتر",
        "t3": "النقل الجوي",
        "t3_desc": "متوسط التكلفة للكيلوغرام",
        "t4": "نقل الأفراد",
        "t4_desc": "متوسط التكلفة الشهرية"
      },
      "terrain": {
        "title": "تسعير الأراضي",
        "t1": "أراضٍ مطورة",
        "t2": "أراضٍ مبنية",
        "desc": "التكلفة السنوية"
      },
      "energie": {
        "title": "تسعير الطاقة",
        "carburants": "الوقود",
        "carb_l1": "وقود ممتاز",
        "carb_l2": "ديزل",
        "carb_l3": "بترول",
        "elec": "الكهرباء - الجهد المنخفض",
        "gaz": "الغاز الموزع",
        "gaz_l1": "أسطوانة 12 كغ",
        "gaz_l2": "أسطوانة 6 كغ",
        "eau": "الماء",
        "eau_l1": "مياه الشرب",
        "eau_l2": "المياه الصناعية"
      },
      "telecom": {
        "title": "الاتصالات في الكاميرون",
        "t1": "الهاتف الثابت (CAMTEL)",
        "t1_l1": "ثابت إلى ثابت",
        "t1_l2": "داخل المقاطعة",
        "t1_l3": "وطني",
        "t1_l4": "ثابت إلى محمول",
        "t2": "الهاتف المحمول",
        "t2_l1": "وطني",
        "t2_l2": "رسائل نصية وطنية",
        "t2_l3": "رسائل دولية",
        "t2_l4": "مكالمات دولية",
        "t3": "الإنترنت والمزودون",
        "t3_l1": "سرعة منخفضة",
        "t3_l2": "ADSL",
        "t3_l3": "سرعة عالية",
        "t3_desc": "المزودون: CAMTEL, MTN, Orange, Nexttel"
      },
      "personnel": {
        "title": "تكاليف الموظفين",
        "t1": "الحد الأدنى للأجور",
        "t1_desc": "لم يتغير منذ 2014",
        "t2": "الرواتب حسب الفئة",
        "t2_l1": "المدراء",
        "t2_l2": "الموظفون",
        "t2_l3": "العمال",
        "t3": "المساهمات الاجتماعية",
        "t3_l1": "عائلي",
        "t3_l2": "مخاطر",
        "t3_l3": "معاش",
        "t4": "المناطق الجغرافية",
        "t4_l1": "المنطقة 1: دوالا، ياوندي",
        "t4_l2": "المنطقة 2: مدن أخرى"
      },
      "assurance": {
        "title": "تكاليف التأمين",
        "t1": "حريق المباني",
        "t1_l1": "المكاتب",
        "t1_l2": "مساكن مختلطة",
        "t2": "حوادث العمل",
        "t2_desc": "مشمول في الرسوم الاجتماعية",
        "t3": "النقل",
        "t3_desc": "مركبات المنفعة:"
      },
      "banque": {
        "title": "الرسوم المصرفية",
        "t1": "الفوائد المصرفية",
        "t1_l1": "طويل الأجل",
        "t1_l2": "متوسط الأجل",
        "t1_l3": "الائتمانات",
        "t2": "رسوم الخدمة",
        "t2_desc1": "حتى",
        "t2_title2": "الودائع لأجل",
        "t2_taux": "المعدل:"
      },
      "no_data": "معلومات مفصلة قريبا."
    }
  },
  "zh": {
    "fiscalite": {
      "title": "喀麦隆税收",
      "subtitle": "喀麦隆企业税务和海关义务的全面概述。",
      "sys_fiscal": "综合税收体系",
      "impot_societe": "企业所得税",
      "tva_standard": "标准增值税",
      "patente": "地方营业税",
      "regimes": "税收制度",
      "regime_liberatoire": { "title": "免税", "l1": "年营业额 < 10M FCFA", "l2": "按季付款", "l3": "免征增值税和营业税" },
      "regime_simplifie": { "title": "简易制度", "l1": "营业额: 10M - 50M FCFA", "l2": "简化的OHADA会计", "l3": "不征收增值税" },
      "regime_reel": { "title": "实际制度", "l1": "营业额 > 50M FCFA", "l2": "标准OHADA会计", "l3": "征收和扣除增值税" },
      "tva_droits": "增值税和特别关税",
      "exo_tva": { "title": "增值税豁免", "l1": "出口", "l2": "工业自由区", "l3": "教育和医疗服务" },
      "droits_accise": { "title": "消费税", "l1_k": "酒精饮料", "l1_v": "35% (+ 免税额)", "l2_k": "烟草", "l2_v": "42.5% (+ 免税额)" },
      "fisc_locale": "地方及财产税",
      "patente_licences": { "title": "营业税和许可证", "l1": "年营业额的1%", "l2": "含酒精 (4倍税), 不含酒精 (2倍税)" },
      "taxe_fonciere": { "title": "财产税 (0.11%)", "l1": "土地和建筑物0.11%", "l2": "年租金的5-10% (预扣)" },
      "tarifs_douaniers": "CEMAC海关关税",
      "table": { "col1": "类别", "col2": "税率", "col3": "计税基础", "col4": "示例" },
      "data": {
        "d1": { "cat": "基本必需品", "base": "海关价值", "ex": "药品、基本商品" },
        "d2": { "cat": "原材料", "base": "EXW价值", "ex": "钢铁、未加工农产品" },
        "d3": { "cat": "中间产品", "base": "CIF价值", "ex": "汽车零部件" },
        "d4": { "cat": "消费品", "base": "总价值", "ex": "电子产品、车辆" }
      }
    },
    "factor_modal": {
      "intrants": {
        "def": "投入品的定义",
        "desc": "“投入品”包括进口原材料、消耗品、配件、工具和机械。在喀麦隆本地购买的产品不计算额外费用。",
        "tarif": "海关关税",
        "tarif_desc": "进口产品的海关关税从",
        "transitaire": "货运代理费",
        "financiers": "财务成本",
        "financiers_desc": "与购买相关的财务成本介于"
      },
      "transport": {
        "t1": "货物运输",
        "t1_desc": "每吨平均成本",
        "t2": "液体运输",
        "t2_desc": "每升平均成本",
        "t3": "航空运输",
        "t3_desc": "每公斤平均成本",
        "t4": "人员运输",
        "t4_desc": "平均月成本"
      },
      "terrain": {
        "title": "土地定价",
        "t1": "已开发土地",
        "t2": "已建土地",
        "desc": "年度成本"
      },
      "energie": {
        "title": "能源定价",
        "carburants": "燃料",
        "carb_l1": "优质燃料",
        "carb_l2": "柴油",
        "carb_l3": "煤油",
        "elec": "电力 - 低压",
        "gaz": "分布式燃气",
        "gaz_l1": "12公斤气瓶",
        "gaz_l2": "6公斤气瓶",
        "eau": "水",
        "eau_l1": "饮用水",
        "eau_l2": "工业用水"
      },
      "telecom": {
        "title": "喀麦隆电信",
        "t1": "固定电话 (CAMTEL)",
        "t1_l1": "固话对固话",
        "t1_l2": "省内",
        "t1_l3": "全国",
        "t1_l4": "固话对手机",
        "t2": "移动电话",
        "t2_l1": "全国",
        "t2_l2": "国内短信",
        "t2_l3": "国际短信",
        "t2_l4": "国际长途",
        "t3": "互联网与供应商",
        "t3_l1": "低速",
        "t3_l2": "ADSL",
        "t3_l3": "高速",
        "t3_desc": "供应商: CAMTEL, MTN, Orange, Nexttel"
      },
      "personnel": {
        "title": "人员成本",
        "t1": "最低工资",
        "t1_desc": "自2014年起未变",
        "t2": "按类别划分的工资",
        "t2_l1": "高管",
        "t2_l2": "员工",
        "t2_l3": "工人",
        "t3": "社会保障",
        "t3_l1": "家庭",
        "t3_l2": "风险",
        "t3_l3": "养老金",
        "t4": "地理区域",
        "t4_l1": "1区: 杜阿拉，雅温得",
        "t4_l2": "2区: 其他城市"
      },
      "assurance": {
        "title": "保险成本",
        "t1": "建筑火灾",
        "t1_l1": "办公室",
        "t1_l2": "混合住宅",
        "t2": "工伤事故",
        "t2_desc": "包含在社会费用中",
        "t3": "运输",
        "t3_desc": "商用车:"
      },
      "banque": {
        "title": "银行费用",
        "t1": "银行利息",
        "t1_l1": "长期",
        "t1_l2": "中期",
        "t1_l3": "信用贷",
        "t2": "服务费",
        "t2_desc1": "高达",
        "t2_title2": "定期存款",
        "t2_taux": "利率:"
      },
      "no_data": "此因素的详细信息即将推出。"
    }
  }
}

for lang, data_to_add in translations.items():
    path = f"{base}{lang}.json"
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        if 'pages_secteurs' not in data:
            data['pages_secteurs'] = {}
        if 'facteurs_production' not in data['pages_secteurs']:
            data['pages_secteurs']['facteurs_production'] = {}
        data['pages_secteurs']['facteurs_production']['fiscalite'] = data_to_add['fiscalite']
        data['pages_secteurs']['facteurs_production']['factor_modal'] = data_to_add['factor_modal']
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

print("Translations written for fiscaliteModal and factorModal.")

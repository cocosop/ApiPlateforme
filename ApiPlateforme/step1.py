import json
import os

base = '/home/anse/Bureau/compulec/API_site/ApiPlateforme/ApiPlateforme/src/assets/translations/'

translations = {
  "fr": {
    "grid": {
      "title": "Coûts de Production Essentiels",
      "subtitle": "Découvrez les principaux postes de dépenses en un coup d'œil",
      "factors": {
        "intrants": { "name": "Intrants", "desc": "Matières premières et équipements importés", "label": "Tarif douanier", "stat1": "50k FCFA min", "stat2": "940k FCFA max", "stat3": "Frais transitaire" },
        "transport": { "name": "Transport", "desc": "Déplacement marchandises et personnel", "label": "Coût par unité", "stat1": "Ferroviaire: 40 FCFA/T", "stat2": "Routier: 90 FCFA/T", "stat3": "Aérien: 2600 FCFA/Kg" },
        "terrain": { "name": "Terrain", "desc": "Acquisition ou location terrain industriel", "label": "Par m²/an", "stat1": "Aménagés: 300 FCFA", "stat2": "Bâtis: 1000-3000 FCFA", "stat3": "Zone franche: 720 FCFA" },
        "energie": { "name": "Énergie", "desc": "Électricité, carburant et autres sources", "label": "Par kWh", "stat1": "Gasoil: 828 FCFA/L", "stat2": "Super: 840 FCFA/L", "stat3": "Gaz 12kg: 6500 FCFA" },
        "telecom": { "name": "Télécommunication", "desc": "Services téléphonie et internet", "label": "Par minute", "stat1": "ADSL: 20-30k FCFA/mois", "stat2": "Haut débit: 12-300k FCFA", "stat3": "SMS: 50 FCFA" },
        "personnel": { "name": "Personnel", "desc": "Salaires et charges sociales", "label": "SMIG mensuel", "stat1": "Cadres: 267-457k FCFA", "stat2": "Employés: 129-325k FCFA", "stat3": "Cotisations: 17.15%" },
        "assurance": { "name": "Assurance", "desc": "Couverture des risques d'activité", "label": "Taux de base", "stat1": "Bureaux: 0.70‰", "stat2": "Habitations: 0.75‰", "stat3": "Transport: 121-150k FCFA" },
        "banque": { "name": "Frais Bancaires", "desc": "Services bancaires et financement", "label": "Taux d'intérêt", "stat1": "Long terme: 7-10%", "stat2": "Moyen terme: 11-17%", "stat3": "Dépôt: 3.5%" }
      },
      "see_details": "Voir détails",
      "quick_summary": "Aperçu Rapide des Coûts",
      "quick_desc": "Les chiffres clés à retenir pour votre budget",
      "salary": "Salaire minimum",
      "transport": "Transport/tonne",
      "elec": "Électricité/kWh",
      "land": "Terrain/m²/an"
    },
    "costs_sector": {
      "title": "Coûts par Secteur d'Activité",
      "subtitle": "Analyse comparative des coûts de production par secteur clé, basée sur les données officielles de 2023.",
      "total_cost": "Coût Total Estimé",
      "source": "Source",
      "sectors": {
        "agro": { "name": "Agro-industrie", "f1": "Main-d'œuvre", "f2": "Semences", "f3": "Machines" },
        "energie": { "name": "Énergie", "f1": "Main-d'œuvre", "f2": "Maintenance", "f3": "Carburant" },
        "numerique": { "name": "Numérique", "f1": "Main-d'œuvre", "f2": "Infrastructure", "f3": "Logiciels" },
        "bois": { "name": "Bois-Forêts", "f1": "Exploitation", "f2": "Transport", "f3": "Transformation" },
        "textile": { "name": "Textile/Confection", "f1": "Matières", "f2": "Machines", "f3": "Énergie" },
        "hydro": { "name": "Hydrocarbures", "f1": "Exploration", "f2": "Raffinage", "f3": "Transport" },
        "pharma": { "name": "Pharmacie", "f1": "Matières", "f2": "Équipements", "f3": "R&D" },
        "mines": { "name": "Mines/Métallurgie", "f1": "Exploitation", "f2": "Transformation", "f3": "Transport" }
      }
    }
  },
  "en": {
    "grid": {
      "title": "Essential Production Costs",
      "subtitle": "Discover the main expenditure items at a glance",
      "factors": {
        "intrants": { "name": "Inputs", "desc": "Imported raw materials and equipment", "label": "Customs tariff", "stat1": "50k FCFA min", "stat2": "940k FCFA max", "stat3": "Forwarding fees" },
        "transport": { "name": "Transport", "desc": "Movement of goods and personnel", "label": "Cost per unit", "stat1": "Rail: 40 FCFA/T", "stat2": "Road: 90 FCFA/T", "stat3": "Air: 2600 FCFA/Kg" },
        "terrain": { "name": "Land", "desc": "Acquisition or lease of industrial land", "label": "Per m²/year", "stat1": "Developed: 300 FCFA", "stat2": "Built: 1000-3000 FCFA", "stat3": "Free zone: 720 FCFA" },
        "energie": { "name": "Energy", "desc": "Electricity, fuel and other sources", "label": "Per kWh", "stat1": "Diesel: 828 FCFA/L", "stat2": "Premium: 840 FCFA/L", "stat3": "Gas 12kg: 6500 FCFA" },
        "telecom": { "name": "Telecommunication", "desc": "Telephone and internet services", "label": "Per minute", "stat1": "ADSL: 20-30k FCFA/month", "stat2": "Broadband: 12-300k FCFA", "stat3": "SMS: 50 FCFA" },
        "personnel": { "name": "Personnel", "desc": "Salaries and social charges", "label": "Monthly minimum wage", "stat1": "Executives: 267-457k FCFA", "stat2": "Employees: 129-325k FCFA", "stat3": "Contributions: 17.15%" },
        "assurance": { "name": "Insurance", "desc": "Coverage of business risks", "label": "Base rate", "stat1": "Offices: 0.70‰", "stat2": "Housing: 0.75‰", "stat3": "Transport: 121-150k FCFA" },
        "banque": { "name": "Bank Fees", "desc": "Banking services and financing", "label": "Interest rate", "stat1": "Long term: 7-10%", "stat2": "Medium term: 11-17%", "stat3": "Deposit: 3.5%" }
      },
      "see_details": "See details",
      "quick_summary": "Quick Cost Summary",
      "quick_desc": "Key figures to remember for your budget",
      "salary": "Minimum wage",
      "transport": "Transport/ton",
      "elec": "Electricity/kWh",
      "land": "Land/m²/year"
    },
    "costs_sector": {
      "title": "Costs by Activity Sector",
      "subtitle": "Comparative analysis of production costs by key sector, based on official 2023 data.",
      "total_cost": "Estimated Total Cost",
      "source": "Source",
      "sectors": {
        "agro": { "name": "Agro-industry", "f1": "Workforce", "f2": "Seeds", "f3": "Machinery" },
        "energie": { "name": "Energy", "f1": "Workforce", "f2": "Maintenance", "f3": "Fuel" },
        "numerique": { "name": "Digital", "f1": "Workforce", "f2": "Infrastructure", "f3": "Software" },
        "bois": { "name": "Wood-Forestry", "f1": "Exploitation", "f2": "Transport", "f3": "Processing" },
        "textile": { "name": "Textile/Apparel", "f1": "Materials", "f2": "Machinery", "f3": "Energy" },
        "hydro": { "name": "Hydrocarbons", "f1": "Exploration", "f2": "Refining", "f3": "Transport" },
        "pharma": { "name": "Pharmacy", "f1": "Materials", "f2": "Equipment", "f3": "R&D" },
        "mines": { "name": "Mining/Metallurgy", "f1": "Exploitation", "f2": "Processing", "f3": "Transport" }
      }
    }
  },
  "es": {
    "grid": {
      "title": "Costos de Producción Esenciales",
      "subtitle": "Descubra los principales rubros de gasto de un vistazo",
      "factors": {
        "intrants": { "name": "Insumos", "desc": "Materias primas y equipos importados", "label": "Arancel aduanero", "stat1": "50k FCFA mín", "stat2": "940k FCFA máx", "stat3": "Gastos de envío" },
        "transport": { "name": "Transporte", "desc": "Movimiento de mercancías y personal", "label": "Costo por unidad", "stat1": "Ferrocarril: 40 FCFA/T", "stat2": "Carretera: 90 FCFA/T", "stat3": "Aéreo: 2600 FCFA/Kg" },
        "terrain": { "name": "Terreno", "desc": "Adquisición o alquiler de terreno industrial", "label": "Por m²/año", "stat1": "Urbanizado: 300 FCFA", "stat2": "Construido: 1000-3000 FCFA", "stat3": "Zona franca: 720 FCFA" },
        "energie": { "name": "Energía", "desc": "Electricidad, combustible y otras fuentes", "label": "Por kWh", "stat1": "Diésel: 828 FCFA/L", "stat2": "Súper: 840 FCFA/L", "stat3": "Gas 12kg: 6500 FCFA" },
        "telecom": { "name": "Telecomunicaciones", "desc": "Servicios de telefonía e internet", "label": "Por minuto", "stat1": "ADSL: 20-30k FCFA/mes", "stat2": "Banda ancha: 12-300k FCFA", "stat3": "SMS: 50 FCFA" },
        "personnel": { "name": "Personal", "desc": "Salarios y cargas sociales", "label": "Salario mínimo mensual", "stat1": "Ejecutivos: 267-457k FCFA", "stat2": "Empleados: 129-325k FCFA", "stat3": "Cotizaciones: 17.15%" },
        "assurance": { "name": "Seguro", "desc": "Cobertura de riesgos comerciales", "label": "Tasa base", "stat1": "Oficinas: 0.70‰", "stat2": "Viviendas: 0.75‰", "stat3": "Transporte: 121-150k FCFA" },
        "banque": { "name": "Gastos Bancarios", "desc": "Servicios bancarios y financiación", "label": "Tasa de interés", "stat1": "Largo plazo: 7-10%", "stat2": "Medio plazo: 11-17%", "stat3": "Depósito: 3.5%" }
      },
      "see_details": "Ver detalles",
      "quick_summary": "Resumen Rápido de Costos",
      "quick_desc": "Cifras clave para recordar para su presupuesto",
      "salary": "Salario mínimo",
      "transport": "Transporte/tonelada",
      "elec": "Electricidad/kWh",
      "land": "Terreno/m²/año"
    },
    "costs_sector": {
      "title": "Costos por Sector de Actividad",
      "subtitle": "Análisis comparativo de los costos de producción por sector clave, basado en datos oficiales de 2023.",
      "total_cost": "Costo Total Estimado",
      "source": "Fuente",
      "sectors": {
        "agro": { "name": "Agroindustria", "f1": "Mano de obra", "f2": "Semillas", "f3": "Maquinaria" },
        "energie": { "name": "Energía", "f1": "Mano de obra", "f2": "Mantenimiento", "f3": "Combustible" },
        "numerique": { "name": "Digital", "f1": "Mano de obra", "f2": "Infraestructura", "f3": "Software" },
        "bois": { "name": "Madera-Silvicultura", "f1": "Explotación", "f2": "Transporte", "f3": "Procesamiento" },
        "textile": { "name": "Textil/Confección", "f1": "Materiales", "f2": "Maquinaria", "f3": "Energía" },
        "hydro": { "name": "Hidrocarburos", "f1": "Exploración", "f2": "Refinación", "f3": "Transporte" },
        "pharma": { "name": "Farmacia", "f1": "Materiales", "f2": "Equipos", "f3": "I+D" },
        "mines": { "name": "Minería/Metalurgia", "f1": "Explotación", "f2": "Procesamiento", "f3": "Transporte" }
      }
    }
  },
  "ar": {
    "grid": {
      "title": "تكاليف الإنتاج الأساسية",
      "subtitle": "اكتشف بنود الإنفاق الرئيسية في لمحة",
      "factors": {
        "intrants": { "name": "المدخلات", "desc": "المواد الخام والمعدات المستوردة", "label": "التعريفة الجمركية", "stat1": "50 ألف فرنك كحد أدنى", "stat2": "940 ألف فرنك كحد أقصى", "stat3": "رسوم الشحن" },
        "transport": { "name": "النقل", "desc": "حركة البضائع والأفراد", "label": "التكلفة لكل وحدة", "stat1": "السكة الحديد: 40 فرنك/طن", "stat2": "الطرق: 90 فرنك/طن", "stat3": "الجوي: 2600 فرنك/كغ" },
        "terrain": { "name": "الأراضي", "desc": "اكتساب أو استئجار أرض صناعية", "label": "لكل م²/سنة", "stat1": "مطورة: 300 فرنك", "stat2": "مبنية: 1000-3000 فرنك", "stat3": "منطقة حرة: 720 فرنك" },
        "energie": { "name": "الطاقة", "desc": "الكهرباء والوقود ومصادر أخرى", "label": "لكل كيلوواط ساعة", "stat1": "الديزل: 828 فرنك/لتر", "stat2": "سوبر: 840 فرنك/لتر", "stat3": "غاز 12كغ: 6500 فرنك" },
        "telecom": { "name": "الاتصالات", "desc": "خدمات الهاتف والإنترنت", "label": "في الدقيقة", "stat1": "ADSL: 20-30 ألف/شهر", "stat2": "النطاق العريض: 12-300 ألف", "stat3": "رسائل: 50 فرنك" },
        "personnel": { "name": "شؤون الموظفين", "desc": "الرواتب والرسوم الاجتماعية", "label": "الحد الأدنى للأجور", "stat1": "المدراء: 267-457 ألف", "stat2": "الموظفون: 129-325 ألف", "stat3": "المساهمات: 17.15%" },
        "assurance": { "name": "التأمين", "desc": "تغطية مخاطر الأعمال", "label": "السعر الأساسي", "stat1": "المكاتب: 0.70‰", "stat2": "الإسكان: 0.75‰", "stat3": "النقل: 121-150 ألف" },
        "banque": { "name": "الرسوم المصرفية", "desc": "الخدمات المصرفية والتمويل", "label": "سعر الفائدة", "stat1": "طويل الأجل: 7-10%", "stat2": "متوسط الأجل: 11-17%", "stat3": "الإيداع: 3.5%" }
      },
      "see_details": "رؤية التفاصيل",
      "quick_summary": "ملخص سريع للتكاليف",
      "quick_desc": "الأرقام الرئيسية لتذكرها في ميزانيتك",
      "salary": "الحد الأدنى للأجور",
      "transport": "النقل / طن",
      "elec": "الكهرباء / كيلوواط",
      "land": "الأرض / م² / سنة"
    },
    "costs_sector": {
      "title": "التكاليف حسب قطاع النشاط",
      "subtitle": "تحليل مقارن لتكاليف الإنتاج حسب القطاع الرئيسي، بناءً على البيانات الرسمية لعام 2023.",
      "total_cost": "إجمالي التكلفة المقدرة",
      "source": "المصدر",
      "sectors": {
        "agro": { "name": "الصناعة الزراعية", "f1": "القوى العاملة", "f2": "البذور", "f3": "الآلات" },
        "energie": { "name": "الطاقة", "f1": "القوى العاملة", "f2": "الصيانة", "f3": "الوقود" },
        "numerique": { "name": "الرقمية", "f1": "القوى العاملة", "f2": "البنية التحتية", "f3": "البرمجيات" },
        "bois": { "name": "الخشب والغابات", "f1": "الاستغلال", "f2": "النقل", "f3": "المعالجة" },
        "textile": { "name": "النسيج / الملابس", "f1": "المواد", "f2": "الآلات", "f3": "الطاقة" },
        "hydro": { "name": "الهيدروكربونات", "f1": "الاستكشاف", "f2": "التكرير", "f3": "النقل" },
        "pharma": { "name": "صيدلة", "f1": "المواد", "f2": "المعدات", "f3": "البحث والتطوير" },
        "mines": { "name": "التعدين / التعدين", "f1": "الاستغلال", "f2": "المعالجة", "f3": "النقل" }
      }
    }
  },
  "zh": {
    "grid": {
      "title": "基本生产成本",
      "subtitle": "一目了然地发现主要支出项目",
      "factors": {
        "intrants": { "name": "投入品", "desc": "进口原材料和设备", "label": "海关关税", "stat1": "最低50k FCFA", "stat2": "最高940k FCFA", "stat3": "货运代理费" },
        "transport": { "name": "运输", "desc": "货物和人员的移动", "label": "单位成本", "stat1": "铁路: 40 FCFA/T", "stat2": "公路: 90 FCFA/T", "stat3": "航空: 2600 FCFA/Kg" },
        "terrain": { "name": "土地", "desc": "工业用地的购买或租赁", "label": "每平方米/年", "stat1": "已开发: 300 FCFA", "stat2": "已建: 1000-3000 FCFA", "stat3": "免税区: 720 FCFA" },
        "energie": { "name": "能源", "desc": "电力、燃料和其他能源", "label": "每千瓦时", "stat1": "柴油: 828 FCFA/L", "stat2": "优质汽油: 840 FCFA/L", "stat3": "12kg气瓶: 6500 FCFA" },
        "telecom": { "name": "电信", "desc": "电话和互联网服务", "label": "每分钟", "stat1": "ADSL: 20-30k FCFA/月", "stat2": "宽带: 12-300k FCFA", "stat3": "短信: 50 FCFA" },
        "personnel": { "name": "人员", "desc": "工资和社会费用", "label": "每月最低工资", "stat1": "高管: 267-457k FCFA", "stat2": "员工: 129-325k FCFA", "stat3": "社会保障: 17.15%" },
        "assurance": { "name": "保险", "desc": "商业风险覆盖", "label": "基础费率", "stat1": "办公室: 0.70‰", "stat2": "住宅: 0.75‰", "stat3": "运输: 121-150k FCFA" },
        "banque": { "name": "银行费用", "desc": "银行服务和融资", "label": "利率", "stat1": "长期: 7-10%", "stat2": "中期: 11-17%", "stat3": "存款: 3.5%" }
      },
      "see_details": "查看详情",
      "quick_summary": "快速成本摘要",
      "quick_desc": "预算中需要记住的关键数字",
      "salary": "最低工资",
      "transport": "运输/吨",
      "elec": "电力/千瓦时",
      "land": "土地/平方米/年"
    },
    "costs_sector": {
      "title": "各行业成本",
      "subtitle": "基于2023年官方数据的各主要行业生产成本比较分析。",
      "total_cost": "预估总成本",
      "source": "来源",
      "sectors": {
        "agro": { "name": "农用工业", "f1": "劳动力", "f2": "种子", "f3": "机械" },
        "energie": { "name": "能源", "f1": "劳动力", "f2": "维护", "f3": "燃料" },
        "numerique": { "name": "数字产业", "f1": "劳动力", "f2": "基础设施", "f3": "软件" },
        "bois": { "name": "木材-林业", "f1": "开采", "f2": "运输", "f3": "加工" },
        "textile": { "name": "纺织/服装", "f1": "材料", "f2": "机械", "f3": "能源" },
        "hydro": { "name": "碳氢化合物", "f1": "勘探", "f2": "炼油", "f3": "运输" },
        "pharma": { "name": "药业", "f1": "材料", "f2": "设备", "f3": "研发" },
        "mines": { "name": "采矿/冶金", "f1": "开采", "f2": "加工", "f3": "运输" }
      }
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
        data['pages_secteurs']['facteurs_production']['grid'] = data_to_add['grid']
        data['pages_secteurs']['facteurs_production']['costs_sector'] = data_to_add['costs_sector']
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

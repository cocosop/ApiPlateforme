import json, os

base = '/home/anse/Bureau/compulec/API_site/ApiPlateforme/ApiPlateforme/src/assets/translations/'

# ============================================================
# Clés manquantes pour les 5 langues
# ============================================================
new_keys = {
  "fr": {
    "main_oeuvre": {
      "subtitle": "Profitez d'une main d'œuvre abondante, jeune et qualifiée, avec un taux d'alphabétisation de 71,2 % et des coûts salariaux très compétitifs en Afrique Centrale.",
      "item1": "Main-d'œuvre jeune et dynamique (60 % de la population < 25 ans)",
      "item2": "Taux d'alphabétisation : 71,2 %",
      "item3": "Coûts salariaux parmi les plus compétitifs d'Afrique Centrale",
      "button": "Voir les détails",
      "stat1_value": "27M+",
      "stat1_label": "Population active",
      "stat2_value": "36 270",
      "stat2_label": "SMIG mensuel (FCFA)",
      "stat3_value": "71.2%",
      "stat3_label": "Taux d'alphabétisation",
      "stat4_value": "48h",
      "stat4_label": "Durée légale/semaine"
    },
    "foncier": {
      "subtitle": "L'accès à la terre est facilité par des procédures simplifiées et des coûts attractifs. Profitez de zones aménagées pour un déploiement rapide.",
      "item1": "Zones industrielles aménagées à Douala et Yaoundé",
      "item2": "Titre foncier sécurisé et garanti par l'État",
      "item3": "Procédures d'immatriculation modernisées depuis 2005",
      "button": "Voir les détails",
      "stat1_value": "800-2500",
      "stat1_label": "FCFA / m² / an (terrain aménagé)",
      "stat2_value": "475 M km²",
      "stat2_label": "Superficie totale disponible"
    },
    "fiscalite": {
      "subtitle": "Un cadre fiscal moderne offrant de nombreuses exonérations douanières et des abattements spécifiques pour dynamiser vos projets d'investissement.",
      "item1": "Impôt sur les sociétés : 33 %",
      "item2": "TVA standard : 19,25 %",
      "item3": "Exonérations en zones franches industrielles",
      "button": "Voir les détails",
      "stat1_value": "33%",
      "stat1_label": "Impôt sur les sociétés",
      "stat2_value": "19.25%",
      "stat2_label": "TVA standard",
      "stat3_value": "0%",
      "stat3_label": "IS en Zone Franche"
    },
    "couts_secteur": {
      "title": "Coûts par Secteur d'Activité",
      "subtitle": "Analysez en détail les coûts de production, d'équipement et d'infrastructure répartis sur les principaux secteurs stratégiques du pays.",
      "tag1": "Agro-industrie",
      "tag2": "Énergie",
      "tag3": "BTP",
      "tag4": "Services",
      "tag5": "Mines",
      "button": "Consulter les coûts sectoriels"
    },
    "grid": {
      "title": "Coûts de Base de Production",
      "subtitle": "Vue synthétique des principaux postes de coûts pour investir au Cameroun."
    }
  },
  "en": {
    "main_oeuvre": {
      "subtitle": "Benefit from an abundant, young and qualified workforce, with a literacy rate of 71.2% and very competitive labor costs in Central Africa.",
      "item1": "Young and dynamic workforce (60% of population under 25)",
      "item2": "Literacy rate: 71.2%",
      "item3": "Among the most competitive labor costs in Central Africa",
      "button": "View details",
      "stat1_value": "27M+",
      "stat1_label": "Active population",
      "stat2_value": "36,270",
      "stat2_label": "Monthly minimum wage (FCFA)",
      "stat3_value": "71.2%",
      "stat3_label": "Literacy rate",
      "stat4_value": "48h",
      "stat4_label": "Legal working hours/week"
    },
    "foncier": {
      "subtitle": "Land access is made easier by simplified procedures and attractive costs. Take advantage of developed zones for rapid deployment.",
      "item1": "Developed industrial zones in Douala and Yaoundé",
      "item2": "Secure land title guaranteed by the State",
      "item3": "Modernized registration procedures since 2005",
      "button": "View details",
      "stat1_value": "800-2500",
      "stat1_label": "FCFA / m² / year (serviced land)",
      "stat2_value": "475 M km²",
      "stat2_label": "Total available area"
    },
    "fiscalite": {
      "subtitle": "A modern tax framework offering numerous customs exemptions and specific allowances to boost your investment projects.",
      "item1": "Corporate tax: 33%",
      "item2": "Standard VAT: 19.25%",
      "item3": "Exemptions in industrial free zones",
      "button": "View details",
      "stat1_value": "33%",
      "stat1_label": "Corporate income tax",
      "stat2_value": "19.25%",
      "stat2_label": "Standard VAT",
      "stat3_value": "0%",
      "stat3_label": "CIT in Free Zone"
    },
    "couts_secteur": {
      "title": "Costs by Sector",
      "subtitle": "Analyze in detail the production, equipment and infrastructure costs across the country's main strategic sectors.",
      "tag1": "Agro-industry",
      "tag2": "Energy",
      "tag3": "Construction",
      "tag4": "Services",
      "tag5": "Mining",
      "button": "View sectoral costs"
    },
    "grid": {
      "title": "Basic Production Costs",
      "subtitle": "A summary of the main cost items for investing in Cameroon."
    }
  },
  "es": {
    "main_oeuvre": {
      "subtitle": "Benefíciese de una mano de obra abundante, joven y cualificada, con una tasa de alfabetización del 71,2 % y costes salariales muy competitivos en África Central.",
      "item1": "Mano de obra joven y dinámica (el 60 % de la población tiene menos de 25 años)",
      "item2": "Tasa de alfabetización: 71,2 %",
      "item3": "Costes laborales entre los más competitivos de África Central",
      "button": "Ver detalles",
      "stat1_value": "27M+",
      "stat1_label": "Población activa",
      "stat2_value": "36 270",
      "stat2_label": "Salario mínimo mensual (FCFA)",
      "stat3_value": "71.2%",
      "stat3_label": "Tasa de alfabetización",
      "stat4_value": "48h",
      "stat4_label": "Horas legales/semana"
    },
    "foncier": {
      "subtitle": "El acceso a la tierra se facilita mediante procedimientos simplificados y costes atractivos. Aproveche las zonas acondicionadas para un despliegue rápido.",
      "item1": "Zonas industriales habilitadas en Douala y Yaundé",
      "item2": "Título de propiedad seguro y garantizado por el Estado",
      "item3": "Procedimientos de registro modernizados desde 2005",
      "button": "Ver detalles",
      "stat1_value": "800-2500",
      "stat1_label": "FCFA / m² / año (terreno habilitado)",
      "stat2_value": "475 M km²",
      "stat2_label": "Superficie total disponible"
    },
    "fiscalite": {
      "subtitle": "Un marco fiscal moderno que ofrece numerosas exenciones aduaneras y deducciones específicas para dinamizar sus proyectos de inversión.",
      "item1": "Impuesto sobre sociedades: 33 %",
      "item2": "IVA estándar: 19,25 %",
      "item3": "Exenciones en zonas francas industriales",
      "button": "Ver detalles",
      "stat1_value": "33%",
      "stat1_label": "Impuesto sobre sociedades",
      "stat2_value": "19.25%",
      "stat2_label": "IVA estándar",
      "stat3_value": "0%",
      "stat3_label": "IS en Zona Franca"
    },
    "couts_secteur": {
      "title": "Costes por Sector de Actividad",
      "subtitle": "Analice en detalle los costes de producción, equipamiento e infraestructura distribuidos en los principales sectores estratégicos del país.",
      "tag1": "Agroindustria",
      "tag2": "Energía",
      "tag3": "Construcción",
      "tag4": "Servicios",
      "tag5": "Minería",
      "button": "Consultar costes sectoriales"
    },
    "grid": {
      "title": "Costes Básicos de Producción",
      "subtitle": "Resumen de los principales costes para invertir en Camerún."
    }
  },
  "ar": {
    "main_oeuvre": {
      "subtitle": "استفد من قوة عاملة وفيرة وشابة ومؤهلة، بمعدل محو أمية 71.2٪ وتكاليف عمالة تنافسية للغاية في أفريقيا الوسطى.",
      "item1": "قوة عاملة شابة وديناميكية (60٪ من السكان دون 25 عامًا)",
      "item2": "معدل محو الأمية: 71.2٪",
      "item3": "تكاليف العمالة من بين الأكثر تنافسية في أفريقيا الوسطى",
      "button": "عرض التفاصيل",
      "stat1_value": "+27م",
      "stat1_label": "السكان النشطون",
      "stat2_value": "36,270",
      "stat2_label": "الحد الأدنى للأجر الشهري (فرنك أفريقي)",
      "stat3_value": "71.2%",
      "stat3_label": "معدل محو الأمية",
      "stat4_value": "48 ساعة",
      "stat4_label": "ساعات العمل القانونية/الأسبوع"
    },
    "foncier": {
      "subtitle": "يتم تيسير الوصول إلى الأراضي من خلال إجراءات مبسطة وتكاليف جذابة. استفد من المناطق المهيأة للنشر السريع.",
      "item1": "مناطق صناعية مجهزة في دوالا ويوندي",
      "item2": "سند ملكية آمن مضمون من قبل الدولة",
      "item3": "إجراءات تسجيل محدثة منذ 2005",
      "button": "عرض التفاصيل",
      "stat1_value": "800-2500",
      "stat1_label": "فرنك أفريقي / م² / سنة (أرض مجهزة)",
      "stat2_value": "475 مليون كم²",
      "stat2_label": "إجمالي المساحة المتاحة"
    },
    "fiscalite": {
      "subtitle": "إطار ضريبي حديث يوفر العديد من الإعفاءات الجمركية والبدلات المحددة لتعزيز مشاريعك الاستثمارية.",
      "item1": "ضريبة الشركات: 33٪",
      "item2": "ضريبة القيمة المضافة القياسية: 19.25٪",
      "item3": "إعفاءات في المناطق الصناعية الحرة",
      "button": "عرض التفاصيل",
      "stat1_value": "33%",
      "stat1_label": "ضريبة دخل الشركات",
      "stat2_value": "19.25%",
      "stat2_label": "ضريبة القيمة المضافة القياسية",
      "stat3_value": "0%",
      "stat3_label": "ضريبة الشركات في المنطقة الحرة"
    },
    "couts_secteur": {
      "title": "التكاليف حسب القطاع",
      "subtitle": "حلل بالتفصيل تكاليف الإنتاج والتجهيز والبنية التحتية الموزعة على القطاعات الاستراتيجية الرئيسية في البلاد.",
      "tag1": "الصناعة الزراعية",
      "tag2": "الطاقة",
      "tag3": "البناء",
      "tag4": "الخدمات",
      "tag5": "التعدين",
      "button": "الاطلاع على التكاليف القطاعية"
    },
    "grid": {
      "title": "تكاليف الإنتاج الأساسية",
      "subtitle": "نظرة عامة على بنود التكلفة الرئيسية للاستثمار في الكاميرون."
    }
  },
  "zh": {
    "main_oeuvre": {
      "subtitle": "受益于充裕、年轻且合格的劳动力，识字率为71.2%，在中非的劳动力成本极具竞争力。",
      "item1": "年轻有活力的劳动力（60%人口年龄在25岁以下）",
      "item2": "识字率：71.2%",
      "item3": "劳动力成本是中非地区最具竞争力之一",
      "button": "查看详情",
      "stat1_value": "2700万+",
      "stat1_label": "活跃人口",
      "stat2_value": "36,270",
      "stat2_label": "月最低工资（非郎）",
      "stat3_value": "71.2%",
      "stat3_label": "识字率",
      "stat4_value": "48小时",
      "stat4_label": "法定工作时间/周"
    },
    "foncier": {
      "subtitle": "通过简化程序和有吸引力的成本，促进土地获取。利用已开发区域快速部署。",
      "item1": "杜阿拉和雅温得的工业开发区",
      "item2": "国家保障的安全土地证书",
      "item3": "2005年以来现代化的登记程序",
      "button": "查看详情",
      "stat1_value": "800-2500",
      "stat1_label": "非郎/平方米/年（配套土地）",
      "stat2_value": "4.75亿平方公里",
      "stat2_label": "可用总面积"
    },
    "fiscalite": {
      "subtitle": "现代税收框架，提供众多海关豁免和特定扣除，以推动您的投资项目。",
      "item1": "企业所得税：33%",
      "item2": "标准增值税：19.25%",
      "item3": "工业自由贸易区豁免",
      "button": "查看详情",
      "stat1_value": "33%",
      "stat1_label": "企业所得税",
      "stat2_value": "19.25%",
      "stat2_label": "标准增值税",
      "stat3_value": "0%",
      "stat3_label": "自由贸易区企业税"
    },
    "couts_secteur": {
      "title": "各行业成本",
      "subtitle": "详细分析分布在国家主要战略部门的生产、设备和基础设施成本。",
      "tag1": "农业工业",
      "tag2": "能源",
      "tag3": "建筑",
      "tag4": "服务",
      "tag5": "采矿",
      "button": "查看行业成本"
    },
    "grid": {
      "title": "基本生产成本",
      "subtitle": "在喀麦隆投资的主要成本项目概览。"
    }
  }
}

for lang, sections in new_keys.items():
    path = f"{base}{lang}.json"
    if not os.path.exists(path):
        print(f"MISSING: {path}")
        continue
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    fp = data.setdefault('pages_secteurs', {}).setdefault('facteurs_production', {})
    for section, keys in sections.items():
        if section not in fp:
            fp[section] = {}
        fp[section].update(keys)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Updated {lang}.json")

print("All done.")

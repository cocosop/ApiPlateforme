import json, os

base = '/home/anse/Bureau/compulec/API_site/ApiPlateforme/ApiPlateforme/src/assets/translations/'

grid_keys = {
  "fr": {
    "see_details": "Voir les détails",
    "quick_summary": "Avantages Compétitifs du Cameroun",
    "quick_desc": "Les principaux indicateurs qui rendent le Cameroun attractif pour les investisseurs.",
    "salary": "Salaire minimum mensuel",
    "transport": "Coût transport / tonne",
    "elec": "Électricité / kWh",
    "land": "Terrain / m² / an",
    "factors": {
      "intrants": {
        "name": "Intrants",
        "desc": "Matières premières, équipements et composants importés avec tarifs douaniers CEMAC.",
        "label": "Tarif douanier CEMAC",
        "stat1": "0% – Biens de nécessité",
        "stat2": "5% – Matières premières",
        "stat3": "30% – Biens de conso."
      },
      "transport": {
        "name": "Transport",
        "desc": "Coûts de transport routier, ferroviaire, maritime et aérien au Cameroun.",
        "label": "Route / tonne",
        "stat1": "40-80 FCFA/t (route)",
        "stat2": "Yaoundé–Douala 240 km",
        "stat3": "Port de Douala actif"
      },
      "terrain": {
        "name": "Terrain",
        "desc": "Coûts d'acquisition et de location de terrains industriels aménagés ou bâtis.",
        "label": "par m² / an",
        "stat1": "Zones aménagées disponibles",
        "stat2": "Titre foncier sécurisé",
        "stat3": "Douala-Bonabéri: 800 FCFA"
      },
      "energie": {
        "name": "Énergie",
        "desc": "Tarification électricité, carburants, gaz et eau pour les entreprises industrielles.",
        "label": "Électricité / kWh",
        "stat1": "Basse tension: 50-99 FCFA",
        "stat2": "Gasoil: 575 FCFA/L",
        "stat3": "Gaz 12kg: 6 500 FCFA"
      },
      "telecom": {
        "name": "Télécommunications",
        "desc": "Tarifs téléphonie, internet et données pour entreprises au Cameroun.",
        "label": "Mobile / min",
        "stat1": "Opérateurs: MTN, Orange",
        "stat2": "ADSL: 25k–150k FCFA/mois",
        "stat3": "Couverture 4G nationale"
      },
      "personnel": {
        "name": "Personnel",
        "desc": "Salaires, cotisations sociales et conditions de travail réglementés par le Code du Travail.",
        "label": "SMIG mensuel",
        "stat1": "Cadres: 300k–1,5M FCFA",
        "stat2": "Employés: 100k–300k FCFA",
        "stat3": "Ouvriers: 36k–100k FCFA"
      },
      "assurance": {
        "name": "Assurance",
        "desc": "Taux d'assurance incendie, transport et accident du travail pour les entreprises.",
        "label": "Incendie immeubles",
        "stat1": "Bureaux: 0,70‰",
        "stat2": "Habitations: 1,50‰",
        "stat3": "Accident travail inclus"
      },
      "banque": {
        "name": "Banque & Crédit",
        "desc": "Taux d'intérêt et frais bancaires pratiqués par les établissements financiers au Cameroun.",
        "label": "Intérêts bancaires",
        "stat1": "Long terme: 7–10%",
        "stat2": "Moyen terme: 10–14%",
        "stat3": "Crédits: 14–17%"
      }
    }
  },
  "en": {
    "see_details": "View details",
    "quick_summary": "Cameroon's Competitive Advantages",
    "quick_desc": "Key indicators that make Cameroon attractive for investors.",
    "salary": "Monthly minimum wage",
    "transport": "Transport cost / tonne",
    "elec": "Electricity / kWh",
    "land": "Land / m² / year",
    "factors": {
      "intrants": {
        "name": "Inputs",
        "desc": "Raw materials, equipment and imported components with CEMAC customs duties.",
        "label": "CEMAC customs duty",
        "stat1": "0% – Essential goods",
        "stat2": "5% – Raw materials",
        "stat3": "30% – Consumer goods"
      },
      "transport": {
        "name": "Transport",
        "desc": "Road, rail, maritime and air transport costs in Cameroon.",
        "label": "Road / tonne",
        "stat1": "40-80 FCFA/t (road)",
        "stat2": "Yaoundé–Douala 240 km",
        "stat3": "Active Port of Douala"
      },
      "terrain": {
        "name": "Land",
        "desc": "Purchase and rental costs for serviced or built industrial land.",
        "label": "per m² / year",
        "stat1": "Serviced zones available",
        "stat2": "Secured land title",
        "stat3": "Douala-Bonabéri: 800 FCFA"
      },
      "energie": {
        "name": "Energy",
        "desc": "Electricity, fuel, gas and water pricing for industrial companies.",
        "label": "Electricity / kWh",
        "stat1": "Low voltage: 50-99 FCFA",
        "stat2": "Diesel: 575 FCFA/L",
        "stat3": "Gas 12kg: 6,500 FCFA"
      },
      "telecom": {
        "name": "Telecommunications",
        "desc": "Phone, internet and data rates for businesses in Cameroon.",
        "label": "Mobile / min",
        "stat1": "Operators: MTN, Orange",
        "stat2": "ADSL: 25k–150k FCFA/month",
        "stat3": "National 4G coverage"
      },
      "personnel": {
        "name": "Personnel",
        "desc": "Salaries, social contributions and working conditions regulated by the Labour Code.",
        "label": "Monthly minimum wage",
        "stat1": "Managers: 300k–1.5M FCFA",
        "stat2": "Employees: 100k–300k FCFA",
        "stat3": "Workers: 36k–100k FCFA"
      },
      "assurance": {
        "name": "Insurance",
        "desc": "Fire, transport and work accident insurance rates for businesses.",
        "label": "Building fire insurance",
        "stat1": "Offices: 0.70‰",
        "stat2": "Residences: 1.50‰",
        "stat3": "Work accidents included"
      },
      "banque": {
        "name": "Banking & Credit",
        "desc": "Interest rates and bank charges from financial institutions in Cameroon.",
        "label": "Bank interest",
        "stat1": "Long term: 7–10%",
        "stat2": "Medium term: 10–14%",
        "stat3": "Credits: 14–17%"
      }
    }
  },
  "es": {
    "see_details": "Ver detalles",
    "quick_summary": "Ventajas Competitivas de Camerún",
    "quick_desc": "Indicadores clave que hacen a Camerún atractivo para los inversores.",
    "salary": "Salario mínimo mensual",
    "transport": "Coste transporte / tonelada",
    "elec": "Electricidad / kWh",
    "land": "Terreno / m² / año",
    "factors": {
      "intrants": {
        "name": "Insumos",
        "desc": "Materias primas, equipos y componentes importados con aranceles aduaneros CEMAC.",
        "label": "Arancel aduanero CEMAC",
        "stat1": "0% – Bienes de primera necesidad",
        "stat2": "5% – Materias primas",
        "stat3": "30% – Bienes de consumo"
      },
      "transport": {
        "name": "Transporte",
        "desc": "Costes de transporte por carretera, ferroviario, marítimo y aéreo en Camerún.",
        "label": "Carretera / tonelada",
        "stat1": "40-80 FCFA/t (carretera)",
        "stat2": "Yaundé–Douala 240 km",
        "stat3": "Puerto activo de Douala"
      },
      "terrain": {
        "name": "Terreno",
        "desc": "Costes de adquisición y alquiler de terrenos industriales habilitados o edificados.",
        "label": "por m² / año",
        "stat1": "Zonas habilitadas disponibles",
        "stat2": "Título de propiedad seguro",
        "stat3": "Douala-Bonabéri: 800 FCFA"
      },
      "energie": {
        "name": "Energía",
        "desc": "Tarifación de electricidad, combustibles, gas y agua para empresas industriales.",
        "label": "Electricidad / kWh",
        "stat1": "Baja tensión: 50-99 FCFA",
        "stat2": "Gasóleo: 575 FCFA/L",
        "stat3": "Gas 12kg: 6.500 FCFA"
      },
      "telecom": {
        "name": "Telecomunicaciones",
        "desc": "Tarifas de telefonía, internet y datos para empresas en Camerún.",
        "label": "Móvil / min",
        "stat1": "Operadores: MTN, Orange",
        "stat2": "ADSL: 25k–150k FCFA/mes",
        "stat3": "Cobertura 4G nacional"
      },
      "personnel": {
        "name": "Personal",
        "desc": "Salarios, cotizaciones sociales y condiciones de trabajo reguladas por el Código Laboral.",
        "label": "Salario mínimo mensual",
        "stat1": "Directivos: 300k–1,5M FCFA",
        "stat2": "Empleados: 100k–300k FCFA",
        "stat3": "Obreros: 36k–100k FCFA"
      },
      "assurance": {
        "name": "Seguro",
        "desc": "Tasas de seguro de incendios, transporte y accidentes laborales para empresas.",
        "label": "Incendio de edificios",
        "stat1": "Oficinas: 0,70‰",
        "stat2": "Viviendas: 1,50‰",
        "stat3": "Accidentes laborales incluidos"
      },
      "banque": {
        "name": "Banca y Crédito",
        "desc": "Tipos de interés y comisiones bancarias de las entidades financieras en Camerún.",
        "label": "Intereses bancarios",
        "stat1": "Largo plazo: 7–10%",
        "stat2": "Medio plazo: 10–14%",
        "stat3": "Créditos: 14–17%"
      }
    }
  },
  "ar": {
    "see_details": "عرض التفاصيل",
    "quick_summary": "المزايا التنافسية للكاميرون",
    "quick_desc": "المؤشرات الرئيسية التي تجعل الكاميرون جاذبة للمستثمرين.",
    "salary": "الحد الأدنى للأجر الشهري",
    "transport": "تكلفة النقل / طن",
    "elec": "الكهرباء / كيلوواط ساعة",
    "land": "أرض / م² / سنة",
    "factors": {
      "intrants": {
        "name": "المدخلات",
        "desc": "المواد الخام والمعدات والمكونات المستوردة برسوم جمارك CEMAC.",
        "label": "رسوم جمارك CEMAC",
        "stat1": "0% – السلع الأساسية",
        "stat2": "5% – المواد الخام",
        "stat3": "30% – السلع الاستهلاكية"
      },
      "transport": {
        "name": "النقل",
        "desc": "تكاليف النقل البري والسككي والبحري والجوي في الكاميرون.",
        "label": "طريق / طن",
        "stat1": "40-80 فرنك/طن (طريق)",
        "stat2": "ياوندي–دوالا 240 كم",
        "stat3": "ميناء دوالا نشط"
      },
      "terrain": {
        "name": "الأرض",
        "desc": "تكاليف الاقتناء والإيجار للأراضي الصناعية المجهزة أو المبنية.",
        "label": "لكل م² / سنة",
        "stat1": "مناطق مجهزة متاحة",
        "stat2": "سند ملكية آمن",
        "stat3": "دوالا-بونابيري: 800 فرنك"
      },
      "energie": {
        "name": "الطاقة",
        "desc": "تسعير الكهرباء والوقود والغاز والمياه للشركات الصناعية.",
        "label": "الكهرباء / كيلوواط ساعة",
        "stat1": "جهد منخفض: 50-99 فرنك",
        "stat2": "وقود: 575 فرنك/لتر",
        "stat3": "غاز 12كغ: 6500 فرنك"
      },
      "telecom": {
        "name": "الاتصالات",
        "desc": "تعرفات الهاتف والإنترنت والبيانات للشركات في الكاميرون.",
        "label": "موبايل / دقيقة",
        "stat1": "مشغلون: MTN، Orange",
        "stat2": "ADSL: 25k–150k فرنك/شهر",
        "stat3": "تغطية 4G وطنية"
      },
      "personnel": {
        "name": "الموظفون",
        "desc": "الرواتب والاشتراكات الاجتماعية وظروف العمل المنظمة بموجب قانون العمل.",
        "label": "الحد الأدنى للأجر الشهري",
        "stat1": "المديرون: 300k–1.5M فرنك",
        "stat2": "الموظفون: 100k–300k فرنك",
        "stat3": "العمال: 36k–100k فرنك"
      },
      "assurance": {
        "name": "التأمين",
        "desc": "معدلات التأمين ضد الحريق والنقل وإصابات العمل للشركات.",
        "label": "تأمين حريق المباني",
        "stat1": "مكاتب: 0.70‰",
        "stat2": "سكن: 1.50‰",
        "stat3": "إصابات العمل مشمولة"
      },
      "banque": {
        "name": "البنوك والائتمان",
        "desc": "أسعار الفائدة والرسوم المصرفية للمؤسسات المالية في الكاميرون.",
        "label": "فوائد بنكية",
        "stat1": "طويل الأمد: 7–10%",
        "stat2": "متوسط الأمد: 10–14%",
        "stat3": "قروض: 14–17%"
      }
    }
  },
  "zh": {
    "see_details": "查看详情",
    "quick_summary": "喀麦隆的竞争优势",
    "quick_desc": "使喀麦隆对投资者具有吸引力的关键指标。",
    "salary": "月最低工资",
    "transport": "运输成本/吨",
    "elec": "电力/千瓦时",
    "land": "土地/平方米/年",
    "factors": {
      "intrants": {
        "name": "投入品",
        "desc": "受CEMAC关税约束的进口原材料、设备和零部件。",
        "label": "CEMAC关税",
        "stat1": "0% – 基本商品",
        "stat2": "5% – 原材料",
        "stat3": "30% – 消费品"
      },
      "transport": {
        "name": "运输",
        "desc": "喀麦隆的公路、铁路、海运和空运运输成本。",
        "label": "公路/吨",
        "stat1": "40-80非郎/吨（公路）",
        "stat2": "雅温得–杜阿拉240公里",
        "stat3": "杜阿拉港活跃"
      },
      "terrain": {
        "name": "土地",
        "desc": "工业配套或已建土地的购置和租赁成本。",
        "label": "每平方米/年",
        "stat1": "可用配套区域",
        "stat2": "安全土地证书",
        "stat3": "杜阿拉-博纳贝里：800非郎"
      },
      "energie": {
        "name": "能源",
        "desc": "工业企业的电力、燃料、天然气和水价格。",
        "label": "电力/千瓦时",
        "stat1": "低压：50-99非郎",
        "stat2": "柴油：575非郎/升",
        "stat3": "12公斤气：6500非郎"
      },
      "telecom": {
        "name": "电信",
        "desc": "喀麦隆企业的电话、互联网和数据费率。",
        "label": "移动/分钟",
        "stat1": "运营商：MTN、Orange",
        "stat2": "ADSL：25k–150k非郎/月",
        "stat3": "全国4G覆盖"
      },
      "personnel": {
        "name": "人员",
        "desc": "劳动法规定的工资、社会缴款和工作条件。",
        "label": "月最低工资",
        "stat1": "管理人员：30万–150万非郎",
        "stat2": "员工：10万–30万非郎",
        "stat3": "工人：3.6万–10万非郎"
      },
      "assurance": {
        "name": "保险",
        "desc": "企业的火灾、运输和工伤保险费率。",
        "label": "建筑火灾保险",
        "stat1": "办公室：0.70‰",
        "stat2": "住宅：1.50‰",
        "stat3": "含工伤事故"
      },
      "banque": {
        "name": "银行与信贷",
        "desc": "喀麦隆金融机构的利率和银行手续费。",
        "label": "银行利率",
        "stat1": "长期：7–10%",
        "stat2": "中期：10–14%",
        "stat3": "信贷：14–17%"
      }
    }
  }
}

for lang, data_to_add in grid_keys.items():
    path = f"{base}{lang}.json"
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    fp = data.setdefault('pages_secteurs', {}).setdefault('facteurs_production', {})
    grid = fp.setdefault('grid', {})
    grid.update(data_to_add)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Updated grid keys in {lang}.json")

print("All grid keys done.")

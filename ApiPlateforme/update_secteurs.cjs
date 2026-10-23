const fs = require('fs');
const path = require('path');

const esSecteurs = {
  agro: {
    nom: "Agricultura y Agroindustria",
    description: "Sector prioritario que representa una parte importante del PIB. Camerún cuenta con tierras cultivables fértiles y un clima favorable para diversos cultivos de exportación y la transformación agroalimentaria.",
    opportunites: [
      "Transformación agroalimentaria (prioridad gubernamental)",
      "Producción y transformación de aceite de palma",
      "Desarrollo de avicultura moderna",
      "Cultivos de exportación (cacao, café, banano)",
      "Cadenas de valor integradas y agronegocios"
    ],
    defis: [
      "Infraestructura rural por modernizar",
      "Acceso al financiamiento agrícola",
      "Complejidad de la tenencia de la tierra"
    ],
    soutien: "Regímenes específicos de incentivos fiscales para la agricultura según la Carta de Inversiones"
  },
  industry: {
    nom: "Industria Extractiva",
    description: "Sector clave que incluye petróleo, gas y minería. Importantes recursos de gas en alta mar y potencial minero con proyectos de explotación en desarrollo.",
    opportunites: [
      "Explotación minera (bauxita, hierro, oro)",
      "Recursos de gas en alta mar en desarrollo",
      "Refinación y procesamiento de petróleo",
      "Servicios petroleros y de gas",
      "Geología y exploración minera"
    ],
    defis: [
      "Se requieren fuertes inversiones",
      "Regulación ambiental",
      "Infraestructura de transporte"
    ],
    soutien: "Código minero atractivo y facilidades para la industria extractiva"
  },
  digital: {
    nom: "Digital y Fintech",
    description: "Sector en rápida expansión con el desarrollo de telecomunicaciones (4G, fibra óptica) y digitalización de servicios. Importantes oportunidades en fintech.",
    opportunites: [
      "Digitalización de servicios (prioridad nacional)",
      "Desarrollo de fintech",
      "Soluciones de pago móvil",
      "Comercio electrónico y plataformas digitales",
      "Servicios digitales para empresas"
    ],
    defis: [
      "Infraestructura de conectividad en áreas rurales",
      "Habilidades digitales",
      "Regulación fintech"
    ],
    soutien: "Estrategia nacional de digitalización e incentivos para el sector digital"
  },
  energy: {
    nom: "Energías Renovables",
    description: "Producción de energía dominada por la hidroelectricidad con un fuerte potencial solar sin explotar. Proyectos de energía solar e hidroeléctrica identificados como oportunidades principales.",
    opportunites: [
      "Proyectos de energía solar (alto potencial)",
      "Desarrollo hidroeléctrico",
      "Minirredes para electrificación rural",
      "Eficiencia energética industrial",
      "Almacenamiento y distribución de energía"
    ],
    defis: [
      "Financiamiento de proyectos energéticos",
      "Red de distribución",
      "Mantenimiento técnico"
    ],
    soutien: "Regímenes de incentivos específicos para la energía según la Carta"
  },
  housing: {
    nom: "Vivienda Social",
    description: "Desarrollo de viviendas sociales identificado como una oportunidad clave con una tasa de urbanización superior al 58% y una demanda creciente.",
    opportunites: [
      "Desarrollo de viviendas sociales (prioridad)",
      "Construcción de viviendas asequibles",
      "Materiales de construcción locales",
      "Desarrollo urbano y fraccionamientos",
      "Financiamiento inmobiliario innovador"
    ],
    defis: [
      "Acceso a suelo urbano",
      "Financiamiento de los hogares",
      "Normas de construcción"
    ],
    soutien: "Regímenes específicos para viviendas sociales con incentivos fiscales"
  },
  forest: {
    nom: "Madera y Bosques",
    description: "Importante cobertura forestal con potencial para procesamiento local y explotación sostenible.",
    opportunites: [
      "Procesamiento local de madera",
      "Certificación forestal sostenible",
      "Productos derivados (muebles, construcción)",
      "Ecoturismo forestal",
      "Proyectos de carbono y conservación"
    ],
    defis: [
      "Tala ilegal",
      "Trazabilidad de productos",
      "Infraestructura forestal"
    ],
    soutien: "Ley forestal que favorece el procesamiento local"
  },
  textile: {
    nom: "Textil y Confección",
    description: "Industria con potencial de reactivación gracias a los acuerdos comerciales internacionales.",
    opportunites: [
      "Confección para exportación",
      "Cadena de algodón integrada",
      "Textiles técnicos",
      "Moda y diseño africano",
      "Artículos de cuero"
    ],
    defis: [
      "Competencia internacional",
      "Costos de energía",
      "Formación técnica"
    ],
    soutien: "Zonas económicas especiales para textiles"
  },
  oil: {
    nom: "Hidrocarburos",
    description: "Sector maduro con oportunidades en refinación y servicios petroleros.",
    opportunites: [
      "Refinación y productos petrolíferos",
      "Servicios petroleros en alta mar",
      "Almacenamiento y distribución",
      "Mantenimiento industrial",
      "Logística petrolera"
    ],
    defis: [
      "Volatilidad de precios",
      "Regulación ambiental",
      "Fuertes inversiones"
    ],
    soutien: "Código petrolero atractivo para inversores"
  },
  chemical: {
    nom: "Química y Farmacia",
    description: "Sector estratégico para la salud pública y la industria química.",
    opportunites: [
      "Producción de medicamentos genéricos",
      "Fitofarmacia tradicional",
      "Fertilizantes agrícolas",
      "Cosméticos naturales",
      "Química verde"
    ],
    defis: [
      "Regulación de salud",
      "Cualificación del personal",
      "Competencia de importaciones"
    ],
    soutien: "Política farmacéutica nacional"
  },
  construction: {
    nom: "Construcción y Obras Públicas",
    description: "Sector en crecimiento con proyectos de infraestructura y vivienda.",
    opportunites: [
      "Construcción de infraestructura pública",
      "Vivienda y bienes raíces",
      "Carreteras y puentes",
      "Edificios industriales",
      "Obras portuarias"
    ],
    defis: [
      "Acceso a materiales",
      "Financiamiento de proyectos",
      "Habilidades técnicas"
    ],
    soutien: "Plan maestro vial y programas de infraestructura"
  },
  transport: {
    nom: "Transporte y Logística",
    description: "Infraestructura vital para el comercio exterior. Posición estratégica como hub de África Central con el 80% del tráfico a través del Puerto de Douala.",
    opportunites: [
      "Modernización del Puerto de Douala (80% del tráfico)",
      "Desarrollo del Puerto de aguas profundas de Kribi",
      "Corredores Douala-N'Djamena y Douala-Bangui",
      "Logística digital y Ventanilla Única",
      "Transporte ferroviario modernizado"
    ],
    defis: [
      "Congestión portuaria en Douala",
      "Altos tiempos de tránsito",
      "Altos costos logísticos"
    ],
    soutien: "Ventanilla Única para Operaciones de Comercio Exterior (GUCE)"
  },
  finance: {
    nom: "Servicios Financieros",
    description: "Sistema financiero en desarrollo con la moneda Franco CFA vinculada al euro, ofreciendo estabilidad monetaria.",
    opportunites: [
      "Servicios bancarios digitales",
      "Microfinanzas e inclusión financiera",
      "Seguros agrícolas y climáticos",
      "Financiamiento de pymes",
      "Mercado de capitales CEMAC"
    ],
    defis: [
      "Acceso a crédito",
      "Altas tasas de interés",
      "Garantías bancarias"
    ],
    soutien: "Reformas del sistema financiero CEMAC y estabilidad del Franco CFA"
  },
  infrastructure: {
    nom: "Infraestructura Básica",
    description: "Desarrollo de infraestructuras: red vial (Plan maestro), modernización ferroviaria, telecomunicaciones (4G, fibra óptica).",
    opportunites: [
      "Red vial (Plan maestro vial)",
      "Modernización ferroviaria Yaundé-Douala-Ngaoundéré",
      "Infraestructura de telecomunicaciones (4G, fibra)",
      "Suministro de agua y saneamiento",
      "Infraestructura aeroportuaria"
    ],
    defis: [
      "Financiamiento de proyectos",
      "Mantenimiento de infraestructura",
      "Normas técnicas"
    ],
    soutien: "Plan maestro vial y programas de inversión pública"
  }
};

const arSecteurs = {
  agro: {
    nom: "الزراعة والصناعة الزراعية",
    description: "قطاع ذو أولوية يمثل جزءًا مهمًا من الناتج المحلي الإجمالي. تتمتع الكاميرون بأراضي زراعية خصبة ومناخ ملائم لمختلف المحاصيل التصديرية وتجهيز الأغذية.",
    opportunites: [
      "تجهيز الأغذية الزراعية (أولوية حكومية)",
      "إنتاج ومعالجة زيت النخيل",
      "تطوير تربية الدواجن الحديثة",
      "المحاصيل التصديرية (الكاكاو، القهوة، الموز)",
      "سلاسل القيمة المتكاملة والأعمال الزراعية"
    ],
    defis: [
      "البنية التحتية الريفية بحاجة إلى التحديث",
      "الوصول إلى التمويل الزراعي",
      "تعقيد حيازة الأراضي"
    ],
    soutien: "أنظمة حوافز ضريبية محددة للزراعة وفقًا لميثاق الاستثمار"
  },
  industry: {
    nom: "الصناعات الاستخراجية",
    description: "قطاع رئيسي يشمل النفط والغاز والتعدين. موارد غاز بحرية مهمة وإمكانات تعدين مع مشاريع استغلال قيد التطوير.",
    opportunites: [
      "استغلال التعدين (البوكسيت، الحديد، الذهب)",
      "موارد الغاز البحرية قيد التطوير",
      "تكرير النفط ومعالجته",
      "خدمات النفط والغاز",
      "الجيولوجيا واستكشاف التعدين"
    ],
    defis: [
      "يتطلب استثمارات ضخمة",
      "التنظيم البيئي",
      "البنية التحتية للنقل"
    ],
    soutien: "قانون تعدين جذاب وتسهيلات للصناعة الاستخراجية"
  },
  digital: {
    nom: "الرقمية والتكنولوجيا المالية",
    description: "قطاع سريع التوسع مع تطور الاتصالات (4G ، الألياف البصرية) ورقمنة الخدمات. فرص مهمة في التكنولوجيا المالية.",
    opportunites: [
      "رقمنة الخدمات (أولوية وطنية)",
      "تطوير التكنولوجيا المالية",
      "حلول الدفع عبر الهاتف المحمول",
      "التجارة الإلكترونية والمنصات الرقمية",
      "الخدمات الرقمية للشركات"
    ],
    defis: [
      "البنية التحتية للاتصال في المناطق الريفية",
      "المهارات الرقمية",
      "تنظيم التكنولوجيا المالية"
    ],
    soutien: "الاستراتيجية الوطنية للرقمنة والحوافز للقطاع الرقمي"
  },
  energy: {
    nom: "الطاقة المتجددة",
    description: "يهيمن على إنتاج الطاقة الطاقة الكهرومائية مع إمكانات شمسية قوية غير مستغلة. تم تحديد مشاريع الطاقة الشمسية والكهرومائية كفرص رئيسية.",
    opportunites: [
      "مشاريع الطاقة الشمسية (إمكانات عالية)",
      "تطوير الطاقة الكهرومائية",
      "الشبكات الصغيرة لكهربة الريف",
      "كفاءة الطاقة الصناعية",
      "تخزين الطاقة وتوزيعها"
    ],
    defis: [
      "تمويل مشاريع الطاقة",
      "شبكة التوزيع",
      "الصيانة الفنية"
    ],
    soutien: "أنظمة حوافز محددة للطاقة وفقًا للميثاق"
  },
  housing: {
    nom: "الإسكان الاجتماعي",
    description: "تم تحديد تطوير الإسكان الاجتماعي كفرصة رئيسية مع معدل تحضر يتجاوز 58٪ والطلب المتزايد.",
    opportunites: [
      "تطوير الإسكان الاجتماعي (أولوية)",
      "بناء مساكن بأسعار معقولة",
      "مواد البناء المحلية",
      "التطوير الحضري والتقسيمات الفرعية",
      "التمويل العقاري المبتكر"
    ],
    defis: [
      "الوصول إلى الأراضي الحضرية",
      "تمويل الأسر",
      "معايير البناء"
    ],
    soutien: "أنظمة محددة للإسكان الاجتماعي مع حوافز ضريبية"
  },
  forest: {
    nom: "الأخشاب والغابات",
    description: "غطاء حرجي مهم مع إمكانات للمعالجة المحلية والاستغلال المستدام.",
    opportunites: [
      "المعالجة المحلية للأخشاب",
      "شهادة الغابات المستدامة",
      "المنتجات المشتقة (الأثاث والبناء)",
      "السياحة البيئية في الغابات",
      "مشاريع الكربون والحفظ"
    ],
    defis: [
      "قطع الأشجار غير القانوني",
      "تتبع المنتجات",
      "البنية التحتية للغابات"
    ],
    soutien: "قانون الغابات الذي يفضل المعالجة المحلية"
  },
  textile: {
    nom: "المنسوجات والملابس",
    description: "صناعة ذات إمكانات للانتعاش بفضل الاتفاقيات التجارية الدولية.",
    opportunites: [
      "الملابس للتصدير",
      "سلسلة القطن المتكاملة",
      "المنسوجات التقنية",
      "الأزياء والتصميم الأفريقي",
      "السلع الجلدية"
    ],
    defis: [
      "المنافسة الدولية",
      "تكاليف الطاقة",
      "التدريب الفني"
    ],
    soutien: "المناطق الاقتصادية الخاصة للمنسوجات"
  },
  oil: {
    nom: "الهيدروكربونات",
    description: "قطاع ناضج مع فرص في التكرير والخدمات البترولية.",
    opportunites: [
      "التكرير والمنتجات البترولية",
      "الخدمات البترولية البحرية",
      "التخزين والتوزيع",
      "الصيانة الصناعية",
      "اللوجستيات البترولية"
    ],
    defis: [
      "تقلب الأسعار",
      "التنظيم البيئي",
      "استثمارات ضخمة"
    ],
    soutien: "قانون بترول جذاب للمستثمرين"
  },
  chemical: {
    nom: "الكيمياء والصيدلة",
    description: "قطاع استراتيجي للصحة العامة والصناعة الكيميائية.",
    opportunites: [
      "إنتاج الأدوية الجنيسة",
      "طب الأعشاب التقليدي",
      "الأسمدة الزراعية",
      "مستحضرات التجميل الطبيعية",
      "الكيمياء الخضراء"
    ],
    defis: [
      "التنظيم الصحي",
      "مؤهلات الموظفين",
      "المنافسة من الواردات"
    ],
    soutien: "السياسة الصيدلانية الوطنية"
  },
  construction: {
    nom: "البناء والأشغال العامة",
    description: "قطاع متنامٍ مع مشاريع البنية التحتية والإسكان.",
    opportunites: [
      "بناء البنية التحتية العامة",
      "الإسكان والعقارات",
      "الطرق والجسور",
      "المباني الصناعية",
      "أعمال الموانئ"
    ],
    defis: [
      "الوصول إلى المواد",
      "تمويل المشاريع",
      "المهارات الفنية"
    ],
    soutien: "المخطط الرئيسي للطرق وبرامج البنية التحتية"
  },
  transport: {
    nom: "النقل والخدمات اللوجستية",
    description: "بنية تحتية حيوية للتجارة الخارجية. موقع استراتيجي كمركز لوسط إفريقيا مع مرور 80٪ من حركة المرور عبر ميناء دوالا.",
    opportunites: [
      "تحديث ميناء دوالا (80٪ من حركة المرور)",
      "تطوير ميناء كريبي بالمياه العميقة",
      "ممرات دوالا نجامينا ودوالا بانغي",
      "اللوجستيات الرقمية والنافذة الموحدة",
      "النقل بالسكك الحديدية المحدث"
    ],
    defis: [
      "ازدحام الموانئ في دوالا",
      "أوقات العبور العالية",
      "التكاليف اللوجستية العالية"
    ],
    soutien: "النافذة الموحدة لعمليات التجارة الخارجية (GUCE)"
  },
  finance: {
    nom: "الخدمات المالية",
    description: "نظام مالي متطور مع ربط عملة الفرنك الأفريقي باليورو، مما يوفر استقرارًا نقديًا.",
    opportunites: [
      "الخدمات المصرفية الرقمية",
      "التمويل الأصغر والشمول المالي",
      "التأمين الزراعي والمناخي",
      "تمويل الشركات الصغيرة والمتوسطة",
      "سوق رأس المال في سيماك"
    ],
    defis: [
      "الوصول إلى الائتمان",
      "أسعار فائدة مرتفعة",
      "الضمانات المصرفية"
    ],
    soutien: "إصلاحات النظام المالي لسيماك واستقرار الفرنك الأفريقي"
  },
  infrastructure: {
    nom: "البنية التحتية الأساسية",
    description: "تطوير البنى التحتية: شبكة الطرق (المخطط الرئيسي)، تحديث السكك الحديدية، الاتصالات (4G، الألياف البصرية).",
    opportunites: [
      "شبكة الطرق (المخطط الرئيسي للطرق)",
      "تحديث السكك الحديدية ياوندي-دوالا-نغاونديري",
      "البنية التحتية للاتصالات (4G، الألياف)",
      "إمدادات المياه والصرف الصحي",
      "البنية التحتية للمطارات"
    ],
    defis: [
      "تمويل المشاريع",
      "صيانة البنية التحتية",
      "المعايير الفنية"
    ],
    soutien: "المخطط الرئيسي للطرق وبرامج الاستثمار العام"
  }
};

const zhSecteurs = {
  agro: {
    nom: "农业与农业加工业",
    description: "占GDP很大一部分的优先领域。喀麦隆拥有肥沃的耕地和有利于各种出口作物和农业食品加工的气候。",
    opportunites: [
      "农业食品加工（政府优先事项）",
      "棕榈油的生产和加工",
      "现代家禽养殖业的发展",
      "出口作物（可可、咖啡、香蕉）",
      "综合价值链和农业综合企业"
    ],
    defis: [
      "需要现代化的农村基础设施",
      "获取农业融资",
      "土地所有权的复杂性"
    ],
    soutien: "根据投资宪章，为农业提供特定的税收优惠制度"
  },
  industry: {
    nom: "采掘业",
    description: "包括石油、天然气和采矿在内的关键领域。重要的海上天然气资源和采矿潜力，开发项目正在进行中。",
    opportunites: [
      "采矿开发（铝土矿、铁、金）",
      "正在开发的海上天然气资源",
      "石油炼制和加工",
      "石油和天然气服务",
      "地质学和采矿勘探"
    ],
    defis: [
      "需要大量投资",
      "环境法规",
      "交通基础设施"
    ],
    soutien: "对采掘业具有吸引力的采矿法和便利措施"
  },
  digital: {
    nom: "数字与金融科技",
    description: "随着电信（4G、光纤）和服务数字化的发展，该领域正在迅速扩张。金融科技领域有重要机会。",
    opportunites: [
      "服务数字化（国家优先事项）",
      "金融科技的发展",
      "移动支付解决方案",
      "电子商务和数字平台",
      "企业数字服务"
    ],
    defis: [
      "农村地区的连接基础设施",
      "数字技能",
      "金融科技监管"
    ],
    soutien: "国家数字化战略和对数字领域的激励措施"
  },
  energy: {
    nom: "可再生能源",
    description: "能源生产以水力发电为主，拥有大量未开发的太阳能潜力。太阳能和水力发电项目被视为主要机会。",
    opportunites: [
      "太阳能项目（高潜力）",
      "水力发电发展",
      "用于农村电气化的微型电网",
      "工业能源效率",
      "能源存储和分配"
    ],
    defis: [
      "能源项目融资",
      "分配网络",
      "技术维护"
    ],
    soutien: "根据宪章对能源提供特定激励制度"
  },
  housing: {
    nom: "社会住房",
    description: "随着城市化率超过58%且需求不断增长，社会住房开发被确定为关键机会。",
    opportunites: [
      "社会住房开发（优先事项）",
      "经济适用房建设",
      "本地建筑材料",
      "城市开发和细分",
      "创新的房地产融资"
    ],
    defis: [
      "获取城市土地",
      "家庭融资",
      "建筑标准"
    ],
    soutien: "具有税收激励的社会住房特定制度"
  },
  forest: {
    nom: "木材和森林",
    description: "重要的森林覆盖率，具有当地加工和可持续开发的潜力。",
    opportunites: [
      "木材的本地加工",
      "可持续森林认证",
      "衍生产品（家具、建筑）",
      "森林生态旅游",
      "碳和保护项目"
    ],
    defis: [
      "非法采伐",
      "产品可追溯性",
      "森林基础设施"
    ],
    soutien: "有利于本地加工的森林法"
  },
  textile: {
    nom: "纺织与服装",
    description: "由于国际贸易协定，该行业具有复苏潜力。",
    opportunites: [
      "出口服装",
      "综合棉花产业链",
      "技术纺织品",
      "非洲时尚和设计",
      "皮革制品"
    ],
    defis: [
      "国际竞争",
      "能源成本",
      "技术培训"
    ],
    soutien: "纺织品经济特区"
  },
  oil: {
    nom: "碳氢化合物",
    description: "成熟行业，在炼油和石油服务方面拥有机会。",
    opportunites: [
      "炼油和石油产品",
      "海上石油服务",
      "存储和分配",
      "工业维护",
      "石油物流"
    ],
    defis: [
      "价格波动",
      "环境法规",
      "大量投资"
    ],
    soutien: "对投资者具有吸引力的石油法"
  },
  chemical: {
    nom: "化学与制药",
    description: "公共卫生和化学工业的战略领域。",
    opportunites: [
      "仿制药生产",
      "传统植物药",
      "农业肥料",
      "天然化妆品",
      "绿色化学"
    ],
    defis: [
      "卫生监管",
      "人员资质",
      "进口竞争"
    ],
    soutien: "国家制药政策"
  },
  construction: {
    nom: "建筑与公共工程",
    description: "随着基础设施和住房项目的增加，该领域不断增长。",
    opportunites: [
      "公共基础设施建设",
      "住房和房地产",
      "道路和桥梁",
      "工业建筑",
      "港口工程"
    ],
    defis: [
      "获取材料",
      "项目融资",
      "技术技能"
    ],
    soutien: "道路总体规划和基础设施计划"
  },
  transport: {
    nom: "交通与物流",
    description: "对外贸易的重要基础设施。作为中非枢纽的战略地位，80%的交通量通过杜阿拉港口。",
    opportunites: [
      "杜阿拉港口现代化（80%交通量）",
      "克里比深水港开发",
      "杜阿拉-恩贾梅纳和杜阿拉-班吉走廊",
      "数字物流和单一窗口",
      "现代化铁路运输"
    ],
    defis: [
      "杜阿拉港口拥堵",
      "高运输时间",
      "高物流成本"
    ],
    soutien: "对外贸易操作单一窗口（GUCE）"
  },
  finance: {
    nom: "金融服务",
    description: "不断发展的金融体系，非洲法郎与欧元挂钩，提供货币稳定性。",
    opportunites: [
      "数字银行服务",
      "小额信贷和普惠金融",
      "农业和气候保险",
      "中小企业融资",
      "CEMAC资本市场"
    ],
    defis: [
      "获取信贷",
      "高利率",
      "银行担保"
    ],
    soutien: "CEMAC金融体系改革和非洲法郎的稳定性"
  },
  infrastructure: {
    nom: "基础基础设施",
    description: "基础设施发展：公路网（总体规划）、铁路现代化、电信（4G、光纤）。",
    opportunites: [
      "公路网（公路总体规划）",
      "雅温得-杜阿拉-恩冈代雷铁路现代化",
      "电信基础设施（4G、光纤）",
      "供水和卫生",
      "机场基础设施"
    ],
    defis: [
      "项目融资",
      "基础设施维护",
      "技术标准"
    ],
    soutien: "公路总体规划和公共投资计划"
  }
};

const tPath = './src/assets/translations';

// Update Spanish
const esPath = path.join(tPath, 'es.json');
let es = JSON.parse(fs.readFileSync(esPath, 'utf8'));
if (es.pages_secteurs && es.pages_secteurs.potentiel) {
  es.pages_secteurs.potentiel.secteurs = esSecteurs;
  fs.writeFileSync(esPath, JSON.stringify(es, null, 2));
}

// Update Arabic
const arPath = path.join(tPath, 'ar.json');
let ar = JSON.parse(fs.readFileSync(arPath, 'utf8'));
if (ar.pages_secteurs && ar.pages_secteurs.potentiel) {
  ar.pages_secteurs.potentiel.secteurs = arSecteurs;
  fs.writeFileSync(arPath, JSON.stringify(ar, null, 2));
}

// Update Chinese
const zhPath = path.join(tPath, 'zh.json');
let zh = JSON.parse(fs.readFileSync(zhPath, 'utf8'));
if (zh.pages_secteurs && zh.pages_secteurs.potentiel) {
  zh.pages_secteurs.potentiel.secteurs = zhSecteurs;
  fs.writeFileSync(zhPath, JSON.stringify(zh, null, 2));
}

console.log('Successfully updated sectors in es, ar, and zh!');

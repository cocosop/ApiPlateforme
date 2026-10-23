import json
import os

base = '/home/anse/Bureau/compulec/API_site/ApiPlateforme/ApiPlateforme/src/assets/translations/'

translations = {
  "fr": {
    "elevage_page": {
      "hero": {
        "title": "Élevage",
        "subtitle": "Un secteur en croissance offrant des opportunités d'investissement dans la production animale, la transformation, l'alimentation, la santé et les chaînes de valeur de l'élevage au Cameroun.",
        "button": "Explorer les opportunités"
      },
      "objective": {
        "title": "Objectif Stratégique",
        "text": "Moderniser la production animale, renforcer les chaînes de valeur et accroître la transformation locale pour améliorer la sécurité alimentaire, réduire les importations et créer des opportunités d'investissement durables."
      },
      "sector": {
        "header_title": "Secteur de l'Élevage",
        "cattle_dairy": {
          "title": "Bovins & Lait",
          "item1": "Production bovine moderne",
          "item2": "Production et collecte de lait",
          "item3": "Transformation laitière",
          "item4": "Systèmes d'élevage améliorés"
        },
        "poultry": {
          "title": "Volaille",
          "item1": "Élevage de poulets de chair et de ponte",
          "item2": "Couvoirs",
          "item3": "Production d'œufs",
          "item4": "Transformation de viande de volaille"
        },
        "pigs_ruminants": {
          "title": "Porcins & Petits Ruminants",
          "item1": "Élevage porcin moderne",
          "item2": "Production ovine et caprine",
          "item3": "Centres de reproduction",
          "item4": "Production de viande"
        },
        "feed_inputs": {
          "title": "Alimentation & Intrants",
          "item1": "Production d'aliments pour animaux",
          "item2": "Développement fourrager",
          "item3": "Unités de transformation d'aliments",
          "item4": "Équipements et intrants d'élevage"
        },
        "processing_distrib": {
          "title": "Transformation & Distribution",
          "item1": "Transformation de viande",
          "item2": "Transformation laitière",
          "item3": "Installations de chaîne du froid",
          "item4": "Conditionnement et distribution"
        }
      },
      "investment_areas": {
        "header_title": "Domaines d'Investissement",
        "production": {
          "title": "Production",
          "desc": "Bovins • Volaille • Porcs • Poissons • Ovins & Caprins"
        },
        "inputs": {
          "title": "Intrants & Services",
          "desc": "Aliments • Génétique • Services vétérinaires • Équipements"
        },
        "processing": {
          "title": "Transformation",
          "desc": "Viande • Lait • Œufs • Poisson • Poulet • Conditionnement"
        },
        "infrastructure": {
          "title": "Infrastructure",
          "desc": "Chaîne du froid • Stockage • Logistique • Distribution"
        }
      },
      "key_figures": {
        "header_title": "Chiffres Clés",
        "demand": {
          "title": "Demande Croissante",
          "subtitle": "Viande, lait & œufs"
        },
        "production": {
          "title": "Production Diversifiée",
          "subtitle": "Bovins, volaille, porcs & petits ruminants"
        },
        "value": {
          "title": "Valeur Ajoutée",
          "subtitle": "Transformation & conditionnement"
        },
        "potential": {
          "title": "Potentiel Régional",
          "subtitle": "Marchés intérieurs & régionaux"
        }
      },
      "potential_sec": {
        "title": "Potentiel de l'Élevage au Cameroun",
        "subtitle": "Le Cameroun possède un fort potentiel de développement de l'élevage, stimulé par des zones de production diverses, des ressources disponibles et une demande croissante en produits d'origine animale. Le secteur offre des opportunités allant de la production primaire à la transformation et à la distribution.",
        "opportunities": {
          "title": "Opportunités"
        },
        "challenges": {
          "title": "Défis"
        },
        "opps": {
          "item1": {
            "title": "Production moderne :",
            "desc": "Développement de fermes d'élevage et de volaille commerciales."
          },
          "item2": {
            "title": "Valeur ajoutée :",
            "desc": "Transformation et conditionnement de la viande, du lait et des œufs."
          },
          "item3": {
            "title": "Industrie des aliments :",
            "desc": "Production d'aliments pour animaux et de fourrage."
          },
          "item4": {
            "title": "Santé animale :",
            "desc": "Services vétérinaires, reproduction et amélioration génétique."
          },
          "item5": {
            "title": "Développement du marché :",
            "desc": "Opportunités croissantes sur les marchés intérieurs et régionaux."
          }
        },
        "challenges": {
          "item1": {
            "title": "Faible productivité :",
            "desc": "Accès limité aux races améliorées, aux aliments et aux technologies modernes."
          },
          "item2": {
            "title": "Lacunes infrastructurelles :",
            "desc": "Installations de transformation, de stockage et de chaîne du froid insuffisantes."
          },
          "item3": {
            "title": "Accès au financement :",
            "desc": "Financement limité pour la modernisation et l'expansion."
          },
          "item4": {
            "title": "Santé animale :",
            "desc": "Risques de maladies et lacunes dans la couverture vétérinaire."
          },
          "item5": {
            "title": "Chaînes de valeur fragmentées :",
            "desc": "Liens faibles entre les producteurs, les transformateurs et les marchés."
          }
        }
      }
    }
  },
  "en": {
    "elevage_page": {
      "hero": {
        "title": "Livestock",
        "subtitle": "A growing sector offering investment opportunities across animal production, processing, feed, health and livestock value chains in Cameroon.",
        "button": "Explore opportunities"
      },
      "objective": {
        "title": "Strategic Objective",
        "text": "Modernize livestock production, strengthen value chains and increase local processing to improve food security, reduce imports and create sustainable investment opportunities."
      },
      "sector": {
        "header_title": "Livestock Sector",
        "cattle_dairy": {
          "title": "Cattle & Dairy",
          "item1": "Modern cattle production",
          "item2": "Milk production and collection",
          "item3": "Dairy processing",
          "item4": "Improved breeding systems"
        },
        "poultry": {
          "title": "Poultry",
          "item1": "Broiler and layer farming",
          "item2": "Hatcheries",
          "item3": "Egg production",
          "item4": "Poultry meat processing"
        },
        "pigs_ruminants": {
          "title": "Pigs & Small Ruminants",
          "item1": "Modern pig farming",
          "item2": "Sheep and goat production",
          "item3": "Breeding centres",
          "item4": "Meat production"
        },
        "feed_inputs": {
          "title": "Feed & Inputs",
          "item1": "Animal feed production",
          "item2": "Forage development",
          "item3": "Feed-processing facilities",
          "item4": "Livestock equipment and inputs"
        },
        "processing_distrib": {
          "title": "Processing & Distribution",
          "item1": "Meat processing",
          "item2": "Dairy processing",
          "item3": "Cold-chain facilities",
          "item4": "Packaging and distribution"
        }
      },
      "investment_areas": {
        "header_title": "Investment Areas",
        "production": {
          "title": "Production",
          "desc": "Cattle • Poultry • Pigs • Fish • Sheep & Goats"
        },
        "inputs": {
          "title": "Inputs & Services",
          "desc": "Feed • Genetics • Veterinary Services • Equipment"
        },
        "processing": {
          "title": "Processing",
          "desc": "Meat • Milk • Eggs • Fish • Chicken • Packaging"
        },
        "infrastructure": {
          "title": "Infrastructure",
          "desc": "Cold Chain • Storage • Logistics • Distribution"
        }
      },
      "key_figures": {
        "header_title": "Key Figures",
        "demand": {
          "title": "Growing Demand",
          "subtitle": "Meat, milk & eggs"
        },
        "production": {
          "title": "Diverse Production",
          "subtitle": "Cattle, poultry, pigs & small ruminants"
        },
        "value": {
          "title": "Value Addition",
          "subtitle": "Processing & packaging"
        },
        "potential": {
          "title": "Regional Potential",
          "subtitle": "Domestic & regional markets"
        }
      },
      "potential_sec": {
        "title": "Livestock Potential in Cameroon",
        "subtitle": "Cameroon has strong potential for livestock development, driven by diverse production zones, available resources and growing demand for animal products. The sector offers opportunities from primary production to processing and distribution.",
        "opportunities": {
          "title": "Opportunities"
        },
        "challenges": {
          "title": "Challenges"
        },
        "opps": {
          "item1": {
            "title": "Modern production:",
            "desc": "Development of commercial livestock and poultry farms."
          },
          "item2": {
            "title": "Value addition:",
            "desc": "Meat, milk and egg processing and packaging."
          },
          "item3": {
            "title": "Feed industry:",
            "desc": "Production of animal feed and forage."
          },
          "item4": {
            "title": "Animal health:",
            "desc": "Veterinary services, breeding and genetic improvement."
          },
          "item5": {
            "title": "Market development:",
            "desc": "Growing opportunities in domestic and regional markets."
          }
        },
        "challenges": {
          "item1": {
            "title": "Low productivity:",
            "desc": "Limited access to improved breeds, feed and modern technologies."
          },
          "item2": {
            "title": "Infrastructure gaps:",
            "desc": "Insufficient processing, storage and cold-chain facilities."
          },
          "item3": {
            "title": "Access to finance:",
            "desc": "Limited financing for modernization and expansion."
          },
          "item4": {
            "title": "Animal health:",
            "desc": "Disease risks and gaps in veterinary coverage."
          },
          "item5": {
            "title": "Fragmented value chains:",
            "desc": "Weak links between producers, processors and markets."
          }
        }
      }
    }
  },
  "es": {
    "elevage_page": {
      "hero": {
        "title": "Ganadería",
        "subtitle": "Un sector en crecimiento que ofrece oportunidades de inversión en producción animal, procesamiento, alimentación, salud y cadenas de valor ganaderas en Camerún.",
        "button": "Explorar oportunidades"
      },
      "objective": {
        "title": "Objetivo Estratégico",
        "text": "Modernizar la producción ganadera, fortalecer las cadenas de valor y aumentar el procesamiento local para mejorar la seguridad alimentaria, reducir las importaciones y crear oportunidades de inversión sostenibles."
      },
      "sector": {
        "header_title": "Sector Ganadero",
        "cattle_dairy": {
          "title": "Ganado Bovino y Lácteo",
          "item1": "Producción bovina moderna",
          "item2": "Producción y recolección de leche",
          "item3": "Procesamiento de lácteos",
          "item4": "Sistemas de cría mejorados"
        },
        "poultry": {
          "title": "Avicultura",
          "item1": "Cría de pollos de engorde y ponedoras",
          "item2": "Incubadoras",
          "item3": "Producción de huevos",
          "item4": "Procesamiento de carne de ave"
        },
        "pigs_ruminants": {
          "title": "Cerdos y Pequeños Rumiantes",
          "item1": "Cría de cerdos moderna",
          "item2": "Producción ovina y caprina",
          "item3": "Centros de cría",
          "item4": "Producción de carne"
        },
        "feed_inputs": {
          "title": "Alimentación e Insumos",
          "item1": "Producción de alimentos para animales",
          "item2": "Desarrollo de forraje",
          "item3": "Instalaciones de procesamiento de alimentos",
          "item4": "Equipos e insumos ganaderos"
        },
        "processing_distrib": {
          "title": "Procesamiento y Distribución",
          "item1": "Procesamiento de carne",
          "item2": "Procesamiento de lácteos",
          "item3": "Instalaciones de cadena de frío",
          "item4": "Envasado y distribución"
        }
      },
      "investment_areas": {
        "header_title": "Áreas de Inversión",
        "production": {
          "title": "Producción",
          "desc": "Bovinos • Aves • Cerdos • Pescado • Ovino y Caprino"
        },
        "inputs": {
          "title": "Insumos y Servicios",
          "desc": "Alimentación • Genética • Servicios veterinarios • Equipos"
        },
        "processing": {
          "title": "Procesamiento",
          "desc": "Carne • Leche • Huevos • Pescado • Pollo • Envasado"
        },
        "infrastructure": {
          "title": "Infraestructura",
          "desc": "Cadena de frío • Almacenamiento • Logística • Distribución"
        }
      },
      "key_figures": {
        "header_title": "Cifras Clave",
        "demand": {
          "title": "Demanda Creciente",
          "subtitle": "Carne, leche y huevos"
        },
        "production": {
          "title": "Producción Diversa",
          "subtitle": "Bovinos, aves, cerdos y pequeños rumiantes"
        },
        "value": {
          "title": "Valor Agregado",
          "subtitle": "Procesamiento y envasado"
        },
        "potential": {
          "title": "Potencial Regional",
          "subtitle": "Mercados nacionales y regionales"
        }
      },
      "potential_sec": {
        "title": "Potencial Ganadero en Camerún",
        "subtitle": "Camerún tiene un fuerte potencial para el desarrollo ganadero, impulsado por diversas zonas de producción, recursos disponibles y una creciente demanda de productos de origen animal. El sector ofrece oportunidades desde la producción primaria hasta el procesamiento y la distribución.",
        "opportunities": {
          "title": "Oportunidades"
        },
        "challenges": {
          "title": "Desafíos"
        },
        "opps": {
          "item1": {
            "title": "Producción moderna:",
            "desc": "Desarrollo de granjas ganaderas y avícolas comerciales."
          },
          "item2": {
            "title": "Valor agregado:",
            "desc": "Procesamiento y envasado de carne, leche y huevos."
          },
          "item3": {
            "title": "Industria de alimentos:",
            "desc": "Producción de alimentos para animales y forraje."
          },
          "item4": {
            "title": "Salud animal:",
            "desc": "Servicios veterinarios, cría y mejora genética."
          },
          "item5": {
            "title": "Desarrollo del mercado:",
            "desc": "Crecientes oportunidades en mercados nacionales y regionales."
          }
        },
        "challenges": {
          "item1": {
            "title": "Baja productividad:",
            "desc": "Acceso limitado a razas mejoradas, alimentos y tecnologías modernas."
          },
          "item2": {
            "title": "Brechas de infraestructura:",
            "desc": "Instalaciones insuficientes de procesamiento, almacenamiento y cadena de frío."
          },
          "item3": {
            "title": "Acceso a financiamiento:",
            "desc": "Financiamiento limitado para modernización y expansión."
          },
          "item4": {
            "title": "Salud animal:",
            "desc": "Riesgos de enfermedades y brechas en la cobertura veterinaria."
          },
          "item5": {
            "title": "Cadenas de valor fragmentadas:",
            "desc": "Vínculos débiles entre productores, procesadores y mercados."
          }
        }
      }
    }
  },
  "ar": {
    "elevage_page": {
      "hero": {
        "title": "تربية الماشية",
        "subtitle": "قطاع متنامٍ يقدم فرصًا استثمارية في الإنتاج الحيواني والمعالجة والأعلاف والصحة وسلاسل القيمة للثروة الحيوانية في الكاميرون.",
        "button": "اكتشف الفرص"
      },
      "objective": {
        "title": "الهدف الاستراتيجي",
        "text": "تحديث إنتاج الثروة الحيوانية، وتعزيز سلاسل القيمة، وزيادة المعالجة المحلية لتحسين الأمن الغذائي، وتقليل الواردات، وخلق فرص استثمارية مستدامة."
      },
      "sector": {
        "header_title": "قطاع الثروة الحيوانية",
        "cattle_dairy": {
          "title": "الماشية والألبان",
          "item1": "الإنتاج الحديث للماشية",
          "item2": "إنتاج وجمع الحليب",
          "item3": "معالجة الألبان",
          "item4": "أنظمة التربية المحسنة"
        },
        "poultry": {
          "title": "الدواجن",
          "item1": "تربية الدجاج اللاحم والبياض",
          "item2": "المفارخ",
          "item3": "إنتاج البيض",
          "item4": "معالجة لحوم الدواجن"
        },
        "pigs_ruminants": {
          "title": "الخنازير والمجترات الصغيرة",
          "item1": "التربية الحديثة للخنازير",
          "item2": "إنتاج الأغنام والماعز",
          "item3": "مراكز التربية",
          "item4": "إنتاج اللحوم"
        },
        "feed_inputs": {
          "title": "الأعلاف والمدخلات",
          "item1": "إنتاج الأعلاف الحيوانية",
          "item2": "تطوير الأعلاف",
          "item3": "مرافق معالجة الأعلاف",
          "item4": "معدات ومدخلات الثروة الحيوانية"
        },
        "processing_distrib": {
          "title": "المعالجة والتوزيع",
          "item1": "معالجة اللحوم",
          "item2": "معالجة الألبان",
          "item3": "مرافق سلسلة التبريد",
          "item4": "التعبئة والتوزيع"
        }
      },
      "investment_areas": {
        "header_title": "مجالات الاستثمار",
        "production": {
          "title": "الإنتاج",
          "desc": "الماشية • الدواجن • الخنازير • الأسماك • الأغنام والماعز"
        },
        "inputs": {
          "title": "المدخلات والخدمات",
          "desc": "الأعلاف • الوراثة • الخدمات البيطرية • المعدات"
        },
        "processing": {
          "title": "المعالجة",
          "desc": "اللحوم • الحليب • البيض • الأسماك • الدجاج • التعبئة"
        },
        "infrastructure": {
          "title": "البنية التحتية",
          "desc": "سلسلة التبريد • التخزين • الخدمات اللوجستية • التوزيع"
        }
      },
      "key_figures": {
        "header_title": "الأرقام الرئيسية",
        "demand": {
          "title": "الطلب المتزايد",
          "subtitle": "اللحوم والحليب والبيض"
        },
        "production": {
          "title": "إنتاج متنوع",
          "subtitle": "الماشية والدواجن والخنازير والمجترات الصغيرة"
        },
        "value": {
          "title": "القيمة المضافة",
          "subtitle": "المعالجة والتعبئة"
        },
        "potential": {
          "title": "الإمكانات الإقليمية",
          "subtitle": "الأسواق المحلية والإقليمية"
        }
      },
      "potential_sec": {
        "title": "إمكانات الثروة الحيوانية في الكاميرون",
        "subtitle": "تتمتع الكاميرون بإمكانات قوية لتنمية الثروة الحيوانية، مدفوعة بمناطق إنتاج متنوعة وموارد متاحة وطلب متزايد على المنتجات الحيوانية.",
        "opportunities": {
          "title": "الفرص"
        },
        "challenges": {
          "title": "التحديات"
        },
        "opps": {
          "item1": {
            "title": "الإنتاج الحديث:",
            "desc": "تطوير مزارع الثروة الحيوانية والدواجن التجارية."
          },
          "item2": {
            "title": "القيمة المضافة:",
            "desc": "معالجة وتعبئة اللحوم والحليب والبيض."
          },
          "item3": {
            "title": "صناعة الأعلاف:",
            "desc": "إنتاج الأعلاف الحيوانية والأعلاف."
          },
          "item4": {
            "title": "الصحة الحيوانية:",
            "desc": "الخدمات البيطرية والتربية والتحسين الوراثي."
          },
          "item5": {
            "title": "تطوير السوق:",
            "desc": "الفرص المتزايدة في الأسواق المحلية والإقليمية."
          }
        },
        "challenges": {
          "item1": {
            "title": "انخفاض الإنتاجية:",
            "desc": "محدودية الوصول إلى السلالات المحسنة والأعلاف والتقنيات الحديثة."
          },
          "item2": {
            "title": "الفجوات في البنية التحتية:",
            "desc": "عدم كفاية مرافق المعالجة والتخزين وسلسلة التبريد."
          },
          "item3": {
            "title": "الوصول إلى التمويل:",
            "desc": "تمويل محدود للتحديث والتوسع."
          },
          "item4": {
            "title": "الصحة الحيوانية:",
            "desc": "مخاطر الأمراض والثغرات في التغطية البيطرية."
          },
          "item5": {
            "title": "سلاسل القيمة المجزأة:",
            "desc": "روابط ضعيفة بين المنتجين والمعالجين والأسواق."
          }
        }
      }
    }
  },
  "zh": {
    "elevage_page": {
      "hero": {
        "title": "畜牧业",
        "subtitle": "一个不断发展的行业，在喀麦隆的动物生产、加工、饲料、卫生和畜牧业价值链中提供投资机会。",
        "button": "探索机会"
      },
      "objective": {
        "title": "战略目标",
        "text": "现代化畜牧生产，加强价值链，增加本地加工，以提高粮食安全，减少进口并创造可持续的投资机会。"
      },
      "sector": {
        "header_title": "畜牧业部门",
        "cattle_dairy": {
          "title": "牛和乳制品",
          "item1": "现代化的养牛生产",
          "item2": "牛奶生产和收集",
          "item3": "乳制品加工",
          "item4": "改良的育种系统"
        },
        "poultry": {
          "title": "家禽",
          "item1": "肉鸡和蛋鸡养殖",
          "item2": "孵化场",
          "item3": "鸡蛋生产",
          "item4": "禽肉加工"
        },
        "pigs_ruminants": {
          "title": "猪和小型反刍动物",
          "item1": "现代养猪",
          "item2": "绵羊和山羊生产",
          "item3": "繁育中心",
          "item4": "肉类生产"
        },
        "feed_inputs": {
          "title": "饲料和投入品",
          "item1": "动物饲料生产",
          "item2": "牧草开发",
          "item3": "饲料加工设施",
          "item4": "畜牧设备和投入品"
        },
        "processing_distrib": {
          "title": "加工与分配",
          "item1": "肉类加工",
          "item2": "乳制品加工",
          "item3": "冷链设施",
          "item4": "包装与分销"
        }
      },
      "investment_areas": {
        "header_title": "投资领域",
        "production": {
          "title": "生产",
          "desc": "牛 • 家禽 • 猪 • 鱼 • 绵羊和山羊"
        },
        "inputs": {
          "title": "投入与服务",
          "desc": "饲料 • 遗传学 • 兽医服务 • 设备"
        },
        "processing": {
          "title": "加工",
          "desc": "肉类 • 牛奶 • 鸡蛋 • 鱼 • 鸡肉 • 包装"
        },
        "infrastructure": {
          "title": "基础设施",
          "desc": "冷链 • 存储 • 物流 • 分销"
        }
      },
      "key_figures": {
        "header_title": "关键数字",
        "demand": {
          "title": "不断增长的需求",
          "subtitle": "肉类、牛奶和鸡蛋"
        },
        "production": {
          "title": "多样化生产",
          "subtitle": "牛、家禽、猪和小型反刍动物"
        },
        "value": {
          "title": "附加值",
          "subtitle": "加工与包装"
        },
        "potential": {
          "title": "区域潜力",
          "subtitle": "国内及区域市场"
        }
      },
      "potential_sec": {
        "title": "喀麦隆的畜牧业潜力",
        "subtitle": "喀麦隆拥有强大的畜牧业发展潜力，这得益于多样化的生产区域、可用的资源以及对动物产品不断增长的需求。该行业提供从初级生产到加工和分销的各种机会。",
        "opportunities": {
          "title": "机遇"
        },
        "challenges": {
          "title": "挑战"
        },
        "opps": {
          "item1": {
            "title": "现代化生产：",
            "desc": "商业化畜牧和家禽养殖场的发展。"
          },
          "item2": {
            "title": "附加值：",
            "desc": "肉类、牛奶和鸡蛋的加工与包装。"
          },
          "item3": {
            "title": "饲料工业：",
            "desc": "动物饲料和牧草的生产。"
          },
          "item4": {
            "title": "动物健康：",
            "desc": "兽医服务、繁育和遗传改良。"
          },
          "item5": {
            "title": "市场开发：",
            "desc": "国内和区域市场不断增长的机遇。"
          }
        },
        "challenges": {
          "item1": {
            "title": "生产力低：",
            "desc": "获取改良品种、饲料和现代技术的途径有限。"
          },
          "item2": {
            "title": "基础设施差距：",
            "desc": "加工、储存和冷链设施不足。"
          },
          "item3": {
            "title": "融资渠道：",
            "desc": "现代化和扩张的融资有限。"
          },
          "item4": {
            "title": "动物健康：",
            "desc": "疾病风险和兽医覆盖范围的差距。"
          },
          "item5": {
            "title": "碎片化的价值链：",
            "desc": "生产者、加工者和市场之间的联系薄弱。"
          }
        }
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
        data['pages_secteurs']['elevage_page'] = data_to_add['elevage_page']
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

print("Translations written for elevage_page.")

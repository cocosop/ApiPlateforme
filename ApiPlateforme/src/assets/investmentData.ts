import { InvestmentData, QuestionPattern } from '../types';

export const investmentData: InvestmentData = {
  sectors: {
    agriculture: {
      name: "Agriculture",
      description: "Secteur clé de l'économie camerounaise offrant de nombreuses opportunités d'investissement",
      advantages: [
        "Climat favorable toute l'année",
        "Terres fertiles disponibles",
        "Main-d'œuvre abondante",
        "Marché local et d'exportation important",
        "Soutien gouvernemental aux investisseurs"
      ],
      challenges: [
        "Infrastructures rurales limitées",
        "Accès au financement",
        "Techniques agricoles traditionnelles",
        "Chaîne de valeur fragmentée"
      ],
      examples: [
        "Plantations de cacao et café",
        "Élevage bovin et avicole",
        "Cultures vivrières (maïs, manioc)",
        "Horticulture et fruits tropicaux",
        "Transformation agroalimentaire"
      ]
    },
    mining: {
      name: "Mines et Géologie",
      description: "Secteur minier riche en ressources naturelles avec un potentiel d'investissement élevé",
      advantages: [
        "Ressources minérales diversifiées",
        "Nouveau code minier attractif",
        "Opportunités d'exploration",
        "Demande mondiale croissante",
        "Potentiel de création d'emplois"
      ],
      challenges: [
        "Réglementation complexe",
        "Investissements initiaux élevés",
        "Risques environnementaux",
        "Infrastructure logistique"
      ],
      examples: [
        "Extraction de bauxite",
        "Exploitation aurifère",
        "Mines de fer",
        "Exploitation du cobalt",
        "Carrières et matériaux de construction"
      ]
    },
    energy: {
      name: "Énergies Renouvelables",
      description: "Secteur en pleine expansion avec de nombreuses opportunités d'investissement vert",
      advantages: [
        "Potentiel solaire et hydroélectrique élevé",
        "Politique énergétique favorable",
        "Besoins énergétiques croissants",
        "Opportunités de partenariat public-privé",
        "Incitations fiscales disponibles"
      ],
      challenges: [
        "Coûts d'installation élevés",
        "Manque d'expertise technique",
        "Réglementation en évolution",
        "Contraintes de financement"
      ],
      examples: [
        "Centrales solaires photovoltaïques",
        "Petites centrales hydroélectriques",
        "Éoliennes",
        "Biomasse et biogaz",
        "Solutions d'éclairage solaire"
      ]
    },
    technology: {
      name: "Technologies de l'Information",
      description: "Secteur numérique en forte croissance avec des opportunités d'innovation",
      advantages: [
        "Jeune population connectée",
        "Croissance du mobile banking",
        "Initiatives gouvernementales digitales",
        "Coûts de développement compétitifs",
        "Marché régional accessible"
      ],
      challenges: [
        "Infrastructure internet limitée",
        "Manque de financement pour startups",
        "Compétences techniques insuffisantes",
        "Réglementation numérique en développement"
      ],
      examples: [
        "Applications mobiles",
        "Plateformes e-commerce",
        "Solutions fintech",
        "Systèmes de gestion",
        "Services cloud"
      ]
    },
    tourism: {
      name: "Tourisme et Hôtellerie",
      description: "Secteur touristique avec un potentiel inexploité important",
      advantages: [
        "Diversité des attractions naturelles",
        "Patrimoine culturel riche",
        "Position géographique stratégique",
        "Climat tropical favorable",
        "Hospitalité légendaire"
      ],
      challenges: [
        "Infrastructure touristique limitée",
        "Promotion internationale insuffisante",
        "Sécurité dans certaines régions",
        "Manque de professionnels qualifiés"
      ],
      examples: [
        "Hôtels et resorts",
        "Écotourisme",
        "Tourisme d'affaires",
        "Circuits culturels",
        "Parcs nationaux"
      ]
    }
  },
  procedures: {
    landTitle: {
      title: "Obtention d'un titre foncier",
      steps: [
        "Identification du terrain et vérification de sa disponibilité",
        "Dépôt de la demande au Ministère des Domaines",
        "Enquête administrative et technique",
        "Publication de l'avis d'enquête",
        "Établissement du titre foncier",
        "Enregistrement et délivrance"
      ],
      documents: [
        "Demande manuscrite",
        "Plan de situation",
        "Plan de masse",
        "Certificat de propriété coutumière",
        "Pièce d'identité",
        "Justificatif de paiement des frais"
      ],
      duration: "6 à 12 mois",
      cost: "Variable selon la superficie et la localisation"
    },
    businessRegistration: {
      title: "Création d'entreprise",
      steps: [
        "Réservation de la dénomination sociale",
        "Rédaction des statuts",
        "Dépôt des fonds au notaire",
        "Immatriculation au registre du commerce",
        "Publication au Journal Officiel",
        "Obtention du numéro contribuable"
      ],
      documents: [
        "Statuts de l'entreprise",
        "Formulaire FCFA",
        "Pièces d'identité des associés",
        "Justificatif de domiciliation",
        "Certificat de libération des fonds"
      ],
      duration: "15 à 30 jours",
      cost: "Entre 150 000 et 500 000 FCFA"
    },
    investmentCode: {
      title: "Bénéficier du Code des Investissements",
      steps: [
        "Évaluation de l'éligibilité du projet",
        "Dépôt du dossier à l'API",
        "Instruction du dossier",
        "Présentation en commission",
        "Délivrance de l'agrément",
        "Suivi de la réalisation"
      ],
      documents: [
        "Étude de faisabilité",
        "Plan de financement",
        "Étude d'impact environnemental",
        "Statuts de l'entreprise",
        "Curriculum vitae des dirigeants"
      ],
      duration: "45 à 60 jours",
      cost: "Gratuit"
    }
  },
  incentives: {
    investmentCode: {
      title: "Avantages du Code des Investissements",
      description: "Régime fiscal préférentiel pour les investissements éligibles",
      conditions: [
        "Investissement minimum de 100 millions FCFA",
        "Création d'emplois locaux",
        "Utilisation de matières premières locales",
        "Respect des normes environnementales"
      ],
      benefits: [
        "Exonération d'impôt sur les sociétés (5 ans)",
        "Suspension des droits de douane",
        "Exonération de la TVA sur équipements",
        "Réduction du taux d'imposition après exonération"
      ]
    },
    specialEconomicZones: {
      title: "Zones Économiques Spéciales",
      description: "Avantages spécifiques dans les zones dédiées aux investissements",
      conditions: [
        "Implantation dans une zone agréée",
        "Respect du cahier des charges",
        "Engagement de création d'emplois",
        "Activités éligibles"
      ],
      benefits: [
        "Infrastructures modernes disponibles",
        "Procédures administratives simplifiées",
        "Avantages fiscaux renforcés",
        "Services de guichet unique"
      ]
    },
    sectoralIncentives: {
      title: "Incitations Sectorielles",
      description: "Avantages spécifiques selon le secteur d'activité",
      conditions: [
        "Conformité aux priorités sectorielles",
        "Respect des standards qualité",
        "Contribution au développement local",
        "Transfert de technologie"
      ],
      benefits: [
        "Subventions directes",
        "Garanties de l'État",
        "Accès privilégié aux marchés publics",
        "Formation de la main-d'œuvre"
      ]
    }
  },
  financing: {
    bankLoans: {
      type: "Prêts bancaires",
      description: "Financement traditionnel par les institutions bancaires",
      eligibility: [
        "Dossier financier solide",
        "Garanties suffisantes",
        "Expérience dans le secteur",
        "Plan d'affaires détaillé"
      ],
      terms: "Taux : 8-15%, Durée : 3-10 ans"
    },
    investmentFunds: {
      type: "Fonds d'investissement",
      description: "Capital-risque et fonds de développement",
      eligibility: [
        "Potentiel de croissance élevé",
        "Équipe dirigeante expérimentée",
        "Marché adressable important",
        "Modèle économique viable"
      ],
      terms: "Participation au capital, Accompagnement stratégique"
    },
    governmentGrants: {
      type: "Subventions gouvernementales",
      description: "Soutien financier direct de l'État",
      eligibility: [
        "Projet d'intérêt national",
        "Création d'emplois significative",
        "Innovation technologique",
        "Développement régional"
      ],
      terms: "Subvention à fonds perdus, Conditions spécifiques"
    },
    developmentPartners: {
      type: "Partenaires de développement",
      description: "Financement par les bailleurs internationaux",
      eligibility: [
        "Impact social et environnemental",
        "Alignement avec les ODD",
        "Viabilité économique",
        "Capacité de mise en œuvre"
      ],
      terms: "Conditions préférentielles, Accompagnement technique"
    }
  },
  infrastructure: {
    doualaPort: {
      name: "Port de Douala",
      location: "Douala, Région du Littoral",
      capacity: "15 millions de tonnes/an",
      services: [
        "Manutention conteneurs",
        "Stockage frigorifique",
        "Services aux navires",
        "Transit international"
      ]
    },
    kribiPort: {
      name: "Port de Kribi",
      location: "Kribi, Région du Sud",
      capacity: "3 millions de tonnes/an",
      services: [
        "Port en eaux profondes",
        "Terminal conteneurs moderne",
        "Zone industrielle intégrée",
        "Connexions multimodales"
      ]
    },
    doualaAirport: {
      name: "Aéroport International de Douala",
      location: "Douala, Région du Littoral",
      capacity: "2 millions de passagers/an",
      services: [
        "Vols internationaux",
        "Fret aérien",
        "Zone de libre-échange",
        "Services logistiques"
      ]
    },
    industrialZones: {
      name: "Zones Industrielles",
      location: "Douala, Bafoussam, Garoua",
      capacity: "Plusieurs milliers d'hectares",
      services: [
        "Terrains viabilisés",
        "Électricité et eau",
        "Télécommunications",
        "Sécurité 24h/24"
      ]
    }
  }
};

export const questionPatterns: QuestionPattern[] = [
  {
    keywords: ["secteur", "porteur", "opportunité", "investir", "domaine"],
    category: "sectors",
    responses: [
      "Les secteurs les plus porteurs au Cameroun sont l'agriculture, les mines, les énergies renouvelables, les technologies de l'information et le tourisme.",
      "Pour les investissements, je recommande particulièrement l'agriculture qui bénéficie d'un climat favorable et de terres fertiles.",
      "Le secteur minier offre de grandes opportunités avec des ressources diversifiées et un nouveau code minier attractif."
    ],
    followupQuestions: [
      "Voulez-vous plus de détails sur un secteur spécifique ?",
      "Quels sont vos critères d'investissement ?",
      "Souhaitez-vous connaître les avantages fiscaux disponibles ?"
    ]
  },
  {
    keywords: ["titre", "foncier", "terrain", "propriété", "domaine"],
    category: "procedures",
    responses: [
      "L'obtention d'un titre foncier nécessite plusieurs étapes : identification du terrain, dépôt de demande au Ministère des Domaines, enquête administrative, et délivrance du titre.",
      "La procédure prend généralement entre 6 et 12 mois selon la complexité du dossier.",
      "Les documents requis incluent une demande manuscrite, un plan de situation, un certificat de propriété coutumière et une pièce d'identité."
    ],
    followupQuestions: [
      "Avez-vous déjà identifié un terrain ?",
      "Voulez-vous connaître les coûts associés ?",
      "Souhaitez-vous des conseils pour accélérer la procédure ?"
    ]
  },
  {
    keywords: ["fiscaux", "avantages", "exonération", "impôt", "taxe"],
    category: "incentives",
    responses: [
      "Le Code des Investissements offre des exonérations d'impôt sur les sociétés pendant 5 ans pour les investissements éligibles.",
      "Les avantages incluent aussi la suspension des droits de douane et l'exonération de TVA sur les équipements.",
      "Les Zones Économiques Spéciales proposent des avantages fiscaux renforcés avec des infrastructures modernes."
    ],
    followupQuestions: [
      "Votre projet est-il éligible au Code des Investissements ?",
      "Voulez-vous connaître les conditions d'éligibilité ?",
      "Souhaitez-vous des informations sur les zones économiques spéciales ?"
    ]
  },
  {
    keywords: ["financement", "prêt", "crédit", "capital", "fonds"],
    category: "financing",
    responses: [
      "Plusieurs options de financement sont disponibles : prêts bancaires, fonds d'investissement, subventions gouvernementales et partenaires de développement.",
      "Les prêts bancaires offrent des taux entre 8-15% selon le profil du projet et les garanties.",
      "Les fonds d'investissement peuvent prendre des participations au capital avec un accompagnement stratégique."
    ],
    followupQuestions: [
      "Quel montant de financement recherchez-vous ?",
      "Préférez-vous un financement bancaire ou en capital ?",
      "Votre projet est-il éligible aux subventions gouvernementales ?"
    ]
  },
  {
    keywords: ["infrastructure", "port", "aéroport", "transport", "logistique"],
    category: "infrastructure",
    responses: [
      "Le Cameroun dispose d'infrastructures modernes : ports de Douala et Kribi, aéroports internationaux, et zones industrielles équipées.",
      "Le port de Douala traite 15 millions de tonnes par an et offre des services complets de manutention et stockage.",
      "Le nouveau port de Kribi en eaux profondes renforce la capacité logistique du pays."
    ],
    followupQuestions: [
      "Avez-vous besoin d'accès à des infrastructures spécifiques ?",
      "Votre activité nécessite-t-elle des services portuaires ?",
      "Souhaitez-vous des informations sur les zones industrielles ?"
    ]
  },
  {
    keywords: ["contact", "accompagnement", "aide", "conseiller", "expert", "rendez-vous", "consultation", "personnalisé"],
    category: "contact",
    responses: [
      "Pour un accompagnement personnalisé dans votre projet d'investissement au Cameroun, nos experts sont à votre disposition.",
      "Nos conseillers spécialisés peuvent vous accompagner dans toutes les étapes de votre projet d'investissement.",
      "Contactez notre équipe d'experts pour une consultation personnalisée et un accompagnement sur mesure."
    ],
    followupQuestions: [
      "Souhaitez-vous prendre rendez-vous avec un conseiller ?",
      "Avez-vous besoin d'un accompagnement juridique ?",
      "Voulez-vous nos coordonnées complètes ?"
    ]
  }
];
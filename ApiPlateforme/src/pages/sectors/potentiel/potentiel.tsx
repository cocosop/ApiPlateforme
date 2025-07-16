import React, { useState } from 'react';
import { 
  Wheat, 
  Zap, 
  Smartphone, 
  TreePine, 
  Shirt, 
  Fuel, 
  Beaker, 
  Pickaxe, 
  Building, 
  CreditCard, 
  ChevronRight,
  BarChart3,
  Lightbulb,
  X,
  ExternalLink,
  Info,
  Eye,
  Truck,
  Shield,
  CheckCircle,
  AlertCircle,
  Home,
  Factory,
} from 'lucide-react';

interface Sector {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  description: string;
  keyOpportunities: string[];
  challenges: string[];
  governmentSupport: string;
  category: 'pilier' | 'domaine' | 'socle';
}

const sectors: Sector[] = [
  // PILIERS - Secteurs prioritaires selon les données officielles
  {
    id: 'agro',
    name: 'Agriculture & Agro-industrie',
    icon: <Wheat className="w-8 h-8" />,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    description: 'Secteur prioritaire représentant une part importante du PIB. Le Cameroun dispose de terres arables fertiles et d\'un climat favorable pour diverses cultures d\'exportation et la transformation agroalimentaire.',
    keyOpportunities: [
      'Transformation agroalimentaire (priorité gouvernementale)',
      'Production et transformation de l\'huile de palme',
      'Développement de l\'aviculture moderne',
      'Cultures d\'exportation (cacao, café, banane)',
      'Chaînes de valeur intégrées et agro-business'
    ],
    challenges: ['Infrastructure rurale à moderniser', 'Accès au financement agricole', 'Complexité foncière'],
    governmentSupport: 'Régimes spécifiques d\'incitations fiscales pour l\'agriculture selon la Charte des Investissements',
    category: 'pilier'
  },
  {
    id: 'industry',
    name: 'Industrie Extractive',
    icon: <Pickaxe className="w-8 h-8" />,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    description: 'Secteur clé incluant le pétrole, le gaz et les mines. Ressources gazières offshore et potentiel minier important avec des projets d\'exploitation en développement.',
    keyOpportunities: [
      'Exploitation minière (bauxite, fer, or)',
      'Ressources gazières offshore en développement',
      'Raffinage et transformation pétrolière',
      'Services pétroliers et gaziers',
      'Géologie et exploration minière'
    ],
    challenges: ['Investissements lourds requis', 'Réglementation environnementale', 'Infrastructure de transport'],
    governmentSupport: 'Code minier attractif et facilitations pour l\'industrie extractive',
    category: 'pilier'
  },
  {
    id: 'digital',
    name: 'Numérique & Fintech',
    icon: <Smartphone className="w-8 h-8" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    description: 'Secteur en forte expansion avec le développement des télécommunications (4G, fibre optique) et la digitalisation des services. Opportunités importantes en fintech.',
    keyOpportunities: [
      'Digitalisation des services (priorité nationale)',
      'Développement de la fintech',
      'Solutions de paiement mobile',
      'E-commerce et plateformes digitales',
      'Services numériques pour entreprises'
    ],
    challenges: ['Infrastructure de connectivité en zones rurales', 'Compétences numériques', 'Réglementation fintech'],
    governmentSupport: 'Stratégie nationale de digitalisation et incitations pour le numérique',
    category: 'pilier'
  },
  {
    id: 'energy',
    name: 'Énergies Renouvelables',
    icon: <Zap className="w-8 h-8" />,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    description: 'Production énergétique dominée par l\'hydroélectricité avec un fort potentiel solaire inexploité. Projets d\'énergie solaire et hydraulique identifiés comme opportunités majeures.',
    keyOpportunities: [
      'Projets d\'énergie solaire (fort potentiel)',
      'Développement hydroélectrique',
      'Mini-réseaux pour électrification rurale',
      'Efficacité énergétique industrielle',
      'Stockage et distribution d\'énergie'
    ],
    challenges: ['Financement de projets énergétiques', 'Réseau de distribution', 'Maintenance technique'],
    governmentSupport: 'Régimes spécifiques d\'incitations pour l\'énergie selon la Charte',
    category: 'pilier'
  },
  {
    id: 'housing',
    name: 'Logement Social',
    icon: <Home className="w-8 h-8" />,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    description: 'Développement du logement social identifié comme opportunité majeure avec un taux d\'urbanisation supérieur à 58% et une demande croissante.',
    keyOpportunities: [
      'Développement du logement social (priorité)',
      'Construction de logements abordables',
      'Matériaux de construction locaux',
      'Aménagement urbain et lotissements',
      'Financement immobilier innovant'
    ],
    challenges: ['Accès au foncier urbain', 'Financement des ménages', 'Normes de construction'],
    governmentSupport: 'Régimes spécifiques pour le logement social avec incitations fiscales',
    category: 'pilier'
  },

  // DOMAINES CLÉS
  {
    id: 'forest',
    name: 'Bois et Forêts',
    icon: <TreePine className="w-8 h-8" />,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    description: 'Importante couverture forestière avec potentiel de transformation locale et d\'exploitation durable.',
    keyOpportunities: [
      'Transformation locale du bois',
      'Certification forestière durable',
      'Produits dérivés (meubles, construction)',
      'Écotourisme forestier',
      'Projets carbone et conservation'
    ],
    challenges: ['Exploitation illégale', 'Traçabilité des produits', 'Infrastructure forestière'],
    governmentSupport: 'Loi forestière favorisant la transformation locale',
    category: 'domaine'
  },
  {
    id: 'textile',
    name: 'Textile et Confection',
    icon: <Shirt className="w-8 h-8" />,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    description: 'Industrie avec potentiel de relance grâce aux accords commerciaux internationaux.',
    keyOpportunities: [
      'Confection pour l\'exportation',
      'Filière coton intégrée',
      'Textile technique',
      'Mode et design africain',
      'Maroquinerie et cuir'
    ],
    challenges: ['Concurrence internationale', 'Coût de l\'énergie', 'Formation technique'],
    governmentSupport: 'Zones économiques spéciales pour le textile',
    category: 'domaine'
  },
  {
    id: 'oil',
    name: 'Hydrocarbures',
    icon: <Fuel className="w-8 h-8" />,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    description: 'Secteur mature avec des opportunités dans le raffinage et les services pétroliers.',
    keyOpportunities: [
      'Raffinage et produits pétroliers',
      'Services pétroliers offshore',
      'Stockage et distribution',
      'Maintenance industrielle',
      'Logistique pétrolière'
    ],
    challenges: ['Volatilité des prix', 'Réglementation environnementale', 'Investissements lourds'],
    governmentSupport: 'Code pétrolier attractif pour les investisseurs',
    category: 'domaine'
  },
  {
    id: 'chemical',
    name: 'Chimie et Pharmacie',
    icon: <Beaker className="w-8 h-8" />,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    description: 'Secteur stratégique pour la santé publique et l\'industrie chimique.',
    keyOpportunities: [
      'Production de médicaments génériques',
      'Phytopharmacie traditionnelle',
      'Fertilisants agricoles',
      'Cosmétiques naturels',
      'Chimie verte'
    ],
    challenges: ['Réglementation sanitaire', 'Qualification du personnel', 'Concurrence des importations'],
    governmentSupport: 'Politique pharmaceutique nationale',
    category: 'domaine'
  },
  {
    id: 'construction',
    name: 'BTP et Construction',
    icon: <Building className="w-8 h-8" />,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50',
    description: 'Secteur en croissance avec les projets d\'infrastructure et de logement.',
    keyOpportunities: [
      'Construction d\'infrastructures publiques',
      'Logements et immobilier',
      'Routes et ponts',
      'Bâtiments industriels',
      'Travaux portuaires'
    ],
    challenges: ['Accès aux matériaux', 'Financement des projets', 'Compétences techniques'],
    governmentSupport: 'Plan directeur routier et programmes d\'infrastructure',
    category: 'domaine'
  },

  // SOCLES - Fondations du développement
  {
    id: 'transport',
    name: 'Transport et Logistique',
    icon: <Truck className="w-8 h-8" />,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    description: 'Infrastructure vitale pour le commerce extérieur. Position stratégique comme plaque tournante de l\'Afrique centrale avec 80% du trafic via le Port de Douala.',
    keyOpportunities: [
      'Modernisation du Port de Douala (80% du trafic)',
      'Développement du Port de Kribi en eaux profondes',
      'Corridors Douala-N\'Djamena et Douala-Bangui',
      'Logistique numérique et GUCE',
      'Transport ferroviaire modernisé'
    ],
    challenges: ['Congestion portuaire à Douala', 'Délais de transit élevés', 'Coût logistique élevé'],
    governmentSupport: 'GUCE - Guichet Unique des Opérations du Commerce Extérieur',
    category: 'socle'
  },
  {
    id: 'finance',
    name: 'Services Financiers',
    icon: <CreditCard className="w-8 h-8" />,
    color: 'text-green-700',
    bgColor: 'bg-green-50',
    description: 'Système financier en développement avec la monnaie Franc CFA arrimée à l\'euro, offrant une stabilité monétaire.',
    keyOpportunities: [
      'Services bancaires digitaux',
      'Microfinance et inclusion financière',
      'Assurance agricole et climat',
      'Financement des PME',
      'Marché des capitaux CEMAC'
    ],
    challenges: ['Accès au crédit', 'Taux d\'intérêt élevés', 'Garanties bancaires'],
    governmentSupport: 'Réformes du système financier CEMAC et stabilité du Franc CFA',
    category: 'socle'
  },
  {
    id: 'infrastructure',
    name: 'Infrastructures de Base',
    icon: <Factory className="w-8 h-8" />,
    color: 'text-slate-600',
    bgColor: 'bg-slate-50',
    description: 'Développement des infrastructures : réseau routier (Plan directeur), modernisation ferroviaire, télécommunications (4G, fibre optique).',
    keyOpportunities: [
      'Réseau routier (Plan directeur routier)',
      'Modernisation ferroviaire Yaoundé-Douala-Ngaoundéré',
      'Infrastructure télécoms (4G, fibre optique)',
      'Adduction d\'eau et assainissement',
      'Infrastructure aéroportuaire'
    ],
    challenges: ['Financement des projets', 'Maintenance des infrastructures', 'Normes techniques'],
    governmentSupport: 'Plan directeur routier et programmes d\'investissement public',
    category: 'socle'
  }
];




const Potentiel = () => {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const currentSector = sectors.find(s => s.id === selectedSector);

  const handleSectorClick = (sectorId: string) => {
    setSelectedSector(sectorId);
    setShowModal(true);
    setActiveTab('overview');
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedSector(null);
  };

  const filteredSectors = activeCategory === 'all' 
    ? sectors 
    : sectors.filter(sector => sector.category === activeCategory);

  const getCategoryTitle = (category: string) => {
    switch(category) {
      case 'pilier': return 'Piliers - Secteurs Prioritaires';
      case 'domaine': return 'Domaines Clés - Croissance Économique';
      case 'socle': return 'Socles - Fondations du Développement';
      default: return 'Tous les Secteurs d\'Investissement';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50">  
      {/* Filtres par catégorie */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'all', label: 'Tous les Secteurs', count: sectors.length },
              { id: 'pilier', label: 'Piliers Prioritaires', count: sectors.filter(s => s.category === 'pilier').length },
              { id: 'domaine', label: 'Domaines Clés', count: sectors.filter(s => s.category === 'domaine').length },
              { id: 'socle', label: 'Socles Fondamentaux', count: sectors.filter(s => s.category === 'socle').length }
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille des secteurs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {getCategoryTitle(activeCategory)}
            </h3>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Eye className="w-5 h-5 text-green-600" />
              <p className="text-lg text-gray-600">
                Cliquez sur un secteur pour explorer ses opportunités d'investissement
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSectors.map((sector) => (
              <div
                key={sector.id}
                onClick={() => handleSectorClick(sector.id)}
                className="cursor-pointer group p-6 rounded-xl border-2 border-gray-200 bg-white hover:border-green-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
              >
                {/* Badge catégorie */}
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    sector.category === 'pilier' ? 'bg-blue-100 text-blue-800' :
                    sector.category === 'domaine' ? 'bg-purple-100 text-purple-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {sector.category === 'pilier' ? 'Pilier' : 
                     sector.category === 'domaine' ? 'Domaine' : 'Socle'}
                  </span>
                </div>

                {/* Indicateur d'interaction */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <ExternalLink className="w-3 h-3 text-green-600" />
                  </div>
                </div>

                <div className={`${sector.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mt-4`}>
                  <div className={sector.color}>
                    {sector.icon}
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {sector.name}
                </h4>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {sector.description.substring(0, 120)}...
                </p>

                {/* Call to action au hover */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center text-green-600 text-sm font-medium">
                    <span>Explorer ce secteur</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal détails secteur */}
      {showModal && currentSector && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header modal */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
              <div className="flex items-center space-x-4">
                <div className={`${currentSector.bgColor} w-12 h-12 rounded-lg flex items-center justify-center`}>
                  <div className={currentSector.color}>
                    {currentSector.icon}
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-2xl font-bold text-gray-900">{currentSector.name}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      currentSector.category === 'pilier' ? 'bg-blue-100 text-blue-800' :
                      currentSector.category === 'domaine' ? 'bg-purple-100 text-purple-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {currentSector.category === 'pilier' ? 'Secteur Pilier' : 
                       currentSector.category === 'domaine' ? 'Domaine Clé' : 'Secteur Socle'}
                    </span>
                  </div>
                  <p className="text-gray-600">Opportunités d'investissement</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Contenu modal */}
            <div className="p-6">
              {/* Description */}
              <div className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">{currentSector.description}</p>
              </div>

              {/* Onglets */}
              <div className="border-b border-gray-200 mb-8">
                <nav className="flex space-x-8">
                  {[
                    { id: 'overview', label: 'Vue d\'ensemble', icon: <BarChart3 className="w-4 h-4" /> },
                    { id: 'opportunities', label: 'Opportunités', icon: <Lightbulb className="w-4 h-4" /> },
                    { id: 'challenges', label: 'Défis', icon: <AlertCircle className="w-4 h-4" /> },
                    { id: 'support', label: 'Soutien Gouvernemental', icon: <Shield className="w-4 h-4" /> }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-3 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                        activeTab === tab.id
                          ? 'border-green-500 text-green-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Contenu onglets */}
              <div className="min-h-[300px]">
                {activeTab === 'overview' && (
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      <Info className="w-5 h-5 mr-2 text-green-600" />
                      Vue d'ensemble du secteur
                    </h4>
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-l-4 border-green-500">
                      <p className="text-gray-800 leading-relaxed">{currentSector.description}</p>
                    </div>
                  </div>
                )}

                {activeTab === 'opportunities' && (
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      <Lightbulb className="w-5 h-5 mr-2 text-yellow-600" />
                      Opportunités d'Investissement
                    </h4>
                    <div className="grid md:grid-cols-1 gap-4">
                      {currentSector.keyOpportunities.map((opportunity, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:shadow-md transition-shadow">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">{opportunity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'challenges' && (
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2 text-orange-600" />
                      Défis à Relever
                    </h4>
                    <div className="space-y-4">
                      {currentSector.challenges.map((challenge, index) => (
                        <div key={index} className="flex items-start space-x-3 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-400 hover:shadow-md transition-shadow">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div className="flex-1">
                            <span className="text-gray-800 font-semibold block">{challenge}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'support' && (
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-blue-600" />
                      Soutien Gouvernemental
                    </h4>
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
                      <p className="text-blue-800 font-medium">{currentSector.governmentSupport}</p>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                      <h5 className="font-semibold text-green-800 mb-3">Garanties de la Charte des Investissements :</h5>
                      <ul className="text-green-700 space-y-2">
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> Sécurité juridique OHADA</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> Liberté d'entreprise garantie</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> Exonérations fiscales et douanières</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> Accords bilatéraux de protection</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> Guichet unique API Cameroun</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Potentiel;
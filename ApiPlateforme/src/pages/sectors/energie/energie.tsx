import { AcademicCapIcon, BoltIcon, GlobeAltIcon, LightBulbIcon, ChartBarIcon, BuildingLibraryIcon, CpuChipIcon } from '@heroicons/react/20/solid';
import ActionButtonComponent from '../../../components/actionButtonComponent/actionButtonComponent';
import { FireIcon, SunIcon, Battery100Icon, CogIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import BreadcrumbsComponent from '../../../components/breadcrumbsComponent/breadcrumbsComponent';

const features = [
    {
        name: 'Réseau de Gazoducs',
        description:
            'Construction de gazoducs reliant Limbé, Kribi, Douala, Ebolowa, Yaoundé, Bafoussam et Bamenda pour faciliter la transition vers le gaz naturel pour véhicules (GNV).',
        icon: FireIcon,
        stats: '1 200 km de gazoducs',
    },
    {
        name: 'Centrales de Secours',
        description:
            'Mise en place de centrales de secours à Douala (300 MW), Yaoundé (300 MW), Bafoussam (100 MW), Bamenda (100 MW), Ebolowa (40 MW) et Limbé (40 MW).',
        icon: BoltIcon,
        stats: '880 MW de capacité totale',
    },
    {
        name: 'Voies Ferroviaires',
        description: 'Construction de 1 850 km de voies ferroviaires pour la collecte et l’exportation du bois-énergie.',
        icon: GlobeAltIcon,
        stats: '1 850 km de voies',
    },
    {
        name: 'Exportation d’Énergie',
        description: 'Fourniture de 50 TWh d’énergie électrique au Nigeria et aux États de la CEMAC.',
        icon: AcademicCapIcon,
        stats: '50 TWh exportés',
    },
];

const energySources = [
    {
        name: 'Énergie Solaire',
        description: 'Exploitation de l’énergie solaire pour une production durable et respectueuse de l’environnement.',
        icon: SunIcon,
        image: 'https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Énergie Éolienne',
        description: 'Développement de parcs éoliens pour une production d’énergie propre et renouvelable.',
        icon: CogIcon,
        image: 'https://images.unsplash.com/photo-1467579424161-6bbc141569d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Énergie Hydraulique',
        description: 'Utilisation des ressources hydrauliques pour une production d’énergie stable et fiable.',
        icon: Battery100Icon,
        image: 'https://plus.unsplash.com/premium_photo-1678167657597-665c6589a3a6?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Énergie Fossile',
        description: 'Transition progressive vers des alternatives durables tout en optimisant l’utilisation des ressources existantes.',
        icon: FireIcon,
        image: 'https://images.unsplash.com/photo-1678984239787-96f69f24ac22?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
];

const stats = [
    { id: 1, name: 'Investissements prévus', value: '10 milliards $', icon: ChartBarIcon },
    { id: 2, name: 'Emplois créés', value: '50 000+', icon: BuildingLibraryIcon },
    { id: 3, name: 'Énergie produite', value: '5 000 MW', icon: CpuChipIcon },
];

const Energie = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-50"
                    alt="Background"
                />
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-start text-white px-6 lg:px-24">
                    <h1 className="text-4xl font-bold">Sanctuaire de l'énergie du Cameroun</h1>
                    <p className="mt-4 text-lg max-w-2xl">
                        Le Cameroun, riche en ressources énergétiques, offre des opportunités uniques pour les investisseurs dans les secteurs des énergies renouvelables, des infrastructures et de l’innovation technologique.
                    </p>
                    <div className="mt-6 py-2">
                        <ActionButtonComponent
                            title="Explorez les opportunités"
                            color="#F5BA3A"
                            filterSecteur="Énergie"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Breadcrumbs */}
            <div aria-label="Breadcrumbs" className="bg-gray-50 sticky top-24 z-10 flex align-center space-x-2 text-sm font-semibold p-4 lg:p-6 border-spacing-1 overflow-scroll">
                <BreadcrumbsComponent
                    breadcrumbs={[
                        { name: 'Accueil', path: '/' },
                        { name: "Sections et Opportunités", path: '#' },
                        { name: "Sanctuaire Energie", path: '#' }
                    ]}
                />
            </div>

            {/* Objectif Section */}
            <div className="bg-white py-20 sm:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Objectif Stratégique</h2>
                    <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
                        Rationaliser l’utilisation de la biomasse, optimiser la production et la consommation d’énergie, et dégager des excédents d’exportation vers la CEEAC et le Nigéria.
                    </p>
                </motion.div>
            </div>

            {/* Actions Stratégiques */}
            <div className="overflow-hidden bg-white py-20 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Actions Stratégiques</h2>
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="lg:pr-8 lg:pt-4">
                            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center justify-center w-12 h-12 p-4 bg-yellow-100 rounded-full">
                                                <feature.icon aria-hidden="true" className="size-6 text-[#F5BA3A]" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg text-gray-900">{feature.name}</h4>
                                                <p className="text-md text-gray-500">{feature.description}</p>
                                                <p className="text-sm text-gray-400 mt-2">{feature.stats}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </dl>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="mx-auto mb-4 max-w-2xl lg:max-w-7xl">
                            <div className="relative mt-8 lg:row-span-2 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500">
                                <div className="relative min-h-auto w-full grow">
                                    <div className="z-10 absolute -bottom-5 left-10 bg-white text-gray-900 p-4 rounded-md shadow-lg text-sm font-semibold w-max">
                                        <div className="flex text-yellow-400">
                                            <LightBulbIcon className="h-6 w-6" />
                                            <h3 className="font-bold text-xl">Innovation</h3>
                                        </div>
                                        <p className="text-gray-500 text-md">Énergies renouvelables.</p>
                                    </div>
                                    <img
                                        src="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Énergie"
                                        className="w-full h-96 object-cover rounded-2xl shadow-lg"
                                    />
                                </div>
                                <div className="pointer-events-none absolute inset-px rounded-2xl shadow-lg ring-2 ring-gray-900"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Sources d'Énergie */}
            <div className="overflow-hidden bg-gray-50 py-20 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl font-bold text-center mb-8">Sources d'énergie</motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {energySources.map((source, index) => (
                            <div key={index} className="group relative">
                                <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-200 lg:aspect-auto lg:h-80">
                                    <img
                                        src={source.image}
                                        alt={source.name}
                                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="mt-4 text-center">
                                    <h3 className="text-lg font-semibold text-gray-900">{source.name}</h3>
                                    <p className="mt-2 text-sm text-gray-600">{source.description}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-white py-20 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Chiffres Clés</h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-white p-6 rounded-xl shadow-lg text-center">
                                <div className="flex justify-center">
                                    <stat.icon className="h-12 w-12 text-[#F5BA3A]" />
                                </div>
                                <p className="mt-4 text-3xl font-bold text-gray-900">{stat.value}</p>
                                <p className="mt-2 text-lg text-gray-600">{stat.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="grid py-12 px-6 bg-gray-100 justify-center">
  {/* Contenu principal (en arrière-plan) */}
  <div className="relative z-0">
    {/* Conteneur principal */}
    <div className="max-w-6xl mx-auto bg-transparent">      
      {/* Titre principal (en arrière-plan) */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center relative z-0">
        Potentiel énergétique au Cameroun
      </h1>

      {/* Description (en arrière-plan) */}
      <p className="text-center leading-relaxed mb-6 relative z-0">
        Le Cameroun dispose d'un <span className="font-semibold">potentiel énergétique considérable</span>, avec des ressources hydroélectriques, solaires et éoliennes abondantes. Le secteur de l'énergie est un pilier essentiel pour le développement économique et social du pays.
      </p>

      {/* Grille des rubriques (en arrière-plan) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center relative z-0">
        
        {/* Carte Opportunités */}
        <div className="bg-gradient-to-r from-blue-400 to-purple-500  p-8 rounded-2xl border border-gray-100 hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden w-full max-w-md z-0">
          {/* Fond dégradé au survol */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

          {/* Contenu */}
          <div className="relative z-10">
            {/* En-tête de la carte */}
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <span className="text-blue-500 text-2xl">🚀</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 ml-4 group-hover:text-white transition-colors duration-300">
                Opportunités
              </h2>
            </div>

            {/* Liste des points */}
            <ul className="space-y-4 text-gray-600 group-hover:text-gray-100 transition-colors duration-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <span>
                  <span className="font-medium text-blue-600 group-hover:text-blue-200">Ressources hydroélectriques</span> : Potentiel estimé à plus de 23 GW, notamment sur le fleuve Sanaga.
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <span>
                  <span className="font-medium text-blue-600 group-hover:text-blue-200">Énergies renouvelables</span> : Fort potentiel solaire et éolien, encore sous-exploité.
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <span>
                  <span className="font-medium text-blue-600 group-hover:text-blue-200">Projets structurants</span> : Barrage de Nachtigal (420 MW) et autres centrales en développement.
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <span>
                  <span className="font-medium text-blue-600 group-hover:text-blue-200">Exportation d'énergie</span> : Possibilité d'exporter de l'électricité vers les pays voisins de la CEMAC.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Carte Défis */}
        <div className="bg-gradient-to-r from-red-400 to-orange-500 p-8 rounded-2xl border border-gray-100 hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden w-full max-w-md z-0">
          {/* Fond dégradé au survol */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

          {/* Contenu */}
          <div className="relative z-10">
            {/* En-tête de la carte */}
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                <span className="text-red-500 text-2xl">⚠️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 ml-4 group-hover:text-white transition-colors duration-300">
                Défis
              </h2>
            </div>

            {/* Liste des points */}
            <ul className="space-y-4 text-gray-600 group-hover:text-gray-100 transition-colors duration-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                <span>
                  <span className="font-medium text-red-600 group-hover:text-red-200">Taux d'électrification faible</span> : Seulement 65% de la population a accès à l'électricité, avec des disparités entre zones urbaines et rurales.
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                <span>
                  <span className="font-medium text-red-600 group-hover:text-red-200">Infrastructures vieillissantes</span> : Réseaux de distribution obsolètes et pertes techniques élevées.
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                <span>
                  <span className="font-medium text-red-600 group-hover:text-red-200">Dépendance aux énergies fossiles</span> : Utilisation de centrales thermiques coûteuses et polluantes.
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                <span>
                  <span className="font-medium text-red-600 group-hover:text-red-200">Financement insuffisant</span> : Besoin d'investissements massifs pour développer les infrastructures énergétiques.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Energie;
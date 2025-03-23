import { ArrowTrendingUpIcon, BuildingOffice2Icon, GlobeAltIcon, LightBulbIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';
import ActionButtonComponent from '../../../components/actionButtonComponent/actionButtonComponent';
import { Apple, Beef, Carrot, Coffee, Cookie, FactoryIcon, Fish, Leaf, Wheat } from 'lucide-react';
import { motion } from 'framer-motion';
import BreadcrumbsComponent from '../../../components/breadcrumbsComponent/breadcrumbsComponent';

const features = [
    {
        name: 'Développement Technologique',
        description: 'Développement et optimisation des technologies agricoles structurantes.',
        icon: BuildingOffice2Icon,
    },
    {
        name: 'Intégration Industrielle',
        description: 'Renforcement et intégration des branches agricoles aux autres secteurs.',
        icon: GlobeAltIcon,
    },
];

const speculations = [
    { title: 'Céréales', icon: Wheat, items: ['Riz', 'Maïs', 'Sorgho'], background: 'https://images.pexels.com/photos/265242/pexels-photo-265242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { title: 'Oléagineux', icon: Leaf, items: ['Coton', 'Noix de palme', 'Soja'], background: 'https://images.pexels.com/photos/30374853/pexels-photo-30374853/free-photo-of-champ-de-tournesols-vibrant-a-l-heure-doree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { title: 'Fruits et Légumes', icon: Apple, items: ['Ananas', 'Banane', 'Plantain'], background: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { title: 'Racines et Tubercules', icon: Carrot, items: ['Manioc', 'Pommes de terre'], background: 'https://images.pexels.com/photos/2797395/pexels-photo-2797395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { title: 'Plantes Stimulantes', icon: Coffee, items: ['Cacao', 'Café'], background: 'https://images.pexels.com/photos/30420479/pexels-photo-30420479/free-photo-of-gros-plan-d-une-cabosse-de-cacao-sur-une-branche-d-arbre-a-l-exterieur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { title: 'Autres Cultures', icon: Cookie, items: ['Canne à sucre'], background: 'https://images.pexels.com/photos/7457175/pexels-photo-7457175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { title: 'Élevage', icon: Beef, items: ['Bœuf', 'Porc', 'Volaille'], background: 'https://images.pexels.com/photos/30405322/pexels-photo-30405322/free-photo-of-vaches-broutant-au-coucher-du-soleil-dans-un-paturage-tranquille.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { title: 'Pêche', icon: Fish, items: ['Aquaculture', 'Pêche industrielle'], background: 'https://images.pexels.com/photos/8824638/pexels-photo-8824638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

const infos = [
    { title: 'CEEAC', description: 'Marché Régional', text: 'Intégration régionale et accès aux marchés', icon: GlobeAltIcon },
    { title: 'Innovation', description: 'Technopoles', text: 'Développement agro-industriel structurant', icon: FactoryIcon },
    { title: 'Croissance', description: 'Compétitivité', text: 'Programmes de mise à niveau', icon: ArrowTrendingUpIcon },
];

const Agriculture = () => {
    const history = useNavigate()
    return (
        <div>
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-50"
                    alt="Background"
                />
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-start text-white px-6 lg:px-24">
                    <h1 className="text-4xl font-bold">Investir dans l'avenir de l'agro-industrie</h1>
                    <p className="mt-4 text-lg max-w-2xl">
                        Rejoignez-nous pour révolutionner le sanctuaire de l'agro-industrie avec des technologies durables et des solutions agricoles innovantes.
                    </p>
                    <div className="mt-6 py-2">
                        <ActionButtonComponent
                            title="Explorez les opportunités"
                            color="#0E600B"
                            filterSecteur="Agro-industrie"
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
                        { name: "Sanctuaire Agro-Industrie", path: '#' }
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
                        Approvisionner les marchés de l’intérieur, de la CEEAC et du Nigéria en produits alimentaires de 2ème et 3ème transformation à travers la valorisation plus poussée des matières premières locales et la promotion des exportations.
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
                                            <div className="flex items-center justify-center w-12 h-12 p-4 bg-green-100 rounded-full">
                                                <feature.icon aria-hidden="true" className="size-6 text-[#0E600B]" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg text-gray-900">{feature.name}</h4>
                                                <p className="text-md text-gray-500">{feature.description}</p>
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
                                        <div className="flex text-green-600">
                                            <LightBulbIcon className="h-6 w-6" />
                                            <h3 className="font-bold text-xl">Innovation</h3>
                                        </div>
                                        <p className="text-gray-500 text-md">Technologies agricoles industrielles.</p>
                                    </div>
                                    <img
                                        src="https://images.pexels.com/photos/175389/pexels-photo-175389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="agroindustrie"
                                        className="w-full h-96 object-cover rounded-2xl shadow-lg"
                                    />
                                </div>
                                <div className="pointer-events-none absolute inset-px rounded-2xl shadow-lg ring-2 ring-gray-900"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Nos Spéculations Phares */}
            <section className="grid py-12 px-6 bg-gray-100 justify-center">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-3xl font-bold text-center mb-8">Nos Spéculations Phares</motion.h2>
                <p className="text-center text-lg mb-8">
                    Une diversité de produits agricoles pour répondre aux besoins du marché
                </p>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-1 max-w-full md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:max-w-7xl lg:px-8">
                    {speculations.map((spec, index) => (
                        <div
                            key={index}
                            className="relative shadow rounded-lg p-6 bg-cover bg-center text-white transform transition duration-500 hover:scale-105 overflow-hidden group flex flex-col justify-between"
                            style={{ backgroundImage: `url(${spec.background})` }}
                        >
                            {/* Overlay sombre pour améliorer la lisibilité */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
                            <div className="relative z-10 flex flex-col h-full">
                                {/* Icône représentative */}
                                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                                    <spec.icon aria-hidden="true" className="size-6 text-[#0E600B]" />
                                </div>

                                {/* Titre */}
                                <h3 className="font-bold text-xl mb-4">{spec.title}</h3>

                                {/* Liste des éléments */}
                                <ul className="list-disc list-inside space-y-2 mb-4 flex-grow">
                                    {spec.items.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>

                                {/* Statistiques ou indicateurs */}
                                <div className="mt-4">
                                    <p className="text-sm text-gray-200">Production annuelle : Environ <span className="font-bold"> 500 000 tonnes</span></p>
                                    <p className="text-sm text-gray-200">Emplois générés : <span className="font-bold">1 000+</span></p>
                                </div>

                                {/* Bouton "En savoir plus" */}
                                <div className="mt-4">
                                    <button
                                        className="w-full px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors"
                                        onClick={() => history('/projets')}
                                    >
                                        En savoir plus
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* Chiffres */}
            <section className="py-12 px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {infos.map((info, index) => (
                        <motion.div
                            key={info.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-col bg-white shadow rounded-lg p-6">
                            <div className="flex items-center justify-between">
                                <info.icon className="h-12 w-12 text-green-500 mr-4" />
                                <h2 className="font-bold text-xl text-green-500">{info.title}</h2>
                            </div>
                            <div>
                                <p className="mt-4 text-lg text-gray-900">{info.description}</p>
                            </div>
                            <div>
                                <p className="mt-4 text-md text-gray-600">{info.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
            {/* Section Potentiel Agricole (en arrière-plan) */}
            <div className="grid py-12 px-6 bg-gray-100 justify-center">
  {/* Contenu principal (en arrière-plan) */}
  <div className="relative z-0">
    {/* Conteneur principal */}
    <div className="max-w-6xl mx-auto bg-transparent">      
      {/* Titre principal (en arrière-plan) */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center relative z-0">
        Potentiel Agro-industrie au Cameroun
      </h1>

      {/* Description (en arrière-plan) */}
      <p className="text-center leading-relaxed mb-6 relative z-0">
        Le Cameroun, souvent qualifié de <span className="font-semibold">"grenier de l'Afrique centrale"</span>, dispose d'un potentiel agro-industriel immense grâce à son climat varié, ses terres fertiles et sa diversité de cultures. Ce secteur est un pilier essentiel pour la sécurité alimentaire et la croissance économique.
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
                  <span className="font-medium text-blue-600 group-hover:text-blue-200">Diversité des cultures</span> : Production de cacao, café, banane, huile de palme, coton, maïs, manioc, etc.
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <span>
                  <span className="font-medium text-blue-600 group-hover:text-blue-200">Transformation locale</span> : Opportunités pour transformer les produits agricoles en produits à valeur ajoutée (jus, conserves, huiles, etc.).
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <span>
                  <span className="font-medium text-blue-600 group-hover:text-blue-200">Exportation</span> : Potentiel pour exporter des produits agro-industriels vers les marchés régionaux et internationaux.
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <span>
                  <span className="font-medium text-blue-600 group-hover:text-blue-200">Création d'emplois</span> : Développement de chaînes de valeur pour générer des emplois directs et indirects.
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
                  <span className="font-medium text-red-600 group-hover:text-red-200">Manque d'infrastructures</span> : Insuffisance des infrastructures de stockage, de transformation et de transport.
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                <span>
                  <span className="font-medium text-red-600 group-hover:text-red-200">Accès limité au financement</span> : Difficultés pour les petits producteurs et les PME à obtenir des crédits.
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                <span>
                  <span className="font-medium text-red-600 group-hover:text-red-200">Dépendance aux importations</span> : Importation de produits transformés malgré la disponibilité de matières premières locales.
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                <span>
                  <span className="font-medium text-red-600 group-hover:text-red-200">Changements climatiques</span> : Impact sur les rendements agricoles et la productivité.
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

export default Agriculture;
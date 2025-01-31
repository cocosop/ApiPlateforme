import { ArrowTrendingUpIcon, BuildingOffice2Icon, BuildingOfficeIcon, GlobeAltIcon, LightBulbIcon } from '@heroicons/react/20/solid';
import { NavLink, useNavigate } from 'react-router-dom';
import ActionButtonComponent from '../../../components/actionButtonComponent/actionButtonComponent';

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
    { title: 'Céréales', items: ['Riz', 'Maïs', 'Sorgho'], background: 'https://images.pexels.com/photos/265242/pexels-photo-265242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { title: 'Oléagineux', items: ['Coton', 'Noix de palme', 'Soja'], background: 'https://images.pexels.com/photos/30374853/pexels-photo-30374853/free-photo-of-champ-de-tournesols-vibrant-a-l-heure-doree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { title: 'Fruits et Légumes', items: ['Ananas', 'Banane', 'Plantain'], background: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { title: 'Racines et Tubercules', items: ['Manioc', 'Pommes de terre'], background: 'https://images.pexels.com/photos/2797395/pexels-photo-2797395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { title: 'Plantes Stimulantes', items: ['Cacao', 'Café'], background: 'https://images.pexels.com/photos/30420479/pexels-photo-30420479/free-photo-of-gros-plan-d-une-cabosse-de-cacao-sur-une-branche-d-arbre-a-l-exterieur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { title: 'Autres Cultures', items: ['Canne à sucre'], background: 'https://images.pexels.com/photos/7457175/pexels-photo-7457175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { title: 'Élevage', items: ['Bœuf', 'Porc', 'Volaille'], background: 'https://images.pexels.com/photos/30405322/pexels-photo-30405322/free-photo-of-vaches-broutant-au-coucher-du-soleil-dans-un-paturage-tranquille.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { title: 'Pêche', items: ['Aquaculture', 'Pêche industrielle'], background: 'https://images.pexels.com/photos/8824638/pexels-photo-8824638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

const infos = [
    { title: 'CEEAC', description: 'Marché Régional', text: 'Intégration régionale et accès aux marchés', icon: GlobeAltIcon },
    { title: 'Innovation', description: 'Technopoles', text: 'Développement agro-industriel structurant', icon: BuildingOfficeIcon },
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
                <div className="relative z-10 text-start text-white px-6 lg:px-24">
                    <h1 className="text-4xl font-bold">Investir dans l'avenir de l'agro-industrie</h1>
                    <p className="mt-4 text-lg max-w-2xl">
                        Rejoignez-nous pour révolutionner le sanctuaire de l'agro-industrie avec des technologies durables et des solutions agricoles innovantes.
                    </p>
                    <div className="mt-6 py-2">
                        <ActionButtonComponent title="Explorez les opportunités" color="#0E600B" />
                    </div>
                </div>
            </div>

            {/* Breadcrumbs */}
            <div aria-label="Breadcrumbs" className="bg-gray-100 sticky top-24 z-10 flex align-center space-x-2 text-sm font-semibold p-6 lg:p-8 border-spacing-1">
                <NavLink className="text-slate-500 hover:text-slate-900 hover:underline" to="/">
                    Accueil
                </NavLink>
                <div aria-hidden="true" className="text-slate-400 select-none">
                    /
                </div>
                <p className="text-slate-500">Sections et Opportunités</p>
                <div aria-hidden="true" className="text-slate-400 select-none">
                    /
                </div>
                <p className="text-slate-500">Sanctuaire Agro-Industrie</p>
            </div>

            {/* Objectif Section */}
            <div className="bg-white py-20 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Objectif Stratégique</h2>
                    <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
                        Approvisionner les marchés de l’intérieur, de la CEEAC et du Nigéria en produits alimentaires de 2ème et 3ème transformation à travers la valorisation plus poussée des matières premières locales et la promotion des exportations.
                    </p>
                </div>
            </div>

            {/* Actions Stratégiques */}
            <div className="overflow-hidden bg-white py-20 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Actions Stratégiques</h2>
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center justify-center w-12 h-12 p-4 bg-green-200 rounded-full">
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
                        </div>
                        <div className="mx-auto mb-4 max-w-2xl lg:max-w-7xl">
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
                        </div>
                    </div>
                </div>
            </div>

            {/* Nos Spéculations Phares */}
            <section className="grid py-12 px-6 bg-gray-100 justify-center">
                <h2 className="text-3xl font-bold text-center mb-8">Nos Spéculations Phares</h2>
                <p className="text-center text-lg mb-8">
                    Une diversité de produits agricoles pour répondre aux besoins du marché
                </p>
                <div className="grid grid-cols-1 max-w-full md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:max-w-7xl lg:px-8">
                    {speculations.map((spec, index) => (
                        <div
                            key={index}
                            className="relative shadow rounded-lg p-6 bg-cover bg-center text-white transform transition duration-500 hover:scale-105 overflow-hidden group"
                            style={{ backgroundImage: `url(${spec.background})` }}
                        >
                            {/* Overlay sombre pour améliorer la lisibilité */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
                            <div className="relative z-10">
                                {/* Icône représentative */}
                                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                                    <img
                                        src={`/icons/${spec.title.toLowerCase()}.svg`} // Remplacez par le chemin de vos icônes
                                        alt={spec.title}
                                        className="w-6 h-6"
                                    />
                                </div>
                                {/* Titre */}
                                <h3 className="font-bold text-xl mb-4">{spec.title}</h3>
                                {/* Liste des éléments */}
                                <ul className="list-disc list-inside space-y-2 mb-4">
                                    {spec.items.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                                {/* Statistiques ou indicateurs */}
                                <div className="mt-4">
                                    <p className="text-sm text-gray-200">Production annuelle : <span className="font-bold">500 000 tonnes</span></p>
                                    <p className="text-sm text-gray-200">Emplois générés : <span className="font-bold">10 000+</span></p>
                                </div>
                                {/* Bouton "En savoir plus" */}
                                <button
                                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors"
                                    onClick={() => history('/projets')}
                                >
                                    En savoir plus
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Chiffres */}
            <section className="py-12 px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {infos.map((info) => (
                        <div key={info.title} className="flex flex-col bg-white shadow rounded-lg p-6">
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
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Agriculture;
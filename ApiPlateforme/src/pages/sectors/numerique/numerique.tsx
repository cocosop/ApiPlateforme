import { BuildingLibraryIcon, ChartBarIcon, GlobeAltIcon, LightBulbIcon, ShieldCheckIcon } from '@heroicons/react/20/solid'
import { NavLink } from "react-router-dom";
import ActionButtonComponent from '../../../components/actionButtonComponent/actionButtonComponent';

const actions = [
    {
        title: 'Gouvernance et Sécurité Numérique',
        items: [
            {
                name: 'Haut Commandement du numérique',
                description: 'Collaboration entre PRC, MINDEF, MINPOSTEL, MINEPAT, MINCOM, MINMIDT, ANTIC pour un écosystème numérique sécurisé.',
                icon: ShieldCheckIcon,
            },
            {
                name: 'Périmètre numérique de sécurité',
                description: 'Identification et protection des points sensibles de l’État.',
                icon: ShieldCheckIcon,
            },
        ],
    },
    {
        title: 'Modernisation des Infrastructures',
        items: [
            {
                name: 'Restructuration de CAMTEL',
                description: 'Faire de CAMTEL le leader du marché camerounais en 3 ans et un acteur majeur en zone CEEAC et au Nigéria.',
                icon: ChartBarIcon,
            },
        ],
    },
    {
        title: 'Financement et Investissement',
        items: [
            {
                name: 'Fonderie communautaire d’investissement',
                description: '2 000 millions de FCFA pour soutenir les projets innovants et les startups numériques.',
                icon: LightBulbIcon,
            },
        ],
    },
    {
        title: 'Intégration Régionale',
        items: [
            {
                name: 'Marché de l’assemblage ouest-africain',
                description: 'Partenariat avec un opérateur de référence pour un investissement de 50 millions d’USD et une cible de 40 % de part de marché.',
                icon: GlobeAltIcon,
            },
        ],
    },
];

const domainesNumeriques = [
    {
        name: "Cybersécurité",
        description: "Protection des infrastructures critiques et des données sensibles.",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Infrastructures Numériques",
        description: "Modernisation des réseaux et des services numériques.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Innovation et Startups",
        description: "Soutien aux startups et aux projets innovants.",
        image: "https://images.unsplash.com/photo-1573166675921-076ea6b621ce?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Formation et Compétences",
        description: "Développement des compétences numériques pour tous.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const statsNumeriques = [
    { id: 1, name: "Investissements prévus", value: "2000 Mds FCFA", icon: ChartBarIcon },
    { id: 2, name: "Emplois créés", value: "50 000+", icon: BuildingLibraryIcon },
    { id: 3, name: "Part de marché visée", value: "40 %", icon: GlobeAltIcon },
];

const numerique = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-50"
                    alt="Background"
                />
                <div className="relative z-10 text-start text-white px-6 lg:px-24">
                    <h1 className="text-4xl font-bold">Sanctuaire du numérique au Cameroun</h1>
                    <p className="mt-4 text-lg max-w-2xl">
                        Transformer le Cameroun en un hub numérique régional grâce à des infrastructures modernes, une gouvernance renforcée et des investissements stratégiques.
                    </p>
                    <div className="mt-6 py-2">
                        <ActionButtonComponent
                            title="Explorez les opportunités"
                            color="#0F0B60"
                            filterSecteur="Numérique"
                        />
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
                <p className="text-slate-500">Sanctuaire Numérique</p>
            </div>

            {/* Objectif Section */}
            <div className="bg-white py-20 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Objectif Stratégique</h2>
                    <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
                        Faire évoluer le Cameroun dans le Top 5 des meilleurs pays africains les plus avancés en matière de révolution numérique tout en garantissant une sécurité globale accrue de la Souveraineté de l’Etat                    </p>
                </div>
            </div>

            {/* Actions Stratégiques */}
            <div className="relative overflow-hidden bg-white">
                <div className="pt-16 sm:pt-24 sm:pb-30 lg:pt-40 lg:pb-30">
                    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <div className="sm:max-w-full">
                            <div className="space-y-12">
                                {actions.map((section, index) => (
                                    <div key={index} className="space-y-8">
                                        <h3 className="text-2xl font-semibold text-gray-900">{section.title}</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {section.items.map((item, idx) => {
                                                const Icon = item.icon;
                                                return (
                                                    <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                                        <div className="flex items-center gap-4">
                                                            <div className="flex items-center justify-center w-12 h-12 p-4 bg-blue-100 rounded-full">
                                                                <Icon className="size-6 text-[#0F0B60]" />
                                                            </div>
                                                            <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                                                        </div>
                                                        <p className="mt-4 text-md text-gray-600">{item.description}</p>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="mb-8">
                                {/* Decorative image grid */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                                >
                                    <div className="absolute mt-28 transform md:top-1/3 md:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                        <div className="flex items-center space-x-6 lg:space-x-8">
                                            <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                    <img
                                                        alt=""
                                                        src="https://media.istockphoto.com/id/1321462048/fr/photo/concept-de-transformation-num%C3%A9rique-ing%C3%A9nierie-syst%C3%A8me-code-binaire-programmation.jpg?b=1&s=612x612&w=0&k=20&c=TsJtplZZveskEXDBT7YOGI8j-sM1Y8p_PPTIaOiTVys="
                                                        className="size-full object-cover"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        alt=""
                                                        src="https://images.unsplash.com/photo-1573164713712-03790a178651?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
                                                        className="size-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        alt=""
                                                        src="https://images.unsplash.com/photo-1599949104055-2d04026aee1e?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                        className="size-full object-cover"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        alt=""
                                                        src="https://img.freepik.com/photos-gratuite/homme-portant-lunettes-intelligentes-touchant-remix-numerique-technologie-futuriste-ecran-virtuel_53876-124731.jpg?t=st=1738610128~exp=1738613728~hmac=cecd0e771c4ce35c3cdca260bb72d4acd9652e0dbe166929fed441d9830181fc&w=740"
                                                        className="size-full object-cover"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        alt=""
                                                        src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
                                                        className="size-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        alt=""
                                                        src="https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGRldmVsb3BlcnN8ZW58MHx8MHx8fDI%3D"
                                                        className="size-full object-cover"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        alt=""
                                                        src="https://images.unsplash.com/photo-1639066648921-82d4500abf1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2VydmV1cnN8ZW58MHx8MHx8fDI%3D"
                                                        className="size-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Domaines Clés du Numérique */}
            <div className="overflow-hidden bg-gray-50 py-20 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Domaines Clés du Numérique</h2>
                    <p className="text-center text-lg mb-8">
                        Découvrez les domaines stratégiques qui font du Cameroun un hub numérique régional.
                    </p>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {domainesNumeriques.map((domaine, index) => (
                            <div key={index} className="group relative">
                                <div className="aspect-square w-full overflow-hidden rounded-xl lg:aspect-auto lg:h-80">
                                    <img
                                        src={domaine.image}
                                        alt={domaine.name}
                                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Overlay sombre pour améliorer la lisibilité */}
                                    <div className="absolute inset-0 bg-black group-hover:bg-opacity-10 transition-all duration-200"></div>
                                    <div className="absolute inset-0 flex items-start p-6">
                                        <h3 className="text-xl font-semibold text-white">{domaine.name}</h3>
                                    </div>
                                </div>
                                <div className="mt-4 text-center">
                                    <p className="text-sm text-gray-600">{domaine.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Statistiques Clés */}
            <div className="bg-white py-20 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Chiffres Clés</h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {statsNumeriques.map((stat) => (
                            <div key={stat.id} className="bg-white p-6 rounded-xl shadow-lg text-center">
                                <div className="flex justify-center">
                                    <stat.icon className="h-12 w-12 text-[#0F0B60]" />
                                </div>
                                <p className="mt-4 text-3xl font-bold text-gray-900">{stat.value}</p>
                                <p className="mt-2 text-lg text-gray-600">{stat.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default numerique;
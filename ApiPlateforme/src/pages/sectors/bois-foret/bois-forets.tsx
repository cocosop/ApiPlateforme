import { BuildingOffice2Icon, ChartBarIcon, CogIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import AccordionsComponent from '../../../components/accordionsComponent/accordionsComponent';
import ActionButtonComponent from '../../../components/actionButtonComponent/actionButtonComponent';

const features = [
    {
        name: 'Technopoles Agroindustriels : Moteurs de Développement Territorial.',
        description:
            'Développement et opérationnalisation des technopoles agroindustriels structurants sur tout le territoire ;',
        icon: BuildingOffice2Icon,
    },
    {
        name: 'Synergie Industrielle : Intégration des Secteurs Stratégiques.',
        description: "Renforcement de l’intégration des branches agroindustrielles aux autres sanctuaires (énergie, numérique), socles (financement, infrastructures) et piliers (foret-bois) industriels structurants ;",
        icon: CogIcon,
    },
    {
        name: 'Renforcement de Compétitivité : Soutien et Modernisation des Agro-industries.',
        description: ' Amélioration de la compétitivité des agro-industries par le renforcement et la pérennisation des programmes de mise à niveau ;',
        icon: ChartBarIcon,
    },
]

const imagesCards = [
    { imageSrc: 'https://img.freepik.com/photos-gratuite/grands-gratte-ciel-marron-palmiers-verts-devant-eux_1304-5311.jpg?t=st=1736268949~exp=1736272549~hmac=360db4019decd451217bdd534a57cf2167967389e28cf02b32c05fb620761b65&w=360', imageAlt: 'immeuble' },
    { imageSrc: 'https://img.freepik.com/photos-gratuite/carrefour_1063-101.jpg?t=st=1736272775~exp=1736276375~hmac=41e6adaadde36f28696fcb4cd9b070b65b7f2c7c5d34233ef890d459035fec85&w=360', imageAlt: 'echangeur' },
    { imageSrc: 'https://images.unsplash.com/photo-1682924754699-dcf11b641343?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm91dGUlMjBjYW1lcm91bnxlbnwwfHwwfHx8Mg%3D%3D', imageAlt: 'route' },
    { imageSrc: 'https://images.unsplash.com/photo-1561473279-9d1c58970559?q=80&w=1630&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', imageAlt: 'pont' },
];

// Interface montrant la structure des données des accordéons
interface AccordionData {
    id: string;
    summaryTitle: string;
    details: string;
}

// Interface montrant la structure des données des groupes d'accordéons
interface FaqGroup {
    title: string;
    accordions?: AccordionData[];
}

// Les tableaux contenant les différentes données des accordéons 
const accordionData1: AccordionData[] = [
    {
        id: 'panel1',
        summaryTitle: 'Comment identifier et accéder à un terrain destiné à l’investissement au Cameroun ?',
        details: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    },
    {
        id: 'panel2',
        summaryTitle: 'Quels types de terrains sont disponibles pour les projets industriels, commerciaux ou touristiques ?',
        details: 'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
    },
    {
        id: 'panel3',
        summaryTitle: 'Existe-t-il une base de données nationale des terrains disponibles pour les investisseurs ?',
        details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    },
   
];
const accordionData2: AccordionData[] = [
    {
        id: 'panel7',
        summaryTitle: 'Quelles sont les démarches pour enregistrer une entreprise au Cameroun ?',
        details: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    },
    {
        id: 'panel8',
        summaryTitle: 'Quels sont les types de sociétés reconnus par la loi camerounaise ?',
        details: 'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
    },
  
];
const accordionData3: AccordionData[] = [
    {
        id: 'panel13',
        summaryTitle: 'Quels sont les avantages fiscaux pour les nouveaux investissements ?',
        details: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    },
    {
        id: 'panel14',
        summaryTitle: 'Existe-t-il des zones économiques spéciales (ZES) ou des zones franches au Cameroun ?',
        details: 'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
    },
   
];

//Le tableau contenant les titres des catégories des accordéons
const faqGroups: FaqGroup[] = [
    {
        title: 'Atouts du secteur',
        accordions: accordionData1,
    },
    {
        title: "Avantages et mesures d'incitation",
        accordions: accordionData2,
    },
    {
        title: "Opportunités d'investissement",
        accordions: accordionData3,
    },
];


const BoisForets = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <div>
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://img.freepik.com/photos-gratuite/clairiere-dans-foret-du-bois-chauffage-plie-pour-chambre-combustion_1153-6948.jpg?t=st=1738259561~exp=1738263161~hmac=cc5adaed90e2a863cd544d7716fe5b6358eb0f11875bf8aadeb9697283f0572e&w=740"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-50"
                    alt="Background"
                />
                <div className="relative z-10 text-start text-white px-6 lg:px-24">
                    <h1 className="text-4xl font-bold">Pilier bois-forêts</h1>
                    <p className="mt-4 text-lg max-w-2xl">
                        La filière bois-forêts est un secteur clé de l’économie camerounaise, offrant de nombreuses opportunités d’investissement et de développement. Découvrez les atouts, les avantages et les opportunités du secteur.
                    </p>
                    <div className="mt-6 py-2">
                        <ActionButtonComponent title="Explorez les opportunités" color="#A86F32" />
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
                <p className="text-slate-500">Pilier bois-forêts</p>
            </div>
            {/* Objectif Section */}
            <div className="bg-white py-20 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Objectif Stratégique</h2>
                    <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
                        Faire du massif forestier camerounais le pilier de lancement du plan ferroviaire, de l’exportation de l’énergie et du développement d’une filière hautement intégrée aux autres filières industrielles.
                    </p>
                </div>
            </div>
            <div className="overflow-hidden bg-white py-20 sm:py-20">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-semibold mb-2 text-center text-[#0F0B60]">Présentation du secteur</h2>
                    <span id="divider"></span>
                </div>
                <div className="mx-auto max-w-full px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-full">
                                <p className="mt-6 text-gray-600 text-justify">
                                    Le secteur de l’agriculture au Cameroun est un pilier essentiel de l’économie nationale, jouant un rôle clé dans la création d’emplois, la sécurité alimentaire et les exportations. <br /> <br />
                                    Il emploie une large proportion de la population active, en particulier dans les zones rurales où il représente une source de subsistance pour plus de 70 % des ménages. Contribuant significativement au PIB national, le secteur agricole est également un moteur de croissance économique grâce à la richesse des terres fertiles et à la diversité des cultures pratiquées.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-[#0E600B]" />
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
                            {imagesCards.map((image) => (
                                <img
                                    alt={image.imageAlt}
                                    src={image.imageSrc}
                                    className="aspect-square w-full rounded-xl bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                />
                            ))}
                        </div>
                    </div>
                    <div aria-label='Accordions' className='mx-auto max-w-full m-6 lg:m-8'>
                        {faqGroups.map(({ title, accordions }, groupIndex) => (
                            <div key={groupIndex} className={`group-${groupIndex + 1}`}>
                                <div id="title">
                                    <h2 className='text-2xl font-semibold mt-4 mb-2'>{title}</h2>
                                    <span id="divider"></span>
                                </div>
                                {accordions &&
                                    accordions.map(({ id, summaryTitle, details }) => (
                                        <AccordionsComponent
                                            key={id}
                                            id={id}
                                            summaryTitle={summaryTitle}
                                            details={details}
                                            expanded={expanded}
                                            handleChange={handleChange}
                                        />
                                    ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
            <div className="bg-gradient-to-r from-gray-50 to-white p-12 space-y-10">
    {/* Section Potentiel */}
    <div className="relative bg-gradient-to-tl from-green-500 to-green-700 text-white p-8 rounded-xl shadow-xl overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-green-800"></div>
      <div className="relative z-10">
       
  {/* Conteneur principal */}
  <div className="max-w-6xl mx-auto bg-transparent">
    {/* Titre principal */}
    <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
      Potentiel Agricole au Cameroun
    </h1>
    <p className="text-center leading-relaxed mb-6">
          Le Cameroun est souvent qualifié de <span className="font-semibold">"grenier de l'Afrique centrale"</span> grâce à son climat varié et ses terres fertiles. Le pays produit une diversité de cultures, notamment du cacao, café, banane, huile de palme, coton, maïs, manioc, etc. :
        </p>
    {/* Grille des rubriques */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden">
        {/* Fond dégradé au survol */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
        {/* Contenu */}
        <div className="relative z-10">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <span className="text-blue-500 text-2xl">🚀</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 ml-4 group-hover:text-white transition-colors duration-300">Opportunités</h2>
          </div>
          <ul className="space-y-4 text-gray-600 group-hover:text-gray-100 transition-colors duration-300">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span><span className="font-medium text-blue-600 group-hover:text-blue-200">Transformation locale</span> : Réduire les importations et augmenter la valeur ajoutée des produits locaux.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span><span className="font-medium text-blue-600 group-hover:text-blue-200">Développement de chaînes de valeur</span> : Renforcer les exportations en améliorant la qualité et la compétitivité.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Rubrique Défis */}
      <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden">
        {/* Fond dégradé au survol */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
        {/* Contenu */}
        <div className="relative z-10">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
              <span className="text-red-500 text-2xl">⚠️</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 ml-4 group-hover:text-white transition-colors duration-300">Défis</h2>
          </div>
          <ul className="space-y-4 text-gray-600 group-hover:text-gray-100 transition-colors duration-300">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
              <span><span className="font-medium text-red-600 group-hover:text-red-200">Manque d'infrastructures</span> : Insuffisance des infrastructures de stockage et de transformation.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
              <span><span className="font-medium text-red-600 group-hover:text-red-200">Accès limité aux financements</span> : Difficultés pour accéder à des crédits et investissements.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
      </div>
    </div>

    {/* Section Opportunités */}
    <div className="relative bg-gradient-to-tl from-blue-500 to-blue-700 text-white p-8 rounded-xl shadow-xl overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-blue-800"></div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4">Opportunités</h2>
        <ul className="space-y-4">
          <li className="flex items-start space-x-4">
            <div className="w-2 h-2 rounded-full bg-white mt-1"></div>
            <p className="text-lg">
              <span className="font-semibold">Transformation locale des produits agricoles</span> : Réduire les importations et augmenter la valeur ajoutée des produits locaux.
            </p>
          </li>
          <li className="flex items-start space-x-4">
            <div className="w-2 h-2 rounded-full bg-white mt-1"></div>
            <p className="text-lg">
              <span className="font-semibold">Développement de chaînes de valeur</span> : Renforcer les exportations en améliorant la qualité et la compétitivité des produits agricoles camerounais.
            </p>
          </li>
        </ul>
      </div>
    </div>

    {/* Section Défis */}
    <div className="relative bg-gradient-to-tl from-red-500 to-red-700 text-white p-8 rounded-xl shadow-xl overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-red-800"></div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4">Défis</h2>
        <ul className="space-y-4">
          <li className="flex items-start space-x-4">
            <div className="w-2 h-2 rounded-full bg-white mt-1"></div>
            <p className="text-lg">
              <span className="font-semibold">Manque d'infrastructures</span> : Insuffisance des infrastructures de stockage et de transformation, ce qui limite la capacité à maximiser la valeur des produits.
            </p>
          </li>
          <li className="flex items-start space-x-4">
            <div className="w-2 h-2 rounded-full bg-white mt-1"></div>
            <p className="text-lg">
              <span className="font-semibold">Accès limité aux financements</span> : Les agriculteurs rencontrent des difficultés pour accéder à des crédits et des investissements nécessaires pour moderniser leurs exploitations.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default BoisForets;
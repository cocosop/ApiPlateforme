import { BuildingOffice2Icon, ChartBarIcon, CogIcon } from '@heroicons/react/20/solid'
import { NavLink } from "react-router-dom";
import AccordionsComponent from '../../../components/accordionsComponent/accordionsComponent';
import { useState } from 'react';

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
    { imageSrc: 'https://images.unsplash.com/photo-1665597681049-39532eed2661?q=80&w=1424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', imageAlt: 'Cacao' },
    { imageSrc: 'https://images.unsplash.com/photo-1617631716600-6a454b430367?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', imageAlt: 'plantain' },
    { imageSrc: 'https://images.unsplash.com/photo-1522579479806-486feddb6d25?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', imageAlt: 'tomate' },
    { imageSrc: 'https://images.unsplash.com/photo-1599405311017-688984be61cb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', imageAlt: 'oignon' },
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
    // {
    //     id: 'panel4',
    //     summaryTitle: 'Quelles sont les conditions pour obtenir un titre foncier ou une concession au Cameroun ?',
    //     details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    // },
    // {
    //     id: 'panel5',
    //     summaryTitle: 'Quels sont les délais moyens pour obtenir un terrain à usage économique ?',
    //     details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    // },
    // {
    //     id: 'panel6',
    //     summaryTitle: 'Comment résoudre un litige foncier lié à un projet d’investissement ?',
    //     details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    // },
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
    // {
    //     id: 'panel9',
    //     summaryTitle: 'Quelles formalités doivent être respectées pour employer des collaborateurs étrangers ?',
    //     details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    // },
    // {
    //     id: 'panel10',
    //     summaryTitle: 'Comment formaliser un partenariat avec des investisseurs locaux ?',
    //     details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    // },
    // {
    //     id: 'panel11',
    //     summaryTitle: 'Quels sont les délais et les coûts estimés pour créer une société au Cameroun ?',
    //     details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    // },
    // {
    //     id: 'panel12',
    //     summaryTitle: 'Quelles sont les meilleures pratiques pour développer un projet d’entreprise au Cameroun ?él’investissement au Cameroun ?',
    //     details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    // },
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
    // {
    //     id: 'panel15',
    //     summaryTitle: 'Quelles activités économiques bénéficient d’incitations particulières ?',
    //     details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    // },
    // {
    //     id: 'panel16',
    //     summaryTitle: 'Peut-on bénéficier d’exonérations fiscales ou douanières pour des projets innovants ?',
    //     details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    // },
    // {
    //     id: 'panel17',
    //     summaryTitle: 'Comment accéder aux programmes de soutien pour les petites et moyennes entreprises ?',
    //     details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    // },
    // {
    //     id: 'panel18',
    //     summaryTitle: 'Les équipements importés pour les projets sont-ils exonérés de droits de douane ?',
    //     details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    // },
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

const agriculture = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <div>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
                />
                <div className="px-6 lg:px-8">
                    <h2 className="text-xl/6 font-semibold text-[#0E600B]">Secteur de</h2>
                    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        l'Agriculture
                    </p>
                </div>
            </div>
            <div aria-label="Breadcrumbs" className="bg-gray-100 sticky top-24 z-10 flex align-center space-x-2 text-sm font-semibold p-6 lg:p-8 border-spacing-1">
                <NavLink className="text-slate-500 hover:text-slate-600" to={'/'}>Accueil</NavLink>
                <div aria-hidden="true" className="text-slate-400 select-none">/</div>
                <NavLink className="text-slate-500 hover:text-slate-600" to={'#'}>Sections et Opportunités</NavLink>
                <div aria-hidden="true" className="text-slate-400 select-none">/</div>
                <NavLink className="text-slate-500 hover:text-slate-600" to={'/secteur-de-lagriculture'}>Agriculture</NavLink>
            </div>
            <div className="overflow-hidden bg-white py-20 sm:py-20">
                <div className="flex flex-col align-center">
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
           
        </div>
    );
};

export default agriculture;
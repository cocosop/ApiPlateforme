import { LightBulbIcon, CheckCircleIcon, FolderIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/16/solid';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importation des styles AOS
import entreprise from "../../../assets/img/entreprise.jpg"
import ProjectCard from '../../../components/projetCard/projetCard';
import CACAO from "../../../assets/img/cacao4.png"
import ENERGIE from "../../../assets/img/energie.jpg"


const features = [
    {
        name: 'Conception de l\'Idée : ',
        description:
            'La création d\'une entreprise au Cameroun débute par l\'identification d\'une opportunité commerciale. Il s\'agit de déterminer le produit ou service à offrir, suivi d\'une analyse approfondie du marché pour comprendre la concurrence et la demande locale. Une fois cette étape achevée, un plan d\'affaires détaillé doit être rédigé. Ce document inclura la description de l\'entreprise, le marché cible, la stratégie marketing, ainsi que les prévisions financières, en tenant compte des réalités économiques du Cameroun." ;',
        icon: LightBulbIcon,
    },
    {
        name: 'Choix du Statut Juridique :',
        description: "Le choix du statut juridique est une étape cruciale. Les entrepreneurs peuvent opter pour une entreprise individuelle, idéale pour les projets gérés par une seule personne. Les sociétés, quant à elles, conviennent aux projets impliquant plusieurs associés, avec diverses formes juridiques. Les coopératives sont aussi une option viable pour les projets collectifs, particulièrement dans les secteurs agricoles et artisanaux. ;",
        icon: CheckCircleIcon,
    },
    {
        name: 'Formalités Administratives :',
        description: 'Les formalités administratives au Cameroun incluent l\'enregistrement de l\'entreprise auprès du Centre de Formalités de Création des Entreprises (CFCE). Ce processus comprend l\'immatriculation au Registre du Commerce et du Crédit Mobilier (RCCM) ou au Registre des Métiers, l\'obtention des autorisations spécifiques nécessaires selon l\'activité, et l\'acquisition d\'un Numéro d\'Identification Fiscale (NIF) pour assurer la conformité fiscale. Le CFCE centralise plusieurs de ces démarches pour faciliter la création d\'entreprise.',
        icon: FolderIcon,
    },
]

// Définition des types
type AccordionDetail = {
    text: string;
    icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
};

type AccordionData = {
    id: string;
    summaryTitle: string;
    details: AccordionDetail[]; // Détails comme tableau d'objets avec 'text' et 'icon'
};

type FaqGroup = {
    title: string;
    description: string;
    accordions: AccordionData[];
};

// Les tableaux contenant les différentes données des accordéons
const accordionData1 = [
    {
        id: 'panel1',
        summaryTitle: 'Pour les personnes physiques',
        details: [
            { text: '01 Copie certifiée conforme de la carte nationale d\'identité ou de l\'acte de naissance pour les nationaux. Pour les étrangers, celle du passeport ou de la carte de séjour ', icon: CheckCircleIcon },
            { text: '01 Extrait de l\'acte de mariage ou un certificat de célibat ;', icon: CheckCircleIcon },
            { text: '01 Certificat de résidence', icon: CheckCircleIcon },
            { text: '02 photos 4X4 avec vos noms inscrits derrière', icon: CheckCircleIcon },
            { text: 'Le cas échant, une autorisation préalable d\'exercer le commerce', icon: CheckCircleIcon },
            { text: 'Un plan de localisation de l\'entreprise signé du requérant.', icon: CheckCircleIcon },
            { text: '01 Extrait du bulletin N°3 du casier judiciaire pour les nationaux. Pour les étrangers, 01 extrait du casier judiciaire délivré dans son pays d\'origine \n ou tout autre document tenant lieu', icon: CheckCircleIcon },

        ],
    },
    {
        id: 'panel2',
        summaryTitle: 'Pour les personnes morales',
        details: [
            { text: '02 Copies certifiés conformes des statuts de la future entreprise – ceux-ci peuvent être faits chez un notaire ou sous seing privé  ', icon: CheckCircleIcon },
            { text: '02 Exemplaires de déclaration de régularité de conformité, ou de la déclaration notariée de souscription de versement', icon: CheckCircleIcon },
            { text: '02 listes certifiées conformes des gérants, administrateurs ou associés tenus indéfiniment et personnellement responsables, ou ayant le pouvoir d\'engager la société', icon: CheckCircleIcon },
            { text: '02 extraits de casier judiciaire des personnes visées ci-dessus', icon: CheckCircleIcon },
            { text: '01 plan de localisation de l\'entreprise signé du requérant', icon: CheckCircleIcon },
            { text: 'Le cas échant, une autorisation préalable d\'exercer le commerce', icon: CheckCircleIcon },
            { text: 'Un plan de localisation de l\'entreprise signé du requérant.', icon: CheckCircleIcon },
            { text: 'un Enregistrement du bail. Coût : 10% du montant du bail annuel déclaré par le promoteur pour un entrepreneur locataire ; 0,11% de la valeur déclarée de l\'immeuble pour un entrepreneur propriétaire de l\'immeuble', icon: CheckCircleIcon },

        ],
    },
];

const accordionData2 = [
    {
        id: 'panel3',
        summaryTitle: 'Pour les personnes physiques',
        details: [
            { text: 'une Demande d\'attestation pour soumission à  la CNPS. Coût : Quittance de 6000 F CFA plus 02 timbres fiscaux de 1000 F CFA, soit 8000 F CFA', icon: CheckCircleIcon },
            { text: 'une Attestation de non utilisation de personnel salarié à la CNPS. Coût : Quittance de 1500 F CFA plus 01 timbre de 1000 F CFA, soit 2500 F CFA', icon: CheckCircleIcon },
            { text: 'une Patente. Coût : 0 FCFA pour exonération pendant la première année d’activité;', icon: CheckCircleIcon },
            { text: ' une Carte de contribuable. Coût : 0 FCA, car gratuite', icon: CheckCircleIcon },
            { text: 'un Enregistrement au registre du Commerce et du Crédit Immobilier. Coût : 53 000 F CFA pour une personne physique et 41 500 F CFA pour une personne morale.', icon: CheckCircleIcon },
            { text: 'un Enregistrement du bail. Coût : 10% du montant du bail annuel déclaré par le promoteur pour un entrepreneur locataire ; 0,11% de la valeur déclarée de l\'immeuble pour un entrepreneur propriétaire de l\'immeuble', icon: CheckCircleIcon },

        ],
    },

];

const faqGroups: FaqGroup[] = [
    {
        title: 'Documents à preparer avant de se rendre au CFCE',
        description: 'Avant de vous rendre au CFCE pour la création de votre entreprise, il est essentiel d\'obtenir au préalable certains documents.',
        accordions: accordionData1,
    },
    {
        title: "Documents délivrés par la CFCE",
        description: 'Une fois en possession de tous ces documents, vous pouvez vous rendre au CFCE, qui vous délivrera les documents suivants',
        accordions: accordionData2,
    },
];

const legalForms = [
    {
        title: 'SARL',
        description: 'La Société à Responsabilité Limitée est une forme d’entreprise où les associés ont une responsabilité limitée.',
    },
    {
        title: 'SAS',
        description: 'La Société par Actions Simplifiée offre une grande souplesse de gestion et une responsabilité limitée.',
    },
    {
        title: 'SA',
        description: 'La Société Anonyme est une société de capitaux où la responsabilité des actionnaires est limitée.',
    },
    {
        title: 'EURL',
        description: 'L\'Entreprise Unipersonnelle à Responsabilité Limitée est une forme d’entreprise à un seul associé.',
    },
];

const CreerEntreprise = () => {
    const [projects] = useState([
        {
            id: 1,
            secteur: "Agro-industrie",
            titre: "Exploitation de plantation de cacao",
            ville: "Douala",
            quartier: "Bonaberi",
            description: "Mise en place d'une plantation moderne de cacao avec une production annuelle de 50 tonnes.",
            image: CACAO,
        },
        {
            id: 2,
            secteur: "Énergie",
            titre: "Parc solaire de 20 MW",
            ville: "Garoua",
            quartier: "Ngaoundere route",
            description: "Construction d'un parc solaire pour fournir de l'énergie propre à la région du Nord.",
            image: ENERGIE,
        },
        {
            id: 3,
            secteur: "Numérique",
            titre: "Plateforme de paiement mobile",
            ville: "Yaoundé",
            quartier: "Bastos",
            description: "Développement d'une application de paiement mobile visant à faciliter les transactions financières locales.",
            image: "https://img.freepik.com/free-photo/high-angle-friends-reading-menu-restaurant_23-2150384825.jpg?t=st=1738099850~exp=1738103450~hmac=263dee2608a764be0cc905367387bf817f98c3b6a3df41a0103a348fa8777175&w=996",
        }
        // Ajoutez plus de projets ici...
    ]);
    const [expanded, setExpanded] = useState<string | false>(false);
    const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };
    useEffect(() => {
        AOS.init({
            duration: 1000, // Durée de l'animation
            easing: 'ease-in-out', // Effet de l'animation
        });
    }, []);

    // const sliderRef = useRef<Slider | null>(null); // Type explicite pour sliderRef
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     nextArrow: <div />, // Nous gérons les boutons manuellement
    //     prevArrow: <div />,
    // };

    // const handlePrevClick = () => {
    //     if (sliderRef.current) {
    //         sliderRef.current.slickPrev(); // Appelle la fonction slickPrev() de react-slick
    //     }
    // };

    // const handleNextClick = () => {
    //     if (sliderRef.current) {
    //         sliderRef.current.slickNext(); // Appelle la fonction slickNext() de react-slick
    //     }
    // };

    return (
        <div>
            <div className="relative isolate overflow-hidden bg-green-900 py-24 sm:py-32">
                <img
                    src={entreprise}
                    alt=""
                    className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center opacity-40"
                />
                <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
                    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#0E600B] to-[#F5BA3A] opacity-30" ></div>
                </div>
                <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
                    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#0E600B] to-[#F5BA3A] opacity-30" ></div>
                </div>

                <div className="mx-auto max-w-2xl">
                    <h2 className="text-5xl font-semibold tracking-tight text-white text-center">
                        Creation d'Entreprise
                    </h2>
                    <p className="mt-4 text-lg text-gray-300 italic text-center">
                        Chaque entreprise commence par une idée et se construit avec de la passion et de la persévérance.      </p>
                </div>
            </div>

            <div aria-label="Breadcrumbs" className="bg-gray-100 sticky top-24 z-10 flex align-center space-x-2 text-sm font-semibold p-6 lg:p-8 border-spacing-1">
                <NavLink className="text-slate-500 hover:text-slate-600" to={'/'}>Accueil</NavLink>
                <div aria-hidden="true" className="text-slate-400 select-none">/</div>
                <NavLink className="text-slate-500 hover:text-slate-600" to={'#'}>Investir</NavLink>
                <div aria-hidden="true" className="text-slate-400 select-none">/</div>
                <NavLink className="text-slate-500 hover:text-slate-600" to={'/secteur-de-lagriculture'}>Creer une entreprise</NavLink>
            </div>

            {/* Informations Générales sur l'entreprise */}
            <div className="flex justify-between mx-auto max-w-7xl py-12">
                {/* Contenu principal à gauche */}
                <div className="w-3/4">
                    <div className="overflow-hidden ">
                        <div className="mx-auto max-w-full px-6 lg:px-8">
                            <div >
                                <div className="lg:pr-8 lg:pt-4" >
                                    <div className="lg:max-w-full">
                                        <div className="pt-0 mt-0" >
                                            <div className="flex flex-col items-center mb-6">
                                                <h2 className="text-3xl font-bold text-center mb-4 mt-0 text-[#0F0B60]">
                                                    Le CFCE au Cameroun : Un guichet unique pour lancer votre entreprise en <strong style={{ color: "green" }}>72 Heures</strong>
                                                </h2>
                                                <span className="block w-1/2 h-1 bg-[#0F0B60] mb-6"></span>

                                                <p data-aos="fade-up" className="text-gray-600 text-justify mt-0 mb-8 ">
                                                    Au Cameroun, chaque chef-lieu de région dispose d'un un <strong>Centre de Formalités de Création d'Entreprises (CFCE)</strong>, un guichet unique pour simplifier les démarches entrepreneuriales. Il offre une procédure <strong>rapide</strong> et <strong>simplifiée</strong>  pour l'obtention des documents nécessaires à la création d'une entreprise.Le CFCE regroupe des organismes comme la CNPS et les centres des impôts, réduisant <strong>le temps et les efforts, permettant ainsi de créer son entreprise en 72 heures</strong>.
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mt-6 text-gray-600 text-justify">
                                            Étapes Générales pour Créer une Entreprise
                                        </p>
                                        <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                            {features.map((feature) => (
                                                <div key={feature.name} className="relative pl-9" data-aos="fade-up">
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
                            </div>
                        </div>
                    </div>
                </div>

                {/* Espace pour les documents et liens à droite */}
                <div className="w-1/4 bg-gray-100 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Documents à Télécharger</h3>
                    <ul className="space-y-4">
                        <li>
                            <a href="/docs/creation-entreprise-guide.pdf" className="text-blue-600 hover:underline">
                                Guide complet de création d'entreprise au Cameroun
                            </a>
                        </li>
                        <li>
                            <a href="/docs/statuts-entreprise.pdf" className="text-blue-600 hover:underline">
                                Exemples de statuts pour une entreprise
                            </a>
                        </li>
                        <li>
                            <a href="https://www.example.com/formalites-cfce" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                Formalités CFCE pour l'enregistrement
                            </a>
                        </li>
                    </ul>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4"><br></br>Liens</h3>
                    <ul className="space-y-4">
                        <li>
                            <a href="/docs/creation-entreprise-guide.pdf" className="text-blue-600 hover:underline">
                                Guide complet de création d'entreprise au Cameroun
                            </a>
                        </li>
                        <li>
                            <a href="/docs/statuts-entreprise.pdf" className="text-blue-600 hover:underline">
                                Exemples de statuts pour une entreprise
                            </a>
                        </li>
                        <li>
                            <a href="https://www.example.com/formalites-cfce" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                Formalités CFCE pour l'enregistrement
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Formes Juridiques des Entreprises */}
            <div data-aos="fade-up" className="relative max-w-7xl mx-auto py-12 flex flex-col items-center my-0">
                <h2 className="text-3xl font-bold text-center mb-6 text-[#0F0B60]">Formes Juridiques des Entreprises</h2>
                <span id="divider" className="block w-1/2 h-1 bg-[#0F0B60] mb-6"></span>
                <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {legalForms.map((form, index) => {
                        // Définition des couleurs de bordure dans l'ordre : vert, rouge, jaune, bleu
                        const borderColors = ['border-green-700', 'border-red-700', 'border-yellow-500', 'border-blue-600'];

                        return (
                            <div
                                key={index}
                                className={`p-6 ${borderColors[index % borderColors.length]} border-2 rounded-xl shadow-lg bg-white transform transition-transform hover:scale-105 hover:shadow-xl hover:border-[#F5BA3A]`}
                            >
                                <h3 className="text-2xl font-semibold text-[#0F0B60] mb-4">{form.title}</h3>
                                <p className="text-gray-800 mb-6">{form.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>



            {/* Accordions */}
            <div aria-label="Accordions" className="mx-auto max-w-full m-6 lg:m-8 mb-9" >
                {faqGroups.map(({ title, accordions, description }, groupIndex) => (
                    <div data-aos="fade-up" key={groupIndex} className={`group-${groupIndex + 1}`}>
                        <div id="title" className="mb-8">
                            <h2 className=" text-3xl font-bold text-center mt-6 mb-3 text-[#0F0B60]-900 leading-tight">{title}</h2>
                            <h5 className="text-xl italic text-green-600 mb-5">{description}</h5>
                            <div className="border-t-2 border-gray-200 mb-5"></div>
                        </div>

                        {accordions && accordions.map(({ id, summaryTitle, details }) => (
                            <div key={id} className="accordion-item mb-6">
                                <div
                                    className={`border-b-2 ${expanded === id ? 'bg-gradient-to-r from-blue-100 to-blue-50' : 'border-gray-300'}`}
                                    onClick={(event) => handleChange(id)(event, expanded !== id)}
                                >
                                    <div className="flex justify-between items-center py-4 px-6 cursor-pointer hover:bg-blue-50 rounded-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
                                        <h3 className="    font-semibold text-lg text-gray-800">{summaryTitle}</h3>
                                        <span className="text-2xl text-gray-600">
                                            {expanded === id ? <ChevronUpIcon className="h-7 w-7 text-blue-600 transition-transform transform rotate-180" /> :
                                                <ChevronDownIcon className="h-7 w-7 text-blue-600 transition-transform transform rotate-0" />}
                                        </span>
                                    </div>
                                </div>

                                {expanded === id && (
                                    <div className="pl-6 py-4 bg-white rounded-lg shadow-lg border-t-2 border-blue-100">
                                        <ul>
                                            {details.map((detail, index) => (
                                                <li key={index} className="flex items-center space-x-3 py-2 mb-2">
                                                    <detail.icon className="h-5 w-5 text-green-600 transform transition-all duration-300 ease-in-out hover:scale-110" />
                                                    <span className="text-gray-700 text-sm">{detail.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
                {/* Titre avec style attractif */}
                <h2 className="text-3xl font-bold text-center text-[#0F0B60]">
                    Saisissez des Opportunités Uniques !
                </h2>

                {/* Barre de séparation */}
                <div className="w-24 h-1 bg-[#0F0B60] mx-auto my-4 rounded-full"></div>


                {/* Message d'encouragement */}
                <p className="text-center text-[#0F0B60] mb-6">
                    Investissez dès aujourd’hui dans des projets innovants et rentables pour bâtir l’avenir de l’économie camerounaise.
                </p>

                {/* Liste des projets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>

                {/* Lien Voir plus */}
                <div className="flex justify-center mt-8">
                    <a
                        href="/banque-de-projets"
                        className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold shadow-md hover:bg-green-700 transition-all"
                    >
                        Voir plus de projets
                    </a>
                </div>
            </div>
        </div>

    );
};

export default CreerEntreprise;
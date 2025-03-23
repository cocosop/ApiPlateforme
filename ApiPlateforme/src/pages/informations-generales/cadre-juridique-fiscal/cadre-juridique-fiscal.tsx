import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';
import React from 'react';
import BreadcrumbsComponent from '../../../components/breadcrumbsComponent/breadcrumbsComponent';

const CadreJuridiqueFiscal: React.FC = () => {
    const infos = [
        {
            img: "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Cadre Juridique",
            text: "Le Cameroun dispose d'un système juridique basé sur le droit civil et le droit coutumier,tout en intégrant des spécificités liées à son contexte régional et historique. Les principales lois incluent le Code des Investissements, le Code du Travail, et le Code de Commerce.",
            description: [
                {
                    title: "Système Juridique",
                    aspects: [
                        {
                            title: "Droit Civil",
                            text: "Hérité de la tradition française, le droit civil est le socle principal du système juridique camerounais. Il repose sur des textes écrits, tels que les codes et lois adoptés par le gouvernement."
                        },
                        {
                            title: "Droit Coutumier",
                            text: "Inspiré des traditions et coutumes locales, il coexiste avec le droit civil et est principalement utilisé dans les affaires familiales, successorales et foncières, particulièrement dans les communautés rurales."
                        }
                    ]
                },
                {
                    title: "Les Principaux Textes Législatifs",
                    aspects: [
                        {
                            title: "Le Code des Investissements",
                            text: "Ce code établit les règles et incitations pour encourager les investissements nationaux et étrangers. Il propose des avantages fiscaux, des exonérations douanières et un environnement stable pour les investisseurs."
                        },
                        {
                            title: "Le Code du Travail",
                            text: "Ce texte régit les relations entre employeurs et employés. Il fixe les droits et obligations des deux parties, tels que les conditions d’emploi, la rémunération, la sécurité au travail et la résolution des conflits."
                        },
                        {
                            title: "Le Code de Commerce",
                            text: "Il encadre les activités commerciales et industrielles. Il couvre des domaines tels que les contrats commerciaux, les sociétés, la faillite et le règlement des litiges commerciaux."
                        },
                        {
                            title: "La Réglementation Foncière",
                            text: "Le cadre juridique foncier est crucial pour les investisseurs souhaitant acquérir des terres. Il différencie les terres relevant du domaine privé, public ou coutumier."
                        }
                    ]
                },
                {
                    title: "Les Institutions Juridiques",
                    aspects: [
                        {
                            title: "Les tribunaux de première instance",
                            text: "Pour les affaires civiles, pénales et commerciales courantes."
                        },
                        {
                            title: "La Cour suprême",
                            text: "Plus haute juridiction du pays."
                        },
                        {
                            title: "Les tribunaux administratifs",
                            text: "Pour les litiges impliquant l'administration publique."
                        },
                    ]
                }
            ],
            documents: [
                {
                    name: "Code des Investissements",
                    url: "https://wipolex-resources-eu-central-1-358922420655.s3.amazonaws.com/edocs/lexdocs/laws/fr/cm/cm010fr.pdf"
                },
                {
                    name: "Code du Travail",
                    url: "https://www.minfopra.gov.cm/recueil/fichiers%20word/LOI%20N%C2%B0%20092-007%20DU%2014%20A0UT%201992%20portant%20code%20du%20travail.pdf"
                },
                {
                    name: "Code de Commerce",
                    url: "https://faolex.fao.org/docs/pdf/cmr220469.pdf"
                },
                {
                    name: "Réglementation Foncière",
                    url: "https://yaounde.eregulations.org/media/decret%2076-165%20du%2027%20avril%201976%20fixant%20les%20conditions%20d%27obtention%20du%20titre%20au%20foncier%20Cameroun.pdf"
                }
            ],
            conclusion: "Le pays est également membre de l'Organisation pour l'Harmonisation en Afrique du Droit des Affaires (OHADA), ce qui garantit l'application d'un droit des affaires harmonisé dans 17 pays africains."
        },
        {
            img: "https://images.pexels.com/photos/6863261/pexels-photo-6863261.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Cadre Fiscal",
            text: "Le Cameroun a mis en place un système fiscal structuré, destiné à collecter les ressources nécessaires au développement économique tout en encourageant les investissements.",
            description: [
                {
                    title: "Les Principaux Impôts et Taxes",
                    aspects: [
                        {
                            title: "Impôt sur les sociétés (IS) ",
                            text: "Taux standard : 30 % sur les bénéfices - Les entreprises étrangères peuvent être soumises à une retenue à la source de 15 % sur leurs revenus au Cameroun."
                        },
                        {
                            title: "Impôt sur le revenu des personnes physiques (IRPP)",
                            text: "Progressif, avec des taux allant de 11 % à 38 %, en fonction du niveau de revenu."
                        },
                        {
                            title: "Taxe sur la valeur ajoutée (TVA)",
                            text: "Taux standard : 19,25 % - Exonérations possibles pour certains biens et services, notamment ceux liés aux secteurs prioritaires comme l'agriculture et l'éducation."
                        },
                        {
                            title: "Taxes douanières",
                            text: "Les droits de douane varient en fonction des produits importés, avec des taux préférentiels pour les importations en provenance de certains pays ou blocs régionaux comme la CEMAC (Communauté Économique et Monétaire de l'Afrique Centrale)."
                        },
                        {
                            title: "Autres taxes",
                            text: "Taxe sur les activités économiques (TAE),Taxe foncière, Droits d'accises sur certains produits (alcool, tabac, carburant)."
                        }
                    ]
                },
                {
                    title: "Avantages Fiscaux pour les Investisseurs",
                    aspects: [
                        {
                            title: "Le Code des Investissements",
                            text: "Exonérations temporaires d’impôts sur les sociétés pour les nouvelles entreprises."
                        },
                        {
                            title: "Les Conventions Bilatérales",
                            text: "Réduction des droits de douane pour l’importation de matériel industriel."
                        },
                        {
                            title: "Les Incitations Sectorielles",
                            text: "Exonérations de la TVA pour certains secteurs prioritaires comme l’agriculture ou les énergies renouvelables."
                        },
                    ]
                }
            ],
            documents: [
                {
                    name: 'Code général des impôts',
                    url: 'https://www.impots.cm/fr/code-general-des-impots-mis-jour-au-1er-janvier-2025'
                }
            ],
            conclusion: "L’administration fiscale est supervisée par la Direction Générale des Impôts (DGI), qui veille à la collecte des recettes et à l'application des lois fiscales. Des mesures de dématérialisation ont été mises en œuvre pour faciliter les déclarations fiscales et réduire les délais administratifs."
        },
        {
            img: "https://images.pexels.com/photos/8872563/pexels-photo-8872563.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Opportunités",
            text: "Le Cameroun offre de nombreuses opportunités d'investissement dans des secteurs variés, tels que l'agriculture, l'énergie, les infrastructures, les nouvelles technologies, etc.",
            description: [
                {
                    title: "Normes misent en place",
                    aspects: [
                        {
                            title: "Harmonisation régionale",
                            text: "L'appartenance à l’OHADA et à la CEMAC garantit une uniformité juridique et fiscale avec d'autres pays de la région, ce qui facilite les échanges."
                        },
                        {
                            title: "Incitations fiscales",
                            text: "Les nombreux avantages prévus par le Code des Investissements font du Cameroun une destination attractive pour les investisseurs."
                        },
                        {
                            title: "Stabilité juridique",
                            text: "Un cadre légal structuré et en constante amélioration."
                        },
                    ]
                },
            ]
        },
    ]
    return (
        <div>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-50"
                />
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-center">
                    <h1 className="text-5xl font-bold text-white reveal">
                        Cadre Juridique 
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                        Comprendre le contexte juridique et fiscal pour des investissements
                        réussis au Cameroun.
                    </p>
                </motion.div>
            </div>
            <div aria-label="Breadcrumbs" className="bg-gray-50 sticky top-24 z-10 flex align-center space-x-2 text-sm font-semibold p-4 lg:p-6 border-spacing-1 overflow-scroll">
                <BreadcrumbsComponent
                    breadcrumbs={[
                        { name: 'Accueil', path: '/' },
                        { name: 'Informations générales', path: '#' },
                        { name: 'Cadre juridique et fiscal', path: '#' }
                    ]}
                />
            </div>
            <section className="bg-white py-20 sm:py-20 relative">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative mt-8 lg:row-span-2 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500">
                        <div className="absolute inset-0 bg-gray-900 opacity-90 rounded-2xl"></div>
                        <div className="relative min-h-auto pb-6 w-full grow">
                            <div className="z-10 absolute -top-5 left-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 p-4 rounded-md shadow-lg text-sm font-light w-max">
                                EN VEDETTE
                            </div>
                            <div className="px-8 pb-4 pt-10 sm:px-10 sm:pb-0 md:pt-12 text-white">
                                <h3 className="font-bold text-2xl sm:text-3xl">
                                    Présentation du Cadre Juridique et Fiscal au Cameroun
                                </h3>
                                <p className="mt-6 text-base leading-relaxed text-gray-300">
                                    Le Cameroun, pays d’Afrique centrale, dispose d’un cadre juridique et fiscal conçu pour favoriser les investissements et encadrer les activités économiques. Il s'agit d'un système hybride, mêlant modernité et tradition, avec des lois adaptées aux besoins des acteurs économiques locaux et internationaux.                                </p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-2xl shadow-lg ring-2 ring-blue-500/50"></div>
                    </div>
                </motion.div>
            </section>
            <section className="mx-auto mb-4 max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                {infos.map((section, index) => (
                    <motion.section
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className={`mx-auto max-w-7xl px-6 lg:px-8 py-16 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                            }`}
                    >
                        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
                            <div className={`reveal ${index % 2 === 1 ? "-order-first" : ""}`}>
                                <img
                                    src={section.img}
                                    alt={section.title}
                                    className="rounded-lg shadow-md w-full h-auto object-cover transition-transform duration-500 hover:rotate-2 hover:scale-105"
                                />
                                {section.documents && section.documents.length > 0 && (
                                    <ul className="mt-4 space-y-2">
                                        {section.documents.map((doc, docIndex) => (
                                            <li
                                                key={docIndex}
                                                className="flex items-center space-x-2"
                                            >
                                                <svg
                                                    className="h-5 w-5 text-red-500"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                >
                                                    <path d="M12 2a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V8l-6-6h-4zM14 3.5V8a1 1 0 001 1h4.5L14 3.5zM10 6H4a2 2 0 00-2 2v12a2 2 0 002 2h6v-2H4V8h6V6z" />
                                                </svg>
                                                <a
                                                    href={doc.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    {doc.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="reveal">
                                <h2 className="text-3xl font-semibold text-gray-900">
                                    {section.title}
                                </h2>
                                <p className="mt-4 text-lg text-gray-600">{section.text}</p>
                                <div key={index} className="mt-6">
                                    {section.description.map((desc, descIndex) => (
                                        <div key={descIndex} className="mt-6">
                                            <h3 className="text-xl font-semibold text-gray-900">{desc.title}</h3>
                                            {desc.aspects.map((aspect, aspectIndex) => (
                                                <div key={aspectIndex} className="mt-4 pl-4 border-l-4 border-red-900">
                                                    <h4 className="text-lg font-semibold text-gray-700">
                                                        {aspect.title}
                                                    </h4>
                                                    <p className="text-gray-600 mt-2 leading-relaxed">
                                                        {aspect.text}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 text-lg text-gray-600">{section.conclusion}</p>
                            </div>
                        </div>
                    </motion.section>
                ))}
            </section>
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mx-auto mb-4 max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="relative mt-8 lg:row-span-2 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-white opacity-90 rounded-2xl"></div>
                    <div className="relative min-h-auto pb-6 w-full grow">
                        <div className="z-10 absolute -top-5 left-10 bg-gradient-to-r from-green-400 to-green-700 text-gray-900 p-4 rounded-md shadow-lg text-sm font-semibold w-max">
                            <CheckCircleIcon className="h-6 w-6 text-white" />
                        </div>
                        <div className="px-8 pb-4 pt-10 sm:px-10 sm:pb-0 md:pt-12 text-white">
                            <p className="text-justify leading-relaxed text-gray-700">
                                Le Cameroun dispose d’un cadre juridique et fiscal robuste qui allie modernité et tradition. Ses lois et institutions visent à créer un environnement favorable pour les investissements et le développement économique, tout en garantissant une certaine stabilité. Cependant, des efforts sont encore nécessaires pour simplifier les démarches administratives, renforcer la transparence et promouvoir davantage l’attractivité du pays.
                            </p>
                        </div>
                    </div>
                    <div className="pointer-events-none absolute inset-px rounded-2xl shadow-lg ring-2 ring-gray-900"></div>
                </div>
            </motion.section>
        </div>
    );
};

export default CadreJuridiqueFiscal;
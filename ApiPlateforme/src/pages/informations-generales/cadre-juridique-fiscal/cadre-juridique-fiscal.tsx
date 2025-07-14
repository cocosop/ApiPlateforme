import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';

const CadreJuridiqueFiscal: React.FC = () => {
    const { t } = useTranslation();

    const infos = [
        {
            img: "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: t('information_general.cadre_juridique_fiscal.sections.legalFramework.title'),
            text: t('information_general.cadre_juridique_fiscal.sections.legalFramework.text'),
            description: [
                {
                    title: t('information_general.cadre_juridique_fiscal.sections.legalFramework.description.system.title'),
                    aspects: [
                        {
                            title: t('information_general.cadre_juridique_fiscal.sections.legalFramework.description.system.aspects.civilLaw.title'),
                            text: t('information_general.cadre_juridique_fiscal.sections.legalFramework.description.system.aspects.civilLaw.text')
                        },
                        {
                            title: t('information_general.cadre_juridique_fiscal.sections.legalFramework.description.system.aspects.customaryLaw.title'),
                            text: t('information_general.cadre_juridique_fiscal.sections.legalFramework.description.system.aspects.customaryLaw.text')
                        }
                    ]
                },
                {
                    title: t('information_general.cadre_juridique_fiscal.sections.legalFramework.description.mainLaws.title'),
                    aspects: [
                        {
                            title: t('information_general.cadre_juridique_fiscal.sections.legalFramework.description.mainLaws.aspects.investmentCode.title'),
                            text: t('information_general.cadre_juridique_fiscal.sections.legalFramework.description.mainLaws.aspects.investmentCode.text')
                        },
                        {
                            title: t('information_general.cadre_juridique_fiscal.sections.legalFramework.description.mainLaws.aspects.laborCode.title'),
                            text: t('information_general.cadre_juridique_fiscal.sections.legalFramework.description.mainLaws.aspects.laborCode.text')
                        },
                        {
                            title: t('information_general.cadre_juridique_fiscal.sections.legalFramework.description.mainLaws.aspects.commercialCode.title'),
                            text: t('information_general.cadre_juridique_fiscal.sections.legalFramework.description.mainLaws.aspects.commercialCode.text')
                        },
                        {
                            title: t('information_general.cadre_juridique_fiscal.sections.legalFramework.description.mainLaws.aspects.landRegulation.title'),
                            text: t('information_general.cadre_juridique_fiscal.sections.legalFramework.description.mainLaws.aspects.landRegulation.text')
                        }
                    ]
                },
                {
                    title: t('information_general.cadre_juridique_fiscal.sections.legalFramework.description.legalInstitutions.title'),
                    aspects: [
                        {
                            title: t('information_general.cadre_juridique_fiscal.sections.legalFramework.description.legalInstitutions.aspects.firstInstanceCourts.title'),
                            text: t('information_general.cadre_juridique_fiscal.sections.legalFramework.description.legalInstitutions.aspects.firstInstanceCourts.text')
                        },
                        {
                            title: t('information_general.cadre_juridique_fiscal.sections.legalFramework.description.legalInstitutions.aspects.supremeCourt.title'),
                            text: t('information_general.cadre_juridique_fiscal.sections.legalFramework.description.legalInstitutions.aspects.supremeCourt.text')
                        },
                        {
                            title: t('information_general.cadre_juridique_fiscal.sections.legalFramework.description.legalInstitutions.aspects.administrativeTribunals.title'),
                            text: t('information_general.cadre_juridique_fiscal.sections.legalFramework.description.legalInstitutions.aspects.administrativeTribunals.text')
                        },
                    ]
                }
            ],
            documents: [
                {
                    name: t('information_general.cadre_juridique_fiscal.sections.legalFramework.documents.investmentCode'),
                    url: "https://wipolex-resources-eu-central-1-358922420655.s3.amazonaws.com/edocs/lexdocs/laws/fr/cm/cm010fr.pdf"
                },
                {
                    name: t('information_general.cadre_juridique_fiscal.sections.legalFramework.documents.laborCode'),
                    url: "https://www.minfopra.gov.cm/recueil/fichiers%20word/LOI%20N%C2%B0%20092-007%20DU%2014%20A0UT%201992%20portant%20code%20du%20travail.pdf"
                },
                {
                    name: t('information_general.cadre_juridique_fiscal.sections.legalFramework.documents.commercialCode'),
                    url: "https://faolex.fao.org/docs/pdf/cmr220469.pdf"
                },
                {
                    name: t('information_general.cadre_juridique_fiscal.sections.legalFramework.documents.landRegulation'),
                    url: "https://yaounde.eregulations.org/media/decret%2076-165%20du%2027%20avril%201976%20fixant%20les%20conditions%20d%27obtention%20du%20titre%20au%20foncier%20Cameroun.pdf"
                }
            ],
            conclusion: t('information_general.cadre_juridique_fiscal.sections.legalFramework.conclusion')
        },
        {
            img: "https://images.pexels.com/photos/6863261/pexels-photo-6863261.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: t('information_general.cadre_juridique_fiscal.sections.fiscalFramework.title'),
            text: t('information_general.cadre_juridique_fiscal.sections.fiscalFramework.text'),
            description: [
                {
                    title: t('information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.mainTaxes.title'),
                    aspects: [
                        {
                            title: t('information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.mainTaxes.aspects.corporateTax.title'),
                            text: t('information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.mainTaxes.aspects.corporateTax.text')
                        },
                        {
                            title: t('information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.mainTaxes.aspects.incomeTax.title'),
                            text: t('information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.mainTaxes.aspects.incomeTax.text')
                        },
                        {
                            title: t('information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.mainTaxes.aspects.vat.title'),
                            text: t('information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.mainTaxes.aspects.vat.text')
                        },
                        {
                            title: t('information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.mainTaxes.aspects.customsDuties.title'),
                            text: t('information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.mainTaxes.aspects.customsDuties.text')
                        },
                        {
                            title: t('information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.mainTaxes.aspects.otherTaxes.title'),
                            text: t('information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.mainTaxes.aspects.otherTaxes.text')
                        }
                    ]
                },
                {
                    title: t('information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.taxIncentives.title'),
                    aspects: [
                        {
                            title: t('information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.taxIncentives.aspects.investmentCode.title'),
                            text: t('information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.taxIncentives.aspects.investmentCode.text')
                        },
                        {
                            title: t('information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.taxIncentives.aspects.bilateralAgreements.title'),
                            text: t('information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.taxIncentives.aspects.bilateralAgreements.text')
                        },
                        {
                            title: t('information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.taxIncentives.aspects.sectoralIncentives.title'),
                            text: t('information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.taxIncentives.aspects.sectoralIncentives.text')
                        },
                    ]
                }
            ],
            documents: [
                {
                    name: t('information_general.cadre_juridique_fiscal.sections.fiscalFramework.documents.generalTaxCode'),
                    url: 'https://www.impots.cm/fr/code-general-des-impots-mis-jour-au-1er-janvier-2025'
                }
            ],
            conclusion: t('information_general.cadre_juridique_fiscal.sections.fiscalFramework.conclusion')
        },
        {
            img: "https://images.pexels.com/photos/8872563/pexels-photo-8872563.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: t('information_general.cadre_juridique_fiscal.sections.opportunities.title'),
            text: t('information_general.cadre_juridique_fiscal.sections.opportunities.text'),
            description: [
                {
                    title: t('information_general.cadre_juridique_fiscal.sections.opportunities.description.standards.title'),
                    aspects: [
                        {
                            title: t('information_general.cadre_juridique_fiscal.sections.opportunities.description.standards.aspects.regionalHarmonization.title'),
                            text: t('information_general.cadre_juridique_fiscal.sections.opportunities.description.standards.aspects.regionalHarmonization.text')
                        },
                        {
                            title: t('information_general.cadre_juridique_fiscal.sections.opportunities.description.standards.aspects.fiscalIncentives.title'),
                            text: t('information_general.cadre_juridique_fiscal.sections.opportunities.description.standards.aspects.fiscalIncentives.text')
                        },
                        {
                            title: t('information_general.cadre_juridique_fiscal.sections.opportunities.description.standards.aspects.legalStability.title'),
                            text: t('information_general.cadre_juridique_fiscal.sections.opportunities.description.standards.aspects.legalStability.text')
                        },
                    ]
                },
            ]
        },
    ];
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
                        {t('information_general.cadre_juridique_fiscal.hero.title')}
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                        {t('information_general.cadre_juridique_fiscal.hero.subtitle')}
                    </p>
                </motion.div>
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
                                {t('information_general.cadre_juridique_fiscal.featured')}
                            </div>
                            <div className="px-8 pb-4 pt-10 sm:px-10 sm:pb-0 md:pt-12 text-white">
                                <h3 className="font-bold text-2xl sm:text-3xl">
                                    {t('information_general.cadre_juridique_fiscal.introduction.title')}
                                </h3>
                                <p className="mt-6 text-base leading-relaxed text-gray-300">
                                    {t('information_general.cadre_juridique_fiscal.introduction.text')}
                                </p>
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
                                {t('information_general.cadre_juridique_fiscal.conclusionFinal')}
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
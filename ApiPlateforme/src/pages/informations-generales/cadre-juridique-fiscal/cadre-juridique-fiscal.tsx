import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";

const CadreJuridiqueFiscal: React.FC = () => {
  const { t } = useTranslation();

  const infos = [
    {
      img: "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: t(
        "information_general.cadre_juridique_fiscal.sections.legalFramework.title",
      ),
      text: t(
        "information_general.cadre_juridique_fiscal.sections.legalFramework.text",
      ),
      description: [
        {
          title: t(
            "information_general.cadre_juridique_fiscal.sections.legalFramework.description.system.title",
          ),
          aspects: [
            {
              title: t(
                "information_general.cadre_juridique_fiscal.sections.legalFramework.description.system.aspects.civilLaw.title",
              ),
              text: t(
                "information_general.cadre_juridique_fiscal.sections.legalFramework.description.system.aspects.civilLaw.text",
              ),
            },
            {
              title: t(
                "information_general.cadre_juridique_fiscal.sections.legalFramework.description.system.aspects.customaryLaw.title",
              ),
              text: t(
                "information_general.cadre_juridique_fiscal.sections.legalFramework.description.system.aspects.customaryLaw.text",
              ),
            },
          ],
        },
        {
          title: t(
            "information_general.cadre_juridique_fiscal.sections.legalFramework.description.mainLaws.title",
          ),
          aspects: [
            {
              title: t(
                "information_general.cadre_juridique_fiscal.sections.legalFramework.description.mainLaws.aspects.investmentCode.title",
              ),
              text: t(
                "information_general.cadre_juridique_fiscal.sections.legalFramework.description.mainLaws.aspects.investmentCode.text",
              ),
            },
            {
              title: t(
                "information_general.cadre_juridique_fiscal.sections.legalFramework.description.mainLaws.aspects.laborCode.title",
              ),
              text: t(
                "information_general.cadre_juridique_fiscal.sections.legalFramework.description.mainLaws.aspects.laborCode.text",
              ),
            },
            {
              title: t(
                "information_general.cadre_juridique_fiscal.sections.legalFramework.description.mainLaws.aspects.commercialCode.title",
              ),
              text: t(
                "information_general.cadre_juridique_fiscal.sections.legalFramework.description.mainLaws.aspects.commercialCode.text",
              ),
            },
            {
              title: t(
                "information_general.cadre_juridique_fiscal.sections.legalFramework.description.mainLaws.aspects.landRegulation.title",
              ),
              text: t(
                "information_general.cadre_juridique_fiscal.sections.legalFramework.description.mainLaws.aspects.landRegulation.text",
              ),
            },
          ],
        },
        {
          title: t(
            "information_general.cadre_juridique_fiscal.sections.legalFramework.description.legalInstitutions.title",
          ),
          aspects: [
            {
              title: t(
                "information_general.cadre_juridique_fiscal.sections.legalFramework.description.legalInstitutions.aspects.firstInstanceCourts.title",
              ),
              text: t(
                "information_general.cadre_juridique_fiscal.sections.legalFramework.description.legalInstitutions.aspects.firstInstanceCourts.text",
              ),
            },
            {
              title: t(
                "information_general.cadre_juridique_fiscal.sections.legalFramework.description.legalInstitutions.aspects.supremeCourt.title",
              ),
              text: t(
                "information_general.cadre_juridique_fiscal.sections.legalFramework.description.legalInstitutions.aspects.supremeCourt.text",
              ),
            },
            {
              title: t(
                "information_general.cadre_juridique_fiscal.sections.legalFramework.description.legalInstitutions.aspects.administrativeTribunals.title",
              ),
              text: t(
                "information_general.cadre_juridique_fiscal.sections.legalFramework.description.legalInstitutions.aspects.administrativeTribunals.text",
              ),
            },
          ],
        },
      ],
      documents: [
        {
          name: t(
            "information_general.cadre_juridique_fiscal.sections.legalFramework.documents.investmentCode",
          ),
          url: "https://www.cameroontradeportal.cm/tradeportal/templates/Tip_accueil/docs/Réformes%20nationales/code%20des%20investissements%20cameroun.pdf",
        },
        {
          name: t(
            "information_general.cadre_juridique_fiscal.sections.legalFramework.documents.laborCode",
          ),
          url: "https://www.minfopra.gov.cm/recueil/fichiers%20word/LOI%20N%C2%B0%20092-007%20DU%2014%20A0UT%201992%20portant%20code%20du%20travail.pdf",
        },
        {
          name: t(
            "information_general.cadre_juridique_fiscal.sections.legalFramework.documents.commercialCode",
          ),
          url: "https://faolex.fao.org/docs/pdf/cmr220469.pdf",
        },
        {
          name: t(
            "information_general.cadre_juridique_fiscal.sections.legalFramework.documents.landRegulation",
          ),
          url: "https://yaounde.eregulations.org/media/decret%2076-165%20du%2027%20avril%201976%20fixant%20les%20conditions%20d%27obtention%20du%20titre%20au%20foncier%20Cameroun.pdf",
        },
      ],
      conclusion: t(
        "information_general.cadre_juridique_fiscal.sections.legalFramework.conclusion",
      ),
    },
    {
      img: "https://images.pexels.com/photos/6863261/pexels-photo-6863261.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: t(
        "information_general.cadre_juridique_fiscal.sections.fiscalFramework.title",
      ),
      text: t(
        "information_general.cadre_juridique_fiscal.sections.fiscalFramework.text",
      ),
      description: [
        {
          title: t(
            "information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.mainTaxes.title",
          ),
          aspects: [
            {
              title: t(
                "information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.mainTaxes.aspects.corporateTax.title",
              ),
              text: t(
                "information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.mainTaxes.aspects.corporateTax.text",
              ),
            },
            {
              title: t(
                "information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.mainTaxes.aspects.incomeTax.title",
              ),
              text: t(
                "information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.mainTaxes.aspects.incomeTax.text",
              ),
            },
            {
              title: t(
                "information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.mainTaxes.aspects.vat.title",
              ),
              text: t(
                "information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.mainTaxes.aspects.vat.text",
              ),
            },
            {
              title: t(
                "information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.mainTaxes.aspects.customsDuties.title",
              ),
              text: t(
                "information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.mainTaxes.aspects.customsDuties.text",
              ),
            },
            {
              title: t(
                "information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.mainTaxes.aspects.otherTaxes.title",
              ),
              text: t(
                "information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.mainTaxes.aspects.otherTaxes.text",
              ),
            },
          ],
        },
        {
          title: t(
            "information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.taxIncentives.title",
          ),
          aspects: [
            {
              title: t(
                "information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.taxIncentives.aspects.investmentCode.title",
              ),
              text: t(
                "information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.taxIncentives.aspects.investmentCode.text",
              ),
            },
            {
              title: t(
                "information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.taxIncentives.aspects.bilateralAgreements.title",
              ),
              text: t(
                "information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.taxIncentives.aspects.bilateralAgreements.text",
              ),
            },
            {
              title: t(
                "information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.taxIncentives.aspects.sectoralIncentives.title",
              ),
              text: t(
                "information_general.cadre_juridique_fiscal.sections.fiscalFramework.description.taxIncentives.aspects.sectoralIncentives.text",
              ),
            },
          ],
        },
      ],
      documents: [
        {
          name: t(
            "information_general.cadre_juridique_fiscal.sections.fiscalFramework.documents.generalTaxCode",
          ),
          // Ce lien n'est PAS un PDF téléchargeable : c'est la page officielle de la DGI
          // où le CGI 2025 est consultable en ligne (affiché page par page en images).
          // Vérifié le 05/09/2026 : aucun fichier .pdf n'est proposé sur cette page.
          url: "https://www.impots.cm/fr/code-general-des-impots-mis-jour-au-1er-janvier-2025",
        },
      ],
      conclusion: t(
        "information_general.cadre_juridique_fiscal.sections.fiscalFramework.conclusion",
      ),
    },
    {
      img: "https://images.pexels.com/photos/8872563/pexels-photo-8872563.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: t(
        "information_general.cadre_juridique_fiscal.sections.opportunities.title",
      ),
      text: t(
        "information_general.cadre_juridique_fiscal.sections.opportunities.text",
      ),
      description: [
        {
          title: t(
            "information_general.cadre_juridique_fiscal.sections.opportunities.description.standards.title",
          ),
          aspects: [
            {
              title: t(
                "information_general.cadre_juridique_fiscal.sections.opportunities.description.standards.aspects.regionalHarmonization.title",
              ),
              text: t(
                "information_general.cadre_juridique_fiscal.sections.opportunities.description.standards.aspects.regionalHarmonization.text",
              ),
            },
            {
              title: t(
                "information_general.cadre_juridique_fiscal.sections.opportunities.description.standards.aspects.fiscalIncentives.title",
              ),
              text: t(
                "information_general.cadre_juridique_fiscal.sections.opportunities.description.standards.aspects.fiscalIncentives.text",
              ),
            },
            {
              title: t(
                "information_general.cadre_juridique_fiscal.sections.opportunities.description.standards.aspects.legalStability.title",
              ),
              text: t(
                "information_general.cadre_juridique_fiscal.sections.opportunities.description.standards.aspects.legalStability.text",
              ),
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      {/* HERO */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-50"
          alt=""
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-5xl font-bold text-white reveal">
            {t("information_general.cadre_juridique_fiscal.hero.title")}
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            {t("information_general.cadre_juridique_fiscal.hero.subtitle")}
          </p>
        </motion.div>
      </div>

      {/* INTRODUCTION — carte blanche + drapeau en filigrane, même style que "Bienvenue au Cameroun" */}
      <section className="bg-white py-20 sm:py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-7xl px-6 lg:px-8"
        >
          <div className="relative mt-8 lg:row-span-2 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500 overflow-hidden bg-white border border-gray-200">
            {/* Drapeau du Cameroun en arrière-plan subtil */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg"
                alt="Drapeau du Cameroun"
                className="absolute right-0 top-0 h-full w-full sm:w-2/3 lg:w-1/3 object-cover opacity-[0.06] sm:opacity-10"
              />
            </div>

            <div className="relative min-h-auto pb-6 w-full grow">
              <div className="px-5 sm:px-10 pb-4 pt-8 sm:pt-10 md:pt-12 text-gray-900">
                <h3 className="font-bold text-xl sm:text-3xl text-[#0F0B60] leading-tight">
                  {t(
                    "information_general.cadre_juridique_fiscal.introduction.title",
                  )}
                </h3>
                <p className="mt-6 text-sm sm:text-base leading-relaxed text-gray-600">
                  {t(
                    "information_general.cadre_juridique_fiscal.introduction.text",
                  )}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTIONS DÉTAILLÉES (juridique / fiscal / opportunités) */}
      <section className="mx-auto mb-4 max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        {infos.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`mx-auto max-w-7xl px-6 lg:px-8 py-16 ${
              index % 2 === 0 ? "bg-gray-50" : "bg-white"
            }`}
          >
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
              <div
                className={`reveal ${index % 2 === 1 ? "-order-first" : ""}`}
              >
                <img
                  src={section.img}
                  alt={section.title}
                  className="rounded-lg shadow-md w-full h-auto object-cover transition-transform duration-500 hover:rotate-2 hover:scale-105"
                />
                {section.documents && section.documents.length > 0 && (
                  <div className="mt-8 flex flex-col gap-3">
                    {section.documents.map((doc, docIndex) => {
                      // Certains documents (ex. le CGI sur impots.cm) ne sont pas des
                      // PDF téléchargeables : ce sont des pages à consulter en ligne.
                      const isOnlineOnly = doc.url.includes("impots.cm");

                      return (
                        <a
                          key={docIndex}
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 px-4 py-3 w-max max-w-full bg-white border border-gray-200 hover:border-blue-500 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          <div className="bg-blue-50 text-blue-600 p-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                            {isOnlineOnly ? (
                              // Icône "lien externe" pour une consultation en ligne
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            ) : (
                              // Icône "téléchargement" pour un vrai fichier PDF
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                              </svg>
                            )}
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                              {isOnlineOnly
                                ? t(
                                    "information_general.cadre_juridique_fiscal.consultOnline",
                                  )
                                : t(
                                    "information_general.cadre_juridique_fiscal.downloadDocument",
                                  )}
                            </span>
                            <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-300 truncate">
                              {doc.name}
                            </span>
                          </div>
                        </a>
                      );
                    })}
                  </div>
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
                      <h3 className="text-xl font-semibold text-gray-900">
                        {desc.title}
                      </h3>
                      {desc.aspects.map((aspect, aspectIndex) => (
                        <div
                          key={aspectIndex}
                          className="mt-4 pl-4 border-l-4 border-red-900"
                        >
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
                {section.conclusion && (
                  <p className="mt-4 text-lg text-gray-600">
                    {section.conclusion}
                  </p>
                )}
              </div>
            </div>
          </motion.section>
        ))}
      </section>

      {/* CONCLUSION FINALE — carte blanche + drapeau en filigrane, même style que "Priorités du gouvernement" */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mx-auto m-20 max-w-2xl px-6 lg:max-w-7xl lg:px-8"
      >
        <div className="relative mt-8 lg:row-span-2 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500 overflow-hidden bg-white border border-gray-200">
          {/* Drapeau du Cameroun en arrière-plan subtil */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg"
              alt="Drapeau du Cameroun"
              className="absolute right-0 top-0 h-full w-full sm:w-2/3 lg:w-1/3 object-cover opacity-[0.06] sm:opacity-10"
            />
          </div>
          <div className="relative min-h-auto pb-6 w-full grow">
            <div className="px-5 sm:px-10 pb-6 pt-8 sm:pt-10 md:pt-12 text-gray-900">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircleIcon className="h-8 w-8 text-green-600" />
                <h3 className="font-bold text-xl sm:text-3xl text-[#0F0B60] leading-tight">
                  {t(
                    "information_general.cadre_juridique_fiscal.conclusionTitle",
                  )}
                </h3>
              </div>
              <p className="text-justify leading-relaxed text-gray-700">
                {t(
                  "information_general.cadre_juridique_fiscal.conclusionFinal",
                )}
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default CadreJuridiqueFiscal;

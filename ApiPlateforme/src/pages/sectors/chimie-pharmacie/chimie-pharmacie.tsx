import ActionButtonComponent from "../../../components/actionButtonComponent/actionButtonComponent";
import { BuildingOfficeIcon } from "@heroicons/react/20/solid";
import { LinkIcon, BeakerIcon, CogIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BulbOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

const ChimiePharmacie = () => {
  const { t } = useTranslation();
  const statistiques = [
    {
      id: 1,
      name: t(
        "pages_secteurs.chimie_pharmacie.stats.poles_competitivite.titre",
      ),
      value: t(
        "pages_secteurs.chimie_pharmacie.stats.poles_competitivite.valeur",
      ),
      icon: BuildingOfficeIcon,
    },
    {
      id: 2,
      name: t("pages_secteurs.chimie_pharmacie.stats.filieres_integrees.titre"),
      value: t(
        "pages_secteurs.chimie_pharmacie.stats.filieres_integrees.valeur",
      ),
      icon: LinkIcon,
    },
    {
      id: 3,
      name: t(
        "pages_secteurs.chimie_pharmacie.stats.medicaments_generiques.titre",
      ),
      value: t(
        "pages_secteurs.chimie_pharmacie.stats.medicaments_generiques.valeur",
      ),
      icon: BeakerIcon,
    },
    {
      id: 4,
      name: t(
        "pages_secteurs.chimie_pharmacie.stats.entreprises_modernisees.titre",
      ),
      value: t(
        "pages_secteurs.chimie_pharmacie.stats.entreprises_modernisees.valeur",
      ),
      icon: CogIcon,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://media.istockphoto.com/id/658148844/fr/photo/laboratoire-de-recherche.jpg?b=1&s=612x612&w=0&k=20&c=n2lc6eC_wUt2zJu3KYcOyp4tQc3v1EQBuwoes6Svbzc="
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-50"
          alt="Background"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-start text-white px-6 lg:px-24"
        >
          <h1 className="text-4xl font-bold">
            {t("pages_secteurs.chimie_pharmacie.hero.titre")}
          </h1>
          <p className="mt-4 text-lg max-w-2xl">
            {t("pages_secteurs.chimie_pharmacie.hero.description")}
          </p>
          <div className="mt-6 py-2">
            <ActionButtonComponent
              title={t("pages_secteurs.chimie_pharmacie.hero.bouton")}
              color="#A020F0"
              filterSecteur="Chimie et Pharmacie"
            />
          </div>
        </motion.div>
      </div>

      {/* Objectif Section */}
      <div className="bg-white py-20 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-7xl px-6 lg:px-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            {t("pages_secteurs.chimie_pharmacie.objectif.titre")}
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            {t("pages_secteurs.chimie_pharmacie.objectif.texte")}
          </p>
        </motion.div>
      </div>
      {/* Section Principale */}
      <div className="overflow-hidden bg-purple-50 py-20 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-center mb-8"
          >
            {t("pages_secteurs.chimie_pharmacie.actions.titre")}s
          </motion.h2>

          {/* Cartes Thématiques */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
          >
            {/* Compétitivité et Innovation */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://media.istockphoto.com/id/1190347732/fr/photo/concept-de-lindustrie-4-0-robot-ramasse-le-produit-de-la-voiture-automatis%C3%A9e-sur-la-ligne-de.webp?a=1&s=612x612&w=0&k=20&c=Xrvte_I_OkqwtvCy2b-O1iK_1KtXwJiHBS0csk6BJBw="
                  alt="Compétitivité et Innovation"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t(
                    "pages_secteurs.chimie_pharmacie.actions.competitivite_innovation.titre",
                  )}
                </h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>
                    {t(
                      "pages_secteurs.chimie_pharmacie.actions.competitivite_innovation.amelioration_couts",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.chimie_pharmacie.actions.competitivite_innovation.groupements_filieres",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.chimie_pharmacie.actions.competitivite_innovation.poles_competitivite",
                    )}
                  </li>
                </ul>
              </div>
            </div>

            {/* Modernisation des Entreprises */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaX4jYrbeg45VmPF0TFOCrPUbYJUb37xAuzA&s"
                  alt="Modernisation des Entreprises"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t(
                    "pages_secteurs.chimie_pharmacie.actions.modernisation_entreprises.titre",
                  )}
                </h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>
                    {t(
                      "pages_secteurs.chimie_pharmacie.actions.modernisation_entreprises.mise_niveau_qhse",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.chimie_pharmacie.actions.modernisation_entreprises.innovation_production",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.chimie_pharmacie.actions.modernisation_entreprises.maitrise_industrielle",
                    )}
                  </li>
                </ul>
              </div>
            </div>

            {/* État Pro-Business */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://img.freepik.com/photos-gratuite/travailleuse-afro-americaine-faisant-inventaire-colis-organisant-calendrier-livraison-tablette-numerique-sa-collegue-travaille-arriere-plan_637285-2227.jpg?ga=GA1.1.1625797867.1700058386&semt=ais_hybrid"
                  alt="État Pro-Business"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t(
                    "pages_secteurs.chimie_pharmacie.actions.etat_pro_business.titre",
                  )}
                </h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>
                    {t(
                      "pages_secteurs.chimie_pharmacie.actions.etat_pro_business.logistique",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.chimie_pharmacie.actions.etat_pro_business.infrastructures",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.chimie_pharmacie.actions.etat_pro_business.environnement_favorable",
                    )}
                  </li>
                </ul>
              </div>
            </div>

            {/* Filières Intégrées */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://img.freepik.com/photos-gratuite/vaccin-3d-contre-coronavirus_23-2148963960.jpg"
                  alt="Filières Intégrées"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t(
                    "pages_secteurs.chimie_pharmacie.actions.filieres_integrees.titre",
                  )}
                </h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>
                    {t(
                      "pages_secteurs.chimie_pharmacie.actions.filieres_integrees.petrochimie_plasturgie",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.chimie_pharmacie.actions.filieres_integrees.oleochimie_verte",
                    )}
                  </li>
                </ul>
              </div>
            </div>

            {/* Industrie Pharmaceutique */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Industrie Pharmaceutique"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t(
                    "pages_secteurs.chimie_pharmacie.actions.industrie_pharmaceutique.titre",
                  )}
                </h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>
                    {t(
                      "pages_secteurs.chimie_pharmacie.actions.industrie_pharmaceutique.medicaments_generiques",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.chimie_pharmacie.actions.industrie_pharmaceutique.medicaments_traditionnels",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.chimie_pharmacie.actions.industrie_pharmaceutique.industrie_locale",
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicateurs Clés */}
      <div className="bg-white py-20 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-center mb-8"
          >
            {t("pages_secteurs.chimie_pharmacie.stats.titre")}
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {statistiques.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center">
                  <stat.icon className="h-12 w-12 text-[#A020F0]" />
                </div>
                <p className="mt-4 text-3xl font-bold text-gray-900">
                  {stat.value}
                </p>
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
              {t("pages_secteurs.chimie_pharmacie.potentiel.titre")}
            </h1>

            {/* Description (en arrière-plan) */}
            <p className="text-center leading-relaxed mb-6 relative z-0">
              {t("pages_secteurs.chimie_pharmacie.potentiel.description")}
            </p>

            {/* Grille des rubriques (en arrière-plan) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center relative z-0">
              {/* Carte Opportunités */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group w-full max-w-md relative overflow-hidden">
                {/* Ligne d'accentuation #0F0B60 */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#0F0B60]"></div>
                {/* Contenu */}
                <div className="relative z-10">
                  {/* En-tête de la carte */}
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-[#0F0B60]/5 rounded-2xl flex items-center justify-center border border-[#0F0B60]/10 group-hover:bg-[#0F0B60] transition-colors duration-300">
                      <BulbOutlined className="text-[#0F0B60] text-3xl group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 ml-5 group-hover:text-[#0F0B60] transition-colors duration-300">
                      {t(
                        "pages_secteurs.chimie_pharmacie.potentiel.opportunites.titre",
                      )}
                    </h2>
                  </div>
                  {/* Liste des points */}
                  <ul className="space-y-5 text-gray-600">
                    <li className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        {t(
                          "pages_secteurs.chimie_pharmacie.potentiel.opportunites.marche_croissance",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        {t(
                          "pages_secteurs.chimie_pharmacie.potentiel.opportunites.production_generiques",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        {t(
                          "pages_secteurs.chimie_pharmacie.potentiel.opportunites.ressources_naturelles",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        {t(
                          "pages_secteurs.chimie_pharmacie.potentiel.opportunites.exportation_regionale",
                        )}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Carte Défis */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group w-full max-w-md relative overflow-hidden">
                {/* Ligne d'accentuation #0F0B60 */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#0F0B60]"></div>
                {/* Contenu */}
                <div className="relative z-10">
                  {/* En-tête de la carte */}
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-[#0F0B60]/5 rounded-2xl flex items-center justify-center border border-[#0F0B60]/10 group-hover:bg-[#0F0B60] transition-colors duration-300">
                      <ExclamationCircleOutlined className="text-[#0F0B60] text-3xl group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 ml-5 group-hover:text-[#0F0B60] transition-colors duration-300">
                      {t(
                        "pages_secteurs.chimie_pharmacie.potentiel.defis.titre",
                      )}
                    </h2>
                  </div>
                  {/* Liste des points */}
                  <ul className="space-y-5 text-gray-600">
                    <li className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        {t(
                          "pages_secteurs.chimie_pharmacie.potentiel.defis.importations",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        {t(
                          "pages_secteurs.chimie_pharmacie.potentiel.defis.recherche_developpement",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        {t(
                          "pages_secteurs.chimie_pharmacie.potentiel.defis.normes_qualite",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        {t(
                          "pages_secteurs.chimie_pharmacie.potentiel.defis.acces_financement",
                        )}
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

export default ChimiePharmacie;

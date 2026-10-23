import ActionButtonComponent from "../../../components/actionButtonComponent/actionButtonComponent";
import { CubeIcon, FireIcon } from "@heroicons/react/20/solid";
import { LeafIcon, TrafficCone } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BulbOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

const HydrocaburesRaffinage = () => {
  const { t } = useTranslation();
  const statistiques = [
    {
      id: 1,
      name: t(
        "pages_secteurs.hydrocarbures_petrochimie_raffinage.stats.gaz_distribue.titre",
      ),
      value: t(
        "pages_secteurs.hydrocarbures_petrochimie_raffinage.stats.gaz_distribue.valeur",
      ),
      icon: FireIcon,
    },
    {
      id: 2,
      name: t(
        "pages_secteurs.hydrocarbures_petrochimie_raffinage.stats.biocarburants.titre",
      ),
      value: t(
        "pages_secteurs.hydrocarbures_petrochimie_raffinage.stats.biocarburants.valeur",
      ),
      icon: LeafIcon,
    },
    {
      id: 3,
      name: t(
        "pages_secteurs.hydrocarbures_petrochimie_raffinage.stats.pipeline.titre",
      ),
      value: t(
        "pages_secteurs.hydrocarbures_petrochimie_raffinage.stats.pipeline.valeur",
      ),
      icon: TrafficCone,
    },
    {
      id: 4,
      name: t(
        "pages_secteurs.hydrocarbures_petrochimie_raffinage.stats.mineraux_valorises.titre",
      ),
      value: t(
        "pages_secteurs.hydrocarbures_petrochimie_raffinage.stats.mineraux_valorises.valeur",
      ),
      icon: CubeIcon,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://img.freepik.com/photos-gratuite/usine-moderne-dans-zone-industrielle-sous-ciel-bleu_181624-6369.jpg?t=st=1738415551~exp=1738419151~hmac=6298745f4be4f2ae0b1e5818036321fd9206a6fc0a7a40335126a535832db728&w=740"
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
            {t("pages_secteurs.hydrocarbures_petrochimie_raffinage.hero.titre")}
          </h1>
          <p className="mt-4 text-lg max-w-2xl">
            {t(
              "pages_secteurs.hydrocarbures_petrochimie_raffinage.hero.description",
            )}
          </p>
          <div className="mt-6 py-2">
            <ActionButtonComponent
              title={t(
                "pages_secteurs.hydrocarbures_petrochimie_raffinage.hero.bouton",
              )}
              color="#DC2123"
              filterSecteur="Hydrocarburess/Raffinage"
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
            {t(
              "pages_secteurs.hydrocarbures_petrochimie_raffinage.objectif.titre",
            )}
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            {t(
              "pages_secteurs.hydrocarbures_petrochimie_raffinage.objectif.texte",
            )}
          </p>
        </motion.div>
      </div>
      {/* Section Principale */}
      <div className="overflow-hidden bg-red-50 py-20 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-center mb-8"
          >
            {t(
              "pages_secteurs.hydrocarbures_petrochimie_raffinage.actions.titre",
            )}
          </motion.h2>

          {/* Cartes Thématiques */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
          >
            {/* Valorisation des Ressources */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://img.freepik.com/photos-gratuite/plate-forme-petroliere-dans-ocean-coucher-soleil-derriere-elle_123827-23498.jpg?t=st=1738416888~exp=1738420488~hmac=93f655c0c6058f79e180f86a4875fe05e6039cd2e536191525e5c62516804eff&w=740"
                  alt="Valorisation des Ressources"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t(
                    "pages_secteurs.hydrocarbures_petrochimie_raffinage.actions.valorisation_ressources.titre",
                  )}
                </h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>
                    {t(
                      "pages_secteurs.hydrocarbures_petrochimie_raffinage.actions.valorisation_ressources.petrole_gaz",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.hydrocarbures_petrochimie_raffinage.actions.valorisation_ressources.mineraux",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.hydrocarbures_petrochimie_raffinage.actions.valorisation_ressources.biocarburants",
                    )}
                  </li>
                </ul>
              </div>
            </div>

            {/* Infrastructures Énergétiques */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://img.freepik.com/photos-gratuite/pollution-exterieur-industrie-lumiere-du-jour_23-2149057680.jpg?t=st=1738416979~exp=1738420579~hmac=e73d5da6ad25b9566d165116cbf88ba27f89bc54220b68d3fc341b079ef139d7&w=740"
                  alt="Infrastructures Énergétiques"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t(
                    "pages_secteurs.hydrocarbures_petrochimie_raffinage.actions.infrastructures_energetiques.titre",
                  )}
                </h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>
                    {t(
                      "pages_secteurs.hydrocarbures_petrochimie_raffinage.actions.infrastructures_energetiques.restructuration_sonara",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.hydrocarbures_petrochimie_raffinage.actions.infrastructures_energetiques.usine_engrais",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.hydrocarbures_petrochimie_raffinage.actions.infrastructures_energetiques.centres_traitement",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.hydrocarbures_petrochimie_raffinage.actions.infrastructures_energetiques.pipeline",
                    )}
                  </li>
                </ul>
              </div>
            </div>

            {/* Gaz Naturel et GPL */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://img.freepik.com/photos-gratuite/rendu-3d-bouteille-gaz_23-2149290463.jpg?t=st=1738417046~exp=1738420646~hmac=1c7880f9b85ff08d6659532050a744b5096a9c7348ca06af1691c3a7430ffd19&w=740"
                  alt="Gaz Naturel et GPL"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t(
                    "pages_secteurs.hydrocarbures_petrochimie_raffinage.actions.gaz_naturel_gpl.titre",
                  )}
                </h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>
                    {t(
                      "pages_secteurs.hydrocarbures_petrochimie_raffinage.actions.gaz_naturel_gpl.distribution_douala",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.hydrocarbures_petrochimie_raffinage.actions.gaz_naturel_gpl.promotion_carburant",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.hydrocarbures_petrochimie_raffinage.actions.gaz_naturel_gpl.installations_stockage",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.hydrocarbures_petrochimie_raffinage.actions.gaz_naturel_gpl.usine_flotante",
                    )}
                  </li>
                </ul>
              </div>
            </div>

            {/* Centrales et Énergie Thermique */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://img.freepik.com/photos-gratuite/grande-cheminee-fumee_268835-3399.jpg?t=st=1738417109~exp=1738420709~hmac=c263d80d905547aa58d98ea0131bd8b607406267b4c9604b2d968b3680fc4778&w=360"
                  alt="Centrales et Énergie Thermique"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t(
                    "pages_secteurs.hydrocarbures_petrochimie_raffinage.actions.centrales_energie.titre",
                  )}
                </h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>
                    {t(
                      "pages_secteurs.hydrocarbures_petrochimie_raffinage.actions.centrales_energie.extension_kribi",
                    )}
                  </li>
                  <li>
                    F
                    {t(
                      "pages_secteurs.hydrocarbures_petrochimie_raffinage.actions.centrales_energie.fourniture_gaz",
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
            {t(
              "pages_secteurs.hydrocarbures_petrochimie_raffinage.stats.titre",
            )}
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
                  <stat.icon className="h-12 w-12 text-[#DC2123]" />
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
              {t(
                "pages_secteurs.hydrocarbures_petrochimie_raffinage.potentiel.titre",
              )}
            </h1>

            {/* Description (en arrière-plan) */}
            <p className="text-center leading-relaxed mb-6 relative z-0">
              {t(
                "pages_secteurs.hydrocarbures_petrochimie_raffinage.potentiel.description",
              )}
            </p>

            {/* Grille des rubriques (en arrière-plan) */}
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
                        "pages_secteurs.hydrocarbures_petrochimie_raffinage.potentiel.opportunites.titre",
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
                          "pages_secteurs.hydrocarbures_petrochimie_raffinage.potentiel.opportunites.reserves",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        {t(
                          "pages_secteurs.hydrocarbures_petrochimie_raffinage.potentiel.opportunites.raffinage_local",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        {t(
                          "pages_secteurs.hydrocarbures_petrochimie_raffinage.potentiel.opportunites.exportation_gaz",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        {t(
                          "pages_secteurs.hydrocarbures_petrochimie_raffinage.potentiel.opportunites.emplois",
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
                        "pages_secteurs.hydrocarbures_petrochimie_raffinage.potentiel.defis.titre",
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
                          "pages_secteurs.hydrocarbures_petrochimie_raffinage.potentiel.defis.prix_mondiaux",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        {t(
                          "pages_secteurs.hydrocarbures_petrochimie_raffinage.potentiel.defis.infrastructures_vieillissantes",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        {t(
                          "pages_secteurs.hydrocarbures_petrochimie_raffinage.potentiel.defis.environnement",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        {t(
                          "pages_secteurs.hydrocarbures_petrochimie_raffinage.potentiel.defis.importations",
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

export default HydrocaburesRaffinage;

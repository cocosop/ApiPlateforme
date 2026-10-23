import ActionButtonComponent from "../../../components/actionButtonComponent/actionButtonComponent";
import { CubeIcon } from "@heroicons/react/20/solid";
import { ClipboardIcon, CogIcon, ShieldCheckIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BulbOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

const TextileConfectionCuir = () => {
  const { t } = useTranslation();
  const statistiques = [
    {
      id: 1,
      name: t(
        "pages_secteurs.textile_confection_cuir.stats.coton_transforme.titre",
      ),
      value: t(
        "pages_secteurs.textile_confection_cuir.stats.coton_transforme.valeur",
      ),
      icon: CubeIcon,
    },
    {
      id: 2,
      name: t("pages_secteurs.textile_confection_cuir.stats.filatures.titre"),
      value: t("pages_secteurs.textile_confection_cuir.stats.filatures.valeur"),
      icon: CogIcon,
    },
    {
      id: 3,
      name: t("pages_secteurs.textile_confection_cuir.stats.contrebande.titre"),
      value: t(
        "pages_secteurs.textile_confection_cuir.stats.contrebande.valeur",
      ),
      icon: ShieldCheckIcon,
    },
    {
      id: 4,
      name: t(
        "pages_secteurs.textile_confection_cuir.stats.commande_publique.titre",
      ),
      value: t(
        "pages_secteurs.textile_confection_cuir.stats.commande_publique.valeur",
      ),
      icon: ClipboardIcon,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://img.freepik.com/photos-premium/pile-textile-colore-plie-tas-tissu-tissu_344538-423.jpg?w=740"
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
            {t("pages_secteurs.textile_confection_cuir.hero.titre")}
          </h1>
          <p className="mt-4 text-lg max-w-2xl">
            {t("pages_secteurs.textile_confection_cuir.hero.description")}
          </p>
          <div className="mt-6 py-2">
            <ActionButtonComponent
              title={t("pages_secteurs.textile_confection_cuir.hero.bouton")}
              color="#000000"
              filterSecteur="Textile/Confection/Cuir"
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
            {t("pages_secteurs.textile_confection_cuir.objectif.titre")}
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            {t("pages_secteurs.textile_confection_cuir.objectif.texte")}
          </p>
        </motion.div>
      </div>
      {/* Section Principale */}
      <div className="overflow-hidden bg-gray-50 py-20 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-center mb-8"
          >
            {t("pages_secteurs.textile_confection_cuir.actions.titre")}
          </motion.h2>

          {/* Cartes Thématiques */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
          >
            {/* Renforcement Industriel */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://media.istockphoto.com/id/174950853/fr/photo/denim-industrie-textile-tissage-airjet-m%C3%A9tiers-%C3%A0-tisser-recouverts-de-tissu-sur-un-jean.webp?a=1&b=1&s=612x612&w=0&k=20&c=GAgkE9Yf-XkjP9_I61H_rX23CakLnMzh7VFuxC2wTCk="
                  alt="Renforcement Industriel"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t(
                    "pages_secteurs.textile_confection_cuir.actions.renforcement_industriel.titre",
                  )}
                </h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>
                    {t(
                      "pages_secteurs.textile_confection_cuir.actions.renforcement_industriel.fusion",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.textile_confection_cuir.actions.renforcement_industriel.capacites",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.textile_confection_cuir.actions.renforcement_industriel.nouvelles_filatures",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.textile_confection_cuir.actions.renforcement_industriel.transformation_coton",
                    )}
                  </li>
                </ul>
              </div>
            </div>

            {/* Innovation et Formation */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://img.freepik.com/photos-gratuite/couturier-travaillant-dans-atelier-couture_482257-78154.jpg?ga=GA1.1.1625797867.1700058386&semt=ais_hybrid"
                  alt="Innovation et Formation"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t(
                    "pages_secteurs.textile_confection_cuir.actions.innovation_formation.titre",
                  )}
                </h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>
                    {t(
                      "pages_secteurs.textile_confection_cuir.actions.innovation_formation.centre_technique",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.textile_confection_cuir.actions.innovation_formation.encadrement_coton",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.textile_confection_cuir.actions.innovation_formation.formation_cuir",
                    )}
                  </li>
                </ul>
              </div>
            </div>

            {/* Sécurisation et Régulation */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://img.freepik.com/photos-gratuite/employe-entrepot-feminin-serieux-dans-casque-debout-pres-chariot-elevateur-parler-au-telephone-mobile-etageres-marchandises-arriere-plan-copiez-espace-concept-travail-communication_74855-14264.jpg?t=st=1738413898~exp=1738417498~hmac=81cba32b56c2852fb322d2d29f05138c4d77d73e3fc7e65a9815f2ee5107d197&w=740"
                  alt="Sécurisation et Régulation"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t(
                    "pages_secteurs.textile_confection_cuir.actions.securisation_regulation.titre",
                  )}
                </h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>
                    {t(
                      "pages_secteurs.textile_confection_cuir.actions.securisation_regulation.reduction_contrebande",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.textile_confection_cuir.actions.securisation_regulation.commande_publique",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.textile_confection_cuir.actions.securisation_regulation.clauses_sauvegarde",
                    )}
                  </li>
                </ul>
              </div>
            </div>

            {/* Industrie du Cuir */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://img.freepik.com/photos-gratuite/cordonnier-travaille-dans-son-atelier_641386-1147.jpg?t=st=1738414253~exp=1738417853~hmac=74ca76820e7096daa947e40623301fec7f4b077a8876a1e0ad6908874f15e63b&w=740"
                  alt="Industrie du Cuir"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t(
                    "pages_secteurs.textile_confection_cuir.actions.industrie_cuir.titre",
                  )}
                </h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>
                    {t(
                      "pages_secteurs.textile_confection_cuir.actions.industrie_cuir.centre_tri",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.textile_confection_cuir.actions.industrie_cuir.tanneries",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.textile_confection_cuir.actions.industrie_cuir.nouvelles_unites",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.textile_confection_cuir.actions.industrie_cuir.redeploiement",
                    )}
                  </li>
                </ul>
              </div>
            </div>

            {/* Champions Régionaux */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://media.istockphoto.com/id/157309320/fr/photo/robe-africaine-traditionnelle.jpg?b=1&s=612x612&w=0&k=20&c=rzwwMKMcRFDSiesx6zZJzmTtklz0ML0OZLdOMdNa5Qc="
                  alt="Champions Régionaux"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t(
                    "pages_secteurs.textile_confection_cuir.actions.champions_regionaux.titre",
                  )}
                </h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>
                    {t(
                      "pages_secteurs.textile_confection_cuir.actions.champions_regionaux.creation_champions",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.textile_confection_cuir.actions.champions_regionaux.securisation_matiere",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.textile_confection_cuir.actions.champions_regionaux.recherche_cuir",
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
            {t("pages_secteurs.textile_confection_cuir.stats.titre")}
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
                  <stat.icon className="h-12 w-12 text-[#000000]" />
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
              {t("pages_secteurs.textile_confection_cuir.potentiel.titre")}
            </h1>

            {/* Description (en arrière-plan) */}
            <p className="text-center leading-relaxed mb-6 relative z-0">
              {t(
                "pages_secteurs.textile_confection_cuir.potentiel.description",
              )}
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
                        "pages_secteurs.textile_confection_cuir.potentiel.opportunites.titre",
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
                          "pages_secteurs.textile_confection_cuir.potentiel.opportunites.matieres_premieres",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        {t(
                          "pages_secteurs.textile_confection_cuir.potentiel.opportunites.marche",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        {t(
                          "pages_secteurs.textile_confection_cuir.potentiel.opportunites.mode_africaine",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        {t(
                          "pages_secteurs.textile_confection_cuir.potentiel.opportunites.exportation",
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
                        "pages_secteurs.textile_confection_cuir.potentiel.defis.titre",
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
                          "pages_secteurs.textile_confection_cuir.potentiel.defis.infrastructures",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        {t(
                          "pages_secteurs.textile_confection_cuir.potentiel.defis.concurrence",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        {t(
                          "pages_secteurs.textile_confection_cuir.potentiel.defis.formation",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        {t(
                          "pages_secteurs.textile_confection_cuir.potentiel.defis.financement",
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

export default TextileConfectionCuir;

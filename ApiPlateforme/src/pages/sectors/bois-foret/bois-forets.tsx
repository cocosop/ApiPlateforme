import ActionButtonComponent from "../../../components/actionButtonComponent/actionButtonComponent";
import { UserGroupIcon } from "@heroicons/react/20/solid";
import { MapIcon, ScaleIcon, ShoppingCartIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BulbOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

const BoisForets = () => {
  const { t } = useTranslation();

  const statistiques = [
    {
      id: 1,
      name: t("pages_secteurs.bois_forets.stats.ufa.titre"),
      value: t("pages_secteurs.bois_forets.stats.ufa.valeur"),
      icon: MapIcon,
    },
    {
      id: 2,
      name: t("pages_secteurs.bois_forets.stats.volume.titre"),
      value: t("pages_secteurs.bois_forets.stats.volume.valeur"),
      icon: ScaleIcon,
    },
    {
      id: 3,
      name: t("pages_secteurs.bois_forets.stats.magasins.titre"),
      value: t("pages_secteurs.bois_forets.stats.magasins.valeur"),
      icon: ShoppingCartIcon,
    },
    {
      id: 4,
      name: t("pages_secteurs.bois_forets.stats.artisans.titre"),
      value: t("pages_secteurs.bois_forets.stats.artisans.valeur"),
      icon: UserGroupIcon,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://img.freepik.com/photos-gratuite/clairiere-dans-foret-du-bois-chauffage-plie-pour-chambre-combustion_1153-6948.jpg?t=st=1738259561~exp=1738263161~hmac=cc5adaed90e2a863cd544d7716fe5b6358eb0f11875bf8aadeb9697283f0572e&w=740"
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
            {t("pages_secteurs.bois_forets.hero.titre")}
          </h1>
          <p className="mt-4 text-lg max-w-2xl">
            {t("pages_secteurs.bois_forets.hero.description")}
          </p>
          <div className="mt-6 py-2">
            <ActionButtonComponent
              title={t("pages_secteurs.bois_forets.hero.bouton")}
              color="#A86F32"
              filterSecteur="Bois-Forêt"
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
            {t("pages_secteurs.bois_forets.objectif.titre")}
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            {t("pages_secteurs.bois_forets.objectif.texte")}
          </p>
        </motion.div>
      </div>
      {/* Section Principale */}
      <div className="overflow-hidden bg-green-50 py-20 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-center mb-8"
          >
            {t("pages_secteurs.bois_forets.actions.titre")}
          </motion.h2>

          {/* Cartes Thématiques */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
          >
            {/* Institutions et Organisations */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://img.freepik.com/photos-gratuite/batiment_1127-3357.jpg?t=st=1738407758~exp=1738411358~hmac=e7486709986163f6239be2470c94d5acc8195b742c05527a434838d52e6f9c88&w=740"
                  alt="Institutions et Organisations"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t("pages_secteurs.bois_forets.actions.institutions.titre")}
                </h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>
                    {t(
                      "pages_secteurs.bois_forets.actions.institutions.creation",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.bois_forets.actions.institutions.societe_depot",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.bois_forets.actions.institutions.societe_pate_papier",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.bois_forets.actions.institutions.caisse",
                    )}
                  </li>
                </ul>
              </div>
            </div>

            {/* Zones et Complexes Industriels */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://images.pexels.com/photos/8994765/pexels-photo-8994765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Zones et Complexes Industriels"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t("pages_secteurs.bois_forets.actions.zones.titre")}
                </h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>{t("pages_secteurs.bois_forets.actions.zones.zone")}</li>
                  <li>
                    {t("pages_secteurs.bois_forets.actions.zones.complexes")}
                  </li>
                  <li>
                    {t("pages_secteurs.bois_forets.actions.zones.architecture")}
                  </li>
                  <li>
                    {t("pages_secteurs.bois_forets.actions.zones.unites")}
                  </li>
                </ul>
              </div>
            </div>

            {/* Commercialisation et Régulation */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://img.freepik.com/photos-gratuite/pile-planches-bois-dans-cour-bois-scierie_342744-510.jpg?t=st=1738408284~exp=1738411884~hmac=a3e41a6a5a053b231a6d574d14375079e68397680f11cbdae8041ab14b0d3efc&w=740"
                  alt="Commercialisation et Régulation"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t(
                    "pages_secteurs.bois_forets.actions.commercialisation.titre",
                  )}
                </h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>
                    {t(
                      "pages_secteurs.bois_forets.actions.commercialisation.magasins",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.bois_forets.actions.commercialisation.regulation",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.bois_forets.actions.commercialisation.interdiction",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.bois_forets.actions.commercialisation.acces",
                    )}
                  </li>
                </ul>
              </div>
            </div>

            {/* Formation et Mutualisation */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://img.freepik.com/photos-gratuite/charpentier-coupant-panneau-forces-defense-principale-interieur-atelier_23-2149451067.jpg?ga=GA1.1.1625797867.1700058386&semt=ais_hybrid"
                  alt="Formation et Mutualisation"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t("pages_secteurs.bois_forets.actions.formation.titre")}
                </h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>
                    {t("pages_secteurs.bois_forets.actions.formation.ecole")}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.bois_forets.actions.formation.centres_agrees",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.bois_forets.actions.formation.centre_mutualisation",
                    )}
                  </li>
                  <li>
                    {t("pages_secteurs.bois_forets.actions.formation.village")}
                  </li>
                </ul>
              </div>
            </div>

            {/* Infrastructures Routières */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://media.istockphoto.com/id/2164900011/fr/photo/route-%C3%A0-p%C3%A9age-ou-autoroute-%C3%A0-p%C3%A9age-sur-lautoroute-%C3%A0-acc%C3%A8s-limit%C3%A9-point-de-contr%C3%B4le-du.webp?a=1&b=1&s=612x612&w=0&k=20&c=Xp5dHUHBpXdQ5vYLluY-yYXqCzuGb0mX2CcfPV0XE58="
                  alt="Infrastructures Routières"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t(
                    "pages_secteurs.bois_forets.actions.infrastructures.titre",
                  )}
                </h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>
                    {t(
                      "pages_secteurs.bois_forets.actions.infrastructures.petites_entreprises",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.bois_forets.actions.infrastructures.peages",
                    )}
                  </li>
                  <li>
                    {t(
                      "pages_secteurs.bois_forets.actions.infrastructures.financement",
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
            {t("pages_secteurs.bois_forets.stats.titre")}
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
                  <stat.icon className="h-12 w-12 text-[#A86F32]" />
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
              {t("pages_secteurs.bois_forets.potentiel.titre")}
            </h1>

            {/* Description (en arrière-plan) */}
            <p className="text-center leading-relaxed mb-6 relative z-0">
              {t("pages_secteurs.bois_forets.potentiel.description")}
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
                        "pages_secteurs.bois_forets.potentiel.opportunites.titre",
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
                          "pages_secteurs.bois_forets.potentiel.opportunites.exploitation",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        {t(
                          "pages_secteurs.bois_forets.potentiel.opportunites.transformation",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        {t(
                          "pages_secteurs.bois_forets.potentiel.opportunites.exportation",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        {t(
                          "pages_secteurs.bois_forets.potentiel.opportunites.ecotourisme",
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
                      {t("pages_secteurs.bois_forets.potentiel.defis.titre")}
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
                          "pages_secteurs.bois_forets.potentiel.defis.exploitation",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        {t(
                          "pages_secteurs.bois_forets.potentiel.defis.deforestation",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        {t("pages_secteurs.bois_forets.potentiel.defis.manque")}
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        {t(
                          "pages_secteurs.bois_forets.potentiel.defis.concurrence",
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

export default BoisForets;

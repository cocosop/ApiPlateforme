import ActionButtonComponent from '../../../components/actionButtonComponent/actionButtonComponent';
import { AcademicCapIcon } from "@heroicons/react/20/solid";
import { MapIcon, MapPinIcon, TruckIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';


const MinesMetallurgieSiderurgie = () => {

  const { t } = useTranslation();
  const statistiques = [
    { id: 1, name: t("pages_secteurs.mines_metallurgie.stats.projets_miniers.titre"), value: t("pages_secteurs.mines_metallurgie.stats.projets_miniers.valeur"), icon: MapIcon },
    { id: 2, name: t("pages_secteurs.mines_metallurgie.stats.sites_desenclaves.titre"), value: t("pages_secteurs.mines_metallurgie.stats.sites_desenclaves.valeur"), icon: TruckIcon },
    { id: 3, name: t("pages_secteurs.mines_metallurgie.stats.cartes_geologiques.titre"), value: t("pages_secteurs.mines_metallurgie.stats.cartes_geologiques.valeur"), icon: MapPinIcon },
    { id: 4, name: t("pages_secteurs.mines_metallurgie.stats.formations_ciblees.titre"), value: t("pages_secteurs.mines_metallurgie.stats.formations_ciblees.valeur"), icon: AcademicCapIcon }
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://img.freepik.com/photos-gratuite/capture-grand-angle-lac-dans-carriere_181624-45834.jpg?t=st=1738424235~exp=1738427835~hmac=38b455316557a597b07b389d7db195e61edc15eb09427daf46fd9a6405164889&w=740"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-50"
          alt="Background"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-start text-white px-6 lg:px-24">
          <h1 className="text-4xl font-bold">{t("pages_secteurs.mines_metallurgie.hero.titre")}</h1>
          <p className="mt-4 text-lg max-w-2xl">
            {t("pages_secteurs.mines_metallurgie.hero.description")}
          </p>
          <div className="mt-6 py-2">
            <ActionButtonComponent
              title={t("pages_secteurs.mines_metallurgie.hero.bouton")}
              color="#AAA9AD"
              filterSecteur="Mines/Métallurgie/Sidérurgie"
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
          className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">{t("pages_secteurs.mines_metallurgie.objectif.titre")}</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            {t("pages_secteurs.mines_metallurgie.objectif.texte")}
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
            className="text-3xl font-bold text-center mb-8">{t("pages_secteurs.mines_metallurgie.actions.titre")}</motion.h2>

          {/* Cartes Thématiques */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">

            {/* Projets Phares */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://img.freepik.com/photos-gratuite/charbon-se-deplace-long-bande-transporteuse_60438-3756.jpg?t=st=1738424639~exp=1738428239~hmac=30cb06c9c3a6a273b5ae1702489345cc599dad5b7a3df50130057f9c1b776d1e&w=826"
                  alt="Projets Phares"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{t("pages_secteurs.mines_metallurgie.actions.projets_phare.titre")}</h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>{t("pages_secteurs.mines_metallurgie.actions.projets_phare.extension_alucam")}</li>
                  <li>{t("pages_secteurs.mines_metallurgie.actions.projets_phare.aluminerie_kribi")}</li>
                  <li>{t("pages_secteurs.mines_metallurgie.actions.projets_phare.fer_mbalam")}</li>
                  <li>{t("pages_secteurs.mines_metallurgie.actions.projets_phare.nickel_lomie")}</li>
                  <li>{t("pages_secteurs.mines_metallurgie.actions.projets_phare.rutile_akonolinga")}</li>
                  <li>{t("pages_secteurs.mines_metallurgie.actions.projets_phare.calcaire_mintom")}</li>
                </ul>
              </div>
            </div>

            {/* Exploitation et Valorisation */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://img.freepik.com/photos-gratuite/gros-plan-vieux-coquillages-sol-recouvert-terre-mousse-sous-lumiere-du-soleil_181624-32305.jpg?t=st=1738424693~exp=1738428293~hmac=4ea251b8eaccaee44f0125175bee97611f7b3127b394f698429025b2839a9a8f&w=740"
                  alt="Exploitation et Valorisation"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{t("pages_secteurs.mines_metallurgie.actions.exploitation_valorisation.titre")}</h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>{t("pages_secteurs.mines_metallurgie.actions.exploitation_valorisation.valorisation_or_diamant")}</li>
                  <li>{t("pages_secteurs.mines_metallurgie.actions.exploitation_valorisation.laboratoire_national")}</li>
                  <li>{t("pages_secteurs.mines_metallurgie.actions.exploitation_valorisation.partenariats_strategiques")}</li>
                </ul>
              </div>
            </div>

            {/* Infrastructures et Logistique */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://img.freepik.com/photos-gratuite/vue-interieure-acierie_1359-305.jpg?t=st=1738425221~exp=1738428821~hmac=0f7c351f6417c540de5f6151df61de9d88330d7219aa9bbb85a6df7068e84f23&w=740"
                  alt="Infrastructures et Logistique"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{t("pages_secteurs.mines_metallurgie.actions.infrastructures_logistique.titre")}</h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>{t("pages_secteurs.mines_metallurgie.actions.infrastructures_logistique.desenclavement_sites")}</li>
                  <li>{t("pages_secteurs.mines_metallurgie.actions.infrastructures_logistique.moyens_production")}</li>
                  <li>{t("pages_secteurs.mines_metallurgie.actions.infrastructures_logistique.cartes_geologiques")}</li>
                </ul>
              </div>
            </div>

            {/* Formation et Expertise */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://img.freepik.com/photos-gratuite/technicien-afro-americain-verifie-entretien-panneaux-solaires-groupe-trois-ingenieurs-noirs-reunis-station-solaire_627829-4860.jpg?t=st=1738425372~exp=1738428972~hmac=dda341507e26be373ca61a79e9972a44ef6dbc6dda17b1ca68891b940c69eae1&w=740"
                  alt="Formation et Expertise"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{t("pages_secteurs.mines_metallurgie.actions.formation_expertise.titre")}</h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>{t("pages_secteurs.mines_metallurgie.actions.formation_expertise.moyens_techniques")}</li>
                  <li>{t("pages_secteurs.mines_metallurgie.actions.formation_expertise.plans_formation")}</li>
                  <li>{t("pages_secteurs.mines_metallurgie.actions.formation_expertise.promotion_expertise")}</li>
                </ul>
              </div>
            </div>

            {/* Innovation et Politiques */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Innovation et Politiques"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{t("pages_secteurs.mines_metallurgie.actions.innovation_politiques.titre")}</h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>{t("pages_secteurs.mines_metallurgie.actions.innovation_politiques.developpement_creativite")}</li>
                  <li>{t("pages_secteurs.mines_metallurgie.actions.innovation_politiques.harmonisation_politiques")}</li>
                  <li>{t("pages_secteurs.mines_metallurgie.actions.innovation_politiques.reduction_barrieres")}</li>
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
            className="text-3xl font-bold text-center mb-8">{t("pages_secteurs.mines_metallurgie.stats.titre")}</motion.h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {statistiques.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center">
                  <stat.icon className="h-12 w-12 text-[#AAA9AD]" />
                </div>
                <p className="mt-4 text-3xl font-bold text-gray-900">{stat.value}</p>
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
              {t("pages_secteurs.mines_metallurgie.potentiel.titre")}
            </h1>

            {/* Description (en arrière-plan) */}
            <p className="text-center leading-relaxed mb-6 relative z-0">
              {t("pages_secteurs.mines_metallurgie.potentiel.description")}
            </p>

            {/* Grille des rubriques (en arrière-plan) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center relative z-0">

              {/* Carte Opportunités */}
              <div className="bg-gradient-to-r from-blue-400 to-purple-500  p-8 rounded-2xl border border-gray-100 hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden w-full max-w-md z-0">
                {/* Fond dégradé au survol */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

                {/* Contenu */}
                <div className="relative z-10">
                  {/* En-tête de la carte */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                      <span className="text-blue-500 text-2xl">🚀</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 ml-4 group-hover:text-white transition-colors duration-300">
                      {t("pages_secteurs.mines_metallurgie.potentiel.opportunites.titre")}
                    </h2>
                  </div>

                  {/* Liste des points */}
                  <ul className="space-y-4 text-gray-600 group-hover:text-gray-100 transition-colors duration-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                      <span>
                        <span className="font-medium text-blue-600 group-hover:text-blue-200">{t("pages_secteurs.mines_metallurgie.potentiel.opportunites.ressources_abondantes")}</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                      <span>
                        <span className="font-medium text-blue-600 group-hover:text-blue-200">{t("pages_secteurs.mines_metallurgie.potentiel.opportunites.projets_structurants")}</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                      <span>
                        <span className="font-medium text-blue-600 group-hover:text-blue-200">{t("pages_secteurs.mines_metallurgie.potentiel.opportunites.transformation_locale")}</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                      <span>
                        <span className="font-medium text-blue-600 group-hover:text-blue-200">{t("pages_secteurs.mines_metallurgie.potentiel.opportunites.exportation")}</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Carte Défis */}
              <div className="bg-gradient-to-r from-red-400 to-orange-500 p-8 rounded-2xl border border-gray-100 hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden w-full max-w-md z-0">
                {/* Fond dégradé au survol */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

                {/* Contenu */}
                <div className="relative z-10">
                  {/* En-tête de la carte */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                      <span className="text-red-500 text-2xl">⚠️</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 ml-4 group-hover:text-white transition-colors duration-300">
                      {t("pages_secteurs.mines_metallurgie.potentiel.defis.titre")}
                    </h2>
                  </div>

                  {/* Liste des points */}
                  <ul className="space-y-4 text-gray-600 group-hover:text-gray-100 transition-colors duration-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                      <span>
                        <span className="font-medium text-red-600 group-hover:text-red-200">{t("pages_secteurs.mines_metallurgie.potentiel.defis.manque_infrastructures")}</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                      <span>
                        <span className="font-medium text-red-600 group-hover:text-red-200">{t("pages_secteurs.mines_metallurgie.potentiel.defis.cadre_legal")}</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                      <span>
                        <span className="font-medium text-red-600 group-hover:text-red-200">{t("pages_secteurs.mines_metallurgie.potentiel.defis.impact_environnemental")}</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                      <span>
                        <span className="font-medium text-red-600 group-hover:text-red-200">{t("pages_secteurs.mines_metallurgie.potentiel.defis.concurrence_internationale")}</span>
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

export default MinesMetallurgieSiderurgie;
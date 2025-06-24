import { AcademicCapIcon, BuildingOfficeIcon } from '@heroicons/react/20/solid'
import ActionButtonComponent from '../../../components/actionButtonComponent/actionButtonComponent';
import { Anchor, TrainTrack } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';


const infrastructure = () => {
  const { t } = useTranslation();

  const statistiques = [
    { id: 1, name: t("pages_secteurs.infrastructure.stats.ferroviaires.titre"), value: t("pages_secteurs.infrastructure.stats.ferroviaires.valeur"), icon: TrainTrack },
    { id: 2, name: t("pages_secteurs.infrastructure.stats.ports.titre"), value: t("pages_secteurs.infrastructure.stats.ports.valeur"), icon: Anchor },
    { id: 3, name: t("pages_secteurs.infrastructure.stats.ecoles.titre"), value: t("pages_secteurs.infrastructure.stats.ecoles.valeur"), icon: AcademicCapIcon },
    { id: 4, name: t("pages_secteurs.infrastructure.stats.ministeres.titre"), value: t("pages_secteurs.infrastructure.stats.ministeres.valeur"), icon: BuildingOfficeIcon }
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://img.freepik.com/photos-gratuite/vue-aerienne-drone-du-centre-ville-chisinau-vue-panoramique-plusieurs-routes-batiments_1268-18556.jpg?t=st=1736263381~exp=1736266981~hmac=a4683c8b514ce67fb3cefc8ef21265a7db45bd841b068780a43ccc8c112c3894&w=826"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-50"
          alt="Background"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-start text-white px-6 lg:px-24">
          <h1 className="text-4xl font-bold">{t("pages_secteurs.infrastructure.hero.titre")}</h1>
          <p className="mt-4 text-lg max-w-2xl">
            {t("pages_secteurs.infrastructure.hero.description")}
          </p>
          <div className="mt-6 py-2">
            <ActionButtonComponent
              title={t("pages_secteurs.infrastructure.hero.bouton")}
              color="#DC2123"
              filterSecteur="Infrastructures"
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
          <h2 className="text-3xl font-bold text-center mb-8">{t("pages_secteurs.infrastructure.objectif.titre")}</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            {t("pages_secteurs.infrastructure.objectif.texte")}
          </p>
        </motion.div>
      </div>
      {/* Socle Infrastructure */}
      <div className="overflow-hidden bg-gray-50 py-20 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-center mb-8">{t("pages_secteurs.infrastructure.actions.titre")}</motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">

            {/* Infrastructure Physique */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200 lg:aspect-auto lg:h-80">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Camrail_train_between_Douala_and_Yaounde%2C_ex-portuguese_DMU_9600.jpg/800px-Camrail_train_between_Douala_and_Yaounde%2C_ex-portuguese_DMU_9600.jpg"
                  alt="Infrastructure Physique"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{t("pages_secteurs.infrastructure.actions.physique.titre")} </h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>{t("pages_secteurs.infrastructure.actions.physique.construction")}</li>
                  <li>{t("pages_secteurs.infrastructure.actions.physique.plan")}</li>
                  <li>{t("pages_secteurs.infrastructure.actions.physique.modernisation")}</li>
                  <li>{t("pages_secteurs.infrastructure.actions.physique.compagnies")}</li>
                </ul>
              </div>
            </div>

            {/* Infrastructure Cognitive */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200 lg:aspect-auto lg:h-80">
                <img
                  src="https://img.freepik.com/photos-gratuite/etudiant-diplome-smiley-coup-moyen_23-2148950576.jpg?t=st=1738261544~exp=1738265144~hmac=14fd8812f8a1b66940128b54d4ca75823d43fd6b5a1c2981e242f681402d5251&w=740"
                  alt="Infrastructure Cognitive"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{t("pages_secteurs.infrastructure.actions.cognitive.titre")}</h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>{t("pages_secteurs.infrastructure.actions.cognitive.professionnalisation")}</li>
                  <li>{t("pages_secteurs.infrastructure.actions.cognitive.reseau")}</li>
                  <li>{t("pages_secteurs.infrastructure.actions.cognitive.reformation")}</li>
                  <li>{t("pages_secteurs.infrastructure.actions.cognitive.modules")}</li>
                </ul>
              </div>
            </div>

            {/* Infrastructure Institutionnelle */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200 lg:aspect-auto lg:h-80">
                <img
                  src="https://img.freepik.com/photos-gratuite/grands-gratte-ciel-marron-palmiers-verts-devant-eux_1304-5311.jpg?t=st=1736268949~exp=1736272549~hmac=360db4019decd451217bdd534a57cf2167967389e28cf02b32c05fb620761b65&w=360"
                  alt="Infrastructure Institutionnelle"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{t("pages_secteurs.infrastructure.actions.institutionnelle.titre")}</h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>{t("pages_secteurs.infrastructure.actions.institutionnelle.restructuration")}</li>
                  <li>{t("pages_secteurs.infrastructure.actions.institutionnelle.services")}</li>
                  <li>{t("pages_secteurs.infrastructure.actions.institutionnelle.alignement")}</li>
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
            className="text-3xl font-bold text-center mb-8">{t("pages_secteurs.infrastructure.stats.titre")}</motion.h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {statistiques.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="flex justify-center">
                  <stat.icon className="h-12 w-12 text-[#DC2123]" />
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
              {t("pages_secteurs.infrastructure.potentiel.titre")}
            </h1>

            {/* Description (en arrière-plan) */}
            <p className="text-center leading-relaxed mb-6 relative z-0">
              {t("pages_secteurs.infrastructure.potentiel.description")}
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
                      {t("pages_secteurs.infrastructure.potentiel.opportunites.titre")}
                    </h2>
                  </div>

                  {/* Liste des points */}
                  <ul className="space-y-4 text-gray-600 group-hover:text-gray-100 transition-colors duration-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                      <span>
                        <span className="font-medium text-blue-600 group-hover:text-blue-200">
                          {t("pages_secteurs.infrastructure.potentiel.opportunites.projets")}
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                      <span>
                        <span className="font-medium text-blue-600 group-hover:text-blue-200">
                          {t("pages_secteurs.infrastructure.potentiel.opportunites.energie")}
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                      <span>
                        <span className="font-medium text-blue-600 group-hover:text-blue-200">
                          {t("pages_secteurs.infrastructure.potentiel.opportunites.partenariats")}
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                      <span>
                        <span className="font-medium text-blue-600 group-hover:text-blue-200">
                          {t("pages_secteurs.infrastructure.potentiel.opportunites.integration")}
                        </span>
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
                      {t("pages_secteurs.infrastructure.potentiel.defis.titre")}
                    </h2>
                  </div>

                  {/* Liste des points */}
                  <ul className="space-y-4 text-gray-600 group-hover:text-gray-100 transition-colors duration-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                      <span>
                        <span className="font-medium text-red-600 group-hover:text-red-200">
                          {t("pages_secteurs.infrastructure.potentiel.defis.manque")}
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                      <span>
                        <span className="font-medium text-red-600 group-hover:text-red-200">
                          {t("pages_secteurs.infrastructure.potentiel.defis.retards")}
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                      <span>
                        <span className="font-medium text-red-600 group-hover:text-red-200">
                          {t("pages_secteurs.infrastructure.potentiel.defis.maintenance")}
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                      <span>
                        <span className="font-medium text-red-600 group-hover:text-red-200">
                          {t("pages_secteurs.infrastructure.potentiel.defis.desequilibre")}
                        </span>
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

export default infrastructure;
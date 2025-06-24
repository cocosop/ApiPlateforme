import { ChartBarIcon, CurrencyDollarIcon, FingerPrintIcon, ShieldCheckIcon } from '@heroicons/react/20/solid'
import ActionButtonComponent from '../../../components/actionButtonComponent/actionButtonComponent';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const financement = () => {
  const { t } = useTranslation();
  const statistiques = [
    { id: 1, name: t("pages_secteurs.financement.stats.fonds.titre"), value: t("pages_secteurs.financement.stats.fonds.valeur"), icon: CurrencyDollarIcon },
    { id: 2, name: t("pages_secteurs.financement.stats.capital.titre"), value: t("pages_secteurs.financement.stats.capital.valeur"), icon: ChartBarIcon },
    { id: 3, name: t("pages_secteurs.financement.stats.projets.titre"), value: t("pages_secteurs.financement.stats.projets.valeur"), icon: ShieldCheckIcon },
    { id: 4, name: t("pages_secteurs.financement.stats.entreprises.titre"), value: t("pages_secteurs.financement.stats.entreprises.valeur"), icon: FingerPrintIcon }
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://img.freepik.com/photos-gratuite/pieces-monnaie-bouteilles-graphique-trading_1150-17751.jpg?t=st=1738258892~exp=1738262492~hmac=83610bc678f7ec300635ec6ec94feea616a84d3ee5a50cda5168f519d51cac4a&w=740"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-50"
          alt="Background"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-start text-white px-6 lg:px-24">
          <h1 className="text-4xl font-bold">{t("pages_secteurs.financement.hero.titre")}</h1>
          <p className="mt-4 text-lg max-w-2xl">
            {t("pages_secteurs.financement.hero.sous_titre")}
          </p>
          <div className="mt-6 py-2">
            <ActionButtonComponent
              title={t("pages_secteurs.financement.hero.bouton")}
              color="#8FA832"
              filterSecteur="Financement"
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
          <h2 className="text-3xl font-bold text-center mb-8">{t("pages_secteurs.financement.objectif.titre")}</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            {t("pages_secteurs.financement.objectif.texte")}
          </p>
        </motion.div>
      </div>
      {/* Socle Financement */}
      <div className="overflow-hidden bg-gray-50 py-20 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-center mb-8">{t("pages_secteurs.financement.actions.titre")}</motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">

            {/* Restructuration Institutionnelle */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1732284081199-a9e40cb8658d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Restructuration Institutionnelle"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{t("pages_secteurs.financement.actions.restructuration.titre")}</h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>{t("pages_secteurs.financement.actions.restructuration.details.transformation")}</li>
                  <li>{t("pages_secteurs.financement.actions.restructuration.details.mutation")}</li>
                  <li>{t("pages_secteurs.financement.actions.restructuration.details.introduction")}</li>
                  <li>{t("pages_secteurs.financement.actions.restructuration.details.reforme")}</li>
                </ul>
              </div>
            </div>

            {/* Mécanismes de Soutien */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://img.freepik.com/photos-gratuite/scene-bureau-ordinateur-portable_23-2147626521.jpg?t=st=1738265137~exp=1738268737~hmac=6e6cb2fa75afe3be02a03a062352eaf0fbc4420ef8b5dffa3049d07360b0a243&w=740"
                  alt="Mécanismes de Soutien"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{t("pages_secteurs.financement.actions.instruments.titre")}</h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>{t("pages_secteurs.financement.actions.instruments.details.fonds")}</li>
                  <li>{t("pages_secteurs.financement.actions.instruments.details.assurance")}</li>
                  <li>{t("pages_secteurs.financement.actions.instruments.details.agence")}</li>
                  <li>{t("pages_secteurs.financement.actions.instruments.details.obligations")}</li>
                </ul>
              </div>
            </div>

            {/* Cadre Économique */}
            <div className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src="https://img.freepik.com/photos-gratuite/hommes-affaires-africains-se-serrant-main_1303-18516.jpg?t=st=1738265268~exp=1738268868~hmac=5448a9e19bc178eab3409b339a124365e36b1c61274703a446c08dd15474f1bd&w=740"
                  alt="Cadre Économique"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{t("pages_secteurs.financement.actions.environnement.titre")}</h3>
                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                  <li>{t("pages_secteurs.financement.actions.environnement.details.incitations")}</li>
                  <li>{t("pages_secteurs.financement.actions.environnement.details.reforme")}</li>
                  <li>{t("pages_secteurs.financement.actions.environnement.details.systeme")}</li>
                  <li>{t("pages_secteurs.financement.actions.environnement.details.partenariats")}</li>
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
            className="text-3xl font-bold text-center mb-8">{t("pages_secteurs.financement.stats.titre")}</motion.h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {statistiques.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center">
                  <stat.icon className="h-12 w-12 text-[#8FA832]" />
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
              {t("pages_secteurs.financement.potentiel.titre")}
            </h1>

            {/* Description (en arrière-plan) */}
            <p className="text-center leading-relaxed mb-6 relative z-0">
              {t("pages_secteurs.financement.potentiel.description")}
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
                      {t("pages_secteurs.financement.potentiel.opportunites.titre")}
                    </h2>
                  </div>

                  {/* Liste des points */}
                  <ul className="space-y-4 text-gray-600 group-hover:text-gray-100 transition-colors duration-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                      <span>
                        <span className="font-medium text-blue-600 group-hover:text-blue-200">
                          {t("pages_secteurs.financement.potentiel.opportunites.croissance")}
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                      <span>
                        <span className="font-medium text-blue-600 group-hover:text-blue-200">
                          {t("pages_secteurs.financement.potentiel.opportunites.financement")}
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                      <span>
                        <span className="font-medium text-blue-600 group-hover:text-blue-200">
                          {t("pages_secteurs.financement.potentiel.opportunites.partenariats")}
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                      <span>
                        <span className="font-medium text-blue-600 group-hover:text-blue-200">
                          {t("pages_secteurs.financement.potentiel.opportunites.innovation")}
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
                      {t("pages_secteurs.financement.potentiel.defis.titre")}
                    </h2>
                  </div>

                  {/* Liste des points */}
                  <ul className="space-y-4 text-gray-600 group-hover:text-gray-100 transition-colors duration-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                      <span>
                        <span className="font-medium text-red-600 group-hover:text-red-200">
                          {t("pages_secteurs.financement.potentiel.defis.acces")}
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                      <span>
                        <span className="font-medium text-red-600 group-hover:text-red-200">
                          {t("pages_secteurs.financement.potentiel.defis.manque")}
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                      <span>
                        <span className="font-medium text-red-600 group-hover:text-red-200">
                          {t("pages_secteurs.financement.potentiel.defis.inclusion")}
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                      <span>
                        <span className="font-medium text-red-600 group-hover:text-red-200">
                          {t("pages_secteurs.financement.potentiel.defis.risque")}
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

export default financement;
import HOMEVIDEOUPDATED from '../../assets/videos/home1.mp4'
import ENREGISTREMENT from "../../assets/img/enregistrement.png"
import REDUCTION from "../../assets/img/reduction.png"
import SUIVI from "../../assets/img/suivi.png"
import ACCES from "../../assets/img/acces.png"
import CACAO from "../../assets/img/cacao4.png"
import ENERGIE from "../../assets/img/energie.jpg"
import Politic from "../../assets/img/politic.jpg"
import InfraDev from "../../assets/img/infraDeve.jpg"
import Economie from "../../assets/img/economie.jpg"
import Ressources from "../../assets/img/naturelles.jpg"
import MainOeuvre from "../../assets/img/mainOeuvre.jpg"
import Marche from "../../assets/img/marche.jpg"
import './home.css'
import { NavLink } from "react-router-dom";
import ActionButtonComponent from "../../components/actionButtonComponent/actionButtonComponent";
import { useState } from 'react'
import ProjectCard from '../../components/projetCard/projetCard'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Dialog, DialogContent, DialogTitle,  IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

//Data table for the list of advantages
const ListData = [
  {
    image: ENREGISTREMENT,
    title: "Enregistrement en ligne des projets",
    description: "Les investisseurs peuvent enregistrer leurs projets directement sur le portail, sans formalités papier. Ce système facilite les démarches et permet un gain de temps considérable, tout en garantissant une gestion sécurisée et accessible à distance.",
    count: 1
  },
  {
    image: REDUCTION,
    title: "Réduction des déplacements",
    description: "Toutes les démarches étant centralisées sur le portail, les investisseurs n’ont plus besoin de se déplacer. Cela simplifie leurs interactions avec l’administration et optimise leur emploi du temps.",
    count: 2
  },
  {
    image: SUIVI,
    title: "Suivi transparent des dossiers",
    description: "Le portail offre une visibilité totale sur l’état d’avancement des dossiers. Les investisseurs peuvent suivre chaque étape du traitement en temps réel, ce qui renforce la confiance et réduit les incertitudes.",
    count: 3
  },
  {
    image: ACCES,
    title: "Accès rapide à l’information",
    description: "Le portail permet d’accéder instantanément à des informations clés sur les démarches et les services disponibles. Ce gain de temps aide les investisseurs à mieux planifier et exécuter leurs projets.",
    count: 4
  },
];

//Data table for the list of testimonies

const testimonies = [
  {
    id: 1,
    description: "L'API a été un partenaire clé dans la réussite de notre projet d'investissement au Cameroun. Leur équipe nous a accompagnés à chaque étape, de l'enregistrement en ligne au suivi transparent des dossiers. Grâce à eux, nous avons pu démarrer nos opérations rapidement et sans tracas.",
    date: '12 Oct, 2023',
    author: {
      name: 'Jean Dupont',
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
  },
  {
    id: 2,
    description: "Travailler avec l'API a été une expérience incroyablement fluide. Leur plateforme en ligne nous a permis de réduire considérablement les déplacements et les formalités administratives. Nous avons pu nous concentrer sur notre projet tout en ayant une visibilité totale sur l'avancement de notre dossier.",
    date: '25 Sep, 2023',
    author: {
      name: 'Fatoumata Diallo',
      imageUrl: 'https://randomuser.me/api/portraits/women/16.jpg',
    },
  },
  {
    id: 3,
    description: "L'API a transformé notre expérience d'investissement au Cameroun. Leur processus simplifié et transparent nous a permis de gagner un temps précieux. Leur équipe est réactive et professionnelle, et nous recommandons vivement leurs services à tout investisseur.",
    date: '5 Sep, 2023',
    author: {
      name: 'Carlos Mendoza',
      imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
  },

]


const home = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [projects] = useState([
    {
      id: 1,
      secteur: "Agro-industrie",
      titre: "Exploitation de plantation de cacao",
      ville: "Douala",
      quartier: "Bonaberi",
      description: "Mise en place d'une plantation moderne de cacao avec une production annuelle de 50 tonnes.",
      image: CACAO,
      latitude: 4.0511, // Ajoutez cette propriété
      longitude: 9.7679, // Ajoutez cette propriété
    },
    {
      id: 2,
      secteur: "Énergie",
      titre: "Parc solaire de 20 MW",
      ville: "Garoua",
      quartier: "Ngaoundere route",
      description: "Construction d'un parc solaire pour fournir de l'énergie propre à la région du Nord.",
      image: ENERGIE,
      latitude: 4.0511, // Ajoutez cette propriété
      longitude: 9.7679, // Ajoutez cette propriété
    },
    {
      id: 3,
      secteur: "Numérique",
      titre: "Plateforme de paiement mobile",
      ville: "Yaoundé",
      quartier: "Bastos",
      description: "Développement d'une application de paiement mobile visant à faciliter les transactions financières locales.",
      image: "https://img.freepik.com/free-photo/high-angle-friends-reading-menu-restaurant_23-2150384825.jpg?t=st=1738099850~exp=1738103450~hmac=263dee2608a764be0cc905367387bf817f98c3b6a3df41a0103a348fa8777175&w=996",
      latitude: 4.0511, // Ajoutez cette propriété
      longitude: 9.7679, // Ajoutez cette propriété
    }
    // Ajoutez plus de projets ici...
  ]);

  return (
    <div>
      {/* Section Hero */}
      <div className="hero-container bg-gray-100 grid p-20 grid-cols-1 gap-x-6 xl:grid-cols-1 lg:grid-cols-1 items-center relative">
        <video className="video-background" autoPlay muted loop>
          <source src={HOMEVIDEOUPDATED} type="video/mp4" />
          {t('home.videoNotSupported')}
        </video>
        <div className="video-background-overlay"></div>
        <div className="group relative hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-start">
            <h1 className="max-w-2xl text-balance font-bold tracking-tight text-[#0F0B60] sm:text-5xl subpixel-antialiased leading-8 p-4 bg-[#ffffffd1]">
              {t('home.hero.title')} <span className="text-[#0E600B]">{t('home.hero.cameroon')}</span>
            </h1>
            <p className="mt-8 font-light sm:text-md/6 leading-7 max-w-2xl text-justify text-white">
              {t('home.hero.description')}
            </p>
            <div className="mt-10 flex items-center">
              <NavLink to="/projets" className="rounded-md p-3 border border-solid border-white hover:border-[#0E600B] text-sm font-semibold text-white shadow-sm hover:bg-[#0E600B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 mr-5">
                {t('home.hero.guideButton')}
              </NavLink>
              <ActionButtonComponent title={t('home.hero.investButton')} color="#0F0B60" filterSecteur="" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section Pourquoi Investir */}
      <div className="grid py-16 px-6 bg-gradient-to-r from-green-50 to-blue-50 justify-center">
        <div className="max-w-6xl mx-auto bg-transparent">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-gray-900 mb-8 text-center relative z-10">
            {t('home.whyInvest.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-lg text-gray-700 leading-relaxed mb-12 max-w-2xl mx-auto">
            {t('home.whyInvest.subtitle')} <span className="font-semibold text-green-600">{t('home.whyInvest.africaMiniature')}</span> {t('home.whyInvest.description')}
          </motion.p>

          <>
            <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <DialogTitle className="p-0 m-0">
                  <h1 className="text-2xl text-gray-800 font-bold">
                    {t('home.whyInvest.modalTitle')}
                  </h1>
                </DialogTitle>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </div>

              <DialogContent>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4"
                >
                  {/* Carte 1 Stabilité Politique */}
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-green-300 transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden">
                    <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
                      <img src={Politic} alt={t('home.whyInvest.reasons.politics.title')} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('home.whyInvest.reasons.politics.title')}</h2>
                    <p className="text-gray-600 leading-relaxed">
                      {t('home.whyInvest.reasons.politics.description')}
                    </p>
                  </div>

                  {/* Carte 2 : Diversité économique */}
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden">
                    <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
                      <img
                        src={Economie}
                        alt={t('home.whyInvest.reasons.economy.title')}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('home.whyInvest.reasons.economy.title')}</h2>
                    <p className="text-gray-600 leading-relaxed">
                      {t('home.whyInvest.reasons.economy.description')}
                    </p>
                  </div>

                  {/* Carte 3 : Ressources naturelles */}
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden">
                    <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
                      <img
                        src={Ressources}
                        alt={t('home.whyInvest.reasons.resources.title')}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('home.whyInvest.reasons.resources.title')}</h2>
                    <p className="text-gray-600 leading-relaxed">
                      {t('home.whyInvest.reasons.resources.description')}
                    </p>
                  </div>

                  {/* Carte 4 : Marché régional */}
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden">
                    <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
                      <img
                        src={Marche}
                        alt={t('home.whyInvest.reasons.market.title')}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('home.whyInvest.reasons.market.title')}</h2>
                    <p className="text-gray-600 leading-relaxed">
                      {t('home.whyInvest.reasons.market.description')}                            </p>
                  </div>

                  {/* Carte 5 : Main-d'œuvre qualifiée */}
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-red-300 transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden">
                    <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
                      <img
                        src={MainOeuvre}
                        alt={t('home.whyInvest.reasons.workforce.title')}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('home.whyInvest.reasons.workforce.title')}</h2>
                    <p className="text-gray-600 leading-relaxed">
                      {t('home.whyInvest.reasons.workforce.description')}                            </p>
                  </div>

                  {/* Carte 6 : Infrastructures en développement */}
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-indigo-300 transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden">
                    <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
                      <img
                        src={InfraDev}
                        alt={t('home.whyInvest.reasons.infrastructure.title')}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('home.whyInvest.reasons.infrastructure.title')}</h2>
                    <p className="text-gray-600 leading-relaxed">
                      {t('home.whyInvest.reasons.infrastructure.description')}                            </p>
                  </div>
                </motion.div>
              </DialogContent>
            </Dialog>
          </>

          <div className="text-center mt-12" onClick={handleOpen}>
            <a href="#contact" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              {t('home.whyInvest.cta')}
            </a>
          </div>
        </div>
      </div>

      {/* Section Avantages */}
      <div className="fourth-content mx-auto max-w-7xl px-6 lg:px-8 mt-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center text-[#0F0B60]">
          {t('home.advantages.title')}
        </motion.h2>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8 bg-white">
          {ListData.map((data, index) => (
            <div key={index} className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute -top-4 -left-3 w-16 h-16 bg-[#0F0B60] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-md">
                {data.count}
              </div>
              <div className="p-6">
                <img src={data.image} alt={t(`home.advantages.items.${index}.title`)} className="w-20 h-20 mx-auto" />
              </div>
              <div className="px-6 pb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {t(`home.advantages.items.${index}.title`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`home.advantages.items.${index}.description`)}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Section Témoignages */}
      <div className="fifth-content mx-auto max-w-full px-6 lg:px-8 py-8 bg-gradient-to-r from-blue-50 to-purple-50 border-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center text-[#0F0B60]">
          {t('home.testimonials.title')}
        </motion.h2>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonies.map((testimony, index) => (
            <div key={testimony.id} className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="flex items-center space-x-4 mb-4">
                <img src={testimony.author.imageUrl} alt={testimony.author.name} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold text-gray-800">{testimony.author.name}</p>
                  <p className="text-sm text-gray-500">{testimony.date}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                <span className='font-bold text-xl text-[#0F0B60]'>"</span>
                {t(`home.testimonials.items.${index}.text`)}
                <span className='font-bold text-xl text-[#0F0B60]'>"</span>
              </p>
            </div>
          ))}
        </motion.div>

        <div className="mt-6 flex items-center">
          <NavLink to="/#">
            <button className="more-btn text-sm/6 font-semibold">
              {t('home.testimonials.more')}
            </button>
          </NavLink>
        </div>
      </div>

      {/* Section Projets */}
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center text-[#0F0B60]">
          {t('home.projects.title')}
        </h2>

        <div className="w-24 h-1 bg-[#0F0B60] mx-auto my-4 rounded-full"></div>

        <p className="text-center text-gray-700 mb-6">
          {t('home.projects.description')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <NavLink to="/projets" className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold shadow-md hover:bg-green-700 transition-all">
            {t('home.projects.more')}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default home;


import React, { useState, useId } from 'react'
import CACAO from "../../../assets/img/cacao4.png"
import ENERGIE from "../../../assets/img/energie.jpg"
import ProjectCard from '../../../components/projetCard/projetCard';
import { NavLink } from 'react-router-dom';
import oeuvre from "../../../assets/img/foncier.jpg"
import { motion } from 'framer-motion';

// Types
interface AccordionProps {
  title: string;
  children: React.ReactNode;
  iconColor?: string;
  className?: string;
}

interface LawLink {
  text: string;
  subtitle: string;
  year: string;
  link: string;
}

// Subcomponents
const AcquisitionCard = ({ title, content, icon }: { title: string; content: string; icon: string }) => (
  <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#0E600B]">
    <div className="flex items-start gap-4">
      <span className="text-2xl text-[#0F0B60]">{icon}</span>
      <div>
        <h4 className="text-xl font-semibold text-[#0F0B60] mb-2">
          {title}
        </h4>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  </div>
)

const ReformListItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3 p-4 hover:bg-[#0E600B]/5 rounded-lg transition-colors">
    <span className="text-[#0E600B] mt-1">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </span>
    <span className="text-gray-700 font-medium">{text}</span>
  </li>
)

const Accordion = ({ title, children, iconColor = '#0F0B60', className }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <div className={`border border-gray-200 rounded-xl overflow-hidden mb-4 transition-all duration-200 hover:border-[#0F0B60] ${className}`}>
      <button
        className="w-full flex justify-between items-center p-4 cursor-pointer bg-gradient-to-r from-white to-[#0F0B60]/5 hover:from-[#0F0B60]/10"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <h3 className="text-lg font-semibold text-[#0F0B60]">{title}</h3>
        <span style={{ color: iconColor }} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </button>
      <div
        id={contentId}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}
      >
        <div className="p-4 bg-white text-gray-700 border-t border-[#0F0B60]/10">
          {children}
        </div>
      </div>
    </div>
  );
};

const LawLinkItem = ({ law }: { law: LawLink }) => (
  <li>
    <a
      href={law.link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 flex items-start gap-3 rounded-lg hover:bg-[#0F0B60]/5 transition-colors group"
    >
      <span className="text-[#0F0B60] font-mono text-sm bg-[#0F0B60]/10 px-2 py-1 rounded">
        {law.year}
      </span>
      <div>
        <div className="font-medium text-gray-900 group-hover:text-[#0F0B60]">
          {law.text}
        </div>
        <div className="text-sm text-gray-500">
          {law.subtitle}
        </div>
      </div>
    </a>
  </li>
)

// Main Component
const Foncier = () => {
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
  const acquisitionMethods = [
    {
      title: "Terrains Lotis",
      content: "Procédure administrative simplifiée pour l'obtention",
      icon: "🏘️"
    },
    {
      title: "Terrains Non Lotis",
      content: "Processus de régularisation encadré par la loi",
      icon: "🌳"
    }
  ]

  const reformsList = [
    "Accélération des procédures administratives",
    "Décentralisation des décisions régionales",
    "Système de publication transparent",
    "Mécanisme de résolution des litiges"
  ]

  const legalLaws: LawLink[] = [
    {
      text: "Ordonnance 74-1",
      subtitle: "Régime foncier",
      year: "1974",
      link: "#regime-foncier",
    },
    {
      text: "Ordonnance 74-2",
      subtitle: "Gestion domaniale",
      year: "1974",
      link: "#gestion-domaniale",
    },
    {
      text: "Ordonnance 74-3",
      subtitle: "Expropriation",
      year: "1974",
      link: "#expropriation",
    },
    {
      text: "Loi 80-21",
      subtitle: "Amendements",
      year: "1980",
      link: "#amendements",
    }
  ]

  return (
    <div>
      <div>
        <div className="relative isolate overflow-hidden bg-green-900 py-24 sm:py-32">
          <img src={oeuvre} alt="" className="absolute inset-0 z-10 size-full object-cover object-right md:object-center opacity-30" />
          <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#0E600B] to-[#F5BA3A] opacity-20"></div>
          </div>
          <div className="absolute -top-52 left-1/2 z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#0E600B] to-[#F5BA3A] opacity-30"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Système Foncier au Cameroun
            </h2>
            <p className="text-center text-white leading-relaxed opacity-90">
              Le système foncier camerounais allie tradition et modernité, structuré autour
              des domaines public et privé de l'État. Explorez les mécanismes juridiques
              encadrant la propriété immobilière.
            </p>
          </motion.div>

        </div>
      </div>
      <div aria-label="Breadcrumbs" className="bg-gray-100 sticky top-24 z-10 flex align-center space-x-2 text-sm font-semibold p-6 lg:p-8 border-spacing-1">
        <NavLink className="text-slate-500 hover:text-slate-900 hover:underline" to={'/'}>Accueil</NavLink>
        <div aria-hidden="true" className="text-slate-400 select-none">/</div>
        <p className="text-slate-500">Guide de l'investisseur</p>
        <div aria-hidden="true" className="text-slate-400 select-none">/</div>
        <p className="text-slate-500">Foncier</p>
      </div>
      <div className="max-w-7xl mx-auto p-6 space-y-8">

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-4 space-y-8">
            <section className="grid gap-6 md:grid-cols-2">
              {acquisitionMethods.map((method, index) => (
                <AcquisitionCard key={index} {...method} />
              ))}
            </section>
            <section className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="max-w-3xl">
                <div className="mb-6">
                  <span className="bg-[#0E600B]/10 text-[#0E600B] px-4 py-2 rounded-full text-sm font-semibold">
                    Nouveauté 2005
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Révolution des Réformes Foncières
                </h3>
                <ul className="space-y-4">
                  {reformsList.map((reform, index) => (
                    <ReformListItem key={index} text={reform} />
                  ))}
                </ul>
              </div>
            </section>

            <div className="space-y-6">
              <Accordion title="📜 Titre Foncier Garanti" iconColor="#F5BA3A">
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    Une procédure sécurisée avec authentification biométrique
                    et vérification cadastrale numérique.
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Certificat d'authenticité numérique</li>
                    <li>Géolocalisation précise</li>
                    <li>Protection contre les fraudes</li>
                  </ul>
                </div>
              </Accordion>

              <Accordion title="🏢 Bail Commercial Sécurisé" iconColor="#DC2123">
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    Contrats de bail modernisés avec protection des deux parties
                    et réévaluation encadrée.
                  </p>
                  <div className="bg-[#F5BA3A]/10 p-4 rounded-lg">
                    <p className="text-sm text-[#0F0B60]">
                      Durée maximale : 15 ans renouvelable<br />
                      Indexation réglementée sur l'indice INSEE
                    </p>
                  </div>
                </div>
              </Accordion>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-1">
            <aside className="bg-white rounded-xl shadow-xl border border-gray-100 sticky top-6">
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0F0B60] mb-4 border-b pb-4">
                  📚 Code Foncier
                </h3>
                <nav>
                  <ul className="space-y-3">
                    {legalLaws.map((law, index) => (
                      <LawLinkItem key={index} law={law} />
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>
          </motion.div>
        </div>
        <div className="container mx-auto p-6">
          {/* Titre avec style attractif */}
          <h2 className="text-3xl font-bold text-center text-[#0F0B60]">
            Saisissez des Opportunités Uniques !
          </h2>

          {/* Barre de séparation */}
          <div className="w-24 h-1 bg-[#0F0B60] mx-auto my-4 rounded-full"></div>

          {/* Message d'encouragement */}
          <p className="text-center text-gray-700 mb-6">
            Investissez dès aujourd’hui dans des projets innovants et rentables pour bâtir l’avenir de l’économie camerounaise.
          </p>

          {/* Liste des projets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {/* Lien Voir plus */}
          <div className="flex justify-center mt-8">
            <NavLink
              to="/projets"
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold shadow-md hover:bg-green-700 transition-all"
            >
              Voir plus de projets
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Foncier
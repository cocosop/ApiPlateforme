import React, { useState, useId } from 'react'
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
interface FoncierProps {
  id?: string; // La prop id est optionnelle
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
const Foncier: React.FC<FoncierProps> = ({ id }) => {  
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
      link: "https://garoua.eregulations.org/media/ordonnance_fixant_regime_foncier_cameroun.pdf",
    },
    {
      text: "Ordonnance 74-2",
      subtitle: "Gestion domaniale",
      year: "1974",
      link: "https://www.cvuc-uccc.com/minat/textes/35.pdf",
    },
    {
      text: "Ordonnance 74-3",
      subtitle: "Expropriation",
      year: "1974",
      link: "https://garoua.eregulations.org/media/ordonnance_fixant_regime_foncier_cameroun.pdf",
    },
    {
      text: "Loi 80-21",
      subtitle: "Amendements",
      year: "1980",
      link: "https://legecam.cm/wp-content/uploads/2024/05/bb-rfi-05-loi-n8021-du-14-juillet-1980-modifiant-et-completant-certaines-dispositions-de-lordonnance.pdf",
    }
  ]
  return (   
<div id={id} className="flex flex-col items-center mb-8">
  {/* Slider Section */}
  <div data-aos="fade-up" className="flex flex-col items-center mb-6">
  <h2 className="text-3xl font-bold text-center mb-4 mt-0 text-[#0F0B60]">
    Foncier
  </h2>
  <span className="block w-96 h-1 bg-[#0F0B60]"></span> {/* Ajustez la largeur ici */}
</div>
  {/* Accordions */}
  <div className="w-full max-w-4xl space-y-4">
  <Accordion title="⚖️ Information générales" iconColor="#DC2123" className="bg-white shadow-sm border border-gray-100 rounded-lg">
    <section className="grid gap-6 md:grid-cols-2">
      {acquisitionMethods.map((method, index) => (
        <AcquisitionCard key={index} {...method} />
      ))}
    </section>
    <section className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mt-6">
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
  </Accordion>

  <Accordion title="📜 Titre Foncier Garanti" iconColor="#F5BA3A" className="bg-white shadow-sm border border-gray-100 rounded-lg">
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

  <Accordion title="🏢 Bail Commercial Sécurisé" iconColor="#DC2123" className="bg-white shadow-sm border border-gray-100 rounded-lg">
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

  <Accordion title="⚖️ Code Foncier" iconColor="#DC2123" className="bg-white shadow-sm border border-gray-100 rounded-lg">
    <nav>
      <ul className="space-y-3">
        {legalLaws.map((law, index) => (
          <LawLinkItem key={index} law={law} />
        ))}
      </ul>
    </nav>
  </Accordion>
</div>
</div>

  
  )
}

export default Foncier
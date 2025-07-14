import { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon, DocumentTextIcon, BuildingLibraryIcon, ClockIcon, CheckBadgeIcon, CheckCircleIcon, LightBulbIcon, MapPinIcon } from '@heroicons/react/24/outline';
import oeuvre from "../../../assets/img/entreprise.jpg"
import CACAO from "../../../assets/img/cacao4.png"
import ENERGIE from "../../../assets/img/energie.jpg"
import ProjectCard from '../../../components/projetCard/projetCard';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import BreadcrumbsComponent from '../../../components/breadcrumbsComponent/breadcrumbsComponent';

type Section = 'Contexte Juridique' | 'Avantages Fiscaux' | 'Institutions';

export default function CreationEntreprise() {
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
  const [activeTab, setActiveTab] = useState<'physique' | 'morale'>('physique');
  const [openSection, setOpenSection] = useState<Section | null>(null);

  // Sticky nav logic
  const navRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      const { top } = navRef.current.getBoundingClientRect();
      setIsSticky(top <= 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSection = (section: Section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const documents = {
    physique: [
      "Copie certifiée de la carte nationale d'identité/passeport",
      "Extrait du bulletin N°3 du casier judiciaire",
      "Extrait de l'acte de mariage ou certificat de célibat",
      "Certificat de résidence",
      "2 photos 4X4 avec noms au dos",
      "Autorisation préalable d'exercer (si nécessaire)",
      "Plan de localisation signé"
    ],
    morale: [
      "2 copies certifiées des statuts",
      "2 exemplaires de déclaration de conformité",
      "Liste certifiée des dirigeants",
      "2 extraits de casier judiciaire des dirigeants",
      "Autorisation préalable (si nécessaire)",
      "Plan de localisation signé"
    ]
  };

  const etapesCFCE = [
    {
      title: 'Attestation CNPS',
      cost: '8 000 XAF',
      details: 'Quittance de 6000 FCFA + 2 timbres de 1000 FCFA'
    },
    {
      title: 'Attestation de non-emploi',
      cost: '2 500 XAF',
      details: 'Quittance de 1500 FCFA + 1 timbre de 1000 FCFA'
    },
    {
      title: 'Patente',
      cost: 'Exonération 1ère année',
      details: 'Gratuit pendant la première année d\'activité'
    },
    {
      title: 'Carte de contribuable',
      cost: 'Gratuit',
      details: 'Délivrée sans frais'
    },
    {
      title: 'Enregistrement du bail',
      cost: '10% du loyer annuel / 0.11% valeur immo',
      details: 'Selon statut locataire/propriétaire'
    },
    {
      title: 'Registre du Commerce',
      cost: '53 000 XAF (physique) / 41 500 XAF (morale)',
      details: 'Enregistrement final au RCCM'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-[65vh] min-h-[400px] max-h-[700px] bg-gray-900 flex items-center justify-center">
        <img src={oeuvre} alt="" className="absolute inset-0 z-0 w-full h-full object-cover object-center opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
        <div className="absolute inset-0 bg-gray-900/40" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80 ring-1 ring-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
            >
              Création d'entreprise simplifiée
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent"
              >
                Votre entreprise au Cameroun en 72h
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6 text-lg md:text-xl text-gray-200 font-normal max-w-2xl mx-auto leading-relaxed"
            >
              Bénéficiez d'un cadre juridique OHADA modernisé et d'un processus accéléré grâce aux Centres de Formalités de Création d'Entreprises (CFCE)
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8"
            >
              <a
                href="#contenu"
                className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-medium transition-all duration-300 group"
              >
                Découvrir le guide
                <ClockIcon className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Sticky Navigation */}
      <div ref={navRef}>
        <nav
          className={`w-full transition-all duration-300 z-50 ${
            isSticky
              ? 'fixed top-0 left-0 bg-gray-900 border-t border-gray-700 py-4 shadow-lg'
              : 'bg-gray-900 border-t border-gray-700 py-4 shadow-lg'
          }`}
          style={isSticky ? { position: 'fixed', top: 0, left: 0 } : {}}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ul className="flex items-center justify-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {[
                { id: 'cfce', title: 'CFCE', icon: BuildingLibraryIcon },
                { id: 'structures', title: 'Structures', icon: BuildingLibraryIcon },
                { id: 'documents', title: 'Documents', icon: DocumentTextIcon },
                { id: 'projets', title: 'Projets', icon: CheckCircleIcon },
              ].map((section, index) => (
                <motion.li
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <a
                    href={`#${section.id}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-emerald-500 hover:text-gray-900 text-white text-sm font-medium transition-all duration-200 whitespace-nowrap hover:shadow-lg hover:shadow-emerald-500/20"
                  >
                    <section.icon className="h-4 w-4" />
                    {section.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      {/* Main Content */}
      <main id="contenu" className="max-w-7xl mx-auto px-4 py-12">
        {/* Section CFCE Détaillée */}
        <section id="cfce" className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-[#0F0B60] mb-8 flex items-center justify-center"
          >
            <BuildingLibraryIcon className="w-7 h-7 mr-3" />
            Le CFCE en Bref
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <LightBulbIcon className="w-10 h-10 text-[#F5BA3A] mb-4" />
              <div className="text-xl font-bold text-[#0E600B] mb-2">Centralisé</div>
              <div className="text-gray-600 text-sm">Toutes les démarches en un seul lieu</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <ClockIcon className="w-10 h-10 text-[#0F0B60] mb-4" />
              <div className="text-xl font-bold text-[#0F0B60] mb-2">72h chrono</div>
              <div className="text-gray-600 text-sm">Création d'entreprise rapide et simplifiée</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <CheckCircleIcon className="w-10 h-10 text-green-600 mb-4" />
              <div className="text-xl font-bold text-green-700 mb-2">Accompagnement</div>
              <div className="text-gray-600 text-sm">Conseillers dédiés à chaque étape</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-12 grid md:grid-cols-2 gap-8"
          >
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 flex flex-col items-center text-center">
              <MapPinIcon className="w-8 h-8 text-[#0E600B] mb-3" />
              <div className="text-lg font-semibold text-[#0E600B] mb-2">Présence nationale</div>
              <div className="text-gray-600 text-sm mb-2">10 villes principales</div>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  'Yaoundé', 'Douala', 'Bafoussam', 'Garoua', 'Bertoua',
                  'Ngaoundéré', 'Maroua', 'Bamenda', 'Ebolowa', 'Buéa'
                ].map((city, i) => (
                  <span key={i} className="bg-white px-3 py-1 rounded-full text-xs text-[#0F0B60] border">{city}</span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 flex flex-col items-center text-center">
              <ClockIcon className="w-8 h-8 text-[#0F0B60] mb-3" />
              <div className="text-lg font-semibold text-[#0F0B60] mb-2">Étapes express</div>
              <ol className="text-gray-600 text-sm space-y-2 text-left mx-auto max-w-xs">
                <li><span className="font-bold text-[#0F0B60]">1.</span> Préparez vos documents</li>
                <li><span className="font-bold text-[#0F0B60]">2.</span> Déposez au CFCE</li>
                <li><span className="font-bold text-[#0F0B60]">3.</span> Traitement multiservice</li>
                <li><span className="font-bold text-[#0F0B60]">4.</span> Retirez vos attestations</li>
              </ol>
            </div>
          </motion.div>
        </section>
        {/* Types de Sociétés */}
        <section id="structures" className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-[#0E600B] mb-8 flex items-center justify-center"
          >
            <BuildingLibraryIcon className="w-7 h-7 mr-3" />
            Structures Juridiques
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                type: 'EURL',
                desc: 'Un associé, capital flexible'
              },
              {
                type: 'SARL',
                desc: '2+ associés, capital variable'
              },
              {
                type: 'SA',
                desc: 'Actionnariat, capital min. 10M XAF'
              },
              {
                type: 'SAS',
                desc: 'Organisation souple'
              },
            ].map((societe, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-[#F5BA3A] hover:shadow-xl transition-shadow text-center"
              >
                <h3 className="text-xl font-bold text-[#0F0B60] mb-2">{societe.type}</h3>
                <p className="text-gray-600 text-sm">{societe.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Documents Section */}
        <section id="documents" className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-[#0E600B] mb-8 flex items-center justify-center"
          >
            <DocumentTextIcon className="w-7 h-7 mr-3" />
            Documents Requis
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-8">
              <div className="flex justify-center mb-4">
                <button
                  onClick={() => setActiveTab('physique')}
                  className={`px-6 py-2 rounded-full font-medium mr-2 ${activeTab === 'physique' ? 'bg-[#0F0B60] text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  Physique
                </button>
                <button
                  onClick={() => setActiveTab('morale')}
                  className={`px-6 py-2 rounded-full font-medium ${activeTab === 'morale' ? 'bg-[#0F0B60] text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  Morale
                </button>
              </div>
              <ul className="space-y-3">
                {documents[activeTab].map((doc, i) => (
                  <li key={i} className="flex items-center">
                    <CheckBadgeIcon className="w-5 h-5 text-[#0E600B] mr-2" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
              <ClockIcon className="w-8 h-8 text-[#0F0B60] mb-3" />
              <div className="text-lg font-semibold text-[#0F0B60] mb-2">Procédures CFCE</div>
              <ol className="text-gray-600 text-sm space-y-2 text-left mx-auto max-w-xs">
                {[
                  "Préparez vos documents",
                  "Déposez au CFCE",
                  "Traitement multiservice",
                  "Retirez vos attestations"
                ].map((step, i) => (
                  <li key={i}><span className="font-bold text-[#0F0B60]">{i + 1}.</span> {step}</li>
                ))}
              </ol>
            </div>
          </div>
        </section>
        {/* Accordéon Sections */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4 mb-16"
        >
          {[
            {
              title: 'Contexte Juridique',
              content: (
                <div className="flex flex-col md:flex-row gap-4">
                  <a
                    href="https://www.droit-afrique.com/upload/doc/ohada/Ohada-Acte-Uniforme-2010-droit-commercial.pdf"
                    className="flex-1 bg-blue-50 rounded-xl p-4 flex flex-col items-center hover:bg-blue-100 transition"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <span className="font-bold text-[#0F0B60] mb-2">Traité OHADA</span>
                    <span className="text-xs text-gray-600 text-center">Droit Commercial Général</span>
                  </a>
                  <a
                    href="https://douala.eregulations.org/media/-2016-decembre-2016-fixant-22417_1.pdf"
                    className="flex-1 bg-blue-50 rounded-xl p-4 flex flex-col items-center hover:bg-blue-100 transition"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <span className="font-bold text-[#0F0B60] mb-2">Loi 2016/014</span>
                    <span className="text-xs text-gray-600 text-center">14/12/2016</span>
                  </a>
                  <a
                    href="https://www.droit-afrique.com/uploads/Cameroun-Decret-2017-877-modalites-authentification-sarl.pdf"
                    className="flex-1 bg-blue-50 rounded-xl p-4 flex flex-col items-center hover:bg-blue-100 transition"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <span className="font-bold text-[#0F0B60] mb-2">Décret 2017/0877</span>
                    <span className="text-xs text-gray-600 text-center">28/02/2017</span>
                  </a>
                </div>
              )
            },
            {
              title: 'Avantages Fiscaux',
              content: (
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#0E600B]/10 rounded-lg text-center">
                    <p className="font-semibold text-[#0E600B]">Exonération de patente</p>
                    <p className="text-xs">1ère année d'activité exonérée</p>
                  </div>
                  <div className="p-4 bg-[#0F0B60]/10 rounded-lg text-center">
                    <p className="font-semibold text-[#0F0B60]">Coûts réduits</p>
                    <p className="text-xs">Carte de contribuable gratuite</p>
                  </div>
                </div>
              )
            },
            {
              title: 'Institutions',
              content: (
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: 'API', desc: 'Promotion Investissements', link: 'https://investincameroon.net/' },
                    { name: 'APME', desc: 'Soutien PME', link: 'https://www.apme.cm/en/home-en-2/?lang=en%20/' },
                    { name: 'CFCE', desc: 'Guichets Uniques', link: 'https://www.cfce.cm/' },
                    { name: 'MINMIDT', desc: 'Industrie', link: 'https://www.minmidt.cm/' },
                    { name: 'MINPMESA', desc: 'Artisanat', link: 'https://www.minpmeesa.cm/site/' }
                  ].map((inst, i) => (
                    <a
                      key={i}
                      href={inst.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
                    >
                      <CheckBadgeIcon className="w-5 h-5 text-[#0F0B60] mr-2" />
                      <span className="font-semibold text-[#0F0B60]">{inst.name}</span>
                      <span className="ml-2 text-xs text-gray-500">{inst.desc}</span>
                    </a>
                  ))}
                </div>
              )
            }
          ].map((section, i) => (
            <div key={i} className="border rounded-xl bg-white">
              <button
                onClick={() => toggleSection(section.title as Section)}
                className="flex justify-between items-center w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-t-xl"
              >
                <span className="font-semibold text-[#0F0B60]">{section.title}</span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${openSection === section.title ? 'transform rotate-180' : ''}`} />
              </button>
              {openSection === section.title && (
                <div className="p-4 bg-white space-y-4 rounded-b-xl">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </motion.div>
        {/* Doing Business Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-[#F5BA3A] p-6 rounded-2xl mb-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-[#0F0B60] mb-4">
              Environnement des Affaires en Progression
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
              <div className="bg-white px-4 py-2 rounded-full">
                <span className="font-bold text-[#DC2123]">#163</span> mondial (Doing Business 2018)
              </div>
              <div className="bg-white px-4 py-2 rounded-full">
                <span className="font-bold text-[#0E600B]">+3 places</span> en 1 an
              </div>
            </div>
            <p className="text-sm text-[#0F0B60]/90">
              Progrès notables : Création d'entreprise accélérée, fichier bancaire national,
              centrale des incidents de paiement
            </p>
          </div>
        </motion.div>
       
      </main>
    </div>
  );
}
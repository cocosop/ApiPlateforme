import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Scale,
  Building2,
  FileText,
  MapPin,
  DollarSign,
  BriefcaseBusiness,
  BarChart3,
  Handshake,
  Repeat,
  ArrowDown,
  Eye,
  ChevronRight,
  X,
  Download,
  ExternalLink, // For the close button in the dialog
} from 'lucide-react';

import FONCIER from '../../../assets/img/droit.png';

// Define the Section type (no 'content' property here, as content will be in dialogs)
type Section = {
  id: string;
  title: string;
  icon: React.ElementType;
};

// Define a type for the active dialog state
type ActiveDialog = {
  id: string;
  title: string;
  content: React.ReactNode;
} | null;

const InvestorRights: React.FC = () => {
  const [activeDialog, setActiveDialog] = useState<ActiveDialog>(null);

  const navRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        rootMargin: '-1px 0px 0px 0px',
        threshold: [0],
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    window.history.replaceState(null, '', `#${sectionId}`);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = isSticky && navRef.current ? navRef.current.offsetHeight : 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setActiveDialog(null); // Close any open dialog when navigating
  }, [isSticky]);

  const openDialog = useCallback((id: string, title: string, content: React.ReactNode) => {
    setActiveDialog({ id, title, content });
    // Optionally, disable body scroll when dialog is open
    document.body.style.overflow = 'hidden';
  }, []);

  const closeDialog = useCallback(() => {
    setActiveDialog(null);
    // Re-enable body scroll
    document.body.style.overflow = '';
  }, []);

  const sections: Section[] = [
    { id: 'protection', title: 'Protection des Investissements', icon: ShieldCheck },
    { id: 'traitement', title: 'Traitement National et MFN', icon: Scale },
    { id: 'cadre-legal', title: 'Cadre Légal et Institutions', icon: Building2 },
    { id: 'droit-propriete', title: 'Droit à la Propriété', icon: FileText },
    { id: 'procedure-terrain', title: 'Procédures d’Obtention de Terrain', icon: MapPin },
    { id: 'fiscalite-incitations', title: 'Fiscalité et Incitations', icon: DollarSign },
    { id: 'resolution-conflits', title: 'Résolution des Conflits', icon: BriefcaseBusiness },
    { id: 'liberte-entreprise', title: 'Liberté d’Entreprise', icon: BarChart3 },
    { id: 'responsabilite-sociale', title: 'RSE et Développement Durable', icon: Handshake },
    { id: 'liberte-capitaux', title: 'Circulation des Capitaux', icon: Repeat },
  ];

  // Helper function to render a section block
 const renderSectionBlock = (
  id: string,
  Icon: React.ElementType,
  title: string,
  description: React.ReactNode, // <-- Changed to React.ReactNode
  quickFacts: { label: string; value: string; color: string }[],
  dialogContent: React.ReactNode,
  buttonText: string,
  gradientFrom: string,
  gradientTo: string,
  iconBgColor: string,
) => (
    <div id={id}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-3xl p-12 text-center`}
      >
        <div className={`inline-flex items-center justify-center w-20 h-20 ${iconBgColor} rounded-full mb-6`}>
          <Icon className="h-10 w-10 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{description}</p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {quickFacts.map((fact, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className={`text-3xl font-bold ${fact.color} mb-2`}>{fact.value}</div>
              <div className="text-gray-600">{fact.label}</div>
            </div>
          ))}
        </div>

        <button
          onClick={() => openDialog(id, title, dialogContent)}
          className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${gradientFrom.replace('from-', 'from-')} ${gradientTo.replace('to-', 'to-')} text-black font-semibold rounded-full shadow-lg hover:${gradientFrom.replace('from-', 'hover:from-')} hover:${gradientTo.replace('to-', 'hover:to-')} transform hover:scale-105 transition-all duration-300`}
        >
          <Eye className="h-5 w-5 mr-2" />
          {buttonText}
          <ChevronRight className="h-5 w-5 ml-2" />
        </button>
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gray-50">
        {/* Section Hero */}
        <div ref={heroRef} className="relative h-[65vh] min-h-[500px] max-h-[800px] bg-gray-900">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={FONCIER}
              alt="Illustration des Droits des Investisseurs"
              className="w-full h-full object-cover object-center opacity-70"
              style={{ objectPosition: 'center 30%' }}
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
          <div className="absolute inset-0 bg-gray-900/40" />

          <div className="relative h-full flex flex-col">
            <div className="flex-grow flex items-center justify-center px-6 text-center z-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl"
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mb-6 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80 ring-1 ring-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
                >
                  Sécurité Juridique
                </motion.div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent"
                  >
                    Droit des Investisseurs au Cameroun
                  </motion.span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="mt-6 text-lg md:text-xl text-gray-300 font-normal max-w-2xl mx-auto leading-relaxed"
                >
                  Un cadre légal robuste pour protéger et faciliter vos investissements.
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
                    Découvrir les droits
                    <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Sticky Navigation Bar */}
        <div ref={navRef}>
          <nav
            className={`w-full transition-all duration-300 z-40 ${ // Reduced z-index to allow dialog to be on top
              isSticky
                ? 'fixed top-0 left-0 bg-gray-900 border-t border-gray-700 py-4 shadow-lg'
                : 'relative bg-gray-900 border-t border-gray-700 py-4 shadow-lg'
            }`}
          >
            <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
              <ul className="flex items-center justify-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {sections.map((section, index) => (
                  <motion.li
                    key={section.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(section.id);
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-emerald-500 hover:text-gray-900 text-white text-sm font-medium transition-all duration-200 whitespace-nowrap hover:shadow-lg hover:shadow-emerald-500/20"
                    >
                      {section.icon && <section.icon className="h-4 w-4" />}
                      {section.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <main id="contenu" className="container mx-auto px-4 py-12 max-w-7xl">
       <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Section: Protection des Investissements (Example from previous response) */}
          {renderSectionBlock(
            'protection',
            ShieldCheck,
            'Protection des Investissements',
            <>Le Cameroun offre une protection robuste des investissements via son <span className="font-bold text-blue-600">Code des Investissements de 2013</span>, des conventions internationales et une adhésion à <span className="font-bold text-red-600">l'OHADA</span>.</>,
            [
              { label: 'Textes Fondamentaux', value: 'OHADA, CIMA', color: 'text-blue-600' },
              { label: 'Garanties', value: 'Non-expropriation', color: 'text-green-600' },
              { label: 'Stabilité Fiscale', value: '10 ans', color: 'text-purple-600' },
            ],
            // Dialog content for this section
            <div className="space-y-6 text-gray-700">
              <p>
                Le Cameroun s'est doté d'un arsenal juridique solide pour garantir la sécurité des investissements, tant nationaux qu'étrangers.
              </p>
              <h4 className="font-semibold text-lg text-blue-700 mt-4 mb-2">📜 Textes Fondamentaux</h4>
              <ul className="list-disc pl-8 space-y-2">
                <li>**Code des Investissements (Loi n° 2013/004 du 19 avril 2013)**: Ce code offre un cadre protecteur, garantissant notamment la liberté d'investissement, le droit de propriété, et la non-expropriation sans juste et préalable indemnisation.</li>
                <li>**Droit OHADA (Organisation pour l'Harmonisation en Afrique du Droit des Affaires)**: En tant que membre, le Cameroun applique un droit des affaires unifié et moderne, qui sécurise les transactions commerciales, les sociétés, les sûretés, et les procédures collectives.</li>
                <li>**Conventions CIPRES et CIMA**: Réglementent la prévoyance sociale et les assurances, offrant un cadre stable pour la gestion des risques.</li>
              </ul>

              <h4 className="font-semibold text-lg text-green-700 mt-4 mb-2">🛡️ Garanties Principales</h4>
              <ul className="list-disc pl-8 space-y-2">
                <li>**Protection contre l'expropriation**: Garantie par l'article 36 de la Constitution et le Code des Investissements, qui n'autorisent l'expropriation que pour cause d'utilité publique et moyennant une juste et préalable indemnisation.</li>
                <li>**Stabilité fiscale**: Pour les entreprises agréées au régime du Code des Investissements, des périodes d'exonération et de stabilité fiscale peuvent être accordées, pouvant aller jusqu'à 10 ans pour certains secteurs prioritaires.</li>
                <li>**Liberté de transfert des capitaux**: Les investisseurs ont la garantie de pouvoir transférer librement les bénéfices, dividendes, redevances, et le produit de la liquidation de leurs investissements, sous réserve du respect des réglementations de change de la BEAC.</li>
                <li>**Traitement non-discriminatoire**: Le Code des Investissements assure un traitement égal entre investisseurs nationaux et étrangers (Traitement National), et les avantages accordés à un pays ne peuvent être refusés aux autres (Clause de la Nation la Plus Favorisée - NPF).</li>
              </ul>
              <h4 className="font-semibold text-lg text-gray-800 mt-4 mb-2">📚 Ressources Utiles</h4>
              <ul className="list-disc pl-8 space-y-2">
                <li>
                  <a href="https://www.api.cm/index.php/fr/investir-au-cameroun/le-code-des-investissements" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2" /> Code des Investissements (API)
                  </a>
                </li>
                <li>
                  <a href="https://www.ohada.org/index.php/fr/droit-unifie/droit-des-affaires" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2" /> Actes Uniformes OHADA
                  </a>
                </li>
                <li>
                  <a href="/chemin/vers/la/constitution-camerounaise.pdf" download className="text-blue-600 hover:underline flex items-center">
                    <Download className="h-4 w-4 mr-2" /> Télécharger la Constitution Camerounaise (PDF)
                  </a>
                </li>
              </ul>
            </div>,
            'Voir les Garanties',
            'from-blue-50',
            'to-indigo-100',
            'bg-blue-600',
          )}

          {/* Section: Traitement National et MFN */}
          {renderSectionBlock(
            'traitement',
            Scale,
            'Traitement National et Clause NPF',
            <>Les investisseurs bénéficient du <span className="font-bold text-emerald-600">même traitement</span> que les nationaux et des avantages accordés aux autres pays (<span className="font-bold text-orange-600">clause NPF</span>).</>,
            [
              { label: 'Principe', value: 'Non-discrimination', color: 'text-emerald-600' },
              { label: 'Accès Marchés', value: 'Égalité', color: 'text-blue-600' },
              { label: 'Sauf Exceptions', value: 'Stratégiques', color: 'text-red-600' },
            ],
            // Dialog content for this section
            <div className="space-y-6 text-gray-700">
                <p>
                    La législation camerounaise garantit un **traitement équitable et non-discriminatoire** aux investisseurs étrangers. Ce principe fondamental vise à créer un environnement d'affaires juste et prévisible.
                </p>
                <h4 className="font-semibold text-lg text-emerald-700 mt-4 mb-2">🤝 Principe du Traitement National (TN)</h4>
                <ul className="list-disc pl-8 space-y-2">
                    <li>Les investisseurs étrangers bénéficient des **mêmes droits et sont soumis aux mêmes obligations** que les investisseurs nationaux, sauf exceptions dûment justifiées.</li>
                    <li>Ceci s'applique à toutes les étapes de l'investissement : de l'établissement à l'exploitation, en passant par l'acquisition de biens et la participation aux marchés publics.</li>
                    <li>L'objectif est d'éliminer toute discrimination basée sur la nationalité ou le lieu d'origine du capital, favorisant ainsi une concurrence loyale.</li>
                </ul>

                <h4 className="font-semibold text-lg text-orange-700 mt-4 mb-2">🌐 Clause de la Nation la Plus Favorisée (NPF)</h4>
                <ul className="list-disc pl-8 space-y-2">
                    <li>Si le Cameroun accorde des **avantages spécifiques** (fiscaux, douaniers, réglementaires, etc.) à des investisseurs d'un autre pays dans le cadre d'un accord bilatéral ou multilatéral, ces mêmes avantages sont étendus **automatiquement** aux investisseurs relevant de la clause NPF.</li>
                    <li>Cette clause vise à garantir une égalité de traitement entre tous les partenaires internationaux et à éviter des distorsions de concurrence.</li>
                </ul>

                <h4 className="font-semibold text-lg text-red-700 mt-4 mb-2">🚫 Exceptions et Réservations</h4>
                <ul className="list-disc pl-8 space-y-2">
                    <li>Certains **secteurs stratégiques** (ex: défense, ressources naturelles critiques, médias) peuvent être soumis à des régimes spécifiques ou des restrictions pour des raisons de souveraineté nationale ou de sécurité.</li>
                    <li>Des **mesures transitoires ou de sauvegarde économique** peuvent être appliquées dans des situations exceptionnelles, toujours dans le respect des engagements internationaux.</li>
                    <li>Il est toujours recommandé de consulter les **textes spécifiques** et de se faire accompagner par des experts juridiques pour les cas particuliers ou les investissements dans des domaines sensibles.</li>
                </ul>
                <h4 className="font-semibold text-lg text-gray-800 mt-4 mb-2">📚 Ressources Utiles</h4>
                <ul className="list-disc pl-8 space-y-2">
                  <li>
                    <a href="https://www.api.cm/index.php/fr/investir-au-cameroun/le-code-des-investissements" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" /> Code des Investissements du Cameroun (API)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.wto.org/french/tratop_f/invest_f/invest_f.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" /> En savoir plus sur la clause NPF (OMC)
                    </a>
                  </li>
                  <li>
                    <a href="/docs/guide-investisseur-cameroun.pdf" download className="text-blue-600 hover:underline flex items-center">
                      <Download className="h-4 w-4 mr-2" /> Guide de l'Investisseur au Cameroun (PDF)
                    </a>
                  </li>
                </ul>
            </div>,
            'Détails sur le Traitement',
            'from-green-50',
            'to-emerald-100',
            'bg-green-600',
          )}

          {/* Section: Cadre Légal et Institutions */}
          {renderSectionBlock(
            'cadre-legal',
            Building2,
            'Cadre Légal et Institutions',
            <>Le Cameroun dispose d'un <span className="font-bold text-purple-600">cadre juridique moderne</span> et d'institutions dédiées pour accompagner les investisseurs.</>,
            [
              { label: 'Institutions Clés', value: 'API, MINEPAT', color: 'text-purple-600' },
              { label: 'Droit Appliqué', value: 'OHADA', color: 'text-indigo-600' },
              { label: 'Simplification', value: 'CRI', color: 'text-teal-600' },
            ],
            // Dialog content for this section
            <div className="space-y-6 text-gray-700">
                <p>
                    Le Cameroun s'appuie sur un **cadre législatif et institutionnel robuste** pour encadrer et soutenir les investissements, assurant ainsi prévisibilité et sécurité juridique.
                </p>
                <h4 className="font-semibold text-lg text-purple-700 mt-4 mb-2">🏛️ Institutions Clés de l'Investissement</h4>
                <ul className="list-disc pl-8 space-y-2">
                    <li>**Agence de Promotion des Investissements (API)**: C'est le **guichet unique** pour les investisseurs, offrant accompagnement, information, et facilitation des démarches administratives de la création d'entreprise à la mise en œuvre du projet.</li>
                    <li>**Ministère de l'Économie, de la Planification et de l'Aménagement du Territoire (MINEPAT)**: Responsable de l'élaboration et de la mise en œuvre de la politique économique nationale, incluant la planification du développement et la supervision des grands projets d'investissement.</li>
                    <li>**Centres de Formalités des Entreprises (CFE)**: Ces centres simplifient drastiquement les procédures de création d'entreprise en regroupant en un seul lieu les différentes administrations impliquées (impôts, greffe, sécurité sociale, etc.), réduisant les délais.</li>
                    <li>**Organe de Règlement des Différends (ORD) de l'OHADA**: Offre des mécanismes d'arbitrage et de médiation reconnus internationalement pour la résolution rapide et efficace des litiges commerciaux.</li>
                </ul>

                <h4 className="font-semibold text-lg text-indigo-700 mt-4 mb-2">⚖️ Cadre Juridique Principal</h4>
                <ul className="list-disc pl-8 space-y-2">
                    <li>**Droit OHADA**: Un recueil de 10 Actes Uniformes couvrant les principaux domaines du droit des affaires (droit commercial général, droit des sociétés et GIE, droit des sûretés, droit des procédures collectives d'apurement du passif, etc.). Il assure une **sécurité juridique et une prévisibilité** pour toutes les opérations commerciales.</li>
                    <li>**Code des Investissements (Loi n° 2013/004)**: Définit les principes généraux de l'investissement, les régimes incitatifs, et les garanties offertes aux investisseurs, tant nationaux qu'étrangers.</li>
                    <li>**Code Général des Impôts**: Régit la fiscalité des entreprises et des personnes physiques au Cameroun.</li>
                    <li>**Code du Travail**: Encadre les relations employeur-employés, y compris les conditions d'emploi, de licenciement, et de syndicalisation.</li>
                    <li>**Code des Marchés Publics**: Réglemente l'accès aux commandes publiques, garantissant la transparence et la concurrence.</li>
                    <li>**Loi sur la Concurrence**: Vise à promouvoir une concurrence saine et loyale sur les marchés, interdisant les pratiques anticoncurrentielles.</li>
                </ul>
                <h4 className="font-semibold text-lg text-gray-800 mt-4 mb-2">📚 Ressources Utiles</h4>
                <ul className="list-disc pl-8 space-y-2">
                  <li>
                    <a href="https://www.api.cm/index.php/fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" /> Site Officiel de l'API (Agence de Promotion des Investissements)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ohada.org/index.php/fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" /> Site Officiel de l'OHADA
                    </a>
                  </li>
                  <li>
                    <a href="/docs/code-general-impots-cameroun.pdf" download className="text-blue-600 hover:underline flex items-center">
                      <Download className="h-4 w-4 mr-2" /> Télécharger le Code Général des Impôts (PDF)
                    </a>
                  </li>
                  <li>
                    <a href="/docs/code-travail-cameroun.pdf" download className="text-blue-600 hover:underline flex items-center">
                      <Download className="h-4 w-4 mr-2" /> Télécharger le Code du Travail (PDF)
                    </a>
                  </li>
                </ul>
            </div>,
            'Explorer le Cadre Légal',
            'from-purple-50',
            'to-indigo-100',
            'bg-purple-600',
          )}

          {/* Section: Droit à la Propriété */}
          {renderSectionBlock(
            'droit-propriete',
            FileText,
            'Droit à la Propriété',
            <>La <span className="font-bold text-red-600">propriété privée est garantie</span> par la Constitution, avec des régimes fonciers clairs pour sécuriser vos acquisitions.</>,
            [
              { label: 'Garantie Légale', value: 'Constitution', color: 'text-red-600' },
              { label: 'Durée Titre', value: '25 ans+', color: 'text-yellow-600' },
              { label: 'Sécurité', value: 'Immatriculation', color: 'text-green-600' },
            ],
            // Dialog content for this section
            <div className="space-y-6 text-gray-700">
                <p>
                    Le droit à la propriété est **fondamental et solidement ancré** dans la législation camerounaise, offrant une sécurité essentielle aux investisseurs immobiliers et fonciers.
                </p>
                <h4 className="font-semibold text-lg text-red-700 mt-4 mb-2">🏡 Régime Foncier Camerounais</h4>
                <ul className="list-disc pl-8 space-y-2">
                    <li>**Titre Foncier**: C'est le **mode de preuve le plus sûr** et irréfutable du droit de propriété au Cameroun. Délivré par l'administration foncière (MINDCAF), il atteste de la propriété exclusive et inattaquable du terrain. Le droit de jouissance peut être accordé pour 25 ans renouvelables.</li>
                    <li>**Bail Emphytéotique**: Permet à un investisseur de disposer d'un terrain pour une **longue durée** (généralement entre 18 et 99 ans) en échange d'une redevance modique. Il confère des droits réels sur le terrain, permettant de le développer et de l'utiliser comme garantie pour des financements.</li>
                    <li>**Certificat de Propriété**: Document provisoire attestant d'une demande de titre foncier en cours ou d'un droit de propriété avant l'établissement définitif du titre.</li>
                    <li>**Terres Domaniales**: L'État camerounais est le propriétaire initial de toutes les terres. L'acquisition de terres se fait souvent par le biais de concessions domaniales, transformables en titres fonciers.</li>
                </ul>

                <h4 className="font-semibold text-lg text-green-700 mt-4 mb-2">📑 Procédures de Sécurisation de la Propriété</h4>
                <ul className="list-disc pl-8 space-y-2">
                    <li>**Immatriculation au Cadastre**: Toute propriété immobilière doit être immatriculée au cadastre pour être reconnue légalement. Cela implique un bornage physique du terrain et l'établissement d'un plan topographique.</li>
                    <li>**Publication au Journal Officiel**: Les acquisitions foncières importantes ou les titres fonciers font l'objet de publications officielles pour assurer la transparence et la bonne information des tiers et prévenir les litiges.</li>
                    <li>**Certificat de Non-Rétrocession**: Document crucial attestant que le terrain n'a pas été rétrocédé à l'État ou à un tiers, garantissant ainsi la validité de l'acquisition.</li>
                    <li>**Consultation du Registre Foncier**: Il est fortement recommandé de consulter le registre foncier auprès de la conservation foncière compétente avant toute acquisition pour vérifier l'historique de la propriété, les charges (hypothèques, servitudes) et l'absence de litiges en cours.</li>
                </ul>
                <h4 className="font-semibold text-lg text-gray-800 mt-4 mb-2">📚 Ressources Utiles</h4>
                <ul className="list-disc pl-8 space-y-2">
                  <li>
                    <a href="https://www.mindcaf.gov.cm/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" /> Site Officiel du MINDCAF (Ministère des Domaines, du Cadastre et des Affaires Foncières)
                    </a>
                  </li>
                  <li>
                    <a href="/docs/loi-fonciere-cameroun.pdf" download className="text-blue-600 hover:underline flex items-center">
                      <Download className="h-4 w-4 mr-2" /> Télécharger la Loi Régissant le Régime Foncier (PDF)
                    </a>
                  </li>
                  <li>
                    <a href="/docs/guide-acquisition-fonciere-investisseurs.pdf" download className="text-blue-600 hover:underline flex items-center">
                      <Download className="h-4 w-4 mr-2" /> Guide Pratique de l'Acquisition Foncière pour Investisseurs (PDF)
                    </a>
                  </li>
                </ul>
            </div>,
            'Comprendre le Droit de Propriété',
            'from-red-50',
            'to-orange-100',
            'bg-red-600',
          )}

          {/* Section: Procédures d’Obtention de Terrain */}
          {renderSectionBlock(
            'procedure-terrain',
            MapPin,
            'Procédures d’Obtention de Terrain',
            <>Des <span className="font-bold text-blue-600">procédures simplifiées</span> facilitent l'acquisition de terrains pour les projets d'investissement, avec des délais connus.</>,
            [
              { label: 'Étapes Clés', value: '5 étapes', color: 'text-blue-600' },
              { label: 'Délai Moyen', value: '6-9 mois', color: 'text-green-600' },
              { label: 'Frais Enregistrement', value: '2-5%', color: 'text-purple-600' },
            ],
            // Dialog content for this section
            <div className="space-y-6 text-gray-700">
                <p>
                    L'acquisition de terrains pour des projets d'investissement au Cameroun est encadrée par des procédures claires, conçues pour faciliter les démarches des investisseurs.
                </p>
                <h4 className="font-semibold text-lg text-blue-700 mt-4 mb-2">📋 Processus Général d'Acquisition (5 Étapes Essentielles)</h4>
                <ol className="list-decimal pl-8 space-y-2">
                    <li>**Dépôt de la Demande**: L'investisseur initie le processus en déposant une demande formelle d'acquisition ou de concession de terrain auprès des services compétents (souvent le **MINDCAF** ou l'**API** pour les grands projets). La demande doit être accompagnée d'une description détaillée du projet.</li>
                    <li>**Étude d'Impact Environnemental et Social (EIES)**: Obligatoire pour les projets de grande envergure ou à fort impact potentiel. Cette étude évalue les impacts positifs et négatifs du projet sur l'environnement et les communautés locales, et propose des mesures d'atténuation.</li>
                    <li>**Approbation du Plan d'Occupation et de Lotissement**: Le projet doit être conforme aux plans d'urbanisme, aux schémas directeurs d'aménagement du territoire et aux réglementations locales. Les autorités compétentes valident cette conformité.</li>
                    <li>**Paiement des Droits Fonciers et Taxes**: L'acquisition est soumise au paiement de droits d'enregistrement, de taxes foncières annuelles, et éventuellement d'une redevance annuelle si le terrain est une concession domaniale.</li>
                    <li>**Délivrance du Titre Foncier ou Contrat de Concession**: Après l'accomplissement de toutes les formalités requises et le paiement des frais, le titre de propriété définitif est délivré, ou un contrat de concession est signé, officialisant les droits de l'investisseur sur le terrain.</li>
                </ol>

                <h4 className="font-semibold text-lg text-green-700 mt-4 mb-2">⏱️ Délais et Coûts Estimés</h4>
                <ul className="list-disc pl-8 space-y-2">
                    <li>**Délai moyen**: L'obtention d'un titre foncier peut prendre entre **6 et 9 mois en moyenne**, bien que des cas plus complexes ou des terrains litigieux puissent allonger ce délai. Les services comme l'API et les CFE travaillent à réduire ces temps.</li>
                    <li>**Frais d'enregistrement**: Généralement compris entre **2% et 5% de la valeur vénale** du terrain ou du montant de la transaction.</li>
                    <li>**Taxe Foncière Annuelle**: Environ **0.1% de la valeur cadastrale** du terrain, payable annuellement.</li>
                    <li>**Coûts supplémentaires**: Il faut prévoir des frais pour le bornage, les expertises techniques, les honoraires de notaire (si la transaction implique une vente privée), et les éventuels coûts de viabilisation si le terrain n'est pas déjà aménagé (accès eau, électricité, route).</li>
                </ul>
                <p className="italic font-medium text-gray-800">
                  <span className="font-bold">Conseil important :</span> Il est fortement conseillé de se faire accompagner par des experts locaux qualifiés (géomètres, avocats fonciers, consultants spécialisés) pour naviguer ces procédures et éviter les pièges potentiels.
                </p>
                <h4 className="font-semibold text-lg text-gray-800 mt-4 mb-2">📚 Ressources Utiles</h4>
                <ul className="list-disc pl-8 space-y-2">
                  <li>
                    <a href="https://www.api.cm/index.php/fr/investir-au-cameroun/formalites-et-procedures" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" /> Procédures d'Investissement (API)
                    </a>
                  </li>
                  <li>
                    <a href="/docs/guide-procedure-fonciere-cameroun.pdf" download className="text-blue-600 hover:underline flex items-center">
                      <Download className="h-4 w-4 mr-2" /> Guide détaillé des Procédures Foncières (PDF)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mindcaf.gov.cm/index.php/fr/informations/regime-foncier" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" /> Régime Foncier Camerounais (MINDCAF)
                    </a>
                  </li>
                </ul>
            </div>,
            'Voir les Procédures Complètes',
            'from-teal-50',
            'to-cyan-100',
            'bg-teal-600',
          )}

          {/* Section: Fiscalité et Incitations */}
          {renderSectionBlock(
            'fiscalite-incitations',
            DollarSign,
            'Fiscalité et Incitations',
            <>Bénéficiez de <span className="font-bold text-orange-600">régimes fiscaux incitatifs</span> et d'exonérations pour vos investissements prioritaires.</>,
            [
              { label: 'Exonération', value: '5 ans Pioneer', color: 'text-orange-600' },
              { label: 'TVA ZES', value: '0%', color: 'text-green-600' },
              { label: 'IS PME', value: '25%', color: 'text-blue-600' },
            ],
            // Dialog content for this section
            <div className="space-y-6 text-gray-700">
                <p>
                    Le Cameroun a mis en place une **politique fiscale attrayante** avec des incitations significatives pour attirer et retenir les investissements dans les secteurs clés de son économie.
                </p>
                <h4 className="font-semibold text-lg text-orange-700 mt-4 mb-2">🏭 Régimes Fiscaux Spéciaux et Incitations</h4>
                <ul className="list-disc pl-8 space-y-2">
                    <li>**Entreprise Pionnière (Code des Investissements)**: Les entreprises investissant dans des secteurs prioritaires définis (agro-industrie, énergie, mines, tourisme, etc.) peuvent bénéficier de périodes d'exonérations d'impôts et taxes. Cela inclut l'Impôt sur les Sociétés (IS), la Taxe sur la Valeur Ajoutée (TVA), et les droits de douane. Ces exonérations peuvent s'étendre **jusqu'à 5 ans pendant la phase d'installation** et **jusqu'à 5 ans pendant la phase d'exploitation**, soit un total potentiel de 10 ans.</li>
                    <li>**Zones Économiques Spéciales (ZES)**: Les entreprises établies dans les ZES (ex: Kribi) bénéficient de régimes douaniers et fiscaux très favorables. Elles peuvent profiter notamment d'une **TVA à 0%** sur les intrants et les exportations, de réductions substantielles sur l'Impôt sur les Sociétés, et d'autres facilités administratives.</li>
                    <li>**Régime des PME**: Les petites et moyennes entreprises (PME), définies selon certains critères de chiffre d'affaires, peuvent bénéficier d'un **taux réduit d'Impôt sur les Sociétés (IS)**, potentiellement à 25% au lieu du taux standard, favorisant leur croissance.</li>
                    <li>**Avantages pour l'Exportation**: Exonérations de TVA sur les exportations et des facilités douanières pour les intrants destinés à la production de biens exportés.</li>
                    <li>**Crédits d'Impôt pour la R&D**: Des incitations fiscales sont offertes aux entreprises qui investissent dans la recherche et le développement, contribuant à l'innovation et à la compétitivité.</li>
                </ul>

                <h4 className="font-semibold text-lg text-purple-700 mt-4 mb-2">📊 Barème Fiscal Standard (Indicatif)</h4>
                <ul className="list-disc pl-8 space-y-2">
                    <li>**Impôt sur les Sociétés (IS)**: Le taux standard est de 33% (incluant la taxe communale additionnelle).</li>
                    <li>**Taxe sur la Valeur Ajoutée (TVA)**: Le taux standard est de 19.25% (incluant la taxe communale additionnelle). Des taux réduits ou des exonérations s'appliquent à certains biens et services de première nécessité.</li>
                    <li>**Droits de Douane**: Varient de 5% à 30% selon la catégorie du produit (matières premières, produits intermédiaires, produits finis). Des régimes de suspension ou d'exonération existent pour les intrants de production.</li>
                    <li>**Impôt sur le Revenu des Personnes Physiques (IRPP)**: Barème progressif appliqué sur les salaires et autres revenus, avec des tranches et des taux variés.</li>
                    <li>**Patente**: Impôt local annuel basé sur le chiffre d'affaires et la catégorie d'activité, généralement autour de 1% du CA.</li>
                </ul>
                <h4 className="font-semibold text-lg text-gray-800 mt-4 mb-2">📚 Ressources Utiles</h4>
                <ul className="list-disc pl-8 space-y-2">
                  <li>
                    <a href="https://www.impots.cm/index.php/fr/telechargements/code-general-des-impots" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" /> Code Général des Impôts Camerounais (DGI)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.api.cm/index.php/fr/investir-au-cameroun/avantages-fiscaux-et-douaniers" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" /> Avantages Fiscaux du Code des Investissements (API)
                    </a>
                  </li>
                  <li>
                    <a href="/docs/guide-fiscalite-entreprise-cameroun.pdf" download className="text-blue-600 hover:underline flex items-center">
                      <Download className="h-4 w-4 mr-2" /> Guide de la Fiscalité des Entreprises au Cameroun (PDF)
                    </a>
                  </li>
                </ul>
            </div>,
            'Explorer les Incitations Fiscales',
            'from-orange-50',
            'to-red-100',
            'bg-orange-600',
          )}

          {/* Section: Résolution des Conflits */}
          {renderSectionBlock(
            'resolution-conflits',
            BriefcaseBusiness,
            'Résolution des Conflits',
            <>Le Cameroun offre des <span className="font-bold text-red-600">mécanismes efficaces</span> de résolution des litiges, y compris l'arbitrage international.</>,
            [
              { label: 'Voies de Recours', value: 'Médiation, Arbitrage', color: 'text-red-600' },
              { label: 'Arbitrage OHADA', value: 'Oui', color: 'text-purple-600' },
              { label: 'CIRDI', value: 'Membre depuis 2016', color: 'text-blue-600' },
            ],
            // Dialog content for this section
            <div className="space-y-6 text-gray-700">
                <p>
                    Pour garantir un climat d'affaires serein et sécurisé, le Cameroun propose divers mécanismes de **résolution des conflits commerciaux et d'investissement**, allant des voies amiables à l'arbitrage international.
                </p>
                <h4 className="font-semibold text-lg text-red-700 mt-4 mb-2">⚖️ Voies de Recours Internes</h4>
                <ul className="list-disc pl-8 space-y-2">
                    <li>**Médiation et Conciliation**: Des chambres de médiation et des centres de conciliation, comme ceux rattachés à la Chambre de Commerce, d'Industrie, des Mines et de l'Artisanat (CCIMA) ou d'autres centres privés, proposent des solutions amiables, confidentielles et souvent plus rapides aux différends.</li>
                    <li>**Arbitrage OHADA (CCJA)**: Le système OHADA dispose d'une Cour Commune de Justice et d'Arbitrage (CCJA) basée à Abidjan. Les sentences arbitrales rendues par la CCJA sont directement exécutoires dans tous les pays membres de l'OHADA sans aucune procédure d'exequatur, offrant une grande efficacité juridique.</li>
                    <li>**Tribunaux Nationaux**: Les juridictions camerounaises (Tribunaux de Grande Instance, Cours d'Appel, Cour Suprême) sont compétentes pour statuer sur les litiges commerciaux. Des efforts continus sont faits pour moderniser et accélérer les procédures judiciaires et renforcer l'indépendance de la justice.</li>
                </ul>

                <h4 className="font-semibold text-lg text-blue-700 mt-4 mb-2">🌍 Arbitrage International</h4>
                <ul className="list-disc pl-8 space-y-2">
                    <li>**Centre International pour le Règlement des Différends relatifs aux Investissements (CIRDI)**: Le Cameroun est membre de la Convention du CIRDI depuis 2016. Cela permet aux investisseurs étrangers de soumettre leurs différends avec l'État camerounais à l'arbitrage du CIRDI, une institution de la Banque Mondiale reconnue mondialement.</li>
                    <li>**Convention de New York de 1958**: Le Cameroun a ratifié cette convention, ce qui facilite grandement la **reconnaissance et l'exécution des sentences arbitrales étrangères** sur son territoire, renforçant ainsi la confiance des investisseurs internationaux.</li>
                    <li>**Accords Bilatéraux d'Investissement (ABI)**: Le Cameroun a signé plusieurs ABI avec d'autres pays. Ces accords prévoient souvent des clauses spécifiques d'arbitrage international en cas de litige entre l'État et un investisseur étranger, offrant des protections supplémentaires.</li>
                </ul>
                <h4 className="font-semibold text-lg text-gray-800 mt-4 mb-2">📚 Ressources Utiles</h4>
                <ul className="list-disc pl-8 space-y-2">
                  <li>
                    <a href="https://www.ohada.org/index.php/fr/arbitrage" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" /> Arbitrage OHADA (CCJA)
                    </a>
                  </li>
                  <li>
                    <a href="https://icsid.worldbank.org/fr/members/member-states" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" /> Liste des États membres du CIRDI
                    </a>
                  </li>
                  <li>
                    <a href="/docs/guide-resolution-litiges-cameroun.pdf" download className="text-blue-600 hover:underline flex items-center">
                      <Download className="h-4 w-4 mr-2" /> Guide de Résolution des Litiges pour Investisseurs (PDF)
                    </a>
                  </li>
                </ul>
            </div>,
            'En savoir plus sur la Résolution',
            'from-pink-50',
            'to-rose-100',
            'bg-pink-600',
          )}

          {/* Section: Liberté d’Entreprise */}
          {renderSectionBlock(
            'liberte-entreprise',
            BarChart3,
            'Liberté d’Entreprise',
            <>Le pays s'engage pour une <span className="font-bold text-emerald-600">amélioration continue</span> de l'environnement des affaires, avec des procédures de création simplifiées.</>,
            [
              { label: 'Doing Business', value: '+32 places', color: 'text-emerald-600' },
              { label: 'Création Entreprise', value: '3 jours', color: 'text-blue-600' },
              { label: 'Capital Minimum', value: '1 XAF', color: 'text-purple-600' },
            ],
            // Dialog content for this section
            <div className="space-y-6 text-gray-700">
                <p>
                    Le Cameroun s'efforce d'améliorer continuellement son **climat des affaires** pour faciliter la création et l'opération d'entreprises, reconnaissant l'importance de l'entrepreneuriat pour la croissance économique.
                </p>
                <h4 className="font-semibold text-lg text-emerald-700 mt-4 mb-2">📈 Indicateurs Clés et Réformes</h4>
                <ul className="list-disc pl-8 space-y-2">
                    <li>**Classement Doing Business**: Le Cameroun a fait des progrès significatifs dans le classement Doing Business de la Banque Mondiale, notamment avec un gain de **32 places entre 2019 et 2020** sur l'indicateur de création d'entreprise, démontrant les efforts de réforme.</li>
                    <li>**Délai de Création d'Entreprise**: Grâce aux **Centres de Formalités des Entreprises (CFE)** de l'API, le délai moyen pour créer une entreprise a été drastiquement réduit à **3 jours ouvrés** pour les formes juridiques les plus courantes (SARL, EURL), accélérant la mise en activité.</li>
                    <li>**Capital Minimum Symbolique**: Le capital social minimum requis pour la création d'une Société à Responsabilité Limitée (SARL) est désormais **symbolique (1 XAF)**, ce qui facilite grandement l'accès à l'entrepreneuriat pour un large éventail d'investisseurs.</li>
                    <li>**Simplification des Procédures**: Mise en place progressive de procédures en ligne pour certaines démarches administratives, réduction du nombre de documents exigés, et numérisation croissante des services administratifs pour gagner en efficacité.</li>
                </ul>

                <h4 className="font-semibold text-lg text-blue-700 mt-4 mb-2">🚀 Secteurs à Fort Potentiel pour l'Entrepreneuriat</h4>
                <ul className="list-disc pl-8 space-y-2">
                    <li>**Agro-industrie**: Immense potentiel agricole du pays avec un besoin croissant de transformation locale des produits (cacao, café, banane, maïs, etc.) pour créer de la valeur ajoutée et des emplois.</li>
                    <li>**Énergies Renouvelables**: Fort potentiel solaire et hydroélectrique inexploité, avec une demande croissante en énergie propre pour le développement industriel et domestique. Opportunités dans la production, la distribution et les solutions hors réseau.</li>
                    <li>**Numérique et Technologies de l'Information et de la Communication (TIC)**: Marché en pleine expansion avec une population jeune et de plus en plus connectée. Opportunités dans le développement d'applications, l'e-commerce, les services financiers mobiles, l'éducation en ligne, etc.</li>
                    <li>**Tourisme**: Diversité de paysages (plages, montagnes, parcs nationaux, forêts) et de cultures offrant des opportunités de développement dans l'hôtellerie, les services de voyage, l'écotourisme et le tourisme culturel.</li>
                    <li>**Infrastructures**: Besoins importants en construction et modernisation des infrastructures de transport (routes, ports, aéroports), d'énergie, d'eau et d'assainissement.</li>
                </ul>
                <h4 className="font-semibold text-lg text-gray-800 mt-4 mb-2">📚 Ressources Utiles</h4>
                <ul className="list-disc pl-8 space-y-2">
                  <li>
                    <a href="https://www.api.cm/index.php/fr/investir-au-cameroun/creer-son-entreprise" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" /> Créer son entreprise au Cameroun (API)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.doingbusiness.org/fr/data/exploreeconomies/cameroon" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" /> Classement Doing Business Cameroun (Banque Mondiale)
                    </a>
                  </li>
                  <li>
                    <a href="/docs/guide-creation-entreprise-cameroun.pdf" download className="text-blue-600 hover:underline flex items-center">
                      <Download className="h-4 w-4 mr-2" /> Guide Complet de la Création d'Entreprise (PDF)
                    </a>
                  </li>
                </ul>
            </div>,
            'Découvrir la Liberté d\'Entreprise',
            'from-lime-50',
            'to-green-100',
            'bg-lime-600',
          )}

          {/* Section: RSE et Développement Durable */}
          {renderSectionBlock(
            'responsabilite-sociale',
            Handshake,
            'RSE et Développement Durable',
            <>Intégrez la <span className="font-bold text-yellow-600">Responsabilité Sociale des Entreprises</span> et bénéficiez d'avantages pour un impact positif.</>,
            [
              { label: 'Obligation RSE', value: '1% CA', color: 'text-yellow-600' },
              { label: 'Normes Env.', value: 'Respectées', color: 'text-green-600' },
              { label: 'Crédits Impôt', value: 'Jusqu\'à 30%', color: 'text-blue-600' },
            ],
            // Dialog content for this section
            <div className="space-y-6 text-gray-700">
                <p>
                    Le Cameroun encourage activement les entreprises à intégrer la **Responsabilité Sociale des Entreprises (RSE)** et les principes du développement durable dans leurs stratégies et opérations. Cela participe à la construction d'une économie plus inclusive et respectueuse de l'environnement.
                </p>
                <h4 className="font-semibold text-lg text-yellow-700 mt-4 mb-2">🌱 Obligations et Bonnes Pratiques RSE</h4>
                <ul className="list-disc pl-8 space-y-2">
                    <li>**Contribution Sociale**: Bien qu'il n'y ait pas de loi stricte imposant un pourcentage fixe, de nombreuses entreprises s'engagent volontairement à allouer une partie de leurs bénéfices (souvent autour de **1% du chiffre d'affaires**) à des projets sociaux (éducation, santé, accès à l'eau, développement communautaire).</li>
                    <li>**Respect des Normes Environnementales**: La législation camerounaise est claire sur le respect des normes environnementales. Les projets importants sont soumis à des **études d'impact environnemental (EIE)**. La gestion des déchets, la protection de la biodiversité et la réduction de la pollution sont des exigences légales. Des sanctions sont prévues en cas de non-conformité.</li>
                    <li>**Développement du Capital Humain Local**: Une priorité est donnée à la **formation et à l'emploi du personnel local**, au transfert de compétences, et au respect scrupuleux des droits des travailleurs conformément au Code du Travail et aux conventions internationales.</li>
                    <li>**Approvisionnement Responsable**: Encouragement à s'approvisionner auprès de fournisseurs locaux et à soutenir des chaînes de valeur durables, contribuant au développement économique local.</li>
                </ul>

                <h4 className="font-semibold text-lg text-green-700 mt-4 mb-2">🏆 Avantages et Incitations pour la RSE</h4>
                <ul className="list-disc pl-8 space-y-2">
                    <li>**Crédits d'Impôt et Déductions Fiscales**: Certaines dépenses liées à la RSE (investissements verts, dons à des œuvres sociales ou d'intérêt public reconnues, programmes de formation professionnelle avancée) peuvent donner droit à des déductions fiscales ou des crédits d'impôt, parfois **jusqu'à 30%** des montants investis.</li>
                    <li>**Accès Privilégié aux Marchés Publics**: Les entreprises démontrant un engagement fort en matière de RSE peuvent être avantagées dans l'attribution de certains marchés publics ou de partenariats avec l'État.</li>
                    <li>**Label "Entreprise Responsable"**: Des initiatives sont en cours pour mettre en place des certifications ou labels reconnaissant les entreprises exemplaires en matière de RSE, ce qui améliore leur image de marque, leur réputation et leur attractivité auprès des consommateurs et partenaires.</li>
                    <li>**Accès au Financement Vert**: Les projets à fort impact social ou environnemental peuvent bénéficier de financements préférentiels auprès de banques de développement, de fonds d'investissement dédiés au développement durable, et d'institutions financières internationales.</li>
                </ul>
                <h4 className="font-semibold text-lg text-gray-800 mt-4 mb-2">📚 Ressources Utiles</h4>
                <ul className="list-disc pl-8 space-y-2">
                  <li>
                    <a href="https://www.minepded.gov.cm/fr/pages/cadre-legal-et-reglementaire-en-matiere-d-environnement" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" /> Cadre Légal Environnemental (MINEPDED)
                    </a>
                  </li>
                  <li>
                    <a href="/docs/guide-rse-cameroun.pdf" download className="text-blue-600 hover:underline flex items-center">
                      <Download className="h-4 w-4 mr-2" /> Guide des Bonnes Pratiques RSE au Cameroun (PDF)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.gouvernement.cm/site_fr/show_article.php?lang=fr&id=288" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" /> Politique Nationale de Développement Durable (Portail du Gouvernement)
                    </a>
                  </li>
                </ul>
            </div>,
            'En savoir plus sur la RSE',
            'from-yellow-50',
            'to-amber-100',
            'bg-yellow-600',
          )}

          {/* Section: Circulation des Capitaux */}
          {renderSectionBlock(
            'liberte-capitaux',
            Repeat,
            'Circulation des Capitaux',
            <>La <span className="font-bold text-purple-600">libre circulation des capitaux</span> est garantie, facilitant les transferts et rapatriements de fonds.</>,
            [
              { label: 'Transferts', value: 'Dividendes, Royalties', color: 'text-purple-600' },
              { label: 'Plafond Mensuel', value: '20M XAF', color: 'text-red-600' },
              { label: 'Justificatifs', value: 'Obligatoires', color: 'text-blue-600' },
            ],
            // Dialog content for this section
            <div className="space-y-6 text-gray-700">
                <p>
                    Le Cameroun, en tant que membre de la Communauté Économique et Monétaire de l'Afrique Centrale (**CEMAC**), bénéficie d'une réglementation qui garantit la **libre circulation des capitaux**, un atout majeur pour les investisseurs internationaux.
                </p>
                <h4 className="font-semibold text-lg text-purple-700 mt-4 mb-2">💱 Transferts Autorisés et Facilités</h4>
                <ul className="list-disc pl-8 space-y-2">
                    <li>**Rapatriement des Bénéfices et Dividendes**: Les entreprises étrangères peuvent librement transférer leurs bénéfices réalisés au Cameroun, ainsi que les dividendes perçus, après le paiement des impôts et taxes dus localement.</li>
                    <li>**Redevances et Paiements de Licences**: Les redevances pour l'utilisation de brevets, marques, ou technologies, ainsi que les paiements de licences et de services techniques, peuvent être transférés sans restriction majeure.</li>
                    <li>**Remboursement de Prêts et d'Intérêts**: Les capitaux empruntés pour financer les investissements et les intérêts associés peuvent être rapatriés conformément aux termes des accords de prêt dûment enregistrés.</li>
                    <li>**Produits de la Liquidation ou de la Cession**: En cas de cessation d'activité, de vente d'actifs ou de cession de parts, le produit net de la liquidation ou de la cession peut être librement transféré hors du Cameroun.</li>
                    <li>**Salaires et Traitements**: Le personnel expatrié et étranger employé au Cameroun a le droit de transférer une partie ou la totalité de ses salaires et traitements dans son pays d'origine ou tout autre pays.</li>
                </ul>

                <h4 className="font-semibold text-lg text-red-700 mt-4 mb-2">⚠️ Réglementation de Change et Formalités</h4>
                <ul className="list-disc pl-8 space-y-2">
                    <li>**Réglementation de Change de la BEAC**: La **Banque des États de l'Afrique Centrale (BEAC)** est l'autorité monétaire de la CEMAC. Tous les transferts importants doivent être effectués via les banques commerciales agréées et se conformer strictement à la réglementation de change de la BEAC.</li>
                    <li>**Justificatifs Obligatoires**: Tous les transferts significatifs doivent être dûment justifiés par des documents probants (contrats commerciaux, factures, procès-verbaux d'assemblée générale pour les dividendes, états financiers audités, documents douaniers, etc.) attestant l'origine des fonds et la nature de la transaction.</li>
                    <li>**Plafond Mensuel pour Petits Transferts**: Pour certains types de transferts courants ou de petites sommes (par exemple, des envois de fonds par des particuliers), des plafonds peuvent exister (par exemple, un plafond mensuel de **20 millions de XAF** pour les transferts ne nécessitant pas une documentation préalable très détaillée via certains canaux). Au-delà, des justificatifs stricts sont exigés.</li>
                    <li>**Déclaration des Investissements Directs Étrangers (IDE)**: Les IDE au Cameroun doivent être déclarés auprès de la BEAC et de l'API pour faciliter les futurs rapatriements de capitaux et bénéficier des garanties du Code des Investissements.</li>
                </ul>
                <h4 className="font-semibold text-lg text-gray-800 mt-4 mb-2">📚 Ressources Utiles</h4>
                <ul className="list-disc pl-8 space-y-2">
                  <li>
                    <a href="https://www.beac.int/reglementation/reglementation-de-change/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" /> Réglementation de Change de la BEAC
                    </a>
                  </li>
                  <li>
                    <a href="https://www.api.cm/index.php/fr/investir-au-cameroun/le-code-des-investissements" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" /> Code des Investissements du Cameroun (API) - Voir Titre III sur les Garanties
                    </a>
                  </li>
                  <li>
                    <a href="/docs/guide-transferts-capitaux-cameroun.pdf" download className="text-blue-600 hover:underline flex items-center">
                      <Download className="h-4 w-4 mr-2" /> Guide des Procédures de Transfert de Capitaux (PDF)
                    </a>
                  </li>
                </ul>
            </div>,
            'Détails sur la Circulation des Capitaux',
            'from-indigo-50',
            'to-purple-100',
            'bg-indigo-600',
          )}
        </motion.div>
      </main>

      {/* Dialog for displaying section details */}
      {activeDialog && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50 p-4 animate-fade-in">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative p-8"
          >
            <button
              onClick={closeDialog}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Fermer"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">{activeDialog.title} - Détails</h3>
            {activeDialog.content}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default InvestorRights;
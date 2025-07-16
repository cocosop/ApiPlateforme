import { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon, DocumentTextIcon, BuildingLibraryIcon, ClockIcon, CheckBadgeIcon, CheckCircleIcon, LightBulbIcon, MapPinIcon, CurrencyDollarIcon, UserIcon, UsersIcon, ScaleIcon, BanknotesIcon } from '@heroicons/react/24/outline';
import oeuvre from "../../../assets/img/entreprise.jpg"
import CACAO from "../../../assets/img/cacao4.png"
import ENERGIE from "../../../assets/img/energie.jpg"
import ProjectCard from '../../../components/projetCard/projetCard';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

type Section = 'Contexte Juridique' | 'Avantages Fiscaux' | 'Institutions' | 'Processus Détaillé' | 'Coûts et Délais';

  const CreationEntreprise = () => {

  const [projects] = useState([
    {
      id: 1,
      secteur: "Agro-industrie",
      titre: "Exploitation de plantation de cacao",
      ville: "Douala",
      quartier: "Bonaberi",
      description: "Mise en place d'une plantation moderne de cacao avec une production annuelle de 50 tonnes.",
      image: CACAO,
      latitude: 4.0511,
      longitude: 9.7679,
    },
    {
      id: 2,
      secteur: "Énergie",
      titre: "Parc solaire de 20 MW",
      ville: "Garoua",
      quartier: "Ngaoundere route",
      description: "Construction d'un parc solaire pour fournir de l'énergie propre à la région du Nord.",
      image: ENERGIE,
      latitude: 4.0511,
      longitude: 9.7679,
    },
    {
      id: 3,
      secteur: "Numérique",
      titre: "Plateforme de paiement mobile",
      ville: "Yaoundé",
      quartier: "Bastos",
      description: "Développement d'une application de paiement mobile visant à faciliter les transactions financières locales.",
      image: "https://img.freepik.com/free-photo/high-angle-friends-reading-menu-restaurant_23-2150384825.jpg?t=st=1738099850~exp=1738103450~hmac=263dee2608a764be0cc905367387bf817f98c3b6a3df41a0103a348fa8777175&w=996",
      latitude: 4.0511,
      longitude: 9.7679,
    }
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

  const documentsEtablissement = [
    "Photocopies simples de la Carte nationale d'identité du promoteur",
    "Photocopie de la carte de séjour ou passeport pour les étrangers",
    "Copie de l'acte de mariage le cas échéant",
    "Extrait de casier judiciaire (natifs) ou déclaration sur l'honneur (75 jours)",
    "Plan de localisation pour l'entreprise",
    "Frais de RCCM (registre de commerce et de crédit mobilier)"
  ];

  const documentsSarlSousSeingPrive = [
    "05 exemplaires de statuts timbrés",
    "Photocopies des CNI des associés ou acte de naissance (mineurs)",
    "Extrait de casier judiciaire ou déclaration sur l'honneur (75 jours)",
    "Plan de localisation avec numéro de téléphone",
    "Frais de RCCM",
    "Frais d'annonce légale dans le Cameroun TRIBUNE"
  ];

  const documentsEnregistrementImpots = [
    "Le Registre du Commerce",
    "Les statuts",
    "L'attestation d'immatriculation",
    "Le plan de localisation",
    "Le contrat de bail"
  ];

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
                Votre entreprise au Cameroun en 1 semaine
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6 text-lg md:text-xl text-gray-200 font-normal max-w-2xl mx-auto leading-relaxed"
            >
              Bénéficiez d'un cadre juridique OHADA modernisé et d'un processus accéléré grâce aux Centres de Formalités de Création d'Entreprises (CFCE) présents dans toutes les régions
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
                Découvrir le guide complet
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
                { id: 'types', title: 'Types d\'entreprises', icon: UsersIcon },
                { id: 'structures', title: 'Structures', icon: BuildingLibraryIcon },
                { id: 'processus', title: 'Processus', icon: ClockIcon },
                { id: 'documents', title: 'Documents', icon: DocumentTextIcon },
                { id: 'couts', title: 'Coûts', icon: CurrencyDollarIcon },
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
            Le CFCE : Votre Guichet Unique
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
              <div className="text-gray-600 text-sm">Toutes les démarches administratives en un seul lieu pour simplifier vos formalités</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <ClockIcon className="w-10 h-10 text-[#0F0B60] mb-4" />
              <div className="text-xl font-bold text-[#0F0B60] mb-2">1 semaine</div>
              <div className="text-gray-600 text-sm">Délai moyen pour récupérer vos documents de création d'entreprise</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <CheckCircleIcon className="w-10 h-10 text-green-600 mb-4" />
              <div className="text-xl font-bold text-green-700 mb-2">Accompagnement</div>
              <div className="text-gray-600 text-sm">Conseillers dédiés pour vous guider à chaque étape du processus</div>
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
              <div className="text-gray-600 text-sm mb-2">CFCE dans toutes les régions du Cameroun</div>
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
              <div className="text-lg font-semibold text-[#0F0B60] mb-2">Processus simplifié</div>
              <ol className="text-gray-600 text-sm space-y-2 text-left mx-auto max-w-xs">
                <li><span className="font-bold text-[#0F0B60]">1.</span> Préparez vos documents</li>
                <li><span className="font-bold text-[#0F0B60]">2.</span> Déposez au CFCE</li>
                <li><span className="font-bold text-[#0F0B60]">3.</span> Traitement multiservice</li>
                <li><span className="font-bold text-[#0F0B60]">4.</span> Récupérez vos documents (1 semaine)</li>
                <li><span className="font-bold text-[#0F0B60]">5.</span> Enregistrement aux impôts</li>
              </ol>
            </div>
          </motion.div>
        </section>

        {/* Types d'entreprises */}
        <section id="types" className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-[#0E600B] mb-8 flex items-center justify-center"
          >
            <UsersIcon className="w-7 h-7 mr-3" />
            Types d'Entreprises au Cameroun
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#F5BA3A]"
            >
              <div className="flex items-center mb-6">
                <UserIcon className="w-8 h-8 text-[#F5BA3A] mr-3" />
                <h3 className="text-2xl font-bold text-[#0F0B60]">Personne Physique (ETS)</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#0F0B60] mb-2">Caractéristiques</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Entrepreneur individuel sans associé</li>
                    <li>• Aucun capital social requis</li>
                    <li>• Pas de statuts nécessaires</li>
                    <li>• Patrimoine personnel et professionnel confondus</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">Avantages</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Création rapide et simple</li>
                    <li>• Coûts réduits</li>
                    <li>• Gestion simplifiée</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#0F0B60]"
            >
              <div className="flex items-center mb-6">
                <UsersIcon className="w-8 h-8 text-[#0F0B60] mr-3" />
                <h3 className="text-2xl font-bold text-[#0F0B60]">Personne Morale (Société)</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#0F0B60] mb-2">Caractéristiques</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Minimum 2 associés (majeurs, mineurs ou entreprises)</li>
                    <li>• Capital social défini</li>
                    <li>• Statuts obligatoires</li>
                    <li>• Patrimoine distinct des associés</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">Avantages</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Protection du patrimoine personnel</li>
                    <li>• Crédibilité renforcée</li>
                    <li>• Possibilité d'évolution</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
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
            Structures Juridiques Disponibles
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                type: 'EURL',
                desc: 'Un associé unique, capital flexible',
                capital: 'Minimum 100 000 FCFA'
              },
              {
                type: 'SARL',
                desc: '2+ associés, responsabilité limitée',
                capital: 'Minimum 100 000 FCFA'
              },
              {
                type: 'SA',
                desc: 'Société par actions, actionnariat',
                capital: 'Minimum 10 000 000 FCFA'
              },
              {
                type: 'SAS',
                desc: 'Organisation souple et moderne',
                capital: 'Capital libre'
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
                <p className="text-gray-600 text-sm mb-3">{societe.desc}</p>
                <div className="bg-gray-50 p-2 rounded-lg">
                  <p className="text-xs text-gray-500">{societe.capital}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Processus détaillé */}
        <section id="processus" className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-[#0E600B] mb-8 flex items-center justify-center"
          >
            <ClockIcon className="w-7 h-7 mr-3" />
            Processus de Création Détaillé
          </motion.h2>

          {/* Processus pour Établissement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-[#F5BA3A] mb-6 flex items-center">
              <UserIcon className="w-6 h-6 mr-3" />
              Création d'un Établissement (Personne Physique)
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-yellow-50 p-6 rounded-xl">
                <h4 className="font-semibold text-[#0F0B60] mb-3">1. Préparation</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  {documentsEtablissement.map((doc, i) => (
                    <li key={i} className="flex items-start">
                      <CheckBadgeIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-semibold text-[#0F0B60] mb-3">2. Dépôt au CFCE</h4>
                <p className="text-sm text-gray-700 mb-3">Déposez tous les documents au Centre de Formalités de Création d'Entreprises de votre région.</p>
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-xs text-gray-600">⏱️ Traitement : 1 semaine</p>
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-semibold text-[#0F0B60] mb-3">3. Récupération</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• RCCM (Registre de Commerce)</li>
                  <li>• Attestation d'immatriculation (en ligne sur impots.cm)</li>
                </ul>
                <div className="bg-white p-3 rounded-lg mt-3">
                  <p className="text-xs text-gray-600">💡 L'attestation d'immatriculation remplace l'ancienne carte de contribuable depuis 2020</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Processus pour SARL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-[#0F0B60] mb-6 flex items-center">
              <UsersIcon className="w-6 h-6 mr-3" />
              Création d'une SARL
            </h3>
            
            {/* SARL Sous Seing Privé */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-[#F5BA3A] mb-4">Capital entre 100 000 et 999 999 FCFA (Sous Seing Privé)</h4>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-[#0F0B60] mb-2">1. Statuts</h5>
                  <p className="text-xs text-gray-600">Rédaction et validation par le chef de centre, 5 exemplaires timbrés</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-[#0F0B60] mb-2">2. Dossier</h5>
                  <p className="text-xs text-gray-600">Dépôt complet au CFCE avec tous les documents requis</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-[#0F0B60] mb-2">3. Traitement</h5>
                  <p className="text-xs text-gray-600">Délai moyen : 1 semaine</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-[#0F0B60] mb-2">4. Récupération</h5>
                  <p className="text-xs text-gray-600">RCCM et statuts validés</p>
                </div>
              </div>
            </div>

            {/* SARL Capital ≥ 1M */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-[#0F0B60] mb-4">Capital ≥ 1 000 000 FCFA</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-[#F5BA3A] mb-2">Passage obligatoire chez le Notaire</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Établissement des statuts</li>
                    <li>• Préparation du RCCM</li>
                    <li>• Tous documents nécessaires</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-[#0E600B] mb-2">Avantage</h5>
                  <p className="text-sm text-gray-700">Plus besoin de passer par le CFCE après le notaire. Attestation d'immatriculation directement sur impots.cm</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enregistrement aux impôts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-[#DC2124] mb-6 flex items-center">
              <BanknotesIcon className="w-6 h-6 mr-3" />
              Enregistrement au Centre des Impôts
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-[#0F0B60] mb-4">Documents requis</h4>
                <ul className="space-y-2">
                  {documentsEnregistrementImpots.map((doc, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <CheckBadgeIcon className="w-4 h-4 text-green-600 mr-2" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#0F0B60] mb-4">Coûts estimés</h4>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-2xl font-bold text-[#DC2124] mb-2">≈ 200 000 FCFA</p>
                  <p className="text-sm text-gray-600 mb-2">Dont enregistrement du bail : 25% du loyer annuel</p>
                  <p className="text-xs text-gray-500">Exemple : 150 000 FCFA pour un loyer de 50 000 FCFA/mois</p>
                </div>
                <div className="mt-4 bg-yellow-100 p-3 rounded-lg">
                  <p className="text-xs text-gray-700">⚠️ Après enregistrement, déclarations et paiements mensuels obligatoires</p>
                </div>
              </div>
            </div>
          </motion.div>
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
            Documents Requis par Type
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-8">
              <div className="flex justify-center mb-6">
                <button
                  onClick={() => setActiveTab('physique')}
                  className={`px-6 py-3 rounded-full font-medium mr-2 transition-all duration-300 ${activeTab === 'physique' ? 'bg-[#0F0B60] text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  Établissement (Physique)
                </button>
                <button
                  onClick={() => setActiveTab('morale')}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'morale' ? 'bg-[#0F0B60] text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  SARL Sous Seing Privé
                </button>
              </div>
              <ul className="space-y-3">
                {(activeTab === 'physique' ? documentsEtablissement : documentsSarlSousSeingPrive).map((doc, i) => (
                  <li key={i} className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <CheckBadgeIcon className="w-5 h-5 text-[#0E600B] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
              <ClockIcon className="w-12 h-12 text-[#0F0B60] mb-4" />
              <div className="text-xl font-semibold text-[#0F0B60] mb-4">Délais de traitement</div>
              <div className="space-y-4 w-full max-w-sm">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-[#0E600B]">Établissement</p>
                  <p className="text-2xl font-bold text-[#F5BA3A]">1 semaine</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-[#0E600B]">SARL ( 1M)</p>
                  <p className="text-2xl font-bold text-[#F5BA3A]">1 semaine</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-[#0E600B]">SARL (≥ 1M)</p>
                  <p className="text-2xl font-bold text-[#F5BA3A]">Variable</p>
                  <p className="text-xs text-gray-500">Dépend du notaire</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Coûts */}
        <section id="couts" className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-[#0E600B] mb-8 flex items-center justify-center"
          >
            <CurrencyDollarIcon className="w-7 h-7 mr-3" />
            Coûts et Frais de Création
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {etapesCFCE.map((etape, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-[#F5BA3A]"
              >
                <h3 className="font-bold text-[#0F0B60] mb-2">{etape.title}</h3>
                <p className="text-2xl font-bold text-[#0E600B] mb-2">{etape.cost}</p>
                <p className="text-sm text-gray-600">{etape.details}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Récapitulatif des coûts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 bg-gradient-to-r from-green-50 to-emerald-100 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-[#0E600B] mb-6 text-center">Estimation Totale des Coûts</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl text-center">
                <h4 className="font-semibold text-[#F5BA3A] mb-2">Établissement</h4>
                <p className="text-3xl font-bold text-[#0E600B]">≈ 75 000</p>
                <p className="text-sm text-gray-600">FCFA (hors enregistrement impôts)</p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <p className="font-semibold text-[#F5BA3A] mb-2">SARL ( 1M)</p>
                <p className="text-3xl font-bold text-[#0E600B]">≈ 85 000</p>
                <p className="text-sm text-gray-600">FCFA (hors enregistrement impôts)</p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <h4 className="font-semibold text-[#DC2124] mb-2">Enregistrement Impôts</h4>
                <p className="text-3xl font-bold text-[#DC2124]">≈ 200 000</p>
                <p className="text-sm text-gray-600">FCFA (selon loyer)</p>
              </div>
            </div>
          </motion.div>
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
                    <span className="text-xs text-gray-600 text-center">Droit Commercial Général - Harmonisation du droit des affaires en Afrique</span>
                  </a>
                  <a
                    href="https://douala.eregulations.org/media/-2016-decembre-2016-fixant-22417_1.pdf"
                    className="flex-1 bg-blue-50 rounded-xl p-4 flex flex-col items-center hover:bg-blue-100 transition"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <span className="font-bold text-[#0F0B60] mb-2">Loi 2016/014</span>
                    <span className="text-xs text-gray-600 text-center">14/12/2016 - Modernisation du cadre juridique</span>
                  </a>
                  <a
                    href="https://www.droit-afrique.com/uploads/Cameroun-Decret-2017-877-modalites-authentification-sarl.pdf"
                    className="flex-1 bg-blue-50 rounded-xl p-4 flex flex-col items-center hover:bg-blue-100 transition"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <span className="font-bold text-[#0F0B60] mb-2">Décret 2017/0877</span>
                    <span className="text-xs text-gray-600 text-center">28/02/2017 - Modalités d'authentification</span>
                  </a>
                </div>
              )
            },
            {
              title: 'Avantages Fiscaux',
              content: (
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-[#0E600B]/10 rounded-lg text-center">
                    <p className="font-semibold text-[#0E600B]">Exonération de patente</p>
                    <p className="text-xs">1ère année d'activité exonérée</p>
                  </div>
                  <div className="p-4 bg-[#0F0B60]/10 rounded-lg text-center">
                    <p className="font-semibold text-[#0F0B60]">Carte de contribuable</p>
                    <p className="text-xs">Gratuite (remplacée par attestation d'immatriculation)</p>
                  </div>
                  <div className="p-4 bg-[#F5BA3A]/10 rounded-lg text-center">
                    <p className="font-semibold text-[#F5BA3A]">Processus simplifié</p>
                    <p className="text-xs">Guichet unique au CFCE</p>
                  </div>
                </div>
              )
            },
            {
              title: 'Institutions',
              content: (
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: 'API', desc: 'Agence de Promotion des Investissements', link: 'https://investincameroon.net/' },
                    { name: 'APME', desc: 'Agence de Promotion des PME', link: 'https://www.apme.cm/en/home-en-2/?lang=en%20/' },
                    { name: 'CFCE', desc: 'Centre de Formalités de Création d\'Entreprises', link: 'https://www.cfce.cm/' },
                    { name: 'MINMIDT', desc: 'Ministère des Mines, de l\'Industrie et du Développement Technologique', link: 'https://www.minmidt.cm/' },
                    { name: 'MINPMESA', desc: 'Ministère des Petites et Moyennes Entreprises', link: 'https://www.minpmeesa.cm/site/' },
                    { name: 'Impôts.cm', desc: 'Plateforme en ligne pour attestation d\'immatriculation', link: 'https://www.impots.cm' }
                  ].map((inst, i) => (
                    <a
                      key={i}
                      href={inst.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
                    >
                      <CheckBadgeIcon className="w-5 h-5 text-[#0F0B60] mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-[#0F0B60] block">{inst.name}</span>
                        <span className="text-xs text-gray-500">{inst.desc}</span>
                      </div>
                    </a>
                  ))}
                </div>
              )
            },
            {
              title: 'Processus Détaillé',
              content: (
                <div className="space-y-6">
                  <div className="bg-yellow-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-[#F5BA3A] mb-3">Points Clés à Retenir</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• L'attestation d'immatriculation a remplacé la carte de contribuable depuis 2020</li>
                      <li>• Elle s'obtient en ligne sur www.impots.cm</li>
                      <li>• Pour les SARL ≥ 1M FCFA, passage obligatoire chez le notaire</li>
                      <li>• Délai moyen de traitement au CFCE : 1 semaine</li>
                      <li>• Enregistrement aux impôts obligatoire après création</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-[#DC2124] mb-3">Obligations Post-Création</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Enregistrement au centre des impôts de votre zone</li>
                      <li>• Déclarations mensuelles obligatoires</li>
                      <li>• Paiement des impôts selon le régime fiscal</li>
                      <li>• Tenue d'une comptabilité régulière</li>
                    </ul>
                  </div>
                </div>
              )
            },
            {
              title: 'Coûts et Délais',
              content: (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-[#0E600B] mb-3">Délais Standards</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Établissement : 1 semaine au CFCE</li>
                      <li>• SARL sous seing privé : 1 semaine au CFCE</li>
                      <li>• SARL ≥ 1M : Variable (dépend du notaire)</li>
                      <li>• Enregistrement impôts : 1-2 jours</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-[#0F0B60] mb-3">Budget Total Estimé</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Établissement : 275 000 FCFA (tout compris)</li>
                      <li>• SARL  1M : 285 000 FCFA (tout compris)</li>
                      <li>• SARL ≥ 1M : Variable + frais notaire</li>
                      <li>• Enregistrement impôts : ≈ 200 000 FCFA</li>
                    </ul>
                  </div>
                </div>
              )
            }
          ].map((section, i) => (
            <div key={i} className="border rounded-xl bg-white shadow-sm">
              <button
                onClick={() => toggleSection(section.title as Section)}
                className="flex justify-between items-center w-full p-6 bg-gray-50 hover:bg-gray-100 rounded-t-xl transition-colors"
              >
                <span className="font-semibold text-[#0F0B60] text-lg">{section.title}</span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${openSection === section.title ? 'transform rotate-180' : ''}`} />
              </button>
              {openSection === section.title && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 bg-white space-y-4 rounded-b-xl"
                >
                  {section.content}
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

 
      </main>
    </div>
  );
}

export default CreationEntreprise
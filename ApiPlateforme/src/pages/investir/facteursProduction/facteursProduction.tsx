import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Users, 
  MapPin, 
  Calculator, 
  BarChart3, 
  Building2,
  ArrowDown,
  Eye,
  ChevronRight,
  Home,
  TrendingUp,
} from 'lucide-react';
// Remove Navigation import from lucide-react

import Facteur from '../../../assets/img/production.jpg';
import FactorsGrid from '../../../components/factorGrid';
import FoncierModal from '../../../components/foncierModal';
import MainOeuvreModal from '../../../components/mainOeuvreModal';
import CostsBySectorModal from '../../../components/costsBySectorModal';
import { Section } from '../../../types';
import FiscaliteModal from '../../../components/fiscaliteModal';



const FacteursProduction: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMainOeuvreModal, setShowMainOeuvreModal] = useState(false);
  const [showFiscaliteModal, setShowFiscaliteModal] = useState(false);
  const [showFoncierModal, setShowFoncierModal] = useState(false);
  const [showCostsSectorModal, setShowCostsSectorModal] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
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
    const handleScroll = () => {
      if (!navRef.current) return;
      const { top } = navRef.current.getBoundingClientRect();
      setIsSticky(top <= 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    window.history.replaceState(null, '', `#${sectionId}`);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  const sections: Section[] = [
    {
      id: 'facteurs',
      title: 'Facteurs de Production',
      icon: ShieldCheck,
    },
    {
      id: 'main_oeuvre',
      title: 'Main d\'œuvre',
      icon: Users,
    },
    {
      id: 'foncier',
      title: 'Foncier',
      icon: MapPin,
    },
    {
      id: 'fiscalite',
      title: 'Fiscalité',
      icon: Calculator,
    },
    {
      id: 'couts_secteur',
      title: 'Coûts par Secteurs',
      icon: BarChart3,
    },
  
  ];

  return (
   <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    {/* This outermost div is good, it covers the full screen minimum */}

    {/* Ensure this div also doesn't restrict scrolling or overflow */}
    <div className="bg-gray-50"> 
        {/* Section Hero */}
        <div className="relative h-[65vh] min-h-[500px] max-h-[800px] bg-gray-900">
            {/* ... (Hero section content as before) ... */}
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src={Facteur}
                    alt="Illustration des Facteurs de Production"
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
                            Optimisation des ressources
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent"
                            >
                                Facteurs de production
                            </motion.span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="mt-6 text-lg md:text-xl text-gray-300 font-normal max-w-2xl mx-auto leading-relaxed"
                        >
                            Maximisez l'efficacité de vos investissements et optimisez vos ressources productives.
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
                                Découvrir les solutions
                                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>

        {/* Barre de navigation sticky dynamique */}
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
                {sections.map((section, index) => (
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
                      {section.icon && <section.icon className="h-4 w-4" />}
                      {section.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

    </div>{/* Closing div for bg-gray-50 */}
    
    <main className="container mx-auto px-4 py-12 max-w-7xl">
        {/* ... (Main content as before) ... */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >

          <FactorsGrid />
          
          {/* Section Main d'Œuvre avec CTA et Modal */}
          <div id="main_oeuvre">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-12 text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Main d'Œuvre Camerounaise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Découvrez une main d'œuvre qualifiée avec <span className="font-bold text-blue-600">71,2% d'alphabétisation</span>, 
                des salaires compétitifs à partir de <span className="font-bold text-green-600">36 270 FCFA</span> 
                et un système de protection sociale structuré.
              </p>
              
              {/* Aperçu rapide */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-2">71.2%</div>
                  <div className="text-gray-600">Taux d'alphabétisation</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-green-600 mb-2">36k FCFA</div>
                  <div className="text-gray-600">Salaire minimum</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-purple-600 mb-2">17.15%</div>
                  <div className="text-gray-600">Cotisations sociales</div>
                </div>
              </div>

              <button
                onClick={() => setShowMainOeuvreModal(true)}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300"
              >
                <Eye className="h-5 w-5 mr-2" />
                Découvrir les Détails Complets
                <ChevronRight className="h-5 w-5 ml-2" />
              </button>
            </motion.div>
          </div>
          
          {/* Section Foncier avec CTA et Modal */}
          <div id="foncier">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-12 text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-6">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Foncier au Cameroun</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Explorez les opportunités foncières avec des <span className="font-bold text-green-600">terrains aménagés à 300 FCFA/m²/an</span>, 
                des <span className="font-bold text-blue-600">procédures simplifiées</span> 
                et un cadre juridique modernisé depuis 2005.
              </p>
              
              {/* Aperçu rapide */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <Home className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600 mb-2">300 FCFA</div>
                  <div className="text-gray-600">Terrains aménagés/m²/an</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <Building2 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600 mb-2">1000-3000</div>
                  <div className="text-gray-600">Terrains bâtis FCFA/m²/an</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <ShieldCheck className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600 mb-2">2005</div>
                  <div className="text-gray-600">Réformes modernisées</div>
                </div>
              </div>

              <button
                onClick={() => setShowFoncierModal(true)}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full shadow-lg hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-300"
              >
                <Eye className="h-5 w-5 mr-2" />
                Explorer les Opportunités Foncières
                <ChevronRight className="h-5 w-5 ml-2" />
              </button>
            </motion.div>
          </div>
          
          {/* Section Fiscalité avec CTA et Modal */}
          <div id="fiscalite">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-3xl p-12 text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600 rounded-full mb-6">
                <Calculator className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Fiscalité Camerounaise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Maîtrisez le système fiscal avec un <span className="font-bold text-red-600">impôt sur les sociétés à 33%</span>, 
                une <span className="font-bold text-yellow-600">TVA à 19,25%</span> 
                et des régimes adaptés selon votre chiffre d'affaires.
              </p>
              
              {/* Aperçu rapide */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-red-600 mb-2">33%</div>
                  <div className="text-gray-600">Impôt sur les sociétés</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">19.25%</div>
                  <div className="text-gray-600">TVA standard</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-green-600 mb-2">1%</div>
                  <div className="text-gray-600">Patente locale</div>
                </div>
              </div>

              <button
                onClick={() => setShowFiscaliteModal(true)}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-full shadow-lg hover:from-purple-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-300"
              >
                <Eye className="h-5 w-5 mr-2" />
                Explorer le Système Fiscal
                <ChevronRight className="h-5 w-5 ml-2" />
              </button>
            </motion.div>
          </div>
          
          {/* Section Coûts par Secteur avec CTA et Modal */}
          <div id="couts_secteur">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-orange-50 to-red-100 rounded-3xl p-12 text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-600 rounded-full mb-6">
                <BarChart3 className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Coûts par Secteur d'Activité</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Analysez les coûts de production dans <span className="font-bold text-orange-600">10 secteurs clés</span> : 
                de l'<span className="font-bold text-green-600">agro-industrie</span> au <span className="font-bold text-blue-600">numérique</span>, 
                avec des données officielles actualisées.
              </p>
              
              {/* Aperçu rapide */}
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="text-lg font-bold text-green-600 mb-1">Agro-industrie</div>
                  <div className="text-sm text-gray-600">1M FCFA/ha</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="text-lg font-bold text-blue-600 mb-1">Énergie</div>
                  <div className="text-sm text-gray-600">150 FCFA/kWh</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="text-lg font-bold text-purple-600 mb-1">Numérique</div>
                  <div className="text-sm text-gray-600">20M FCFA/projet</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="text-lg font-bold text-red-600 mb-1">10 Secteurs</div>
                  <div className="text-sm text-gray-600">Analysés</div>
                </div>
              </div>

              <button
                onClick={() => setShowCostsSectorModal(true)}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-full shadow-lg hover:from-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300"
              >
                <TrendingUp className="h-5 w-5 mr-2" />
                Analyser les Coûts Sectoriels
                <ChevronRight className="h-5 w-5 ml-2" />
              </button>
            </motion.div>
          </div>
          
         

          {/* Call to Action Final */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Prêt à Investir au Cameroun ?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Vous avez maintenant toutes les clés pour évaluer vos coûts de production. 
              Passez à l'action !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('projets')}
                className="px-8 py-3 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                Voir les Opportunités
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-green-600 transition-colors duration-300">
                Contactez un Expert
              </button>
            </div>
          </motion.section>
        </motion.div>
      </main>


    {/* Modales */}
    {showMainOeuvreModal && (
        <MainOeuvreModal onClose={() => setShowMainOeuvreModal(false)} />
    )}

    {showFiscaliteModal && (
        <FiscaliteModal onClose={() => setShowFiscaliteModal(false)} />
    )}

    {showFoncierModal && (
        <FoncierModal onClose={() => setShowFoncierModal(false)} />
    )}

    {showCostsSectorModal && (
        <CostsBySectorModal onClose={() => setShowCostsSectorModal(false)} />
    )}
</div>
  );
};

export default FacteursProduction;

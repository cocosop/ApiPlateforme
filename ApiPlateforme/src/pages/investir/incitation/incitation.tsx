import  { useState } from 'react';
import { 
  Sparkles,
  Banknote, 
  BarChart2,
  Award,
  CheckCircle,
  ArrowDown,
  ChevronRight,
  Eye
} from 'lucide-react';
import { motion } from 'framer-motion';
import oeuvre from '../../../assets/img/incitation2.jpg';

const Incitation = () => {
  const [showIncentivesModal, setShowIncentivesModal] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [openPhaseKey, setOpenPhaseKey] = useState<'installation' | 'exploitation' | null>(null);

  const INCENTIVES_DATA = {
    phases: {
      installation: {
        title: "Phase d'Installation (0-5 ans)",
        icon: <Banknote className="h-8 w-8" />,
        benefits: [
          {
            title: 'Exonérations Totales',
            items: ['Droits d\'enregistrement', 'TVA à l\'import', 'Patente', 'Droits de mutation']
          },
          {
            title: 'Avantages Douaniers',
            items: [
              'Enlèvement direct des équipements',
              'Exonération droits de douane',
              'Admission temporaire spéciale'
            ]
          }
        ]
      },
      exploitation: {
        title: "Phase d'Exploitation (5-10 ans)",
        icon: <BarChart2 className="h-8 w-8" />,
        benefits: [
          {
            title: 'Réductions Fiscales',
            items: [
              '75% Impôt Société (5 premières années)',
              '50% réduction années 6-10',
              'Exonération droits prêts/emprunts'
            ]
          },
          {
            title: 'Autres Avantages',
            items: ['Report des déficits (5 ans)', 'TVA nulle à l\'export', 'Crédits d\'impôt R&D']
          }
        ]
      }
    },
    sectors: [
      {
        name: 'Agro-industrie',
        icon: '🌱',
        benefits: ['Exonération TVA', 'Droits réduits à 5%']
      },
      {
        name: 'Énergie',
        icon: '⚡',
        benefits: ['Crédit impôt 30%', 'Exonération foncière']
      },
      {
        name: 'Technologie',
        icon: '💻',
        benefits: ['TVA 0%', 'Subventions R&D']
      }
    ],
    keyFigures: [
      { value: '75%', label: 'Réduction IS première phase' },
      { value: '10 ans', label: 'Durée maximale avantages' },
      { value: '0%', label: 'TVA exportations' },
      { value: '5%', label: 'Droits de douane secteurs prioritaires' }
    ]
  };

  const sections = [
    {
      id: 'overview',
      title: 'Aperçu',
      icon: Sparkles,
    },
    {
      id: 'phases',
      title: 'Phases',
      icon: Banknote,
    },
    {
      id: 'sectors',
      title: 'Secteurs',
      icon: Award,
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F0B60]/10 to-white">
      {/* Hero Section */}
      <div className="relative h-[65vh] min-h-[500px] max-h-[800px] bg-gray-900">
        <img
          src={oeuvre}
          alt="Illustration des incitations fiscales"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
        <div className="absolute inset-0 bg-gray-900/40" />

        <div className="relative h-full flex flex-col">
          <div className="flex-grow flex items-center justify-center px-6 text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-6 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80 ring-1 ring-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
              >
                Soutien de l'État aux investisseurs
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent"
                >
                  Incitations Fiscales
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-6 text-lg md:text-xl text-gray-300 font-normal max-w-2xl mx-auto leading-relaxed"
              >
                Bénéficiez des avantages fiscaux conçus pour soutenir votre investissement au Cameroun.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8"
              >
                <a
                  href="#phases"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-gray-900 font-medium transition-all duration-300 group"
                >
                  Découvrir les avantages
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="w-full bg-gray-900 border-t border-gray-700 py-4 shadow-lg sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {sections.map((section) => (
              <motion.li
                key={section.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${activeSection === section.id ? 'bg-amber-500 text-gray-900' : 'bg-white/10 text-white'} text-sm font-medium transition-all duration-200 whitespace-nowrap hover:shadow-lg hover:shadow-amber-500/20`}
                >
                  {section.icon && <section.icon className="h-4 w-4" />}
                  {section.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Key Figures */}
          <div id="overview" className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {INCENTIVES_DATA.keyFigures.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-md border"
              >
                <h3 className="text-3xl font-bold text-[#0E600B]">{item.value}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Phases Section */}
<div id="phases">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 sm:p-12 overflow-hidden relative"
  >
    {/* Éléments décoratifs */}
    <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-200 rounded-full opacity-10"></div>
    <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-indigo-200 rounded-full opacity-10"></div>

    <div className="relative z-10 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mb-4 sm:mb-6 shadow-md">
        <Banknote className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
      </div>
      
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Phases clés
        </span>
      </h2>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Profitez d'avantages fiscaux adaptés à chaque étape de votre projet
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Carte Installation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg cursor-pointer"
           onClick={() => setOpenPhaseKey('installation')}
        >
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 flex items-center">
            <div className="bg-white/20 p-2 rounded-lg mr-3">
              <Banknote className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white">Installation (0-5 ans)</h3>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-center mb-3">
              <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full">
                EXONÉRATIONS TOTALES
              </span>
            </div>
            <button className="w-full mt-4 py-2.5 text-sm bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium rounded-lg transition-colors flex items-center justify-center">
              Voir les 5 avantages clés <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </motion.div>

        {/* Carte Exploitation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg cursor-pointer"
          onClick={() => setOpenPhaseKey('exploitation')}
        >
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-4 flex items-center">
            <div className="bg-white/20 p-2 rounded-lg mr-3">
              <BarChart2 className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white">Exploitation (5-10 ans)</h3>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-center mb-3">
              <span className="bg-indigo-100 text-indigo-800 text-sm font-bold px-3 py-1 rounded-full">
                RÉDUCTIONS JUSQU'À 75%
              </span>
            </div>
            <button className="w-full mt-4 py-2.5 text-sm bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-medium rounded-lg transition-colors flex items-center justify-center">
              Découvrir les réductions <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </motion.div>
      </div>
{openPhaseKey && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
    <div className="bg-white max-w-xl w-full rounded-xl shadow-xl p-6 relative">
      <button
        onClick={() => setOpenPhaseKey(null)}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
      >
        &times;
      </button>

      <h3 className="text-xl font-bold text-[#0F0B60] mb-4 text-center">
        {INCENTIVES_DATA.phases[openPhaseKey].title}
      </h3>

      {INCENTIVES_DATA.phases[openPhaseKey].benefits.map((b, index) => (
        <div key={index} className="mb-4">
          <h4 className="text-[#0E600B] font-semibold mb-1">
            <CheckCircle className="inline w-4 h-4 mr-2 text-[#DC2123]" />
            {b.title}
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {b.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
)}

     
    </div>
  </motion.div>
</div>

          {/* Sectors Section */}
          <div id="sectors">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-12 text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-6">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Secteurs Prioritaires</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {INCENTIVES_DATA.sectors.map((s, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md border">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{s.icon}</span>
                      <h3 className="text-lg font-semibold text-[#0E600B]">{s.name}</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {s.benefits.map((b, idx) => (
                        <li key={idx} className="flex items-center">
                          <Award className="h-4 w-4 text-[#F5BA3A] mr-2" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Final CTA */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-16 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-3xl text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Prêt à bénéficier de ces avantages ?</h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Contactez nos experts pour une analyse personnalisée de votre éligibilité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-amber-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300">
                Contactez un expert
              </button>
            </div>
          </motion.section>
        </motion.div>
      </main>

    
    </div>
  );
};

export default Incitation;
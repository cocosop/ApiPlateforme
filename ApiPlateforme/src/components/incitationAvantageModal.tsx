import React from 'react';
import { 
  X, 
  BarChart2,
  Award,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

interface IncentivesModalProps {
  data: {
    phases: {
      installation: {
        title: string;
        icon: React.ReactNode;
        benefits: {
          title: string;
          items: string[];
        }[];
      };
      exploitation: {
        title: string;
        icon: React.ReactNode;
        benefits: {
          title: string;
          items: string[];
        }[];
      };
    };
    sectors: {
      name: string;
      icon: string;
      benefits: string[];
    }[];
    keyFigures: {
      value: string;
      label: string;
    }[];
  };
  onClose: () => void;
}

const IncentivesModal: React.FC<IncentivesModalProps> = ({ data, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal Container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="relative w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-600 to-yellow-600 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Détails Complets des Incitations Fiscales</h2>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Fermer la modale"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
            {/* Key Figures */}
            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <BarChart2 className="h-5 w-5 mr-2 text-amber-600" />
                Chiffres Clés
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.keyFigures.map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
                    <p className="text-2xl font-bold text-amber-600">{item.value}</p>
                    <p className="text-sm text-gray-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Phases */}
            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Phases d'Avantages</h3>
              <div className="space-y-6">
                {Object.entries(data.phases).map(([key, phase]) => (
                  <div key={key} className="border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-gray-900 p-4 flex items-center">
                      <div className="bg-white/20 p-2 rounded-lg mr-3">
                        {phase.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-white">{phase.title}</h4>
                    </div>
                    <div className="p-6 space-y-4">
                      {phase.benefits.map((benefit, idx) => (
                        <div key={idx}>
                          <h5 className="text-md font-medium text-gray-900 mb-2 flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                            {benefit.title}
                          </h5>
                          <ul className="list-disc list-inside pl-5 space-y-1 text-gray-700">
                            {benefit.items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Sectors */}
            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secteurs Prioritaires</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {data.sectors.map((sector, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-2">{sector.icon}</span>
                      <h4 className="text-lg font-medium text-gray-900">{sector.name}</h4>
                    </div>
                    <ul className="space-y-2">
                      {sector.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <Award className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0 text-amber-500" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Fermer
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IncentivesModal;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Factor } from '../types';

interface FactorModalProps {
  factor: Factor;
  onClose: () => void;
}

const FactorModal: React.FC<FactorModalProps> = ({ factor, onClose }) => {
  // Pour les modals qui nécessitent un état local (ex: zone pour Personnel)
  const [zone, setZone] = useState('Zone 1');

  // Affiche factor.details si présent (c'est le cas avec vos données)
  // factor.details doit être un ReactNode ou une fonction qui prend {zone, setZone}
  let content = null;
  if ('details' in factor && factor.details) {
    // Si details est une fonction (ex: pour zone dynamique), on l'appelle avec {zone, setZone}
    if (typeof factor.details === 'function') {
      content = factor.details({ zone, setZone });
    } else {
      content = factor.details;
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
            <h2 className="text-2xl font-bold text-gray-900">{factor.name}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="p-6">
            {content ? content : (
              <div className="text-center py-8">
                <p className="text-gray-600">Informations détaillées à venir pour ce facteur.</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FactorModal;
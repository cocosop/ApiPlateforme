import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Home, Building } from 'lucide-react';

const Foncier: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-6">
            <MapPin className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Foncier</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Coûts des terrains industriels et commerciaux au Cameroun
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Home className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Terrains Aménagés</h3>
            </div>
            <div className="text-center p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-xl text-white">
              <p className="text-3xl font-bold">300 FCFA</p>
              <p className="text-green-100">par m²/an</p>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Douala - Bonabéri</span>
                <span className="font-semibold">680 FCFA/m²</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Bassa</span>
                <span className="font-semibold">480 FCFA/m²</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Building className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Terrains Bâtis</h3>
            </div>
            <div className="text-center p-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white">
              <p className="text-3xl font-bold">1000 - 3000 FCFA</p>
              <p className="text-blue-100">par m²/an</p>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Zone Franche</span>
                <span className="font-semibold">720 FCFA/m²</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Standard</span>
                <span className="font-semibold">1000 FCFA/m²</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Foncier;
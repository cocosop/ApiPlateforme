import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Citrus as Industry } from 'lucide-react';

const ProductionCostsBySector: React.FC = () => {
  const sectors = [
    { name: 'Agro-industrie', cost: 45, color: 'bg-green-500' },
    { name: 'Manufacturier', cost: 62, color: 'bg-blue-500' },
    { name: 'Services', cost: 38, color: 'bg-purple-500' },
    { name: 'Énergie', cost: 78, color: 'bg-yellow-500' },
    { name: 'Transport', cost: 55, color: 'bg-red-500' },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-6">
            <BarChart3 className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Coûts par Secteur</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comparaison des coûts de production selon les secteurs d'activité
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
              <TrendingUp className="h-8 w-8 text-indigo-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Indice des Coûts</h3>
            </div>
            
            <div className="space-y-6">
              {sectors.map((sector, index) => (
                <motion.div
                  key={sector.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{sector.name}</span>
                    <span className="font-bold text-gray-900">{sector.cost}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      className={`h-3 rounded-full ${sector.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${sector.cost}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Industry className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Secteurs Porteurs</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800 mb-2">Agro-industrie</h4>
                <p className="text-sm text-green-700">
                  Coûts optimisés grâce aux ressources locales abondantes
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800 mb-2">Services</h4>
                <p className="text-sm text-blue-700">
                  Secteur en croissance avec des coûts d'entrée modérés
                </p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-800 mb-2">Transport</h4>
                <p className="text-sm text-purple-700">
                  Opportunités d'investissement dans les infrastructures
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductionCostsBySector;
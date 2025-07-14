import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Truck, 
  MapPin, 
  Zap, 
  Wifi, 
  Users, 
  Shield, 
  CreditCard,
  ChevronRight,
  TrendingUp,
  DollarSign
} from 'lucide-react';
import { Factor } from '../types';
import FactorModal from './factorModal';

const FactorsGrid: React.FC = () => {
  const [selectedFactor, setSelectedFactor] = useState<Factor | null>(null);

  const factors: Factor[] = [
    {
      name: "Intrants",
      description: "Matières premières et équipements importés",
      icon: "ShoppingCart",
      color: "from-blue-500 to-blue-600",
      preview: {
        highlight: "0% à 81%",
        label: "Tarif douanier",
        stats: ["50k FCFA min", "940k FCFA max", "Frais transitaire"]
      }
    },
    {
      name: "Transport",
      description: "Déplacement marchandises et personnel",
      icon: "Truck",
      color: "from-green-500 to-green-600",
      preview: {
        highlight: "40-2600 FCFA",
        label: "Coût par unité",
        stats: ["Ferroviaire: 40 FCFA/T", "Routier: 90 FCFA/T", "Aérien: 2600 FCFA/Kg"]
      }
    },
    {
      name: "Terrain",
      description: "Acquisition ou location terrain industriel",
      icon: "MapPin",
      color: "from-yellow-500 to-yellow-600",
      preview: {
        highlight: "300-3000 FCFA",
        label: "Par m²/an",
        stats: ["Aménagés: 300 FCFA", "Bâtis: 1000-3000 FCFA", "Zone franche: 720 FCFA"]
      }
    },
    {
      name: "Énergie",
      description: "Électricité, carburant et autres sources",
      icon: "Zap",
      color: "from-orange-500 to-orange-600",
      preview: {
        highlight: "50-99 FCFA",
        label: "Par kWh",
        stats: ["Gasoil: 828 FCFA/L", "Super: 840 FCFA/L", "Gaz 12kg: 6500 FCFA"]
      }
    },
    {
      name: "Télécommunication",
      description: "Services téléphonie et internet",
      icon: "Wifi",
      color: "from-purple-500 to-purple-600",
      preview: {
        highlight: "20-90 FCFA",
        label: "Par minute",
        stats: ["ADSL: 20-30k FCFA/mois", "Haut débit: 12-300k FCFA", "SMS: 50 FCFA"]
      }
    },
    {
      name: "Personnel",
      description: "Salaires et charges sociales",
      icon: "Users",
      color: "from-red-500 to-red-600",
      preview: {
        highlight: "36,270 FCFA",
        label: "SMIG mensuel",
        stats: ["Cadres: 267-457k FCFA", "Employés: 129-325k FCFA", "Cotisations: 17.15%"]
      }
    },
    {
      name: "Assurance",
      description: "Couverture des risques d'activité",
      icon: "Shield",
      color: "from-indigo-500 to-indigo-600",
      preview: {
        highlight: "0.70‰",
        label: "Taux de base",
        stats: ["Bureaux: 0.70‰", "Habitations: 0.75‰", "Transport: 121-150k FCFA"]
      }
    },
    {
      name: "Frais Bancaires",
      description: "Services bancaires et financement",
      icon: "CreditCard",
      color: "from-pink-500 to-pink-600",
      preview: {
        highlight: "7-17%",
        label: "Taux d'intérêt",
        stats: ["Long terme: 7-10%", "Moyen terme: 11-17%", "Dépôt: 3.5%"]
      }
    },
  ];

  const getIcon = (iconName: string) => {
    const icons = {
      ShoppingCart,
      Truck,
      MapPin,
      Zap,
      Wifi,
      Users,
      Shield,
      CreditCard,
    };
    return icons[iconName as keyof typeof icons] || ShoppingCart;
  };

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Coûts de Production Essentiels
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-yellow-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les principaux postes de dépenses en un coup d'œil
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {factors.map((factor, index) => {
          const IconComponent = getIcon(factor.icon);
          
          return (
            <motion.div
              key={factor.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
              onClick={() => setSelectedFactor(factor)}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full relative overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${factor.color} opacity-10 rounded-bl-full`}></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${factor.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {factor.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {factor.description}
                </p>

                {/* Preview Stats */}
                {factor.preview && (
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="text-2xl font-bold text-green-600">{factor.preview.highlight}</div>
                        <div className="text-xs text-gray-500">{factor.preview.label}</div>
                      </div>
                      <TrendingUp className="h-5 w-5 text-green-500" />
                    </div>
                  </div>
                )}
                
                {/* CTA */}
                <div className="flex items-center text-green-600 font-medium text-sm group-hover:text-green-700">
                  <span>Voir détails</span>
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Stats Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Aperçu Rapide des Coûts</h3>
          <p className="text-green-100">Les chiffres clés à retenir pour votre budget</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <DollarSign className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
            <div className="text-2xl font-bold">36k FCFA</div>
            <div className="text-sm text-green-100">Salaire minimum</div>
          </div>
          <div className="text-center">
            <Truck className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
            <div className="text-2xl font-bold">40-90 FCFA</div>
            <div className="text-sm text-green-100">Transport/tonne</div>
          </div>
          <div className="text-center">
            <Zap className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
            <div className="text-2xl font-bold">50-99 FCFA</div>
            <div className="text-sm text-green-100">Électricité/kWh</div>
          </div>
          <div className="text-center">
            <MapPin className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
            <div className="text-2xl font-bold">300-3k FCFA</div>
            <div className="text-sm text-green-100">Terrain/m²/an</div>
          </div>
        </div>
      </motion.div>

      {selectedFactor && (
        <FactorModal
          factor={selectedFactor}
          onClose={() => setSelectedFactor(null)}
        />
      )}
    </section>
  );
};

export default FactorsGrid;
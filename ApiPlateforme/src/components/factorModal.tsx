import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Droplet, 
  MessageSquare, 
  Phone, 
  Plane, 
  Truck, 
  Users, 
  Wifi, 
  X,
  Zap,
  MapPin,
  DollarSign,
  Shield,
  Building,
  Fuel,
  Calculator,
  CreditCard,
  Briefcase
} from 'lucide-react';
import { Factor } from '../types';

interface FactorModalProps {
  factor: Factor;
  onClose: () => void;
}

const FactorModal: React.FC<FactorModalProps> = ({ factor, onClose }) => {
  const getFactorDetails = (factorName: string) => {
    const details = {
      "Intrants": (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Building className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-indigo-800">Définition des Intrants</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Les « intrants » comprennent les matières premières, consommables, accessoires, outillages et machines importés.
              Les produits achetés localement au Cameroun sont considérés comme sans frais d'achat supplémentaires.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Calculator className="h-5 w-5 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800">Tarif Douanier</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Le tarif douanier sur les produits importés varie de <span className="font-semibold text-blue-600">0% à 81%</span>
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Truck className="h-5 w-5 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-800">Frais de Transitaire</h4>
              </div>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold text-green-600">50 000 FCFA</span> (76,22 €), max <span className="font-semibold text-green-600">940 000 FCFA</span> (1 433 €)
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 md:col-span-2"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <CreditCard className="h-5 w-5 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-800">Frais Financiers</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Les frais financiers relatifs aux achats varient entre <span className="font-semibold text-purple-600">29 000 FCFA + 2,35%</span> et <span className="font-semibold text-purple-600">39 000 FCFA + 4,85%</span>
              </p>
            </motion.div>
          </div>
        </div>
      ),

      "Transport": (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Truck className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg text-green-800">Transport de marchandises</h3>
              </div>
              <p className="text-2xl font-bold text-green-700 mb-1">40 - 90 FCFA/T</p>
              <p className="text-sm text-green-600">Coût moyen par tonne</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Droplet className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg text-blue-800">Transport de liquides</h3>
              </div>
              <p className="text-2xl font-bold text-blue-700 mb-1">135 FCFA/L</p>
              <p className="text-sm text-blue-600">Coût moyen par litre</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Plane className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg text-amber-800">Transport aérien</h3>
              </div>
              <p className="text-2xl font-bold text-amber-700 mb-1">2 600 FCFA/Kg</p>
              <p className="text-sm text-amber-600">Coût moyen par kilogramme</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-xl border border-red-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-lg text-red-800">Transport du personnel</h3>
              </div>
              <p className="text-2xl font-bold text-red-700 mb-1">5 000 - 10 000 FCFA</p>
              <p className="text-sm text-red-600">Coût mensuel moyen</p>
            </motion.div>
          </div>
        </div>
      ),

      "Terrain": (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-amber-100 rounded-lg">
                <MapPin className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800">Tarification des Terrains</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-amber-400 to-orange-500 p-8 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Terrains Aménagés</h3>
              </div>
              <p className="text-3xl font-bold mb-2">300 FCFA/m²</p>
              <p className="text-amber-100">Coût annuel</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-red-500 to-pink-600 p-8 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Terrains Bâtis</h3>
              </div>
              <p className="text-3xl font-bold mb-2">1000 - 3000 FCFA/m²</p>
              <p className="text-red-100">Coût annuel</p>
            </motion.div>
          </div>
        </div>
      ),

      "Énergie": (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800">Tarification Énergétique</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Fuel className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Carburants</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Super Carburant</span>
                  <span className="font-semibold text-orange-600">840 FCFA/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Gasoil</span>
                  <span className="font-semibold text-orange-600">828 FCFA/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Pétrole</span>
                  <span className="font-semibold text-orange-600">336,99 FCFA/L</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Zap className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Électricité - Basse Tension</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">≤ 110 kWh</span>
                  <span className="font-semibold text-yellow-600">50 FCFA/kWh</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">111-400 kWh</span>
                  <span className="font-semibold text-yellow-600">79 FCFA/kWh</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">401-800 kWh</span>
                  <span className="font-semibold text-yellow-600">94 FCFA/kWh</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">801-2000 kWh</span>
                  <span className="font-semibold text-yellow-600">99 FCFA/kWh</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Fuel className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Gaz Distribué</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Bouteille 12 kg</span>
                  <span className="font-semibold text-blue-600">6 500 FCFA</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Bouteille 6 kg</span>
                  <span className="font-semibold text-blue-600">3 200 FCFA</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-teal-100 rounded-lg">
                  <Droplet className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Eau</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Eau potable</span>
                  <span className="font-semibold text-teal-600">364 FCFA/m³</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Eau industrielle</span>
                  <span className="font-semibold text-teal-600">182 FCFA/m³</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ),

      "Télécommunication": (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Wifi className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800">Télécommunications au Cameroun</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Téléphonie Fixe (CAMTEL)</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Fixe à fixe</span>
                  <span className="font-semibold text-red-600">20-60 FCFA/min</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Intra-provincial</span>
                  <span className="font-semibold text-red-600">20 FCFA/min</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">National</span>
                  <span className="font-semibold text-red-600">82 FCFA/min</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Fixe à mobile</span>
                  <span className="font-semibold text-red-600">85 FCFA/min</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl border-l-4 border-amber-500 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Téléphonie Mobile</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">National</span>
                  <span className="font-semibold text-amber-600">30-90 FCFA/min</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">SMS national</span>
                  <span className="font-semibold text-amber-600">50 FCFA</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">SMS international</span>
                  <span className="font-semibold text-amber-600">125-200 FCFA</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Appels internationaux</span>
                  <span className="font-semibold text-amber-600">90-100 FCFA/min</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl border-l-4 border-green-500 shadow-sm hover:shadow-md transition-all duration-200 md:col-span-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Wifi className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Internet & Fournisseurs</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Faible débit</span>
                  <span className="font-semibold text-green-600">6.000 + 25.000 FCFA</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">ADSL</span>
                  <span className="font-semibold text-green-600">20.000-30.000 FCFA/mois</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Haut débit</span>
                  <span className="font-semibold text-green-600">12.000-300.000 FCFA/mois</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">Fournisseurs: CAMTEL, MTN, Orange, Nexttel</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ),

      "Personnel": (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Briefcase className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-purple-800">Coûts du Personnel</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Salaire Minimum</h3>
              </div>
              <p className="text-2xl font-bold text-green-600 mb-2">36 270 FCFA/mois</p>
              <p className="text-sm text-gray-600">Inchangé depuis 2014</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Salaires par Catégorie</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Cadres</span>
                  <span className="font-semibold text-blue-600">267 000 - 457 000 FCFA</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Employés</span>
                  <span className="font-semibold text-blue-600">129 000 - 325 000 FCFA</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Ouvriers</span>
                  <span className="font-semibold text-blue-600">40 000 - 134 000 FCFA</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Cotisations Sociales</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Familiale</span>
                  <span className="font-semibold text-purple-600">7%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Risques</span>
                  <span className="font-semibold text-purple-600">1.75% à 5%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Pension</span>
                  <span className="font-semibold text-purple-600">8.4%</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Zones Géographiques</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Zone 1: Douala, Yaoundé</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Zone 2: Autres villes</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ),

      "Assurance": (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800">Coûts d'Assurance</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Zap className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Incendie Immeubles</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Bureaux</span>
                  <span className="font-semibold text-red-600">0,70 pour mille</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Habitations mixtes</span>
                  <span className="font-semibold text-red-600">0,75 pour mille</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Accident de Travail</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Inclus dans charges sociales <span className="font-semibold text-green-600">(1,5% à 5%)</span>
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 md:col-span-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Truck className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Transport</h3>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">Véhicules utilitaires: </span>
                <span className="font-semibold text-purple-600">121 212 FCFA à 150 086 FCFA</span>
              </div>
            </motion.div>
          </div>
        </div>
      ),

      "Frais Bancaires": (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <CreditCard className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800">Frais Bancaires</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Intérêts Bancaires</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Long terme</span>
                  <span className="font-semibold text-blue-600">7% - 10%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Moyen terme</span>
                  <span className="font-semibold text-blue-600">11% - 17%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Crédits</span>
                  <span className="font-semibold text-blue-600">5% - 15%</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Calculator className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Frais de Service</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                <span className="font-semibold text-purple-600">29 000 FCFA + 2,35%</span> jusqu'à <span className="font-semibold text-purple-600">39 000 FCFA + 4,85%</span>
              </p>
              
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-800 mb-2">Dépôts à Terme</h4>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Taux: </span>
                  <span className="font-semibold text-purple-600">3,5%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ),
    };
    
    return details[factorName as keyof typeof details] || (
      <div className="text-center py-12">
        <div className="p-4 bg-gray-50 rounded-lg inline-block">
          <p className="text-gray-600">Informations détaillées à venir pour ce facteur.</p>
        </div>
      </div>
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl backdrop-blur-sm bg-white/95">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Building className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{factor.name}</h2>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="h-6 w-6 text-gray-400" />
            </motion.button>
          </div>
          
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-88px)]">
            {getFactorDetails(factor.name)}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FactorModal;
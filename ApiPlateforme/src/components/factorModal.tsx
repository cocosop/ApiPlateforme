import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Droplet, 
  MessageSquare, 
  Phone, 
  Plane, 
  Truck, 
  Users, 
  Wifi, 
  Zap,
  MapPin,
  DollarSign,
  Shield,
  Building,
  Fuel,
  Calculator,
  CreditCard,
  Briefcase,
  ShoppingCart,
  type LucideIcon
} from 'lucide-react';
import { Factor } from '../types';
import ModalShell from './showcase/ModalShell';

// Icône d'en-tête et couleur, alignées sur les cartes de la grille
const HEADER_ICONS: Record<string, LucideIcon> = {
  ShoppingCart, Truck, MapPin, Zap, Wifi, Users, Shield, CreditCard,
};
const PURPLE_FACTORS = ['Wifi', 'Users', 'Shield', 'CreditCard'];

interface FactorModalProps {
  factor: Factor;
  onClose: () => void;
}

const FactorModal: React.FC<FactorModalProps> = ({ factor, onClose }) => {
  const { t } = useTranslation();
  const getFactorDetails = (factorIcon: string) => {
    const details = {
      "ShoppingCart": (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Building className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-indigo-800">{t("pages_secteurs.facteurs_production.factor_modal.intrants.def")}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {t("pages_secteurs.facteurs_production.factor_modal.intrants.desc")}
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
                <h4 className="font-semibold text-gray-800">{t("pages_secteurs.facteurs_production.factor_modal.intrants.tarif")}</h4>
              </div>
              <p className="text-gray-600 text-sm">
                {t("pages_secteurs.facteurs_production.factor_modal.intrants.tarif_desc")} <span className="font-semibold text-blue-600">0% à 81%</span>
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
                <h4 className="font-semibold text-gray-800">{t("pages_secteurs.facteurs_production.factor_modal.intrants.transitaire")}</h4>
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
                <h4 className="font-semibold text-gray-800">{t("pages_secteurs.facteurs_production.factor_modal.intrants.financiers")}</h4>
              </div>
              <p className="text-gray-600 text-sm">
                {t("pages_secteurs.facteurs_production.factor_modal.intrants.financiers_desc")} <span className="font-semibold text-purple-600">29 000 FCFA + 2,35%</span> et <span className="font-semibold text-purple-600">39 000 FCFA + 4,85%</span>
              </p>
            </motion.div>
          </div>
        </div>
      ),

       "Truck": (
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
                <h3 className="font-semibold text-lg text-green-800">{t("pages_secteurs.facteurs_production.factor_modal.transport.t1")}</h3>
              </div>
              <p className="text-2xl font-bold text-green-700 mb-1">40 - 90 FCFA/T</p>
              <p className="text-sm text-green-600">{t("pages_secteurs.facteurs_production.factor_modal.transport.t1_desc")}</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Droplet className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg text-blue-800">{t("pages_secteurs.facteurs_production.factor_modal.transport.t2")}</h3>
              </div>
              <p className="text-2xl font-bold text-blue-700 mb-1">135 FCFA/L</p>
              <p className="text-sm text-blue-600">{t("pages_secteurs.facteurs_production.factor_modal.transport.t2_desc")}</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Plane className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg text-amber-800">{t("pages_secteurs.facteurs_production.factor_modal.transport.t3")}</h3>
              </div>
              <p className="text-2xl font-bold text-amber-700 mb-1">2 600 FCFA/Kg</p>
              <p className="text-sm text-amber-600">{t("pages_secteurs.facteurs_production.factor_modal.transport.t3_desc")}</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-xl border border-red-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-lg text-red-800">{t("pages_secteurs.facteurs_production.factor_modal.transport.t4")}</h3>
              </div>
              <p className="text-2xl font-bold text-red-700 mb-1">5 000 - 10 000 FCFA</p>
              <p className="text-sm text-red-600">{t("pages_secteurs.facteurs_production.factor_modal.transport.t4_desc")}</p>
            </motion.div>
          </div>
        </div>
      ),

       "MapPin": (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-amber-100 rounded-lg">
                <MapPin className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800">{t("pages_secteurs.facteurs_production.factor_modal.terrain.title")}</h3>
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
                <h3 className="text-xl font-semibold">{t("pages_secteurs.facteurs_production.factor_modal.terrain.t1")}</h3>
              </div>
              <p className="text-3xl font-bold mb-2">300 FCFA/m²</p>
              <p className="text-amber-100">{t("pages_secteurs.facteurs_production.factor_modal.terrain.desc")}</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-red-500 to-pink-600 p-8 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{t("pages_secteurs.facteurs_production.factor_modal.terrain.t2")}</h3>
              </div>
              <p className="text-3xl font-bold mb-2">1000 - 3000 FCFA/m²</p>
              <p className="text-red-100">{t("pages_secteurs.facteurs_production.factor_modal.terrain.desc")}</p>
            </motion.div>
          </div>
        </div>
      ),

       "Zap": (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800">{t("pages_secteurs.facteurs_production.factor_modal.energie.title")}</h3>
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
                <h3 className="text-lg font-semibold text-gray-800">{t("pages_secteurs.facteurs_production.factor_modal.energie.carburants")}</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.energie.carb_l1")}</span>
                  <span className="font-semibold text-orange-600">840 FCFA/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.energie.carb_l2")}</span>
                  <span className="font-semibold text-orange-600">828 FCFA/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.energie.carb_l3")}</span>
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
                <h3 className="text-lg font-semibold text-gray-800">{t("pages_secteurs.facteurs_production.factor_modal.energie.elec")}</h3>
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
                <h3 className="text-lg font-semibold text-gray-800">{t("pages_secteurs.facteurs_production.factor_modal.energie.gaz")}</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.energie.gaz_l1")}</span>
                  <span className="font-semibold text-blue-600">6 500 FCFA</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.energie.gaz_l2")}</span>
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
                <h3 className="text-lg font-semibold text-gray-800">{t("pages_secteurs.facteurs_production.factor_modal.energie.eau")}</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.energie.eau_l1")}</span>
                  <span className="font-semibold text-teal-600">364 FCFA/m³</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.energie.eau_l2")}</span>
                  <span className="font-semibold text-teal-600">182 FCFA/m³</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ),

       "Wifi": (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Wifi className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800">{t("pages_secteurs.facteurs_production.factor_modal.telecom.title")}</h3>
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
                <h3 className="text-lg font-semibold text-gray-800">{t("pages_secteurs.facteurs_production.factor_modal.telecom.t1")}</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.telecom.t1_l1")}</span>
                  <span className="font-semibold text-red-600">20-60 FCFA/min</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.telecom.t1_l2")}</span>
                  <span className="font-semibold text-red-600">20 FCFA/min</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.telecom.t1_l3")}</span>
                  <span className="font-semibold text-red-600">82 FCFA/min</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.telecom.t1_l4")}</span>
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
                <h3 className="text-lg font-semibold text-gray-800">{t("pages_secteurs.facteurs_production.factor_modal.telecom.t2")}</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.telecom.t1_l3")}</span>
                  <span className="font-semibold text-amber-600">30-90 FCFA/min</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.telecom.t2_l2")}</span>
                  <span className="font-semibold text-amber-600">50 FCFA</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.telecom.t2_l3")}</span>
                  <span className="font-semibold text-amber-600">125-200 FCFA</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.telecom.t2_l4")}</span>
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
                <h3 className="text-lg font-semibold text-gray-800">{t("pages_secteurs.facteurs_production.factor_modal.telecom.t3")}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.telecom.t3_l1")}</span>
                  <span className="font-semibold text-green-600">6.000 + 25.000 FCFA</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.telecom.t3_l2")}</span>
                  <span className="font-semibold text-green-600">20.000-30.000 FCFA/mois</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.telecom.t3_l3")}</span>
                  <span className="font-semibold text-green-600">12.000-300.000 FCFA/mois</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">{t("pages_secteurs.facteurs_production.factor_modal.telecom.t3_desc")}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ),

       "Users": (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Briefcase className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-purple-800">{t("pages_secteurs.facteurs_production.factor_modal.personnel.title")}</h3>
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
                <h3 className="text-lg font-semibold text-gray-800">{t("pages_secteurs.facteurs_production.factor_modal.personnel.t1")}</h3>
              </div>
              <p className="text-2xl font-bold text-green-600 mb-2">36 270 FCFA/mois</p>
              <p className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.personnel.t1_desc")}</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{t("pages_secteurs.facteurs_production.factor_modal.personnel.t2")}</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.personnel.t2_l1")}</span>
                  <span className="font-semibold text-blue-600">267 000 - 457 000 FCFA</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.personnel.t2_l2")}</span>
                  <span className="font-semibold text-blue-600">129 000 - 325 000 FCFA</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.personnel.t2_l3")}</span>
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
                <h3 className="text-lg font-semibold text-gray-800">{t("pages_secteurs.facteurs_production.factor_modal.personnel.t3")}</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.personnel.t3_l1")}</span>
                  <span className="font-semibold text-purple-600">7%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.personnel.t3_l2")}</span>
                  <span className="font-semibold text-purple-600">1.75% à 5%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.personnel.t3_l3")}</span>
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
                <h3 className="text-lg font-semibold text-gray-800">{t("pages_secteurs.facteurs_production.factor_modal.personnel.t4")}</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.personnel.t4_l1")}</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.personnel.t4_l2")}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ),

       "Shield": (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800">{t("pages_secteurs.facteurs_production.factor_modal.assurance.title")}</h3>
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
                <h3 className="text-lg font-semibold text-gray-800">{t("pages_secteurs.facteurs_production.factor_modal.assurance.t1")}</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.assurance.t1_l1")}</span>
                  <span className="font-semibold text-red-600">0,70 pour mille</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.assurance.t1_l2")}</span>
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
                <h3 className="text-lg font-semibold text-gray-800">{t("pages_secteurs.facteurs_production.factor_modal.assurance.t2")}</h3>
              </div>
              <p className="text-gray-600 text-sm">
                {t("pages_secteurs.facteurs_production.factor_modal.assurance.t2_desc")} <span className="font-semibold text-green-600">(1,5% à 5%)</span>
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
                <h3 className="text-lg font-semibold text-gray-800">{t("pages_secteurs.facteurs_production.factor_modal.assurance.t3")}</h3>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.assurance.t3_desc")} </span>
                <span className="font-semibold text-purple-600">121 212 FCFA à 150 086 FCFA</span>
              </div>
            </motion.div>
          </div>
        </div>
      ),

      "CreditCard": (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <CreditCard className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800">{t("pages_secteurs.facteurs_production.factor_modal.banque.title")}</h3>
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
                <h3 className="text-lg font-semibold text-gray-800">{t("pages_secteurs.facteurs_production.factor_modal.banque.t1")}</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.banque.t1_l1")}</span>
                  <span className="font-semibold text-blue-600">7% - 10%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.banque.t1_l2")}</span>
                  <span className="font-semibold text-blue-600">11% - 17%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.banque.t1_l3")}</span>
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
                <h3 className="text-lg font-semibold text-gray-800">{t("pages_secteurs.facteurs_production.factor_modal.banque.t2")}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                <span className="font-semibold text-purple-600">29 000 FCFA + 2,35%</span> {t("pages_secteurs.facteurs_production.factor_modal.banque.t2_desc1")} <span className="font-semibold text-purple-600">39 000 FCFA + 4,85%</span>
              </p>
              
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-800 mb-2">{t("pages_secteurs.facteurs_production.factor_modal.banque.t2_title2")}</h4>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.banque.t2_taux")} </span>
                  <span className="font-semibold text-purple-600">3,5%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ),
    };
    
    return details[factorIcon as keyof typeof details] || (
      <div className="text-center py-12">
        <div className="p-4 bg-gray-50 rounded-lg inline-block">
          <p className="text-gray-600">{t("pages_secteurs.facteurs_production.factor_modal.no_data")}</p>
        </div>
      </div>
    );
  };

  const HeaderIcon = HEADER_ICONS[factor.icon] ?? Building;

  return (
    <ModalShell
      title={factor.name}
      subtitle={factor.description}
      icon={<HeaderIcon className="h-5 w-5" />}
      accent={PURPLE_FACTORS.includes(factor.icon) ? "purple" : "green"}
      onClose={onClose}
    >
      {getFactorDetails(factor.icon)}
    </ModalShell>
  );
};

export default FactorModal;
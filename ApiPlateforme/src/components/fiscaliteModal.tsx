import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calculator, Percent, FileText, ChevronDown, ChevronUp } from 'lucide-react';

interface FiscaliteModalProps {
  onClose: () => void;
}

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  color: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, color, isOpen, onToggle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden"
  >
    <button
      onClick={onToggle}
      className={`w-full p-6 text-left border-l-4 hover:bg-gray-50 transition-colors duration-200`}
      style={{ borderColor: color }}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </div>
    </button>
    
    {isOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="border-t border-gray-200"
      >
        <div className="p-6">{children}</div>
      </motion.div>
    )}
  </motion.div>
);

const FiscaliteModal: React.FC<FiscaliteModalProps> = ({ onClose }) => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    regimes: true,
    locale: false,
    tva: false,
    douanes: false,
    societes: false,
    fonciere: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const colors = {
    primary: '#0F0B60',
    secondary: '#0E600B',
    accent: '#DC2123',
    highlight: '#F5BA3A'
  };

  const customsData = [
    { category: 'Biens de première nécessité', rate: '5%', base: 'Valeur en douane', examples: 'Médicaments, produits de base' },
    { category: 'Matières premières', rate: '10%', base: 'Valeur EXW', examples: 'Acier, produits agricoles bruts' },
    { category: 'Biens intermédiaires', rate: '20%', base: 'Valeur CAF', examples: 'Pièces automobiles, composants' },
    { category: 'Biens de consommation', rate: '30%', base: 'Valeur totale', examples: 'Électronique, véhicules' }
  ];

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
          className="bg-white rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
            <div className="flex items-center">
              <Calculator className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Fiscalité Camerounaise</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          
          <div className="p-6">
            {/* Vue d'ensemble */}
            <div className="text-center bg-gradient-to-r from-purple-50 to-indigo-100 p-8 rounded-2xl mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Système Fiscal Complet</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                Aperçu complet des obligations fiscales pour les entreprises au Cameroun
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-xl">
                  <div className="text-3xl font-bold text-red-600">33%</div>
                  <div className="text-gray-600">Impôt sur les sociétés</div>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <div className="text-3xl font-bold text-yellow-600">19.25%</div>
                  <div className="text-gray-600">TVA standard</div>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <div className="text-3xl font-bold text-green-600">1%</div>
                  <div className="text-gray-600">Patente locale</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Régimes d'imposition */}
              <AccordionItem
                title="Régimes d'Imposition"
                color={colors.secondary}
                isOpen={openSections.regimes}
                onToggle={() => toggleSection('regimes')}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-bold text-green-800 mb-3">Impôt Libératoire</h4>
                    <ul className="text-sm text-green-700 space-y-2">
                      <li>• CA annuel &lt; 10 M FCFA</li>
                      <li>• Paiement trimestriel</li>
                      <li>• Dispense de TVA et patente</li>
                      <li>• Baby-foot (&lt;10 machines)</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-bold text-blue-800 mb-3">Régime Simplifié (RSI)</h4>
                    <ul className="text-sm text-blue-700 space-y-2">
                      <li>• CA : 10 M à 50 M FCFA</li>
                      <li>• Comptabilité allégée OHADA</li>
                      <li>• Option régime réel dès 30 M</li>
                      <li>• Ne collectent pas la TVA</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-bold text-purple-800 mb-3">Régime Réel</h4>
                    <ul className="text-sm text-purple-700 space-y-2">
                      <li>• CA ≥ 50 M FCFA</li>
                      <li>• Obligatoire professions libérales</li>
                      <li>• Comptabilité normale OHADA</li>
                      <li>• Collecte/déduction TVA</li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>

              {/* Fiscalité Locale */}
              <AccordionItem
                title="Fiscalité Locale"
                color={colors.accent}
                isOpen={openSections.locale}
                onToggle={() => toggleSection('locale')}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-bold text-red-800 mb-3">Patente</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• 1% du chiffre d'affaires</li>
                      <li>• Déclaration sous 2 mois</li>
                      <li>• Paiement annuel</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-bold text-yellow-800 mb-3">Licence</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Alcoolisées : 4x patente</li>
                      <li>• Non-alcoolisées : 2x patente</li>
                      <li>• Calcul personnalisé</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-3">Taxe Bétail</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• 200 FCFA/tête bovin</li>
                      <li>• Exemptions animaux labour</li>
                      <li>• Recensement annuel</li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>

              {/* TVA & Droits Spéciaux */}
              <AccordionItem
                title="TVA & Droits Spéciaux"
                color={colors.highlight}
                isOpen={openSections.tva}
                onToggle={() => toggleSection('tva')}
              >
                <div className="space-y-6">
                  <div className="text-center p-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl text-white">
                    <div className="text-4xl font-bold">19.25%</div>
                    <div className="text-yellow-100">Taux Normal TVA</div>
                    <div className="text-sm text-yellow-200 mt-2">(17.5% TVA + 1.75% CAC)</div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-3">Exonérations</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Exportations</li>
                        <li>• Zones Franches Industrielles</li>
                        <li>• Services éducatifs</li>
                        <li>• Services médicaux</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 mb-3">Droit d'Accise</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between p-2 bg-gray-50 rounded">
                          <span>Boissons alcoolisées</span>
                          <span className="font-medium">35% abattement</span>
                        </div>
                        <div className="flex justify-between p-2 bg-gray-50 rounded">
                          <span>Tabacs</span>
                          <span className="font-medium">42.5% abattement</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionItem>

              {/* Impôt sur les Sociétés */}
              <AccordionItem
                title="Impôt sur les Sociétés"
                color={colors.accent}
                isOpen={openSections.societes}
                onToggle={() => toggleSection('societes')}
              >
                <div className="space-y-6">
                  <div className="text-center p-6 bg-gradient-to-r from-red-500 to-red-600 rounded-xl text-white">
                    <div className="text-4xl font-bold">33%</div>
                    <div className="text-red-100">Taux Normal</div>
                    <div className="text-sm text-red-200 mt-2">(30% IS + 3% CAC)</div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-bold text-blue-800 mb-3">Acomptes Régime Réel</h4>
                      <div className="text-2xl font-bold text-blue-600">2.2%</div>
                      <div className="text-sm text-blue-700">du chiffre d'affaires</div>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-bold text-green-800 mb-3">Acomptes RSI</h4>
                      <div className="text-2xl font-bold text-green-600">5.5%</div>
                      <div className="text-sm text-green-700">du chiffre d'affaires</div>
                    </div>
                  </div>
                </div>
              </AccordionItem>

              {/* Taxe Foncière */}
              <AccordionItem
                title="Taxe Foncière"
                color={colors.highlight}
                isOpen={openSections.fonciere}
                onToggle={() => toggleSection('fonciere')}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-bold text-yellow-800 mb-3">Propriétaire</h4>
                    <div className="text-xl font-bold text-yellow-600">0.11%</div>
                    <div className="text-sm text-yellow-700">× (terrain + bâtiments)</div>
                  </div>
                  
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-bold text-orange-800 mb-3">Locataire</h4>
                    <div className="text-sm text-orange-700">
                      <div>5-10% loyer annuel</div>
                      <div>+ 50% précompte</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-red-50 rounded-lg">
                  <h4 className="font-bold text-red-800 mb-2">Échéances importantes</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Date limite de paiement : 15 mars</li>
                    <li>• Sanctions pour retard applicables</li>
                    <li>• Exonérations partielles possibles</li>
                  </ul>
                </div>
              </AccordionItem>
            </div>

            {/* Tableau des Tarifs Douaniers */}
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tarifs Douaniers CEMAC</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-purple-600">
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Catégorie</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Taux</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Base de calcul</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Exemples</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customsData.map((item, index) => (
                      <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-900">{item.category}</td>
                        <td className="py-3 px-4 font-bold text-purple-600">{item.rate}</td>
                        <td className="py-3 px-4 text-gray-600">{item.base}</td>
                        <td className="py-3 px-4 text-gray-600">{item.examples}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Summary Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <Percent className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Impôt sur les Sociétés</h3>
                <div className="text-3xl font-bold text-red-600 mb-2">33%</div>
                <p className="text-gray-600">Taux standard pour les entreprises</p>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                  <FileText className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">TVA</h3>
                <div className="text-3xl font-bold text-yellow-600 mb-2">19.25%</div>
                <p className="text-gray-600">Taux de TVA applicable</p>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Calculator className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Patente</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">1%</div>
                <p className="text-gray-600">Du chiffre d'affaires annuel</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FiscaliteModal;
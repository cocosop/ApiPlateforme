import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Home, Building, FileText, Scale } from 'lucide-react';

interface FoncierModalProps {
  onClose: () => void;
}

const FoncierModal: React.FC<FoncierModalProps> = ({ onClose }) => {
  const acquisitionMethods = [
    {
      title: "Terrains Lotis",
      content: "Procédure administrative simplifiée pour l'obtention",
      icon: "🏘️"
    },
    {
      title: "Terrains Non Lotis", 
      content: "Processus de régularisation encadré par la loi",
      icon: "🌳"
    }
  ];

  const reformsList = [
    "Accélération des procédures administratives",
    "Décentralisation des décisions régionales", 
    "Système de publication transparent",
    "Mécanisme de résolution des litiges"
  ];

  const legalLaws = [
    {
      text: "Ordonnance 74-1",
      subtitle: "Régime foncier",
      year: "1974",
      link: "https://garoua.eregulations.org/media/ordonnance_fixant_regime_foncier_cameroun.pdf",
    },
    {
      text: "Ordonnance 74-2", 
      subtitle: "Gestion domaniale",
      year: "1974",
      link: "https://www.cvuc-uccc.com/minat/textes/35.pdf",
    },
    {
      text: "Ordonnance 74-3",
      subtitle: "Expropriation", 
      year: "1974",
      link: "https://garoua.eregulations.org/media/ordonnance_fixant_regime_foncier_cameroun.pdf",
    },
    {
      text: "Loi 80-21",
      subtitle: "Amendements",
      year: "1980", 
      link: "https://legecam.cm/wp-content/uploads/2024/05/bb-rfi-05-loi-n8021-du-14-juillet-1980-modifiant-et-completant-certaines-dispositions-de-lordonnance.pdf",
    }
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
          className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Foncier au Cameroun</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          
          <div className="p-6 space-y-8">
            {/* Coûts des terrains */}
            <section className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Home className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold text-green-800">Terrains Aménagés</h3>
                </div>
                <div className="text-center p-4 bg-white rounded-lg mb-4">
                  <div className="text-3xl font-bold text-green-600">300 FCFA</div>
                  <div className="text-green-700">par m²/an</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Douala - Bonabéri</span>
                    <span className="font-semibold text-green-600">680 FCFA/m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Bassa</span>
                    <span className="font-semibold text-green-600">480 FCFA/m²</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Building className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-blue-800">Terrains Bâtis</h3>
                </div>
                <div className="text-center p-4 bg-white rounded-lg mb-4">
                  <div className="text-3xl font-bold text-blue-600">1000 - 3000 FCFA</div>
                  <div className="text-blue-700">par m²/an</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Zone Franche</span>
                    <span className="font-semibold text-blue-600">720 FCFA/m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Standard</span>
                    <span className="font-semibold text-blue-600">1000 FCFA/m²</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Méthodes d'acquisition */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Méthodes d'Acquisition</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {acquisitionMethods.map((method, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-green-500 transition-colors">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">{method.icon}</span>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h4>
                        <p className="text-gray-600">{method.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Réformes 2005 */}
            <section className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
              <div className="mb-6">
                <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Nouveauté 2005
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Révolution des Réformes Foncières
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {reformsList.map((reform, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-gray-700 font-medium">{reform}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Titre Foncier Garanti */}
            <section className="bg-yellow-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-yellow-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Titre Foncier Garanti</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Une procédure sécurisée avec authentification biométrique et vérification cadastrale numérique.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-yellow-600 font-semibold">Certificat d'authenticité numérique</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-yellow-600 font-semibold">Géolocalisation précise</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-yellow-600 font-semibold">Protection contre les fraudes</div>
                </div>
              </div>
            </section>

            {/* Bail Commercial */}
            <section className="bg-red-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bail Commercial Sécurisé</h3>
              <p className="text-gray-700 mb-4">
                Contrats de bail modernisés avec protection des deux parties et réévaluation encadrée.
              </p>
              <div className="bg-yellow-100 p-4 rounded-lg">
                <p className="text-gray-800">
                  <strong>Durée maximale :</strong> 15 ans renouvelable<br />
                  <strong>Indexation :</strong> réglementée sur l'indice INSEE
                </p>
              </div>
            </section>

            {/* Code Foncier */}
            <section>
              <div className="flex items-center mb-6">
                <Scale className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Code Foncier</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {legalLaws.map((law, index) => (
                  <a
                    key={index}
                    href={law.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white rounded-lg border border-gray-200 hover:border-red-500 transition-colors group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-red-600 font-mono text-sm bg-red-100 px-2 py-1 rounded">
                        {law.year}
                      </span>
                      <div>
                        <div className="font-medium text-gray-900 group-hover:text-red-600">
                          {law.text}
                        </div>
                        <div className="text-sm text-gray-500">
                          {law.subtitle}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FoncierModal;
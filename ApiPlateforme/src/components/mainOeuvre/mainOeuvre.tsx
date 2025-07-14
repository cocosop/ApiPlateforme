import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, MapPin, GraduationCap, FileText, Shield, Calculator } from 'lucide-react';

const MainOeuvre: React.FC = () => {
  const workforceData = [
    {
      title: "Qualification de la Main d'Œuvre",
      icon: GraduationCap,
      color: "from-green-500 to-green-600",
      stats: [
        { label: "Alphabétisation", value: "71.2%", detail: "15 ans et plus" },
        { label: "Hommes", value: "78.2%", detail: "alphabétisés" },
        { label: "Femmes", value: "64.7%", detail: "alphabétisées" },
        { label: "Primaire", value: "78.8%", detail: "taux net scolarisation" },
        { label: "Secondaire", value: "49.3%", detail: "taux net scolarisation" }
      ],
      details: {
        education: [
          { level: "Non scolarisés", percentage: 33.7 },
          { level: "Niveau primaire", percentage: 35.7 },
          { level: "Niveau secondaire", percentage: 26.0 },
          { level: "Niveau supérieur", percentage: 4.6 }
        ],
        formation: [
          { type: "Apprentissage sur le tas", percentage: 39.3 },
          { type: "Formation centres spécialisés", percentage: 19.1 },
          { type: "Diplômes niveau supérieur", percentage: 16.7 }
        ]
      }
    },
    {
      title: "Salaires et Conditions",
      icon: TrendingUp,
      color: "from-blue-500 to-blue-600",
      stats: [
        { label: "SMIG", value: "36,270 FCFA", detail: "55.3 € / mois" },
        { label: "Cadres", value: "267k - 457k", detail: "FCFA / mois" },
        { label: "Employés", value: "129k - 325k", detail: "FCFA / mois" },
        { label: "Ouvriers", value: "40k - 134k", detail: "FCFA / mois" }
      ],
      workConditions: {
        workWeek: "48 heures",
        rest: "24 heures par semaine",
        vacation: "30 jours par an",
        minAge: "16 ans"
      }
    },
    {
      title: "Types de Contrats",
      icon: FileText,
      color: "from-yellow-500 to-yellow-600",
      contracts: [
        {
          type: "Contrat à Durée Déterminée",
          duration: "12 mois max (renouvelable une fois)",
          trial: "15 jours à 3 mois selon poste"
        },
        {
          type: "Contrat à Durée Indéterminée",
          duration: "Temps plein ou partiel",
          trial: "15 jours à 3 mois selon poste"
        }
      ],
      termination: [
        "Faute lourde",
        "Force majeure",
        "Difficultés économiques",
        "Décision judiciaire",
        "Accord écrit des parties"
      ]
    },
    {
      title: "Cotisations Sociales",
      icon: Shield,
      color: "from-purple-500 to-purple-600",
      socialContributions: [
        {
          branch: "Prestations familiales",
          rates: [
            { regime: "Général", rate: "7%" },
            { regime: "Agricole", rate: "5.65%" },
            { regime: "Enseignement privé", rate: "3.7%" },
            { regime: "Domestique", rate: "7%" }
          ],
          paidBy: "Employeur uniquement"
        },
        {
          branch: "Risques professionnels",
          rates: [
            { regime: "Groupe A (faibles)", rate: "1.75%" },
            { regime: "Groupe B (moyens)", rate: "2.50%" },
            { regime: "Groupe C (élevés)", rate: "5%" }
          ],
          paidBy: "Employeur uniquement"
        },
        {
          branch: "Pension vieillesse",
          rates: [
            { regime: "Total", rate: "8.4%" },
            { regime: "Employeur", rate: "4.2%" },
            { regime: "Travailleur", rate: "4.2%" }
          ],
          ceiling: "750,000 FCFA/mois"
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Main d'Œuvre</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les atouts, salaires, contrats et protections sociales de la main d'œuvre camerounaise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Qualification Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Qualification</h3>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {workforceData[0].stats?.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                    <div className="text-xs text-gray-500">{stat.detail}</div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Répartition par niveau d'éducation</h4>
                <div className="space-y-2">
                  {workforceData[0].details?.education?.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{item.level}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">{item.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Salaires Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Salaires</h3>
            </div>

            <div className="space-y-6">
              <div className="text-center p-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white">
                <p className="text-3xl font-bold">36,270 FCFA</p>
                <p className="text-blue-100">(55,3 €)</p>
                <p className="text-sm mt-2 text-blue-200">Salaire minimum depuis 2014</p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="font-semibold text-green-800">Cadres</span>
                  <span className="text-green-600 font-bold">267k - 457k FCFA</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                  <span className="font-semibold text-yellow-800">Employés</span>
                  <span className="text-yellow-600 font-bold">129k - 325k FCFA</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className="font-semibold text-red-800">Ouvriers</span>
                  <span className="text-red-600 font-bold">40k - 134k FCFA</span>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Conditions de travail</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Durée légale : 48h/semaine</li>
                  <li>• Repos : 24h/semaine</li>
                  <li>• Congés : 30 jours/an</li>
                  <li>• Âge minimum : 16 ans</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cotisations Sociales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Cotisations Sociales</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">7%</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Prestations Familiales</h4>
              <p className="text-sm text-gray-600">À charge de l'employeur</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '35%' }}></div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-yellow-600">1.75%</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Risques Professionnels</h4>
              <p className="text-sm text-gray-600">Groupe A (faibles risques)</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '17.5%' }}></div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-purple-600">8.4%</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Pension Vieillesse</h4>
              <p className="text-sm text-gray-600">4.2% employeur + 4.2% employé</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Plafond des cotisations</h4>
            <p className="text-blue-700">750,000 FCFA par mois pour les prestations familiales et pensions</p>
          </div>
        </motion.div>

        {/* Contrats et Expatriés */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-yellow-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Types de Contrats</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50">
                <h4 className="font-semibold text-yellow-800">Durée Déterminée</h4>
                <p className="text-sm text-yellow-700 mt-1">
                  Maximum 12 mois, renouvelable une fois
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-green-500 bg-green-50">
                <h4 className="font-semibold text-green-800">Durée Indéterminée</h4>
                <p className="text-sm text-green-700 mt-1">
                  Temps plein ou partiel, période d'essai variable
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Période d'essai</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Employés/ouvriers payés à l'heure : 15 jours</li>
                  <li>• Employés/ouvriers payés au mois : 1 mois</li>
                  <li>• Cadres et assimilés : 3 mois</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <MapPin className="h-8 w-8 text-purple-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Travailleurs Expatriés</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Conditions</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Aucun quota fixé</li>
                  <li>• Compétence indisponible localement</li>
                  <li>• Assujettissement à la sécurité sociale</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Assurance volontaire</h4>
                <p className="text-sm text-blue-700">
                  Disponible depuis 2014 pour travailleurs indépendants et étudiants (dès 14 ans)
                </p>
                <p className="text-sm text-blue-600 font-medium mt-1">
                  Cotisation : 8.4% du revenu mensuel
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MainOeuvre;
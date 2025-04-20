import { Disclosure, Transition } from '@headlessui/react';
interface FiscalitePageProps {
  id?: string; // La prop id est optionnelle
}
const FiscalitePage: React.FC<FiscalitePageProps> = ({ id }) => {
  const colors = {
    primary: '#0F0B60',
    secondary: '#0E600B',
    accent: '#DC2123',
    highlight: '#F5BA3A'
  };

  return (
    <div id={id} className="min-h-screen bg-transport p-8">
      {/* Slider Section */}
      <div data-aos="fade-up" className="flex flex-col items-center mb-6">
        <h2 className="text-3xl font-bold text-center mb-4 mt-0 text-[#0F0B60]">
          Fiscalité
        </h2>
        <span className="block w-96 h-1 bg-[#0F0B60]"></span> {/* Ajustez la largeur ici */}
      </div>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Régimes d'imposition */}
        <Disclosure>
          {({ open }) => (
            <div
              className="bg-white rounded-xl shadow-lg border-l-8 p-4"
              style={{ borderColor: colors.secondary }}
            >
              <Disclosure.Button className="w-full text-left">
                <div className="flex justify-between items-center">
                  <h2 className="text-sm font-bold" style={{ color: colors.primary }}>
                    Régimes d'imposition
                  </h2>
                  <span
                    className={`transform transition-transform ${open ? 'rotate-180' : ''}`}
                    style={{ color: colors.accent, fontSize: '1rem' }}
                  >
                    ▼
                  </span>
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-200 ease-out"
                enterFrom="opacity-0 -translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition duration-150 ease-out"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-2"
              >
                <Disclosure.Panel className="pt-4 space-y-4 border-t mt-2">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold" style={{ color: colors.accent }}>Impôt Libératoire</h3>
                      <ul className="list-disc pl-4 space-y-1 text-gray-700 text-sm">
                        <li>CA annuel &lt; 10M FCFA</li>
                        <li>Secteurs : baby-foot (&lt;10 machines), flippers/jeux vidéo (&lt;5)</li>
                        <li>Paiement trimestriel</li>
                        <li>Dispense de TVA et patente</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold" style={{ color: colors.accent }}>Régime Simplifié (RSI)</h3>
                      <ul className="list-disc pl-4 space-y-1 text-gray-700 text-sm">
                        <li>CA annuel : 10M à 50M FCFA</li>
                        <li>Comptabilité allégée OHADA</li>
                        <li>Option possible pour le régime réel à partir de 30M FCFA</li>
                        <li>Ne collectent pas la TVA</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold" style={{ color: colors.accent }}>Régime Réel</h3>
                      <ul className="list-disc pl-4 space-y-1 text-gray-700 text-sm">
                        <li>CA annuel ≥ 50M FCFA</li>
                        <li>Obligatoire pour professions libérales</li>
                        <li>Comptabilité normale OHADA</li>
                        <li>Seuls à collecter/déduire la TVA</li>
                      </ul>
                    </div>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </div>
          )}
        </Disclosure>
        {/* Fiscalité Locale */}
        <Disclosure>
          {({ open }) => (
            <div className="bg-white rounded-xl shadow-lg border-l-8 p-4" style={{ borderColor: colors.accent }}>
              <Disclosure.Button className="w-full text-left">
                <div className="flex justify-between items-center">
                  <h2 className="text-sm font-bold" style={{ color: colors.primary }}>Fiscalité Locale</h2>
                  <span className={`transform transition-transform ${open ? 'rotate-180' : ''}`} style={{ color: colors.accent, fontSize: '1.2rem' }}>▼</span>
                </div>
              </Disclosure.Button>

              <Transition
                enter="transition duration-150 ease-out"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition duration-100 ease-out"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Disclosure.Panel className="pt-4 space-y-4 border-t mt-2">
                  {[
                    { title: 'Patente', items: ['1% du chiffre d\'affaires', 'Déclaration sous 2 mois du démarrage', 'Paiement annuel (sauf transporteurs : trimestriel)'] },
                    { title: 'Licence', items: ['Boissons alcoolisées : 4x patente', 'Boissons non-alcoolisées : 2x patente', 'Calcul annuel personnalisé'] },
                    { title: 'Taxe sur le Bétail', items: ['200 FCFA/tête de bovin', 'Exemptions : animaux de labour', 'Recensement annuel obligatoire'] }
                  ].map((section, index) => (
                    <div key={index} className="space-y-1">
                      <h3 className="text-sm font-semibold" style={{ color: colors.accent }}>{section.title}</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {section.items.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                  ))}
                </Disclosure.Panel>
              </Transition>
            </div>
          )}
        </Disclosure>
        {/* TVA & Droits Spéciaux */}
        <Disclosure>
          {({ open }) => (
            <div className="bg-white rounded-xl shadow-lg border-l-8 p-4" style={{ borderColor: colors.highlight }}>
              <Disclosure.Button className="w-full text-left">
                <div className="flex justify-between items-center">
                  <h2 className="text-sm font-bold" style={{ color: colors.primary }}>
                    TVA & Droits Spéciaux
                  </h2>
                  <span
                    className={`transform transition-transform ${open ? 'rotate-180' : ''}`}
                    style={{ color: colors.accent, fontSize: '1.2rem' }}
                  >
                    ▼
                  </span>
                </div>
              </Disclosure.Button>

              <Transition
                enter="transition duration-150 ease-out"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition duration-100 ease-out"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Disclosure.Panel className="pt-4 space-y-4 border-t mt-2">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Taux Normal</span>
                      <span
                        className="px-3 py-1 rounded-full font-bold"
                        style={{ backgroundColor: colors.highlight, color: colors.primary }}
                      >
                        19.25%
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">(17.5% TVA + 1.75% CAC)</p>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold" style={{ color: colors.accent }}>Exonérations</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Exportations</li>
                      <li>Zones Franches Industrielles</li>
                      <li>Services éducatifs</li>
                    </ul>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold" style={{ color: colors.accent }}>Droit d'Accise</h3>
                    <div className="grid md:grid-cols-2 gap-2">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="font-medium">Boissons alcoolisées</div>
                        <div className="mt-1" style={{ color: colors.secondary }}>
                          Abattement : 35%
                        </div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="font-medium">Tabacs</div>
                        <div className="mt-1" style={{ color: colors.secondary }}>
                          Abattement : 42.5%
                        </div>
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </div>
          )}
        </Disclosure>
        {/* Douanes */}
        <Disclosure>
          {({ open }) => (
            <div className="bg-white rounded-xl shadow-lg border-l-8 p-4" style={{ borderColor: colors.primary }}>
              <Disclosure.Button className="w-full text-left">
                <div className="flex justify-between items-center">
                  <h2 className="text-sm font-bold" style={{ color: colors.primary }}>
                    Régimes Douaniers
                  </h2>
                  <span
                    className={`transform transition-transform ${open ? 'rotate-180' : ''}`}
                    style={{ color: colors.accent, fontSize: '1.2rem' }}
                  >
                    ▼
                  </span>
                </div>
              </Disclosure.Button>

              <Transition
                enter="transition duration-150 ease-out"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition duration-100 ease-out"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Disclosure.Panel className="pt-4 space-y-4 border-t mt-2">
                  <div className="space-y-2">
                    <h3 className="font-semibold" style={{ color: colors.accent }}>Tarif Extérieur Commun</h3>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="font-medium">Biens essentiels</span>
                        <div className="flex items-center gap-1">
                          <span>Taux :</span>
                          <span style={{ color: colors.secondary }}>5%</span>
                        </div>
                      </div>
                      <div>
                        <span className="font-medium">Biens consommation</span>
                        <div className="flex items-center gap-1">
                          <span>Taux :</span>
                          <span style={{ color: colors.secondary }}>30%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-semibold" style={{ color: colors.accent }}>Procédures</h3>
                    <ul className="list-disc pl-5 space-y-1 text-xs">
                      <li>Déclaration sous 24h après arrivée</li>
                      <li>Manifeste de cargaison obligatoire</li>
                      <li>Contrôle physique des marchandises</li>
                    </ul>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </div>
          )}
        </Disclosure>
        {/* Impôt Sociétés */}
        <Disclosure>
          {({ open }) => (
            <div className="bg-white rounded-xl shadow-lg border-l-8 p-4" style={{ borderColor: colors.accent }}>
              <Disclosure.Button className="w-full text-left">
                <div className="flex justify-between items-center">
                  <h2 className="text-sm font-bold" style={{ color: colors.primary }}>
                    Impôt sur les Sociétés
                  </h2>
                  <span
                    className={`transform transition-transform ${open ? 'rotate-180' : ''}`}
                    style={{ color: colors.accent, fontSize: '1.2rem' }}
                  >
                    ▼
                  </span>
                </div>
              </Disclosure.Button>

              <Transition
                enter="transition duration-150 ease-out"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition duration-100 ease-out"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Disclosure.Panel className="pt-4 space-y-4 border-t mt-2">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Taux Normal</span>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-bold"
                        style={{ backgroundColor: colors.highlight, color: colors.primary }}
                      >
                        33%
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">(30% IS + 3% CAC)</p>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-semibold" style={{ color: colors.accent }}>Acomptes</h3>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="font-medium">Régime réel</span>
                        <div className="flex items-center gap-1">
                          <span>Taux :</span>
                          <span style={{ color: colors.secondary }}>2.2% CA</span>
                        </div>
                      </div>
                      <div>
                        <span className="font-medium">RSI</span>
                        <div className="flex items-center gap-1">
                          <span>Taux :</span>
                          <span style={{ color: colors.secondary }}>5.5% CA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </div>
          )}
        </Disclosure>
        {/* Taxe Foncière */}
        <Disclosure>
          {({ open }) => (
            <div className="bg-white rounded-xl shadow-lg border-l-8 p-4" style={{ borderColor: colors.highlight }}>
              <Disclosure.Button className="w-full text-left">
                <div className="flex justify-between items-center">
                  <h2 className="text-sm font-bold" style={{ color: colors.primary }}>
                    Taxe Foncière
                  </h2>
                  <span
                    className={`transform transition-transform ${open ? 'rotate-180' : ''}`}
                    style={{ color: colors.accent, fontSize: '1.2rem' }}
                  >
                    ▼
                  </span>
                </div>
              </Disclosure.Button>

              <Transition
                enter="transition duration-150 ease-out"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition duration-100 ease-out"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Disclosure.Panel className="pt-4 space-y-4 border-t mt-2">
                  <div className="space-y-2">
                    <h3 className="font-semibold" style={{ color: colors.accent }}>Calcul</h3>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 rounded-lg bg-gray-50">
                        <div className="font-medium mb-1">Propriétaire</div>
                        <div style={{ color: colors.secondary }}>0.11% × (terrain + bâtiments)</div>
                      </div>
                      <div className="p-2 rounded-lg bg-gray-50">
                        <div className="font-medium mb-1">Locataire</div>
                        <div style={{ color: colors.secondary }}>5-10% loyer annuel + 50% précompte</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-semibold" style={{ color: colors.accent }}>Paiement</h3>
                    <ul className="list-disc pl-5 space-y-1 text-xs">
                      <li>Date limite : 15 mars</li>
                      <li>Sanctions pour retard</li>
                      <li>Exonérations partielles possibles</li>
                    </ul>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </div>
          )}
        </Disclosure>



        {/* Ajouter les autres sections ici avec le même pattern */}

      </div>
      {/* Tableau des Tarifs Douaniers */}
      <div className="max-w-4xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-xl font-bold mb-6" style={{ color: colors.primary }}>
          Tarifs Douaniers CEMAC
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr
                className="text-left border-b-2"
                style={{ borderColor: colors.primary }}              >
                <th className="pb-3">Catégorie</th>
                <th className="pb-3">Taux</th>
                <th className="pb-3">Base de calcul</th>
                <th className="pb-3">Exemples</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 font-medium">Biens de première nécessité</td>
                <td className="py-3" style={{ color: colors.secondary }}>5%</td>
                <td className="py-3 text-gray-600">Valeur en douane</td>
                <td className="py-3 text-gray-600">Médicaments, produits de base</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-medium">Matières premières</td>
                <td className="py-3" style={{ color: colors.secondary }}>10%</td>
                <td className="py-3 text-gray-600">Valeur EXW</td>
                <td className="py-3 text-gray-600">Acier, produits agricoles bruts</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-medium">Biens intermédiaires</td>
                <td className="py-3" style={{ color: colors.secondary }}>20%</td>
                <td className="py-3 text-gray-600">Valeur CAF</td>
                <td className="py-3 text-gray-600">Pièces automobiles, composants</td>
              </tr>
              <tr>
                <td className="py-3 font-medium">Biens de consommation</td>
                <td className="py-3" style={{ color: colors.secondary }}>30%</td>
                <td className="py-3 text-gray-600">Valeur totale</td>
                <td className="py-3 text-gray-600">Électronique, véhicules</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FiscalitePage;
import { Disclosure, Transition } from '@headlessui/react';
import CACAO from "../../../assets/img/cacao4.png"
import ENERGIE from "../../../assets/img/energie.jpg"
import { useState } from 'react';
import ProjectCard from '../../../components/projetCard/projetCard';
import { NavLink } from 'react-router-dom';
import oeuvre from "../../../assets/img/fiscal.jpg"
import { motion } from 'framer-motion';
import BreadcrumbsComponent from '../../../components/breadcrumbsComponent/breadcrumbsComponent';

const FiscalitePage = () => {
  const [projects] = useState([
    {
      id: 1,
      secteur: "Agro-industrie",
      titre: "Exploitation de plantation de cacao",
      ville: "Douala",
      quartier: "Bonaberi",
      description: "Mise en place d'une plantation moderne de cacao avec une production annuelle de 50 tonnes.",
      image: CACAO,
      latitude: 4.0511, // Ajoutez cette propriété
      longitude: 9.7679, // Ajoutez cette propriété
    },
    {
      id: 2,
      secteur: "Énergie",
      titre: "Parc solaire de 20 MW",
      ville: "Garoua",
      quartier: "Ngaoundere route",
      description: "Construction d'un parc solaire pour fournir de l'énergie propre à la région du Nord.",
      image: ENERGIE,
      latitude: 4.0511, // Ajoutez cette propriété
      longitude: 9.7679, // Ajoutez cette propriété
    },
    {
      id: 3,
      secteur: "Numérique",
      titre: "Plateforme de paiement mobile",
      ville: "Yaoundé",
      quartier: "Bastos",
      description: "Développement d'une application de paiement mobile visant à faciliter les transactions financières locales.",
      image: "https://img.freepik.com/free-photo/high-angle-friends-reading-menu-restaurant_23-2150384825.jpg?t=st=1738099850~exp=1738103450~hmac=263dee2608a764be0cc905367387bf817f98c3b6a3df41a0103a348fa8777175&w=996",
      latitude: 4.0511, // Ajoutez cette propriété
      longitude: 9.7679, // Ajoutez cette propriété
    }
    // Ajoutez plus de projets ici...
  ]);

  const colors = {
    primary: '#0F0B60',
    secondary: '#0E600B',
    accent: '#DC2123',
    highlight: '#F5BA3A'
  };


  return (
    <div>

      <div>
        <div className="relative isolate overflow-hidden bg-green-900 py-24 sm:py-32">
          <img src={oeuvre} alt="" className="absolute inset-0 z-10 size-full object-cover object-right md:object-center opacity-30" />
          <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#0E600B] to-[#F5BA3A] opacity-20"></div>
          </div>
          <div className="absolute -top-52 left-1/2 z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#0E600B] to-[#F5BA3A] opacity-30"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-white">
              Fiscalité au Cameroun
            </h1>
            <p className="text-lg text-white">
              Panorama complet des régimes fiscaux, taxes douanières et obligations légales pour les investisseurs
            </p>
          </motion.div>
        </div>
      </div>
      <div aria-label="Breadcrumbs" className="bg-gray-50 sticky top-24 z-10 flex align-center space-x-2 text-sm font-semibold p-4 lg:p-6 border-spacing-1 overflow-scroll">
        <BreadcrumbsComponent
          breadcrumbs={[
            { name: 'Accueil', path: '/' },
            { name: "Guide de l'investisseur", path: '#' },
            { name: "Fiscalité", path: '#' }
          ]}
        />
      </div>
      <div className="min-h-screen bg-gray-50 p-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto space-y-6">
          {/* Régimes d'imposition */}
          <Disclosure>
            {({ open }) => (
              <div
                className="bg-white rounded-xl shadow-lg border-l-8 p-6"
                style={{ borderColor: colors.secondary }}
              >
                <Disclosure.Button className="w-full text-left">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>
                      Régimes d'imposition
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
                  enter="transition duration-200 ease-out"
                  enterFrom="opacity-0 -translate-y-2"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition duration-150 ease-out"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-2"
                >
                  <Disclosure.Panel className="pt-6 space-y-6 border-t mt-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold" style={{ color: colors.accent }}>Impôt Libératoire</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                          <li>CA annuel &lt; 10M FCFA</li>
                          <li>Secteurs : baby-foot (&lt;10 machines), flippers/jeux vidéo (&lt;5)</li>
                          <li>Paiement trimestriel</li>
                          <li>Dispense de TVA et patente</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold" style={{ color: colors.accent }}>Régime Simplifié (RSI)</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                          <li>CA annuel : 10M à 50M FCFA</li>
                          <li>Comptabilité allégée OHADA</li>
                          <li>Option possible pour le régime réel à partir de 30M FCFA</li>
                          <li>Ne collectent pas la TVA</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold" style={{ color: colors.accent }}>Régime Réel</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
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
              <div
                className="bg-white rounded-xl shadow-lg border-l-8 p-6"
                style={{ borderColor: colors.accent }}
              >
                <Disclosure.Button className="w-full text-left">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>
                      Fiscalité Locale
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
                  enter="transition duration-200 ease-out"
                  enterFrom="opacity-0 -translate-y-2"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition duration-150 ease-out"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-2"
                >
                  <Disclosure.Panel className="pt-6 space-y-6 border-t mt-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold" style={{ color: colors.accent }}>Patente</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                          <li>1% du chiffre d'affaires</li>
                          <li>Déclaration sous 2 mois du démarrage</li>
                          <li>Paiement annuel (sauf transporteurs : trimestriel)</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold" style={{ color: colors.accent }}>Licence</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                          <li>Boissons alcoolisées : 4x patente</li>
                          <li>Boissons non-alcoolisées : 2x patente</li>
                          <li>Calcul annuel personnalisé</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold" style={{ color: colors.accent }}>Taxe sur le Bétail</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                          <li>200 FCFA/tête de bovin</li>
                          <li>Exemptions : animaux de labour</li>
                          <li>Recensement annuel obligatoire</li>
                        </ul>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>

          {/* TVA & Droits Spéciaux */}
          <Disclosure>
            {({ open }) => (
              <div
                className="bg-white rounded-xl shadow-lg border-l-8 p-6"
                style={{ borderColor: colors.highlight }}
              >
                <Disclosure.Button className="w-full text-left">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>
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
                  enter="transition duration-200 ease-out"
                  enterFrom="opacity-0 -translate-y-2"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition duration-150 ease-out"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-2"
                >
                  <Disclosure.Panel className="pt-6 space-y-6 border-t mt-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Taux Normal</span>
                          <span
                            className="px-4 py-2 rounded-full font-bold"
                            style={{ backgroundColor: colors.highlight, color: colors.primary }}
                          >
                            19.25%
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">(17.5% TVA + 1.75% CAC)</p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold" style={{ color: colors.accent }}>Exonérations</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                          <li>Exportations</li>
                          <li>Zones Franches Industrielles</li>
                          <li>Services éducatifs</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold" style={{ color: colors.accent }}>Droit d'Accise</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <div className="font-medium">Boissons alcoolisées</div>
                            <div className="mt-2" style={{ color: colors.secondary }}>
                              Abattement : 35%
                            </div>
                          </div>
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <div className="font-medium">Tabacs</div>
                            <div className="mt-2" style={{ color: colors.secondary }}>
                              Abattement : 42.5%
                            </div>
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
              <div
                className="bg-white rounded-xl shadow-lg border-l-8 p-6"
                style={{ borderColor: colors.primary }}
              >
                <Disclosure.Button className="w-full text-left">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>
                      Régimes Douaniers                  </h2>
                    <span
                      className={`transform transition-transform ${open ? 'rotate-180' : ''}`}
                      style={{ color: colors.accent, fontSize: '1.2rem' }}
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
                  <Disclosure.Panel className="pt-6 space-y-6 border-t mt-4">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="font-semibold" style={{ color: colors.accent }}>Tarif Extérieur Commun</h3>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="font-medium">Biens essentiels</span>
                            <div className="flex items-center gap-2">
                              <span>Taux :</span>
                              <span style={{ color: colors.secondary }}>5%</span>
                            </div>
                          </div>
                          <div>
                            <span className="font-medium">Biens consommation</span>
                            <div className="flex items-center gap-2">
                              <span>Taux :</span>
                              <span style={{ color: colors.secondary }}>30%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold" style={{ color: colors.accent }}>Procédures</h3>
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                          <li>Déclaration sous 24h après arrivée</li>
                          <li>Manifeste de cargaison obligatoire</li>
                          <li>Contrôle physique des marchandises</li>
                        </ul>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
          {/* Impôt Sociétés */}
          <Disclosure>
            {({ open }) => (
              <div
                className="bg-white rounded-xl shadow-lg border-l-8 p-6"
                style={{ borderColor: colors.accent }}
              >
                <Disclosure.Button className="w-full text-left">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>
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
                  enter="transition duration-200 ease-out"
                  enterFrom="opacity-0 -translate-y-2"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition duration-150 ease-out"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-2"
                >
                  <Disclosure.Panel className="pt-6 space-y-6 border-t mt-4">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Taux Normal</span>
                          <span
                            className="px-3 py-1 rounded-full text-sm font-bold"
                            style={{ backgroundColor: colors.highlight, color: colors.primary }}
                          >
                            33%
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">(30% IS + 3% CAC)</p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold" style={{ color: colors.accent }}>Acomptes</h3>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="font-medium">Régime réel</span>
                            <div className="flex items-center gap-2">
                              <span>Taux :</span>
                              <span style={{ color: colors.secondary }}>2.2% CA</span>
                            </div>
                          </div>
                          <div>
                            <span className="font-medium">RSI</span>
                            <div className="flex items-center gap-2">
                              <span>Taux :</span>
                              <span style={{ color: colors.secondary }}>5.5% CA</span>
                            </div>
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
              <div
                className="bg-white rounded-xl shadow-lg border-l-8 p-6"
                style={{ borderColor: colors.highlight }}
              >
                <Disclosure.Button className="w-full text-left">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>
                      Taxe Foncière                  </h2>
                    <span
                      className={`transform transition-transform ${open ? 'rotate-180' : ''}`}
                      style={{ color: colors.accent, fontSize: '1.2rem' }}
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
                  <Disclosure.Panel className="pt-6 space-y-6 border-t mt-4">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="font-semibold" style={{ color: colors.accent }}>Calcul</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="p-3 rounded-lg bg-gray-50">
                            <div className="font-medium mb-1">Propriétaire</div>
                            <div style={{ color: colors.secondary }}>0.11% × (terrain + bâtiments)</div>
                          </div>
                          <div className="p-3 rounded-lg bg-gray-50">
                            <div className="font-medium mb-1">Locataire</div>
                            <div style={{ color: colors.secondary }}>5-10% loyer annuel + 50% précompte</div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold" style={{ color: colors.accent }}>Paiement</h3>
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                          <li>Date limite : 15 mars</li>
                          <li>Sanctions pour retard</li>
                          <li>Exonérations partielles possibles</li>
                        </ul>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>


          {/* Ajouter les autres sections ici avec le même pattern */}

        </motion.div>

        {/* Tableau des Tarifs Douaniers */}
        {/* Tableau des Tarifs Douaniers */}
        <div className="max-w-4xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6" style={{ color: colors.primary }}>
            Tarifs Douaniers CEMAC
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr
                  className="text-left border-b-2"
                  style={{ borderColor: colors.primary }}
                >
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
        <div className="container mx-auto p-6">
          {/* Titre avec style attractif */}
          <h2 className="text-3xl font-bold text-center text-[#0F0B60]">
            Saisissez des Opportunités Uniques !
          </h2>

          {/* Barre de séparation */}
          <div className="w-24 h-1 bg-[#0F0B60] mx-auto my-4 rounded-full"></div>

          {/* Message d'encouragement */}
          <p className="text-center text-gray-700 mb-6">
            Investissez dès aujourd’hui dans des projets innovants et rentables pour bâtir l’avenir de l’économie camerounaise.
          </p>

          {/* Liste des projets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {/* Lien Voir plus */}
          <div className="flex justify-center mt-8">
            <NavLink
              to="/projets"
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold shadow-md hover:bg-green-700 transition-all"
            >
              Voir plus de projets
            </NavLink>
          </div>
        </div>
      </div>
    </div>

  );
};

export default FiscalitePage;

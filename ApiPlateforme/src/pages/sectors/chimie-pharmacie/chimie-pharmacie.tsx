import ActionButtonComponent from '../../../components/actionButtonComponent/actionButtonComponent';
import { BuildingOfficeIcon } from "@heroicons/react/20/solid";
import { LinkIcon, BeakerIcon, CogIcon } from "lucide-react";
import { motion } from "framer-motion";
import BreadcrumbsComponent from "../../../components/breadcrumbsComponent/breadcrumbsComponent";

const statistiques = [
    { id: 1, name: "Pôles de Compétitivité", value: "5+", icon: BuildingOfficeIcon },
    { id: 2, name: "Filières Intégrées", value: "3", icon: LinkIcon },
    { id: 3, name: "Médicaments Génériques", value: "100+", icon: BeakerIcon },
    { id: 4, name: "Entreprises Modernisées", value: "50+", icon: CogIcon }
]

const ChimiePharmacie = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://media.istockphoto.com/id/658148844/fr/photo/laboratoire-de-recherche.jpg?b=1&s=612x612&w=0&k=20&c=n2lc6eC_wUt2zJu3KYcOyp4tQc3v1EQBuwoes6Svbzc="
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-50"
                    alt="Background"
                />
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-start text-white px-6 lg:px-24">
                    <h1 className="text-4xl font-bold">Pilier Chimie &bull; Pharmacie</h1>
                    <p className="mt-4 text-lg max-w-2xl">
                        Le pilier Chimie & Pharmacie vise à transformer les ressources naturelles en produits à haute valeur ajoutée, tout en favorisant l'innovation et la recherche dans les domaines de la chimie et de la pharmacie. Ce secteur stratégique est essentiel pour le développement économique et industriel du pays.
                    </p>
                    <div className="mt-6 py-2">
                        <ActionButtonComponent
                            title="Explorez les opportunités"
                            color="#A020F0"
                            filterSecteur="Chimie et Pharmacie"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Breadcrumbs */}
            <div aria-label="Breadcrumbs" className="bg-gray-50 sticky top-24 z-10 flex align-center space-x-2 text-sm font-semibold p-4 lg:p-6 border-spacing-1 overflow-scroll">
                <BreadcrumbsComponent
                    breadcrumbs={[
                        { name: 'Accueil', path: '/' },
                        { name: "Sections et Opportunités", path: '#' },
                        { name: "Pilier Chimie/Pharmacie", path: '#' }
                    ]}
                />
            </div>

            {/* Objectif Section */}
            <div className="bg-white py-20 sm:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Objectif Stratégique</h2>
                    <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
                        Développer et faire émerger un tissu d’industries du secteur chimique hautement intégrées à l’économie nationale.
                    </p>
                </motion.div>
            </div>
            {/* Section Principale */}
            <div className="overflow-hidden bg-purple-50 py-20 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl font-bold text-center mb-8">Nos Actions</motion.h2>

                    {/* Cartes Thématiques */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">

                        {/* Compétitivité et Innovation */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://media.istockphoto.com/id/1190347732/fr/photo/concept-de-lindustrie-4-0-robot-ramasse-le-produit-de-la-voiture-automatis%C3%A9e-sur-la-ligne-de.webp?a=1&s=612x612&w=0&k=20&c=Xrvte_I_OkqwtvCy2b-O1iK_1KtXwJiHBS0csk6BJBw="
                                    alt="Compétitivité et Innovation"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Compétitivité et Innovation</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Amélioration de la compétitivité-coûts</li>
                                    <li>Groupements d'achats et filières intégrées (agrochimie)</li>
                                    <li>Création de pôles de compétitivité (clusters)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Modernisation des Entreprises */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaX4jYrbeg45VmPF0TFOCrPUbYJUb37xAuzA&s"
                                    alt="Modernisation des Entreprises"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Modernisation des Entreprises</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Mise à niveau des entreprises (QHSE)</li>
                                    <li>Innovation, production et vente</li>
                                    <li>Maîtrise des fondamentaux industriels</li>
                                </ul>
                            </div>
                        </div>

                        {/* État Pro-Business */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://img.freepik.com/photos-gratuite/travailleuse-afro-americaine-faisant-inventaire-colis-organisant-calendrier-livraison-tablette-numerique-sa-collegue-travaille-arriere-plan_637285-2227.jpg?ga=GA1.1.1625797867.1700058386&semt=ais_hybrid"
                                    alt="État Pro-Business"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">État Pro-Business</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Amélioration des conditions logistiques</li>
                                    <li>Développement des infrastructures</li>
                                    <li>Création d'un environnement favorable à la chimie</li>
                                </ul>
                            </div>
                        </div>

                        {/* Filières Intégrées */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://img.freepik.com/photos-gratuite/vaccin-3d-contre-coronavirus_23-2148963960.jpg"
                                    alt="Filières Intégrées"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Filières Intégrées</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Pétrochimie-Plasturgie</li>
                                    <li>Oléochimie et Chimie Verte</li>
                                </ul>
                            </div>
                        </div>

                        {/* Industrie Pharmaceutique */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Industrie Pharmaceutique"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Industrie Pharmaceutique</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Priorité aux médicaments génériques et essentiels</li>
                                    <li>Développement des médicaments traditionnels</li>
                                    <li>Émergence d'une industrie pharmaceutique locale</li>
                                </ul>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>

            {/* Indicateurs Clés */}
            <div className="bg-white py-20 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl font-bold text-center mb-8">Chiffres Clés</motion.h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {statistiques.map((stat, index) => (
                            <motion.div
                                key={stat.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                                <div className="flex justify-center">
                                    <stat.icon className="h-12 w-12 text-[#A020F0]" />
                                </div>
                                <p className="mt-4 text-3xl font-bold text-gray-900">{stat.value}</p>
                                <p className="mt-2 text-lg text-gray-600">{stat.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChimiePharmacie;
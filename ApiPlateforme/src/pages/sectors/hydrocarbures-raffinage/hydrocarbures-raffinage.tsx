
import { NavLink } from "react-router-dom";
import ActionButtonComponent from '../../../components/actionButtonComponent/actionButtonComponent';
import { CubeIcon, FireIcon } from "@heroicons/react/20/solid";
import { LeafIcon, TrafficCone } from "lucide-react";
import { motion } from "framer-motion";

const statistiques = [
    { id: 1, name: "Gaz Distribué", value: "50%+", icon: FireIcon },
    { id: 2, name: "Biocarburants", value: "2ème Gén.", icon: LeafIcon },
    { id: 3, name: "Pipeline", value: "500 km", icon: TrafficCone },
    { id: 4, name: "Réserves Valor.", value: "6 Minéraux", icon: CubeIcon }
]

const HydrocaburesRaffinage = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://img.freepik.com/photos-gratuite/usine-moderne-dans-zone-industrielle-sous-ciel-bleu_181624-6369.jpg?t=st=1738415551~exp=1738419151~hmac=6298745f4be4f2ae0b1e5818036321fd9206a6fc0a7a40335126a535832db728&w=740"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-50"
                    alt="Background"
                />
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-start text-white px-6 lg:px-24">
                    <h1 className="text-4xl font-bold">Pilier Hydrocarbures &bull; Pétrochimie &bull; Raffinage</h1>
                    <p className="mt-4 text-lg max-w-2xl">
                        Le secteur des hydrocarbures, de la pétrochimie et du raffinage est un secteur stratégique pour le Cameroun. Il est porteur de nombreux projets d’investissement et d’opportunités d’affaires.
                    </p>
                    <div className="mt-6 py-2">
                        <ActionButtonComponent
                            title="Explorez les opportunités"
                            color="#DC2123"
                            filterSecteur="Hydrocarbures/Raffinage"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Breadcrumbs */}
            <div aria-label="Breadcrumbs" className="bg-gray-100 sticky top-24 z-10 flex align-center space-x-2 text-sm font-semibold p-6 lg:p-8 border-spacing-1 overflow-scroll">
                <NavLink className="text-slate-500 hover:text-slate-900 hover:underline" to="/">
                    Accueil
                </NavLink>
                <div aria-hidden="true" className="text-slate-400 select-none">
                    /
                </div>
                <p className="text-slate-500">Sections et Opportunités</p>
                <div aria-hidden="true" className="text-slate-400 select-none">
                    /
                </div>
                <p className="text-slate-500">Pilier Hydrocarbures&bull;Raffinage</p>
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
                        Opérer une profonde mutation dans le secteur pétrolier amont et aval, d’une part, et valoriser le potentiel par la diversification des activités pour soutenir l’industrialisation intégrée du pays, d’autre part.
                    </p>
                </motion.div>
            </div>
            {/* Section Principale */}
            <div className="overflow-hidden bg-red-50 py-20 sm:py-20">
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

                        {/* Valorisation des Ressources */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://img.freepik.com/photos-gratuite/plate-forme-petroliere-dans-ocean-coucher-soleil-derriere-elle_123827-23498.jpg?t=st=1738416888~exp=1738420488~hmac=93f655c0c6058f79e180f86a4875fe05e6039cd2e536191525e5c62516804eff&w=740"
                                    alt="Valorisation des Ressources"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Valorisation des Ressources</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Valorisation du potentiel pétrolier et gazier</li>
                                    <li>Promotion de l'exploitation des réserves minérales (Fer, Bauxite, Nickel-Cobalt, etc.)</li>
                                    <li>Fabrication de biocarburants de 2ème génération</li>
                                </ul>
                            </div>
                        </div>

                        {/* Infrastructures Énergétiques */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://img.freepik.com/photos-gratuite/pollution-exterieur-industrie-lumiere-du-jour_23-2149057680.jpg?t=st=1738416979~exp=1738420579~hmac=e73d5da6ad25b9566d165116cbf88ba27f89bc54220b68d3fc341b079ef139d7&w=740"
                                    alt="Infrastructures Énergétiques"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Infrastructures Énergétiques</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Restructuration de la SONARA</li>
                                    <li>Construction d'une usine d'engrais à Njonji</li>
                                    <li>Centre de traitement du gaz à Douala/Limbé/Kribi</li>
                                    <li>Pipeline Limbé-Douala-Bafoussam-Yaoundé</li>
                                </ul>
                            </div>
                        </div>

                        {/* Gaz Naturel et GPL */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://img.freepik.com/photos-gratuite/rendu-3d-bouteille-gaz_23-2149290463.jpg?t=st=1738417046~exp=1738420646~hmac=1c7880f9b85ff08d6659532050a744b5096a9c7348ca06af1691c3a7430ffd19&w=740"
                                    alt="Gaz Naturel et GPL"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Gaz Naturel et GPL</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Extension de la distribution du gaz à Douala</li>
                                    <li>Promotion du gaz naturel comme carburant</li>
                                    <li>Installations de stockage et chargement de GPL</li>
                                    <li>Usine flottante de liquéfaction à Kribi</li>
                                </ul>
                            </div>
                        </div>

                        {/* Centrales et Énergie Thermique */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://img.freepik.com/photos-gratuite/grande-cheminee-fumee_268835-3399.jpg?t=st=1738417109~exp=1738420709~hmac=c263d80d905547aa58d98ea0131bd8b607406267b4c9604b2d968b3680fc4778&w=360"
                                    alt="Centrales et Énergie Thermique"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Centrales et Énergie Thermique</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Extension de la centrale thermique de Kribi</li>
                                    <li>Fourniture de gaz à la centrale de Kribi</li>
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
                                    <stat.icon className="h-12 w-12 text-[#DC2123]" />
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

export default HydrocaburesRaffinage;
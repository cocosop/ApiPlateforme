
import { NavLink } from "react-router-dom";
import ActionButtonComponent from '../../../components/actionButtonComponent/actionButtonComponent';
import { CubeIcon } from "@heroicons/react/20/solid";
import { ClipboardIcon, CogIcon, ShieldCheckIcon } from "lucide-react";
import { motion } from "framer-motion";

const statistiques = [
    { id: 1, name: "Coton Transformé", value: "600K t", icon: CubeIcon },
    { id: 2, name: "Nouvelles Filatures", value: "300K t/an", icon: CogIcon },
    { id: 3, name: "Contrebande Réduite", value: "20%/an", icon: ShieldCheckIcon },
    { id: 4, name: "Commandes Publiques", value: "50%", icon: ClipboardIcon }
]

const TextileConfectionCuir = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://img.freepik.com/photos-premium/pile-textile-colore-plie-tas-tissu-tissu_344538-423.jpg?w=740"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-50"
                    alt="Background"
                />
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-start text-white px-6 lg:px-24">
                    <h1 className="text-4xl font-bold">Pilier Textile &bull; Confection &bull; Cuir</h1>
                    <p className="mt-4 text-lg max-w-2xl">
                        Le secteur du textile, de la confection et du cuir est un secteur clé de l'économie camerounaise. Il est un des principaux employeurs du pays et contribue de manière significative à la croissance économique.
                    </p>
                    <div className="mt-6 py-2">
                        <ActionButtonComponent
                            title="Explorez les opportunités"
                            color="#000000"
                            filterSecteur="Textile/Confection/Cuir"
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
                <p className="text-slate-500">Pilier Textile&bull;Confection&bull;Cuir</p>
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
                        Assurer l’industrialisation à travers la transformation et la valorisation des matières premières locales et la promotion des exportations.
                    </p>
                </motion.div>
            </div>
            {/* Section Principale */}
            <div className="overflow-hidden bg-gray-50 py-20 sm:py-20">
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

                        {/* Renforcement Industriel */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://media.istockphoto.com/id/174950853/fr/photo/denim-industrie-textile-tissage-airjet-m%C3%A9tiers-%C3%A0-tisser-recouverts-de-tissu-sur-un-jean.webp?a=1&b=1&s=612x612&w=0&k=20&c=GAgkE9Yf-XkjP9_I61H_rX23CakLnMzh7VFuxC2wTCk="
                                    alt="Renforcement Industriel"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Renforcement Industriel</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Fusion CICAM/SODECOTON</li>
                                    <li>Renouvellement des capacités industrielles</li>
                                    <li>Appui à l'installation de nouvelles unités de filature (300 000 t/an)</li>
                                    <li>Transformation de 50% de la production de coton (600 000 tonnes)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Innovation et Formation */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://img.freepik.com/photos-gratuite/couturier-travaillant-dans-atelier-couture_482257-78154.jpg?ga=GA1.1.1625797867.1700058386&semt=ais_hybrid"
                                    alt="Innovation et Formation"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Innovation et Formation</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Mise en place d'un Centre Technique du Textile</li>
                                    <li>Encadrement de la culture du coton (variétés performantes, irrigation, financement)</li>
                                    <li>Formation et renforcement technique pour l'industrie du cuir</li>
                                </ul>
                            </div>
                        </div>

                        {/* Sécurisation et Régulation */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://img.freepik.com/photos-gratuite/employe-entrepot-feminin-serieux-dans-casque-debout-pres-chariot-elevateur-parler-au-telephone-mobile-etageres-marchandises-arriere-plan-copiez-espace-concept-travail-communication_74855-14264.jpg?t=st=1738413898~exp=1738417498~hmac=81cba32b56c2852fb322d2d29f05138c4d77d73e3fc7e65a9815f2ee5107d197&w=740"
                                    alt="Sécurisation et Régulation"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Sécurisation et Régulation</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Réduction de 20% par an de la contrebande, fraude et contrefaçon</li>
                                    <li>Institution de la commande publique (50% pour les tenues de l'armée)</li>
                                    <li>Clauses de sauvegarde pour l'émergence des chaussures locales</li>
                                </ul>
                            </div>
                        </div>

                        {/* Industrie du Cuir */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://img.freepik.com/photos-gratuite/cordonnier-travaille-dans-son-atelier_641386-1147.jpg?t=st=1738414253~exp=1738417853~hmac=74ca76820e7096daa947e40623301fec7f4b077a8876a1e0ad6908874f15e63b&w=740"
                                    alt="Industrie du Cuir"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Industrie du Cuir</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Création d'un centre national de tri des cuirs</li>
                                    <li>Renforcement des tanneries existantes</li>
                                    <li>Nouvelles unités industrielles de fabrication de produits en cuir</li>
                                    <li>Redéploiement de TANICAM et NOTACAM</li>
                                </ul>
                            </div>
                        </div>

                        {/* Champions Régionaux */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://media.istockphoto.com/id/157309320/fr/photo/robe-africaine-traditionnelle.jpg?b=1&s=612x612&w=0&k=20&c=rzwwMKMcRFDSiesx6zZJzmTtklz0ML0OZLdOMdNa5Qc="
                                    alt="Champions Régionaux"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Champions Régionaux</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Création de champions régionaux dans le textile</li>
                                    <li>Sécurisation des approvisionnements en matières premières</li>
                                    <li>Renforcement de la recherche sur le cuir brut au cuir fini</li>
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
                                    <stat.icon className="h-12 w-12 text-[#000000]" />
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

export default TextileConfectionCuir;
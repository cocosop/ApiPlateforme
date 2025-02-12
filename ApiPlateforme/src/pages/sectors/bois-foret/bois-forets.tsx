import ActionButtonComponent from '../../../components/actionButtonComponent/actionButtonComponent';
import { UserGroupIcon } from "@heroicons/react/20/solid";
import { MapIcon, ScaleIcon, ShoppingCartIcon } from "lucide-react";
import { motion } from "framer-motion";
import BreadcrumbsComponent from "../../../components/breadcrumbsComponent/breadcrumbsComponent";

const statistiques = [
    { id: 1, name: "UFA Gérées par l'ONB", value: "75%", icon: MapIcon },
    { id: 2, name: "Volume MIB Régulé", value: "25m³/ha", icon: ScaleIcon },
    { id: 3, name: "Magasins SCDPF", value: "50+", icon: ShoppingCartIcon },
    { id: 4, name: "Artisans Formés", value: "1K+", icon: UserGroupIcon }
]

const BoisForets = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://img.freepik.com/photos-gratuite/clairiere-dans-foret-du-bois-chauffage-plie-pour-chambre-combustion_1153-6948.jpg?t=st=1738259561~exp=1738263161~hmac=cc5adaed90e2a863cd544d7716fe5b6358eb0f11875bf8aadeb9697283f0572e&w=740"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-50"
                    alt="Background"
                />
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-start text-white px-6 lg:px-24">
                    <h1 className="text-4xl font-bold">Pilier bois-forêts</h1>
                    <p className="mt-4 text-lg max-w-2xl">
                        La filière bois-forêts est un secteur clé de l’économie camerounaise, offrant de nombreuses opportunités d’investissement et de développement. Découvrez les atouts, les avantages et les opportunités du secteur.
                    </p>
                    <div className="mt-6 py-2">
                        <ActionButtonComponent
                            title="Explorez les opportunités"
                            color="#A86F32"
                            filterSecteur="Bois-Forêt"
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
                        { name: "Pilier Bois-Forêts", path: '#' }
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
                        Faire du massif forestier camerounais le pilier de lancement du plan ferroviaire, de l’exportation de l’énergie et du développement d’une filière hautement intégrée aux autres filières industrielles.
                    </p>
                </motion.div>
            </div>
            {/* Section Principale */}
            <div className="overflow-hidden bg-green-50 py-20 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl font-bold text-center mb-8">Pilier Bois-Forêts</motion.h2>

                    {/* Cartes Thématiques */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">

                        {/* Institutions et Organisations */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://img.freepik.com/photos-gratuite/batiment_1127-3357.jpg?t=st=1738407758~exp=1738411358~hmac=e7486709986163f6239be2470c94d5acc8195b742c05527a434838d52e6f9c88&w=740"
                                    alt="Institutions et Organisations"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Institutions et Organisations</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Création de l'Office National du Bois (ONB)</li>
                                    <li>Société Camerounaise de Dépôt des Produits Forestiers (SCDPF)</li>
                                    <li>Société Camerounaise de la Pâte et du Papier (SOCAPAP)</li>
                                    <li>Caisse de Stabilisation des Prix des Produits Forestiers (CSPPF)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Zones et Complexes Industriels */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://images.pexels.com/photos/8994765/pexels-photo-8994765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Zones et Complexes Industriels"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Zones et Complexes Industriels</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Zone de Transformation Industrielle (ZTI)</li>
                                    <li>Complexes Industriels Intégrés (CII)</li>
                                    <li>Architecture des CII d'EDEA et BENGBIS</li>
                                    <li>Unités de séchage obligatoires</li>
                                </ul>
                            </div>
                        </div>

                        {/* Commercialisation et Régulation */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://img.freepik.com/photos-gratuite/pile-planches-bois-dans-cour-bois-scierie_342744-510.jpg?t=st=1738408284~exp=1738411884~hmac=a3e41a6a5a053b231a6d574d14375079e68397680f11cbdae8041ab14b0d3efc&w=740"
                                    alt="Commercialisation et Régulation"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Commercialisation et Régulation</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Magasins de vente (gros, demi-gros, détail)</li>
                                    <li>Régulation du MIB (12m³ à 25m³/ha)</li>
                                    <li>Interdiction de transport de grumes hors ZTI</li>
                                    <li>Accès aux déchets forestiers</li>
                                </ul>
                            </div>
                        </div>

                        {/* Formation et Mutualisation */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://img.freepik.com/photos-gratuite/charpentier-coupant-panneau-forces-defense-principale-interieur-atelier_23-2149451067.jpg?ga=GA1.1.1625797867.1700058386&semt=ais_hybrid"
                                    alt="Formation et Mutualisation"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Formation et Mutualisation</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>École des Arts et Métiers du Bois</li>
                                    <li>Centres Agréés d'Apprentissage (C3AMB)</li>
                                    <li>Centres de Mutualisation (CMR2T)</li>
                                    <li>Village Bois pour artisans</li>
                                </ul>
                            </div>
                        </div>

                        {/* Infrastructures Routières */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://media.istockphoto.com/id/2164900011/fr/photo/route-%C3%A0-p%C3%A9age-ou-autoroute-%C3%A0-p%C3%A9age-sur-lautoroute-%C3%A0-acc%C3%A8s-limit%C3%A9-point-de-contr%C3%B4le-du.webp?a=1&b=1&s=612x612&w=0&k=20&c=Xp5dHUHBpXdQ5vYLluY-yYXqCzuGb0mX2CcfPV0XE58="
                                    alt="Infrastructures Routières"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Infrastructures Routières</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Petites Entreprises d'Entretien Routier (PEER)</li>
                                    <li>Péages Routiers Spéciaux (PRS)</li>
                                    <li>Financement des PEER via les PRS</li>
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
                                    <stat.icon className="h-12 w-12 text-[#A86F32]" />
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

export default BoisForets;
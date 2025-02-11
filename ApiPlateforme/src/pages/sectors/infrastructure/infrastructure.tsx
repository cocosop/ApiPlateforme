import { AcademicCapIcon, BuildingOfficeIcon } from '@heroicons/react/20/solid'
import { NavLink } from "react-router-dom";
import ActionButtonComponent from '../../../components/actionButtonComponent/actionButtonComponent';
import { Anchor, TrainTrack } from 'lucide-react';
import { motion } from 'framer-motion';

const statistiques = [
    { id: 1, name: "Projets Ferroviaires", value: "15+", icon: TrainTrack },
    { id: 2, name: "Ports Modernisés", value: "4", icon: Anchor },
    { id: 3, name: "Écoles Professionnelles", value: "730+", icon: AcademicCapIcon },
    { id: 4, name: "Ministères Restructurés", value: "100%", icon: BuildingOfficeIcon }
]

const infrastructure = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://img.freepik.com/photos-gratuite/vue-aerienne-drone-du-centre-ville-chisinau-vue-panoramique-plusieurs-routes-batiments_1268-18556.jpg?t=st=1736263381~exp=1736266981~hmac=a4683c8b514ce67fb3cefc8ef21265a7db45bd841b068780a43ccc8c112c3894&w=826"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-50"
                    alt="Background"
                />
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-start text-white px-6 lg:px-24">
                    <h1 className="text-4xl font-bold">Socle infrastructure</h1>
                    <p className="mt-4 text-lg max-w-2xl">
                        Socle infrastructure est un secteur clé pour le développement économique du Cameroun. Il regroupe les infrastructures de base nécessaires au bon fonctionnement de l’économie et à l’amélioration des conditions de vie des populations.
                    </p>
                    <div className="mt-6 py-2">
                        <ActionButtonComponent
                            title="Explorez les opportunités"
                            color="#DC2123"
                            filterSecteur="Infrastructures"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Breadcrumbs */}
            <div aria-label="Breadcrumbs" className="bg-gray-100 sticky top-24 z-10 flex align-center space-x-2 text-sm font-semibold p-6 lg:p-8 border-spacing-1">
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
                <p className="text-slate-500">Socle infrastructure</p>
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
                        Bâtir un socle solide d’infrastructures physiques, cognitives et institutionnelles pour favoriser le désenclavement du territoire et posséder une base de capital humain à même de servir l’industrialisation.                    </p>
                </motion.div>
            </div>
            {/* Socle Infrastructure */}
            <div className="overflow-hidden bg-gray-50 py-20 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl font-bold text-center mb-8">Nos Actions</motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">

                        {/* Infrastructure Physique */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200 lg:aspect-auto lg:h-80">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Camrail_train_between_Douala_and_Yaounde%2C_ex-portuguese_DMU_9600.jpg/800px-Camrail_train_between_Douala_and_Yaounde%2C_ex-portuguese_DMU_9600.jpg"
                                    alt="Infrastructure Physique"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Infrastructure Physique</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Construction des grands projets structurants</li>
                                    <li>Plan ferroviaire national</li>
                                    <li>Modernisation portuaire</li>
                                    <li>Compagnies nationales (Ferrys, fret aérien)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Infrastructure Cognitive */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200 lg:aspect-auto lg:h-80">
                                <img
                                    src="https://img.freepik.com/photos-gratuite/etudiant-diplome-smiley-coup-moyen_23-2148950576.jpg?t=st=1738261544~exp=1738265144~hmac=14fd8812f8a1b66940128b54d4ca75823d43fd6b5a1c2981e242f681402d5251&w=740"
                                    alt="Infrastructure Cognitive"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Infrastructure Cognitive</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Professionnalisation des enseignements</li>
                                    <li>Réseau d'enseignement professionnel</li>
                                    <li>Reformation des formateurs</li>
                                    <li>Modules de veille industrielle</li>
                                </ul>
                            </div>
                        </div>

                        {/* Infrastructure Institutionnelle */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200 lg:aspect-auto lg:h-80">
                                <img
                                    src="https://img.freepik.com/photos-gratuite/grands-gratte-ciel-marron-palmiers-verts-devant-eux_1304-5311.jpg?t=st=1736268949~exp=1736272549~hmac=360db4019decd451217bdd534a57cf2167967389e28cf02b32c05fb620761b65&w=360"
                                    alt="Infrastructure Institutionnelle"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Infrastructure Institutionnelle</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Restructuration des organigrammes</li>
                                    <li>Services de veille industrielle</li>
                                    <li>Alignement sur l'industrialisation</li>
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
                        className="text-3xl font-bold text-center mb-8">Statistiques Clés</motion.h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {statistiques.map((stat, index) => (
                            <motion.div
                                key={stat.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-white p-6 rounded-xl shadow-lg text-center">
                                <div className="flex justify-center">
                                    <stat.icon className="h-12 w-12 text-[#0F0B60]" />
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

export default infrastructure;
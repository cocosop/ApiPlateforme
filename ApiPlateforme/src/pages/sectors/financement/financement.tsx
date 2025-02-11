import { ChartBarIcon, CurrencyDollarIcon, FingerPrintIcon, ShieldCheckIcon } from '@heroicons/react/20/solid'
import { NavLink } from "react-router-dom";
import ActionButtonComponent from '../../../components/actionButtonComponent/actionButtonComponent';
import { motion } from 'framer-motion';

const statistiques = [
    { id: 1, name: "Fonds Soustraits", value: "5B FCFA", icon: CurrencyDollarIcon },
    { id: 2, name: "Capital Privé BC-PME", value: "65%", icon: ChartBarIcon },
    { id: 3, name: "Projets Garantis", value: "300+", icon: ShieldCheckIcon },
    { id: 4, name: "Entreprises Identifiées", value: "10K", icon: FingerPrintIcon }
]

const financement = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://img.freepik.com/photos-gratuite/pieces-monnaie-bouteilles-graphique-trading_1150-17751.jpg?t=st=1738258892~exp=1738262492~hmac=83610bc678f7ec300635ec6ec94feea616a84d3ee5a50cda5168f519d51cac4a&w=740"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-50"
                    alt="Background"
                />
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-start text-white px-6 lg:px-24">
                    <h1 className="text-4xl font-bold">Socle financement</h1>
                    <p className="mt-4 text-lg max-w-2xl">
                        Le socle financement est un ensemble de réformes visant à renforcer le système financier camerounais pour soutenir l'industrialisation du pays.
                    </p>
                    <div className="mt-6 py-2">
                        <ActionButtonComponent
                            title="Explorez les opportunités"
                            color="#8FA832"
                            filterSecteur="Financement"
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
                <p className="text-slate-500">Socle financement</p>
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
                        Procéder aux réformes indispensables pour transformer le Cameroun en un hub financier de premier rang dans le Golfe de Guinée et soutenir la vision d’industrialisation du pays.
                    </p>
                </motion.div>
            </div>
            {/* Socle Financement */}
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

                        {/* Restructuration Institutionnelle */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://images.unsplash.com/photo-1732284081199-a9e40cb8658d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Restructuration Institutionnelle"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Réforme des Institutions</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Transformation de la SNI en fonds souverain</li>
                                    <li>Mutation de la BC-PME en banque d'investissement</li>
                                    <li>Introduction en bourse de la BC-PME</li>
                                    <li>Réforme du CARPA en agence PPP</li>
                                </ul>
                            </div>
                        </div>

                        {/* Mécanismes de Soutien */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://img.freepik.com/photos-gratuite/scene-bureau-ordinateur-portable_23-2147626521.jpg?t=st=1738265137~exp=1738268737~hmac=6e6cb2fa75afe3be02a03a062352eaf0fbc4420ef8b5dffa3049d07360b0a243&w=740"
                                    alt="Mécanismes de Soutien"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Instruments Financiers</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Fonds de garantie sectoriel (État/APECCAM/ANEMCAM)</li>
                                    <li>Agence d'assurance crédit-export (État/ASAC)</li>
                                    <li>Agence camerounaise de notation financière</li>
                                    <li>Obligations pour fonds propres</li>
                                </ul>
                            </div>
                        </div>

                        {/* Cadre Économique */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://img.freepik.com/photos-gratuite/hommes-affaires-africains-se-serrant-main_1303-18516.jpg?t=st=1738265268~exp=1738268868~hmac=5448a9e19bc178eab3409b339a124365e36b1c61274703a446c08dd15474f1bd&w=740"
                                    alt="Cadre Économique"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Environnement des Affaires</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Incitations aux entreprises à fort capital</li>
                                    <li>Réforme fiscale pour fonds propres</li>
                                    <li>Système d'identification renforcé des entreprises</li>
                                    <li>Partenariats stratégiques sectoriels</li>
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
                                    <stat.icon className="h-12 w-12 text-[#8FA832]" />
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

export default financement;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building, Globe, Users, Briefcase, ArrowRight, CheckCircle, Shield, Handshake, Target, Database, Clipboard, Settings, Mail, Phone, MapPin } from 'lucide-react';

const PresentationApi: React.FC = () => {
    // Données pour les statistiques
    const stats = [
        { name: 'Bureaux', value: '2', icon: Building, description: 'Yaoundé et Douala' },
        { name: 'Investisseurs accompagnés', value: '500+', icon: Users, description: 'Nationaux et internationaux' },
        { name: 'Projets enregistrés', value: '200+', icon: Briefcase, description: 'Dans divers secteurs' },
        { name: 'Années d\'expérience', value: '10+', icon: Globe, description: 'Au service des investisseurs' },
    ];

    // Données pour les objectifs et fonctions
    const objectives = [
        {
            title: 'Promouvoir l’image du Cameroun',
            icon: Target,
            description: 'Nous mettons en avant les atouts économiques et les opportunités d\'investissement au Cameroun.',
        },
        {
            title: 'Améliorer l’environnement des affaires',
            icon: Shield,
            description: 'Nous proposons des mesures pour faciliter les investissements et simplifier les procédures administratives.',
        },
        {
            title: 'Guider les investisseurs',
            icon: Handshake,
            description: 'Nous accompagnons les investisseurs à chaque étape de leur projet, de l\'idée à la réalisation.',
        },
        {
            title: 'Créer une base de données',
            icon: Database,
            description: 'Nous recensons et diffusons les opportunités d\'investissement à travers une plateforme dédiée.',
        },
    ];

    const fonctions = [
        {
            title: 'Réception des demandes de licence',
            icon: Clipboard,
            description: 'Nous traitons les demandes de licence dans le cadre de la Charte des investissements.',
        },
        {
            title: 'Accès aux services publics',
            icon: Settings,
            description: 'Nous facilitons l\'accès aux services publics pour les entreprises agréées.',
        },
        {
            title: 'Suivi des engagements',
            icon: CheckCircle,
            description: 'Nous veillons au respect des engagements pris par les investisseurs.',
        },
        {
            title: 'Simplification des procédures',
            icon: ArrowRight,
            description: 'Nous collaborons avec les services techniques pour simplifier les démarches administratives.',
        },
    ];

    // Données pour l'équipe dirigeante
    const team = [
        {
            name: 'M. Shinwinsoh Boma Donatus',
            role: 'DG ai',
            image: 'https://api.kankogroup.com/img/equipe/dg-adjoint-equipe.png',
        },
        {
            name: 'Dr. Diana Acha-Morfaw',
            role: 'PCA',
            image: 'https://api.kankogroup.com/img/equipe/pca-equipe.png',
        },
    ];

    // Données pour les coordonnées
    const contactInfo = [
        {
            icon: MapPin,
            title: 'Adresse',
            description: [
                { item: 'Yaoundé, Cameroun (Siège principal)' },
                { item: 'Douala, Cameroun (Antenne régionale)' }
            ],
        },
        {
            icon: Mail,
            title: 'Email',
            description: [
                { item: 'contact@api.cm' }
            ],
        },
        {
            icon: Phone,
            title: 'Téléphone',
            description: [
                { item: '+237 656 02 46 00' },
                { item: '+237 672 30 52 22' },
                { item: '+237 670 21 86 30' },
            ],
        },
    ];

    return (
        <div>
            {/* Section Hero */}
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://direct-info.net/wp-content/uploads/2024/07/IMG-20240724-WA0004-1024x767.jpg"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-50"
                    alt="Cameroun"
                />
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-center"
                >
                    <h1 className="text-5xl font-bold text-white">
                        Agence de Promotion des Investissements
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                        Investir au Cameroun, c'est investir dans un pays stable, ouvert et dynamique, au cœur de l'Afrique centrale.
                    </p>
                </motion.div>
            </div>

            {/* Fil d'Ariane */}
            <div aria-label="Breadcrumbs" className="bg-gray-100 sticky top-24 z-10 flex align-center space-x-2 text-sm font-semibold p-6 lg:p-8 border-spacing-1">
                <NavLink className="text-slate-500 hover:text-slate-900 hover:underline" to={'/'}>Accueil</NavLink>
                <div aria-hidden="true" className="text-slate-400 select-none">/</div>
                <p className="text-slate-500">A propos</p>
                <div aria-hidden="true" className="text-slate-400 select-none">/</div>
                <p className="text-slate-500">Présentation de l'API</p>
            </div>

            {/* Section Objectifs */}
            <section className="relative isolate overflow-hidden bg-white py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl font-bold text-center text-gray-900 mb-8"
                    >
                        Nos Objectifs
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {objectives.map((obj, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                            >
                                <div className="flex justify-center">
                                    <obj.icon className="h-12 w-12 text-[#0F0B60]" />
                                </div>
                                <h3 className="mt-4 text-xl font-semibold text-gray-900">{obj.title}</h3>
                                <p className="mt-2 text-sm text-gray-600">{obj.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Fonctions */}
            <section className="relative isolate overflow-hidden bg-indigo-50 py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl font-bold text-center text-gray-900 mb-8"
                    >
                        Nos Fonctions
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {fonctions.map((func, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                            >
                                <div className="flex justify-center">
                                    <func.icon className="h-12 w-12 text-[#0F0B60]" />
                                </div>
                                <h3 className="mt-4 text-xl font-semibold text-gray-900">{func.title}</h3>
                                <p className="mt-2 text-sm text-gray-600">{func.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Équipe */}
            <section className="relative isolate overflow-hidden bg-white py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl font-bold text-center text-gray-900 mb-8"
                    >
                        Notre Équipe
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20"></div>
                        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="mx-auto size-32 rounded-full"
                                />
                                <h3 className="mt-4 text-xl font-semibold text-gray-900">{member.name}</h3>
                                <p className="mt-2 text-sm text-gray-600">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Statistiques */}
            <section className="relative isolate overflow-hidden bg-white py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl font-bold text-center text-gray-900 mb-8"
                    >
                        En Chiffres
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                            >
                                <div className="flex justify-center">
                                    <stat.icon className="h-12 w-12 text-[#0F0B60]" />
                                </div>
                                <p className="mt-4 text-3xl font-bold text-gray-900">{stat.value}</p>
                                <p className="mt-2 text-lg text-gray-600">{stat.name}</p>
                                <p className="mt-2 text-sm text-gray-500">{stat.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Coordonnées */}
            <section className="relative isolate overflow-hidden bg-indigo-50 py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl font-bold text-center text-gray-900 mb-8"
                    >
                        Nous Contacter
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                            >
                                <div className="flex justify-center">
                                    <info.icon className="h-12 w-12 text-[#0F0B60]" />
                                </div>
                                <h3 className="mt-4 text-xl font-semibold text-gray-900">{info.title}</h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    {info.description.map((desc, index) => (
                                        <ul>
                                            <li key={index}>{desc.item}</li>
                                        </ul>
                                    ))}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PresentationApi;
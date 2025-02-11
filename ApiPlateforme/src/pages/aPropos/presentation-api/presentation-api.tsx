import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building, Globe, Users, Briefcase, ArrowRight, CheckCircle, Shield, Handshake, Target, Database, Clipboard, Settings } from 'lucide-react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import ProjectCard from '../../../components/projetCard/projetCard';
import CACAO from "../../../assets/img/cacao4.png"
import ENERGIE from "../../../assets/img/energie.jpg"

const PresentationApi: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'direction' | 'consultatif'>('direction');
    const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);

    useEffect(() => {
        const fetchLocation = async () => {
            setCoords({ lat: 3.848, lon: 11.5021 }); // Coordinates for the Agence de Promotion des Investissements in Yaoundé, Cameroon
        };
        fetchLocation();
    }, []);

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

    // Données pour l'équipe de direction
    const directionTeams = [
        {
            name: 'Mr. Shinwinsoh Boma Donatus',
            role: 'Directeur Général par intérim',
            image: 'https://api.kankogroup.com/img/equipe/dg-adjoint-equipe.png',
        },
        {
            name: 'Dr. Diana Acha-Morfaw',
            role: 'Présidente du Conseil d’Administration',
            image: 'https://api.kankogroup.com/img/equipe/pca-equipe.png',
        },
    ];

    // Données pour l'équipe de direction
    const consultatifTeams = [
        {
            name: 'SE Mr. Ferdinand Ngoh Ngoh',
            role: 'Secrétariat Général de la Présidence de la République du Cameroun',
            image: 'https://media.licdn.com/dms/image/v2/C4E03AQFzznCej69Yqw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1618553689792?e=2147483647&v=beta&t=Iam35xNyqIBsdauknghFJslrJh1oCj4_AIwKj7A1yXc',
        },
        {
            name: 'SE Mr. Louis-Paul Motaze',
            role: "Ministre de l'Economie et des Finances du Cameroun",
            image: 'https://s7d1.scene7.com/is/image/wbcollab/louis_paul_motaze-2:220x220?qlt=90&fmt=webp&resMode=sharp2',
        },
    ];

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
            <section className="relative isolate overflow-hidden py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl font-bold text-center text-gray-900 mb-8"
                    >
                        Gouvernance
                    </motion.h2>

                    <div className="overflow-hidden">
                        <div className="flex border-b border-gray-200 mb-4">
                            <button
                                onClick={() => setActiveTab('consultatif')}
                                className={`flex-1 p-4 font-medium ${activeTab === 'consultatif' ? 'bg-[#0F0B60] text-white' : 'text-gray-600'}`}
                            >
                                Conseil consultatif
                            </button>
                            <button
                                onClick={() => setActiveTab('direction')}
                                className={`flex-1 p-4 font-medium ${activeTab === 'direction' ? 'bg-[#0F0B60] text-white' : 'text-gray-600'}`}
                            >
                                Equipe de direction
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20"></div>
                            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
                            {(activeTab === 'direction' ? directionTeams : consultatifTeams).map((member, index) => (
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

            {/* Section Map */}
            <section className="relative isolate overflow-hidden bg-white py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl font-bold text-center text-gray-900 mb-8"
                    >
                        Carte
                    </motion.h2>
                    {coords ? (
                        <MapContainer center={[coords.lat, coords.lon]} zoom={13} className="w-full h-96 rounded-lg" style={{ zIndex: 1 }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[coords.lat, coords.lon]}>
                            </Marker>
                        </MapContainer>
                    ) : (
                        <p className="text-center text-gray-500">Chargement de la carte...</p>
                    )}
                </div>

                <div className="container mx-auto p-6">
                    {/* Titre avec style attractif */}
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                        Saisissez des Opportunités Uniques !
                    </h2>

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
            </section>
        </div>
    );
};

export default PresentationApi;
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building, Globe, Users, Briefcase, ArrowRight, CheckCircle, Shield, Handshake, Target, Database, Clipboard, Settings } from 'lucide-react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../../../components/projetCard/projetCard';
import CACAO from "../../../assets/img/cacao4.png"
import ENERGIE from "../../../assets/img/energie.jpg"
import BreadcrumbsComponent from '../../../components/breadcrumbsComponent/breadcrumbsComponent';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix Leaflet's default icon path issues with bundlers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
});

const PresentationApi: React.FC = () => {
    const { t } = useTranslation();
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
        { name: t("pages_a_propos.presentation_api.stats.items.0.name"), value: '2', icon: Building, description: t("pages_a_propos.presentation_api.stats.items.0.desc") },
        { name: t("pages_a_propos.presentation_api.stats.items.1.name"), value: '500+', icon: Users, description: t("pages_a_propos.presentation_api.stats.items.1.desc") },
        { name: t("pages_a_propos.presentation_api.stats.items.2.name"), value: '200+', icon: Briefcase, description: t("pages_a_propos.presentation_api.stats.items.2.desc") },
        { name: t("pages_a_propos.presentation_api.stats.items.3.name"), value: '10+', icon: Globe, description: t("pages_a_propos.presentation_api.stats.items.3.desc") },
    ];

    // Données pour les objectifs et fonctions
    const objectives = [
        {
            title: t("pages_a_propos.presentation_api.objectifs.items.0.title"),
            icon: Target,
            description: t("pages_a_propos.presentation_api.objectifs.items.0.desc"),
        },
        {
            title: t("pages_a_propos.presentation_api.objectifs.items.1.title"),
            icon: Shield,
            description: t("pages_a_propos.presentation_api.objectifs.items.1.desc"),
        },
        {
            title: t("pages_a_propos.presentation_api.objectifs.items.2.title"),
            icon: Handshake,
            description: t("pages_a_propos.presentation_api.objectifs.items.2.desc"),
        },
        {
            title: t("pages_a_propos.presentation_api.objectifs.items.3.title"),
            icon: Database,
            description: t("pages_a_propos.presentation_api.objectifs.items.3.desc"),
        },
    ];

    const fonctions = [
        {
            title: t("pages_a_propos.presentation_api.fonctions.items.0.title"),
            icon: Clipboard,
            description: t("pages_a_propos.presentation_api.fonctions.items.0.desc"),
        },
        {
            title: t("pages_a_propos.presentation_api.fonctions.items.1.title"),
            icon: Settings,
            description: t("pages_a_propos.presentation_api.fonctions.items.1.desc"),
        },
        {
            title: t("pages_a_propos.presentation_api.fonctions.items.2.title"),
            icon: CheckCircle,
            description: t("pages_a_propos.presentation_api.fonctions.items.2.desc"),
        },
        {
            title: t("pages_a_propos.presentation_api.fonctions.items.3.title"),
            icon: ArrowRight,
            description: t("pages_a_propos.presentation_api.fonctions.items.3.desc"),
        },
    ];

    // Données pour l'équipe de direction
    const directionTeams = [
        {
            name: 'Mr. Shinwinsoh Boma Donatus',
            role: t("pages_a_propos.presentation_api.gouvernance.roles.dg"),
            image: 'https://api.kankogroup.com/img/equipe/dg-adjoint-equipe.png',
        },
        {
            name: 'Dr. Diana Acha-Morfaw',
            role: t("pages_a_propos.presentation_api.gouvernance.roles.pca"),
            image: 'https://api.kankogroup.com/img/equipe/pca-equipe.png',
        },
    ];

    // Données pour l'équipe de direction
    const consultatifTeams = [
        {
            name: 'SE Mr. Ferdinand Ngoh Ngoh',
            role: t("pages_a_propos.presentation_api.gouvernance.roles.sg_prc"),
            image: 'https://media.licdn.com/dms/image/v2/C4E03AQFzznCej69Yqw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1618553689792?e=2147483647&v=beta&t=Iam35xNyqIBsdauknghFJslrJh1oCj4_AIwKj7A1yXc',
        },
        {
            name: 'SE Mr. Louis-Paul Motaze',
            role: t("pages_a_propos.presentation_api.gouvernance.roles.minepat"),
            image: 'https://s7d1.scene7.com/is/image/wbcollab/louis_paul_motaze-2:220x220?qlt=90&fmt=webp&resMode=sharp2',
        },
    ];

    const projects = [
        {
            id: 1,
            secteur: t("pages_a_propos.presentation_api.projects.0.secteur"),
            titre: t("pages_a_propos.presentation_api.projects.0.titre"),
            ville: "Douala",
            quartier: "Bonaberi",
            description: t("pages_a_propos.presentation_api.projects.0.description"),
            image: CACAO,
            latitude: 4.0511,
            longitude: 9.7679,
        },
        {
            id: 2,
            secteur: t("pages_a_propos.presentation_api.projects.1.secteur"),
            titre: t("pages_a_propos.presentation_api.projects.1.titre"),
            ville: "Garoua",
            quartier: "Ngaoundere route",
            description: t("pages_a_propos.presentation_api.projects.1.description"),
            image: ENERGIE,
            latitude: 4.0511,
            longitude: 9.7679,
        },
        {
            id: 3,
            secteur: t("pages_a_propos.presentation_api.projects.2.secteur"),
            titre: t("pages_a_propos.presentation_api.projects.2.titre"),
            ville: "Yaoundé",
            quartier: "Bastos",
            description: t("pages_a_propos.presentation_api.projects.2.description"),
            image: "https://img.freepik.com/free-photo/high-angle-friends-reading-menu-restaurant_23-2150384825.jpg?t=st=1738099850~exp=1738103450~hmac=263dee2608a764be0cc905367387bf817f98c3b6a3df41a0103a348fa8777175&w=996",
            latitude: 4.0511,
            longitude: 9.7679,
        }
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
                        {t("pages_a_propos.presentation_api.hero.title")}
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                        {t("pages_a_propos.presentation_api.hero.subtitle")}
                    </p>
                </motion.div>
            </div>

            {/* Breadcrumbs */}
            <div aria-label="Breadcrumbs" className="bg-gray-50 sticky top-24 z-10 flex align-center space-x-2 text-sm font-semibold p-4 lg:p-6 border-spacing-1 overflow-scroll">
                <BreadcrumbsComponent
                    breadcrumbs={[
                        { name: t("pages_a_propos.presentation_api.breadcrumbs.home"), path: '/' },
                        { name: t("pages_a_propos.presentation_api.breadcrumbs.about"), path: '#' },
                        { name: t("pages_a_propos.presentation_api.breadcrumbs.presentation"), path: '#' }
                    ]}
                />
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
                        {t("pages_a_propos.presentation_api.objectifs.title")}
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
                        {t("pages_a_propos.presentation_api.fonctions.title")}
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
                        {t("pages_a_propos.presentation_api.gouvernance.title")}
                    </motion.h2>

                    <div className="overflow-hidden">
                        <div className="flex border-b border-gray-200 mb-4">
                            <button
                                onClick={() => setActiveTab('consultatif')}
                                className={`flex-1 p-4 font-medium ${activeTab === 'consultatif' ? 'bg-[#0F0B60] text-white' : 'text-gray-600'}`}
                            >
                                {t("pages_a_propos.presentation_api.gouvernance.tab_consultatif")}
                            </button>
                            <button
                                onClick={() => setActiveTab('direction')}
                                className={`flex-1 p-4 font-medium ${activeTab === 'direction' ? 'bg-[#0F0B60] text-white' : 'text-gray-600'}`}
                            >
                                {t("pages_a_propos.presentation_api.gouvernance.tab_direction")}
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 relative">
                            {/* Décoration de fond originale restaurée avec une touche de couleur (dégradé subtil) */}
                            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-40"></div>
                            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gradient-to-r from-indigo-50/80 via-white to-[#0F0B60]/5 ring-1 shadow-2xl shadow-[#0F0B60]/10 ring-[#0F0B60]/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center backdrop-blur-sm"></div>

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
            <section className="relative isolate overflow-hidden bg-gray-200 py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl font-bold text-center text-gray-900 mb-8"
                    >
                        {t("pages_a_propos.presentation_api.stats.title")}
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
                        {t("pages_a_propos.presentation_api.map_section.title")}
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
                        <p className="text-center text-gray-500">{t("pages_a_propos.presentation_api.map_section.loading")}</p>
                    )}
                </div>

                <div className="container mx-auto p-6">
                    {/* Titre avec style attractif */}
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 mt-12">
                        {t("pages_a_propos.presentation_api.map_section.opportunities_title")}
                    </h2>

                    {/* Message d'encouragement */}
                    <p className="text-center text-gray-700 mb-6">
                        {t("pages_a_propos.presentation_api.map_section.opportunities_desc")}
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
                            {t("pages_a_propos.presentation_api.map_section.see_more")}
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PresentationApi;
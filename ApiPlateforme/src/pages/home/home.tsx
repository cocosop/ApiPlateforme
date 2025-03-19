import HOMEVIDEOUPDATED from '../../assets/videos/COMPLEXE INDUSTRIALO-PORTUAIRE DE KRIBI (cameroun).mp4'
import OPTIMISATION from "../../assets/img/optimisation.png"
import AMELIORATION from "../../assets/img/amelioration.png"
import SIMPLIFICATION from "../../assets/img/simplification.png"
import UTILISATION from "../../assets/img/utilisation.png"
import ENREGISTREMENT from "../../assets/img/enregistrement.png"
import REDUCTION from "../../assets/img/reduction.png"
import SUIVI from "../../assets/img/suivi.png"
import ACCES from "../../assets/img/acces.png"
import CACAO from "../../assets/img/cacao4.png"
import ENERGIE from "../../assets/img/energie.jpg"
import './home.css'
import { NavLink } from "react-router-dom";
import ActionButtonComponent from "../../components/actionButtonComponent/actionButtonComponent";
import { useState } from 'react'
import ProjectCard from '../../components/projetCard/projetCard'
import { motion } from 'framer-motion'

//Data table for the list of objectives
const cardData = [
    {
        image: SIMPLIFICATION,
        title: "Simplification et facilitation des processus",
        description: "Nous prenons en charge et simplifions la création d'entreprises et d'investissements, tout en rendant les procédures plus transparentes.",
        color: "#0E600B"
    },
    {
        image: OPTIMISATION,
        title: "Optimisation du service public",
        description: "Accélérez le traitement des dossiers, améliorez le rendement des agents et la qualité des prestations fournies.",
        color: "#DC2124"
    },
    {
        image: AMELIORATION,
        title: "Amélioration de la communication et du suivi ",
        description: "Nous favorisons l'interaction entre investisseurs et administration, et permettons aux investisseurs de suivre l'évolution de leurs dossiers à distance.",
        color: "#F5BA3A"
    },
];

//Data table for the list of advantages
const ListData = [
    {
        image: ENREGISTREMENT,
        title: "Enregistrement en ligne des projets",
        description: "Les investisseurs peuvent enregistrer leurs projets directement sur le portail, sans formalités papier. Ce système facilite les démarches et permet un gain de temps considérable, tout en garantissant une gestion sécurisée et accessible à distance.",
        count: 1
    },
    {
        image: REDUCTION,
        title: "Réduction des déplacements",
        description: "Toutes les démarches étant centralisées sur le portail, les investisseurs n’ont plus besoin de se déplacer. Cela simplifie leurs interactions avec l’administration et optimise leur emploi du temps.",
        count: 2
    },
    {
        image: SUIVI,
        title: "Suivi transparent des dossiers",
        description: "Le portail offre une visibilité totale sur l’état d’avancement des dossiers. Les investisseurs peuvent suivre chaque étape du traitement en temps réel, ce qui renforce la confiance et réduit les incertitudes.",
        count: 3
    },
    {
        image: ACCES,
        title: "Accès rapide à l’information",
        description: "Le portail permet d’accéder instantanément à des informations clés sur les démarches et les services disponibles. Ce gain de temps aide les investisseurs à mieux planifier et exécuter leurs projets.",
        count: 4
    },
];

//Data table for the list of testimonies

const testimonies = [
    {
        id: 1,
        description: "L'API a été un partenaire clé dans la réussite de notre projet d'investissement au Cameroun. Leur équipe nous a accompagnés à chaque étape, de l'enregistrement en ligne au suivi transparent des dossiers. Grâce à eux, nous avons pu démarrer nos opérations rapidement et sans tracas.",
        date: '12 Oct, 2023',
        author: {
            name: 'Jean Dupont',
            imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
    },
    {
        id: 2,
        description: "Travailler avec l'API a été une expérience incroyablement fluide. Leur plateforme en ligne nous a permis de réduire considérablement les déplacements et les formalités administratives. Nous avons pu nous concentrer sur notre projet tout en ayant une visibilité totale sur l'avancement de notre dossier.",
        date: '25 Sep, 2023',
        author: {
            name: 'Fatoumata Diallo',
            imageUrl: 'https://randomuser.me/api/portraits/women/16.jpg',
        },
    },
    {
        id: 3,
        description: "L'API a transformé notre expérience d'investissement au Cameroun. Leur processus simplifié et transparent nous a permis de gagner un temps précieux. Leur équipe est réactive et professionnelle, et nous recommandons vivement leurs services à tout investisseur.",
        date: '5 Sep, 2023',
        author: {
            name: 'Carlos Mendoza',
            imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
        },
    },
    {
        id: 4,
        description: "Nous avons été impressionnés par l'efficacité de l'API. Leur système de suivi en temps réel nous a permis de rester informés à chaque étape de notre projet. Leur approche moderne et innovante est un véritable atout pour les investisseurs.",
        date: '18 Aug, 2023',
        author: {
            name: 'Amina Bello',
            imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
        },
    },
    {
        id: 5,
        description: "L'API a dépassé nos attentes. Leur plateforme en ligne est intuitive et facile à utiliser, et leur équipe est toujours disponible pour répondre à nos questions. Nous avons pu finaliser notre projet en un temps record grâce à leur soutien.",
        date: '30 Jul, 2023',
        author: {
            name: 'David Smith',
            imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
        },
    },
    {
        id: 6,
        description: "L'API a été un partenaire de confiance pour notre projet d'investissement. Leur processus simplifié et leur accompagnement personnalisé nous ont permis de surmonter les défis administratifs avec facilité. Nous sommes très satisfaits de leur service.",
        date: '10 Jul, 2023',
        author: {
            name: 'Lucie Atangana',
            imageUrl: 'https://randomuser.me/api/portraits/women/36.jpg',
        },
    },
    // More posts...
]


const home = () => {
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
            <div className="hero-container bg-gray-100 grid p-20 grid-cols-1 gap-x-6 xl:grid-cols-1 lg:grid-cols-1 items-center relative">
                <div className="absolute bottom-10 right-4z-10 h-24 rounded">
                    scroll
                </div>
                <video className="video-background" autoPlay muted loop>
                    <source
                        src={HOMEVIDEOUPDATED}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="video-background-overlay"></div>
                <div className="group relative hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-start">
                        <h1 className="max-w-2xl	text-balance font-bold tracking-tight text-[#0F0B60] sm:text-5xl subpixel-antialiased leading-8 p-4 bg-[#ffffffd1]">
                            Portail d'investissement du <span className="text-[#0E600B]"> Cameroun </span>
                        </h1>
                        <p className="mt-8 font-light sm:text-md/6 leading-7 max-w-2xl text-justify text-white">
                            Découvrez les opportunités d'investissement au Cameroun grâce à notre portail dédié,
                            source incontournable pour les investisseurs. Accédez à des informations sur les secteurs
                            porteurs, la réglementation, des sites d’investissement géolocalisés et connectez-vous aux
                            acteurs clés. Profitez aussi de conseils sur les procédures de création d'entreprise pour
                            réussir sur ce marché dynamique.
                        </p>
                        <div className="mt-10 flex items-center">
                            <NavLink to="/projets"
                                className="rounded-md p-3 border border-solid border-white hover:border-[#0E600B] text-sm font-semibold text-white shadow-sm hover:bg-[#0E600B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 mr-5"
                            >
                                Guide de l'investisseur
                            </NavLink>
                            <ActionButtonComponent title="Investissez maintenant" color="#0F0B60" filterSecteur="" />
                        </div>
                    </motion.div>
                </div>

            </div>
            <div className="trans"></div>

            <div className="second-content mx-auto max-w-7xl px-6 lg:px-8">
                <div className="second-title">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl font-bold text-center text-[#0F0B60]">Gérez votre investissement de manière efficace et efficiente</motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="w-24 h-1 bg-[#0F0B60] mx-auto my-4 rounded-full"></motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                    {cardData.map((data, index) => (
                        <div
                            key={index}
                            className="max-w-sm rounded-lg shadow-lg overflow-hidden m-4 transition-transform duration-300 ease-in-out hover:scale-105"
                            style={{ borderLeft: `5px solid ${data.color}` }}>
                            <div className="flex flex-col items-center p-6">
                                <img src={data.image} alt={data.title} className="w-12 h-12 mb-4" />
                                <h2 className="text-xl font-bold mb-2" style={{ color: data.color }}>
                                    {data.title}
                                </h2>
                                <p className="text-gray-600">
                                    {data.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
            <div className='third-content mx-auto max-w-full px-6 lg:px-8 py-8 bg-gradient-to-r from-blue-50 to-purple-50 border-gray-100'>
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-3xl font-bold text-center text-[#0F0B60]">Qui peut utiliser cette plateforme</motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="w-24 h-1 bg-[#0F0B60] mx-auto my-4 rounded-full"></motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-1 gap-6 xl:grid-cols-2 lg:grid-cols-2 p-8">
                    {/* Texte et liste */}
                    <div className='group relative space-y-6'>
                        <p className="font-bold text-2xl text-gray-800 bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Tout investisseur ou porteur de projet désirant
                        </p>
                        <ul className="space-y-4 list-none pl-0">
                            {[
                                "Accéder à des informations sur tous les aspects de la mise en place de son projet d’investissement ;",
                                "Enregistrer officiellement son projet d’investissement ;",
                                "Profiter des avantages prévus par la réglementation en matière d’encouragement à l’investissement ;",
                                "Soumettre une demande pour obtenir un terrain économique ;",
                                "Utiliser les services offerts par la plateforme."
                            ].map((item, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                        {index + 1}
                                    </span>
                                    <p className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
                                        {item}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image avec effet de survol */}
                    <div className='group relative overflow-hidden rounded-xl'>
                        <img
                            src={UTILISATION}
                            alt="utilisation-img"
                            className="w-full h-auto rounded-xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <p className="text-white text-lg font-semibold">
                                Découvrez comment notre plateforme peut vous aider à réaliser vos projets !
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="fourth-content mx-auto max-w-7xl px-6 lg:px-8 mt-8">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-3xl font-bold text-center text-[#0F0B60]">Avantages</motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="w-24 h-1 bg-[#0F0B60] mx-auto my-4 rounded-full"></motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8 bg-white">
                    {ListData.map((data, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                        >
                            {/* Cercle numéroté avec dégradé */}
                            <div className="absolute -top-4 -left-3 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-md">
                                {data.count}
                            </div>

                            {/* Image */}
                            <div className="p-6">
                                <img src={data.image} alt={data.title} className="w-20 h-20 mx-auto mb-4 transform transition-all duration-300 group-hover:scale-110" />
                            </div>

                            {/* Contenu texte */}
                            <div className="px-6 pb-8">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{data.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{data.description}</p>
                            </div>

                            {/* Overlay au survol */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="fifth-content mx-auto max-w-full px-6 lg:px-8 py-8 bg-gradient-to-r from-blue-50 to-purple-50 border-gray-100">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-3xl font-bold text-center text-[#0F0B60]">Nos investisseurs témoignent</motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="w-24 h-1 bg-[#0F0B60] mx-auto my-4 rounded-full"></motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonies.map((testimony) => (
                        <div key={testimony.id} className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                            <div className="flex items-center space-x-4 mb-4">
                                <img
                                    src={testimony.author.imageUrl}
                                    alt={testimony.author.name}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800">{testimony.author.name}</p>
                                    <p className="text-sm text-gray-500">{testimony.date}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">
                                <span className='font-bold text-xl text-[#0F0B60]'>"</span>
                                {testimony.description}
                                <span className='font-bold text-xl text-[#0F0B60]'>"</span>
                            </p>
                        </div>
                    ))}
                </motion.div>
                <div className="mt-6 flex items-center">
                    <NavLink to="/#">
                        <button className="more-btn text-sm/6 font-semibold">
                            Plus
                        </button>
                    </NavLink>
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
        </div >
    );
};

export default home;
import { ArrowTopRightOnSquareIcon, BookOpenIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import ProjectCard from '../../../components/projetCard/projetCard';
import CACAO from "../../../assets/img/cacao4.png"
import ENERGIE from "../../../assets/img/energie.jpg"
import BreadcrumbsComponent from '../../../components/breadcrumbsComponent/breadcrumbsComponent';
import { NavLink } from 'react-router-dom';

const AspectsJuridiques: React.FC = () => {
    const [activeSection, setActiveSection] = useState<number | null>(null);

    const legalSections = [
        {
            title: "Système Juridique",
            icon: ScaleIcon,
            content: "Mixte : Droit civil et common law - Constitution de 1972 révisée",
            details: "Le Cameroun possède un système juridique mixte, influencé à la fois par le droit civil français et la common law anglaise. La Constitution de 1972, révisée plusieurs fois, constitue la loi fondamentale."
        },
        {
            title: "Codes Importants",
            icon: BookOpenIcon,
            content: "Code civil, Code pénal, OHADA, Code des investissements",
            details: "Les principaux codes juridiques incluent le Code civil, le Code pénal, les actes uniformes de l'OHADA, et le Code des investissements qui régit les activités économiques."
        },
        {
            title: "Juridictions",
            icon: GlobeAltIcon,
            content: "Cour suprême, Cours d'appel, Tribunaux de première instance",
            details: "Le système judiciaire comprend la Cour suprême (plus haute juridiction), les Cours d'appel, et les Tribunaux de première instance répartis sur le territoire."
        }
    ];

    const toggleSection = (index: any) => {
        setActiveSection(activeSection === index ? null : index);
    };

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
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://www.creation-site-web.tn/wp-content/uploads/2019/08/juridique-848x435.jpg"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-50"
                />
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-center">
                    <h1 className="text-5xl font-bold text-white reveal">
                        Aspects Juridiques
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                        Découvrez les spécificités du droit camerounais, mélange unique de traditions juridiques
                    </p>
                </motion.div>
            </div>
            <div aria-label="Breadcrumbs" className="bg-gray-50 sticky top-24 z-10 flex align-center space-x-2 text-sm font-semibold p-4 lg:p-6 border-spacing-1 overflow-scroll">
                <BreadcrumbsComponent
                    breadcrumbs={[
                        { name: 'Accueil', path: '/' },
                        { name: 'Informations générales', path: '#' },
                        { name: 'Aspects juridiques', path: '#' }
                    ]}
                />
            </div>
            <section className='mx-auto m-4 max-w-2xl px-6 lg:max-w-7xl lg:px-8'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
                    {legalSections.map((section, index) => {
                        return (
                            <div
                                key={index}
                                className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 ${activeSection === index ? 'ring-2 ring-green-600' : 'hover:shadow-xl'
                                    }`}
                            >
                                <div className="flex items-center mb-4">
                                    <section.icon className="h-8 w-8 text-green-700 mr-3" />
                                    <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    {section.content}
                                </p>

                                <button
                                    onClick={() => toggleSection(index)}
                                    className="mt-4 text-green-700 hover:text-green-800 flex items-center"
                                >
                                    {activeSection === index ? 'Réduire' : 'En savoir plus'}
                                    <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                                </button>

                                {activeSection === index && (
                                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                        <p className="text-sm text-gray-600">
                                            {section.details}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </motion.div>
            </section>
            <div className="container mx-auto p-6">
                {/* Titre avec style attractif */}
                <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
                    Saisissez des Opportunités Uniques !
                </h2>

                {/* Barre de séparation */}
                <div className="w-24 h-1 bg-green-600 mb-6 mx-auto my-4 rounded-full"></div>

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
        </div>
    );
};

export default AspectsJuridiques;
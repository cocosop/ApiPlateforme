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
        <div className='mt-9'>          
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
            
        </div>
    );
};

export default AspectsJuridiques;
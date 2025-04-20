import { ArrowTopRightOnSquareIcon, BookOpenIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

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
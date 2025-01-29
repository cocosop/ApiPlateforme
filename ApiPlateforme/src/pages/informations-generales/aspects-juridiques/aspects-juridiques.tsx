import { ArrowTopRightOnSquareIcon, BookOpenIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/20/solid';
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
        <div>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://www.creation-site-web.tn/wp-content/uploads/2019/08/juridique-848x435.jpg"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-50"
                />
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-bold text-white reveal">
                        Aspects Juridiques
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                        Découvrez les spécificités du droit camerounais, mélange unique de traditions juridiques
                    </p>
                </div>
            </div>
            <section className='mx-auto m-4 max-w-2xl px-6 lg:max-w-7xl lg:px-8'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
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
                </div>
            </section>
        </div>
    );
};

export default AspectsJuridiques;
import React from 'react';

const CadreJuridiqueFiscal: React.FC = () => {
    return (
        <div>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
                />
                <div className="w-full px-6 lg:px-8">
                    <h1 className="mt-2 text-pretty text-4xl text-center font-semibold tracking-tight text-white sm:text-5xl">Cadre Juridique et Fiscal du Cameroun</h1>
                </div>
            </div>
            <section className="bg-white py-20 sm:py-20">
                <div className='mx-auto max-w-7xl px-6 lg:max-w-7xl lg:px-8'>
                    <div className="relative mt-8 lg:row-span-2">
                        <div className="absolute inset-px rounded-2xl bg-gray-900"></div>
                        <div className="relative min-h-auto pb-6 w-full grow">
                            <div className='absolute -top-5 left-10 text-gray-900 p-4 rounded-sm bg-gray-500 text-md font-semibold w-max'>
                                Feature
                            </div>
                            <div className="px-8 pb-4 pt-10 sm:px-10 sm:pb-0 md:pt-12 max-h-screen overflow-y-auto">
                                <h3 className="font-bold text-white">Présentation du cadre juridique et fiscal au Cameroun</h3>
                                <p className="mt-4 text-sm text-gray-300">
                                    Le Cameroun offre un cadre juridique et fiscal favorable pour les investissements et la création d'entreprises. Comprendre ce cadre est essentiel pour les investisseurs et les entrepreneurs souhaitant s'implanter dans le pays.
                                </p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                    </div>
                </div>
            </section>

            <section className="mx-auto mb-4 max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-semibold mb-4">Cadre Juridique</h2>
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 lg:grid-cols-2 items-center">
                    <div className="group relative">
                        <p className="text-lg leading-relaxed">
                            Le Cameroun dispose d'un système juridique basé sur le droit civil et le droit coutumier. Les principales lois régissant les affaires incluent le Code des Investissements, le Code du Travail, et le Code de Commerce.
                        </p>
                    </div>
                    <div className="group relative">
                        <img
                            src="https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Cadre Juridique"
                            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                        />
                    </div>
                </div>
            </section>

            <section className="mx-auto mb-4 max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-semibold mb-4">Cadre Fiscal</h2>
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 lg:grid-cols-2 items-center">
                    <div className="group relative">
                        <img
                            src="https://images.pexels.com/photos/6863261/pexels-photo-6863261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Cadre Fiscal"
                            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                        />
                    </div>
                    <div className="group relative">
                        <p className="text-lg leading-relaxed">
                            Le système fiscal camerounais est caractérisé par une diversité d'impôts et de taxes, notamment l'impôt sur les sociétés, la TVA, et les droits de douane. Le pays offre également des incitations fiscales pour encourager les investissements.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mx-auto mb-4 max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-semibold mb-4">Création d'Entreprise</h2>
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 lg:grid-cols-2 items-center">
                    <div className="group relative">
                        <p className="text-lg leading-relaxed">
                            La création d'une entreprise au Cameroun implique plusieurs étapes, y compris l'enregistrement auprès du Registre du Commerce et du Crédit Mobilier, l'obtention d'un numéro d'identification fiscale, et l'inscription à la sécurité sociale.
                        </p>
                    </div>
                    <div className="group relative">
                        <img
                            src="https://images.pexels.com/photos/8872563/pexels-photo-8872563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Creation d'entreprise"
                            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                        />
                    </div>
                </div>
            </section>

            <section className="mx-auto mb-4 max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-semibold mb-4">Investissements</h2>
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 lg:grid-cols-2 items-center">
                    <div className="group relative">
                        <img
                            src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Creation d'entreprise"
                            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                        />
                    </div>
                    <div className="group relative">
                        <p className="text-lg leading-relaxed">
                            Le Cameroun offre de nombreuses opportunités d'investissement dans divers secteurs tels que l'agriculture, l'énergie, les infrastructures, et les technologies de l'information. Le gouvernement met en place des mesures pour attirer et protéger les investisseurs étrangers.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CadreJuridiqueFiscal;
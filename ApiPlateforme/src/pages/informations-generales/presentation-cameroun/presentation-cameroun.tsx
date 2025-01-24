import { BuildingOfficeIcon, ClockIcon, CurrencyDollarIcon, LanguageIcon, MapIcon, UsersIcon } from '@heroicons/react/20/solid';
import React from 'react';

const PresentationCameroun: React.FC = () => {
    const images = [
        { src: '', alt: '' },
        { src: '', alt: '' },
        { src: '', alt: '' },
        { src: '', alt: '' },
    ]

    const infos = [
        { title: 'Capitale', value: 'Yaoundé', icon: BuildingOfficeIcon },
        { title: 'Superficie', value: '475 442 km²', icon: MapIcon },
        { title: 'Population', value: '26 545 863 hab.', icon: UsersIcon },
        { title: 'Langues officielles', value: 'Français, Anglais', icon: LanguageIcon },
        { title: 'Monnaie', value: 'Franc CFA', icon: CurrencyDollarIcon },
        { title: 'Fuseau horaire', value: 'UTC+1', icon: ClockIcon },
    ]

    return (
        <div>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://s.rfi.fr/media/display/a81774c2-e639-11ec-bd1c-005056a9a7b9/w:980/p:16x9/PLACEYAOUNDE.jpg"
                    className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
                />
                <div className="px-6 lg:px-8">
                    <h2 className="text-xl/6 font-semibold text-white">Découvrez le</h2>
                    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Cameroun
                    </p>

                </div>
            </div>
            <div className='mx-auto max-w-7xl px-6 lg:max-w-7xl lg:px-8'>
                <div className="relative mt-8 lg:row-span-2">
                    <div className="absolute inset-px rounded-2xl bg-gray-900"></div>
                    <div className="relative min-h-[30rem] w-full grow">
                        <div className='absolute -top-5 left-10 text-gray-900 p-4 rounded-sm bg-gray-500 text-md font-semibold w-max'>
                            Feature
                        </div>
                        <div className="px-8 pb-4 pt-8 sm:px-10 sm:pb-0 md:pt-10 max-h-screen overflow-y-auto">
                            <h3 className="font-bold text-white">Bienvenue au Cameroun : La Destination Idéale pour vos Investissements</h3>
                            <p className="mt-4 text-sm text-gray-300">
                                Le Cameroun, véritable locomotive économique de l'Afrique centrale, se distingue par une économie diversifiée et résiliente, offrant un cadre propice à l’investissement. Avec un PIB nominal estimé à 45 milliards USD et un taux de croissance économique soutenu entre 4 et 5 % par an, le pays se positionne comme un hub stratégique pour les affaires en Afrique.
                            </p>
                            <h4 className="mt-6 font-semibold text-white">Une Économie Diversifiée aux Secteurs Dynamiques</h4>
                            <ul className="mt-4 list-disc  text-sm  list-inside text-gray-300">
                                <li><strong>Agriculture (20 % du PIB)</strong> : Le Cameroun est un leader mondial dans la production de cacao et de café, en plus d'une offre variée incluant bananes, coton, huile de palme et thé.</li>
                                <li><strong>Industrie (30 % du PIB)</strong> : Une forte base industrielle portée par la transformation agroalimentaire, le textile, le bois, le ciment et les produits pétroliers.</li>
                                <li><strong>Services (50 % du PIB)</strong> : Secteurs en pleine expansion comme les télécommunications, la finance, le transport et le tourisme, soutenus par une demande croissante.</li>
                            </ul>
                            <p className="mt-4 text-sm text-gray-300">
                                Le Cameroun bénéficie également d'une position géographique stratégique, reliant l’Afrique centrale et occidentale à un marché potentiel de plus de 200 millions de consommateurs via la CEMAC.
                            </p>
                            <p className="mt-4 text-sm text-gray-300">
                                Avec une main-d'œuvre jeune et dynamique, des ressources naturelles abondantes et une économie libérale ouverte aux investisseurs étrangers, le Cameroun offre des opportunités uniques dans des secteurs clés comme l'agriculture, l'énergie, les infrastructures et les nouvelles technologies.
                            </p>
                        </div>
                    </div>
                    <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                </div>
            </div>
            <div className="overflow-hidden bg-white py-20 sm:py-20">
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 lg:grid-cols-2 p-8">
                    <div className="group relative">
                        <img
                            src="https://static.vecteezy.com/system/resources/thumbnails/010/199/592/small_2x/cameroon-map-on-the-world-map-vector.jpg"
                        />
                    </div>
                    <div className='group relative'>
                        <ul role="list" className="rounded-lg -my-6 divide-y divide-gray-200">
                            {infos.map((info) => (
                                <li className="py-4">
                                    <div className="min-w-0 flex align-item-center justify-around lg:items-center lg:justify-between">
                                        <info.icon aria-hidden="true" className="size-6" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{info.title}</p>
                                            <p className="mt-1 text-sm text-gray-500">{info.value}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='mx-auto mb-4 max-w-2xl px-6 lg:max-w-7xl lg:px-8'>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {images.map((image) => (
                        <div className="group relative">
                            <img
                                alt={image.alt}
                                src={image.src}
                                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PresentationCameroun;
import React from 'react';

const PresentationCameroun: React.FC = () => {
    const images = [
        { src: 'https://images.pexels.com/photos/17290983/pexels-photo-17290983/free-photo-of-ville-art-monument-statue.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: '' },
        { src: 'https://images.pexels.com/photos/17290975/pexels-photo-17290975/free-photo-of-ville-voitures-circulation-trafic.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: '' },
        { src: 'https://images.pexels.com/photos/17290954/pexels-photo-17290954/free-photo-of-ville-paysage-batiments-buildings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: '' },
        { src: 'https://images.pexels.com/photos/12251153/pexels-photo-12251153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: '' },
    ]

    const infos = [
        { title: 'Capitale', value: 'Yaoundé', size: 'w-6 h-6', color: 'bg-green-500', orbit: 'animate-orbit1' },
        { title: 'Superficie', value: '475 442 km²', size: 'w-6 h-6', color: 'bg-red-500', orbit: 'animate-orbit2' },
        { title: 'Population', value: '26 545 863 hab.', size: 'w-6 h-6', color: 'bg-yellow-500', orbit: 'animate-orbit3' },
        { title: 'Langues officielles', value: 'Français, Anglais', size: 'w-6 h-6', color: 'bg-green-500', orbit: 'animate-orbit4' },
        { title: 'Monnaie', value: 'Franc CFA (XAF)', size: 'w-6 h-6', color: 'bg-red-500', orbit: 'animate-orbit5' },
        { title: 'Fuseau horaire', value: 'UTC+1', size: 'w-6 h-6', color: 'bg-yellow-300', orbit: 'animate-orbit6' },
    ];

    const stats = [
        { id: 1, name: 'Agriculture, industrie, services', value: 'Secteurs' },
        { id: 2, name: 'pétrole, gaz, minerais, forêts', value: 'Ressources' },
        { id: 3, name: 'Consommateurs marchés régionaux', value: '300 millions' },
    ]

    return (
        <div>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://s.rfi.fr/media/display/a81774c2-e639-11ec-bd1c-005056a9a7b9/w:980/p:16x9/PLACEYAOUNDE.jpg"
                    className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
                />
                <div className="w-full px-6 lg:px-8">
                    <h1 className="mt-2 text-pretty text-4xl text-center font-semibold tracking-tight text-white sm:text-5xl">Découvrez le Cameroun</h1>
                    <p className="text-xl/6 font-semibold text-gray-900 text-center">
                        Un pays d'opportunités et de diversité
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
                        <div className="px-8 pb-4 pt-10 sm:px-10 sm:pb-0 md:pt-12 max-h-screen overflow-y-auto">
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
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 lg:grid-cols-2 items-center">
                    <div className="group relative">
                        <img
                            src="https://static.vecteezy.com/system/resources/thumbnails/010/199/592/small_2x/cameroon-map-on-the-world-map-vector.jpg"
                        />
                    </div>
                    <div className='group relative'>
                        <div className="flex items-center justify-center h-screen relative overflow-hidden">
                            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center relative z-10 shadow-xl shadow-yellow-500 animate-pulse">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg"
                                    alt="Cameroon Flag"
                                    className="w-full h-full object-cover rounded-full border-2 border-yellow-500"
                                />
                            </div>
                            {infos.map((info, index) => (
                                <div
                                    key={index}
                                    className={`absolute ${info.orbit} flex items-center justify-center`}
                                    style={{
                                        transformOrigin: '0 0',
                                        transform: `rotate(${index * (360 / infos.length)}deg) translate(200px) rotate(-${index * (360 / infos.length)}deg)`,
                                    }}
                                >
                                    <div className={`${info.size} ${info.color} rounded-full shadow-md flex items-center justify-center relative`}>
                                        <div
                                            className="absolute top-full mt-2 flex flex-col items-center justify-center text-center whitespace-nowrap bg-white p-2 rounded-lg shadow-md"
                                        >
                                            <p className="text-sm font-medium text-gray-900">{info.title}</p>
                                            <p className="mt-1 text-sm text-gray-500">{info.value}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
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
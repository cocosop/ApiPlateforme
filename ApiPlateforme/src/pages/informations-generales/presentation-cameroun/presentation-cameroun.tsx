import { InformationCircleIcon, StarIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { NavLink } from 'react-router-dom';

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

    const region = [
        { id: 1, region: "Adamaoua", chefLieu: "Ngaoundéré", departements: 5, langues: "français (majoritaire), anglais" },
        { id: 2, region: "Centre", chefLieu: "Yaoundé", departements: 10, langues: "français (majoritaire), anglais" },
        { id: 3, region: "Est", chefLieu: "Bertoua", departements: 4, langues: "français (majoritaire), anglais" },
        { id: 4, region: "Extrême-Nord", chefLieu: "Maroua", departements: 6, langues: "français (majoritaire), anglais" },
        { id: 5, region: "Littoral", chefLieu: "Douala", departements: 4, langues: "français (majoritaire), anglais" },
        { id: 6, region: "Nord", chefLieu: "Garoua", departements: 4, langues: "français (majoritaire), anglais" },
        { id: 7, region: "Ouest", chefLieu: "Bafoussam", departements: 8, langues: "français (majoritaire), anglais" },
        { id: 8, region: "Sud", chefLieu: "Ebolowa", departements: 4, langues: "français (majoritaire), anglais" },
        { id: 9, region: "Nord-Ouest", chefLieu: "Bamenda", departements: 7, langues: "anglais (majoritaire), français" },
        { id: 10, region: "Sud-Ouest", chefLieu: "Buea", departements: "--", langues: "anglais (majoritaire), français" },
    ];

    const languesRowspan: { [key: string]: number } = {
        "français (majoritaire), anglais": 8,
        "anglais (majoritaire), français": 2,
    };

    let renderLangues: { [key: string]: boolean } = {}; // Pour suivre si une langue a déjà été rendue


    const cities = [
        { name: "Douala", population: "2,2 millions d'habitants" },
        { name: "Yaoundé", population: "1,7 million d'habitants" },
        { name: "Garoua", population: "600 000 d'habitants" },
        { name: "Bafoussam", population: "400 000 d'habitants" },
        { name: "Nkongsamba", population: "300 000 d'habitants" },
        { name: "Bamenda", population: "280 000 d'habitants" },
        { name: "Edéa", population: "250 000 d'habitants" },
        { name: "Kribi", population: "220 000 d'habitants" },
        { name: "Maroua", population: "220 000 d'habitants" },
        { name: "N'Gaoundéré", population: "200 000 d'habitants" },
    ];

    return (
        <div>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://s.rfi.fr/media/display/a81774c2-e639-11ec-bd1c-005056a9a7b9/w:980/p:16x9/PLACEYAOUNDE.jpg"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-50"
                />
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-bold text-white reveal">
                        Découvrez le Cameroun
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                        Un pays d'opportunités et de diversité
                    </p>
                </div>
            </div>
            <div aria-label="Breadcrumbs" className="bg-gray-100 sticky top-24 z-10 flex align-center space-x-2 text-sm font-semibold p-6 lg:p-8 border-spacing-1">
                <NavLink className="text-slate-500 hover:text-slate-900 hover:underline" to={'/'}>Accueil</NavLink>
                <div aria-hidden="true" className="text-slate-400 select-none">/</div>
                <p className="text-slate-500">Informations générales</p>
                <div aria-hidden="true" className="text-slate-400 select-none">/</div>
                <p className="text-slate-500">Présentation du Cameroun</p>
            </div>
            <div className="bg-white py-20 sm:py-20 relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative mt-8 lg:row-span-2 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500">
                        <div className="absolute inset-0 bg-gray-900 opacity-90 rounded-2xl"></div>
                        <div className="relative min-h-auto pb-6 w-full grow">
                            <div className="z-10 absolute -top-5 left-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 p-4 rounded-md shadow-lg text-sm font-semibold w-max">
                                Feature
                            </div>
                            <div className="px-8 pb-4 pt-10 sm:px-10 sm:pb-0 md:pt-12 text-white">
                                <h3 className="font-bold text-2xl sm:text-3xl">
                                    Bienvenue au Cameroun : La Destination Idéale pour vos Investissements
                                </h3>
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
                        <div className="pointer-events-none absolute inset-px rounded-2xl shadow-lg ring-2 ring-blue-500/50"></div>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden bg-white py-20 sm:py-20">
                <h2 className='order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl text-center'>Situation géographique</h2>
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
                                            className="absolute top-full mt-2 flex flex-col items-center justify-center text-center whitespace-nowrap bg-white p-2 rounded-lg shadow-md transform transition duration-500 hover:scale-105"
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
            <div className='mx-auto mb-4 max-w-2xl px-6 lg:max-w-6xl lg:px-8'>
                <h2 className='order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl text-center'>Principales villes</h2>
                <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {cities.map((city, index) => (
                        <div
                            key={index}
                            className="relative group bg-white rounded-2xl shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl"
                        >
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-gray-800">{city.name}</h2>
                                <InformationCircleIcon className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
                            </div>
                            <div
                                className="absolute inset-0 flex items-center justify-center bg-blue-100 bg-opacity-90 text-center text-blue-900 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity p-4 rounded-2xl"
                            >
                                {city.population}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mx-auto mb-4 max-w-xl px-6 lg:max-w-4xl lg:px-8">
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900 text-center mb-6">
                    Les 10 régions camerounaises et leurs chefs-lieux et langues
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                        <thead className="bg-green-900 text-gray-200">
                            <tr>
                                <th className="px-4 py-2 border border-gray-300 text-xs font-semibold uppercase tracking-wider">
                                    Nº
                                </th>
                                <th className="px-4 py-2 border border-gray-300 text-xs font-semibold uppercase tracking-wider">
                                    Région
                                </th>
                                <th className="px-4 py-2 border border-gray-300 text-xs font-semibold uppercase tracking-wider">
                                    Chef-lieu
                                </th>
                                <th className="px-4 py-2 border border-gray-300 text-xs font-semibold uppercase tracking-wider">
                                    Nombre de départements
                                </th>
                                <th className="px-4 py-2 border border-gray-300 text-xs font-semibold uppercase tracking-wider">
                                    Langues officielles
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {region.map((item, index) => (
                                <tr key={item.id} className="bg-green-200">
                                    <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
                                    <td className="px-4 py-2 border border-gray-300">{item.region}</td>
                                    <td className="px-4 py-2 border border-gray-300">{item.chefLieu}</td>
                                    <td className="px-4 py-2 border border-gray-300">{item.departements}</td>
                                    {!renderLangues[item.langues] && (
                                        <td
                                            className="px-4 py-2 border border-gray-300"
                                            rowSpan={languesRowspan[item.langues] || 1}
                                        >
                                            {item.langues}
                                        </td>
                                    )}
                                    {renderLangues[item.langues] = true}
                                </tr>
                            ))}
                        </tbody>
                    </table>
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

            <div className="mx-auto mb-4 max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="relative mt-8 lg:row-span-2 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-white opacity-90 rounded-2xl"></div>
                    <div className="relative min-h-auto pb-6 w-full grow">
                        <div className="z-10 absolute -top-5 left-10 bg-gradient-to-r from-green-500 via-red-500 to-yellow-400 text-gray-900 p-4 rounded-md shadow-lg text-sm font-semibold w-max">
                            <StarIcon className="w-4 h-4 text-yellow-200" />
                        </div>
                        <div className="px-8 pb-4 pt-10 sm:px-10 sm:pb-0 md:pt-12 text-gray-900">
                            <h3 className="font-bold text-2xl sm:text-3xl">
                                Priorités du gouvernement
                            </h3>
                            <p className="text-justify leading-relaxed text-gray-700">
                                La vision à long terme du Cameroun comme pays émergent, démocratique et uni en 2035, a conduit à une réflexion globale et à l’adoption des orientations contenues dans le Document de Stratégie pour la Croissance et l’Emploi (DSCE). Le DSCE, comme document d’orientation par excel- lence, valable pour une période de dix ans (2010- 2020), recense les objectifs que le Cameroun s’est fixé au cours de cette période et qui se résument comme suit :                                </p>
                            <ul className="list-disc  text-sm  list-inside text-gray-500 text-justify">
                                <li>relever la croissance à un niveau moyen de 5,5% par an jusqu’en 2020 ;</li>
                                <li>ramener le sous- emploi de 75,8% à 50% en 2020 ;</li>
                                <li>ramener le taux de pauvreté autour de 28% en 2020.</li>
                            </ul>
                            <p className="text-base leading-relaxed text-gray-700">
                                Pour atteindre ces 03 grands objectifs, trois stratégies ont été définies à savoir :                                </p>
                            <ul className="list-disc  text-sm  list-inside text-gray-500 text-justify">
                                <li>la stratégie de croissance ;</li>
                                <li>la stratégie de l’emploi ;</li>
                                <li>la stratégie de gouvernance.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="pointer-events-none absolute inset-px rounded-2xl shadow-lg ring-2 ring-red-500/50"></div>
                </div>
            </div>

            {/* <div className="mx-auto mb-4 max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="px-8 pb-4 pt-10 sm:px-10 sm:pb-0 md:pt-12">
                    <h3 className="font-bold text-2xl sm:text-3xl text-center">
                        Priorités du gouvernement
                    </h3>
                    <p className="mt-4 text-sm text-gray-500 text-justify">
                        La vision à long terme du Cameroun comme pays émergent, démocratique et uni en 2035, a conduit à une réflexion globale et à l’adoption des orientations contenues dans le Document de Stratégie pour la Croissance et l’Emploi (DSCE). Le DSCE, comme document d’orientation par excel- lence, valable pour une période de dix ans (2010- 2020), recense les objectifs que le Cameroun s’est fixé au cours de cette période et qui se résument comme suit :                                </p>
                    <ul className="mt-4 list-disc  text-sm  list-inside text-gray-500 text-justify">
                        <li>relever la croissance à un niveau moyen de 5,5% par an jusqu’en 2020 ;</li>
                        <li>ramener le sous- emploi de 75,8% à 50% en 2020 ;</li>
                        <li>ramener le taux de pauvreté autour de 28% en 2020.</li>
                    </ul>
                    <p className="mt-4 text-sm text-gray-500 text-justify">
                        Pour atteindre ces 03 grands objectifs, trois stratégies ont été définies à savoir :                                </p>
                    <ul className="mt-4 list-disc  text-sm  list-inside text-gray-500 text-justify">
                        <li>la stratégie de croissance ;</li>
                        <li>la stratégie de l’emploi ;</li>
                        <li>la stratégie de gouvernance.</li>
                    </ul>
                </div>
            </div> */}
        </div>
    );
};

export default PresentationCameroun;

import { NavLink } from "react-router-dom";
import ActionButtonComponent from '../../../components/actionButtonComponent/actionButtonComponent';
import { AcademicCapIcon } from "@heroicons/react/20/solid";
import { MapIcon, MapPinIcon, TruckIcon } from "lucide-react";

const statistiques = [
    { id: 1, name: "Projets Miniers", value: "6+", icon: MapIcon },
    { id: 2, name: "Sites Désenclavés", value: "10+", icon: TruckIcon },
    { id: 3, name: "Cartes Géologiques", value: "1/200k", icon: MapPinIcon },
    { id: 4, name: "Formations Ciblées", value: "50+", icon: AcademicCapIcon }
]

const MinesMetallurgieSiderurgie = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://img.freepik.com/photos-gratuite/capture-grand-angle-lac-dans-carriere_181624-45834.jpg?t=st=1738424235~exp=1738427835~hmac=38b455316557a597b07b389d7db195e61edc15eb09427daf46fd9a6405164889&w=740"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-50"
                    alt="Background"
                />
                <div className="relative z-10 text-start text-white px-6 lg:px-24">
                    <h1 className="text-4xl font-bold">Pilier Mines &bull; Métallurgie &bull; Sidérurgie</h1>
                    <p className="mt-4 text-lg max-w-2xl">
                        Le secteur des mines, de la métallurgie et de la sidérurgie joue un rôle crucial dans le développement économique. Il offre des opportunités d'investissement et de croissance grâce à l'exploitation des ressources naturelles et à la transformation des matières premières.
                    </p>
                    <div className="mt-6 py-2">
                        <ActionButtonComponent
                            title="Explorez les opportunités"
                            color="#AAA9AD"
                            filterSecteur="Mines/Métallurgie/Sidérurgie"
                        />
                    </div>
                </div>
            </div>

            {/* Breadcrumbs */}
            <div aria-label="Breadcrumbs" className="bg-gray-100 sticky top-24 z-10 flex align-center space-x-2 text-sm font-semibold p-6 lg:p-8 border-spacing-1 overflow-scroll">
                <NavLink className="text-slate-500 hover:text-slate-900 hover:underline" to="/">
                    Accueil
                </NavLink>
                <div aria-hidden="true" className="text-slate-400 select-none">
                    /
                </div>
                <p className="text-slate-500">Sections et Opportunités</p>
                <div aria-hidden="true" className="text-slate-400 select-none">
                    /
                </div>
                <p className="text-slate-500">Pilier Mines&bull;Métallurgie&bull;Sidérurgie</p>
            </div>
            {/* Objectif Section */}
            <div className="bg-white py-20 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Objectif Stratégique</h2>
                    <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
                        Capitaliser le dynamisme des opérateurs nationaux du secteur pour enfin valoriser le riche potentiel des ressources minières et amorcer le démar- rage des grands projets miniers à moyen terme.
                    </p>
                </div>
            </div>
            {/* Section Principale */}
            <div className="overflow-hidden bg-gray-50 py-20 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Nos Actions</h2>

                    {/* Cartes Thématiques */}
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">

                        {/* Projets Phares */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://img.freepik.com/photos-gratuite/charbon-se-deplace-long-bande-transporteuse_60438-3756.jpg?t=st=1738424639~exp=1738428239~hmac=30cb06c9c3a6a273b5ae1702489345cc599dad5b7a3df50130057f9c1b776d1e&w=826"
                                    alt="Projets Phares"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Projets Phares</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Extension d'ALUCAM à Edéa</li>
                                    <li>Méga aluminerie de Kribi</li>
                                    <li>Fer de Mbalam</li>
                                    <li>Nickel-Cobalt de Lomié</li>
                                    <li>Rutile d'Akonolinga</li>
                                    <li>Calcaire de Mintom</li>
                                </ul>
                            </div>
                        </div>

                        {/* Exploitation et Valorisation */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://img.freepik.com/photos-gratuite/gros-plan-vieux-coquillages-sol-recouvert-terre-mousse-sous-lumiere-du-soleil_181624-32305.jpg?t=st=1738424693~exp=1738428293~hmac=4ea251b8eaccaee44f0125175bee97611f7b3127b394f698429025b2839a9a8f&w=740"
                                    alt="Exploitation et Valorisation"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Exploitation et Valorisation</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Valorisation industrielle de l'Or et du Diamant</li>
                                    <li>Laboratoire national d'analyse des substances minérales</li>
                                    <li>Partenariats stratégiques (SNH et opérateurs miniers)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Infrastructures et Logistique */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://img.freepik.com/photos-gratuite/vue-interieure-acierie_1359-305.jpg?t=st=1738425221~exp=1738428821~hmac=0f7c351f6417c540de5f6151df61de9d88330d7219aa9bbb85a6df7068e84f23&w=740"
                                    alt="Infrastructures et Logistique"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Infrastructures et Logistique</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Désenclavement des sites miniers</li>
                                    <li>Amélioration des moyens de production (énergie, eau)</li>
                                    <li>Cartes géologiques renseignées (1/200 000)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Formation et Expertise */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://img.freepik.com/photos-gratuite/technicien-afro-americain-verifie-entretien-panneaux-solaires-groupe-trois-ingenieurs-noirs-reunis-station-solaire_627829-4860.jpg?t=st=1738425372~exp=1738428972~hmac=dda341507e26be373ca61a79e9972a44ef6dbc6dda17b1ca68891b940c69eae1&w=740"
                                    alt="Formation et Expertise"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Formation et Expertise</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Amélioration des moyens techniques des établissements</li>
                                    <li>Plans de formation ciblés</li>
                                    <li>Promotion de l'expertise nationale</li>
                                </ul>
                            </div>
                        </div>

                        {/* Innovation et Politiques */}
                        <div className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Innovation et Politiques"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">Innovation et Politiques</h3>
                                <ul className="mt-2 text-sm text-gray-600 px-4 list-disc text-left">
                                    <li>Développement de la créativité et de l'innovation</li>
                                    <li>Harmonisation des politiques minières</li>
                                    <li>Réduction des barrières institutionnelles</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Indicateurs Clés */}
            <div className="bg-white py-20 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Chiffres Clés</h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {statistiques.map((stat) => (
                            <div key={stat.id} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                                <div className="flex justify-center">
                                    <stat.icon className="h-12 w-12 text-[#AAA9AD]" />
                                </div>
                                <p className="mt-4 text-3xl font-bold text-gray-900">{stat.value}</p>
                                <p className="mt-2 text-lg text-gray-600">{stat.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MinesMetallurgieSiderurgie;
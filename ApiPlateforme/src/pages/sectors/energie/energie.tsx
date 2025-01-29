import { AcademicCapIcon, BoltIcon, GlobeAltIcon, LightBulbIcon } from '@heroicons/react/20/solid'
import { NavLink } from "react-router-dom";
import ActionButtonComponent from '../../../components/actionButtonComponent/actionButtonComponent';
import { FireIcon } from '@heroicons/react/24/outline';

const features = [
    { name: 'Construction du Réseau de Gazoducs.', description: 'Réalisation des gazoducs reliant Limbé et Kribi à Douala, Ebolowa, Yaoundé, Bafoussam et Bamenda pour amorcer le basculement au gaz naturel pour véhicules (GNV) avec la collaboration des distributeurs.', icon: FireIcon },
    { name: 'Création de Centrales de Secours.', description: 'Mise en place de centrales de secours à Douala (300 MW), Yaoundé (300 MW), Bafoussam (100 MW), Bamenda (100 MW), Ebolowa (40 MW) et Limbé (40 MW).', icon: BoltIcon },
    { name: 'Construction de Voies Ferroviaires.', description: 'Construction de 1850 km de voies ferroviaires pour la collecte et l’exportation du bois-énergie.', icon: GlobeAltIcon },
    { name: 'Fourniture d’Énergie Électrique.', description: 'Fourniture de 50 TWh d’énergie électrique au Nigeria et aux États de la CEMAC.', icon: AcademicCapIcon },
];

const imagesCards = [
    { imageSrc: 'https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', imageAlt: 'solaire' },
    { imageSrc: 'https://images.unsplash.com/photo-1467579424161-6bbc141569d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', imageAlt: 'eolienne' },
    { imageSrc: 'https://plus.unsplash.com/premium_photo-1678167657597-665c6589a3a6?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', imageAlt: 'hydraulique' },
    { imageSrc: 'https://images.unsplash.com/photo-1678984239787-96f69f24ac22?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', imageAlt: 'carburant' },
];

const energie = () => {
    return (
        <div>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-50"
                />
                <div className="relative z-10 text-start text-white px-20 lg:px-24">
                    <h1 className="text-4xl font-bold">Investir dans le sanctuaire de</h1>
                    <h1 className="text-4xl font-bold">l'énergie</h1>
                    <p className="mt-4 text-md">
                        Le Cameroun offre de nombreuses opportunités d'investissement dans le secteur de l'énergie,
                    </p>
                    <p className="text-md">
                        notamment dans les énergies renouvelables et la production d'électricité.
                    </p>
                    <div className="mt-6 py-2">
                        <ActionButtonComponent title=" Explorez les opportunités" color='#F5BA3A' />
                    </div>
                </div>
            </div>
            <div aria-label="Breadcrumbs" className="bg-gray-100 sticky top-24 z-10 flex align-center space-x-2 text-sm font-semibold p-6 lg:p-8 border-spacing-1">
                <NavLink className="text-slate-500 hover:text-slate-900 hover:underline" to={'/'}>Accueil</NavLink>
                <div aria-hidden="true" className="text-slate-400 select-none">/</div>
                <p className="text-slate-500" >Sections et Opportunités</p>
                <div aria-hidden="true" className="text-slate-400 select-none">/</div>
                <p className="text-slate-500">Sanctuaire Energie</p>
            </div>
            {/* Actions Stratégiques */}
            <div className="overflow-hidden bg-white py-20 sm:py-20">
                <div className="mx-auto max-w-full px-6 lg:px-8">
                    <div className="mx-auto grid items-center max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <h2 className="text-3xl font-bold text-center mb-8">Actions Stratégiques</h2>
                            <div className="lg:max-w-full">
                                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <div className='flex items-center gap-4'>
                                                <div className="flex items-center justify-center w-12 h-12 p-4 bg-yellow-100 rounded-full">
                                                    <feature.icon aria-hidden="true" className="size-6 text-[#F5BA3A]" />
                                                </div>
                                                <div>
                                                    <h4 className='text/lg text-gray-900'>{feature.name}</h4>
                                                    <p className='text/md text-gray-500'>{feature.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <div className="mx-auto mb-4 max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                            <div className="relative mt-8 lg:row-span-2 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500">
                                <div className="relative min-h-auto w-full grow">
                                    <div className="z-10 absolute -bottom-5 left-10 bg-white text-gray-900 p-4 rounded-md shadow-lg text-sm font-semibold w-max">
                                        <div className='flex text-yellow-400'>
                                            <LightBulbIcon className="h-6 w-6" />
                                            <h3 className="font-bold text-xl">Innovation</h3>
                                        </div>
                                        <p className='text-gray-500 text-md'>Technologies énergétiques.</p>
                                    </div>
                                    <div className="text-white">
                                        <img
                                            src="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt="energie"
                                            className="w-full h-96 object-cover rounded-2xl shadow-lg" />
                                    </div>
                                </div>
                                <div className="pointer-events-none absolute inset-px rounded-2xl shadow-lg ring-2 ring-gray-900"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-white py-20 sm:py-20">
                <div className="mx-auto max-w-full px-6 lg:px-8">
                    <div className="mx-auto grid items-center max-w-xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-1">
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
                            {imagesCards.map((image) => (
                                <img
                                    alt={image.imageAlt}
                                    src={image.imageSrc}
                                    className="aspect-square w-full rounded-xl bg-gray-200 object-cover lg:aspect-auto lg:h-80"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default energie;
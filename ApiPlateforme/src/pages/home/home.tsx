<<<<<<< HEAD
import { Box, CardActions, CardContent, Typography } from "@mui/material";
import HOMEVIDEOUPDATED from '../../assets/videos/COMPLEXE INDUSTRIALO-PORTUAIRE DE KRIBI (cameroun).mp4'
=======
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import HOMEVIDEO from "../../assets/videos/home_video.mp4";
import HOMEVIDEOUPDATED from '../../assets/videos/home_video_update.mp4';
import COLLABORATION from "../../assets/img/collaboration.png"
>>>>>>> 25bdc8aec512523de76b938597bab850b574e63e
import OPTIMISATION from "../../assets/img/optimisation.png"
import AMELIORATION from "../../assets/img/amelioration.png"
import SIMPLIFICATION from "../../assets/img/simplification.png"
import UTILISATION from "../../assets/img/utilisation.png"
import ENREGISTREMENT from "../../assets/img/enregistrement.png"
import REDUCTION from "../../assets/img/reduction.png"
import SUIVI from "../../assets/img/suivi.png"
import ACCES from "../../assets/img/acces.png"
import './home.css'
import React from "react";
import { ArrowForwardIos } from '@mui/icons-material'
import { Link, NavLink } from "react-router-dom";
<<<<<<< HEAD
import ActionButtonComponent from "../../components/actionButtonComponent/actionButtonComponent";
=======
import { motion } from "framer-motion";
>>>>>>> 25bdc8aec512523de76b938597bab850b574e63e

// Interface for objective cards
interface CustomCardProps {
    image: string;
    title: string;
    description: string;
    color: string
}

// Interface for advantage part
interface CustomListProps {
    image: string;
    title: string;
    description: string;
    count: number;
}

//Objective template
const CustomCard: React.FC<CustomCardProps> = ({ image, title, description, color }) => (
    <div>
        <div style={{ width: "21rem", height: "27rem" }}>
            <div style={{ height: "100%", display: "flex", flexDirection: "column", backgroundColor: "#0f0b60", borderRadius: "5px" }}>
                <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
                    <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img style={{ height: "5.5rem", marginTop: "1rem" }} src={image} />
                    </CardContent>
                    <CardContent sx={{ padding: '30px', paddingBottom: 0, backgroundColor: color, borderRadius: '100% 100% 5px 5px', overflow: 'hidden' }}>
                        <Typography sx={{ padding: '15px 15px 0px 15px', fontWeight: "800" }} variant="h6" color="white">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="white" sx={{ mt: 1.5 }}>{description}</Typography>
                        <CardActions sx={{ justifyContent: 'center', backgroundColor: color, mb: 1.5 }}>
                            <NavLink style={{ display: 'flex', color: 'white', textDecoration: 'none', alignItems: 'center' }} to={""} >
                                Plus<ArrowForwardIos />
                            </NavLink>
                        </CardActions>
                    </CardContent>
                </Box>
            </div>
        </div>
    </div>
);

//Data table for the list of objectives
const cardData = [
    {
        image: SIMPLIFICATION,
        title: "Simplification et facilitation des processus",
        description: "Nous prenons en charge et simplifions la création d'entreprises et d'investissements, tout en rendant les procédures plus transparentes.",
        color: "#0E600B"
    },
    {
        image: OPTIMISATION,
        title: "Optimisation du service public",
        description: "Accélérez le traitement des dossiers, améliorez le rendement des agents et la qualité des prestations fournies.",
        color: "#DC2124"
    },
    {
        image: AMELIORATION,
        title: "Amélioration de la communication et du suivi ",
        description: "Nous favorisons l'interaction entre investisseurs et administration, et permettons aux investisseurs de suivre l'évolution de leurs dossiers à distance.",
        color: "#F5BA3A"
    },
];

//Style for advantage template
const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: 2,
    bgcolor: 'background.paper',
    color: 'text.primary',
    '& svg': {
        m: 1,
    },
};

//Advantage template
const CustomList: React.FC<CustomListProps> = ({ image, title, description, count }) => (
    <Box sx={style}>
        <React.Fragment>
            <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                <img style={{ width: '6rem', height: '7rem' }} src={image} />
            </CardContent>
            <CardContent>
                <Typography className="text-balance font-semibold tracking-tight text-center">{title}</Typography>
                <Typography variant="body2" sx={{ mt: 1.5, position: 'relative', textAlign: 'justify' }}>
                    {description}
                    <div className="fourth-count">
                        {count}
                    </div>
                </Typography>
            </CardContent>
        </React.Fragment>
    </Box>

);

//Data table for the list of advantages
const ListData = [
    {
        image: ENREGISTREMENT,
        title: "Enregistrement en ligne des projets",
        description: "Les investisseurs peuvent enregistrer leurs projets directement sur le portail, sans formalités papier. Ce système facilite les démarches et permet un gain de temps considérable, tout en garantissant une gestion sécurisée et accessible à distance.",
        count: 1
    },
    {
        image: REDUCTION,
        title: "Réduction des déplacements",
        description: "Toutes les démarches étant centralisées sur le portail, les investisseurs n’ont plus besoin de se déplacer. Cela simplifie leurs interactions avec l’administration et optimise leur emploi du temps.",
        count: 2
    },
    {
        image: SUIVI,
        title: "Suivi transparent des dossiers",
        description: "Le portail offre une visibilité totale sur l’état d’avancement des dossiers. Les investisseurs peuvent suivre chaque étape du traitement en temps réel, ce qui renforce la confiance et réduit les incertitudes.",
        count: 3
    },
    {
        image: ACCES,
        title: "Accès rapide à l’information",
        description: "Le portail permet d’accéder instantanément à des informations clés sur les démarches et les services disponibles. Ce gain de temps aide les investisseurs à mieux planifier et exécuter leurs projets.",
        count: 4
    },
];

//Data table for the list of testimonies

const testimonies = [
    {
        id: 1,
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        author: {
            name: 'Michael Foster',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        author: {
            name: 'Michael Foster',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        author: {
            name: 'Michael Foster',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    // More posts...
]


const home = () => {
    return (
        <div>
            <div className="hero-container bg-gray-100 grid p-20 grid-cols-1 gap-x-6 xl:grid-cols-1 lg:grid-cols-1 items-center relative">
                <div className="absolute bottom-10 right-4z-10 h-24 rounded">
                    scroll
                </div>
                <video className="video-background" autoPlay muted loop>
<<<<<<< HEAD
                    <source
                        src={HOMEVIDEOUPDATED}
                        type="video/mp4"
                    />
=======
                    <source src={HOMEVIDEOUPDATED} type="video/mp4" />
>>>>>>> 25bdc8aec512523de76b938597bab850b574e63e
                    Your browser does not support the video tag.
                </video>
                <div className="video-background-overlay"></div>
                <div className="group relative hero-content">
                    <div className="text-start">
<<<<<<< HEAD
                        <h1 className="max-w-2xl	text-balance font-bold tracking-tight text-[#0F0B60] sm:text-5xl subpixel-antialiased leading-8 p-4 bg-[#ffffffd1]">
=======
                        <h1 className="max-w-2xl	text-balance font-bold tracking-tight text-[#0F0B60] sm:text-5xl antialiased subpixel-antialiased leading-8 p-4 bg-[#ffffffd1]">
>>>>>>> 25bdc8aec512523de76b938597bab850b574e63e
                            Portail d'investissement du <span className="text-[#0E600B]"> Cameroun </span>
                        </h1>
                        <p className="mt-8 font-light sm:text-md/6 leading-7 max-w-2xl text-justify text-white">
                            Découvrez les opportunités d'investissement au Cameroun grâce à notre portail dédié,
                            source incontournable pour les investisseurs. Accédez à des informations sur les secteurs
                            porteurs, la réglementation, des sites d’investissement géolocalisés et connectez-vous aux
                            acteurs clés. Profitez aussi de conseils sur les procédures de création d'entreprise pour
                            réussir sur ce marché dynamique.
                        </p>
                        <div className="mt-10 flex items-center">
                            <NavLink to="/projets"
                                className="rounded-md p-3 border border-solid border-white hover:border-[#0E600B] text-sm font-semibold text-white shadow-sm hover:bg-[#0E600B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 mr-5"
                            >
                                Guide de l'investisseur
                            </NavLink>
<<<<<<< HEAD
                            <ActionButtonComponent title="Investissez maintenant" color="#0F0B60" />
=======
                            <CallToActionButton />
>>>>>>> 25bdc8aec512523de76b938597bab850b574e63e
                        </div>
                    </div>
                </div>
                {/* <div className="group relative">
                    <video loop style={{ height: "24rem", width: '100%' }} autoPlay src={HOMEVIDEO} />
                </div> */}

            </div>
            <div className="trans"></div>

            <div className="second-content">
                <div className="second-title">
                    <h2 className=" font-black max-w-xl uppercase text-4xl mt-4 mb-2 leading-10 pb-5">Gérez votre investissement de manière efficace et efficiente</h2>
                    <span id="divider"></span>
                </div>
                <div className="w-full flex flex-row justify-evenly">
                    {cardData.map((data, index) => (
                        <CustomCard
                            key={index}
                            image={data.image}
                            title={data.title}
                            description={data.description}
                            color={data.color}
                        />
                    ))}
                </div>
            </div>
            <div className='third-content'>
                <h2 className="text-2xl font-semibold mt-4 mb-2">Qui peut utiliser cette plateforme</h2>
                <span id="divider"></span>
                <div className="grid grid-cols-1 gap-x-6 xl:grid-cols-2 lg:grid-cols-2 p-8">
                    <div className='group relative'>
                        <p className="font-semibold">Tout investisseur ou porteur de projet désirant :</p>
                        <ul >
                            <li>Accéder à des informations sur tous les aspects de la mise en place de son projet d’investissement ;</li>
                            <li>Enregistrer officiellement son projet d’investissement ;</li>
                            <li>Profiter des avantages prévus par la réglementation en matière d’encouragement à l’investissement ;</li>
                            <li>Soumettre une demande pour obtenir un terrain économique ;</li>
                            <li>Utiliser les services offerts par la plateforme.</li>
                        </ul>
                    </div>
                    <div className='group relative'>
                        <img src={UTILISATION} alt="utilisation-img" style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
            <div className="fourth-content mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-2xl font-semibold mt-4 mb-2">Avantages</h2>
                <span id="divider"></span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
                    {ListData.map((data, index) => (
                        <CustomList
                            key={index}
                            image={data.image}
                            title={data.title}
                            description={data.description}
                            count={data.count}
                        />
                    ))}
                </div>
            </div>

            <div className="fifth-content mx-auto max-w-7xl px-6 lg:px-8 py-8">
                <h2 className="text-2xl font-semibold  text-[#0F0B60] mt-4 mb-2">Nos investisseurs témoignent</h2>
                <span id="divider"></span>
                <div className="mx-auto mb-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {testimonies.map((testimony) => (
                        <article key={testimony.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="group relative">
                                <p className="mt-5 line-clamp-3 text-sm/6">{testimony.description}</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img alt="" src={testimony.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
                                <div className="text-sm/6">
                                    <p className="font-semibold text-[#0F0B60]">
                                        <span className="absolute inset-0" />
                                        {testimony.author.name}
                                    </p>
                                    <time className="text-gray-500">
                                        {testimony.date}
                                    </time>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="mt-2 flex items-center">
                    <Link to="/#">
                        <button className="more-btn text-sm/6 font-semibold">
                            Plus
                        </button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

const CallToActionButton = () => {
    return (
        <motion.button
            initial={{ "--x": "100%", scale: 1 }}
            animate={{ "--x": "-100%" }}
            whileTap={{ scale: 0.97 }}
            transition={{
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1,
                type: "spring",
                stiffness: 20,
                damping: 15,
                mass: 2,
                scale: {
                    type: "spring",
                    stiffness: 10,
                    damping: 5,
                    mass: 0.1,
                },
            }}
            className="p-3 rounded-md relative radial-gradient cta-button"
        >
            <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
                Investissez maintenant
            </span>
            <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
        </motion.button>
    );
};
export default home;
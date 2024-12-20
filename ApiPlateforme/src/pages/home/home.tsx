import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import HOMEVIDEO from "../../assets/videos/home_video.mp4";
import COLLABORATION from "../../assets/img/collaboration.png"
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
import { NavLink } from "react-router-dom";

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

//Objective cards custom 
const CustomCard: React.FC<CustomCardProps> = ({ image, title, description, color }) => (
    <Box sx={{ width: "18rem", height: "27rem" }}>
        <Card elevation={8} sx={{ height: "100%", displax: "flex", flexDirection: "column" }}>
            <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
                <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img style={{ height: "5rem" }} src={image} />
                </CardContent>
                <CardContent sx={{ padding: '30px', paddingBottom: 0, backgroundColor: color, borderRadius: '100% 100% 0px 0px', overflow: 'hidden' }}>
                    <Typography sx={{ padding: '15px 15px 0px 15px' }} variant="h6" color="white">
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
        </Card>
    </Box>
);

//Array of data for objective card
const cardData = [
    {
        image: SIMPLIFICATION,
        title: "Simplification et facilitation des processus",
        description: "La plateforme prend en charge et simplifie la création d'entreprises et d'investissements, tout en rendant les procédures plus transparentes.",
        color: "#0E600B"
    },
    {
        image: OPTIMISATION,
        title: "Optimisation du service public",
        description: "La plateforme accélère le traitement des dossiers, améliore le rendement des agents et la qualité des prestations fournies.",
        color: "#DC2124"
    },
    {
        image: AMELIORATION,
        title: "Amélioration de la communication et du suivi ",
        description: "Elle favorise l'interaction entre investisseurs et administration, et permet aux investisseurs de suivre l'évolution de leurs dossiers à distance.",
        color: "#F5BA3A"
    },
    {
        image: COLLABORATION,
        title: "Collaboration et accessibilité accrues",
        description: "Elle améliore le fonctionnement des services publics, organise une meilleure collaboration entre eux, et facilite l'accès aux investisseurs, incluant un échange direct entre les agents et organismes concernés.",
        color: "#0F0B60"
    },
];

//Style for advantage list
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

//Advantage List custom 
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

//Array of data for advantage List
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

const home = () => {
    return (
        <div>
            <div className="bg-gray-100 grid p-20 grid-cols-1 gap-x-6 xl:grid-cols-2 lg:grid-cols-2">
                <div className="group relative">
                    <div className="text-start">
                        <h1 className="text-balance font-semibold tracking-tight text-[#0F0B60] sm:text-5xl">
                            Plateforme numérique de <span className="text-[#0E600B]">l'investissement </span>
                        </h1>
                        <p className="mt-8 text-black sm:text-md/6">
                            Découvrez les opportunités d'investissement au Cameroun grâce à notre portail dédié,
                            source incontournable pour les investisseurs. Accédez à des informations sur les secteurs
                            porteurs, la réglementation, des sites d’investissement géolocalisés et connectez-vous aux
                            acteurs clés. Profitez aussi de conseils sur les procédures de création d'entreprise pour
                            réussir sur ce marché dynamique.
                        </p>
                        <div className="mt-10 flex items-center">
                            <NavLink to="/projets"
                                className="rounded-md bg-[#0E600B] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#248920] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                Investir au pays
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="group relative">
                    <video loop style={{ height: "24rem" }} autoPlay src={HOMEVIDEO} />
                </div>

            </div>
            <div className="trans"></div>

            <div className="second-content">
                <div className="second-title">
                    <h2 className="text-2xl font-semibold mt-4 mb-2">Ses Objectifs</h2>
                    <span id="divider"></span>
                </div>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 justify-items-center">
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
                <div className="grid grid-cols-1 gap-x-6 xl:grid-cols-2 lg:grid-cols-2">
                    <div className='third-text'>
                        <p className="font-semibold">Tout investisseur ou porteur de projet désirant :</p>
                        <ul >
                            <li>Accéder à des informations sur tous les aspects de la mise en place de son projet d’investissement ;</li>
                            <li>Enregistrer officiellement son projet d’investissement ;</li>
                            <li>Profiter des avantages prévus par la réglementation en matière d’encouragement à l’investissement ;</li>
                            <li>Soumettre une demande pour obtenir un terrain économique ;</li>
                            <li>Utiliser les services offerts par la plateforme.</li>
                        </ul>
                    </div>
                    <div className='third-img'>
                        <img src={UTILISATION} alt="utilisation-img" />
                    </div>
                </div>
            </div>
            <div className="fourth-content">
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
        </div >
    );
};

export default home;
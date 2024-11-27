import { Box, Button, CardHeader } from "@mui/material";
import YAOUNDE from "../../assets/img/yaounde.jpg"
import './home.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from "react";
import ArrowForwardIosIcon from '@mui/material/Icon';

// interface CustomCardProps {
//     image: string;
//     title: string;
//     subtitle: string;
//     description: string;
//     extra: string;
// }

// const CustomCard: React.FC<CustomCardProps> = ({ image, title, subtitle, description, extra }) => (
//     <Box sx={{ minWidth: 275 }}>
//         <Card variant="outlined">
//             <React.Fragment>
//                 <CardHeader>
//                     <img src={image} />
//                 </CardHeader>
//                 <CardContent>
//                     <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
//                         {subtitle}
//                     </Typography>
//                     <Typography variant="h5" component="div">
//                         {title}
//                     </Typography>
//                     <Typography sx={{ color: "text.secondary", mb: 1.5 }}>{extra}</Typography>
//                     <Typography variant="body2">{description}</Typography>
//                 </CardContent>
//                 <CardActions>
//                     <Button size="small" endIcon={<ArrowForwardIosIcon />}>
//                         Plus
//                     </Button>
//                 </CardActions>
//             </React.Fragment>
//         </Card>
//     </Box>
// );


// const cardData = [
//     {
//         image: YAOUNDE,
//         title: "be.nev.o.lent",
//         subtitle: "Word of the Day",
//         description: 'well meaning and kindly.\n"a benevolent smile"',
//         extra: "adjective",
//     },
//     {
//         image: YAOUNDE,
//         title: "be.nev.o.lent",
//         subtitle: "Word of the Day",
//         description: 'well meaning and kindly.\n"a benevolent smile"',
//         extra: "adjective",
//     },
//     {
//         image: YAOUNDE,
//         title: "be.nev.o.lent",
//         subtitle: "Word of the Day",
//         description: 'well meaning and kindly.\n"a benevolent smile"',
//         extra: "adjective",
//     },
//     {
//         image: YAOUNDE,
//         title: "be.nev.o.lent",
//         subtitle: "Word of the Day",
//         description: 'well meaning and kindly.\n"a benevolent smile"',
//         extra: "adjective",
//     },
// ];

const home = () => {
    return (
        <div>
            <div className='first'>
                <div className='first-text'>
                    <h1>Plateforme numérique de <br /><span style={{ color: '#0E600B' }}>l'investissement </span></h1>
                    <p>
                        Découvrez les opportunités d'investissement au Cameroun grâce à notre portail dédié,
                        source incontournable pour les investisseurs. Accédez à des informations sur les secteurs
                        porteurs, la réglementation, des sites d’investissement géolocalisés et connectez-vous aux
                        acteurs clés. Profitez aussi de conseils sur les procédures de création d'entreprise pour
                        réussir sur ce marché dynamique.
                    </p>

                    <div className='first-btn'>
                        <Button variant="contained" className="invest-btn">Investir au pays</Button>
                    </div>
                </div>
                <div className='first-img'>
                    <img src={YAOUNDE} alt="yaounde-img" />
                </div>
            </div>
            {/* <div className="trans"></div>
            <div className="second">
                <h2 style={{ color: "#0F0B60" }}>Ses Objectif</h2>
                <div className="cards">
                    {cardData.map((data, index) => (
                        <CustomCard
                            key={index}
                            image={data.image}
                            title={data.title}
                            subtitle={data.subtitle}
                            description={data.description}
                            extra={data.extra}
                        />
                    ))}
                </div>
            </div> */}
        </div>
    );
};

export default home;
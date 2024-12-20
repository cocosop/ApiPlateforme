import './faq.css'
import FAQ from '../../assets/img/faq-image.png'
import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material'

// Interface montrant la structure des données des accordéons
interface AccordionData {
    id: string;
    summaryTitle: string;
    details: string;
}

// Interface montrant la structure des données des groupes d'accordéons
interface FaqGroup {
    title: string;
    accordions?: AccordionData[];
}

// Les tableaux contenant les différentes données des accordéons 

const accordionData1: AccordionData[] = [
    {
        id: 'panel1',
        summaryTitle: 'Comment identifier et accéder à un terrain destiné à l’investissement au Cameroun ?',
        details: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    },
    {
        id: 'panel2',
        summaryTitle: 'Quels types de terrains sont disponibles pour les projets industriels, commerciaux ou touristiques ?',
        details: 'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
    },
    {
        id: 'panel3',
        summaryTitle: 'Existe-t-il une base de données nationale des terrains disponibles pour les investisseurs ?',
        details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    },
    {
        id: 'panel4',
        summaryTitle: 'Quelles sont les conditions pour obtenir un titre foncier ou une concession au Cameroun ?',
        details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    },
    {
        id: 'panel5',
        summaryTitle: 'Quels sont les délais moyens pour obtenir un terrain à usage économique ?',
        details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    },
    {
        id: 'panel6',
        summaryTitle: 'Comment résoudre un litige foncier lié à un projet d’investissement ?',
        details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    },
];
const accordionData2: AccordionData[] = [
    {
        id: 'panel7',
        summaryTitle: 'Quelles sont les démarches pour enregistrer une entreprise au Cameroun ?',
        details: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    },
    {
        id: 'panel8',
        summaryTitle: 'Quels sont les types de sociétés reconnus par la loi camerounaise ?',
        details: 'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
    },
    {
        id: 'panel9',
        summaryTitle: 'Quelles formalités doivent être respectées pour employer des collaborateurs étrangers ?',
        details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    },
    {
        id: 'panel10',
        summaryTitle: 'Comment formaliser un partenariat avec des investisseurs locaux ?',
        details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    },
    {
        id: 'panel11',
        summaryTitle: 'Quels sont les délais et les coûts estimés pour créer une société au Cameroun ?',
        details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    },
    {
        id: 'panel12',
        summaryTitle: 'Quelles sont les meilleures pratiques pour développer un projet d’entreprise au Cameroun ?él’investissement au Cameroun ?',
        details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    },
];
const accordionData3: AccordionData[] = [
    {
        id: 'panel13',
        summaryTitle: 'Quels sont les avantages fiscaux pour les nouveaux investissements ?',
        details: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    },
    {
        id: 'panel14',
        summaryTitle: 'Existe-t-il des zones économiques spéciales (ZES) ou des zones franches au Cameroun ?',
        details: 'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
    },
    {
        id: 'panel15',
        summaryTitle: 'Quelles activités économiques bénéficient d’incitations particulières ?',
        details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    },
    {
        id: 'panel16',
        summaryTitle: 'Peut-on bénéficier d’exonérations fiscales ou douanières pour des projets innovants ?',
        details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    },
    {
        id: 'panel17',
        summaryTitle: 'Comment accéder aux programmes de soutien pour les petites et moyennes entreprises ?',
        details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    },
    {
        id: 'panel18',
        summaryTitle: 'Les équipements importés pour les projets sont-ils exonérés de droits de douane ?',
        details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    },
];
const accordionData4: AccordionData[] = [
    {
        id: 'panel19',
        summaryTitle: 'Quels sont les droits et devoirs des investisseurs au Cameroun ?',
        details: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    },
    {
        id: 'panel20',
        summaryTitle: 'Les transferts de bénéfices à l’étranger sont-ils garantis ?',
        details: 'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
    },
    {
        id: 'panel21',
        summaryTitle: 'Quels sont les mécanismes de protection pour les investisseurs étrangers ?',
        details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    },
    {
        id: 'panel22',
        summaryTitle: 'Comment gérer un litige commercial ou fiscal en tant qu’investisseur ?',
        details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    },
    {
        id: 'panel23',
        summaryTitle: 'Quels accords internationaux protègent les investissements au Cameroun ?',
        details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    },
    {
        id: 'panel24',
        summaryTitle: 'Comment les investisseurs sont-ils accompagnés pour sécuriser leurs projets ?',
        details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    },
];
const accordionData5: AccordionData[] = [
    {
        id: 'panel25',
        summaryTitle: 'Quelles sont les opportunités d’investissement actuelles au Cameroun ?',
        details: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    },
    {
        id: 'panel26',
        summaryTitle: 'Où peut-on trouver des statistiques et études de marché sur les secteurs porteurs au Cameroun ?',
        details: 'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
    },
    {
        id: 'panel27',
        summaryTitle: 'Quels services sont proposés aux investisseurs pour faciliter leurs démarches ?',
        details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.',
    },
];

//Le tableau contenant les titres des catégories des accordéons

const faqGroups: FaqGroup[] = [
    {
        title: 'Accès au foncier pour l\'investissement',
        accordions: accordionData1,
    },
    {
        title: 'Création d\'entreprise au Cameroun',
        accordions: accordionData2,
    },
    {
        title: 'Facilitation et incitation pour les investisseurs',
        accordions: accordionData3,
    },
    {
        title: 'Protection et garanties des investissements',
        accordions: accordionData4,
    },
    {
        title: 'Opportunités et ressources disponibles',
        accordions: accordionData5,
    },
];

const faq = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <div className="faq-content">
            <div className="faq-image">
                <img src={FAQ} alt="faq-image" />
            </div>
            <div className="faq-accordion">
                {faqGroups.map(({ title, accordions }, groupIndex) => (
                    <div key={groupIndex} className={`group-${groupIndex + 1}`}>
                        <div id="title">
                            <h2 className='text-2xl font-semibold mt-4 mb-2'>{title}</h2>
                            <span id="divider"></span>
                        </div>
                        {accordions &&
                            accordions.map(({ id, summaryTitle, details }) => (
                                <Accordion
                                    key={id}
                                    expanded={expanded === id} onChange={handleChange(id)}
                                    sx={{ mb: 2 }}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMore sx={{ color: '#2A337B' }} />}
                                        aria-controls={`${id}bh-content`}
                                        id={`${id}bh-header`}
                                    >
                                        <Typography sx={{ color: '#0F0B60' }}>{summaryTitle}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: '#0F0B60', color: '#FFFFFF' }}>
                                        <Typography>{details}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}

                    </div>
                ))}
            </div>
        </div>

    );
};

export default faq;
import './faq.css'
import FAQ from '../../../assets/img/faq-image.png'
import React, { useState } from 'react';
import AccordionsComponent from '../../../components/accordionsComponent/accordionsComponent';

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
        details: 'Pour identifier et accéder à un terrain destiné à l’investissement au Cameroun, vous pouvez consulter les services fonciers locaux, les agences immobilières ou les plateformes en ligne spécialisées. Il est également recommandé de contacter les autorités locales pour obtenir des informations sur les terrains disponibles et les procédures d’acquisition.',
    },
    {
        id: 'panel2',
        summaryTitle: 'Quels types de terrains sont disponibles pour les projets industriels, commerciaux ou touristiques ?',
        details: 'Les types de terrains disponibles pour les projets industriels, commerciaux ou touristiques incluent les terrains industriels, les zones commerciales, les terrains agricoles et les zones touristiques. Chaque type de terrain a des caractéristiques spécifiques et des réglementations particulières.',
    },
    {
        id: 'panel3',
        summaryTitle: 'Existe-t-il une base de données nationale des terrains disponibles pour les investisseurs ?',
        details: 'Oui, il existe une base de données nationale des terrains disponibles pour les investisseurs. Cette base de données est généralement gérée par les autorités foncières et peut être consultée en ligne ou en personne auprès des bureaux fonciers locaux.',
    },
    {
        id: 'panel4',
        summaryTitle: 'Quelles sont les conditions pour obtenir un titre foncier ou une concession au Cameroun ?',
        details: 'Pour obtenir un titre foncier ou une concession au Cameroun, vous devez suivre une procédure administrative qui inclut la soumission d’une demande, la vérification des documents, l’évaluation du terrain et l’approbation par les autorités compétentes. Les conditions spécifiques peuvent varier en fonction du type de terrain et de l’usage prévu.',
    },
    {
        id: 'panel5',
        summaryTitle: 'Quels sont les délais moyens pour obtenir un terrain à usage économique ?',
        details: 'Les délais moyens pour obtenir un terrain à usage économique peuvent varier en fonction de la complexité du dossier et des procédures administratives. En général, cela peut prendre de quelques mois à un an.',
    },
    {
        id: 'panel6',
        summaryTitle: 'Comment résoudre un litige foncier lié à un projet d’investissement ?',
        details: 'Pour résoudre un litige foncier lié à un projet d’investissement, il est recommandé de consulter un avocat spécialisé en droit foncier et de suivre les procédures légales en vigueur. Les autorités locales peuvent également offrir des services de médiation pour aider à résoudre les conflits.',
    },
];
const accordionData2: AccordionData[] = [
    {
        id: 'panel7',
        summaryTitle: 'Quelles sont les démarches pour enregistrer une entreprise au Cameroun ?',
        details: 'Pour enregistrer une entreprise au Cameroun, vous devez suivre plusieurs étapes, y compris la rédaction des statuts de l’entreprise, l’enregistrement auprès du registre du commerce et des sociétés, l’obtention d’un numéro d’identification fiscale et l’inscription à la sécurité sociale.',
    },
    {
        id: 'panel8',
        summaryTitle: 'Quels sont les types de sociétés reconnus par la loi camerounaise ?',
        details: 'Les types de sociétés reconnus par la loi camerounaise incluent les sociétés à responsabilité limitée (SARL), les sociétés anonymes (SA), les sociétés en nom collectif (SNC) et les sociétés en commandite simple (SCS). Chaque type de société a des caractéristiques et des exigences spécifiques.',
    },
    {
        id: 'panel9',
        summaryTitle: 'Quelles formalités doivent être respectées pour employer des collaborateurs étrangers ?',
        details: 'Pour employer des collaborateurs étrangers, vous devez obtenir un permis de travail pour chaque employé étranger. Cela inclut la soumission d’une demande auprès des autorités compétentes, la fourniture de documents justificatifs et le respect des réglementations en matière d’immigration et de travail.',
    },
    {
        id: 'panel10',
        summaryTitle: 'Comment formaliser un partenariat avec des investisseurs locaux ?',
        details: 'Pour formaliser un partenariat avec des investisseurs locaux, il est recommandé de rédiger un accord de partenariat détaillant les termes et conditions de la collaboration. Cet accord doit être signé par toutes les parties impliquées et peut nécessiter une validation notariale.',
    },
    {
        id: 'panel11',
        summaryTitle: 'Quels sont les délais et les coûts estimés pour créer une société au Cameroun ?',
        details: 'Les délais et les coûts estimés pour créer une société au Cameroun peuvent varier en fonction du type de société et des procédures administratives. En général, cela peut prendre de quelques semaines à quelques mois et les coûts peuvent inclure les frais d’enregistrement, les honoraires d’avocat et les taxes administratives.',
    },
    {
        id: 'panel12',
        summaryTitle: 'Quelles sont les meilleures pratiques pour développer un projet d’entreprise au Cameroun ?él’investissement au Cameroun ?',
        details: 'Les meilleures pratiques pour développer un projet d’entreprise au Cameroun incluent la réalisation d’une étude de marché, l’élaboration d’un plan d’affaires solide, la recherche de partenaires locaux, le respect des réglementations locales et l’engagement avec les communautés locales.',
    },
];
const accordionData3: AccordionData[] = [
    {
        id: 'panel13',
        summaryTitle: 'Quels sont les avantages fiscaux pour les nouveaux investissements ?',
        details: 'Les avantages fiscaux pour les nouveaux investissements au Cameroun peuvent inclure des exonérations fiscales, des réductions d’impôts et des incitations financières pour les projets dans des secteurs prioritaires. Ces avantages sont généralement définis par les lois fiscales et les politiques d’investissement du pays.',
    },
    {
        id: 'panel14',
        summaryTitle: 'Existe-t-il des zones économiques spéciales (ZES) ou des zones franches au Cameroun ?',
        details: 'Oui, il existe des zones économiques spéciales (ZES) et des zones franches au Cameroun. Ces zones offrent des incitations fiscales et douanières pour attirer les investissements et favoriser le développement économique.',
    },
    {
        id: 'panel15',
        summaryTitle: 'Quelles activités économiques bénéficient d’incitations particulières ?',
        details: 'Les activités économiques qui bénéficient d’incitations particulières incluent les secteurs de l’agriculture, de l’industrie manufacturière, du tourisme, des technologies de l’information et de la communication, et des énergies renouvelables. Les incitations peuvent inclure des avantages fiscaux, des subventions et un soutien technique.',
    },
    {
        id: 'panel16',
        summaryTitle: 'Peut-on bénéficier d’exonérations fiscales ou douanières pour des projets innovants ?',
        details: 'Oui, il est possible de bénéficier d’exonérations fiscales ou douanières pour des projets innovants, en particulier ceux qui contribuent au développement économique et technologique du pays. Ces exonérations sont généralement accordées par les autorités fiscales et douanières sur la base de critères spécifiques.',
    },
    {
        id: 'panel17',
        summaryTitle: 'Comment accéder aux programmes de soutien pour les petites et moyennes entreprises ?',
        details: 'Pour accéder aux programmes de soutien pour les petites et moyennes entreprises (PME), vous pouvez contacter les agences gouvernementales, les chambres de commerce et les organisations de soutien aux entreprises. Ces programmes peuvent offrir des subventions, des prêts à taux réduit, des formations et des services de conseil.',
    },
    {
        id: 'panel18',
        summaryTitle: 'Les équipements importés pour les projets sont-ils exonérés de droits de douane ?',
        details: 'Les équipements importés pour les projets peuvent être exonérés de droits de douane sous certaines conditions. Ces exonérations sont généralement accordées pour les projets dans des secteurs prioritaires ou pour les équipements qui ne sont pas disponibles localement.',
    },
];
const accordionData4: AccordionData[] = [
    {
        id: 'panel19',
        summaryTitle: 'Quels sont les droits et devoirs des investisseurs au Cameroun ?',
        details: 'Les droits et devoirs des investisseurs au Cameroun incluent le respect des lois et réglementations locales, la protection de l’environnement, le paiement des taxes et impôts, et la contribution au développement économique et social du pays. En retour, les investisseurs ont le droit à la protection de leurs investissements et à un traitement équitable.',
    },
    {
        id: 'panel20',
        summaryTitle: 'Les transferts de bénéfices à l’étranger sont-ils garantis ?',
        details: 'Oui, les transferts de bénéfices à l’étranger sont garantis sous réserve du respect des réglementations fiscales et des procédures de change. Les investisseurs peuvent rapatrier leurs bénéfices après le paiement des impôts et des frais applicables.',
    },
    {
        id: 'panel21',
        summaryTitle: 'Quels sont les mécanismes de protection pour les investisseurs étrangers ?',
        details: 'Les mécanismes de protection pour les investisseurs étrangers incluent les accords bilatéraux d’investissement, les garanties contre l’expropriation, le droit à un traitement équitable et non discriminatoire, et l’accès aux mécanismes de règlement des différends.',
    },
    {
        id: 'panel22',
        summaryTitle: 'Comment gérer un litige commercial ou fiscal en tant qu’investisseur ?',
        details: 'Pour gérer un litige commercial ou fiscal en tant qu’investisseur, il est recommandé de consulter un avocat spécialisé et de suivre les procédures légales en vigueur. Les mécanismes de règlement des différends incluent la médiation, l’arbitrage et les tribunaux compétents.',
    },
    {
        id: 'panel23',
        summaryTitle: 'Quels accords internationaux protègent les investissements au Cameroun ?',
        details: 'Les accords internationaux qui protègent les investissements au Cameroun incluent les accords bilatéraux d’investissement, les conventions fiscales et les traités de protection des investissements. Ces accords offrent des garanties et des mécanismes de règlement des différends pour les investisseurs étrangers.',
    },
    {
        id: 'panel24',
        summaryTitle: 'Comment les investisseurs sont-ils accompagnés pour sécuriser leurs projets ?',
        details: 'Les investisseurs sont accompagnés par les agences gouvernementales, les chambres de commerce et les organisations de soutien aux entreprises pour sécuriser leurs projets. Ces organismes offrent des services de conseil, des informations sur les opportunités d’investissement et un soutien administratif.',
    },
];
const accordionData5: AccordionData[] = [
    {
        id: 'panel25',
        summaryTitle: 'Quelles sont les opportunités d’investissement actuelles au Cameroun ?',
        details: 'Les opportunités d’investissement actuelles au Cameroun incluent les secteurs de l’agriculture, de l’énergie, des infrastructures, des technologies de l’information et de la communication, et du tourisme. Ces secteurs offrent un potentiel de croissance et des incitations pour les investisseurs.',
    },
    {
        id: 'panel26',
        summaryTitle: 'Où peut-on trouver des statistiques et études de marché sur les secteurs porteurs au Cameroun ?',
        details: 'Pour trouver des statistiques et des études de marché sur les secteurs porteurs au Cameroun, vous pouvez consulter les agences gouvernementales, les chambres de commerce, les organisations internationales et les plateformes en ligne spécialisées. Ces sources offrent des données et des analyses sur les tendances du marché et les opportunités d’investissement.',
    },
    {
        id: 'panel27',
        summaryTitle: 'Quels services sont proposés aux investisseurs pour faciliter leurs démarches ?',
        details: 'Les services proposés aux investisseurs pour faciliter leurs démarches incluent l’assistance administrative, les conseils juridiques et fiscaux, les services de médiation, les formations et les programmes de soutien financier. Ces services sont offerts par les agences gouvernementales, les chambres de commerce et les organisations de soutien aux entreprises.',
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
            <div className="faq-accordion mb-4">
                {faqGroups.map(({ title, accordions }, groupIndex) => (
                    <div key={groupIndex} className={`group-${groupIndex + 1}`}>
                        <div id="title">
                            <h2 className='text-2xl font-semibold mt-4 mb-2'>{title}</h2>
                            <span id="divider"></span>
                        </div>
                        {accordions &&
                            accordions.map(({ id, summaryTitle, details }) => (
                                <AccordionsComponent
                                    key={id}
                                    id={id}
                                    summaryTitle={summaryTitle}
                                    details={details}
                                    expanded={expanded}
                                    handleChange={handleChange}
                                />
                            ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default faq;
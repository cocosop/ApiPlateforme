import './faq.css'
import FAQ from '../../../assets/img/faq-image.png'
import React, { useState } from 'react';
import AccordionsComponent from '../../../components/accordionsComponent/accordionsComponent';
import { useTranslation } from 'react-i18next';

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

const faq = () => {
    const { t } = useTranslation();
    const [expanded, setExpanded] = useState<string | false>(false);

    const faqGroups = t('pages_a_propos.faq.groups', { returnObjects: true }) as FaqGroup[];

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
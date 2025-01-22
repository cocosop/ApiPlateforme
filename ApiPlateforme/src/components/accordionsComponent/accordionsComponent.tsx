import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMore from '@mui/icons-material/ExpandMore';

interface AccordionProps {
    id: string;
    summaryTitle: string;
    details: string;
    expanded: string | false;
    handleChange: (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

const accordionsComponent: React.FC<AccordionProps> = ({ id, summaryTitle, details, expanded, handleChange }) => {
    return (
        <Accordion expanded={expanded === id} onChange={handleChange(id)} sx={{ mb: 2 }}>
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
    );
};

export default accordionsComponent;
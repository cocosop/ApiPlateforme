import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface AccordionProps {
  id: string;
  summaryTitle: string;
  details: string;
  expanded: string | false;
  handleChange: (
    panel: string,
  ) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

const accordionsComponent: React.FC<AccordionProps> = ({
  id,
  summaryTitle,
  details,
  expanded,
  handleChange,
}) => {
  const isExpanded = expanded === id;

  return (
    <Accordion
      expanded={isExpanded}
      onChange={handleChange(id)}
      disableGutters
      elevation={0}
      square
      sx={{
        mb: 1.5,
        mx: "auto",
        maxWidth: "70%",
        backgroundColor: "#F4F6F8",
        borderRadius: "10px !important",
        border: "none",
        boxShadow: "none",
        "&::before": { display: "none" },
      }}
    >
      <AccordionSummary
        expandIcon={
          <Box
            component="span"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 34,
              height: 34,
              backgroundColor: "#0F0B60",
              color: "#FFFFFF",
              borderRadius: "8px",
            }}
          >
            {isExpanded ? (
              <RemoveIcon fontSize="small" />
            ) : (
              <AddIcon fontSize="small" />
            )}
          </Box>
        }
        aria-controls={`${id}bh-content`}
        id={`${id}bh-header`}
        sx={{
          minHeight: 60,
          px: 2.5,
          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "none",
          },
        }}
      >
        <Typography sx={{ color: "#0F0B60", fontWeight: 600 }}>
          {summaryTitle}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: "transparent",
          color: "#333333",
          px: 2.5,
          pb: 2.5,
        }}
      >
        <Typography>{details}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default accordionsComponent;

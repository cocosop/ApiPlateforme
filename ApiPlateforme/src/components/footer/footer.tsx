import { Box, Typography, Link, Container } from "@mui/material";
import LOGO3 from "../../assets/img/logo3.png"; // Importation du logo
import './footer.css';
import { useTranslation } from "react-i18next";

// Composant Footer
interface FooterProps {
  activeSection?: string;
}
const Footer: React.FC<FooterProps> = ({ activeSection }) => {
  const { t } = useTranslation();

  // Define typography styles
  const typographyStyles = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  };

  const headingStyles = {
    ...typographyStyles,
    fontSize: "1.25rem", // 20px
    fontWeight: "bold",
  };

  const bodyStyles = {
    ...typographyStyles,
    fontSize: "1rem", // 16px
    fontWeight: "regular",
  };

  return (
    <Box sx={{ backgroundColor: "#0F0B60", color: "#fff", py: 4 }}>
      <Container maxWidth="lg" className="footer-container">
        {/* Logo et description */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          {/* Logo */}
          <Box>
            <img src={LOGO3} alt={t('footer.agency')} style={{ width: "150px", marginBottom: "16px" }} />
          </Box>

          {/* Description */}
          <Box>
            <Typography variant="body2" sx={{ ...bodyStyles, color: "#fff" }}>
              {t('footer.agency')}
            </Typography>
            <Typography variant="body2" sx={{ ...bodyStyles, color: "#fff", mt: 1 }}>
              {t('footer.website')} :{" "}
              <Link href={t('footer.website_url')} sx={{ ...bodyStyles, color: "#F5BA3A" }} target="_blank" rel="noopener">
                {t('footer.website_url')}
              </Link>
            </Typography>
          </Box>
        </Box>

        {/* Section principale du footer */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: { xs: "center", md: "space-between" },
          }}
        >
          {/* Section Menu de navigation */}
          <Box sx={{ flex: "1 1 200px", textAlign: { xs: "center", sm: "left" } }}>
            <Typography variant="h6" sx={{ ...headingStyles, mb: 2, color: "#fff" }}>
              {t('footer.navigation.title')}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link href="#" sx={{ ...bodyStyles, color: "#fff", mb: 1 }}>
                {t('footer.navigation.home')}
              </Link>
              <Link href="#" sx={{ ...bodyStyles, color: "#fff", mb: 1 }}>
                {t('footer.navigation.general_info')}
              </Link>
              <Link href="#" sx={{ ...bodyStyles, color: "#fff", mb: 1 }}>
                {t('footer.navigation.investor_guide')}
              </Link>
              <Link href="#" sx={{ ...bodyStyles, color: "#fff", mb: 1 }}>
                {t('footer.navigation.opportunity_sectors')}
              </Link>
              <Link href="#" sx={{ ...bodyStyles, color: "#fff" }}>
                {t('footer.navigation.about')}
              </Link>
            </Box>
          </Box>

          {/* Section Institutions compétentes */}
          <Box sx={{ flex: "1 1 200px", textAlign: { xs: "center", sm: "left" } }}>
            <Typography variant="h6" sx={{ ...headingStyles, mb: 2, color: "#fff" }}>
              {t('footer.institutions.title')}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body2" sx={{ ...bodyStyles, color: "#fff", mb: 1 }}>
                {t('footer.institutions.ministry_employment')}
              </Typography>
              <Typography variant="body2" sx={{ ...bodyStyles, color: "#fff", mb: 1 }}>
                {t('footer.institutions.ministry_labor')}
              </Typography>
              <Typography variant="body2" sx={{ ...bodyStyles, color: "#fff", mb: 1 }}>
                {t('footer.institutions.ministry_mines')}
              </Typography>
              <Typography variant="body2" sx={{ ...bodyStyles, color: "#fff", mb: 1 }}>
                {t('footer.institutions.ministry_smes')}
              </Typography>
              <Typography variant="body2" sx={{ ...bodyStyles, color: "#fff" }}>
                {t('footer.institutions.cnps')}
              </Typography>
            </Box>
          </Box>

          {/* Section Contacts */}
          <Box sx={{ flex: "1 1 200px", textAlign: { xs: "center", sm: "left" } }}>
            <Typography variant="h6" sx={{ ...headingStyles, mb: 2, color: "#fff" }}>
              {t('footer.contacts.title')}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body2" sx={{ ...bodyStyles, color: "#fff", mb: 1 }}>
                {t('footer.contacts.agency_name')}
              </Typography>
              <Typography variant="body2" sx={{ ...bodyStyles, color: "#fff", mb: 1 }}>
                {t('footer.contacts.phone1')}
              </Typography>
              <Typography variant="body2" sx={{ ...bodyStyles, color: "#fff", mb: 1 }}>
                {t('footer.contacts.phone2')}
              </Typography>
              <Typography variant="body2" sx={{ ...bodyStyles, color: "#fff", mb: 1 }}>
                {t('footer.contacts.email')} :{" "}
                <Link href={`mailto:${t('footer.contacts.email_address')}`} sx={{ ...bodyStyles, color: "#F5BA3A" }}>
                  {t('footer.contacts.email_address')}
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ ...bodyStyles, color: "#fff" }}>
                {t('footer.contacts.address')}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Section bas du footer */}
        <Box
          sx={{
            mt: 4,
            textAlign: "center",
            borderTop: "1px solid #fff",
            pt: 2,
          }}
        >
          {/* Droits réservés */}
          <Typography variant="body2" sx={{ ...bodyStyles, color: "#fff" }}>
            {t('footer.copyright')}
          </Typography>
          {/* Liens légaux */}
          <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 2 }}>
            <Link href="/Politique-Confidentialite&Condition-Utilisation" sx={{ ...bodyStyles, color: "#fff" }}>
              {t('footer.legal.terms')} & {t('footer.legal.privacy')}
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
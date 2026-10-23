import { Box, Typography, Link } from "@mui/material";
import LOGO3 from "../../assets/img/logo3.png"; // Importation du logo
import "./footer.css";
import { useTranslation } from "react-i18next";

// Composant Footer
interface FooterProps {
  activeSection?: string;
}
const Footer: React.FC<FooterProps> = () => {
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

  const linkStyles = {
    ...bodyStyles,
    color: "#fff",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      color: "#F5BA3A",
    },
  };

  return (
    <Box sx={{ backgroundColor: "#0F0B60", color: "#fff", py: 6 }}>
      {/* On reprend le même conteneur (container mx-auto p-6) que le reste
          de la home page pour que le footer soit aligné à gauche et à
          droite avec les autres sections du site */}
      <div className="footer-container container mx-auto p-6">
        {/* Logo et description - empilés verticalement, alignés à gauche */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "flex-start" },
            textAlign: { xs: "center", sm: "left" },
            mb: 6,
          }}
        >
          {/* Logo */}
          <Box
            sx={{ backgroundColor: "#0F0B60", borderRadius: 1, p: 1, mb: 3 }}
          >
            <img
              src={LOGO3}
              alt={t("footer.agency")}
              style={{ width: "150px", display: "block" }}
            />
          </Box>

          {/* Description */}
          <Typography variant="body2" sx={{ ...bodyStyles, color: "#fff" }}>
            {t("footer.agency")}
          </Typography>
        </Box>

        {/* Section principale du footer */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            columnGap: 8,
            rowGap: 5,
            justifyContent: { xs: "center", md: "space-between" },
            mb: 5,
          }}
        >
          {/* Section Menu de navigation */}
          <Box
            sx={{ flex: "1 1 200px", textAlign: { xs: "center", sm: "left" } }}
          >
            <Typography
              variant="h6"
              sx={{ ...headingStyles, mb: 3, color: "#fff" }}
            >
              {t("footer.navigation.title")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link href="#" sx={{ ...linkStyles, mb: 2 }}>
                {t("footer.navigation.home")}
              </Link>
              <Link href="#" sx={{ ...linkStyles, mb: 2 }}>
                {t("footer.navigation.general_info")}
              </Link>
              <Link href="#" sx={{ ...linkStyles, mb: 2 }}>
                {t("footer.navigation.investor_guide")}
              </Link>
              <Link href="#" sx={{ ...linkStyles, mb: 2 }}>
                {t("footer.navigation.opportunity_sectors")}
              </Link>
              <Link href="#" sx={{ ...linkStyles }}>
                {t("footer.navigation.about")}
              </Link>
            </Box>
          </Box>

          {/* Section Institutions compétentes */}
          <Box
            sx={{ flex: "1 1 250px", textAlign: { xs: "center", sm: "left" } }}
          >
            <Typography
              variant="h6"
              sx={{ ...headingStyles, mb: 3, color: "#fff" }}
            >
              {t("footer.institutions.title")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link
                href="https://www.minefop.cm/fr/"
                target="_blank"
                rel="noopener"
                sx={{ ...linkStyles, mb: 2.5 }}
              >
                {t("footer.institutions.ministry_employment")}
              </Link>
              <Link
                href="https://www.mintss.cm/m/web/"
                target="_blank"
                rel="noopener"
                sx={{ ...linkStyles, mb: 2.5 }}
              >
                {t("footer.institutions.ministry_labor")}
              </Link>
              <Link
                href="https://www.minmidt.cm/"
                target="_blank"
                rel="noopener"
                sx={{ ...linkStyles, mb: 2.5 }}
              >
                {t("footer.institutions.ministry_mines")}
              </Link>
              <Link
                href="https://www.minpmeesa.cm/site/"
                target="_blank"
                rel="noopener"
                sx={{ ...linkStyles, mb: 2.5 }}
              >
                {t("footer.institutions.ministry_smes")}
              </Link>
              <Link
                href="https://www.cnps.cm/fr/cnps/nous-contacter1.html"
                target="_blank"
                rel="noopener"
                sx={{ ...linkStyles }}
              >
                {t("footer.institutions.cnps")}
              </Link>
            </Box>
          </Box>

          {/* Section Contacts */}
          <Box
            sx={{ flex: "1 1 220px", textAlign: { xs: "center", sm: "left" } }}
          >
            <Typography
              variant="h6"
              sx={{ ...headingStyles, mb: 3, color: "#fff" }}
            >
              {t("footer.contacts.title")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="body2"
                sx={{ ...bodyStyles, color: "#fff", mb: 2 }}
              >
                {t("footer.contacts.agency_name")}
              </Typography>
              <Typography
                variant="body2"
                sx={{ ...bodyStyles, color: "#fff", mb: 2 }}
              >
                {t("footer.contacts.phone1")}
              </Typography>
              <Typography
                variant="body2"
                sx={{ ...bodyStyles, color: "#fff", mb: 2 }}
              >
                {t("footer.contacts.phone2")}
              </Typography>
              <Typography
                variant="body2"
                sx={{ ...bodyStyles, color: "#fff", mb: 2 }}
              >
                {t("footer.contacts.email")} :{" "}
                <Link
                  href={`mailto:${t("footer.contacts.email_address")}`}
                  sx={{ ...linkStyles, color: "#F5BA3A", display: "inline" }}
                >
                  {t("footer.contacts.email_address")}
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ ...bodyStyles, color: "#fff" }}>
                {t("footer.contacts.address")}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Section bas du footer */}
        <Box
          sx={{
            mt: 5,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.3)",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          {/* Droits réservés */}
          <Typography variant="body2" sx={{ ...bodyStyles, color: "#fff" }}>
            {t("footer.copyright")}
          </Typography>
          {/* Liens légaux */}
          <Link
            href="/Politique-Confidentialite&Condition-Utilisation"
            sx={{ ...linkStyles }}
          >
            {t("footer.legal.terms")} & {t("footer.legal.privacy")}
          </Link>
        </Box>
      </div>
    </Box>
  );
};

export default Footer;

import { Box, Typography, Link, TextField, Button, Container } from "@mui/material";
import LOGO3 from "../../assets/img/logo3.png"; // Importation du logo
import './footer.css';

// Composant Footer
const Footer = () => {
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
            <img src={LOGO3} alt="Logo" style={{ width: "150px", marginBottom: "16px" }} />
          </Box>

          {/* Description */}
          <Box>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              Agence de Promotion des Investissements (API) - Cameroun
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff", mt: 1 }}>
              Website : <Link href="https://www.investincameroon.cm" color="#F5BA3A" target="_blank" rel="noopener">
                www.investincameroon.cm
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
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Menu de navigation
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link href="#" color="#fff" sx={{ mb: 1 }}>
                Accueil
              </Link>
              <Link href="#" color="#fff" sx={{ mb: 1 }}>
                Informations générales
              </Link>
              <Link href="#" color="#fff" sx={{ mb: 1 }}>
                Guide de l'investisseur
              </Link>
              <Link href="#" color="#fff" sx={{ mb: 1 }}>
                Secteurs d'opportunités
              </Link>
              <Link href="#" color="#fff">
                À propos
              </Link>
            </Box>
          </Box>

          {/* Section Institutions compétentes */}
          <Box sx={{ flex: "1 1 200px", textAlign: { xs: "center", sm: "left" } }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Institutions compétentes
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body2" sx={{ color: "#fff", mb: 1 }}>
                Ministère de l’Emploi et de la Formation Professionnelle
              </Typography>
              <Typography variant="body2" sx={{ color: "#fff", mb: 1 }}>
                Ministère du Travail et de la Prévoyance Sociale
              </Typography>
              <Typography variant="body2" sx={{ color: "#fff", mb: 1 }}>
                Ministère des Mines, de l’Industrie et du Développement Technologique
              </Typography>
              <Typography variant="body2" sx={{ color: "#fff", mb: 1 }}>
                Ministère des Petites et Moyennes Entreprises, de l’Economie Sociale et de l’Artisanat
              </Typography>
              <Typography variant="body2" sx={{ color: "#fff" }}>
                Caisse Nationale de la Prévoyance Sociale (CNPS)
              </Typography>
            </Box>
          </Box>

          {/* Section Contacts */}
          <Box sx={{ flex: "1 1 200px", textAlign: { xs: "center", sm: "left" } }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Contacts
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body2" sx={{ color: "#fff", mb: 1 }}>
                Agence de Promotion des Investissements (API)
              </Typography>
              <Typography variant="body2" sx={{ color: "#fff", mb: 1 }}>
                Tél. : (+237) 233 42 59 16
              </Typography>
              <Typography variant="body2" sx={{ color: "#fff", mb: 1 }}>
                Tél. : (+237) 233 43 30 08
              </Typography>
              <Typography variant="body2" sx={{ color: "#fff", mb: 1 }}>
                Courriel : <Link href="contact@api.cm" color="#F5BA3A">
                  contact@api.cm
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ color: "#fff" }}>
                BP 441, Yaoundé-Cameroun
              </Typography>
            </Box>
          </Box>

          {/* Section S'abonner */}
          <Box sx={{ flex: "1 1 200px", textAlign: { xs: "center", sm: "left" } }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              S'abonner
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              {/* Champ d'email */}
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Votre adresse email"
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  mb: 2,
                  input: {
                    color: "#000",
                  },
                }}
              />
              {/* Bouton S'abonner */}
              <Button variant="contained" color="primary" fullWidth sx={{ mb: 1 }}>
                S'abonner
              </Button>
              {/* Message anti-spam */}
              <Typography variant="body2" sx={{ color: "#ddd", textAlign: "center" }}>
                PAS DE SPAM ● DÉSABONNEMENT À TOUT MOMENT
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
          <Typography variant="body2" sx={{ color: "#fff" }}>
            © 2024 API | Tous droits réservés.
          </Typography>
          {/* Liens légaux */}
          <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 2 }}>
            <Link href="#" color="#fff">
              Politique de confidentialité
            </Link>
            <Link href="#" color="#fff">
              Termes et conditions
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
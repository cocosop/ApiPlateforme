import { Box, Typography, Link, TextField, Button, Container } from "@mui/material";
import LOGO3 from "../../assets/img/logo3.png"; // Importation du logo

// Composant Footer
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#0F0B60", color: "#fff", py: 4 }}>
      <Container maxWidth="lg">
        {/* Section contenant le logo et une description courte */}
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
              Envoi d'emails candidats en un clic, gratuitement.
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
                Ressources
              </Link>
              <Link href="#" color="#fff" sx={{ mb: 1 }}>
                Tarifs
              </Link>
              <Link href="#" color="#fff">
                Partenaires
              </Link>
            </Box>
          </Box>

          {/* Section Ressources */}
          <Box sx={{ flex: "1 1 200px", textAlign: { xs: "center", sm: "left" } }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Ressources
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link href="#" color="#fff" sx={{ mb: 1 }}>
                Introduction
              </Link>
              <Link href="#" color="#fff" sx={{ mb: 1 }}>
                Éléments
              </Link>
              <Link href="#" color="#fff" sx={{ mb: 1 }}>
                Collections
              </Link>
              <Link href="#" color="#fff">
                Accessibilité
              </Link>
            </Box>
          </Box>

          {/* Section À propos */}
          <Box sx={{ flex: "1 1 200px", textAlign: { xs: "center", sm: "left" } }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              À propos
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link href="#" color="#fff" sx={{ mb: 1 }}>
                Soumettre un problème
              </Link>
              <Link href="#" color="#fff" sx={{ mb: 1 }}>
                Github Blockmix
              </Link>
              <Link href="#" color="#fff">
                Slack
              </Link>
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

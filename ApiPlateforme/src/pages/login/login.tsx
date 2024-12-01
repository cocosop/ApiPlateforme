import { Box, TextField, Button, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google"; // Icône Google
import AppleIcon from "@mui/icons-material/Apple";  // Icône Apple
import LOGIN from "../../assets/img/login2.png";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        marginTop: "-70px",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#F5F5F5",
        overflow: "hidden",
      }}
    >
      {/* Section Image */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "300px", md: "auto" },
          width: { xs: "100%", md: "50%" },
          mb: { xs: 4, md: 0 },
        }}
      >
        <img
          src={LOGIN}
          alt="Login Illustration"
          style={{
            height: "100%",
            width: "100%",
            maxHeight: "600px",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Section Formulaire */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: { xs: 2, md: 4 },
        }}
      >
        <Box
          component="form"
          sx={{
            justifyContent: "center",
            width: "100%",
            maxWidth: { xs: 300, sm: 400 },
            textAlign: "center",
            padding: { xs: 2, md: 6 },
            boxShadow: { xs: "none", md: "0 4px 12px rgba(0, 0, 0, 0.1)" },
            borderRadius: 2,
            backgroundColor: { xs: "transparent", md: "white" },
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: "#2A337B",
              fontWeight: "bold",
            }}
          >
            Bienvenue Au Portail Des Investisseurs de l’API
          </Typography>
          <Typography
            gutterBottom
            sx={{
              color: "green",
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              fontWeight: "semi-bold",
            }}
          >
            Connectez-Vous
          </Typography>

          {/* Champs de connexion */}
          <TextField
            fullWidth
            margin="normal"
            label="Adresse e-mail"
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Mot de passe"
            type="password"
            variant="outlined"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, textTransform: "none", borderRadius: "8px" }}
          >
            Se connecter
          </Button>

          {/* Connexion Google & Apple */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              Ou connectez-vous avec :
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 2,
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              {/* Bouton Google */}
              <Button
                fullWidth
                variant="outlined"
                startIcon={<GoogleIcon />}
                sx={{
                  textTransform: "none",
                  borderColor: "#DB4437",
                  borderRadius: "50px",
                  color: "#DB4437",
                  "&:hover": { backgroundColor: "rgba(219, 68, 55, 0.1)" },
                }}
              >

              </Button>

              {/* Bouton Apple */}
              <Button
                fullWidth
                variant="outlined"
                startIcon={<AppleIcon />}
                sx={{
                  textTransform: "none",
                  borderColor: "#000000",
                  borderRadius: "50px",
                  color: "#000000",
                  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
                }}
              />


            </Box>
          </Box>

          {/* Lien vers l'inscription */}
          <Typography
            variant="body2"
            sx={{ mt: 2, color: "text.secondary", fontSize: "14px" }}
          >
            Pas encore de compte ? <a href="/register">Inscrivez-vous</a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;

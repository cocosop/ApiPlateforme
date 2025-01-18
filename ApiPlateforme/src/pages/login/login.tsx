import { Box, TextField, Button, Typography, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google"; // Icône Google
import AppleIcon from "@mui/icons-material/Apple";  // Icône Apple
import LOGIN from "../../assets/img/account_illustration.png";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [showPassword, setShowPassword] = React.useState(false);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleConnection = () => {
    if (email === "" || password === "") {
      alert("Veuillez remplir tous les champs");
    } else {
      alert("Connexion réussie");
      history("/projets");
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword ? 'hide the password' : 'display the password'
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button
            fullWidth
            variant="contained"
            onClick={() => handleConnection()}

            sx={{ backgroundColor: "#2A337B", mt: 2, textTransform: "none", borderRadius: "8px" }}
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
            Pas encore de compte ? <a href="/register" style={{ color: "#2A337B" }}>Inscrivez-vous</a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;

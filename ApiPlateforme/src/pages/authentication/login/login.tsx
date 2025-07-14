import { Box, TextField, Button, Typography, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import LOGIN from "../../../assets/img/account_illustration.png";
import { Google as GoogleIcon, Apple as AppleIcon, VisibilityOff, Visibility, LinkedIn } from "@mui/icons-material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import AlertComponent, { NotificationProvider } from "../../../components/alert/AlertComponent";
import { useAuthStore } from "../../../store/AuthStore";
import { useTranslation } from 'react-i18next';
import { backendUrl } from "../../../constants/constants";

const Login = () => {
  const [email, setEmail] = React.useState(String);
  const [password, setPassword] = React.useState(String);
  const [showPassword, setShowPassword] = React.useState(false);

  const history = useNavigate();
  const { showNotification } = AlertComponent();
  const { t } = useTranslation();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await axios.post(`${backendUrl}/api/v1/auth/login`, {
      email,
      password
    })
      .then(res => {
        const { accessToken, refreshToken } = res.data;

        const auth = useAuthStore.getState();
        auth.setTokens(accessToken, refreshToken);

        sessionStorage.setItem('secteur', '');
        history("/dashboard");
      })
      .catch(err => {
        console.error("Erreur de connexion :", err);
      });

  };

  axios.interceptors.response.use(
    res => res,
    error => {
      const statusHandlers: any = {
        403: () => showNotification(t('login.errors.forbidden'), "error"),
        404: () => showNotification(t('login.errors.not_found'), "warning"),
        500: () => showNotification(t('login.errors.server_error'), "error"),
      };

      const status = error.response?.status;
      (statusHandlers[status] || (() => showNotification(t('login.errors.unknown'), "error")))();

      return Promise.reject(error);
    }
  );


  return (
    <section className="flex flex-col md:flex-row">
      {/* Section Image */}
      <div className="hidden md:flex md:w-1/2 md:items-center md:justify-center">
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
            alt={t('login.alt_image')}
            style={{
              height: "100%",
              width: "100%",
              maxHeight: "600px",
              objectFit: "contain",
            }}
          />
        </Box>
      </div>

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
            {t('login.title')}
          </Typography>
          <Typography
            gutterBottom
            sx={{
              color: "green",
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              fontWeight: "semi-bold",
            }}
          >
            {t('login.subtitle')}
          </Typography>

          {/* Champs de connexion */}
          <NotificationProvider>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                margin="normal"
                label={t('login.email_label')}
                variant="outlined"
                value={email}
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FormControl fullWidth margin="normal" variant="outlined" required>
                <InputLabel htmlFor="outlined-adornment-password">{t('login.password_label')}</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  value={password}
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword ? t('login.password_hide') : t('login.password_show')
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
                  label={t('login.password_label')}
                />
              </FormControl>
              <div className="flex justify-end items-center">
                <NavLink className="text-slate-500 hover:text-blue-900 text-sm" to={'/forget-password'}>{t('login.forgot_password')}</NavLink>
              </div>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                onSubmit={handleSubmit}
                sx={{ backgroundColor: "#2A337B", mt: 2, textTransform: "none", borderRadius: "8px" }}
              >
                {t('login.button')}
              </Button>
            </form>
          </NotificationProvider>

          {/* Connexion Google & Apple */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              {t('login.social_login_text')}
            </Typography>
            <div className="flex justify-center gap-4 border-t border-gray-100 px-6 py-5">
              <a href="#" className="rounded-full border border-gray-200 p-2 text-gray-900 hover:bg-red-300">
                <span className="sr-only">{t('login.google_login')}</span>
                <GoogleIcon color="error" />
              </a>
              <a href="#" className="rounded-full border border-gray-200 p-2 text-gray-900 hover:bg-gray-300">
                <span className="sr-only">{t('login.apple_login')}</span>
                <AppleIcon />
              </a>
              <a href="#" className="rounded-full border border-gray-200 p-2 text-gray-900 hover:bg-blue-300">
                <span className="sr-only">{t('login.linkedin_login')}</span>
                <LinkedIn color="primary" />
              </a>
            </div>
          </Box>

          {/* Lien vers l'inscription */}
          <Typography
            variant="body2"
            sx={{ mt: 2, color: "text.secondary", fontSize: "14px" }}
          >
            {t('login.no_account_yet')} <NavLink to={"/signup"} style={{ color: "#2A337B" }}>{t('login.signup_link')}</NavLink>
          </Typography>
        </Box>
      </Box>
    </section>
  );
};

export default Login;
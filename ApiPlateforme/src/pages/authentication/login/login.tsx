import {
  Box,
  TextField,
  Button,
  Typography,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import TY_IMG from "../../../assets/img/ty.png";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { NotificationProvider } from "../../../components/alert/AlertComponent";
import { useAuthStore } from "../../../store/AuthStore";
import { useTranslation } from "react-i18next";
import userService, { TwoFactorMethod } from "../../../services/userService";
import TokenInput from "../../../components/tokenInput/tokenInput";
import { getApiErrorCode, getApiErrorMessage } from "../../../utils/apiError";
import { homePathFor } from "../../../utils/roles";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [info, setInfo] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  // Étape 2 : second facteur
  const [mfa, setMfa] = React.useState<{ token: string; method: TwoFactorMethod } | null>(null);
  const [code, setCode] = React.useState("");
  const [useRecoveryCode, setUseRecoveryCode] = React.useState(false);

  const history = useNavigate();
  const { t } = useTranslation();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const finishLogin = (accessToken: string) => {
    const auth = useAuthStore.getState();
    auth.setToken(accessToken);
    sessionStorage.setItem("secteur", "");
    setError(null);
    history(homePathFor(useAuthStore.getState().decoded?.role));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await userService.login(email.trim(), password);
      if (res.data.mfaRequired && res.data.mfaToken) {
        // Mot de passe correct : second facteur demandé
        setMfa({ token: res.data.mfaToken, method: res.data.mfaMethod ?? "EMAIL" });
        setCode("");
        setInfo(null);
      } else if (res.data.accessToken) {
        finishLogin(res.data.accessToken);
      }
    } catch (err) {
      if (getApiErrorCode(err) === "ACCOUNT_NOT_ACTIVATED") {
        history(`/activation-account?email=${encodeURIComponent(email.trim())}`);
        return;
      }
      setError(getApiErrorMessage(err, t("login.error", "Email ou mot de passe incorrect.")));
    } finally {
      setPassword("");
      setLoading(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mfa) return;
    setLoading(true);
    setError(null);
    try {
      const res = await userService.verifyTwoFactor(mfa.token, code.trim());
      if (res.data.accessToken) {
        finishLogin(res.data.accessToken);
      }
    } catch (err) {
      if (getApiErrorCode(err) === "MFA_SESSION_EXPIRED") {
        setMfa(null);
      }
      setError(getApiErrorMessage(err, "Code invalide."));
      setCode("");
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (!mfa) return;
    setError(null);
    try {
      await userService.resendTwoFactor(mfa.token);
      setInfo("Un nouveau code vous a été envoyé par e-mail.");
    } catch (err) {
      setError(getApiErrorMessage(err, "Impossible de renvoyer le code."));
    }
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-[#fafafc]">
      {/* Left Column: 3D Cameroon Map (ty.png) filling completely */}
      <div className="hidden md:block md:w-1/2 relative min-h-screen bg-[#0e1c2e]">
        <img
          src={TY_IMG}
          alt={t("login.alt_image", "Cameroon 3D Investment Map")}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      {/* Right Column: Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-8 md:py-12 overflow-y-auto">
        <div className="max-w-[440px] w-full mx-auto">
          {/* Back button */}
          {/* <button
            type="button"
            onClick={() => history(-1)}
            className="inline-flex items-center text-xs font-semibold text-gray-500 hover:text-gray-900 transition mb-6"
          >
            <span className="mr-1.5 text-sm leading-none">&larr;</span>{" "}
            {t("signup.back", "Back")}
          </button> */}

          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                color: "#1a0c4f",
                fontWeight: "bold",
              }}
            >
              {t("login.title")}
            </Typography>
            <Typography
              gutterBottom
              sx={{
                color: "green",
                fontSize: { xs: "14px", sm: "16px" },
                fontWeight: "600",
              }}
            >
              {t("login.subtitle")}
            </Typography>
          </Box>

          {/* Form Card */}
          <div className="bg-white border border-gray-200/80 rounded-xl p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            <NotificationProvider>
              {mfa ? (
                <form onSubmit={handleVerifyCode}>
                  <Typography sx={{ color: "#1a0c4f", fontWeight: 700, mb: 1 }}>
                    Vérification en deux étapes
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {mfa.method === "TOTP"
                      ? useRecoveryCode
                        ? "Saisissez l'un de vos codes de secours (format XXXXX-XXXXX)."
                        : "Saisissez le code à 6 chiffres affiché dans votre application d'authentification."
                      : "Un code à 6 chiffres vient de vous être envoyé par e-mail. Il expire dans 5 minutes."}
                  </Typography>

                  {useRecoveryCode ? (
                    <TextField
                      fullWidth
                      margin="normal"
                      label="Code de secours"
                      value={code}
                      autoComplete="one-time-code"
                      onChange={(e) => setCode(e.target.value.toUpperCase())}
                      required
                    />
                  ) : (
                    <TokenInput value={code} onChange={setCode} />
                  )}

                  {info && (
                    <p className="text-xs text-green-700 mt-3 text-center">{info}</p>
                  )}

                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    disabled={loading || (!useRecoveryCode && code.length !== 6) || (useRecoveryCode && code.length < 10)}
                    sx={{
                      backgroundColor: "#140638",
                      "&:hover": { backgroundColor: "#250d61" },
                      textTransform: "none",
                      borderRadius: "8px",
                      py: 1.5,
                      mt: 3,
                    }}
                  >
                    Vérifier
                  </Button>

                  <div className="flex justify-between items-center mt-4 text-xs">
                    <button
                      type="button"
                      className="text-slate-500 hover:text-indigo-900"
                      onClick={() => { setMfa(null); setCode(""); setUseRecoveryCode(false); setError(null); }}
                    >
                      &larr; Retour
                    </button>
                    {mfa.method === "EMAIL" ? (
                      <button type="button" className="text-slate-500 hover:text-indigo-900" onClick={handleResendCode}>
                        Renvoyer le code
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="text-slate-500 hover:text-indigo-900"
                        onClick={() => { setUseRecoveryCode(!useRecoveryCode); setCode(""); }}
                      >
                        {useRecoveryCode ? "Utiliser l'application" : "Utiliser un code de secours"}
                      </button>
                    )}
                  </div>
                </form>
              ) : (
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  margin="normal"
                  label={t("login.email_label")}
                  variant="outlined"
                  value={email}
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <FormControl
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  required
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    {t("login.password_label")}
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    value={password}
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword
                              ? t("login.password_hide")
                              : t("login.password_show")
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
                    label={t("login.password_label")}
                  />
                </FormControl>
                <div className="flex justify-end items-center mt-2 mb-4">
                  <NavLink
                    className="text-slate-500 hover:text-indigo-900 text-xs transition"
                    to={"/forget-password"}
                  >
                    {t("login.forgot_password")}
                  </NavLink>
                </div>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  sx={{
                    backgroundColor: "#140638",
                    "&:hover": { backgroundColor: "#250d61" },
                    textTransform: "none",
                    borderRadius: "8px",
                    py: 1.5,
                  }}
                >
                  {t("login.button")}
                </Button>
              </form>
              )}
            </NotificationProvider>
          </div>

          {/* Footer Link */}
          <div className="mt-6 text-center">
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontSize: "14px" }}
            >
              {t("login.no_account_yet")}{" "}
              <NavLink
                to={"/signup"}
                style={{
                  color: "#1a0c4f",
                  fontWeight: 600,
                  textDecoration: "underline",
                }}
              >
                {t("login.signup_link")}
              </NavLink>
            </Typography>
          </div>
        </div>
      </div>

      {error && (
        <NotificationProvider>
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-red-500 text-white px-4 py-2 rounded shadow-lg text-sm">
              {error}
            </div>
          </div>
        </NotificationProvider>
      )}
    </section>
  );
};

export default Login;

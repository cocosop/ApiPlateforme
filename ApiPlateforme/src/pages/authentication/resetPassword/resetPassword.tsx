import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Box,
  Button,
  Avatar,
  Typography,
  TextField,
  Alert,
  CircularProgress,
} from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import TokenInput from "../../../components/tokenInput/tokenInput";
import userService from "../../../services/userService";
import { getApiErrorMessage } from "../../../utils/apiError";

const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,64}$/;
import TY_IMG from "../../../assets/img/ty.png";

/**
 * mode "reset" : mot de passe oublié.
 * mode "invitation" : un compte créé par le SUPER_ADMIN choisit son premier mot de passe.
 */
const ResetPassword = ({ mode = "reset" }: { mode?: "reset" | "invitation" }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isInvitation = mode === "invitation";
  const [email, setEmail] = useState(searchParams.get("email") ?? "");
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }
    if (!PASSWORD_REGEX.test(newPassword)) {
      setError("Le mot de passe doit contenir 8 à 64 caractères, dont une majuscule, un chiffre et un caractère spécial.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      if (isInvitation) {
        await userService.acceptInvitation(email.trim(), token, newPassword);
      } else {
        await userService.resetPassword(email.trim(), token, newPassword);
      }
      setSuccess(true);
      setTimeout(() => navigate("/signin"), 1500);
    } catch (err) {
      setError(getApiErrorMessage(err, "Le code est invalide ou a expiré. Veuillez réessayer."));
      setToken("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-[#fafafc]">
      {/* Left Column: 3D Cameroon Map (ty.png) filling completely */}
      <div className="hidden md:block md:w-1/2 relative min-h-screen bg-[#0e1c2e]">
        <img
          src={TY_IMG}
          alt="Cameroon 3D Investment Map"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      {/* Right Column: Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-8 md:py-12 overflow-y-auto">
        <div className="max-w-[440px] w-full mx-auto">
          {/* Back button */}
          {/* <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-xs font-semibold text-gray-500 hover:text-gray-900 transition mb-6"
          >
            <span className="mr-1.5 text-sm leading-none">&larr;</span> Retour
          </button> */}

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#1a0c4f" }}>
              <LockOpenIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{ color: "#1a0c4f", fontWeight: "bold" }}
            >
              {isInvitation ? "Activer votre compte" : "Nouveau mot de passe"}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", textAlign: "center", mt: 1 }}
            >
              {isInvitation
                ? "Saisissez le code d'invitation reçu par e-mail puis choisissez votre mot de passe"
                : "Si un compte correspond à votre adresse, un code de vérification vous a été envoyé"}
            </Typography>
          </Box>

          {/* Form Card */}
          <div className="bg-white border border-gray-200/80 rounded-xl p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            {success && (
              <Alert severity="success" sx={{ width: "100%", mb: 2 }}>
                {isInvitation ? "Compte activé. Redirection..." : "Mot de passe modifié avec succès. Redirection..."}
              </Alert>
            )}

            {error && (
              <Alert severity="error" sx={{ width: "100%", mb: 2 }}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <TextField
                margin="normal"
                required
                fullWidth
                type="email"
                label="Adresse e-mail"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TokenInput value={token} onChange={setToken} />

              <TextField
                margin="normal"
                required
                fullWidth
                name="newPassword"
                label="Nouveau mot de passe"
                type="password"
                id="newPassword"
                autoComplete="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirmer le mot de passe"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <p className="text-[11px] text-gray-500">
                8 à 64 caractères, dont une majuscule, un chiffre et un caractère spécial.
              </p>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={loading || success || token.length !== 6 || !newPassword || !email.includes("@")}
                sx={{
                  backgroundColor: "#140638",
                  "&:hover": { backgroundColor: "#250d61" },
                  mt: 2,
                  py: 1.5,
                  textTransform: "none",
                  borderRadius: "8px",
                }}
              >
                {loading ? (
                  <CircularProgress size={24} sx={{ color: "white" }} />
                ) : (
                  isInvitation ? "Activer mon compte" : "Réinitialiser le mot de passe"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;

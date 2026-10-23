import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Avatar,
  Typography,
  TextField,
  Alert,
  CircularProgress,
} from "@mui/material";
import LockResetIcon from "@mui/icons-material/LockReset";
import TY_IMG from "../../../assets/img/ty.png";
import userService from "../../../services/userService";
import { getApiErrorMessage } from "../../../utils/apiError";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await userService.forgotPassword(email.trim());
      setSuccess(true);
      navigate(`/reset-password?email=${encodeURIComponent(email.trim())}`);
    } catch (err) {
      setError(getApiErrorMessage(err, "Une erreur est survenue. Veuillez réessayer."));
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
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-xs font-semibold text-gray-500 hover:text-gray-900 transition mb-6"
          >
            <span className="mr-1.5 text-sm leading-none">&larr;</span> Retour
          </button>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#1a0c4f" }}>
              <LockResetIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{ color: "#1a0c4f", fontWeight: "bold" }}
            >
              Mot de passe oublié
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", textAlign: "center", mt: 1 }}
            >
              Entrez votre adresse email pour recevoir les instructions de
              réinitialisation.
            </Typography>
          </Box>

          {/* Card container */}
          <div className="bg-white border border-gray-200/80 rounded-xl p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            {success && (
              <Alert severity="success" sx={{ width: "100%", mb: 2 }}>
                Un email avec les instructions a été envoyé à {email}
              </Alert>
            )}

            {error && (
              <Alert severity="error" sx={{ width: "100%", mb: 2 }}>
                {error}
              </Alert>
            )}

            {!success && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Adresse Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={loading || !email.includes("@")}
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
                    "Envoyer les instructions"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;

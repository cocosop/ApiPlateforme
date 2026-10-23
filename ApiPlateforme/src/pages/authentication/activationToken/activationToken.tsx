import { useState, useEffect } from "react";
import {
  Alert,
  Avatar,
  Box,
  Button,
  CircularProgress,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { CheckCircleOutline, ErrorOutline } from "@mui/icons-material";
import { useNavigate, useSearchParams } from "react-router-dom";
import DialogComponent from "../../../components/dialogComponent/dialogComponent";
import TokenInput from "../../../components/tokenInput/tokenInput";
import userService from "../../../services/userService";
import TY_IMG from "../../../assets/img/ty.png";
import { getApiErrorMessage } from "../../../utils/apiError";

const ActivationToken = () => {
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState(searchParams.get("email") ?? "");
  const [token, setToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("Code invalide ou expiré. Veuillez réessayer.");
  const [status, setStatus] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [countdown, setCountdown] = useState(15 * 60);

  const COUNTDOWN_KEY = "activation_countdown_start";

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const history = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await userService.verifyActivationToken(email.trim(), token);
      if (res.status === 202) {
        setStatus("success");
        setTimeout(() => {
          history("/signin");
        }, 2000);
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(getApiErrorMessage(error, "Code invalide ou expiré. Veuillez réessayer."));
      setToken("");
    }
  };

  useEffect(() => {
    let start = localStorage.getItem(COUNTDOWN_KEY);
    if (!start) {
      start = Date.now().toString();
      localStorage.setItem(COUNTDOWN_KEY, start);
    }
    const elapsed = Math.floor((Date.now() - parseInt(start)) / 1000);
    const remaining = 15 * 60 - elapsed;
    setCountdown(remaining > 0 ? remaining : 0);
  }, []);

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          localStorage.removeItem(COUNTDOWN_KEY);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
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
            onClick={() => history(-1)}
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
              <CheckCircleOutline />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{ color: "#1a0c4f", fontWeight: "bold" }}
            >
              Activation du compte
            </Typography>
            <Typography
              sx={{
                color: "#1a0c4f",
                fontWeight: "600",
                mb: 1,
                textAlign: "center",
                fontSize: "14px",
              }}
            >
              Le code de confirmation a été envoyé par mail.
            </Typography>
          </Box>

          {/* Form Card */}
          <div className="bg-white border border-gray-200/80 rounded-xl p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            {status === "success" && (
              <Alert
                severity="success"
                icon={<CheckCircleOutline fontSize="inherit" />}
                sx={{ width: "100%", mb: 3 }}
              >
                Compte activé avec succès!
              </Alert>
            )}

            {status === "error" && (
              <Alert
                severity="error"
                icon={<ErrorOutline fontSize="inherit" />}
                sx={{ width: "100%", mb: 3 }}
              >
                {errorMessage}
              </Alert>
            )}

            <DialogComponent open={openDialog} onClose={handleCloseDialog} defaultEmail={email} />

            <form onSubmit={handleSubmit} className="space-y-4">
              <TextField
                fullWidth
                required
                type="email"
                label="Adresse e-mail"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TokenInput value={token} onChange={setToken} />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                disabled={status === "loading" || token.length !== 6 || !email.includes("@")}
                startIcon={
                  status === "loading" ? (
                    <CircularProgress size={20} sx={{ color: "white" }} />
                  ) : (
                    ""
                  )
                }
                sx={{
                  backgroundColor: "#140638",
                  "&:hover": { backgroundColor: "#250d61" },
                  mt: 2,
                  py: 1.5,
                  textTransform: "none",
                  borderRadius: "8px",
                }}
              >
                {status === "loading"
                  ? "Vérification..."
                  : "Activer mon compte"}
              </Button>

              <Grid container justifyContent="center" sx={{ mt: 2 }}>
                <Grid item>
                  <Link
                    variant="body2"
                    onClick={handleOpenDialog}
                    sx={{
                      cursor: "pointer",
                      textAlign: "center",
                      color: "#1a0c4f",
                      fontWeight: 600,
                    }}
                  >
                    Renvoyer le code
                  </Link>
                </Grid>
              </Grid>
            </form>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 4,
              }}
            >
              <Box
                sx={{
                  background:
                    "linear-gradient(90deg, #140638 0%, #250d61 100%)",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                  borderRadius: "8px",
                  px: 3,
                  py: 0.75,
                  boxShadow: 1,
                  letterSpacing: 2,
                  fontFamily: "monospace",
                }}
              >
                {formatTime(countdown)}
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivationToken;

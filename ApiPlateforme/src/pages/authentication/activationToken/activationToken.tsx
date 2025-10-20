import { useState, useEffect } from 'react';
import {
  Alert,
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import { CheckCircleOutline, ErrorOutline } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import DialogComponent from '../../../components/dialogComponent/dialogComponent';
import TokenInput from '../../../components/tokenInput/tokenInput';
import userService from '../../../services/userService';

// Thème personnalisé
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const ActivationToken = () => {
  const [token, setToken] = useState('');
  const [status, setStatus] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [countdown, setCountdown] = useState(15 * 60); // 15 minutes in seconds

  const COUNTDOWN_KEY = 'activation_countdown_start';

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const history = useNavigate();

  const handleSubmit = async (e: any) => {
    console.log(token);
    e.preventDefault();
    setStatus('loading');

    try {
      const res = userService.verifyActivationToken(token);
      if ((await res).status === 202) {
        setStatus('success');
        setTimeout(() => {
          history('/signin');
        }, 2000);
      } else {
        setStatus('error');
        alert("Code invalide ou expiré. Veuillez réessayer.");
      }
    } catch (error) {
      setStatus('error');
      console.error("Erreur lors de la vérification du code d'activation", error);
      alert("Erreur lors de la vérification du code d'activation");
    }
  };

  // On mount, set or get countdown start time
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

  // Countdown effect
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
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'success.main' }}>
            <CheckCircleOutline />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
            Activation du compte
          </Typography>
          <Typography sx={{ color: '#2A337B', fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
            Le code de confirmation a été envoyé par mail.
          </Typography>
          {/* Affichage des statuts */}
          {status === 'success' && (
            <Alert
              severity="success"
              icon={<CheckCircleOutline fontSize="inherit" />}
              sx={{ width: '100%', mb: 3 }}
            >
              Compte activé avec succès!
            </Alert>
          )}

          {status === 'error' && (
            <Alert
              severity="error"
              icon={<ErrorOutline fontSize="inherit" />}
              sx={{ width: '100%', mb: 3 }}
            >
              Code invalide ou expiré. Veuillez réessayer.
            </Alert>
          )}

          <DialogComponent open={openDialog} onClose={handleCloseDialog} />

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
            <TokenInput value={token} onChange={setToken} />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              onSubmit={handleSubmit}
              disabled={status === 'loading' || token.length !== 6}
              startIcon={status === 'loading' ? <CircularProgress size={20} /> : ''}
              sx={{ backgroundColor: "#2A337B", mt: 2, textTransform: "none", borderRadius: "8px" }}
            >
              {status === 'loading' ? 'Vérification...' : 'Activer mon compte'}
            </Button>

            <Grid container justifyContent="flex-center">
              <Grid item>
                <Link
                  variant="body2"
                  onClick={handleOpenDialog}
                  sx={{ cursor: 'pointer', mt: 3, mb: 2,textAlign:"center" ,color:"#2b2f50"}}
                >
                  Renvoyer le code
                </Link>
              </Grid>
            </Grid>
          </Box>


          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
            <Box sx={{
              background: 'linear-gradient(90deg, #2A337B 0%, #2b2f50 100%)',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '1.5rem',
              borderRadius: '12px',
              px: 3,
              py: 1,
              boxShadow: 2,
              letterSpacing: 2,
              fontFamily: 'monospace',
            }}>
              {formatTime(countdown)}
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default ActivationToken;
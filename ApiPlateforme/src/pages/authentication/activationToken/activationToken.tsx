import { useState } from 'react';
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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DialogComponent from '../../../components/dialogComponent/dialogComponent';
import TokenInput from '../../../components/tokenInput/tokenInput';
import { backendUrl } from '../../../constants/constants';

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
      axios.post(`${backendUrl}/api/v1/auth/activated-account?token=${token}`)
        .then((res) => {
          res.data.status === 202 ? setStatus('success') : setStatus('error');
          if (res.request.status === 202) {
            history("/singin");
          } else {
            setStatus('error');
          }
        })
    } catch (error) {
      setStatus('error');
    }
  };

  axios.interceptors.response.use(
    res => {
      return res;
    },
    error => {
      const statusHandlers: any = {
        403: () => alert("Accès interdit"),
        404: () => alert("L'adresse email est incorrecte"),
        409: () => alert("Adresse email déjà utilisée"),
        500: () => alert("Erreur serveur"),
      };
      const status = error.res?.status;
      (statusHandlers[status] || (() => alert("Erreur inconnue")))();
      return Promise.reject(error);
    }
  );

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

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  variant="body2"
                  onClick={handleOpenDialog}
                  sx={{ cursor: 'pointer', mt: 3, mb: 2 }}
                >
                  Renvoyer le code
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default ActivationToken;
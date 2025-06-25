import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    Container,
    CssBaseline,
    Avatar,
    Typography,
    TextField,
    Alert,
    CircularProgress
} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TokenInput from '../../../components/tokenInput/tokenInput';
import axios from 'axios';
import { backendUrl } from '../../../constants/constants';

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

const ResetPassword = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setError('Les mots de passe ne correspondent pas');
            return;
        }

        setLoading(true);
        setError('');

        try {
            await axios.post(`${backendUrl}/api/auth/reset-password?token=${token}neWPassword=${newPassword}`)
                .then((res) => {
                    console.log(res.data);
                    if (res.data.status === 202) {
                        setSuccess(true);
                        navigate('/login')
                    }
                })
        } catch (err) {
            setError('Le token est invalide ou a expiré. Veuillez réessayer.');
        } finally {
            setLoading(false);
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
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOpenIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Nouveau mot de passe
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
                        Un code de vérification a été envoyé à votre email
                    </Typography>

                    {success && (
                        <Alert severity="success" sx={{ width: '100%', mt: 2 }}>
                            Mot de passe modifié avec succès. Redirection...
                        </Alert>
                    )}

                    {error && (
                        <Alert severity="error" sx={{ width: '100%', mt: 2 }}>
                            {error}
                        </Alert>
                    )}

                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
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
                            sx={{ mt: 3 }}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Confirmer le mot de passe"
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={loading || token.length !== 6 || !newPassword}
                            sx={{ backgroundColor: "#2A337B", mt: 2, textTransform: "none", borderRadius: "8px", mb: 2 }}
                        >
                            {loading ? <CircularProgress size={24} /> : 'Réinitialiser le mot de passe'}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default ResetPassword;
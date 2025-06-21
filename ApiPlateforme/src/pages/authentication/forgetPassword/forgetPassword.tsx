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
import LockResetIcon from '@mui/icons-material/LockReset';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from 'axios';

const theme = createTheme();

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await axios.post(`http://localhost:8080/api/auth/forgot-password?email=${email}`)
                .then((res) => {
                    console.log(res.data);
                    if (res.data.status === 200) {
                        setSuccess(true);
                        navigate('/reset-password')
                    }
                })
        } catch (err) {
            setError('Une erreur est survenue. Veuillez réessayer.');
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
                        <LockResetIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Réinitialisation du mot de passe
                    </Typography>

                    {success && (
                        <Alert severity="success" sx={{ width: '100%', mt: 2 }}>
                            Un email avec les instructions a été envoyé à {email}
                        </Alert>
                    )}

                    {error && (
                        <Alert severity="error" sx={{ width: '100%', mt: 2 }}>
                            {error}
                        </Alert>
                    )}

                    {!success && (
                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                                disabled={loading || !email.includes('@')}
                                sx={{ backgroundColor: "#2A337B", mt: 2, mb: 4, textTransform: "none", borderRadius: "8px" }}
                            >
                                {loading ? <CircularProgress size={24} /> : 'Envoyer les instructions'}
                            </Button>
                        </Box>
                    )}
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default ForgetPassword;
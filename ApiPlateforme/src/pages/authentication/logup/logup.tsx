import { Box, TextField, Button, Typography, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, MenuItem, CircularProgress, FormHelperText } from "@mui/material";
import LOGIN from "../../../assets/img/account_illustration.png";
import { Google as GoogleIcon, Apple as AppleIcon, VisibilityOff, Visibility, LinkedIn } from "@mui/icons-material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import AlertComponent, { NotificationProvider } from "../../../components/alert/AlertComponent";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import fr from 'react-phone-input-2/lang/fr.json'
import { useTranslation } from "react-i18next";

const Logup = () => {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
        role: "",
    });
    const [confirmePassword, setConfirmePassword] = useState("");
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);

    const history = useNavigate();
    const { t } = useTranslation();


    const isFormValid =
        formData.firstname &&
        formData.lastname &&
        formData.phone &&
        formData.email &&
        formData.password &&
        formData.role &&
        isPasswordMatch;

    const checkPasswordMatch = () => {
        setIsPasswordMatch(formData.password === confirmePassword);
    };

    const [status, setStatus] = useState('');

    const { showNotification } = AlertComponent();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await axios.post("http://localhost:8082/api/v1/auth/register", formData);

            if (res.status === 201) {
                showNotification(t('signup.success'), "success");
                setStatus('success');
                history("/activation-account");
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
            console.error(err);
        }
    };

    axios.interceptors.response.use(
        res => res,
        error => {
            const statusHandlers: any = {
                403: () => showNotification(t('signup.errors.forbidden'), "error"),
                404: () => showNotification(t('signup.errors.not_found'), "warning"),
                409: () => showNotification(t('signup.errors.conflict'), "warning"),
                500: () => showNotification(t('signup.errors.server_error'), "error"),
            };

            const status = error.response?.status;
            (statusHandlers[status] || (() => showNotification(t('signup.errors.unknown'), "error")))();

            return Promise.reject(error);
        }
    );

    // State for password visibility
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const [showConfirmePassword, setShowConfirmePassword] = React.useState(false);
    const handleClickShowConfirmePassword = () => setShowConfirmePassword((show) => !show);

    const handleMouseDownConfirmePassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleMouseUpConfirmePassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <section className="flex flex-col md:flex-row">
            {/* Section Image */}
            <div className="hidden lg:flex w-1/2 items-start justify-center">
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
                        alt={t('signup.alt_image')}
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
                        // padding: { xs: 2, md: 6 },
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
                        {t('signup.title')}
                    </Typography>
                    <Typography
                        gutterBottom
                        sx={{
                            color: "green",
                            fontSize: { xs: "14px", sm: "16px", md: "18px" },
                            fontWeight: "semi-bold",
                        }}
                    >
                        {t('signup.subtitle')}
                    </Typography>

                    {/* Champs de connexion */}
                    <NotificationProvider>
                        <form onSubmit={handleSubmit}>
                            <div className="md:flex items-center gap-2">
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Prenom"
                                    name="firstname"
                                    variant="outlined"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                    required
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Nom de famille"
                                    name="lastname"
                                    variant="outlined"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="md:flex items-center gap-2">
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    label="Email professionnelle"
                                    variant="outlined"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <div style={{ width: "100%", margin: '16px 0' }}>
                                    <PhoneInput
                                        country={'cm'}
                                        localization={fr}
                                        value={formData.phone}
                                        onChange={(value: string) => setFormData({ ...formData, phone: value })}
                                        inputProps={{
                                            required: true,
                                            autoFocus: true
                                        }}
                                        containerStyle={{ width: '100%' }}
                                        inputStyle={{ width: '100%', padding: '14px 14px 14px 58px' }}
                                    />
                                </div>
                            </div>
                            <div className="md:flex items-center gap-2">
                                <FormControl fullWidth margin="normal" variant="outlined" required>
                                    <InputLabel htmlFor="outlined-adornment-password">Mot de passe</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        type={showPassword ? 'text' : 'password'}
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
                                        label="Mot de passe"
                                    />
                                </FormControl>
                                <FormControl fullWidth margin="normal" variant="outlined" required>
                                    <InputLabel htmlFor="outlined-adornment-password">Confirmer mot de passe</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        name="confirmePassword"
                                        value={confirmePassword}
                                        onChange={(e) => setConfirmePassword(e.target.value)}
                                        onBlur={checkPasswordMatch}
                                        error={!isPasswordMatch}
                                        type={showConfirmePassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label={
                                                        showConfirmePassword ? 'hide the password' : 'display the password'
                                                    }
                                                    onClick={handleClickShowConfirmePassword}
                                                    onMouseDown={handleMouseDownConfirmePassword}
                                                    onMouseUp={handleMouseUpConfirmePassword}
                                                    edge="end"
                                                >
                                                    {showConfirmePassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Confirmer mot de passe"
                                    />
                                    {!isPasswordMatch && (
                                        <FormHelperText error>
                                            Incorrect
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </div>
                            <div className="md:flex items-center gap-2">
                                <TextField
                                    fullWidth
                                    select
                                    label="Quel est votre profil ?"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    margin="normal"
                                    required
                                >
                                    <MenuItem disabled>Sélectionnez un type</MenuItem>
                                    <MenuItem value="PROJECT_OWNER">Porteur de projet</MenuItem>
                                    <MenuItem value="INVESTOR">Investisseur</MenuItem>
                                </TextField>
                            </div>
                            <div className="">
                                <p className="text-sm text-center"><NavLink className="text-blue-900 hover:underline" to={'#'}> {t('signup.terms_privacy_prefix')}</NavLink> {t('signup.terms_privacy_link')} .</p>
                            </div>
                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                onSubmit={handleSubmit}
                                disabled={status === 'loading' || !isFormValid}
                                startIcon={status === 'loading' ? <CircularProgress size={20} /> : ''}
                                sx={{ backgroundColor: "#2A337B", mt: 2, textTransform: "none", borderRadius: "8px" }}
                            >
                                {status === 'loading' ? t('signup.button_loading') : t('signup.button_register')}
                            </Button>

                        </form>
                    </NotificationProvider>

                    {/* Message d'erreur */}

                    {/* Connexion Google & Apple */}
                    <Box sx={{ mt: 4 }}>
                        <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                            {t('signup.social_login_text')}
                        </Typography>
                        <div className="flex justify-center gap-4 border-t border-gray-100 px-6 py-5">
                            <a href="#" className="rounded-full border border-gray-200 p-2 text-gray-900 hover:bg-red-300">
                                <span className="sr-only">{t('signup.google_login')}</span>
                                <GoogleIcon color="error" />
                            </a>
                            <a href="#" className="rounded-full border border-gray-200 p-2 text-gray-900 hover:bg-gray-300">
                                <span className="sr-only">{t('signup.apple_login')}</span>
                                <AppleIcon />
                            </a>
                            <a href="#" className="rounded-full border border-gray-200 p-2 text-gray-900 hover:bg-blue-300">
                                <span className="sr-only">{t('signup.linkedin_login')}</span>
                                <LinkedIn color="primary" />
                            </a>
                        </div>
                    </Box>

                    {/* Lien vers l'inscription */}
                    <Typography
                        variant="body2"
                        sx={{ mt: 2, color: "text.secondary", fontSize: "14px" }}
                    >
                        {t('signup.already_have_account')} <NavLink to={"/signin"} style={{ color: "#2A337B" }}>{t('signup.login_link')}</NavLink>
                    </Typography>
                </Box>
            </Box>
        </section>
    );
};

export default Logup;
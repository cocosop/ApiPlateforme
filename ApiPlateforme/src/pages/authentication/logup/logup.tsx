import { Box, TextField, Button, Typography, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import LOGIN from "../../../assets/img/account_illustration.png";
import { Google as GoogleIcon, Apple as AppleIcon, VisibilityOff, Visibility, LinkedIn } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

const Logup = () => {

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
                        alt="Login Illustration"
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
                    component="form"
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
                        Bienvenue Au Portail Des Investisseurs de l’API
                    </Typography>
                    <Typography
                        gutterBottom
                        sx={{
                            color: "green",
                            fontSize: { xs: "14px", sm: "16px", md: "18px" },
                            fontWeight: "semi-bold",
                        }}
                    >
                        Créer votre compte
                    </Typography>

                    {/* Champs de connexion */}
                    <form>
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Nom"
                            variant="outlined"
                            required
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Prenom"
                            variant="outlined"
                            required
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Adresse e-mail professionnelle"
                            variant="outlined"
                            required
                        />
                        <FormControl fullWidth margin="normal" variant="outlined" required>
                            <InputLabel htmlFor="outlined-adornment-password">Mot de passe</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
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
                        </FormControl>
                        <div className="">
                            <p className="text-sm text-center"><NavLink className="text-blue-900 hover:underline" to={'#'}> En cliquant sur le bouton « Créer un compte », vous acceptez les conditions d'utilisation et</NavLink> la politique de confidentialité du portail d'investissement du Cameroun .</p>
                        </div>
                        <Button
                            fullWidth
                            variant="contained"
                            type="submit"
                            sx={{ backgroundColor: "#2A337B", mt: 2, textTransform: "none", borderRadius: "8px" }}
                        >
                            Créer un compte
                        </Button>
                    </form>

                    {/* Connexion Google & Apple */}
                    <Box sx={{ mt: 4 }}>
                        <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                            Ou connectez-vous avec :
                        </Typography>
                        <div className="flex justify-center gap-4 border-t border-gray-100 px-6 py-5">
                            <a href="#" className="rounded-full border border-gray-200 p-2 text-gray-900 hover:bg-red-300">
                                <span className="sr-only">Company Google</span>
                                <GoogleIcon color="error" />
                            </a>
                            <a href="#" className="rounded-full border border-gray-200 p-2 text-gray-900 hover:bg-gray-300">
                                <span className="sr-only">Company Google</span>
                                <AppleIcon />
                            </a>
                            <a href="#" className="rounded-full border border-gray-200 p-2 text-gray-900 hover:bg-blue-300">
                                <span className="sr-only">Company Linkedin</span>
                                <LinkedIn color="primary" />
                            </a>
                        </div>
                    </Box>

                    {/* Lien vers l'inscription */}
                    <Typography
                        variant="body2"
                        sx={{ mt: 2, color: "text.secondary", fontSize: "14px" }}
                    >
                        Avez-vous déjà un compte? Connectez vous ici <NavLink to={"/signin"} style={{ color: "#2A337B" }}>Connectez-vous</NavLink>
                    </Typography>
                </Box>
            </Box>
        </section>
    );
};

export default Logup;
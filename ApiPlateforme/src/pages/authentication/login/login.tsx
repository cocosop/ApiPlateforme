import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store/authStore";

type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'project_owner' | 'investor';
};

// Temporary login simulation
const tempUsers: Record<string, User> = {
  admin: {
    id: '1',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin'
  },
  project_owner: {
    id: '2',
    name: 'Project Owner',
    email: 'owner@example.com',
    role: 'project_owner'
  },
  investor: {
    id: '3',
    name: 'Investor',
    email: 'investor@example.com',
    role: 'investor'
  }
};

const Login: React.FC = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleLogin = (user: User) => {
    setUser(user);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">Demo Login</h1>
        <div className="space-y-4">
          {Object.entries(tempUsers).map(([key, user]) => (
            <button
              key={key}
              onClick={() => handleLogin(user)}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Login as {user.role.replace('_', ' ').toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;



// import { Box, TextField, Button, Typography, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
// import LOGIN from "../../../assets/img/account_illustration.png";
// import { Google as GoogleIcon, Apple as AppleIcon, VisibilityOff, Visibility, LinkedIn } from "@mui/icons-material";
// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";

// const Login = () => {

//   const [showPassword, setShowPassword] = React.useState(false);
//   const history = useNavigate();

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//   };

//   const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//   };

//   const onSubmit = (e: any) => {
//     e.preventDefault();
//     sessionStorage.setItem('secteur', '');
//     sessionStorage.setItem('isAuth', 'true');
//     history('/projets');
//   }

//   return (
//     <section className="flex flex-col md:flex-row">
//       {/* Section Image */}
//       <div className="hidden md:flex md:w-1/2 md:items-center md:justify-center">
//         <Box
//           sx={{
//             flex: 1,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             height: { xs: "300px", md: "auto" },
//             width: { xs: "100%", md: "50%" },
//             mb: { xs: 4, md: 0 },
//           }}
//         >
//           <img
//             src={LOGIN}
//             alt="Login Illustration"
//             style={{
//               height: "100%",
//               width: "100%",
//               maxHeight: "600px",
//               objectFit: "contain",
//             }}
//           />
//         </Box>
//       </div>

//       {/* Section Formulaire */}
//       <Box
//         sx={{
//           flex: 1,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           p: { xs: 2, md: 4 },
//         }}
//       >
//         <Box
//           component="form"
//           sx={{
//             justifyContent: "center",
//             width: "100%",
//             maxWidth: { xs: 300, sm: 400 },
//             textAlign: "center",
//             padding: { xs: 2, md: 6 },


//           }}
//         >
//           <Typography
//             variant="h5"
//             gutterBottom
//             sx={{
//               color: "#2A337B",
//               fontWeight: "bold",
//             }}
//           >
//             Bienvenue Au Portail Des Investisseurs de l’API
//           </Typography>
//           <Typography
//             gutterBottom
//             sx={{
//               color: "green",
//               fontSize: { xs: "14px", sm: "16px", md: "18px" },
//               fontWeight: "semi-bold",
//             }}
//           >
//             Connectez-Vous
//           </Typography>

//           {/* Champs de connexion */}
//           <form>
//             <TextField
//               fullWidth
//               margin="normal"
//               label="Adresse e-mail"
//               variant="outlined"
//               required
//             />
//             <FormControl fullWidth margin="normal" variant="outlined" required>
//               <InputLabel htmlFor="outlined-adornment-password">Mot de passe</InputLabel>
//               <OutlinedInput
//                 id="outlined-adornment-password"
//                 type={showPassword ? 'text' : 'password'}
//                 endAdornment={
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label={
//                         showPassword ? 'hide the password' : 'display the password'
//                       }
//                       onClick={handleClickShowPassword}
//                       onMouseDown={handleMouseDownPassword}
//                       onMouseUp={handleMouseUpPassword}
//                       edge="end"
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 }
//                 label="Mot de passe"
//               />
//             </FormControl>
//             <div className="flex justify-end items-center">
//               <NavLink className="text-slate-500 hover:text-blue-900 text-sm" to={'#'}>Mot de passe oublié?</NavLink>
//             </div>
//             <Button
//               fullWidth
//               type="submit"
//               variant="contained"
//               onClick={(e) => { onSubmit(e) }}
//               sx={{ backgroundColor: "#2A337B", mt: 2, textTransform: "none", borderRadius: "8px" }}
//             >
//               Se connecter
//             </Button>
//           </form>

//           {/* Connexion Google & Apple */}
//           <Box sx={{ mt: 4 }}>
//             <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
//               Ou connectez-vous avec :
//             </Typography>
//             <div className="flex justify-center gap-4 border-t border-gray-100 px-6 py-5">
//               <a href="#" className="rounded-full border border-gray-200 p-2 text-gray-900 hover:bg-red-300">
//                 <span className="sr-only">Company Google</span>
//                 <GoogleIcon color="error" />
//               </a>
//               <a href="#" className="rounded-full border border-gray-200 p-2 text-gray-900 hover:bg-gray-300">
//                 <span className="sr-only">Company Google</span>
//                 <AppleIcon />
//               </a>
//               <a href="#" className="rounded-full border border-gray-200 p-2 text-gray-900 hover:bg-blue-300">
//                 <span className="sr-only">Company Linkedin</span>
//                 <LinkedIn color="primary" />
//               </a>
//             </div>
//           </Box>

//           {/* Lien vers l'inscription */}
//           <Typography
//             variant="body2"
//             sx={{ mt: 2, color: "text.secondary", fontSize: "14px" }}
//           >
//             Pas encore de compte ? <NavLink to={"/signup"} style={{ color: "#2A337B" }}>Inscrivez-vous</NavLink>
//           </Typography>
//         </Box>
//       </Box>
//     </section>
//   );
// };

// export default Login;
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import Camer from '../../assets/img/Camer.png'
import Logo from '../../assets/img/logo.png'
import { KeyboardArrowDown } from "@mui/icons-material";
import { Grid } from "@mui/system";

const navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="contenair1">
      <div className="contenair2">
        <div className="nav1">
          <Grid container spacing={1}>
            <Grid size={{ md: 11 }} marginLeft={"auto"} marginRight={"auto"}>
              <Box pt={2} sx={{ display: 'flex', justifyContent: "space-between" }}>
                <img className="image1" src={Camer} />
                <Button variant="text" color={"inherit"} >
                  Francais
                </Button>
              </Box>
            </Grid>
            <Grid size={{ md: 12 }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <nav className={`navbar ${isFixed ? "fixed" : ""}`}>
                  <Link to="/" className="title">
                    <img className="nav-logo" src={Logo} alt="Logo" />
                  </Link>
                  <ul>
                    <Box>
                      <li>
                        <NavLink to="/home">Le Cameroun</NavLink>
                      </li>
                    </Box>
                    <Box
                      component="ul"
                      sx={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}
                    >
                      <li
                        onClick={handleMenuOpen}
                        onMouseEnter={handleMenuOpen}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                          backgroundColor: "white",
                          color: "black",
                        }}
                      >
                        Investir
                        <KeyboardArrowDown />
                      </li>
                    </Box>
                    <Box>
                      <li>
                        <NavLink to="/projets">Secteurs et opportunités</NavLink>
                      </li>
                    </Box>
                    <Box>
                      <li>
                        <NavLink to="/home">Base de données</NavLink>
                      </li>
                    </Box>
                    <Box>
                      <li>
                        <NavLink to="/home">E-Services</NavLink>
                      </li>
                    </Box>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      <MenuItem
                        onClick={handleMenuClose}
                        sx={{
                          "&:hover": {
                            backgroundColor: "blue",
                            color: "white",
                          },
                        }}
                      >
                        Option 1
                      </MenuItem>
                      <MenuItem
                        onClick={handleMenuClose}
                        sx={{
                          "&:hover": {
                            backgroundColor: "blue",
                            color: "white",
                          },
                        }}
                      >
                        Option 2
                      </MenuItem>
                      <MenuItem
                        onClick={handleMenuClose}
                        sx={{
                          "&:hover": {
                            backgroundColor: "blue",
                            color: "white",
                          },
                        }}
                      >
                        Option 3
                      </MenuItem>
                    </Menu>
                    <li>
                      <NavLink to="/contact">Legislations</NavLink>
                    </li>
                    <li>
                      <NavLink to="/FAQ">FAQ</NavLink>
                    </li>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        window.location.href = "/login";
                      }}
                    >
                      Espace privé
                    </Button>
                  </ul>
                </nav>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default navbar;

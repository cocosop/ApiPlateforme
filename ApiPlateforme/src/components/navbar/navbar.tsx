import React, { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { Box, Menu, MenuItem } from "@mui/material";
import Camer from '../../assets/img/Camer.png'
import Logo from '../../assets/img/logo.png'
import { KeyboardArrowDown } from "@mui/icons-material";
import { Grid } from "@mui/system";

const navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid container className="contenair1" spacing={2}>

      <Grid className="contenair2" size={{ md: 12 }}>
        <div className="nav1">
          <img className="image1" src={Camer} />
          <button className="buton" >
            Francais
          </button>
        </div>
        <div>
        </div>
      </Grid>

      <Grid size={{ md: 12 }}>
        <nav>
          <Link to="/" className="title">
            <img src={Logo} />
          </Link>
          <ul >
            <Box>
              <li>
                <NavLink to="/home">Le Cameroun</NavLink>
              </li>
            </Box>
            <Box component="ul" sx={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
              <li
                onClick={handleMenuOpen}
                onMouseEnter={handleMenuOpen}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  backgroundColor: 'white',
                  color: 'black',
                }}
              >
                Investir
                <KeyboardArrowDown />
              </li>
            </Box>
            <Box>
              <li>
                <NavLink to="/home">Secteurs et opportunités</NavLink>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem
                onClick={handleMenuClose}
                sx={{
                  '&:hover': {
                    backgroundColor: 'blue',
                    color: 'white' // Change text color on hover
                  }
                }}
              >
                Option 1
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                sx={{
                  '&:hover': {
                    backgroundColor: 'blue',
                    color: 'white'
                  }
                }}
              >
                Option 2
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                sx={{
                  '&:hover': {
                    backgroundColor: 'blue',
                    color: 'white'
                  }
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
            <button onClick={() => { location.href = "/login" }}>
              Espace privé
            </button>
          </ul>
        </nav>
      </Grid>
    </Grid>
  );
};

export default navbar;
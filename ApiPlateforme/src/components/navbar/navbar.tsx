import React, { useState } from "react";
import CAMER from "../../assets/img/Camer.png"
import LOGO from "../../assets/img/logo.png"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { Box, Menu, MenuItem } from "@mui/material";
import Camer from '../../assets/img/Camer.png'
import Logo from '../../assets/img/logo.png'

const navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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
          <img className="image1" src={Camer} />
          <button className="buton" >
            Francais
          </button>
        </div>
        <div>
        </div>
        <nav>
          <Link to="/" className="title">
            <img src={Logo} />
          </Link>
          <ul >
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <Box component="ul" sx={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
              <li
                onClick={handleMenuOpen}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  backgroundColor: 'white',
                  color: 'black',
                }}
              >
                Secteurs d'activités
                <ArrowDropDownIcon />
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
      </div>
    </div>
  );
};

export default navbar;
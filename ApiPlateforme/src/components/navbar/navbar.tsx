import React, { useState } from "react";
import GTranslateIcon from '@mui/icons-material/GTranslate';

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <div className="contenair1">
      <div className="contenair2">
        <div className="nav1">
          <img className="image1" src="../src/assets/Camer.png"></img>
          <button className="buton" >
            Francais
          </button>
        </div>
        <div>
        </div>
        <nav>
          <Link to="/" className="title">
            <img src="../src/assets/logo.png"></img>
          </Link>
          <ul >
            <li>
              <NavLink to="/about">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">Secteurs</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Legislations</NavLink>
            </li>
            <li>
              <NavLink to="/FAQ">FAQ</NavLink>
            </li>
            <button >
              Espace privé
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default navbar;
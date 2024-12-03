import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Camer from '../../assets/img/Camer.png'
import Logo from '../../assets/img/logo.png'
const navbar = () => {
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
            <li>
              <NavLink to="/about">Secteurs</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Legislations</NavLink>
            </li>
            <li>
              <NavLink to="/FAQ">FAQ</NavLink>
            </li>
            <li className="button" >
            <Link to="/login">Espace Privé</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default navbar;
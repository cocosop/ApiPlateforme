import { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { Box, Button, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import Camer from '../../assets/img/Camer.png'
import Logo from '../../assets/img/logo.png'
import { KeyboardArrowDown } from "@mui/icons-material";
import Grid from "@mui/system/Grid";
import Language from "@mui/icons-material/Language";

interface NavbartProps {
  onMenuClick: any | null;
}

const menuData = [
  {
    menuname: "Investir",
    children: [
      { menuname: "Créer son entreprise", link: "/creer-son-entreprise" },
      { menuname: "Main d'oeuvre", link: "/main-d-oeuvre" },
      { menuname: "Facteurs de production", link: "/factures-de-production" },
      { menuname: "Foncier", link: "/foncier" },
      { menuname: "Fiscalité", link: "/fiscalite" },
      { menuname: "Droit des investisseurs", link: "/droit-des-investisseurs" }
    ],
  },
  {
    menuname: "Secteurs et opportunités",
    children: [
      { menuname: "Agriculture", link: "/projets" },
      { menuname: "Energie", link: "/projets" },
      { menuname: "TIC", link: "/projets" },
      { menuname: "Tourisme", link: "/projets" },
      { menuname: "Infrastructure", link: "/projets" },
    ],
  },
  {
    menuname: "e-Services",
    children: [
      { menuname: "Creation d'entreprise", link: "/creation-d-entreprise" },
      { menuname: "Octroi d'incitation", link: "/octroi-d-incitation" },
      { menuname: "Investor service desk", link: "/investor-service-desk" },
      { menuname: "Permis zones industrielles", link: "/permis-zones-industrielles" },
      { menuname: "Permis zones économiques", link: "/permis-zones-economiques" },
    ],
  },
];

const navbar: React.FC<NavbartProps> = ({ onMenuClick }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [isFixed, setIsFixed] = useState(false);
  const [activeMenu, setActiveMenu] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null); // Tracks the selected main menu item

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



  const handleOpen = (event: any, children: any, menuName: any) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(children);
    setSelectedMenu(menuName);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveMenu([]);
  };

  return (
    <div className="contenair1">
      <div className="contenair2">
        <div className="nav1">
          <Grid container spacing={1} width={"100%"}>
            <Grid size={{ md: 11 }} marginLeft={"auto"} marginRight={"auto"}>
              <Box pt={2} sx={{ display: 'flex', justifyContent: "space-between" }}>
                <img className="image1" src={Camer} />
                <Button variant="text" startIcon={<Language />} color={"inherit"} >
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
                  <Toolbar>
                    <NavLink style={{ marginRight: "0.5rem", textDecoration: "none", color: "black", fontWeight: 600, fontSize: "0.9rem" }} to="/">Le Cameroun</NavLink>
                    {menuData.map((menu) => (
                      <Button
                        key={menu.menuname}
                        style={{ color: "black", fontWeight: 600, textTransform: "initial" }}
                        onMouseEnter={(event) => handleOpen(event, menu.children, menu.menuname)}
                        sx={{
                          color: selectedMenu === menu.menuname ? 'white!important' : 'inherit',
                          backgroundColor: selectedMenu === menu.menuname ? '#0F0B60' : 'transparent',
                          '&:hover': {
                            backgroundColor: 'primary.light',
                            color: "white!important"
                          },
                        }}
                      >
                        {menu.menuname}
                        < KeyboardArrowDown />
                      </Button>
                    ))}
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      onMouseLeave={handleClose}
                      PaperProps={{
                        style: { width: 500 },
                      }}

                    >
                      <Box padding={2}>
                        {activeMenu.length > 0 ? (
                          <Grid container spacing={2}>
                            {activeMenu.map((item: { "menuname": string, link?: string }, index) => (
                              <div key={index}>
                                <MenuItem onClick={handleClose}>
                                  <NavLink style={{ textDecoration: "none", color: "#000" }} to={item.link ? item.link : "#"} onClick={() => onMenuClick(item)}>
                                    {item.menuname}
                                  </NavLink>
                                </MenuItem>
                              </div>
                            ))}
                          </Grid>
                        ) : (
                          <Typography variant="body1" color="textSecondary">
                            Pas de sous-menu disponible.
                          </Typography>
                        )}
                      </Box>
                    </Menu>
                    <MenuItem>
                      <NavLink style={{ textDecoration: "none", color: "black", fontWeight: 600, fontSize: "0.9rem" }} to="/FAQ">FAQ</NavLink>
                    </MenuItem>
                    <NavLink to="/login">
                      <Button variant="outlined">
                        Espace  privé
                      </Button>
                    </NavLink>
                  </Toolbar>
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
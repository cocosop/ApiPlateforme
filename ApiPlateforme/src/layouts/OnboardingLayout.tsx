import { useState } from "react";
import Navbar from "../components/navbar/navbar";
// import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";

/**
 * Layout pour les pages post-login sans sidebar dashboard.
 * Affiche la navbar publique + footer autour du contenu.
 */
const OnboardingLayout = () => {
  const [, setSelectedMenu] = useState(null);

  return (
    <>
      <Navbar onMenuClick={(m: any) => setSelectedMenu(m)} />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default OnboardingLayout;

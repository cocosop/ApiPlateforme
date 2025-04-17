import { useState } from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
    const [, setSelectedMenu] = useState(null);

    const handleMenuClick = (menuName: any) => {
        setSelectedMenu(menuName);
    };

    return (
        <>
            <Navbar onMenuClick={handleMenuClick} />
            <Outlet />
            <Footer />
        </>
    );
};

export default PublicLayout;
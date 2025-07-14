import { Outlet } from "react-router-dom";
import AppHeader from "../components/header/AppHeader";
import Sidebar from "../components/sidebar/Sidebar";
import { useAuthStore } from "../store/AuthStore";



const PrivateLayout = () => {
    const decoded = useAuthStore((state) => state.decoded);
    console.log(`decoded`);
    console.log(decoded);

    if (!decoded) {
        return <p>Utilisateur non connecté</p>;
    }
    return (
        <div className="flex min-h-screen">
            <div className="sticky top-0 h-screen">
                <Sidebar />
            </div>

            <div className="flex-1 flex flex-col min-w-0">
                <header className="sticky top-0 z-10 h-16">
                    <AppHeader />
                </header>

                <main className="flex-1 overflow-auto p-6 ">
                    <div className="mx-auto max-w-7xl">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default PrivateLayout;
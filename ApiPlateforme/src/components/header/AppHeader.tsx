import { ChevronDown, Bell, Settings, LogOut } from 'lucide-react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/AuthStore';

const routeTitles: Record<string, string> = {
  '/dashboard': 'Tableau de bord',
  '/analytics': 'Analytique',
  '/projets': 'Tous les projets',
  '/my-projects': 'Mes projets',
  '/documents': 'Documents',
  '/users': 'Utilisateurs',
  '/investissements': 'Investissements',
  '/messages': 'Messages',
  '/profil': 'Profil',
  '/parametres': 'Paramètres',
  '/notifications': 'Notifications',
  // Ajoute ici d'autres routes si nécessaire
};
const HeaderDashboard = () => {
  const pathname = location.pathname;
  const pageTitle = routeTitles[pathname];
  const history = useNavigate();
  const handleLogout = () => {
    useAuthStore.getState().clearTokens();
    history('/signin');
  };
  const decoded = useAuthStore((state) => state.decoded);

  if (!decoded) {
    return <p>Utilisateur non connecté</p>;
  }

  const getInitial = (name) => name?.charAt(0).toUpperCase() || "?";

  // Liste de couleurs modernes
  const modernColors = [
    "#6366F1", // indigo-500
    "#10B981", // emerald-500
    "#F59E0B", // amber-500
    "#EF4444", // red-500
    "#3B82F6", // blue-500
    "#8B5CF6", // violet-500
    "#EC4899", // pink-500
    "#14B8A6", // teal-500
  ];

  // Choisir une couleur aléatoire
  const randomColor = modernColors[Math.floor(Math.random() * modernColors.length)];

  return (
    <header className="z-50 w-full h-16 px-6 bg-white border-b flex items-center justify-between shadow-sm m-0">
      {/* Titre de la page */}
      <h1 className="text-xl font-semibold text-gray-800">{pageTitle}</h1>
      {/* Zone de droite */}
      <div className="flex items-center gap-4">
        {/* Notification */}

        <Link to="/notifications" className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
            3
          </span>
        </Link>

        {/* Profil */}
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-full transition">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-2 rounded-full p-1 hover:bg-gray-100 transition-all focus:outline-none">
              <div
                style={{
                  backgroundColor: randomColor,
                }}
                className="h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center text-white font-bold text-xl"
              >
                {getInitial(decoded.sub)}
              </div>
              <span className="hidden sm:inline text-sm font-medium text-gray-700">{decoded?.sub}</span>
              <ChevronDown className="hidden sm:block h-4 w-4 text-gray-500" aria-hidden="true" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-xl bg-white p-1 shadow-lg ring-1 ring-gray-900/5 focus:outline-none transition data-closed:opacity-0 data-closed:translate-y-1 data-enter:duration-150 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="p-2">
                {/* Section info utilisateur */}
                <div className="flex flex-col items-center px-3 py-2 border-b border-gray-100">
                  <div
                    style={{
                      backgroundColor: randomColor,
                    }}
                    className="h-16 w-16 rounded-full border border-gray-200 flex items-center justify-center text-white font-bold text-xl"
                  >
                    {getInitial(decoded.sub)}
                  </div>
                  <p className="text-xs text-gray-500 truncate">{decoded.sub}</p>
                </div>

                {/* Boutons actions */}
                <div className="space-y-0.5">
                  <button
                    className="flex w-full items-center gap-x-2 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => history("/parametres")}
                  >
                    <Settings className="h-4 w-4 text-gray-400" />
                    Paramètres
                  </button>
                  <button
                    className="flex w-full items-center gap-x-2 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4 text-gray-400" />
                    Déconnexion
                  </button>
                </div>
              </div>
            </PopoverPanel>
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default HeaderDashboard;

import { ChevronDown, Bell, Settings, LogOut } from 'lucide-react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/AuthStore';

const routeTitles: Record<string, string> = {
  '/dashboard/': 'Tableau de bord',
  '/dashboard/analytics': 'Analytique',
  '/projets': 'Tous les projets',
  '/dashboard/my-projects': 'Mes projets',
  '/dashboard/documents': 'Documents',
  '/dashboard/users': 'Utilisateurs',
  '/dashboard/investments': 'Investissements',
  '/dashboard/messages': 'Messages',
  '/dashboard/profil': 'Profil',
  '/dashboard/settings': 'Paramètres',
  '/dashboard/notifications': 'Notifications',
  // Ajoute ici d'autres routes si nécessaire
};
const HeaderDashboard = () => {
  const pathname = location.pathname;
  const pageTitle = routeTitles[pathname] || 'Tableau de bord';
  const history = useNavigate();
  const handleLogout = () => {
    useAuthStore.getState().clearToken();
    history('/signin');
  };
  return (
    <header className="z-50 w-full h-16 px-6 bg-white border-b flex items-center justify-between shadow-sm m-0">
      {/* Titre de la page */}
      <h1 className="text-xl font-semibold text-gray-800">{pageTitle}</h1>
      {/* Zone de droite */}
      <div className="flex items-center gap-4">
        {/* Notification */}

        <Link to="/dashboard/notifications" className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
            3
          </span>
        </Link>

        {/* Profil */}
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-full transition">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-2 rounded-full p-1 hover:bg-gray-100 transition-all focus:outline-none">
              <img
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=40&h=40&q=80"
                alt="Profile"
                className="h-8 w-8 rounded-full border border-gray-200"
              />
              <span className="hidden sm:inline text-sm font-medium text-gray-700">Moi</span>
              <ChevronDown className="hidden sm:block h-4 w-4 text-gray-500" aria-hidden="true" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-xl bg-white p-1 shadow-lg ring-1 ring-gray-900/5 focus:outline-none transition data-closed:opacity-0 data-closed:translate-y-1 data-enter:duration-150 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="p-2">
                {/* Section info utilisateur */}
                <div className="flex flex-col items-center px-3 py-2 border-b border-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=40&h=40&q=80"
                    alt="Profile"
                    className="h-16 w-16 rounded-full border border-gray-200"
                  />
                  <p className="text-xs text-gray-500 truncate">utilisateur@example.com</p>
                </div>

                {/* Boutons actions */}
                <div className="space-y-0.5">
                  <button
                    className="flex w-full items-center gap-x-2 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => console.log('Settings clicked')}
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

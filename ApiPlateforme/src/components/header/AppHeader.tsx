import { Bell, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const routeTitles: Record<string, string> = {
  '/dashboard/': 'Tableau de bord',
  '/dashboard/analytics': 'Analytique',
  '/dashboard/projects': 'Tous les projets',
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
  const location = useLocation();
  const pathname = location.pathname;
  const pageTitle = routeTitles[pathname] || 'Tableau de bord';
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
          <img
            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=40&h=40&q=80"
            alt="Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-700 hidden sm:block">Moi</span>
          <ChevronDown className="w-4 h-4 text-gray-600 hidden sm:block" />
        </div>
      </div>
    </header>
  );
};

export default HeaderDashboard;

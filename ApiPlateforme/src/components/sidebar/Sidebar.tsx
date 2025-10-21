import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../../store/AuthStore';
import {
  FolderKanban,
  PiggyBank,
  Settings,
  LucideIcon,
  MessageSquare,
  LayoutDashboard,
  User2Icon

} from 'lucide-react';
import logo from '../../assets/img/logo.png'

// Type pour les rôles utilisateur
type UserRole = 'ADMIN' | 'PROJECT_OWNER' | 'INVESTOR';

// Type pour un élément du menu
interface MenuItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

// Menus spécifiques selon le rôle
const roleMenus: Record<UserRole, MenuItem[]> = {
  ADMIN: [
    { icon: FolderKanban, label: 'Toutes les demandes', path: '/demandes' },
    { icon: PiggyBank, label: 'Projets en étude', path: '/projets' },
    { icon: User2Icon, label: 'Utilisateurs', path: '/users' },
    { icon: Settings, label: 'Paramètres', path: '/parametres' },
  ],
  PROJECT_OWNER: [
    { icon: LayoutDashboard, label: 'Tableau de bord', path: '/dashboard' },
    { icon: FolderKanban, label: 'Mes projets', path: '/projets' },
    { icon: Settings, label: 'Paramètres', path: '/parametres' },
  ],
  INVESTOR: [
    { icon: LayoutDashboard, label: 'Tableau de bord', path: '/dashboard' },
    { icon: FolderKanban, label: 'Mes demandes', path: '/demandes' },
    { icon: PiggyBank, label: 'Mes Projets', path: '/investissements' },
    // { icon: Settings, label: 'Paramètres', path: '/parametres' },
  ],
};

// Menus communs à tous les rôles
/*TODO: Restaurer les notifications une fois le système de notification implémenté */

// const commonMenuItems: MenuItem[] = [
//   { icon: Bell, label: 'Notifications', path: '/notifications' },
//   { icon: MessageSquare, label: 'Messages', path: '/messages' },
//   { icon: UserCircle, label: 'Profil', path: '/profil' },
// ];

const commonMenuItems: MenuItem[] = [
  { icon: MessageSquare, label: 'Messages', path: '/messages' }
];

const Sidebar: React.FC = () => {
  const role = useAuthStore((state) => state.decoded?.role) as UserRole;

  const roleMenu = roleMenus[role as UserRole] || [];
  const fullMenu = [...roleMenu, ...commonMenuItems];

  return (
    <div className="h-full w-64 bg-gray-900 text-white p-4">
      <div className="flex items-center bg-white w-full p-4 mb-4 shadow-lg rounded-xl">
        <img src={logo} alt="logo-api" />
      </div>
      <nav className="space-y-2">
        {fullMenu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${isActive
                ? 'bg-gray-800 text-white'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

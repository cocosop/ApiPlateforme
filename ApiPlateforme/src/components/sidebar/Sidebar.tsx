import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../../store/AuthStore';
import {
  Users,
  FolderKanban,
  PiggyBank,
  Settings,
  BarChart,
  LucideIcon,
  Bell,
  MessageSquare,
  UserCircle,
  LayoutDashboard,

} from 'lucide-react';

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
    { icon: LayoutDashboard, label: 'Tableau de bord', path: '/dashboard' },
    { icon: Users, label: 'Utilisateurs', path: '/users' },
    { icon: FolderKanban, label: 'Tous les projets', path: '/projets' },
    { icon: BarChart, label: 'Analytique', path: '/analytics' },
    { icon: Settings, label: 'Paramètres', path: '/parametres' },
  ],
  PROJECT_OWNER: [
    { icon: LayoutDashboard, label: 'Tableau de bord', path: '/dashboard' },
    { icon: FolderKanban, label: 'Projets', path: '/projets' },
    { icon: Settings, label: 'Paramètres', path: '/parametres' },
  ],
  INVESTOR: [
    { icon: LayoutDashboard, label: 'Tableau de bord', path: '/dashboard' },
    { icon: FolderKanban, label: 'Projets', path: '/investissements' },
    { icon: Settings, label: 'Paramètres', path: '/parametres' },
  ],
};

// Menus communs à tous les rôles
const commonMenuItems: MenuItem[] = [
  { icon: Bell, label: 'Notifications', path: '/notifications' },
  { icon: MessageSquare, label: 'Messages', path: '/messages' },
  { icon: UserCircle, label: 'Profil', path: '/profil' },
  { icon: PiggyBank, label: 'Mes Projets', path: '/investissements' },
  { icon: BarChart, label: 'Suivie Pojets', path: '/analytics' },

];


const Sidebar: React.FC = () => {
  const role = useAuthStore((state) => state.decoded?.role) as UserRole;

  const roleMenu = roleMenus[role as UserRole] || [];
  const fullMenu = [...roleMenu, ...commonMenuItems];

  return (
    <div className="h-full w-64 bg-gray-900 text-white p-4">
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

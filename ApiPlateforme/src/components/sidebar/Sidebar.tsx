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
    { icon: Users, label: 'Utilisateurs', path: '/dashboard/users' },
    { icon: FolderKanban, label: 'Tous les projets', path: '/projets' },
    { icon: BarChart, label: 'Analytique', path: '/dashboard/analytics' },
    { icon: Settings, label: 'Paramètres', path: '/dashboard/settings' },
  ],
  PROJECT_OWNER: [
    { icon: LayoutDashboard, label: 'Tableau de bord', path: '/dashboard' },
    { icon: FolderKanban, label: 'Mes projets', path: '/dashboard/my-projects' },
    { icon: Settings, label: 'Paramètres', path: '/dashboard/settings' },
  ],
  INVESTOR: [
    { icon: LayoutDashboard, label: 'Tableau de bord', path: '/dashboard' },
    { icon: FolderKanban, label: 'Mes projets', path: '/dashboard/my-projects' },
    { icon: Settings, label: 'Paramètres', path: '/dashboard/settings' },
  ],
};

// Menus communs à tous les rôles
const commonMenuItems: MenuItem[] = [
  { icon: Bell, label: 'Notifications', path: '/dashboard/notifications' },
  { icon: MessageSquare, label: 'Messages', path: '/dashboard/messages' },
  { icon: UserCircle, label: 'Profil', path: '/dashboard/profil' },
  { icon: PiggyBank, label: 'Investissements', path: '/dashboard/investments' },
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

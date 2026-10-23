import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import {
  ArrowRight,
  Bell,
  Briefcase,
  LayoutGrid,
  LogOut,
  Menu,
  MessageSquareText,
  Moon,
  Settings,
  Sun,
  UserRound,
  X,
  LucideIcon,
} from "lucide-react";
import logo from "../../assets/img/logo.png";
import { Avatar } from "./components";
import { currentUser, messages, notifications } from "./data";

export const PORTAL_BASE = "/investor-portal";
const THEME_KEY = "investor-portal-theme";

interface NavItem {
  label: string;
  path: string;
  icon: LucideIcon;
  badge?: number;
}

const unread = (list: { unread?: boolean }[]) =>
  list.filter((m) => m.unread).length;

const NAV_ITEMS: NavItem[] = [
  { label: "Overview", path: PORTAL_BASE, icon: LayoutGrid },
  { label: "My Projects", path: `${PORTAL_BASE}/projects`, icon: Briefcase },
  { label: "My Profile", path: `${PORTAL_BASE}/profile`, icon: UserRound },
  {
    label: "Messages",
    path: `${PORTAL_BASE}/messages`,
    icon: MessageSquareText,
    badge: unread(messages),
  },
  {
    label: "Notification",
    path: `${PORTAL_BASE}/notifications`,
    icon: Bell,
    badge: unread(notifications),
  },
  { label: "Settings", path: `${PORTAL_BASE}/settings`, icon: Settings },
];

const fullName = `${currentUser.lastName} ${currentUser.firstName}`;

const SidebarContent: React.FC<{ onNavigate?: () => void }> = ({
  onNavigate,
}) => (
  <div className="flex h-full flex-col">
    <Link
      to="/"
      className="flex h-16 items-center border-b border-[#ECEAF5] dark:border-neutral-800 px-5"
      onClick={onNavigate}
    >
      <img src={logo} alt="API Cameroun" className="h-10 w-auto dark:rounded-lg dark:bg-white dark:px-2 dark:py-1" />
    </Link>

    <p className="px-5 pb-3 pt-6 text-xs font-medium uppercase tracking-wider text-gray-400">
      Navigation
    </p>
    <nav className="flex-1 space-y-1 px-3">
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === PORTAL_BASE}
          onClick={onNavigate}
          className={({ isActive }) =>
            `group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
              isActive
                ? "bg-[#E7E1FB] dark:bg-[#2A1F5C] text-[#0F0B60] dark:text-white"
                : "text-gray-600 dark:text-gray-300 hover:bg-[#F4F2FB] dark:hover:bg-neutral-800 hover:text-[#14112B] dark:hover:text-white"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <item.icon
                className={`h-[18px] w-[18px] ${isActive ? "text-[#4B1FB8] dark:text-[#C4B5FD]" : "text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200"}`}
              />
              <span className="flex-1">{item.label}</span>
              {!!item.badge && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#6D3FF0] px-1.5 text-[11px] font-semibold text-white">
                  {item.badge}
                </span>
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>

    <div className="flex items-center gap-3 border-t border-[#ECEAF5] dark:border-neutral-800 px-5 py-4">
      <Avatar name={fullName} />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-[#14112B] dark:text-white">
          {fullName}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{currentUser.role}</p>
      </div>
      <Link
        to="/"
        title="Sign out"
        className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800 hover:text-gray-600 dark:hover:text-gray-200"
      >
        <LogOut className="h-4 w-4" />
      </Link>
    </div>
  </div>
);

const InvestorPortalLayout: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  // Mode sombre limité au portail : la classe "dark" est posée sur le conteneur ci-dessous
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem(THEME_KEY) === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
    } catch {
      /* stockage indisponible : le choix n'est simplement pas mémorisé */
    }
  }, [dark]);
  const { pathname } = useLocation();

  const current =
    NAV_ITEMS.find(
      (i) => i.path !== PORTAL_BASE && pathname.startsWith(i.path),
    ) ?? NAV_ITEMS[0];
  const notifCount = unread(notifications);

  // Ferme le menu mobile à chaque changement de page
  useEffect(() => setDrawerOpen(false), [pathname]);

  return (
    <div className={`${dark ? "dark" : ""} min-h-screen bg-gradient-to-br from-[#F6F4FD] via-[#F3F1FA] to-[#ECE7FB] font-[Poppins,sans-serif] text-[#14112B] dark:bg-black dark:bg-none dark:text-white`}>
      <div className="flex">
        {/* Menu latéral (grand écran) */}
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 overflow-y-auto border-r border-[#ECEAF5] dark:border-neutral-800 bg-white dark:bg-black lg:block">
          <SidebarContent />
        </aside>

        {/* Menu latéral (mobile) */}
        {drawerOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-[#14112B]/40 backdrop-blur-sm"
              onClick={() => setDrawerOpen(false)}
            />
            <aside className="absolute inset-y-0 left-0 w-72 max-w-[85%] bg-white dark:bg-black shadow-xl">
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
                className="absolute right-3 top-3 rounded-lg p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800"
              >
                <X className="h-5 w-5" />
              </button>
              <SidebarContent onNavigate={() => setDrawerOpen(false)} />
            </aside>
          </div>
        )}

        <div className="flex min-w-0 flex-1 flex-col">
          {/* Barre du haut */}
          <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between gap-3 border-b border-[#ECEAF5] dark:border-neutral-800 bg-white/95 dark:bg-black/90 px-4 backdrop-blur sm:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                aria-label="Open menu"
                className="rounded-lg p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
              <nav
                aria-label="Breadcrumb"
                className="flex min-w-0 items-center gap-2 text-sm"
              >
                <span className="hidden font-semibold tracking-wide text-[#14112B] dark:text-white sm:inline">
                  API CAMEROON
                </span>
                <ArrowRight className="hidden h-4 w-4 text-gray-400 sm:inline" />
                <span className="truncate text-gray-500 dark:text-gray-400">
                  Investor Portal
                  {current.path !== PORTAL_BASE && (
                    <span className="text-[#14112B] dark:text-white"> / {current.label}</span>
                  )}
                </span>
              </nav>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                role="switch"
                aria-checked={dark}
                aria-label="Dark mode"
                onClick={() => setDark((d) => !d)}
                className={`relative flex h-7 w-12 items-center rounded-full border transition-colors ${dark ? "border-[#6D3FF0] bg-[#6D3FF0]" : "border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800"}`}
              >
                <span
                  className={`absolute flex h-5 w-5 items-center justify-center rounded-full shadow transition-all ${
                    dark
                      ? "left-6 bg-white text-[#0F0B60]"
                      : "left-1 bg-[#14112B] text-white"
                  }`}
                >
                  {dark ? (
                    <Moon className="h-3 w-3" />
                  ) : (
                    <Sun className="h-3 w-3" />
                  )}
                </span>
              </button>

              <Link
                to={`${PORTAL_BASE}/notifications`}
                aria-label="Notifications"
                className="relative flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 dark:border-neutral-700 text-gray-600 dark:text-gray-300 transition-colors hover:bg-gray-50 dark:hover:bg-neutral-800"
              >
                <Bell className="h-4 w-4" />
                {notifCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#6D3FF0] px-1 text-[10px] font-semibold text-white">
                    {notifCount}
                  </span>
                )}
              </Link>

              <Link
                to={`${PORTAL_BASE}/profile`}
                className="flex items-center gap-2.5 rounded-full py-1 pl-1 pr-1 transition-colors hover:bg-gray-50 dark:hover:bg-neutral-800 sm:pr-3"
              >
                <Avatar name={fullName} size="sm" />
                <span className="hidden leading-tight sm:block">
                  <span className="block text-sm font-semibold text-[#14112B] dark:text-white">
                    {fullName}
                  </span>
                  <span className="block text-[11px] text-gray-500 dark:text-gray-400">
                    {currentUser.role}
                  </span>
                </span>
              </Link>
            </div>
          </header>

          <main className="mx-auto w-full min-w-0 max-w-[1400px] flex-1 p-4 sm:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default InvestorPortalLayout;

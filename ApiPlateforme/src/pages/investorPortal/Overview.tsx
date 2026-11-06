import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  Bell,
  FilePlus2,
  MessageSquareText,
  UserRound,
  CheckCircle2,
  AlertCircle,
  FileText,
  Info,
} from "lucide-react";
import { Skeleton, Spin, Badge } from "antd";
import illustration from "../../assets/img/reduction.png";
import imgDraft from "../../assets/img/u1.png";
import imgSubmitted from "../../assets/img/u2.png";
import imgUnderReview from "../../assets/img/u3.png";
import imgApproved from "../../assets/img/u4.png";
import imgRejected from "../../assets/img/u5.png";
import { Panel, ProjectsTable, ViewAllLink } from "./components";
import { PORTAL_BASE } from "./InvestorPortalLayout";
import {
  ProjectStatus,
  PortalProject,
  currentUser as defaultUser,
  formatDateTime,
} from "./data";
import userService, { UserResponse } from "../../services/userService";
import projectService, { BackendProject } from "../../services/projectService";
import dashboardService, {
  DashboardOverviewResponse,
  ProfileCompletenessDto,
  RecentMessageDto,
  RecentNotificationDto,
} from "../../services/dashboardService";

/* ─── Status cards ─── */
const STATUS_CARDS: { status: ProjectStatus; label: string; img: string; card: string }[] = [
  { status: "DRAFT",        label: "Draft",        img: imgDraft,       card: "bg-[#E8EEFB] dark:bg-neutral-900" },
  { status: "SUBMITTED",    label: "Submitted",    img: imgSubmitted,   card: "bg-[#FCEBE1] dark:bg-neutral-900" },
  { status: "UNDER_REVIEW", label: "Under review", img: imgUnderReview, card: "bg-[#E8EEFB] dark:bg-neutral-900" },
  { status: "APPROVED",     label: "Approved",     img: imgApproved,    card: "bg-[#E8EEFB] dark:bg-neutral-900" },
  { status: "REJECTED",     label: "Rejected",     img: imgRejected,    card: "bg-[#FCEBE1] dark:bg-neutral-900" },
];

/* ─── Map backend status ─── */
const toPortalStatus = (s: string): ProjectStatus => {
  if (s === "PENDING")  return "SUBMITTED";
  if (s === "STUDYING") return "UNDER_REVIEW";
  if (s === "ACCEPTED") return "APPROVED";
  if (s === "REJECTED") return "REJECTED";
  return "DRAFT";
};

/* ─── Icône notification ─── */
const NotifIcon: React.FC<{ category?: string }> = ({ category }) => {
  switch (category) {
    case "APPLICATION": return <FileText className="h-4 w-4 text-[#0F0B60]" />;
    case "DOCUMENT":    return <AlertCircle className="h-4 w-4 text-amber-600" />;
    case "REVIEW":      return <Info className="h-4 w-4 text-blue-600" />;
    case "DECISION":    return <CheckCircle2 className="h-4 w-4 text-emerald-600" />;
    default:            return <Bell className="h-4 w-4 text-gray-500" />;
  }
};

/* ═══════════════════════════════════════
   ProfileCompleteness — données API
═══════════════════════════════════════ */
const ProfileCompletenessCard: React.FC<{ data?: ProfileCompletenessDto; loading: boolean }> = ({
  data, loading,
}) => {
  const percent = data?.percent ?? 0;
  const complete = data?.complete ?? 0;
  const total    = data?.total ?? 6;

  return (
    <Panel>
      <div className="p-5">
        <h2 className="text-lg font-semibold text-[#14112B] dark:text-white">
          Profile completeness
        </h2>

        {loading ? (
          <Skeleton active paragraph={{ rows: 1 }} className="mt-4" />
        ) : (
          <>
            <div className="relative mt-7">
              <span className="absolute -top-5 right-0 text-[11px] font-semibold text-gray-500 dark:text-gray-400">
                100%
              </span>
              <div className="relative h-7 overflow-hidden rounded-lg bg-[repeating-linear-gradient(90deg,#D9D6E6_0_2px,transparent_2px_8px)]">
                <div
                  className="flex h-full items-center justify-end rounded-lg bg-gradient-to-r from-[#A9B8F8] via-[#7C8EF2] to-[#5B5BE6] pr-2 transition-[width] duration-700"
                  style={{ width: `${percent}%` }}
                >
                  <span className="rounded-md bg-white/30 px-1.5 text-[11px] font-semibold text-white">
                    {percent}%
                  </span>
                </div>
              </div>
              <span
                className="absolute -top-1.5 h-10 w-1 -translate-x-1/2 rounded-full bg-[#4B5BE6] shadow"
                style={{ left: `${percent}%` }}
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#E4E0F5] dark:border-neutral-700 bg-[#F8F7FD] dark:bg-neutral-800 py-2 pl-4 pr-2">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-semibold text-[#14112B] dark:text-white">
                  {complete} sur {total}
                </span>{" "}
                champs complétés ({percent}%).
              </p>
              <Link
                to={`${PORTAL_BASE}/settings`}
                className="inline-flex items-center gap-2 rounded-lg bg-white dark:bg-neutral-900 py-1.5 pl-3 pr-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 shadow-sm ring-1 ring-[#ECEAF5] dark:ring-neutral-700 transition-colors hover:text-[#4B1FB8]"
              >
                <UserRound className="h-3.5 w-3.5" />
                Voir le profil
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#5B5BE6] text-white">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </>
        )}
      </div>
    </Panel>
  );
};

/* ═══════════════════════════════════════
   Recent Messages — données API
═══════════════════════════════════════ */
const RecentMessagesCard: React.FC<{ items: RecentMessageDto[]; loading: boolean }> = ({
  items, loading,
}) => {
  const navigate = useNavigate();
  return (
    <Panel
      title="Messages récents"
      action={<ViewAllLink to={`${PORTAL_BASE}/messages`} />}
    >
      {loading ? (
        <div className="p-4 space-y-3">
          {[1, 2, 3].map(i => <Skeleton key={i} active avatar paragraph={{ rows: 1 }} />)}
        </div>
      ) : items.length === 0 ? (
        <div className="px-5 py-8 text-center text-sm text-gray-400">
          <MessageSquareText className="mx-auto h-7 w-7 text-gray-200 mb-2" />
          Aucun message récent.
        </div>
      ) : (
        <ul className="divide-y divide-[#ECEAF5] dark:divide-neutral-800">
          {items.map((msg, i) => {
            const senderName = [msg.senderFirstname, msg.senderLastname].filter(Boolean).join(" ")
              || msg.senderEmail || "API Cameroun";
            const initials = (msg.senderFirstname?.[0] ?? "") + (msg.senderLastname?.[0] ?? "");
            return (
              <li
                key={msg.chatId + i}
                onClick={() => navigate(`${PORTAL_BASE}/messages`)}
                className="flex cursor-pointer items-start gap-3 px-5 py-3.5 hover:bg-[#FAF9FE] dark:hover:bg-neutral-800 transition-colors"
              >
                {/* Avatar initiales */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ECEAF8] text-[11px] font-bold text-[#0F0B60] uppercase">
                  {initials || "A"}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    {msg.unread && (
                      <span className="h-2 w-2 shrink-0 rounded-full bg-[#0F0B60]" />
                    )}
                    <span className={`truncate text-sm ${msg.unread ? "font-semibold text-[#14112B] dark:text-white" : "font-medium text-gray-700 dark:text-gray-300"}`}>
                      {msg.projectName}
                    </span>
                  </div>
                  <p className="mt-0.5 truncate text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-medium">{senderName}</span>: {msg.lastMessage}
                  </p>
                </div>
                {msg.timestamp && (
                  <span className="shrink-0 text-[11px] text-gray-400">
                    {formatDateTime(msg.timestamp)}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </Panel>
  );
};

/* ═══════════════════════════════════════
   Recent Notifications — données API
═══════════════════════════════════════ */
const RecentNotificationsCard: React.FC<{ items: RecentNotificationDto[]; loading: boolean }> = ({
  items, loading,
}) => {
  const navigate = useNavigate();
  return (
    <Panel
      title="Notifications récentes"
      action={<ViewAllLink to={`${PORTAL_BASE}/notifications`} />}
    >
      {loading ? (
        <div className="p-4 space-y-3">
          {[1, 2, 3].map(i => <Skeleton key={i} active paragraph={{ rows: 1 }} />)}
        </div>
      ) : items.length === 0 ? (
        <div className="px-5 py-8 text-center text-sm text-gray-400">
          <Bell className="mx-auto h-7 w-7 text-gray-200 mb-2" />
          Aucune notification récente.
        </div>
      ) : (
        <ul className="divide-y divide-[#ECEAF5] dark:divide-neutral-800">
          {items.map((notif) => (
            <li
              key={notif.id}
              onClick={() => navigate(`${PORTAL_BASE}/notifications`)}
              className="flex cursor-pointer items-start gap-3 px-5 py-3.5 hover:bg-[#FAF9FE] dark:hover:bg-neutral-800 transition-colors"
            >
              <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                notif.unread ? "bg-[#ECEAF8]" : "bg-gray-100 dark:bg-neutral-800"
              }`}>
                <NotifIcon category={notif.category} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  {notif.unread && (
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#0F0B60]" />
                  )}
                  <span className={`truncate text-sm ${notif.unread ? "font-semibold text-[#14112B] dark:text-white" : "text-gray-700 dark:text-gray-300"}`}>
                    {notif.title}
                  </span>
                </div>
                <p className="mt-0.5 line-clamp-1 text-xs text-gray-500 dark:text-gray-400">
                  {notif.body}
                </p>
              </div>
              {notif.createdAt && (
                <span className="shrink-0 text-[11px] text-gray-400">
                  {formatDateTime(notif.createdAt)}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </Panel>
  );
};

/* ═══════════════════════════════════════
   OVERVIEW PAGE
═══════════════════════════════════════ */
const Overview: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [dashLoading, setDashLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<UserResponse | null>(null);
  const [portalProjects, setPortalProjects] = useState<PortalProject[]>([]);
  const [overview, setOverview] = useState<DashboardOverviewResponse | null>(null);

  useEffect(() => {
    // 1. User info
    userService.me()
      .then(r => r.data && setCurrentUser(r.data))
      .catch(() => {});

    // 2. Projects
    projectService.fetchAllProjects()
      .then(r => {
        const list: BackendProject[] = Array.isArray(r.data) ? r.data : [];
        const mapped: PortalProject[] = list.map((p, idx) => {
          const year = p.soumissionDate
            ? new Date(p.soumissionDate).getFullYear()
            : new Date().getFullYear();
          return {
            reference: `#API-${year}-${String(p.id || idx + 1).padStart(3, "0")}`,
            name: p.titre,
            location: p.ville || p.region || "Cameroun",
            sector: p.secteur || "Général",
            date: p.soumissionDate || p.createdAt || new Date().toISOString(),
            amount: p.montant || p.budget || 0,
            status: toPortalStatus(p.status),
          };
        });
        setPortalProjects(mapped);
      })
      .catch(() => {})
      .finally(() => setLoading(false));

    // 3. Dashboard overview (profile completeness + messages + notifications)
    dashboardService.getOverview()
      .then(r => r.data && setOverview(r.data))
      .catch(() => {})
      .finally(() => setDashLoading(false));
  }, []);

  const recent = [...portalProjects]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 4);

  const pendingRequest = portalProjects.find(
    p => p.status === "UNDER_REVIEW" || p.status === "SUBMITTED"
  );

  const displayName = currentUser?.firstname ?? defaultUser.firstName;

  return (
    <Spin spinning={loading && dashLoading}>
      <div className="space-y-4">

        {/* ── Bandeau d'accueil ── */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r dark:bg-none dark:bg-neutral-900 dark:ring-1 dark:ring-neutral-800 from-[#DCE5FB] via-[#E4E3FB] to-[#ECE5FD] p-5 sm:p-7">
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-white/40 blur-2xl dark:bg-[#6D3FF0]/10" />
          <div className="relative flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-[#14112B] dark:text-white sm:text-[32px] sm:leading-tight">
                Bienvenue, {displayName}
              </h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                Suivez vos projets d'investissement et gérez vos dossiers.
              </p>
              <Link
                to="/investor-portal/project-application"
                className="mt-5 inline-flex items-center gap-2.5 rounded-xl bg-white dark:bg-neutral-900 px-4 py-3 text-sm font-medium text-[#14112B] dark:text-white shadow-sm ring-1 ring-white dark:ring-neutral-800 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EEEAFE] dark:bg-neutral-800 text-[#4B1FB8] dark:text-[#C4B5FD]">
                  <FilePlus2 className="h-4 w-4" />
                </span>
                Soumettre un nouveau projet
              </Link>
            </div>

            {pendingRequest && (
              <div className="flex items-center gap-4 rounded-2xl bg-white/90 dark:bg-neutral-900/90 p-4 shadow-sm ring-1 ring-white dark:ring-neutral-800 backdrop-blur sm:p-5 xl:max-w-[460px]">
                <div className="min-w-0 flex-1">
                  <p className="text-sm leading-snug text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-[#0F0B60] dark:text-white">
                      Action requise :
                    </span>{" "}
                    API Cameroun examine votre dossier pour {pendingRequest.name},{" "}
                    {pendingRequest.location}.
                  </p>
                  <Link
                    to={`${PORTAL_BASE}/messages`}
                    className="mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#7A4A12] py-1.5 pl-4 pr-1.5 text-sm font-medium text-white shadow-sm transition-transform hover:-translate-y-0.5"
                  >
                    Répondre à la demande API
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/25">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </div>
                <img src={illustration} alt="" className="hidden h-24 w-auto shrink-0 sm:block" />
              </div>
            )}
          </div>
        </section>

        {/* ── Compteurs statuts ── */}
        <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
          {STATUS_CARDS.map(c => {
            const count = portalProjects.filter(p => p.status === c.status).length;
            return (
              <Link
                key={c.status}
                to={`${PORTAL_BASE}/projects?status=${c.status}`}
                className={`flex items-center justify-between gap-3 rounded-2xl border border-white dark:border-neutral-800 p-4 shadow-[0_1px_3px_rgba(20,17,43,0.06)] transition-all hover:-translate-y-0.5 hover:shadow-md ${c.card}`}
              >
                <img src={c.img} alt="" className="h-12 w-auto max-w-[64px] shrink-0 object-contain" />
                <span className="text-right">
                  <span className="block text-xs text-gray-600 dark:text-gray-300">{c.label}</span>
                  <span className="block text-3xl font-medium tabular-nums text-[#14112B] dark:text-white">
                    {String(count).padStart(2, "0")}
                  </span>
                </span>
              </Link>
            );
          })}
        </section>

        {/* ── Projets récents ── */}
        <Panel
          title="Projets récemment mis à jour"
          action={<ViewAllLink to={`${PORTAL_BASE}/projects`} label="Tous les projets" />}
        >
          {loading ? (
            <div className="p-4 space-y-3">
              {[1, 2].map(i => <Skeleton key={i} active paragraph={{ rows: 1 }} />)}
            </div>
          ) : (
            <ProjectsTable projects={recent} />
          )}
        </Panel>

        {/* ── Profil / Messages / Notifications ── */}
        <section className="grid gap-4 lg:grid-cols-2">
          <div className="space-y-4">
            {/* Profile completeness — données API */}
            <ProfileCompletenessCard
              data={overview?.profileCompleteness}
              loading={dashLoading}
            />
            {/* Recent Messages — données API */}
            <RecentMessagesCard
              items={overview?.recentMessages ?? []}
              loading={dashLoading}
            />
          </div>

          {/* Recent Notifications — données API */}
          <RecentNotificationsCard
            items={overview?.recentNotifications ?? []}
            loading={dashLoading}
          />
        </section>
      </div>
    </Spin>
  );
};

export default Overview;

import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Bell,
  FilePlus2,
  MessageSquareText,
  UserRound,
} from "lucide-react";
import illustration from "../../assets/img/reduction.png";
import imgDraft from "../../assets/img/u1.png";
import imgSubmitted from "../../assets/img/u2.png";
import imgUnderReview from "../../assets/img/u3.png";
import imgApproved from "../../assets/img/u4.png";
import imgRejected from "../../assets/img/u5.png";
import { FeedList, Panel, ProjectsTable, ViewAllLink } from "./components";
import { PORTAL_BASE } from "./InvestorPortalLayout";
import {
  ProjectStatus,
  currentUser,
  messages,
  notifications,
  profileCompleteness,
  projects,
} from "./data";

const STATUS_CARDS: {
  status: ProjectStatus;
  label: string;
  img: string;
  card: string;
}[] = [
  { status: "DRAFT", label: "Draft", img: imgDraft, card: "bg-[#E8EEFB] dark:bg-neutral-900" },
  {
    status: "SUBMITTED",
    label: "Submitted",
    img: imgSubmitted,
    card: "bg-[#FCEBE1] dark:bg-neutral-900",
  },
  {
    status: "UNDER_REVIEW",
    label: "Under review",
    img: imgUnderReview,
    card: "bg-[#E8EEFB] dark:bg-neutral-900",
  },
  {
    status: "APPROVED",
    label: "Approved",
    img: imgApproved,
    card: "bg-[#E8EEFB] dark:bg-neutral-900",
  },
  {
    status: "REJECTED",
    label: "Rejected",
    img: imgRejected,
    card: "bg-[#FCEBE1] dark:bg-neutral-900",
  },
];

const ProfileCompleteness: React.FC = () => {
  const { complete, total } = profileCompleteness;
  const percent = Math.round((complete / total) * 100);
  return (
    <Panel>
      <div className="p-5">
        <h2 className="text-lg font-semibold text-[#14112B] dark:text-white">
          Profile completeness
        </h2>

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
          {/* Curseur à la position atteinte */}
          <span
            className="absolute -top-1.5 h-10 w-1 -translate-x-1/2 rounded-full bg-[#4B5BE6] shadow"
            style={{ left: `${percent}%` }}
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#E4E0F5] dark:border-neutral-700 bg-[#F8F7FD] dark:bg-neutral-800 py-2 pl-4 pr-2">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-semibold text-[#14112B] dark:text-white">
              {complete} of {total}
            </span>{" "}
            applicable fields complete ({percent}%).
          </p>
          <Link
            to={`${PORTAL_BASE}/profile`}
            className="inline-flex items-center gap-2 rounded-lg bg-white dark:bg-neutral-900 py-1.5 pl-3 pr-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 shadow-sm ring-1 ring-[#ECEAF5] dark:ring-neutral-700 transition-colors hover:text-[#4B1FB8]"
          >
            <UserRound className="h-3.5 w-3.5" /> Review Profile
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#5B5BE6] text-white">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </Panel>
  );
};

const Overview: React.FC = () => {
  const recent = [...projects]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 4);
  const pendingRequest = projects.find((p) => p.status === "DRAFT");

  return (
    <div className="space-y-4">
      {/* Bandeau d'accueil */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r dark:bg-none dark:bg-neutral-900 dark:ring-1 dark:ring-neutral-800 from-[#DCE5FB] via-[#E4E3FB] to-[#ECE5FD] p-5 sm:p-7">
        <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-white/40 blur-2xl dark:bg-[#6D3FF0]/10" />
        <div className="relative flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[#14112B] dark:text-white sm:text-[32px] sm:leading-tight">
              Welcome Back, {currentUser.firstName}
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Track your investment projects and manage your applications.
            </p>
            <Link
              to="/project-application"
              className="mt-5 inline-flex items-center gap-2.5 rounded-xl bg-white dark:bg-neutral-900 px-4 py-3 text-sm font-medium text-[#14112B] dark:text-white shadow-sm ring-1 ring-white dark:ring-neutral-800 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EEEAFE] dark:bg-neutral-800 text-[#4B1FB8] dark:text-[#C4B5FD]">
                <FilePlus2 className="h-4 w-4" />
              </span>
              Start a New Investment Project
            </Link>
          </div>

          {pendingRequest && (
            <div className="flex items-center gap-4 rounded-2xl bg-white/90 dark:bg-neutral-900/90 p-4 shadow-sm ring-1 ring-white dark:ring-neutral-800 backdrop-blur sm:p-5 xl:max-w-[460px]">
              <div className="min-w-0 flex-1">
                <p className="text-sm leading-snug text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-[#0F0B60] dark:text-white">
                    Action needed:
                  </span>{" "}
                  API requested information on {pendingRequest.name},{" "}
                  {pendingRequest.location}.
                </p>
                <Link
                  to={`${PORTAL_BASE}/messages`}
                  className="mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#7A4A12] py-1.5 pl-4 pr-1.5 text-sm font-medium text-white shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  Respond to API Request
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/25">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </div>
              <img
                src={illustration}
                alt=""
                className="hidden h-24 w-auto shrink-0 sm:block"
              />
            </div>
          )}
        </div>
      </section>

      {/* Compteurs par statut */}
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
        {STATUS_CARDS.map((c) => {
          const count = projects.filter((p) => p.status === c.status).length;
          return (
            <Link
              key={c.status}
              to={`${PORTAL_BASE}/projects?status=${c.status}`}
              className={`flex items-center justify-between gap-3 rounded-2xl border border-white dark:border-neutral-800 p-4 shadow-[0_1px_3px_rgba(20,17,43,0.06)] transition-all hover:-translate-y-0.5 hover:shadow-md ${c.card}`}
            >
              <img
                src={c.img}
                alt=""
                className="h-12 w-auto max-w-[64px] shrink-0 object-contain"
              />
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

      {/* Projets récents */}
      <Panel
        title="Recently updated projects"
        action={
          <ViewAllLink to={`${PORTAL_BASE}/projects`} label="All projects" />
        }
      >
        <ProjectsTable projects={recent} />
      </Panel>

      {/* Profil, messages, notifications */}
      <section className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-4">
          <ProfileCompleteness />
          <Panel
            title="Recent Messages"
            action={<ViewAllLink to={`${PORTAL_BASE}/messages`} />}
          >
            <FeedList
              items={messages.slice(0, 3)}
              icon={<MessageSquareText className="h-4 w-4" />}
            />
          </Panel>
        </div>
        <Panel
          title="Recent Notification"
          action={<ViewAllLink to={`${PORTAL_BASE}/notifications`} />}
        >
          <FeedList
            items={notifications.slice(0, 5)}
            icon={<Bell className="h-4 w-4" />}
          />
        </Panel>
      </section>
    </div>
  );
};

export default Overview;

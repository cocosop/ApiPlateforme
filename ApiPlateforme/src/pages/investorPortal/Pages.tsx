import React, { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Bell,
  FilePlus2,
  MessageSquareText,
  Search,
  Settings,
  UserRound,
  LucideIcon,
} from "lucide-react";
import { FeedList, Panel, ProjectsTable, STATUS_META } from "./components";
import { PORTAL_BASE } from "./InvestorPortalLayout";
import { ProjectStatus, messages, notifications, projects } from "./data";

const PageTitle: React.FC<{
  title: string;
  subtitle: string;
  action?: React.ReactNode;
}> = ({ title, subtitle, action }) => (
  <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <h1 className="text-2xl font-semibold text-[#14112B] dark:text-white">{title}</h1>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
    </div>
    {action}
  </div>
);

const FILTERS: (ProjectStatus | "ALL")[] = [
  "ALL",
  "DRAFT",
  "SUBMITTED",
  "UNDER_REVIEW",
  "APPROVED",
  "REJECTED",
];

export const MyProjectsPage: React.FC = () => {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const raw = params.get("status") as ProjectStatus | null;
  const status = raw && raw in STATUS_META ? raw : "ALL";

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return [...projects]
      .sort((a, b) => b.date.localeCompare(a.date))
      .filter((p) => status === "ALL" || p.status === status)
      .filter(
        (p) =>
          !q ||
          `${p.reference} ${p.name} ${p.location} ${p.sector}`
            .toLowerCase()
            .includes(q),
      );
  }, [status, query]);

  return (
    <>
      <PageTitle
        title="My Projects"
        subtitle="All your investment applications submitted to API Cameroon."
        action={
          <Link
            to="/project-application"
            className="inline-flex items-center gap-2 self-start rounded-xl bg-[#3A0F8F] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#2A0A6B]"
          >
            <FilePlus2 className="h-4 w-4" /> New project
          </Link>
        }
      />
      <Panel>
        <div className="flex flex-col gap-3 p-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-1.5 overflow-x-auto pb-1 lg:pb-0">
            {FILTERS.map((f) => {
              const active = f === status;
              const count =
                f === "ALL"
                  ? projects.length
                  : projects.filter((p) => p.status === f).length;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setParams(f === "ALL" ? {} : { status: f })}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    active
                      ? "bg-[#E7E1FB] dark:bg-[#2A1F5C] text-[#0F0B60] dark:text-white"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800"
                  }`}
                >
                  {f === "ALL" ? "All" : STATUS_META[f].label}
                  <span
                    className={`rounded-md px-1.5 text-[11px] ${active ? "bg-white dark:bg-neutral-900 text-[#0F0B60] dark:text-white" : "bg-gray-100 dark:bg-neutral-800 text-gray-500 dark:text-gray-400"}`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
          <label className="relative block lg:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a project, sector, city…"
              className="w-full rounded-lg border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 py-2 pl-9 pr-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#6D3FF0] focus:ring-2 focus:ring-[#6D3FF0]/15"
            />
          </label>
        </div>
        {filtered.length ? (
          <ProjectsTable projects={filtered} />
        ) : (
          <p className="border-t border-[#ECEAF5] dark:border-neutral-800 px-5 py-12 text-center text-sm text-gray-500 dark:text-gray-400">
            No project matches your filters.
          </p>
        )}
      </Panel>
    </>
  );
};

export const MessagesPage: React.FC = () => (
  <>
    <PageTitle
      title="Messages"
      subtitle="Conversations with your API account manager."
    />
    <Panel>
      <FeedList
        items={messages}
        icon={<MessageSquareText className="h-4 w-4" />}
      />
    </Panel>
  </>
);

export const NotificationsPage: React.FC = () => (
  <>
    <PageTitle
      title="Notifications"
      subtitle="Updates on your applications and your account."
    />
    <Panel>
      <FeedList items={notifications} icon={<Bell className="h-4 w-4" />} />
    </Panel>
  </>
);

const ComingSoon: React.FC<{
  title: string;
  subtitle: string;
  icon: LucideIcon;
}> = ({ title, subtitle, icon: Icon }) => (
  <>
    <PageTitle title={title} subtitle={subtitle} />
    <Panel>
      <div className="flex flex-col items-center px-6 py-16 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEEAFE] dark:bg-neutral-800 text-[#4B1FB8] dark:text-[#C4B5FD]">
          <Icon className="h-6 w-6" />
        </span>
        <p className="mt-4 font-semibold text-[#14112B] dark:text-white">
          This screen is being designed
        </p>
        <p className="mt-1 max-w-sm text-sm text-gray-500 dark:text-gray-400">
          It will be available in a next iteration of the Investor Portal.
        </p>
        <Link
          to={PORTAL_BASE}
          className="mt-5 text-sm font-medium text-[#4B1FB8] dark:text-[#C4B5FD] hover:underline"
        >
          Back to overview
        </Link>
      </div>
    </Panel>
  </>
);

export const ProfilePage: React.FC = () => (
  <ComingSoon
    title="My Profile"
    subtitle="Your investor identity and company information."
    icon={UserRound}
  />
);
export const SettingsPage: React.FC = () => (
  <ComingSoon
    title="Settings"
    subtitle="Security, language and notification preferences."
    icon={Settings}
  />
);

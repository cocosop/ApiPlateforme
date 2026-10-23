import React from "react";
import { Link } from "react-router-dom";
import { Eye, Pencil } from "lucide-react";
import {
  PortalMessage,
  PortalProject,
  ProjectStatus,
  formatAmount,
  formatDate,
  formatDateTime,
} from "./data";

export const STATUS_META: Record<
  ProjectStatus,
  { label: string; pill: string; dot: string }
> = {
  DRAFT: {
    label: "Draft",
    pill: "bg-slate-100 dark:bg-slate-500/15 text-slate-600 dark:text-slate-300 ring-slate-200 dark:ring-slate-500/30",
    dot: "bg-slate-400",
  },
  SUBMITTED: {
    label: "Submitted",
    pill: "bg-[#EEEAFE] dark:bg-neutral-800 text-[#5B3BD6] dark:text-[#C4B5FD] ring-[#DCD4FB] dark:ring-[#8B6CF6]/40",
    dot: "bg-[#5B3BD6]",
  },
  UNDER_REVIEW: {
    label: "Under review",
    pill: "bg-amber-50 dark:bg-amber-500/15 text-amber-700 dark:text-amber-300 ring-amber-200 dark:ring-amber-500/30",
    dot: "bg-amber-500",
  },
  APPROVED: {
    label: "Approved",
    pill: "bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 ring-emerald-200 dark:ring-emerald-500/30",
    dot: "bg-emerald-500",
  },
  REJECTED: {
    label: "Rejected",
    pill: "bg-red-50 dark:bg-red-500/15 text-red-700 dark:text-red-300 ring-red-200 dark:ring-red-500/30",
    dot: "bg-red-500",
  },
};

export const StatusBadge: React.FC<{ status: ProjectStatus }> = ({
  status,
}) => {
  const meta = STATUS_META[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${meta.pill}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
      {meta.label}
    </span>
  );
};

/** Carte blanche standard du portail */
export const Panel: React.FC<{
  title?: string;
  action?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}> = ({ title, action, className = "", children }) => (
  <section
    className={`overflow-hidden rounded-2xl border border-[#ECEAF5] dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-[0_1px_3px_rgba(20,17,43,0.04)] ${className}`}
  >
    {title && (
      <header className="flex items-center justify-between gap-3 px-5 py-4">
        <h2 className="text-lg font-semibold text-[#14112B] dark:text-white">{title}</h2>
        {action}
      </header>
    )}
    {children}
  </section>
);

export const ViewAllLink: React.FC<{ to: string; label?: string }> = ({
  to,
  label = "View all",
}) => (
  <Link
    to={to}
    className="whitespace-nowrap text-sm font-medium text-[#4B1FB8] dark:text-[#C4B5FD] hover:text-[#0F0B60] hover:underline"
  >
    {label}
  </Link>
);

const ProjectAction: React.FC<{ project: PortalProject }> = ({ project }) =>
  project.status === "DRAFT" ? (
    <Link
      to="/project-application"
      className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-[#0F0B60] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#2A0A6B]"
    >
      <Pencil className="h-3.5 w-3.5" /> Continue edit
    </Link>
  ) : (
    <button
      type="button"
      className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-2 text-xs font-semibold text-[#14112B] dark:text-white transition-colors hover:border-[#4B1FB8] hover:text-[#4B1FB8]"
    >
      <Eye className="h-3.5 w-3.5" /> View application
    </button>
  );

/** Tableau des projets : tableau classique sur grand écran, cartes empilées sur mobile */
export const ProjectsTable: React.FC<{ projects: PortalProject[] }> = ({
  projects,
}) => (
  <>
    <div className="hidden overflow-x-auto md:block">
      <table className="w-full min-w-[820px] text-sm">
        <thead>
          <tr className="border-y border-[#ECEAF5] dark:border-neutral-800 bg-[#FAFAFD] dark:bg-neutral-950 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            <th className="px-5 py-3">Reference</th>
            <th className="px-5 py-3">Project</th>
            <th className="px-5 py-3">Sector</th>
            <th className="px-5 py-3">Date</th>
            <th className="px-5 py-3 text-right">Amount</th>
            <th className="px-5 py-3">Status</th>
            <th className="px-5 py-3 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#ECEAF5] dark:divide-neutral-800">
          {projects.map((p) => (
            <tr
              key={p.reference}
              className="transition-colors hover:bg-[#FAF9FE] dark:hover:bg-neutral-800"
            >
              <td className="whitespace-nowrap px-5 py-4 font-semibold text-[#14112B] dark:text-white">
                {p.reference}
              </td>
              <td className="px-5 py-4 text-gray-700 dark:text-gray-300">
                {p.name}, {p.location}
              </td>
              <td className="px-5 py-4 text-gray-600 dark:text-gray-300">{p.sector}</td>
              <td className="whitespace-nowrap px-5 py-4 text-gray-600 dark:text-gray-300">
                {formatDate(p.date)}
              </td>
              <td className="whitespace-nowrap px-5 py-4 text-right font-medium tabular-nums text-[#14112B] dark:text-white">
                {formatAmount(p.amount)}
              </td>
              <td className="px-5 py-4">
                <StatusBadge status={p.status} />
              </td>
              <td className="px-5 py-4 text-right">
                <ProjectAction project={p} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <ul className="divide-y divide-[#ECEAF5] dark:divide-neutral-800 border-t border-[#ECEAF5] dark:border-neutral-800 md:hidden">
      {projects.map((p) => (
        <li key={p.reference} className="space-y-3 px-4 py-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                {p.reference}
              </div>
              <div className="mt-0.5 font-semibold text-[#14112B] dark:text-white">
                {p.name}, {p.location}
              </div>
            </div>
            <StatusBadge status={p.status} />
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 dark:text-gray-400">
            <span>{p.sector}</span>
            <span>{formatDate(p.date)}</span>
            <span className="font-medium tabular-nums text-[#14112B] dark:text-white">
              {formatAmount(p.amount)}
            </span>
          </div>
          <ProjectAction project={p} />
        </li>
      ))}
    </ul>
  </>
);

/** Liste de messages / notifications */
export const FeedList: React.FC<{
  items: PortalMessage[];
  icon: React.ReactNode;
}> = ({ items, icon }) => (
  <ul className="divide-y divide-[#ECEAF5] dark:divide-neutral-800 border-t border-[#ECEAF5] dark:border-neutral-800">
    {items.map((item) => (
      <li
        key={item.id}
        className="flex gap-3 px-5 py-4 transition-colors hover:bg-[#FAF9FE] dark:hover:bg-neutral-800"
      >
        <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E4E0F5] dark:border-neutral-700 bg-[#F6F4FD] dark:bg-neutral-800 text-[#4B1FB8] dark:text-[#C4B5FD]">
          {icon}
          {item.unread && (
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white dark:border-neutral-800 bg-[#6D3FF0]" />
          )}
        </span>
        <div className="min-w-0">
          <p
            className={`text-sm text-[#14112B] dark:text-white ${item.unread ? "font-semibold" : "font-medium"}`}
          >
            {item.title}
          </p>
          <p className="mt-0.5 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
            {item.body}
          </p>
          <p className="mt-1 text-[11px] text-gray-400">
            {formatDateTime(item.date)}
          </p>
        </div>
      </li>
    ))}
  </ul>
);

export const Avatar: React.FC<{ name: string; size?: "sm" | "md" }> = ({
  name,
  size = "md",
}) => {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#6D3FF0] to-[#0F0B60] font-semibold text-white ${
        size === "sm" ? "h-8 w-8 text-xs" : "h-10 w-10 text-sm"
      }`}
    >
      {initials}
    </span>
  );
};

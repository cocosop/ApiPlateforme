// Données fictives du portail investisseur (écrans uniquement, pas encore reliés au backend)

export type ProjectStatus = "DRAFT" | "SUBMITTED" | "UNDER_REVIEW" | "APPROVED" | "REJECTED";

export interface PortalProject {
  reference: string;
  name: string;
  location: string;
  sector: string;
  date: string; // ISO
  amount: number; // FCFA
  status: ProjectStatus;
}

export interface PortalMessage {
  id: number;
  title: string;
  body: string;
  date: string; // ISO
  unread?: boolean;
}

export const currentUser = {
  firstName: "Clarkson",
  lastName: "Bah",
  role: "Investor",
  email: "clarkson.bah@example.com",
};

export const projects: PortalProject[] = [
  { reference: "#API-2026-008", name: "Palm Oil Refinery", location: "Edéa", sector: "Agriculture", date: "2026-10-21", amount: 850_000_000, status: "DRAFT" },
  { reference: "#API-2026-007", name: "Cassava Flour Plant", location: "Bafia", sector: "Agriculture", date: "2026-10-09", amount: 1_200_000_000, status: "DRAFT" },
  { reference: "#API-2026-006", name: "Solar Mini-Grid", location: "Garoua", sector: "Energy", date: "2026-09-12", amount: 320_000_000, status: "UNDER_REVIEW" },
  { reference: "#API-2026-005", name: "Cocoa Drying & Packaging Unit", location: "Ebolowa", sector: "Agriculture", date: "2026-05-23", amount: 240_000_000, status: "SUBMITTED" },
  { reference: "#API-2026-004", name: "Data Center Tier III", location: "Douala", sector: "Digital", date: "2026-04-02", amount: 2_750_000_000, status: "APPROVED" },
  { reference: "#API-2026-003", name: "Cold Storage Warehouse", location: "Kribi", sector: "Logistics", date: "2026-02-17", amount: 410_000_000, status: "REJECTED" },
];

export const messages: PortalMessage[] = [
  { id: 1, title: "Additional documents requested", body: "Please upload the land title for the Palm Oil Refinery site in Edéa.", date: "2026-10-21T08:35:00", unread: true },
  { id: 2, title: "Meeting confirmed", body: "Your meeting with the API investment desk is confirmed for 28 Oct 2026, 10:00.", date: "2026-10-18T14:10:00", unread: true },
  { id: 3, title: "Welcome to the Investor Portal", body: "Your account manager will follow up on each of your applications here.", date: "2026-10-02T09:00:00" },
];

export const notifications: PortalMessage[] = [
  { id: 1, title: "Application under review", body: "Solar Mini-Grid, Garoua is now under review by the API technical committee.", date: "2026-10-21T08:35:00", unread: true },
  { id: 2, title: "Information requested", body: "API requested the land title documentation for Palm Oil Refinery, Edéa.", date: "2026-10-20T16:02:00", unread: true },
  { id: 3, title: "Application received", body: "Cocoa Drying & Packaging Unit, Ebolowa has been received.", date: "2026-10-12T11:20:00" },
  { id: 4, title: "Project approved", body: "Data Center Tier III, Douala has been approved. Your approval letter is available.", date: "2026-10-05T09:45:00" },
  { id: 5, title: "Profile updated", body: "Your investor profile changes have been saved.", date: "2026-10-02T08:35:00" },
];

export const profileCompleteness = { complete: 19, total: 23 };

export const formatAmount = (value: number) => `${value.toLocaleString("en-US")} FCFA`;

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const formatDate = (iso: string) => {
  const d = new Date(iso);
  return `${String(d.getDate()).padStart(2, "0")} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
};

export const formatDateTime = (iso: string) =>
  `${formatDate(iso)}, ${new Date(iso).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}`;

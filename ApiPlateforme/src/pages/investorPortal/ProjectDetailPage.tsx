import React from "react";
import {
  Avatar,
  Button,
  Skeleton,
  Spin,
  Timeline,
  Typography,
  message as antMsg,
} from "antd";
import {
  ArrowLeftOutlined,
  MessageOutlined,
  FileTextOutlined,
  EyeOutlined,
  DownloadOutlined,
  PlusOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  DollarOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import projectService, { BackendProject } from "../../services/projectService";
import messageService, { BackendChat } from "../../services/messageService";
import docService from "../../services/docService";

const { Text, Title } = Typography;

/* ─── constants ─── */
const PRIMARY = "#0F0B60";
const BORDER = "#ECEAF5";
const CARD_RADIUS = 14;

/* ─── helpers ─── */
const fmt = (d?: string) => {
  if (!d) return "—";
  const dt = new Date(d);
  if (isNaN(dt.getTime())) return d;
  return dt.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const fmtMoney = (n?: number, currency = "FCFA") => {
  if (!n) return "—";
  return `${n.toLocaleString("fr-FR")} ${currency}`;
};

const fmtTime = (ts?: string) => {
  if (!ts) return "";
  const d = new Date(ts);
  if (isNaN(d.getTime())) return ts;
  return d.toLocaleString("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

/* ─── StatusBadge ─── */
const STATUS_CFG: Record<
  string,
  { label: string; bg: string; dot: string; text: string }
> = {
  PENDING:  { label: "Soumis",         bg: "#EFF6FF", dot: "#3B82F6", text: "#1D4ED8" },
  STUDYING: { label: "En examen",      bg: "#FFFBEB", dot: "#F59E0B", text: "#92400E" },
  ACCEPTED: { label: "Approuvé",       bg: "#F0FDF4", dot: "#22C55E", text: "#166534" },
  REJECTED: { label: "Rejeté",         bg: "#FEF2F2", dot: "#EF4444", text: "#991B1B" },
};

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const cfg = STATUS_CFG[status] ?? {
    label: status,
    bg: "#F3F4F6",
    dot: "#6B7280",
    text: "#374151",
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        borderRadius: 999,
        background: cfg.bg,
        padding: "3px 12px",
        fontSize: 12,
        fontWeight: 700,
        color: cfg.text,
        border: `1px solid ${cfg.dot}30`,
      }}
    >
      <span
        style={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: cfg.dot,
          display: "inline-block",
        }}
      />
      {cfg.label}
    </span>
  );
};

/* ─── SectionCard ─── */
const SectionCard: React.FC<{
  title: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ title, icon, action, children, style }) => (
  <div
    style={{
      background: "#fff",
      border: `1px solid ${BORDER}`,
      borderRadius: CARD_RADIUS,
      padding: "20px 22px",
      boxShadow: "0 1px 4px rgba(15,11,96,0.05)",
      ...style,
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 18,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
        {icon && (
          <span style={{ color: PRIMARY, display: "flex", fontSize: 16 }}>
            {icon}
          </span>
        )}
        <span style={{ fontSize: 14, fontWeight: 800, color: "#14112B" }}>
          {title}
        </span>
      </div>
      {action}
    </div>
    {children}
  </div>
);

/* ─── LabelValue ─── */
const LV: React.FC<{
  label: string;
  value?: React.ReactNode;
  col?: "1/-1" | "auto";
}> = ({ label, value, col }) => (
  <div style={{ gridColumn: col === "1/-1" ? "1 / -1" : undefined }}>
    <div
      style={{
        fontSize: 10,
        fontWeight: 700,
        color: "#9CA3AF",
        textTransform: "uppercase",
        letterSpacing: "0.07em",
        marginBottom: 3,
      }}
    >
      {label}
    </div>
    <div style={{ fontSize: 13, fontWeight: 600, color: "#14112B", lineHeight: 1.5 }}>
      {value ?? "—"}
    </div>
  </div>
);

/* ══════════════════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════════════════ */
export const ProjectDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [loading, setLoading] = React.useState(true);
  const [project, setProject] = React.useState<BackendProject | null>(null);
  const [chats, setChats] = React.useState<BackendChat[]>([]);
  const [previewDoc, setPreviewDoc] = React.useState<{
    title: string;
    url: string;
  } | null>(null);

  /* ── fetch project ── */
  React.useEffect(() => {
    if (!id) return;
    const decoded = decodeURIComponent(id).trim();
    setLoading(true);
    projectService
      .getProject(decoded)
      .then((r) => r.data && setProject(r.data))
      .catch(() => antMsg.error("Impossible de charger le projet."))
      .finally(() => setLoading(false));

    // also fetch chats for the messages preview
    messageService
      .fetchAllChat()
      .then((r) => setChats(Array.isArray(r.data) ? r.data : []))
      .catch(() => {});
  }, [id]);

  /* ── quick upload ── */
  const handleUpload = () => {
    if (!project?.id) return;
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      if (file.size > 15 * 1024 * 1024) {
        antMsg.error("Le fichier dépasse 15 Mo.");
        return;
      }
      const reader = new FileReader();
      reader.onload = async () => {
        const b64 = reader.result as string;
        try {
          antMsg.loading("Téléchargement en cours…", 1);
          await docService.addDoc({
            title: file.name.replace(/\.[^/.]+$/, ""),
            description: file.name,
            url_file: b64,
            projectId: project.id,
          });
          antMsg.success(`Document "${file.name}" ajouté !`);
          if (id) {
            const r = await projectService.getProject(
              decodeURIComponent(id).trim()
            );
            if (r.data) setProject(r.data);
          }
        } catch {
          antMsg.error("Échec du téléchargement.");
        }
      };
      reader.readAsDataURL(file);
    };
    input.click();
  };

  /* ── download ── */
  const handleDownload = (title: string, urlFile?: string) => {
    if (!urlFile) {
      antMsg.warning("Aucun fichier disponible.");
      return;
    }
    if (urlFile.startsWith("data:") || urlFile.startsWith("http")) {
      const a = document.createElement("a");
      a.href = urlFile;
      a.download = title;
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      return;
    }
    antMsg.warning("Fichier non téléchargeable.");
  };

  /* ── loading ── */
  if (loading) {
    return (
      <div style={{ padding: 32 }}>
        <Skeleton active paragraph={{ rows: 6 }} />
      </div>
    );
  }

  if (!project) {
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        <p style={{ color: "#6B7280", marginBottom: 16 }}>
          Projet introuvable.
        </p>
        <Button onClick={() => navigate("/investor-portal/projects")}>
          Retour aux projets
        </Button>
      </div>
    );
  }

  /* ── derived values ── */
  const year = project.soumissionDate
    ? new Date(project.soumissionDate).getFullYear()
    : project.createdAt
    ? new Date(project.createdAt).getFullYear()
    : new Date().getFullYear();
  const ref = `#${String(project.id ?? "001").padStart(3, "0")}-${year}`;

  const hasStages = (project.stages?.length ?? 0) > 0;
  const hasDocs = (project.documents?.length ?? 0) > 0;

  /* ── timeline items ── */
  const timelineItems = hasStages
    ? project.stages!.map((st) => ({
        key: String(st.id),
        dot: (
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background:
                st.status === "COMPLETED"
                  ? "#22C55E"
                  : st.status === "ACTIVE"
                  ? PRIMARY
                  : "#D1D5DB",
              marginTop: 3,
            }}
          />
        ),
        children: (
          <div style={{ marginBottom: 4 }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: "#14112B" }}>
              {st.title}
            </div>
            {st.description && (
              <div style={{ fontSize: 12, color: "#6B7280", marginTop: 1 }}>
                {st.description}
              </div>
            )}
            {(st.date || st.endDate) && (
              <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 2 }}>
                {fmt(st.date)}
                {st.endDate && ` → ${fmt(st.endDate)}`}
              </div>
            )}
          </div>
        ),
      }))
    : [
        {
          key: "info",
          dot: (
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#3B82F6",
                marginTop: 3,
              }}
            />
          ),
          children: (
            <div style={{ marginBottom: 4 }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: "#14112B" }}>
                Information provided by investor
              </div>
              <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 2 }}>
                {fmt(project.createdAt)}
              </div>
            </div>
          ),
        },
        {
          key: "submitted",
          dot: (
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: PRIMARY,
                marginTop: 3,
              }}
            />
          ),
          children: (
            <div style={{ marginBottom: 4 }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: "#14112B" }}>
                Application submitted
              </div>
              <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 2 }}>
                {fmt(project.soumissionDate ?? project.createdAt)}
              </div>
            </div>
          ),
        },
      ];

  /* ── financing numbers ── */
  const totalInv = project.budget ?? 0;
  const personalFunds = project.montant ?? 0;
  const requested = totalInv > personalFunds ? totalInv - personalFunds : 0;

  /* ── messages related to this project ── */
  const projectChats = chats.filter(
    (c) =>
      c.project?.id === project.id ||
      c.project?.titre?.toLowerCase() === project.titre?.toLowerCase()
  );
  const previewMsgs = projectChats.flatMap((c) => c.messages ?? []).slice(-3);

  /* ══════════════════ RENDER ══════════════════ */
  return (
    <div
      style={{
        fontFamily: "'Poppins', 'Inter', sans-serif",
        paddingBottom: 60,
        maxWidth: 1300,
        margin: "0 auto",
      }}
    >
      {/* ════════════════ HEADER ════════════════ */}
      <div style={{ marginBottom: 24 }}>
        {/* Back button */}
        <button
          type="button"
          onClick={() => navigate("/investor-portal/projects")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            fontSize: 13,
            fontWeight: 700,
            color: PRIMARY,
            padding: 0,
            marginBottom: 14,
          }}
        >
          <ArrowLeftOutlined style={{ fontSize: 14 }} />
          Retour aux projets
        </button>

        {/* breadcrumb */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            color: "#9CA3AF",
            marginBottom: 10,
          }}
        >
          <span
            style={{ cursor: "pointer", color: "#9CA3AF" }}
            onClick={() => navigate("/investor-portal")}
          >
            API CAMEROUN
          </span>
          <span>›</span>
          <span
            style={{ cursor: "pointer", color: "#9CA3AF" }}
            onClick={() => navigate("/investor-portal/projects")}
          >
            Investor Portal
          </span>
        </div>

        {/* ref */}
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#9CA3AF",
            marginBottom: 4,
          }}
        >
          {ref}
        </div>

        {/* title row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 12,
                marginBottom: 6,
              }}
            >
              <h1
                style={{
                  margin: 0,
                  fontSize: 28,
                  fontWeight: 800,
                  color: "#14112B",
                  lineHeight: 1.2,
                }}
              >
                {project.titre}
              </h1>
              <StatusBadge status={project.status} />
            </div>

            {project.description && (
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  color: "#6B7280",
                  maxWidth: 640,
                  lineHeight: 1.6,
                }}
              >
                {project.description}
              </p>
            )}
          </div>

          <Button
            type="primary"
            icon={<MessageOutlined />}
            onClick={() => navigate("/investor-portal/messages")}
            style={{
              height: 42,
              borderRadius: 10,
              fontWeight: 700,
              background: PRIMARY,
              border: "none",
              fontSize: 13,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            Message API Cameroun
          </Button>
        </div>
      </div>

      {/* ════════════════ ROW 1 — Summary + Timeline ════════════════ */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          marginBottom: 20,
        }}
        className="detail-row"
      >
        {/* Project Summary */}
        <SectionCard title="Project summary">
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 24px" }}
          >
            <LV
              label="Project type"
              value={
                project.investor
                  ? `${project.investor.firstname ?? ""} ${project.investor.lastname ?? ""}`.trim() ||
                    "Individual Investor"
                  : "Individual Investor"
              }
            />
            <LV label="Sector" value={project.secteur} />
            <LV label="Project name" value={project.titre} />
            <LV
              label="Sub-industry"
              value={project.secteur ? `${project.secteur} processing` : "—"}
            />
            <LV label="Start activity" value="Agro-processing" />
            <LV
              label="Project status"
              value={
                STATUS_CFG[project.status]?.label ?? project.status
              }
            />
            <LV
              label="Project Name"
              value={project.titre}
            />
            <LV
              label="Description"
              value={project.description}
              col="1/-1"
            />
          </div>
        </SectionCard>

        {/* Application Timeline */}
        <SectionCard title="Application timeline" icon={<ClockCircleOutlined />}>
          <Timeline items={timelineItems} style={{ marginTop: 4 }} />
        </SectionCard>
      </div>

      {/* ════════════════ ROW 2 — Location + Financing + Messages ════════════════ */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 320px",
          gap: 20,
          marginBottom: 20,
          alignItems: "start",
        }}
        className="detail-row-3"
      >
        {/* Location */}
        <SectionCard title="Location" icon={<EnvironmentOutlined />}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 24px" }}
          >
            <LV label="Region" value={project.region} />
            <LV label="City" value={project.ville} />
            <LV
              label="Nearest urban area"
              value={
                project.quartier
                  ? `Proche de ${project.quartier}, ${project.ville}`
                  : project.ville
              }
            />
            <LV
              label="Address"
              value={
                [project.quartier, project.ville, project.region]
                  .filter(Boolean)
                  .join(", ") || "—"
              }
            />
            {project.latitude && project.longitude && (
              <>
                <LV label="GPS Latitude" value={project.latitude} />
                <LV label="GPS Longitude" value={project.longitude} />
              </>
            )}
            {(!project.latitude || !project.longitude) && (
              <LV
                label="GPS Coordinates"
                value={
                  project.latitude && project.longitude
                    ? `${project.latitude}, ${project.longitude}`
                    : "—"
                }
              />
            )}
          </div>
        </SectionCard>

        {/* Financing */}
        <SectionCard title="Financing" icon={<DollarOutlined />}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {/* Total */}
            <div
              style={{
                background: "#F8F7FE",
                borderRadius: 10,
                padding: "14px 16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 12, color: "#6B7280", fontWeight: 600 }}>
                Total investment
              </span>
              <span style={{ fontSize: 16, fontWeight: 800, color: PRIMARY }}>
                {fmtMoney(totalInv)}
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 20px" }}>
              <LV label="Personal Funds" value={fmtMoney(personalFunds)} />
              <LV
                label="Requested Funding"
                value={requested > 0 ? fmtMoney(requested) : "—"}
              />
              {project.ROI != null && (
                <LV label="ROI" value={`${project.ROI}%`} />
              )}
              <LV
                label="Start Date"
                value={fmt(project.dateDebut)}
              />
              <LV
                label="End Date"
                value={fmt(project.dateFin)}
              />
            </div>

            {/* progress bar */}
            {totalInv > 0 && personalFunds > 0 && (
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 11,
                    color: "#9CA3AF",
                    marginBottom: 6,
                  }}
                >
                  <span>Fonds propres</span>
                  <span>
                    {Math.round((personalFunds / totalInv) * 100)}%
                  </span>
                </div>
                <div
                  style={{
                    height: 6,
                    background: "#F3F4F6",
                    borderRadius: 10,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${Math.min(
                        100,
                        Math.round((personalFunds / totalInv) * 100)
                      )}%`,
                      background: `linear-gradient(90deg, ${PRIMARY}, #6D3FF0)`,
                      borderRadius: 10,
                    }}
                  />
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#9CA3AF",
                    marginTop: 4,
                    fontStyle: "italic",
                  }}
                >
                  Funding confirmed as per business data
                </div>
              </div>
            )}
          </div>
        </SectionCard>

        {/* Messages preview */}
        <SectionCard
          title="Messages"
          icon={<MessageOutlined />}
          action={
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: PRIMARY,
                cursor: "pointer",
              }}
              onClick={() => navigate("/investor-portal/messages")}
            >
              View All
            </span>
          }
        >
          {previewMsgs.length === 0 ? (
            <div
              style={{
                fontSize: 12,
                color: "#9CA3AF",
                textAlign: "center",
                padding: "16px 0",
              }}
            >
              Aucun message pour ce projet.
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {previewMsgs.map((m) => {
                const fname = m.sender?.firstname ?? "";
                const lname = m.sender?.lastname ?? "";
                const name =
                  `${fname} ${lname}`.trim() ||
                  m.sender?.email ||
                  "API Cameroun";
                const initials = `${fname[0] ?? ""}${lname[0] ?? ""}`.toUpperCase() || "A";
                return (
                  <div
                    key={m.id}
                    style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
                  >
                    <Avatar
                      size={34}
                      style={{ background: PRIMARY, fontSize: 13, fontWeight: 700, flexShrink: 0 }}
                    >
                      {initials}
                    </Avatar>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{ fontSize: 12, fontWeight: 700, color: "#14112B" }}
                      >
                        {m.content.length > 60
                          ? m.content.slice(0, 60) + "…"
                          : m.content}
                      </div>
                      <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 2 }}>
                        {name} · {fmtTime(m.timestamp)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <Button
            block
            onClick={() => navigate("/investor-portal/messages")}
            style={{
              marginTop: 16,
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 12,
              borderColor: BORDER,
              color: PRIMARY,
            }}
            icon={<MessageOutlined />}
          >
            Ouvrir la messagerie
          </Button>
        </SectionCard>
      </div>

      {/* ════════════════ ROW 3 — Impact ════════════════ */}
      <SectionCard
        title="Impact"
        icon={<TeamOutlined />}
        style={{ marginBottom: 20 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "16px 32px",
          }}
        >
          {/* Duration */}
          <LV
            label="Duration"
            value={
              project.dateDebut && project.dateFin
                ? (() => {
                    const start = new Date(project.dateDebut);
                    const end = new Date(project.dateFin);
                    const diff = Math.round(
                      (end.getTime() - start.getTime()) /
                        (1000 * 60 * 60 * 24 * 30)
                    );
                    return diff > 0 ? `${diff} months` : "—";
                  })()
                : "—"
            }
          />

          {/* Sector */}
          <LV label="Sector level" value={project.secteur} />

          {/* Location */}
          <LV
            label="Expected Site"
            value={
              [project.ville, project.region].filter(Boolean).join(", ") || "—"
            }
          />

          {/* Coordinates */}
          <LV
            label="GPS coordinates"
            value={
              project.latitude && project.longitude
                ? `${project.latitude}, ${project.longitude}`
                : "—"
            }
          />

          {/* Target market */}
          <LV
            label="Target market"
            value={
              project.secteur
                ? `Cameroun, Ghana, Chad, Équateur`
                : "—"
            }
          />

          {/* Weekly target */}
          <LV
            label="Weekly target"
            value={
              project.budget
                ? `${Math.round(project.budget / 52).toLocaleString("fr-FR")} FCFA/semaine`
                : "—"
            }
          />

          {/* Local Impact */}
          <LV
            label="Local Impact"
            value={
              project.description
                ? project.description.slice(0, 90) +
                  (project.description.length > 90 ? "…" : "")
                : "—"
            }
            col="1/-1"
          />

          {/* Outgrower programme */}
          <LV
            label="Outgrower programme"
            value={
              project.description
                ? "Outgrower programme with training to 1,200 farmers, 60% women"
                : "—"
            }
            col="1/-1"
          />
        </div>
      </SectionCard>

      {/* ════════════════ DOCUMENTS ════════════════ */}
      <SectionCard
        title="Documents"
        icon={<FileTextOutlined />}
        action={
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="small"
            onClick={handleUpload}
            style={{
              background: PRIMARY,
              borderColor: PRIMARY,
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 12,
            }}
          >
            Ajouter un document
          </Button>
        }
      >
        {hasDocs ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {project.documents!.map((doc, i) => {
              const filename =
                doc.description && doc.description.includes(".")
                  ? doc.description
                  : `${doc.title ?? "document"}.pdf`;
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: "14px 18px",
                    border: `1px solid ${BORDER}`,
                    borderRadius: 10,
                    background: "#FAFAFA",
                    transition: "box-shadow 0.15s",
                  }}
                >
                  {/* left */}
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 10,
                        background: "#F0EDFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#6D3FF0",
                        fontSize: 20,
                        flexShrink: 0,
                      }}
                    >
                      <FileTextOutlined />
                    </div>
                    <div>
                      <div
                        style={{ fontWeight: 700, fontSize: 13, color: "#14112B" }}
                      >
                        {doc.title ?? "Document"}
                      </div>
                      <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 2 }}>
                        {filename}
                        {doc.description && doc.description !== filename
                          ? ` · ${doc.description}`
                          : ""}
                      </div>
                    </div>
                  </div>

                  {/* actions */}
                  <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                    {doc.url_file && (
                      <Button
                        icon={<EyeOutlined />}
                        size="small"
                        onClick={() =>
                          setPreviewDoc({
                            title: doc.title ?? "Document",
                            url: doc.url_file,
                          })
                        }
                        style={{
                          borderRadius: 8,
                          fontWeight: 600,
                          fontSize: 12,
                          color: PRIMARY,
                          borderColor: PRIMARY + "50",
                        }}
                      >
                        Aperçu
                      </Button>
                    )}
                    <Button
                      icon={<DownloadOutlined />}
                      size="small"
                      onClick={() => handleDownload(filename, doc.url_file)}
                      style={{
                        borderRadius: 8,
                        fontWeight: 600,
                        fontSize: 12,
                        color: PRIMARY,
                        borderColor: PRIMARY + "50",
                      }}
                    >
                      Télécharger
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "32px 0",
              color: "#9CA3AF",
              fontSize: 13,
            }}
          >
            <FileTextOutlined
              style={{
                fontSize: 36,
                display: "block",
                margin: "0 auto 12px",
                opacity: 0.3,
              }}
            />
            <p>Aucun document pour ce projet.</p>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleUpload}
              style={{
                background: PRIMARY,
                borderColor: PRIMARY,
                borderRadius: 8,
                fontWeight: 600,
                marginTop: 8,
              }}
            >
              Ajouter le premier document
            </Button>
          </div>
        )}
      </SectionCard>

      {/* ════════════════ DOCUMENT PREVIEW MODAL ════════════════ */}
      {previewDoc && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
          onClick={() => setPreviewDoc(null)}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              width: "100%",
              maxWidth: 820,
              maxHeight: "88vh",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* modal header */}
            <div
              style={{
                padding: "16px 20px",
                borderBottom: `1px solid ${BORDER}`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: 700, fontSize: 14, color: "#14112B" }}>
                {previewDoc.title}
              </span>
              <div style={{ display: "flex", gap: 8 }}>
                <Button
                  icon={<DownloadOutlined />}
                  size="small"
                  onClick={() =>
                    handleDownload(previewDoc.title, previewDoc.url)
                  }
                  style={{ borderRadius: 8 }}
                >
                  Télécharger
                </Button>
                <Button
                  size="small"
                  onClick={() => setPreviewDoc(null)}
                  style={{ borderRadius: 8 }}
                >
                  Fermer
                </Button>
              </div>
            </div>
            {/* preview body */}
            <div style={{ flex: 1, overflow: "auto", background: "#F8F9FC" }}>
              {previewDoc.url.startsWith("data:image") ? (
                <img
                  src={previewDoc.url}
                  alt={previewDoc.title}
                  style={{ maxWidth: "100%", display: "block", margin: "auto" }}
                />
              ) : previewDoc.url.startsWith("data:application/pdf") ||
                previewDoc.url.startsWith("data:") ? (
                <iframe
                  src={previewDoc.url}
                  title={previewDoc.title}
                  style={{ width: "100%", height: "70vh", border: "none" }}
                />
              ) : (
                <div
                  style={{
                    padding: 32,
                    textAlign: "center",
                    color: "#6B7280",
                    fontSize: 13,
                  }}
                >
                  Aperçu non disponible pour ce type de fichier.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ════════════════ RESPONSIVE CSS ════════════════ */}
      <style>{`
        @media (max-width: 1024px) {
          .detail-row-3 {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .detail-row,
          .detail-row-3 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetailPage;

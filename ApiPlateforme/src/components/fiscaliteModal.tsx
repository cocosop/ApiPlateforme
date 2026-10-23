import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { CalculatorOutlined, CheckCircleFilled, DownOutlined, AuditOutlined, PercentageOutlined, BankOutlined, GlobalOutlined } from "@ant-design/icons";
import ModalShell, { ModalCard, StatTile } from "./showcase/ModalShell";
import O3 from "../assets/img/o3.png";

interface FiscaliteModalProps {
  onClose: () => void;
}

/** Panneau dépliable (remplace le Collapse antd). */
const Section: React.FC<{ title: string; icon: React.ReactNode; open: boolean; onToggle: () => void; children: React.ReactNode }> = ({
  title, icon, open, onToggle, children,
}) => (
  <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_2px_12px_rgba(16,24,40,0.04)]">
    <button type="button" onClick={onToggle} className="flex w-full items-center justify-between px-5 py-4 text-left" aria-expanded={open}>
      <span className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F1EEFE] text-[#4F2BDF]">{icon}</span>
        <span className="font-bold text-[#1A0C4F]">{title}</span>
      </span>
      <DownOutlined className={`text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
    </button>
    {open && <div className="border-t border-gray-100 px-5 py-5">{children}</div>}
  </div>
);

const FiscaliteModal: React.FC<FiscaliteModalProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const k = (key: string) => t(`pages_secteurs.facteurs_production.fiscalite.${key}`);
  const [open, setOpen] = useState<string>("regimes");
  const toggle = (id: string) => setOpen(open === id ? "" : id);

  const regimes = [
    { id: "regime_liberatoire", accent: "border-[#16A34A]" },
    { id: "regime_simplifie", accent: "border-[#4F2BDF]" },
    { id: "regime_reel", accent: "border-[#1A0C4F]" },
  ];

  const customsData = [
    { id: "d1", rate: "5%" },
    { id: "d2", rate: "10%" },
    { id: "d3", rate: "20%" },
    { id: "d4", rate: "30%" },
  ];

  return (
    <ModalShell title={k("title")} subtitle={k("subtitle")} image={O3} icon={<CalculatorOutlined />} accent="purple" onClose={onClose}>
      <h3 className="mb-3 text-lg font-bold text-[#1A0C4F]">{k("sys_fiscal")}</h3>
      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <StatTile value="33%" label={k("impot_societe")} accent="purple" />
        <StatTile value="19.25%" label={k("tva_standard")} accent="green" />
        <StatTile value="1%" label={k("patente")} accent="purple" />
      </div>

      <div className="space-y-3">
        <Section title={k("regimes")} icon={<AuditOutlined />} open={open === "regimes"} onToggle={() => toggle("regimes")}>
          <div className="grid gap-3 md:grid-cols-3">
            {regimes.map((r) => (
              <div key={r.id} className={`rounded-xl border-l-4 ${r.accent} bg-[#F7F8FB] p-4`}>
                <div className="mb-2 font-bold text-[#1A0C4F]">{k(`${r.id}.title`)}</div>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  {["l1", "l2", "l3"].map((l) => (
                    <li key={l} className="flex items-start gap-2">
                      <CheckCircleFilled className="mt-0.5 text-xs text-[#16A34A]" /> {k(`${r.id}.${l}`)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title={k("tva_droits")} icon={<PercentageOutlined />} open={open === "tva"} onToggle={() => toggle("tva")}>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <div className="mb-2 font-bold text-[#1A0C4F]">{k("exo_tva.title")}</div>
              <ul className="space-y-2 text-sm text-gray-600">
                {["l1", "l2", "l3"].map((l) => (
                  <li key={l} className="flex items-center gap-2">
                    <CheckCircleFilled className="text-[#16A34A]" /> {k(`exo_tva.${l}`)}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-2 font-bold text-[#1A0C4F]">{k("droits_accise.title")}</div>
              <div className="divide-y divide-gray-100 rounded-xl border border-gray-100">
                {["l1", "l2"].map((l) => (
                  <div key={l} className="flex items-center justify-between px-4 py-2.5 text-sm">
                    <span className="text-gray-600">{k(`droits_accise.${l}_k`)}</span>
                    <span className="rounded-full bg-[#F1EEFE] px-3 py-0.5 text-xs font-bold text-[#4F2BDF]">{k(`droits_accise.${l}_v`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section title={k("fisc_locale")} icon={<BankOutlined />} open={open === "locale"} onToggle={() => toggle("locale")}>
          <div className="grid gap-3 md:grid-cols-2">
            {["patente_licences", "taxe_fonciere"].map((id) => (
              <div key={id} className="rounded-xl bg-[#F7F8FB] p-4">
                <div className="mb-2 font-bold text-[#1A0C4F]">{k(`${id}.title`)}</div>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  {["l1", "l2"].map((l) => (
                    <li key={l} className="flex items-start gap-2">
                      <CheckCircleFilled className="mt-0.5 text-xs text-[#16A34A]" /> {k(`${id}.${l}`)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Tarifs douaniers */}
      <ModalCard title={k("tarifs_douaniers")} icon={<GlobalOutlined />} accent="green" className="mt-6">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="bg-[#F7F8FB] text-xs uppercase tracking-wide text-gray-500">
                <th className="rounded-l-lg px-4 py-3 font-semibold">{k("table.col1")}</th>
                <th className="px-4 py-3 font-semibold">{k("table.col2")}</th>
                <th className="px-4 py-3 font-semibold">{k("table.col3")}</th>
                <th className="rounded-r-lg px-4 py-3 font-semibold">{k("table.col4")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {customsData.map((row) => (
                <tr key={row.id}>
                  <td className="px-4 py-3 font-semibold text-[#1A0C4F]">{k(`data.${row.id}.cat`)}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-[#EAFBF1] px-3 py-0.5 text-xs font-bold text-[#16A34A]">{row.rate}</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{k(`data.${row.id}.base`)}</td>
                  <td className="px-4 py-3 text-gray-500">{k(`data.${row.id}.ex`)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ModalCard>
    </ModalShell>
  );
};

export default FiscaliteModal;

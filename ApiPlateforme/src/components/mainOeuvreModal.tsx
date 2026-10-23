import React from "react";
import { useTranslation } from "react-i18next";
import { TeamOutlined, LineChartOutlined, FileTextOutlined, SafetyCertificateOutlined, CheckCircleFilled, InfoCircleOutlined } from "@ant-design/icons";
import ModalShell, { ModalCard, StatTile } from "./showcase/ModalShell";
import O1 from "../assets/img/o1.png";

interface MainOeuvreModalProps {
  onClose: () => void;
}

const ProgressRow = ({ label, value, color }: { label: string; value: number; color: string }) => (
  <div>
    <div className="mb-1.5 flex justify-between text-sm">
      <span className="text-gray-600">{label}</span>
      <span className="font-bold text-[#1A0C4F]">{value}%</span>
    </div>
    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
      <div className="h-full rounded-full" style={{ width: `${value}%`, background: color }} />
    </div>
  </div>
);

const MainOeuvreModal: React.FC<MainOeuvreModalProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const k = (key: string) => t(`pages_secteurs.facteurs_production.main_oeuvre.${key}`);

  const salaries = [
    { title: k("t2_l3"), salary: "267k – 457k FCFA" },
    { title: k("t2_l4"), salary: "129k – 325k FCFA" },
    { title: k("t2_l5"), salary: "40k – 134k FCFA" },
  ];

  const contracts = [
    { title: k("t4_l1"), text: k("t4_l2"), color: "border-[#4F2BDF]" },
    { title: k("t4_l3"), text: k("t4_l4"), color: "border-[#16A34A]" },
    { title: k("t4_l5"), text: k("t4_l6"), color: "border-[#4F2BDF]" },
  ];

  return (
    <ModalShell title={k("title")} subtitle={k("subtitle")} image={O1} icon={<TeamOutlined />} accent="purple" onClose={onClose}>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 mb-6">
        <StatTile value={k("stat1_value")} label={k("stat1_label")} accent="purple" />
        <StatTile value={k("stat2_value")} label={k("stat2_label")} accent="green" />
        <StatTile value={k("stat3_value")} label={k("stat3_label")} accent="purple" />
        <StatTile value={k("stat4_value")} label={k("stat4_label")} accent="green" />
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {/* Qualification */}
        <ModalCard title={k("t1")} icon={<CheckCircleFilled />} accent="green">
          <div className="mb-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-[#EAFBF1] p-3 text-center">
              <div className="text-2xl font-extrabold text-[#16A34A]">71.2%</div>
              <div className="text-xs text-gray-500">{k("t1_l1")}</div>
            </div>
            <div className="rounded-xl bg-[#EAFBF1] p-3 text-center">
              <div className="text-2xl font-extrabold text-[#16A34A]">78.8%</div>
              <div className="text-xs text-gray-500">{k("t1_l2")}</div>
            </div>
          </div>
          <p className="mb-3 text-sm font-semibold text-[#1A0C4F]">{k("t1_l3")}</p>
          <div className="space-y-4">
            <ProgressRow label={k("t1_l4")} value={35.7} color="#16A34A" />
            <ProgressRow label={k("t1_l5")} value={26.0} color="#4F2BDF" />
            <ProgressRow label={k("t1_l6")} value={4.6} color="#22C55E" />
          </div>
        </ModalCard>

        {/* Salaires */}
        <ModalCard title={k("t2")} icon={<LineChartOutlined />} accent="purple">
          <div className="mb-4 rounded-2xl bg-gradient-to-r from-[#4F2BDF] to-[#6C4CF0] p-5 text-center text-white">
            <div className="text-xs font-medium uppercase tracking-wider text-white/80">{k("t2_l1")}</div>
            <div className="my-1 text-3xl font-extrabold">36 270 <span className="text-base font-semibold">FCFA</span></div>
            <div className="text-sm text-white/80">{k("t2_l2")}</div>
          </div>
          <div className="divide-y divide-gray-100 rounded-xl border border-gray-100">
            {salaries.map((s) => (
              <div key={s.title} className="flex items-center justify-between px-4 py-2.5 text-sm">
                <span className="font-medium text-gray-700">{s.title}</span>
                <span className="rounded-full bg-[#F1EEFE] px-3 py-0.5 text-xs font-bold text-[#4F2BDF]">{s.salary}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-gray-600">
            {["t2_l6", "t2_l7", "t2_l8", "t2_l9"].map((key) => (
              <div key={key} className="flex items-center gap-2">
                <CheckCircleFilled className="text-[#16A34A]" />
                {k(key)}
              </div>
            ))}
          </div>
        </ModalCard>

        {/* Cotisations sociales */}
        <ModalCard title={k("t3")} icon={<SafetyCertificateOutlined />} accent="green">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-gray-100 p-4 text-center">
              <div className="text-2xl font-extrabold text-[#16A34A]">7%</div>
              <div className="text-sm font-semibold text-gray-700">{k("t3_l1")}</div>
              <div className="mt-1 text-xs text-gray-500">{k("t3_l2")}</div>
            </div>
            <div className="rounded-xl border border-gray-100 p-4 text-center">
              <div className="text-2xl font-extrabold text-[#4F2BDF]">8.4%</div>
              <div className="text-sm font-semibold text-gray-700">{k("t3_l3")}</div>
              <div className="mt-1 text-xs text-gray-500">{k("t3_l4")}</div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 rounded-xl bg-[#F1EEFE] px-4 py-2.5 text-sm text-[#4F2BDF]">
            <InfoCircleOutlined /> {k("t3_l5")}
          </div>
        </ModalCard>

        {/* Contrats */}
        <ModalCard title={k("t4")} icon={<FileTextOutlined />} accent="purple">
          <div className="space-y-3">
            {contracts.map((c) => (
              <div key={c.title} className={`rounded-xl border-l-4 ${c.color} bg-[#F7F8FB] px-4 py-3`}>
                <div className="font-bold text-[#1A0C4F]">{c.title}</div>
                <div className="text-sm text-gray-600">{c.text}</div>
              </div>
            ))}
          </div>
        </ModalCard>
      </div>
    </ModalShell>
  );
};

export default MainOeuvreModal;

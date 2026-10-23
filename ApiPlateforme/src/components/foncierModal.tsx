import React from "react";
import { useTranslation } from "react-i18next";
import { EnvironmentOutlined, HomeOutlined, BankOutlined, FileTextOutlined, AccountBookOutlined, SafetyCertificateOutlined, CheckCircleFilled, ExportOutlined } from "@ant-design/icons";
import ModalShell, { ModalCard } from "./showcase/ModalShell";
import O2 from "../assets/img/o2.png";

interface FoncierModalProps {
  onClose: () => void;
}

const FoncierModal: React.FC<FoncierModalProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const k = (key: string) => t(`pages_secteurs.facteurs_production.foncier.${key}`);

  const reformsList = [k("t4_l1"), k("t4_l2"), k("t4_l3"), k("t4_l4")];

  const legalLaws = [
    { text: "Ordonnance 74-1", subtitle: k("l1_s"), year: "1974", link: "https://garoua.eregulations.org/media/ordonnance_fixant_regime_foncier_cameroun.pdf" },
    { text: "Ordonnance 74-2", subtitle: k("l2_s"), year: "1974", link: "https://www.cvuc-uccc.com/minat/textes/35.pdf" },
    { text: "Ordonnance 74-3", subtitle: k("l3_s"), year: "1974", link: "https://garoua.eregulations.org/media/ordonnance_fixant_regime_foncier_cameroun.pdf" },
    { text: "Loi 80-21", subtitle: k("l4_s"), year: "1980", link: "https://legecam.cm/wp-content/uploads/2024/05/bb-rfi-05-loi-n8021-du-14-juillet-1980-modifiant-et-completant-certaines-dispositions-de-lordonnance.pdf" },
  ];

  const prices = [
    { title: k("t1"), icon: <HomeOutlined />, value: "300", unit: "FCFA", accent: "green" as const,
      rows: [{ l: k("t1_l1"), v: "680 FCFA/m²" }, { l: k("t1_l2"), v: "480 FCFA/m²" }] },
    { title: k("t2"), icon: <BankOutlined />, value: "1k – 3k", unit: "FCFA", accent: "purple" as const,
      rows: [{ l: k("t2_l1"), v: "720 FCFA/m²" }, { l: k("t2_l2"), v: "1 000 FCFA/m²" }] },
  ];

  return (
    <ModalShell title={k("title")} subtitle={k("subtitle")} image={O2} icon={<EnvironmentOutlined />} accent="green" onClose={onClose}>
      {/* Prix des terrains */}
      <div className="mb-5 grid gap-5 md:grid-cols-2">
        {prices.map((p) => (
          <ModalCard key={p.title} title={p.title} icon={p.icon} accent={p.accent}>
            <div className={`mb-4 rounded-2xl p-4 text-center ${p.accent === "green" ? "bg-[#EAFBF1]" : "bg-[#F1EEFE]"}`}>
              <div className={`text-3xl font-extrabold ${p.accent === "green" ? "text-[#16A34A]" : "text-[#4F2BDF]"}`}>
                {p.value} <span className="text-base font-semibold">{p.unit}</span>
              </div>
              <div className="text-xs text-gray-500">{k("t1_d")}</div>
            </div>
            <div className="divide-y divide-gray-100">
              {p.rows.map((r) => (
                <div key={r.l} className="flex justify-between py-2 text-sm">
                  <span className="text-gray-600">{r.l}</span>
                  <span className="font-bold text-[#1A0C4F]">{r.v}</span>
                </div>
              ))}
            </div>
          </ModalCard>
        ))}
      </div>

      <div className="mb-5 grid gap-5 md:grid-cols-2">
        {/* Titre foncier */}
        <ModalCard title={k("t3")} icon={<FileTextOutlined />} accent="green">
          <p className="mb-3 text-sm leading-relaxed text-gray-600">{k("t3_d")}</p>
          <ul className="space-y-2">
            {["t3_l1", "t3_l2", "t3_l3"].map((key) => (
              <li key={key} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircleFilled className="mt-0.5 text-[#16A34A]" /> {k(key)}
              </li>
            ))}
          </ul>
        </ModalCard>

        {/* Réformes */}
        <ModalCard title={k("t4")} icon={<SafetyCertificateOutlined />} accent="purple">
          <ol className="space-y-3">
            {reformsList.map((reform, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F1EEFE] text-xs font-bold text-[#4F2BDF]">
                  {idx + 1}
                </span>
                {reform}
              </li>
            ))}
          </ol>
        </ModalCard>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {/* Bail commercial */}
        <ModalCard title={k("t5")} icon={<HomeOutlined />} accent="green">
          <p className="mb-4 text-sm text-gray-600">{k("t5_d")}</p>
          <div className="space-y-2 text-sm">
            <div className="rounded-xl bg-[#F7F8FB] px-4 py-2.5">
              <span className="font-semibold text-[#1A0C4F]">{k("t5_l1_k")}</span>
              <span className="text-gray-600">{k("t5_l1_v")}</span>
            </div>
            <div className="rounded-xl bg-[#F7F8FB] px-4 py-2.5">
              <span className="font-semibold text-[#1A0C4F]">{k("t5_l2_k")}</span>
              <span className="text-gray-600">{k("t5_l2_v")}</span>
            </div>
          </div>
        </ModalCard>

        {/* Textes légaux */}
        <ModalCard title={k("t6")} icon={<AccountBookOutlined />} accent="purple">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {legalLaws.map((law) => (
              <a
                key={law.text}
                href={law.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-gray-100 p-3 transition-colors hover:border-[#4F2BDF] hover:bg-[#F1EEFE]"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#EAFBF1] px-2 py-0.5 text-[11px] font-bold text-[#16A34A]">{law.year}</span>
                  <ExportOutlined className="text-gray-300 group-hover:text-[#4F2BDF]" />
                </div>
                <div className="mt-1.5 text-sm font-bold text-[#1A0C4F]">{law.text}</div>
                <div className="text-xs text-gray-500">{law.subtitle}</div>
              </a>
            ))}
          </div>
        </ModalCard>
      </div>
    </ModalShell>
  );
};

export default FoncierModal;

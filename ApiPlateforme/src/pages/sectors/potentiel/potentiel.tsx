import { useState } from "react";
import {
  Wheat, Zap, Smartphone, TreePine, Shirt, Fuel, Beaker, Pickaxe, Building,
  CreditCard, ChevronRight, BarChart3, Lightbulb, X, ExternalLink, Info, Eye,
  Truck, Shield, CheckCircle, AlertCircle, Home, Factory
} from "lucide-react";
import { useTranslation } from "react-i18next";

const sectorData = [
  { id: "agro", icon: <Wheat className="w-8 h-8" />, category: "pilier" },
  { id: "industry", icon: <Pickaxe className="w-8 h-8" />, category: "pilier" },
  { id: "digital", icon: <Smartphone className="w-8 h-8" />, category: "pilier" },
  { id: "energy", icon: <Zap className="w-8 h-8" />, category: "pilier" },
  { id: "housing", icon: <Home className="w-8 h-8" />, category: "pilier" },
  { id: "forest", icon: <TreePine className="w-8 h-8" />, category: "domaine" },
  { id: "textile", icon: <Shirt className="w-8 h-8" />, category: "domaine" },
  { id: "oil", icon: <Fuel className="w-8 h-8" />, category: "domaine" },
  { id: "chemical", icon: <Beaker className="w-8 h-8" />, category: "domaine" },
  { id: "construction", icon: <Building className="w-8 h-8" />, category: "domaine" },
  { id: "transport", icon: <Truck className="w-8 h-8" />, category: "socle" },
  { id: "finance", icon: <CreditCard className="w-8 h-8" />, category: "socle" },
  { id: "infrastructure", icon: <Factory className="w-8 h-8" />, category: "socle" },
] as const;


const Potentiel = () => {
  const { t } = useTranslation();
  const [selectedSector, setSelectedSector] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const sectors = sectorData.map(s => ({
    ...s,
    name: t(`pages_secteurs.potentiel.secteurs.${s.id}.nom`),
    description: t(`pages_secteurs.potentiel.secteurs.${s.id}.description`),
    keyOpportunities: t(`pages_secteurs.potentiel.secteurs.${s.id}.opportunites`, { returnObjects: true }) as string[],
    challenges: t(`pages_secteurs.potentiel.secteurs.${s.id}.defis`, { returnObjects: true }) as string[],
    governmentSupport: t(`pages_secteurs.potentiel.secteurs.${s.id}.soutien`)
  }));

  const currentSector = sectors.find((s) => s.id === selectedSector);

  const handleSectorClick = (sectorId: string) => {
    setSelectedSector(sectorId);
    setShowModal(true);
    setActiveTab("overview");
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedSector(null);
  };

  const filteredSectors = activeCategory === "all"
    ? sectors
    : sectors.filter((sector) => sector.category === activeCategory);

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case "pilier": return t("pages_secteurs.potentiel.titres_categories.pilier");
      case "domaine": return t("pages_secteurs.potentiel.titres_categories.domaine");
      case "socle": return t("pages_secteurs.potentiel.titres_categories.socle");
      default: return t("pages_secteurs.potentiel.titres_categories.all");
    }
  };
  
  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "pilier": return t("pages_secteurs.potentiel.categories.pilier");
      case "domaine": return t("pages_secteurs.potentiel.categories.domaine");
      case "socle": return t("pages_secteurs.potentiel.categories.socle");
      default: return "";
    }
  };
  
  const getCategoryBadgeLong = (category: string) => {
    switch (category) {
      case "pilier": return t("pages_secteurs.potentiel.categories.secteur_pilier");
      case "domaine": return t("pages_secteurs.potentiel.categories.domaine_cle");
      case "socle": return t("pages_secteurs.potentiel.categories.secteur_socle");
      default: return "";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="bg-[#0F0B60] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("pages_secteurs.potentiel.titre")}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">{t("pages_secteurs.potentiel.description")}</p>
        </div>
      </section>

      {/* Filtres par catégorie */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: "all", label: t("pages_secteurs.potentiel.filtres.tous"), count: sectors.length },
              { id: "pilier", label: t("pages_secteurs.potentiel.filtres.piliers"), count: sectors.filter((s) => s.category === "pilier").length },
              { id: "domaine", label: t("pages_secteurs.potentiel.filtres.domaines"), count: sectors.filter((s) => s.category === "domaine").length },
              { id: "socle", label: t("pages_secteurs.potentiel.filtres.socles"), count: sectors.filter((s) => s.category === "socle").length },
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-[#0F0B60] text-white shadow-lg"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-[#0F0B60] hover:text-[#0F0B60]"
                }`}
              >
                {category.label} <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille des secteurs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{getCategoryTitle(activeCategory)}</h3>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Eye className="w-5 h-5 text-[#0F0B60]" />
              <p className="text-lg text-gray-600">{t("pages_secteurs.potentiel.instructions")}</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSectors.map((sector) => (
              <div
                key={sector.id}
                onClick={() => handleSectorClick(sector.id)}
                className="cursor-pointer group p-6 rounded-xl border border-gray-200 bg-white hover:border-[#0F0B60] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
              >
                {/* Badge catégorie */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#0F0B60]/10 text-[#0F0B60]">
                    {getCategoryBadge(sector.category)}
                  </span>
                </div>

                {/* Indicateur d'interaction */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-[#0F0B60]/10 rounded-full flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 text-[#0F0B60]" />
                  </div>
                </div>

                <div className="w-16 h-16 rounded-xl bg-[#0F0B60]/5 border border-[#0F0B60]/20 flex items-center justify-center mb-6 group-hover:bg-[#0F0B60] transition-all mt-6 mx-auto md:mx-0">
                  <div className="text-[#0F0B60] group-hover:text-white transition-colors duration-300">
                    {sector.icon}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0F0B60] transition-colors text-center md:text-left">
                  {sector.name}
                </h4>

                <p className="text-sm text-gray-600 mb-6 line-clamp-3 text-center md:text-left">
                  {sector.description}
                </p>

                {/* Call to action au hover */}
                <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-center md:justify-start text-[#0F0B60] text-sm font-bold uppercase tracking-wider">
                    <span>{t("pages_secteurs.potentiel.explorer")}</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal détails secteur */}
      {showModal && currentSector && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Header modal */}
            <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-start justify-between rounded-t-2xl z-10">
              <div className="flex items-start md:items-center space-x-4">
                <div className="w-14 h-14 rounded-xl bg-[#0F0B60]/5 border border-[#0F0B60]/20 flex items-center justify-center shrink-0">
                  <div className="text-[#0F0B60]">{currentSector.icon}</div>
                </div>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {currentSector.name}
                    </h3>
                    <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-[#0F0B60]/10 text-[#0F0B60] w-max">
                      {getCategoryBadgeLong(currentSector.category)}
                    </span>
                  </div>
                  <p className="text-gray-500 font-medium">{t("pages_secteurs.potentiel.modal.opportunites_investissement")}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="w-10 h-10 bg-gray-50 hover:bg-red-50 hover:text-red-600 rounded-full flex items-center justify-center transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contenu modal */}
            <div className="p-6 md:p-8">
              {/* Description */}
              <div className="mb-8 p-6 bg-blue-50/50 rounded-xl border border-blue-100">
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  {currentSector.description}
                </p>
              </div>

              {/* Onglets */}
              <div className="border-b border-gray-200 mb-8 overflow-x-auto">
                <nav className="flex space-x-8 min-w-max">
                  {[
                    { id: "overview", label: t("pages_secteurs.potentiel.modal.onglets.apercu"), icon: <BarChart3 className="w-4 h-4" /> },
                    { id: "opportunities", label: t("pages_secteurs.potentiel.modal.onglets.opportunites"), icon: <Lightbulb className="w-4 h-4" /> },
                    { id: "challenges", label: t("pages_secteurs.potentiel.modal.onglets.defis"), icon: <AlertCircle className="w-4 h-4" /> },
                    { id: "support", label: t("pages_secteurs.potentiel.modal.onglets.soutien"), icon: <Shield className="w-4 h-4" /> },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-semibold text-sm flex items-center space-x-2 transition-colors ${
                        activeTab === tab.id
                          ? "border-[#0F0B60] text-[#0F0B60]"
                          : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Contenu onglets */}
              <div className="min-h-[300px]">
                {activeTab === "overview" && (
                  <div className="animate-fade-in-up">
                    <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-[#0F0B60]/10 flex items-center justify-center mr-3">
                        <Info className="w-4 h-4 text-[#0F0B60]" />
                      </div>
                      {t("pages_secteurs.potentiel.modal.apercu_titre")}
                    </h4>
                    <div className="p-6 rounded-xl border-l-4 border-[#0F0B60] bg-white shadow-sm">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {currentSector.description}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "opportunities" && (
                  <div className="animate-fade-in-up">
                    <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-[#0F0B60]/10 flex items-center justify-center mr-3">
                        <Lightbulb className="w-4 h-4 text-[#0F0B60]" />
                      </div>
                      {t("pages_secteurs.potentiel.modal.opportunites_titre")}
                    </h4>
                    <div className="grid gap-4 md:grid-cols-2">
                      {currentSector.keyOpportunities.map((opportunity, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-4 p-5 bg-white border border-gray-100 rounded-xl hover:border-[#0F0B60]/30 hover:shadow-md transition-all group"
                        >
                          <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0F0B60] flex items-center justify-center font-bold shrink-0 mt-0.5 group-hover:bg-[#0F0B60] group-hover:text-white transition-colors">
                            {index + 1}
                          </div>
                          <span className="text-gray-700 font-medium pt-1">
                            {opportunity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "challenges" && (
                  <div className="animate-fade-in-up">
                    <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center mr-3">
                        <AlertCircle className="w-4 h-4 text-orange-600" />
                      </div>
                      {t("pages_secteurs.potentiel.modal.defis_titre")}
                    </h4>
                    <div className="grid gap-4 md:grid-cols-2">
                      {currentSector.challenges.map((challenge, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-4 p-5 bg-orange-50/50 border border-orange-100 rounded-xl"
                        >
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2.5 shrink-0"></div>
                          <span className="text-gray-800 font-medium block">
                            {challenge}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "support" && (
                  <div className="animate-fade-in-up">
                    <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center mr-3">
                        <Shield className="w-4 h-4 text-green-600" />
                      </div>
                      {t("pages_secteurs.potentiel.modal.soutien_titre")}
                    </h4>
                    <div className="p-6 rounded-xl border border-green-100 bg-green-50/50 mb-6">
                      <p className="text-gray-800 font-medium text-lg">
                        {currentSector.governmentSupport}
                      </p>
                    </div>

                    <div className="p-6 rounded-xl border border-[#0F0B60]/10 bg-white shadow-sm">
                      <h5 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <CheckCircle className="w-5 h-5 text-[#0F0B60] mr-2" />
                        {t("pages_secteurs.potentiel.modal.garanties_titre")}
                      </h5>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {(t("pages_secteurs.potentiel.modal.garanties", { returnObjects: true }) as string[]).map((garantie, idx) => (
                          <li key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg">
                            <CheckCircle className="w-4 h-4 text-[#0F0B60] mr-3 shrink-0" />
                            <span className="text-gray-700 font-medium">{garantie}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Potentiel;

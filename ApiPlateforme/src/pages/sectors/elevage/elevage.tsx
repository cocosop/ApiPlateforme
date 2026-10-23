import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BulbOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import ActionButtonComponent from "../../../components/actionButtonComponent/actionButtonComponent";
import {
  Beef,
  Factory,
  Syringe,
  Truck,
  TrendingUp,
  Boxes,
  Layers,
  Globe2,
} from "lucide-react";

// Import images z0 -> z17
import z0 from "../../../assets/img/z0.png";
import z1 from "../../../assets/img/z1.png";
import z2 from "../../../assets/img/z2.png";
import z3 from "../../../assets/img/z3.png";
import z4 from "../../../assets/img/z4.png";
import z5 from "../../../assets/img/z5.png";
import z6 from "../../../assets/img/z6.png";
import z7 from "../../../assets/img/z7.png";
import z8 from "../../../assets/img/z8.png";
import z9 from "../../../assets/img/z9.png";
import z10 from "../../../assets/img/z10.png";
import z11 from "../../../assets/img/z11.png";
import z12 from "../../../assets/img/z12.png";
import z13 from "../../../assets/img/z13.png";
import z14 from "../../../assets/img/z14.png";
import z15 from "../../../assets/img/z15.png";
import z16 from "../../../assets/img/z16.png";
import z17 from "../../../assets/img/z17.png";

const Elevage = () => {
  const { t } = useTranslation();

  // Section 2: Livestock Sector Cards
  const livestockSectorCards = [
    {
      title: t(
        "pages_secteurs.elevage_page.sector.cattle_dairy.title",
        "Cattle & Dairy",
      ),
      image: z0,
      items: [
        t(
          "pages_secteurs.elevage_page.sector.cattle_dairy.item1",
          "Modern cattle production",
        ),
        t(
          "pages_secteurs.elevage_page.sector.cattle_dairy.item2",
          "Milk production and collection",
        ),
        t(
          "pages_secteurs.elevage_page.sector.cattle_dairy.item3",
          "Dairy processing",
        ),
        t(
          "pages_secteurs.elevage_page.sector.cattle_dairy.item4",
          "Improved breeding systems",
        ),
      ],
    },
    {
      title: t("pages_secteurs.elevage_page.sector.poultry.title", "Poultry"),
      image: z1,
      items: [
        t(
          "pages_secteurs.elevage_page.sector.poultry.item1",
          "Broiler and layer farming",
        ),
        t("pages_secteurs.elevage_page.sector.poultry.item2", "Hatcheries"),
        t("pages_secteurs.elevage_page.sector.poultry.item3", "Egg production"),
        t(
          "pages_secteurs.elevage_page.sector.poultry.item4",
          "Poultry meat processing",
        ),
      ],
    },
    {
      title: t(
        "pages_secteurs.elevage_page.sector.pigs_ruminants.title",
        "Pigs & Small Ruminants",
      ),
      image: z3,
      items: [
        t(
          "pages_secteurs.elevage_page.sector.pigs_ruminants.item1",
          "Modern pig farming",
        ),
        t(
          "pages_secteurs.elevage_page.sector.pigs_ruminants.item2",
          "Sheep and goat production",
        ),
        t(
          "pages_secteurs.elevage_page.sector.pigs_ruminants.item3",
          "Breeding centres",
        ),
        t(
          "pages_secteurs.elevage_page.sector.pigs_ruminants.item4",
          "Meat production",
        ),
      ],
    },
    {
      title: t(
        "pages_secteurs.elevage_page.sector.feed_inputs.title",
        "Feed & Inputs",
      ),
      image: z5,
      items: [
        t(
          "pages_secteurs.elevage_page.sector.feed_inputs.item1",
          "Animal feed production",
        ),
        t(
          "pages_secteurs.elevage_page.sector.feed_inputs.item2",
          "Forage development",
        ),
        t(
          "pages_secteurs.elevage_page.sector.feed_inputs.item3",
          "Feed-processing facilities",
        ),
        t(
          "pages_secteurs.elevage_page.sector.feed_inputs.item4",
          "Livestock equipment and inputs",
        ),
      ],
    },
    {
      title: t(
        "pages_secteurs.elevage_page.sector.processing_distrib.title",
        "Processing & Distribution",
      ),
      image: z11,
      items: [
        t(
          "pages_secteurs.elevage_page.sector.processing_distrib.item1",
          "Meat processing",
        ),
        t(
          "pages_secteurs.elevage_page.sector.processing_distrib.item2",
          "Dairy processing",
        ),
        t(
          "pages_secteurs.elevage_page.sector.processing_distrib.item3",
          "Cold-chain facilities",
        ),
        t(
          "pages_secteurs.elevage_page.sector.processing_distrib.item4",
          "Packaging and distribution",
        ),
      ],
    },
  ];

  // Section 3: Investment Areas
  const investmentAreasList = [
    {
      icon: Beef,
      title: t(
        "pages_secteurs.elevage_page.investment_areas.production.title",
        "Production",
      ),
      subtitle: t(
        "pages_secteurs.elevage_page.investment_areas.production.desc",
        "Cattle • Poultry • Pigs • Fish • Sheep & Goats",
      ),
      bgColor: "bg-blue-50 text-blue-600",
    },
    {
      icon: Syringe,
      title: t(
        "pages_secteurs.elevage_page.investment_areas.inputs.title",
        "Inputs & Services",
      ),
      subtitle: t(
        "pages_secteurs.elevage_page.investment_areas.inputs.desc",
        "Feed • Genetics • Veterinary Services • Equipment",
      ),
      bgColor: "bg-blue-50 text-blue-600",
    },
    {
      icon: Factory,
      title: t(
        "pages_secteurs.elevage_page.investment_areas.processing.title",
        "Processing",
      ),
      subtitle: t(
        "pages_secteurs.elevage_page.investment_areas.processing.desc",
        "Meat • Milk • Eggs • Fish • Chicken • Packaging",
      ),
      bgColor: "bg-blue-50 text-blue-600",
    },
    {
      icon: Truck,
      title: t(
        "pages_secteurs.elevage_page.investment_areas.infrastructure.title",
        "Infrastructure",
      ),
      subtitle: t(
        "pages_secteurs.elevage_page.investment_areas.infrastructure.desc",
        "Cold Chain • Storage • Logistics • Distribution",
      ),
      bgColor: "bg-blue-50 text-blue-600",
    },
  ];


  // Section 4: Key Figures
  const keyFigures = [
    {
      icon: TrendingUp,
      title: t(
        "pages_secteurs.elevage_page.key_figures.demand.title",
        "Growing Demand",
      ),
      subtitle: t(
        "pages_secteurs.elevage_page.key_figures.demand.subtitle",
        "Meat, milk & eggs",
      ),
    },
    {
      icon: Boxes,
      title: t(
        "pages_secteurs.elevage_page.key_figures.production.title",
        "Diverse Production",
      ),
      subtitle: t(
        "pages_secteurs.elevage_page.key_figures.production.subtitle",
        "Cattle, poultry, pigs & small ruminants",
      ),
    },
    {
      icon: Layers,
      title: t(
        "pages_secteurs.elevage_page.key_figures.value.title",
        "Value Addition",
      ),
      subtitle: t(
        "pages_secteurs.elevage_page.key_figures.value.subtitle",
        "Processing & packaging",
      ),
    },
    {
      icon: Globe2,
      title: t(
        "pages_secteurs.elevage_page.key_figures.potential.title",
        "Regional Potential",
      ),
      subtitle: t(
        "pages_secteurs.elevage_page.key_figures.potential.subtitle",
        "Domestic & regional markets",
      ),
    },
  ];

  // Section 5: Opportunities & Challenges
  const opportunitiesList = [
    {
      title: t(
        "pages_secteurs.elevage_page.potential_sec.opps.item1.title",
        "Modern production:",
      ),
      desc: t(
        "pages_secteurs.elevage_page.potential_sec.opps.item1.desc",
        "Development of commercial livestock and poultry farms.",
      ),
    },
    {
      title: t(
        "pages_secteurs.elevage_page.potential_sec.opps.item2.title",
        "Value addition:",
      ),
      desc: t(
        "pages_secteurs.elevage_page.potential_sec.opps.item2.desc",
        "Meat, milk and egg processing and packaging.",
      ),
    },
    {
      title: t(
        "pages_secteurs.elevage_page.potential_sec.opps.item3.title",
        "Feed industry:",
      ),
      desc: t(
        "pages_secteurs.elevage_page.potential_sec.opps.item3.desc",
        "Production of animal feed and forage.",
      ),
    },
    {
      title: t(
        "pages_secteurs.elevage_page.potential_sec.opps.item4.title",
        "Animal health:",
      ),
      desc: t(
        "pages_secteurs.elevage_page.potential_sec.opps.item4.desc",
        "Veterinary services, breeding and genetic improvement.",
      ),
    },
    {
      title: t(
        "pages_secteurs.elevage_page.potential_sec.opps.item5.title",
        "Market development:",
      ),
      desc: t(
        "pages_secteurs.elevage_page.potential_sec.opps.item5.desc",
        "Growing opportunities in domestic and regional markets.",
      ),
    },
  ];

  const challengesList = [
    {
      title: t(
        "pages_secteurs.elevage_page.potential_sec.challenges.item1.title",
        "Low productivity:",
      ),
      desc: t(
        "pages_secteurs.elevage_page.potential_sec.challenges.item1.desc",
        "Limited access to improved breeds, feed and modern technologies.",
      ),
    },
    {
      title: t(
        "pages_secteurs.elevage_page.potential_sec.challenges.item2.title",
        "Infrastructure gaps:",
      ),
      desc: t(
        "pages_secteurs.elevage_page.potential_sec.challenges.item2.desc",
        "Insufficient processing, storage and cold-chain facilities.",
      ),
    },
    {
      title: t(
        "pages_secteurs.elevage_page.potential_sec.challenges.item3.title",
        "Access to finance:",
      ),
      desc: t(
        "pages_secteurs.elevage_page.potential_sec.challenges.item3.desc",
        "Limited financing for modernization and expansion.",
      ),
    },
    {
      title: t(
        "pages_secteurs.elevage_page.potential_sec.challenges.item4.title",
        "Animal health:",
      ),
      desc: t(
        "pages_secteurs.elevage_page.potential_sec.challenges.item4.desc",
        "Disease risks and gaps in veterinary coverage.",
      ),
    },
    {
      title: t(
        "pages_secteurs.elevage_page.potential_sec.challenges.item5.title",
        "Fragmented value chains:",
      ),
      desc: t(
        "pages_secteurs.elevage_page.potential_sec.challenges.item5.desc",
        "Weak links between producers, processors and markets.",
      ),
    },
  ];

  return (
    <div className="w-full bg-white text-gray-800">
      {/* ---------------- SECTION 1: HERO & STRATEGIC OBJECTIVE ---------------- */}
      <div className="relative isolate overflow-hidden min-h-[480px] flex items-center bg-gray-900 py-24 sm:py-32">
        <img
          src={z6}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-60"
          alt="Livestock Hero"
        />
        <div className="absolute inset-0 bg-black/30 -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-6 text-white"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            {t("pages_secteurs.elevage_page.hero.title", "Livestock")}
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl text-gray-100 font-medium leading-relaxed">
            {t(
              "pages_secteurs.elevage_page.hero.subtitle",
              "A growing sector offering investment opportunities across animal production, processing, feed, health and livestock value chains in Cameroon.",
            )}
          </p>
          <div className="mt-8">
            <ActionButtonComponent
              title={t(
                "pages_secteurs.elevage_page.hero.button",
                "Explore opportunities",
              )}
              color="#B87333"
              filterSecteur="Élevage"
            />
          </div>
        </motion.div>
      </div>

      {/* Strategic Objective */}
      <div className="py-16 sm:py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="container mx-auto px-6 max-w-4xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
            {t(
              "pages_secteurs.elevage_page.objective.title",
              "Strategic Objective",
            )}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t(
              "pages_secteurs.elevage_page.objective.text",
              "Modernize livestock production, strengthen value chains and increase local processing to improve food security, reduce imports and create sustainable investment opportunities.",
            )}
          </p>
        </motion.div>
      </div>

      {/* ---------------- SECTION 2: LIVESTOCK SECTOR (GREEN CARDS) ---------------- */}
      <div className="py-16 sm:py-24 bg-[#EBF7F2]">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-14"
          >
            {t(
              "pages_secteurs.elevage_page.sector.header_title",
              "Livestock Sector",
            )}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {livestockSectorCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-emerald-100 flex flex-col"
              >
                <div className="h-52 w-full overflow-hidden rounded-2xl mb-5">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 px-1">
                  {card.title}
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 px-1 flex-grow">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-emerald-700 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- SECTION 3: INVESTMENT AREAS ---------------- */}
      <div className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12">
            {t(
              "pages_secteurs.elevage_page.investment_areas.header_title",
              "Investment Areas",
            )}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left side list of items */}
            <div className="lg:col-span-5 space-y-4">
              {investmentAreasList.map((area, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4"
                >
                  <div
                    className={`p-3 rounded-xl ${area.bgColor} flex-shrink-0`}
                  >
                    <area.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {area.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {area.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right side — 3-column infinite seamless scroll animation */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-3 gap-3 h-[480px] overflow-hidden">

                {/* Colonne 1 — descend infiniment (liste doublée pour éviter le vide) */}
                <motion.div
                  className="flex flex-col gap-3"
                  animate={{ y: ["-50%", "0%"] }}
                  transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                  }}
                >
                  {[z0, z2, z4, z7, z11, z14, z0, z2, z4, z7, z11, z14].map((img, i) => (
                    <div key={i} className="h-40 rounded-2xl overflow-hidden flex-shrink-0">
                      <img src={img} alt={`col1-${i}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </motion.div>

                {/* Colonne 2 — monte infiniment (liste doublée) */}
                <motion.div
                  className="flex flex-col gap-3"
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                  }}
                >
                  {[z1, z5, z9, z13, z15, z17, z1, z5, z9, z13, z15, z17].map((img, i) => (
                    <div key={i} className="h-44 rounded-2xl overflow-hidden flex-shrink-0">
                      <img src={img} alt={`col2-${i}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </motion.div>

                {/* Colonne 3 — descend infiniment (liste doublée) */}
                <motion.div
                  className="flex flex-col gap-3"
                  animate={{ y: ["-50%", "0%"] }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                  }}
                >
                  {[z3, z6, z8, z10, z12, z16, z3, z6, z8, z10, z12, z16].map((img, i) => (
                    <div key={i} className="h-40 rounded-2xl overflow-hidden flex-shrink-0">
                      <img src={img} alt={`col3-${i}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- SECTION 4: KEY FIGURES ---------------- */}
      <div className="py-16 sm:py-20 bg-gray-50/70 border-t border-b border-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-12">
            {t(
              "pages_secteurs.elevage_page.key_figures.header_title",
              "Key Figures",
            )}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFigures.map((fig, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center justify-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-5">
                  <fig.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {fig.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  {fig.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- SECTION 5: LIVESTOCK POTENTIAL (OPPORTUNITIES & CHALLENGES) ---------------- */}
      <div className="grid py-12 px-6 bg-gray-100 justify-center">
        {/* Contenu principal */}
        <div className="relative z-0 max-w-6xl mx-auto">
          {/* Titre principal */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center relative z-0">
            {t("pages_secteurs.elevage_page.potential_sec.title", "Livestock Potential in Cameroon")}
          </h1>
          {/* Description */}
          <p className="text-center leading-relaxed mb-6 relative z-0">
            {t(
              "pages_secteurs.elevage_page.potential_sec.subtitle",
              "Cameroon has strong potential for livestock development, driven by diverse production zones, available resources and growing demand for animal products. The sector offers opportunities from primary production to processing and distribution.",
            )}
          </p>
          {/* Grille des rubriques */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center relative z-0">
            {/* Carte Opportunités */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group w-full max-w-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#0F0B60]"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 bg-[#0F0B60]/5 rounded-2xl flex items-center justify-center border border-[#0F0B60]/10 group-hover:bg-[#0F0B60] transition-colors duration-300">
                    <BulbOutlined className="text-[#0F0B60] text-3xl group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 ml-5 group-hover:text-[#0F0B60] transition-colors duration-300">
                    {t("pages_secteurs.elevage_page.potential_sec.opportunities.title", "Opportunities")}
                  </h2>
                </div>
                <ul className="space-y-5 text-gray-600">
                  {opportunitiesList.map((item, idx) => (
                    <li key={idx} className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        <strong>{item.title}</strong> {" "}{item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Carte Défis */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group w-full max-w-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#0F0B60]"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 bg-[#0F0B60]/5 rounded-2xl flex items-center justify-center border border-[#0F0B60]/10 group-hover:bg-[#0F0B60] transition-colors duration-300">
                    <ExclamationCircleOutlined className="text-[#0F0B60] text-3xl group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 ml-5 group-hover:text-[#0F0B60] transition-colors duration-300">
                    {t("pages_secteurs.elevage_page.potential_sec.challenges.title", "Challenges")}
                  </h2>
                </div>
                <ul className="space-y-5 text-gray-600">
                  {challengesList.map((item, idx) => (
                    <li key={idx} className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#0F0B60]/10 transition-colors duration-300">
                        <span className="w-2 h-2 bg-[#0F0B60] rounded-full"></span>
                      </div>
                      <span className="font-medium group-hover/item:text-[#0F0B60] transition-colors duration-300 leading-relaxed">
                        <strong>{item.title}</strong> {" "}{item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elevage;

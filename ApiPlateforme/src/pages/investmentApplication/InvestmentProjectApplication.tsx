import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Input,
  Select,
  InputNumber,
  Button,
  Row,
  Col,
  Typography,
  ConfigProvider,
  Progress,
  message,
  Checkbox,
  DatePicker,
  Upload,
} from "antd";
import {
  UserOutlined,
  BankOutlined,
  FolderOutlined,
  EnvironmentOutlined,
  DollarOutlined,
  LineChartOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
  CheckOutlined,
  EditOutlined,
  LockOutlined,
  ArrowLeftOutlined,
  PlusOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const { Title, Paragraph } = Typography;
const { Option } = Select;
const { TextArea } = Input;

// Leaflet default icon fix
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface StepDef {
  id: number;
  key: string;
  label: string;
  badge: string;
  icon: React.ReactNode;
}

const APPLICATION_STEPS: StepDef[] = [
  {
    id: 1,
    key: "application",
    label: "Application",
    badge: "01",
    icon: <UserOutlined />,
  },
  {
    id: 2,
    key: "company",
    label: "Company",
    badge: "02",
    icon: <BankOutlined />,
  },
  {
    id: 3,
    key: "project",
    label: "Project",
    badge: "03",
    icon: <FolderOutlined />,
  },
  {
    id: 4,
    key: "location",
    label: "Location",
    badge: "04",
    icon: <EnvironmentOutlined />,
  },
  {
    id: 5,
    key: "financing",
    label: "Financing",
    badge: "05",
    icon: <DollarOutlined />,
  },
  {
    id: 6,
    key: "impact",
    label: "Impact",
    badge: "06",
    icon: <LineChartOutlined />,
  },
  {
    id: 7,
    key: "documents",
    label: "Documents",
    badge: "07",
    icon: <FileTextOutlined />,
  },
  {
    id: 8,
    key: "validation",
    label: "Validation",
    badge: "08",
    icon: <CheckCircleOutlined />,
  },
];

const REGIONS_CAMEROON = [
  "Adamaoua",
  "Centre",
  "Est",
  "Extrême-Nord",
  "Littoral",
  "Nord",
  "Nord-Ouest",
  "Ouest",
  "Sud",
  "Sud-Ouest",
];

const CITIES_CAMEROON = [
  "Yaoundé",
  "Douala",
  "Bafoussam",
  "Garoua",
  "Maroua",
  "Bamenda",
  "Kribi",
  "Limbe",
  "Ngaoundéré",
  "Bertoua",
  "Ebolowa",
  "Edéa",
];

const PRECISE_LOCATIONS = [
  "Industrial Free Zone (ZFI)",
  "Industrial Zone (MAGZI)",
  "Port Logistics Area",
  "Urban Commercial Zone",
  "Agro-Industrial Basin",
  "Rural Development Zone",
  "Other Specific Site",
];

const SECTORS = [
  "Agriculture & Agro-Industry",
  "Energy & Renewable Energies",
  "Infrastructure & Construction",
  "Digital Economy & Telecom",
  "Mining & Metallurgy",
  "Forestry & Wood Processing",
  "Textile, Clothing & Leather",
  "Chemicals & Pharmaceuticals",
  "Financial Services & Banking",
  "Tourism & Hospitality",
  "Health & Social Services",
  "Other",
];

const SUB_SECTORS = [
  "Food Processing & Preservation",
  "Crop Production & Cultivation",
  "Livestock & Animal Husbandry",
  "Solar & Biomass Power",
  "Transport Logistics & Warehousing",
  "Software & IT Services",
  "Packaging & Manufacturing",
  "Other",
];

const ACTIVITIES = [
  "Industrial Transformation / Processing",
  "Primary Production & Farming",
  "Storage & Logistics Distribution",
  "Research & Quality Testing",
  "Commercial Export & Distribution",
];

const PROJECT_TYPES = [
  "Greenfield (New Facility)",
  "Brownfield / Expansion",
  "Modernization & Equipment Upgrade",
  "Joint Venture with Local Partners",
  "Acquisition / Restructuring",
];

const PROJECT_STATUSES = [
  "Feasibility Study Completed",
  "Concept & Planning Phase",
  "Land Acquisition in Progress",
  "Permits / Approvals Obtained",
  "Under Construction / Deployment",
  "Partially Operational",
];

interface MapLocationPickerProps {
  position: [number, number];
  onPositionChange: (pos: [number, number]) => void;
}

const MapLocationPicker: React.FC<MapLocationPickerProps> = ({
  position,
  onPositionChange,
}) => {
  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        onPositionChange([
          parseFloat(e.latlng.lat.toFixed(4)),
          parseFloat(e.latlng.lng.toFixed(4)),
        ]);
      },
    });
    return null;
  };

  return (
    <div
      style={{
        height: "320px",
        width: "100%",
        position: "relative",
        zIndex: 1,
      }}
    >
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapClickHandler />
        <Marker
          position={position}
          draggable={true}
          eventHandlers={{
            dragend: (e: any) => {
              const marker = e.target;
              const pos = marker.getLatLng();
              onPositionChange([
                parseFloat(pos.lat.toFixed(4)),
                parseFloat(pos.lng.toFixed(4)),
              ]);
            },
          }}
        />
      </MapContainer>
    </div>
  );
};

const InvestmentProjectApplication: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  // Forms
  const [projectForm] = Form.useForm();
  const [locationForm] = Form.useForm();
  const [financingForm] = Form.useForm();
  const [impactForm] = Form.useForm();

  // Uploaded documents state
  const [uploadedDocs, setUploadedDocs] = useState<{
    companyReg?: { name: string; size: string };
    feasibility?: { name: string; size: string };
    financial?: { name: string; size: string };
  }>({
    companyReg: { name: "company_registration_statutes.pdf", size: "2.4 MB" },
    feasibility: { name: "concept_note_cameroon_agro.pdf", size: "4.1 MB" },
    financial: { name: "financial_projections_2026_2030.xlsx", size: "1.2 MB" },
  });

  // Location marker state (default Yaoundé)
  const [coords, setCoords] = useState<[number, number]>([3.848, 11.5021]);

  // Financing state
  const [currency, setCurrency] = useState<string>("FCFA");
  const [totalInvestment, setTotalInvestment] = useState<number>(0);
  const [personalFunds, setPersonalFunds] = useState<number>(0);
  const [bankFinancing, setBankFinancing] = useState<number>(0);
  const [partnersFunds, setPartnersFunds] = useState<number>(0);
  const [otherFunds, setOtherFunds] = useState<number>(0);

  // Compute percentage complete based on step
  const progressPercent = useMemo(() => {
    switch (currentStep) {
      case 1:
        return 0;
      case 2:
        return 14;
      case 3:
        return 29;
      case 4:
        return 43;
      case 5:
        return 57;
      case 6:
        return 71;
      case 7:
        return 85;
      case 8:
        return 100;
      default:
        return 0;
    }
  }, [currentStep]);

  // Financing calculations
  const totalAllocated = useMemo(() => {
    return (
      (personalFunds || 0) +
      (bankFinancing || 0) +
      (partnersFunds || 0) +
      (otherFunds || 0)
    );
  }, [personalFunds, bankFinancing, partnersFunds, otherFunds]);

  const allocationPercent = useMemo(() => {
    if (!totalInvestment || totalInvestment <= 0) return 0;
    return Math.min(100, Math.round((totalAllocated / totalInvestment) * 100));
  }, [totalAllocated, totalInvestment]);

  // Step transitions
  const markCompletedAndNext = (fromStep: number, nextStep: number) => {
    setCompletedSteps((prev) => new Set(prev).add(fromStep));
    setCurrentStep(nextStep);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/onboarding");
    }
  };

  // Ant Design Theme customization matching screenshot aesthetic
  const customTheme = {
    token: {
      colorPrimary: "#1a0c4f",
      colorLink: "#1a0c4f",
      borderRadius: 6,
      fontFamily:
        "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    components: {
      Form: {
        labelColor: "#374151",
        labelFontSize: 13,
        itemMarginBottom: 18,
        requiredMarkColor: "#ef4444",
      },
      Input: {
        borderRadius: 4,
        paddingBlock: 9,
      },
      Select: {
        borderRadius: 4,
        paddingBlock: 2,
      },
      InputNumber: {
        borderRadius: 4,
        paddingBlock: 5,
      },
      Button: {
        borderRadius: 6,
        paddingBlock: 10,
        fontWeight: 600,
      },
    },
  };

  return (
    <ConfigProvider theme={customTheme}>
      <div
        style={{
          backgroundColor: "#f9fafb",
          minHeight: "100vh",
          padding: "36px 24px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Row gutter={[32, 24]}>
            <Col xs={24} md={7} lg={6}>
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #f0f0f0",
                  borderRadius: 12,
                  padding: "24px 20px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
                  position: "sticky",
                  top: 24,
                }}
              >
                {/* Header label */}
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "#9ca3af",
                    textTransform: "uppercase",
                    marginBottom: 6,
                  }}
                >
                  NEW APPLICATION
                </p>
                <Title
                  level={4}
                  style={{
                    color: "#1a0c4f",
                    margin: "0 0 8px 0",
                    fontWeight: 800,
                  }}
                >
                  Investment project
                </Title>
                <Paragraph
                  style={{
                    color: "#6b7280",
                    fontSize: 13,
                    lineHeight: 1.45,
                    marginBottom: 24,
                  }}
                >
                  Complete each section to submit your project to the API
                  Cameroon investment team.
                </Paragraph>

                {/* Steps List */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {APPLICATION_STEPS.map((step) => {
                    const isActive = currentStep === step.id;
                    const isCompleted = completedSteps.has(step.id);

                    return (
                      <div
                        key={step.id}
                        onClick={() => {
                          // Allow clicking visited steps or current step
                          if (isCompleted || step.id <= currentStep) {
                            setCurrentStep(step.id);
                          }
                        }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "10px 14px",
                          borderRadius: 8,
                          cursor:
                            isCompleted || step.id <= currentStep
                              ? "pointer"
                              : "default",
                          backgroundColor: isActive ? "#f3eefb" : "transparent",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                          }}
                        >
                          <span
                            style={{
                              fontSize: 16,
                              color: isActive
                                ? "#1a0c4f"
                                : isCompleted
                                  ? "#1a0c4f"
                                  : "#9ca3af",
                            }}
                          >
                            {step.icon}
                          </span>
                          <span
                            style={{
                              fontSize: 14,
                              fontWeight: isActive
                                ? 700
                                : isCompleted
                                  ? 600
                                  : 500,
                              color: isActive
                                ? "#1a0c4f"
                                : isCompleted
                                  ? "#1f2937"
                                  : "#6b7280",
                            }}
                          >
                            {step.label}
                          </span>
                        </div>

                        {/* Badge / Checkmark */}
                        {isCompleted && !isActive ? (
                          <div
                            style={{
                              width: 24,
                              height: 24,
                              borderRadius: 4,
                              backgroundColor: "#1a0c4f",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#fff",
                              fontSize: 12,
                              fontWeight: 700,
                            }}
                          >
                            <CheckOutlined />
                          </div>
                        ) : (
                          <div
                            style={{
                              minWidth: 26,
                              height: 24,
                              padding: "0 6px",
                              borderRadius: 4,
                              border: isActive ? "none" : "1px solid #e5e7eb",
                              backgroundColor: isActive
                                ? "#ffffff"
                                : "transparent",
                              color: isActive ? "#1a0c4f" : "#9ca3af",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: 12,
                              fontWeight: 600,
                            }}
                          >
                            {step.badge}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Data protected banner at bottom */}
                <div
                  style={{
                    marginTop: 32,
                    padding: "14px 16px",
                    borderRadius: 8,
                    border: "1px solid #f3f4f6",
                    backgroundColor: "#fafafa",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                  }}
                >
                  <LockOutlined
                    style={{ fontSize: 16, color: "#6b7280", marginTop: 2 }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#1f2937",
                        marginBottom: 2,
                      }}
                    >
                      Your data is protected
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#6b7280",
                        lineHeight: 1.35,
                      }}
                    >
                      Saved automatically and encrypted in transit.
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={24} md={17} lg={18}>
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #f0f0f0",
                  borderRadius: 12,
                  padding: "32px 36px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
                  minHeight: "750px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {/* Top Bar: Step counter + % Complete + Progress Bar */}
                  <div style={{ marginBottom: 28 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 10,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#6b7280",
                        }}
                      >
                        0{currentStep} / 08
                      </span>
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#6b7280",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {progressPercent}% COMPLETE
                      </span>
                    </div>
                    <Progress
                      percent={progressPercent}
                      showInfo={false}
                      strokeColor="#0F0B60"
                      trailColor="#f3f4f6"
                      size={{ height: 6 }}
                    />
                  </div>

                  {currentStep === 1 && (
                    <div>
                      <p
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: "#9ca3af",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginBottom: 6,
                        }}
                      >
                        01 - APPLICANT
                      </p>
                      <Title
                        level={2}
                        style={{
                          color: "#1a0c4f",
                          fontWeight: 800,
                          margin: "0 0 6px 0",
                        }}
                      >
                        Confirm your applicant information
                      </Title>
                      <Paragraph
                        style={{
                          color: "#6b7280",
                          fontSize: 14,
                          marginBottom: 28,
                        }}
                      >
                        This information comes from your investor profile.
                        Review it before continuing; you can edit your profile
                        at any time.
                      </Paragraph>

                      <div
                        style={{
                          border: "1px solid #e5e7eb",
                          borderRadius: 10,
                          padding: "24px 28px",
                          backgroundColor: "#ffffff",
                        }}
                      >
                        <p
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            color: "#6b7280",
                            textTransform: "uppercase",
                            marginBottom: 20,
                          }}
                        >
                          INFORMATION FROM YOUR INVESTOR PROFILE
                        </p>

                        <Row gutter={[24, 20]}>
                          <Col xs={24} sm={12}>
                            <div
                              style={{
                                fontSize: 12,
                                color: "#9ca3af",
                                marginBottom: 4,
                              }}
                            >
                              Applicant Name
                            </div>
                            <div
                              style={{
                                fontSize: 14,
                                fontWeight: 700,
                                color: "#111827",
                              }}
                            >
                              Amina Mbarga
                            </div>
                          </Col>
                          <Col xs={24} sm={12}>
                            <div
                              style={{
                                fontSize: 12,
                                color: "#9ca3af",
                                marginBottom: 4,
                              }}
                            >
                              Investor type
                            </div>
                            <div
                              style={{
                                fontSize: 14,
                                fontWeight: 700,
                                color: "#111827",
                              }}
                            >
                              Foreign individual investor
                            </div>
                          </Col>
                          <Col xs={24} sm={12}>
                            <div
                              style={{
                                fontSize: 12,
                                color: "#9ca3af",
                                marginBottom: 4,
                              }}
                            >
                              Nationality
                            </div>
                            <div
                              style={{
                                fontSize: 14,
                                fontWeight: 700,
                                color: "#111827",
                              }}
                            >
                              Cameroonian
                            </div>
                          </Col>
                          <Col xs={24} sm={12}>
                            <div
                              style={{
                                fontSize: 12,
                                color: "#9ca3af",
                                marginBottom: 4,
                              }}
                            >
                              Email
                            </div>
                            <div
                              style={{
                                fontSize: 14,
                                fontWeight: 700,
                                color: "#111827",
                              }}
                            >
                              amina.mbarga@example.com
                            </div>
                          </Col>
                        </Row>

                        <div style={{ marginTop: 24 }}>
                          <Button
                            icon={<EditOutlined />}
                            onClick={() => navigate("/onboarding")}
                            style={{
                              backgroundColor: "#f3f4f6",
                              border: "none",
                              color: "#374151",
                              fontWeight: 600,
                              fontSize: 13,
                              borderRadius: 6,
                            }}
                          >
                            Edit investor profile
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div>
                      <p
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: "#9ca3af",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginBottom: 6,
                        }}
                      >
                        02 - COMPANY
                      </p>
                      <Title
                        level={2}
                        style={{
                          color: "#1a0c4f",
                          fontWeight: 800,
                          margin: "0 0 6px 0",
                        }}
                      >
                        Confirm the company you represent
                      </Title>
                      <Paragraph
                        style={{
                          color: "#6b7280",
                          fontSize: 14,
                          marginBottom: 28,
                        }}
                      >
                        Review the company details associated with this
                        application.
                      </Paragraph>

                      <div
                        style={{
                          border: "1px solid #e5e7eb",
                          borderRadius: 10,
                          padding: "24px 28px",
                          backgroundColor: "#ffffff",
                        }}
                      >
                        <p
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            color: "#6b7280",
                            textTransform: "uppercase",
                            marginBottom: 20,
                          }}
                        >
                          COMPANY INFORMATION
                        </p>

                        <Row gutter={[24, 20]}>
                          <Col xs={24} sm={12}>
                            <div
                              style={{
                                fontSize: 12,
                                color: "#9ca3af",
                                marginBottom: 4,
                              }}
                            >
                              Company name
                            </div>
                            <div
                              style={{
                                fontSize: 14,
                                fontWeight: 700,
                                color: "#111827",
                              }}
                            >
                              Cameroon Green Foods
                            </div>
                          </Col>
                          <Col xs={24} sm={12}>
                            <div
                              style={{
                                fontSize: 12,
                                color: "#9ca3af",
                                marginBottom: 4,
                              }}
                            >
                              Country of registration
                            </div>
                            <div
                              style={{
                                fontSize: 14,
                                fontWeight: 700,
                                color: "#111827",
                              }}
                            >
                              Cameroon
                            </div>
                          </Col>
                          <Col xs={24} sm={12}>
                            <div
                              style={{
                                fontSize: 12,
                                color: "#9ca3af",
                                marginBottom: 4,
                              }}
                            >
                              Legal form
                            </div>
                            <div
                              style={{
                                fontSize: 14,
                                fontWeight: 700,
                                color: "#111827",
                              }}
                            >
                              Simplified joint-stock company
                            </div>
                          </Col>
                        </Row>

                        <div style={{ marginTop: 24 }}>
                          <Button
                            icon={<EditOutlined />}
                            onClick={() => navigate("/onboarding")}
                            style={{
                              backgroundColor: "#f3f4f6",
                              border: "none",
                              color: "#374151",
                              fontWeight: 600,
                              fontSize: 13,
                              borderRadius: 6,
                            }}
                          >
                            Edit company information
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div>
                      <p
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: "#9ca3af",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginBottom: 6,
                        }}
                      >
                        03 - PROJECT
                      </p>
                      <Title
                        level={2}
                        style={{
                          color: "#1a0c4f",
                          fontWeight: 800,
                          margin: "0 0 6px 0",
                        }}
                      >
                        Tell us about your investment project
                      </Title>
                      <Paragraph
                        style={{
                          color: "#6b7280",
                          fontSize: 14,
                          marginBottom: 28,
                        }}
                      >
                        Use clear, specific information so the investment team
                        can understand the opportunity.
                      </Paragraph>

                      <div
                        style={{
                          border: "1px solid #e5e7eb",
                          borderRadius: 10,
                          padding: "24px 28px",
                          backgroundColor: "#ffffff",
                        }}
                      >
                        <p
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            color: "#6b7280",
                            textTransform: "uppercase",
                            marginBottom: 20,
                          }}
                        >
                          COMPANY INFORMATION
                        </p>

                        <Form
                          form={projectForm}
                          layout="vertical"
                          requiredMark={(label, { required }) => (
                            <>
                              {label}
                              {required && (
                                <span
                                  style={{ color: "#ef4444", marginLeft: 4 }}
                                >
                                  *
                                </span>
                              )}
                            </>
                          )}
                          initialValues={{
                            projectName: "Cameroon Agro Processing Facility",
                          }}
                        >
                          <Row gutter={[20, 0]}>
                            {/* Project Name */}
                            <Col xs={24} sm={12}>
                              <Form.Item
                                label="Project name"
                                name="projectName"
                                rules={[
                                  {
                                    required: true,
                                    message: "Project name is required",
                                  },
                                ]}
                              >
                                <Input placeholder="Cameroon Agro Processing Facility" />
                              </Form.Item>
                            </Col>

                            {/* Business Sector */}
                            <Col xs={24} sm={12}>
                              <Form.Item
                                label="Business Sector"
                                name="businessSector"
                                rules={[
                                  {
                                    required: true,
                                    message: "Business sector is required",
                                  },
                                ]}
                              >
                                <Select placeholder="Select an option">
                                  {SECTORS.map((s) => (
                                    <Option key={s} value={s}>
                                      {s}
                                    </Option>
                                  ))}
                                </Select>
                              </Form.Item>
                            </Col>

                            {/* Sub-Sector */}
                            <Col xs={24} sm={12}>
                              <Form.Item
                                label="Sub-Sector"
                                name="subSector"
                                rules={[
                                  {
                                    required: true,
                                    message: "Sub-sector is required",
                                  },
                                ]}
                              >
                                <Select placeholder="Select an option">
                                  {SUB_SECTORS.map((ss) => (
                                    <Option key={ss} value={ss}>
                                      {ss}
                                    </Option>
                                  ))}
                                </Select>
                              </Form.Item>
                            </Col>

                            {/* Activity */}
                            <Col xs={24} sm={12}>
                              <Form.Item
                                label="Activity"
                                name="activity"
                                rules={[
                                  {
                                    required: true,
                                    message: "Activity is required",
                                  },
                                ]}
                              >
                                <Select placeholder="Select an option">
                                  {ACTIVITIES.map((a) => (
                                    <Option key={a} value={a}>
                                      {a}
                                    </Option>
                                  ))}
                                </Select>
                              </Form.Item>
                            </Col>

                            {/* Project Type */}
                            <Col xs={24} sm={12}>
                              <Form.Item
                                label="Project Type"
                                name="projectType"
                                rules={[
                                  {
                                    required: true,
                                    message: "Project type is required",
                                  },
                                ]}
                              >
                                <Select placeholder="Select an option">
                                  {PROJECT_TYPES.map((pt) => (
                                    <Option key={pt} value={pt}>
                                      {pt}
                                    </Option>
                                  ))}
                                </Select>
                              </Form.Item>
                            </Col>

                            {/* Project Status */}
                            <Col xs={24} sm={12}>
                              <Form.Item
                                label="Project Status"
                                name="projectStatus"
                                rules={[
                                  {
                                    required: true,
                                    message: "Project status is required",
                                  },
                                ]}
                              >
                                <Select placeholder="Select an option">
                                  {PROJECT_STATUSES.map((ps) => (
                                    <Option key={ps} value={ps}>
                                      {ps}
                                    </Option>
                                  ))}
                                </Select>
                              </Form.Item>
                            </Col>

                            {/* Project Description */}
                            <Col xs={24} sm={12}>
                              <Form.Item
                                label="Project Description"
                                name="projectDescription"
                                rules={[
                                  {
                                    required: true,
                                    message: "Project description is required",
                                  },
                                ]}
                              >
                                <TextArea
                                  rows={4}
                                  placeholder="Describe your investment project"
                                />
                              </Form.Item>
                            </Col>

                            {/* Main Option / Objective */}
                            <Col xs={24} sm={12}>
                              <Form.Item
                                label="Main Option"
                                name="mainObjective"
                                rules={[
                                  {
                                    required: true,
                                    message: "Main objective is required",
                                  },
                                ]}
                              >
                                <TextArea
                                  rows={4}
                                  placeholder="Explain the main objective"
                                />
                              </Form.Item>
                            </Col>
                          </Row>
                        </Form>
                      </div>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div>
                      <p
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: "#9ca3af",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginBottom: 6,
                        }}
                      >
                        04 - LOCATION
                      </p>
                      <Title
                        level={2}
                        style={{
                          color: "#1a0c4f",
                          fontWeight: 800,
                          margin: "0 0 6px 0",
                        }}
                      >
                        Where will the project be located?
                      </Title>
                      <Paragraph
                        style={{
                          color: "#6b7280",
                          fontSize: 14,
                          marginBottom: 28,
                        }}
                      >
                        Choose the administrative location, then place the
                        marker as precisely as possible on the map.
                      </Paragraph>

                      <div
                        style={{
                          border: "1px solid #e5e7eb",
                          borderRadius: 10,
                          padding: "24px 28px",
                          backgroundColor: "#ffffff",
                        }}
                      >
                        <p
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            color: "#6b7280",
                            textTransform: "uppercase",
                            marginBottom: 20,
                          }}
                        >
                          COMPANY INFORMATION
                        </p>

                        <Form
                          form={locationForm}
                          layout="vertical"
                          requiredMark={(label, { required }) => (
                            <>
                              {label}
                              {required && (
                                <span
                                  style={{ color: "#ef4444", marginLeft: 4 }}
                                >
                                  *
                                </span>
                              )}
                            </>
                          )}
                          initialValues={{
                            region: "Centre",
                            city: "Yaoundé",
                          }}
                        >
                          <Row gutter={[20, 0]}>
                            {/* Region */}
                            <Col xs={24} sm={12}>
                              <Form.Item
                                label="Region"
                                name="region"
                                rules={[
                                  {
                                    required: true,
                                    message: "Region is required",
                                  },
                                ]}
                              >
                                <Select placeholder="Select an option">
                                  {REGIONS_CAMEROON.map((r) => (
                                    <Option key={r} value={r}>
                                      {r}
                                    </Option>
                                  ))}
                                </Select>
                              </Form.Item>
                            </Col>

                            {/* City */}
                            <Col xs={24} sm={12}>
                              <Form.Item
                                label="City"
                                name="city"
                                rules={[
                                  {
                                    required: true,
                                    message: "City is required",
                                  },
                                ]}
                              >
                                <Select placeholder="Select an option">
                                  {CITIES_CAMEROON.map((c) => (
                                    <Option key={c} value={c}>
                                      {c}
                                    </Option>
                                  ))}
                                </Select>
                              </Form.Item>
                            </Col>

                            {/* Precise Location */}
                            <Col xs={24} sm={12}>
                              <Form.Item
                                label="Precise Location"
                                name="preciseLocation"
                                rules={[
                                  {
                                    required: true,
                                    message: "Precise location is required",
                                  },
                                ]}
                              >
                                <Select placeholder="Select an option">
                                  {PRECISE_LOCATIONS.map((pl) => (
                                    <Option key={pl} value={pl}>
                                      {pl}
                                    </Option>
                                  ))}
                                </Select>
                              </Form.Item>
                            </Col>

                            {/* Site Address */}
                            <Col xs={24} sm={12}>
                              <Form.Item
                                label="Site Address"
                                name="siteAddress"
                                rules={[
                                  {
                                    required: true,
                                    message: "Site address is required",
                                  },
                                ]}
                              >
                                <Input placeholder="Road, neighborhood or landmark" />
                              </Form.Item>
                            </Col>
                          </Row>
                        </Form>

                        {/* Interactive Leaflet Map box */}
                        <div
                          style={{
                            marginTop: 16,
                            borderRadius: 8,
                            overflow: "hidden",
                            border: "1px solid #e5e7eb",
                          }}
                        >
                          <MapLocationPicker
                            position={coords}
                            onPositionChange={(pos) => setCoords(pos)}
                          />

                          {/* Map bottom bar */}
                          <div
                            style={{
                              padding: "12px 20px",
                              backgroundColor: "#ffffff",
                              borderTop: "1px solid #f3f4f6",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              flexWrap: "wrap",
                              gap: 12,
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                              }}
                            >
                              <EnvironmentOutlined
                                style={{ fontSize: 18, color: "#1a0c4f" }}
                              />
                              <div>
                                <div
                                  style={{
                                    fontSize: 13,
                                    fontWeight: 700,
                                    color: "#1a0c4f",
                                  }}
                                >
                                  Location selected
                                </div>
                                <div style={{ fontSize: 11, color: "#6b7280" }}>
                                  Move the marker to refine the project site.
                                </div>
                              </div>
                            </div>

                            <div style={{ display: "flex", gap: 20 }}>
                              <div>
                                <span
                                  style={{
                                    fontSize: 10,
                                    color: "#9ca3af",
                                    fontWeight: 700,
                                    letterSpacing: "0.05em",
                                    marginRight: 6,
                                  }}
                                >
                                  LATITUDE
                                </span>
                                <span
                                  style={{
                                    fontSize: 13,
                                    fontWeight: 700,
                                    color: "#111827",
                                  }}
                                >
                                  {coords[0]}
                                </span>
                              </div>
                              <div>
                                <span
                                  style={{
                                    fontSize: 10,
                                    color: "#9ca3af",
                                    fontWeight: 700,
                                    letterSpacing: "0.05em",
                                    marginRight: 6,
                                  }}
                                >
                                  LONGITUDE
                                </span>
                                <span
                                  style={{
                                    fontSize: 13,
                                    fontWeight: 700,
                                    color: "#111827",
                                  }}
                                >
                                  {coords[1]}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 5 && (
                    <div>
                      <p
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: "#9ca3af",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginBottom: 6,
                        }}
                      >
                        05 - FINANCING
                      </p>
                      <Title
                        level={2}
                        style={{
                          color: "#1a0c4f",
                          fontWeight: 800,
                          margin: "0 0 6px 0",
                        }}
                      >
                        How will the project be financed?
                      </Title>
                      <Paragraph
                        style={{
                          color: "#6b7280",
                          fontSize: 14,
                          marginBottom: 28,
                        }}
                      >
                        Provide the total investment amount and show how it will
                        be allocated across your funding sources.
                      </Paragraph>

                      <div
                        style={{
                          border: "1px solid #e5e7eb",
                          borderRadius: 10,
                          padding: "24px 28px",
                          backgroundColor: "#ffffff",
                        }}
                      >
                        <Form
                          form={financingForm}
                          layout="vertical"
                          requiredMark={(label, { required }) => (
                            <>
                              {label}
                              {required && (
                                <span
                                  style={{ color: "#ef4444", marginLeft: 4 }}
                                >
                                  *
                                </span>
                              )}
                            </>
                          )}
                          initialValues={{
                            currency: "FCFA",
                            totalInvestment: 0,
                          }}
                        >
                          <Row gutter={[20, 0]}>
                            {/* Currency */}
                            <Col xs={24} sm={12}>
                              <Form.Item
                                label="Currency"
                                name="currency"
                                rules={[
                                  {
                                    required: true,
                                    message: "Currency is required",
                                  },
                                ]}
                              >
                                <Select
                                  value={currency}
                                  onChange={(val) => setCurrency(val)}
                                  placeholder="Select an option"
                                >
                                  <Option value="FCFA">FCFA (XAF)</Option>
                                  <Option value="EUR">EUR (€)</Option>
                                  <Option value="USD">USD ($)</Option>
                                </Select>
                              </Form.Item>
                            </Col>

                            {/* Total Investment Amount */}
                            <Col xs={24} sm={12}>
                              <Form.Item
                                label="Total Investment Amount"
                                name="totalInvestment"
                                rules={[
                                  {
                                    required: true,
                                    message:
                                      "Total investment amount is required",
                                  },
                                ]}
                              >
                                <InputNumber<number>
                                  style={{ width: "100%" }}
                                  min={0}
                                  placeholder="0"
                                  formatter={(value) =>
                                    `${value || ""}`.replace(
                                      /\B(?=(\d{3})+(?!\d))/g,
                                      " ",
                                    )
                                  }
                                  parser={(value) =>
                                    value
                                      ? Number(value.replace(/\s?|(,*)/g, ""))
                                      : 0
                                  }
                                  onChange={(val) =>
                                    setTotalInvestment(Number(val) || 0)
                                  }
                                />
                              </Form.Item>
                            </Col>
                          </Row>

                          {/* Section: Funding sources */}
                          <div style={{ marginTop: 12, marginBottom: 20 }}>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 4,
                              }}
                            >
                              <div>
                                <div
                                  style={{
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: "#111827",
                                  }}
                                >
                                  Funding sources
                                </div>
                                <div style={{ fontSize: 12, color: "#6b7280" }}>
                                  Amounts should add up to the total investment.
                                </div>
                              </div>
                              <span
                                style={{
                                  fontSize: 12,
                                  fontWeight: 700,
                                  color:
                                    allocationPercent === 100
                                      ? "#10b981"
                                      : "#ef4444",
                                }}
                              >
                                {allocationPercent}% Allocated
                              </span>
                            </div>
                          </div>

                          <Row gutter={[20, 0]}>
                            {/* Personal funds */}
                            <Col xs={24} sm={12}>
                              <Form.Item label="Personal funds">
                                <InputNumber<number>
                                  style={{ width: "100%" }}
                                  min={0}
                                  placeholder="0"
                                  formatter={(value) =>
                                    `${value || ""}`.replace(
                                      /\B(?=(\d{3})+(?!\d))/g,
                                      " ",
                                    )
                                  }
                                  parser={(value) =>
                                    value
                                      ? Number(value.replace(/\s?|(,*)/g, ""))
                                      : 0
                                  }
                                  onChange={(val) =>
                                    setPersonalFunds(Number(val) || 0)
                                  }
                                />
                              </Form.Item>
                            </Col>

                            {/* Bank financing */}
                            <Col xs={24} sm={12}>
                              <Form.Item label="Bank financing">
                                <InputNumber<number>
                                  style={{ width: "100%" }}
                                  min={0}
                                  placeholder="0"
                                  formatter={(value) =>
                                    `${value || ""}`.replace(
                                      /\B(?=(\d{3})+(?!\d))/g,
                                      " ",
                                    )
                                  }
                                  parser={(value) =>
                                    value
                                      ? Number(value.replace(/\s?|(,*)/g, ""))
                                      : 0
                                  }
                                  onChange={(val) =>
                                    setBankFinancing(Number(val) || 0)
                                  }
                                />
                              </Form.Item>
                            </Col>

                            {/* Partners */}
                            <Col xs={24} sm={12}>
                              <Form.Item label="Partners">
                                <InputNumber<number>
                                  style={{ width: "100%" }}
                                  min={0}
                                  placeholder="0"
                                  formatter={(value) =>
                                    `${value || ""}`.replace(
                                      /\B(?=(\d{3})+(?!\d))/g,
                                      " ",
                                    )
                                  }
                                  parser={(value) =>
                                    value
                                      ? Number(value.replace(/\s?|(,*)/g, ""))
                                      : 0
                                  }
                                  onChange={(val) =>
                                    setPartnersFunds(Number(val) || 0)
                                  }
                                />
                              </Form.Item>
                            </Col>

                            {/* Other */}
                            <Col xs={24} sm={12}>
                              <Form.Item label="Other">
                                <InputNumber<number>
                                  style={{ width: "100%" }}
                                  min={0}
                                  placeholder="0"
                                  formatter={(value) =>
                                    `${value || ""}`.replace(
                                      /\B(?=(\d{3})+(?!\d))/g,
                                      " ",
                                    )
                                  }
                                  parser={(value) =>
                                    value
                                      ? Number(value.replace(/\s?|(,*)/g, ""))
                                      : 0
                                  }
                                  onChange={(val) =>
                                    setOtherFunds(Number(val) || 0)
                                  }
                                />
                              </Form.Item>
                            </Col>
                          </Row>

                          {/* TOTAL FUNDING BOX */}
                          <div
                            style={{
                              marginTop: 12,
                              padding: "16px 20px",
                              backgroundColor: "#f5f3ff",
                              borderRadius: 8,
                              border: "1px solid #ede9fe",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              flexWrap: "wrap",
                              gap: 12,
                            }}
                          >
                            <div>
                              <div
                                style={{
                                  fontSize: 10,
                                  fontWeight: 700,
                                  color: "#6b7280",
                                  letterSpacing: "0.05em",
                                }}
                              >
                                TOTAL FUNDING
                              </div>
                              <div
                                style={{
                                  fontSize: 20,
                                  fontWeight: 800,
                                  color: "#111827",
                                  marginTop: 2,
                                }}
                              >
                                {totalAllocated.toLocaleString()} {currency}
                              </div>
                            </div>

                            <div
                              style={{
                                fontSize: 13,
                                color:
                                  allocationPercent === 100
                                    ? "#059669"
                                    : "#6b7280",
                                fontWeight:
                                  allocationPercent === 100 ? 600 : 400,
                              }}
                            >
                              {allocationPercent === 100
                                ? "✓ All funding sources match 100% of total investment."
                                : "Add funding sources until 100% is allocated."}
                            </div>
                          </div>
                        </Form>
                      </div>
                    </div>
                  )}

                  {currentStep === 6 && (
                    <div>
                      <p
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: "#9ca3af",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginBottom: 6,
                        }}
                      >
                        06 - IMPACT
                      </p>
                      <Title
                        level={2}
                        style={{
                          color: "#1a0c4f",
                          fontWeight: 800,
                          margin: "0 0 6px 0",
                        }}
                      >
                        Describe the impact of your project
                      </Title>
                      <Paragraph
                        style={{
                          color: "#6b7280",
                          fontSize: 14,
                          marginBottom: 28,
                        }}
                      >
                        Help us understand the jobs, markets and wider benefits
                        this investment will create.
                      </Paragraph>

                      <div
                        style={{
                          border: "1px solid #e5e7eb",
                          borderRadius: 10,
                          padding: "24px 28px",
                          backgroundColor: "#ffffff",
                        }}
                      >
                        <Form
                          form={impactForm}
                          layout="vertical"
                          requiredMark={(label, { required }) => (
                            <>
                              {label}
                              {required && (
                                <span
                                  style={{ color: "#ef4444", marginLeft: 4 }}
                                >
                                  *
                                </span>
                              )}
                            </>
                          )}
                          initialValues={{
                            projectDuration: "e.g. 24 months",
                            estimatedJobs: 0,
                            localWorkforce: 0,
                            partners: 0,
                            other: 0,
                            targetMarkets: ["Cameroon"],
                            benefitsSought: [
                              "Tax incentives",
                              "Administrative facilitation",
                            ],
                          }}
                        >
                          <Row gutter={[20, 0]}>
                            {/* Project duration */}
                            <Col xs={24} sm={12}>
                              <Form.Item
                                label="Project duration"
                                name="projectDuration"
                                rules={[
                                  {
                                    required: true,
                                    message: "Project duration is required",
                                  },
                                ]}
                              >
                                <Input placeholder="e.g. 24 months" />
                              </Form.Item>
                            </Col>

                            {/* Estimated Planned Start Date */}
                            <Col xs={24} sm={12}>
                              <Form.Item
                                label="Estimated Planned Start Date"
                                name="plannedStartDate"
                                rules={[
                                  {
                                    required: true,
                                    message: "Planned start date is required",
                                  },
                                ]}
                              >
                                <DatePicker
                                  style={{ width: "100%" }}
                                  placeholder="dd/mm/yyyy"
                                  format="DD/MM/YYYY"
                                />
                              </Form.Item>
                            </Col>

                            {/* Estimated Number of Jobs */}
                            <Col xs={24} sm={12}>
                              <Form.Item
                                label="Estimated Number of Jobs"
                                name="estimatedJobs"
                                rules={[
                                  {
                                    required: true,
                                    message:
                                      "Estimated number of jobs is required",
                                  },
                                ]}
                              >
                                <InputNumber<number>
                                  min={0}
                                  style={{ width: "100%" }}
                                  placeholder="0"
                                />
                              </Form.Item>
                            </Col>

                            {/* Local workforce percentage */}
                            <Col xs={24} sm={12}>
                              <Form.Item
                                label="Local workforce percentage"
                                name="localWorkforce"
                              >
                                <InputNumber<number>
                                  min={0}
                                  max={100}
                                  style={{ width: "100%" }}
                                  placeholder="0%"
                                  formatter={(v) => `${v || ""}%`}
                                  parser={(v) =>
                                    Number(v?.replace("%", "") || 0)
                                  }
                                />
                              </Form.Item>
                            </Col>

                            {/* Partners */}
                            <Col xs={24} sm={12}>
                              <Form.Item label="Partners" name="partners">
                                <InputNumber<number>
                                  min={0}
                                  style={{ width: "100%" }}
                                  placeholder="0"
                                />
                              </Form.Item>
                            </Col>

                            {/* Other */}
                            <Col xs={24} sm={12}>
                              <Form.Item label="Other" name="other">
                                <InputNumber<number>
                                  min={0}
                                  style={{ width: "100%" }}
                                  placeholder="0"
                                />
                              </Form.Item>
                            </Col>
                          </Row>

                          {/* TARGET MARKETS */}
                          <div style={{ marginTop: 8, marginBottom: 20 }}>
                            <div
                              style={{
                                fontSize: 11,
                                fontWeight: 700,
                                letterSpacing: "0.08em",
                                color: "#6b7280",
                                textTransform: "uppercase",
                                marginBottom: 12,
                              }}
                            >
                              TARGET MARKETS{" "}
                              <span
                                style={{
                                  fontWeight: 400,
                                  textTransform: "none",
                                  color: "#9ca3af",
                                }}
                              >
                                (Select option)
                              </span>
                            </div>
                            <Form.Item
                              name="targetMarkets"
                              style={{ marginBottom: 0 }}
                            >
                              <Checkbox.Group style={{ width: "100%" }}>
                                <Row gutter={[20, 12]}>
                                  <Col xs={12}>
                                    <Checkbox value="Cameroon">
                                      Cameroon
                                    </Checkbox>
                                  </Col>
                                  <Col xs={12}>
                                    <Checkbox value="Central Africa">
                                      Central Africa
                                    </Checkbox>
                                  </Col>
                                  <Col xs={12}>
                                    <Checkbox value="Africa">Africa</Checkbox>
                                  </Col>
                                  <Col xs={12}>
                                    <Checkbox value="International">
                                      International
                                    </Checkbox>
                                  </Col>
                                </Row>
                              </Checkbox.Group>
                            </Form.Item>
                          </div>

                          {/* Economic impact */}
                          <Form.Item
                            label="Economic impact"
                            name="economicImpact"
                            rules={[
                              {
                                required: true,
                                message: "Economic impact is required",
                              },
                            ]}
                          >
                            <TextArea
                              rows={3}
                              placeholder="Describe the economic contribution of the project."
                            />
                          </Form.Item>

                          {/* Social impact */}
                          <Form.Item
                            label="Social impact"
                            name="socialImpact"
                            rules={[
                              {
                                required: true,
                                message: "Social impact is required",
                              },
                            ]}
                          >
                            <TextArea
                              rows={3}
                              placeholder="Describe the social benefits"
                            />
                          </Form.Item>

                          {/* Environmental impact */}
                          <Form.Item
                            label="Environmental impact"
                            name="environmentalImpact"
                            rules={[
                              {
                                required: true,
                                message: "Environmental impact is required",
                              },
                            ]}
                          >
                            <TextArea
                              rows={3}
                              placeholder="Describe the environment approach"
                            />
                          </Form.Item>

                          {/* BENEFITS SOUGHT */}
                          <div style={{ marginTop: 8 }}>
                            <div
                              style={{
                                fontSize: 11,
                                fontWeight: 700,
                                letterSpacing: "0.08em",
                                color: "#6b7280",
                                textTransform: "uppercase",
                                marginBottom: 12,
                              }}
                            >
                              BENEFITS SOUGHT{" "}
                              <span
                                style={{
                                  fontWeight: 400,
                                  textTransform: "none",
                                  color: "#9ca3af",
                                }}
                              >
                                (Select option)
                              </span>
                            </div>
                            <Form.Item
                              name="benefitsSought"
                              style={{ marginBottom: 0 }}
                            >
                              <Checkbox.Group style={{ width: "100%" }}>
                                <Row gutter={[20, 10]}>
                                  <Col xs={12}>
                                    <Checkbox value="Tax incentives">
                                      Tax incentives
                                    </Checkbox>
                                  </Col>
                                  <Col xs={12}>
                                    <Checkbox value="Customs exemptions">
                                      Customs exemptions
                                    </Checkbox>
                                  </Col>
                                  <Col xs={12}>
                                    <Checkbox value="Administrative facilitation">
                                      Administrative facilitation
                                    </Checkbox>
                                  </Col>
                                  <Col xs={12}>
                                    <Checkbox value="Land acquisition">
                                      Land acquisition
                                    </Checkbox>
                                  </Col>
                                  <Col xs={12}>
                                    <Checkbox value="License support">
                                      License support
                                    </Checkbox>
                                  </Col>
                                  <Col xs={12}>
                                    <Checkbox value="Local partners">
                                      Local partners
                                    </Checkbox>
                                  </Col>
                                  <Col xs={12}>
                                    <Checkbox value="Industrial zones">
                                      Industrial zones
                                    </Checkbox>
                                  </Col>
                                  <Col xs={12}>
                                    <Checkbox value="Visa assistance">
                                      Visa assistance
                                    </Checkbox>
                                  </Col>
                                  <Col xs={12}>
                                    <Checkbox value="PPP">PPP</Checkbox>
                                  </Col>
                                  <Col xs={12}>
                                    <Checkbox value="Other">Other</Checkbox>
                                  </Col>
                                </Row>
                              </Checkbox.Group>
                            </Form.Item>
                          </div>
                        </Form>
                      </div>
                    </div>
                  )}

                  {currentStep === 7 && (
                    <div>
                      <p
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: "#9ca3af",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginBottom: 6,
                        }}
                      >
                        07 - DOCUMENTS
                      </p>
                      <Title
                        level={2}
                        style={{
                          color: "#1a0c4f",
                          fontWeight: 800,
                          margin: "0 0 6px 0",
                        }}
                      >
                        Add documents to support your application
                      </Title>
                      <Paragraph
                        style={{
                          color: "#6b7280",
                          fontSize: 14,
                          marginBottom: 28,
                        }}
                      >
                        Upload the documents available for your project.
                        Required documents must be added before submission.
                      </Paragraph>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 16,
                        }}
                      >
                        {/* Doc 1: Company registration */}
                        <div
                          style={{
                            border: "1px solid #e5e7eb",
                            borderRadius: 10,
                            padding: "20px 24px",
                            backgroundColor: "#ffffff",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: 16,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 18,
                            }}
                          >
                            <div
                              style={{
                                width: 52,
                                height: 52,
                                borderRadius: 8,
                                backgroundColor: "#6b7280",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#ffffff",
                                fontSize: 26,
                              }}
                            >
                              <FileTextOutlined />
                            </div>
                            <div>
                              <div
                                style={{
                                  fontSize: 15,
                                  fontWeight: 700,
                                  color: "#111827",
                                  marginBottom: 2,
                                }}
                              >
                                Company registration documents
                              </div>
                              <div
                                style={{
                                  fontSize: 12,
                                  color: "#6b7280",
                                  marginBottom: 6,
                                }}
                              >
                                Upload the documents that establish your
                                company.
                              </div>
                              <div
                                style={{
                                  fontSize: 11,
                                  fontWeight: 700,
                                  color: "#ef4444",
                                  letterSpacing: "0.04em",
                                }}
                              >
                                REQUIRED · PDF, DOCX, XLSX · MAX 10 MB
                              </div>
                              {uploadedDocs.companyReg && (
                                <div
                                  style={{
                                    marginTop: 6,
                                    fontSize: 12,
                                    color: "#059669",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6,
                                    fontWeight: 600,
                                  }}
                                >
                                  <PaperClipOutlined />{" "}
                                  {uploadedDocs.companyReg.name} (
                                  {uploadedDocs.companyReg.size})
                                </div>
                              )}
                            </div>
                          </div>

                          <Upload
                            showUploadList={false}
                            beforeUpload={(file) => {
                              setUploadedDocs((prev) => ({
                                ...prev,
                                companyReg: {
                                  name: file.name,
                                  size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
                                },
                              }));
                              message.success(
                                `${file.name} uploaded successfully`,
                              );
                              return false;
                            }}
                          >
                            <Button
                              icon={<PlusOutlined />}
                              style={{
                                backgroundColor: "#f5f3ff",
                                borderColor: "#ede9fe",
                                color: "#1a0c4f",
                                fontWeight: 600,
                                fontSize: 13,
                                borderRadius: 6,
                                height: 38,
                              }}
                            >
                              Upload document
                            </Button>
                          </Upload>
                        </div>

                        {/* Doc 2: Project feasibility */}
                        <div
                          style={{
                            border: "1px solid #e5e7eb",
                            borderRadius: 10,
                            padding: "20px 24px",
                            backgroundColor: "#ffffff",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: 16,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 18,
                            }}
                          >
                            <div
                              style={{
                                width: 52,
                                height: 52,
                                borderRadius: 8,
                                backgroundColor: "#6b7280",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#ffffff",
                                fontSize: 26,
                              }}
                            >
                              <FileTextOutlined />
                            </div>
                            <div>
                              <div
                                style={{
                                  fontSize: 15,
                                  fontWeight: 700,
                                  color: "#111827",
                                  marginBottom: 2,
                                }}
                              >
                                Project feasibility or concept note
                              </div>
                              <div
                                style={{
                                  fontSize: 12,
                                  color: "#6b7280",
                                  marginBottom: 6,
                                }}
                              >
                                Provide the most recent project presentation.
                              </div>
                              <div
                                style={{
                                  fontSize: 11,
                                  fontWeight: 700,
                                  color: "#ef4444",
                                  letterSpacing: "0.04em",
                                }}
                              >
                                REQUIRED · PDF, DOCX, XLSX · MAX 10 MB
                              </div>
                              {uploadedDocs.feasibility && (
                                <div
                                  style={{
                                    marginTop: 6,
                                    fontSize: 12,
                                    color: "#059669",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6,
                                    fontWeight: 600,
                                  }}
                                >
                                  <PaperClipOutlined />{" "}
                                  {uploadedDocs.feasibility.name} (
                                  {uploadedDocs.feasibility.size})
                                </div>
                              )}
                            </div>
                          </div>

                          <Upload
                            showUploadList={false}
                            beforeUpload={(file) => {
                              setUploadedDocs((prev) => ({
                                ...prev,
                                feasibility: {
                                  name: file.name,
                                  size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
                                },
                              }));
                              message.success(
                                `${file.name} uploaded successfully`,
                              );
                              return false;
                            }}
                          >
                            <Button
                              icon={<PlusOutlined />}
                              style={{
                                backgroundColor: "#f5f3ff",
                                borderColor: "#ede9fe",
                                color: "#1a0c4f",
                                fontWeight: 600,
                                fontSize: 13,
                                borderRadius: 6,
                                height: 38,
                              }}
                            >
                              Upload Document
                            </Button>
                          </Upload>
                        </div>

                        {/* Doc 3: Supporting financial documents */}
                        <div
                          style={{
                            border: "1px solid #e5e7eb",
                            borderRadius: 10,
                            padding: "20px 24px",
                            backgroundColor: "#ffffff",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: 16,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 18,
                            }}
                          >
                            <div
                              style={{
                                width: 52,
                                height: 52,
                                borderRadius: 8,
                                backgroundColor: "#6b7280",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#ffffff",
                                fontSize: 26,
                              }}
                            >
                              <FileTextOutlined />
                            </div>
                            <div>
                              <div
                                style={{
                                  fontSize: 15,
                                  fontWeight: 700,
                                  color: "#111827",
                                  marginBottom: 2,
                                }}
                              >
                                Supporting financial documents
                              </div>
                              <div
                                style={{
                                  fontSize: 12,
                                  color: "#6b7280",
                                  marginBottom: 6,
                                }}
                              >
                                Optional documents supporting your financing
                                plan.
                              </div>
                              <div
                                style={{
                                  fontSize: 11,
                                  fontWeight: 700,
                                  color: "#ef4444",
                                  letterSpacing: "0.04em",
                                }}
                              >
                                REQUIRED · PDF, DOCX, XLSX · MAX 10 MB
                              </div>
                              {uploadedDocs.financial && (
                                <div
                                  style={{
                                    marginTop: 6,
                                    fontSize: 12,
                                    color: "#059669",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6,
                                    fontWeight: 600,
                                  }}
                                >
                                  <PaperClipOutlined />{" "}
                                  {uploadedDocs.financial.name} (
                                  {uploadedDocs.financial.size})
                                </div>
                              )}
                            </div>
                          </div>

                          <Upload
                            showUploadList={false}
                            beforeUpload={(file) => {
                              setUploadedDocs((prev) => ({
                                ...prev,
                                financial: {
                                  name: file.name,
                                  size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
                                },
                              }));
                              message.success(
                                `${file.name} uploaded successfully`,
                              );
                              return false;
                            }}
                          >
                            <Button
                              icon={<PlusOutlined />}
                              style={{
                                backgroundColor: "#f5f3ff",
                                borderColor: "#ede9fe",
                                color: "#1a0c4f",
                                fontWeight: 600,
                                fontSize: 13,
                                borderRadius: 6,
                                height: 38,
                              }}
                            >
                              Upload Document
                            </Button>
                          </Upload>
                        </div>

                        {/* Info notice */}
                        <div
                          style={{
                            marginTop: 12,
                            padding: "12px 16px",
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            color: "#6b7280",
                            fontSize: 12,
                          }}
                        >
                          <LockOutlined
                            style={{ fontSize: 14, color: "#9ca3af" }}
                          />
                          <span>
                            You can replace documents later. Files are securely
                            associated with this application and are not visible
                            to other investors.
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 8 && (
                    <div>
                      <p
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: "#9ca3af",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginBottom: 6,
                        }}
                      >
                        08 - VALIDATION
                      </p>
                      <Title
                        level={2}
                        style={{
                          color: "#1a0c4f",
                          fontWeight: 800,
                          margin: "0 0 6px 0",
                        }}
                      >
                        Review your application
                      </Title>
                      <Paragraph
                        style={{
                          color: "#6b7280",
                          fontSize: 14,
                          marginBottom: 28,
                        }}
                      >
                        Check each section before submitting. You can edit any
                        part of your application without losing your progress.
                      </Paragraph>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 12,
                        }}
                      >
                        {[
                          {
                            step: 1,
                            title: "Applicant",
                            subtitle:
                              "Amina Mbarga · Foreign individual investor",
                          },
                          {
                            step: 2,
                            title: "Company",
                            subtitle: "Cameroon Green Foods",
                          },
                          {
                            step: 3,
                            title: "Project",
                            subtitle: "Cameroon Agro Processing Facility",
                          },
                          {
                            step: 4,
                            title: "Location",
                            subtitle: "Yaoundé | Centre · GPS selected",
                          },
                          {
                            step: 5,
                            title: "Financing",
                            subtitle: "100% allocated",
                          },
                          {
                            step: 6,
                            title: "Impact",
                            subtitle: "Impact assessment completed",
                          },
                          {
                            step: 7,
                            title: "Documents",
                            subtitle: "3 required documents uploaded",
                          },
                        ].map((item) => (
                          <div
                            key={item.step}
                            style={{
                              border: "1px solid #e5e7eb",
                              borderRadius: 10,
                              padding: "16px 20px",
                              backgroundColor: "#ffffff",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 16,
                              }}
                            >
                              <div
                                style={{
                                  width: 32,
                                  height: 32,
                                  borderRadius: 6,
                                  backgroundColor: "#4b5563",
                                  color: "#ffffff",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  fontSize: 14,
                                  fontWeight: 700,
                                }}
                              >
                                <CheckOutlined />
                              </div>
                              <div>
                                <div
                                  style={{
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: "#111827",
                                    lineHeight: 1.3,
                                  }}
                                >
                                  {item.title}
                                </div>
                                <div
                                  style={{
                                    fontSize: 12,
                                    color: "#6b7280",
                                    marginTop: 2,
                                  }}
                                >
                                  {item.subtitle}
                                </div>
                              </div>
                            </div>

                            <Button
                              icon={<EditOutlined />}
                              onClick={() => setCurrentStep(item.step)}
                              style={{
                                backgroundColor: "#f5f3ff",
                                border: "1px solid #ede9fe",
                                color: "#1a0c4f",
                                fontWeight: 600,
                                fontSize: 12,
                                borderRadius: 6,
                                height: 34,
                                paddingInline: 14,
                              }}
                            >
                              Edit
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div
                  style={{
                    marginTop: 36,
                    paddingTop: 20,
                    borderTop: "1px solid #f3f4f6",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Button
                    type="text"
                    icon={<ArrowLeftOutlined />}
                    onClick={handleBack}
                    style={{
                      color: "#4b5563",
                      fontWeight: 600,
                      fontSize: 14,
                      paddingLeft: 0,
                    }}
                  >
                    Back
                  </Button>

                  {/* Next Step Action Button */}
                  {currentStep === 1 && (
                    <Button
                      type="primary"
                      onClick={() => markCompletedAndNext(1, 2)}
                      style={{
                        backgroundColor: "#1a0c4f",
                        borderColor: "#1a0c4f",
                        paddingInline: 24,
                        height: 42,
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      Continue to Company →
                    </Button>
                  )}

                  {currentStep === 2 && (
                    <Button
                      type="primary"
                      onClick={() => markCompletedAndNext(2, 3)}
                      style={{
                        backgroundColor: "#1a0c4f",
                        borderColor: "#1a0c4f",
                        paddingInline: 24,
                        height: 42,
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      Continue to Project →
                    </Button>
                  )}

                  {currentStep === 3 && (
                    <Button
                      type="primary"
                      onClick={() => {
                        projectForm
                          .validateFields()
                          .then(() => {
                            markCompletedAndNext(3, 4);
                          })
                          .catch(() => {
                            markCompletedAndNext(3, 4);
                          });
                      }}
                      style={{
                        backgroundColor: "#1a0c4f",
                        borderColor: "#1a0c4f",
                        paddingInline: 24,
                        height: 42,
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      Continue to Location →
                    </Button>
                  )}

                  {currentStep === 4 && (
                    <Button
                      type="primary"
                      onClick={() => {
                        locationForm
                          .validateFields()
                          .then(() => {
                            markCompletedAndNext(4, 5);
                          })
                          .catch(() => {
                            markCompletedAndNext(4, 5);
                          });
                      }}
                      style={{
                        backgroundColor: "#1a0c4f",
                        borderColor: "#1a0c4f",
                        paddingInline: 24,
                        height: 42,
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      Continue to Financing →
                    </Button>
                  )}

                  {currentStep === 5 && (
                    <Button
                      type="primary"
                      onClick={() => markCompletedAndNext(5, 6)}
                      style={{
                        backgroundColor: "#1a0c4f",
                        borderColor: "#1a0c4f",
                        paddingInline: 24,
                        height: 42,
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      Continue to Impact →
                    </Button>
                  )}

                  {currentStep === 6 && (
                    <Button
                      type="primary"
                      onClick={() => {
                        impactForm
                          .validateFields()
                          .then(() => {
                            markCompletedAndNext(6, 7);
                          })
                          .catch(() => {
                            markCompletedAndNext(6, 7);
                          });
                      }}
                      style={{
                        backgroundColor: "#1a0c4f",
                        borderColor: "#1a0c4f",
                        paddingInline: 24,
                        height: 42,
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      Continue to Document →
                    </Button>
                  )}

                  {currentStep === 7 && (
                    <Button
                      type="primary"
                      onClick={() => markCompletedAndNext(7, 8)}
                      style={{
                        backgroundColor: "#1a0c4f",
                        borderColor: "#1a0c4f",
                        paddingInline: 24,
                        height: 42,
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      Continue to Validation →
                    </Button>
                  )}

                  {currentStep === 8 && (
                    <Button
                      type="primary"
                      onClick={() => {
                        message.success("Application successfully submitted!");
                        navigate("/dashboard");
                      }}
                      style={{
                        backgroundColor: "#1a0c4f",
                        borderColor: "#1a0c4f",
                        paddingInline: 28,
                        height: 42,
                        fontSize: 14,
                        fontWeight: 700,
                      }}
                    >
                      Continue to Dashboard →
                    </Button>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default InvestmentProjectApplication;

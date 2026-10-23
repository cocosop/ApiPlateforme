import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Form,
  Input,
  Select,
  DatePicker,
  InputNumber,
  Button,
  Radio,
  Row,
  Col,
  Typography,
  ConfigProvider,
} from "antd";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Angola",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Belarus",
  "Belgium",
  "Benin",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Croatia",
  "Cuba",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominican Republic",
  "DR Congo",
  "Ecuador",
  "Egypt",
  "Ethiopia",
  "Finland",
  "France",
  "Gabon",
  "Germany",
  "Ghana",
  "Greece",
  "Guatemala",
  "Guinea",
  "Haiti",
  "Honduras",
  "Hungary",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyzstan",
  "Lebanon",
  "Libya",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Mali",
  "Mauritania",
  "Mexico",
  "Moldova",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "Norway",
  "Oman",
  "Pakistan",
  "Panama",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Sierra Leone",
  "Singapore",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const LEGAL_FORMS = [
  "SARL",
  "SA",
  "SAS",
  "SNC",
  "Cooperative",
  "Association",
  "Other",
];

const BUSINESS_SECTORS = [
  "Agriculture",
  "Agro-Industry",
  "Energy",
  "Mining",
  "Forestry",
  "Textile & Leather",
  "Hydrocarbons & Refining",
  "Chemistry & Pharmaceuticals",
  "Infrastructure",
  "Digital & ICT",
  "Finance & Banking",
  "Tourism",
  "Real Estate",
  "Manufacturing",
  "Transport & Logistics",
  "Health",
  "Education",
  "Other",
];

const INVESTOR_TYPES = [
  { value: "local_individual", label: "Local Individual Investor" },
  { value: "local_group", label: "Local Group of Companies" },
  { value: "foreign_individual", label: "Foreign Individual Investors" },
  { value: "foreign_group", label: "Foreign group of Companies" },
  { value: "diaspora", label: "Diaspora" },
];

const InvestorOnboarding: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const selectedInvestorType = Form.useWatch("investorType", form);
  const [saving, setSaving] = useState(false);

  // Phone state (react-phone-input-2 not controlled by antd Form)
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const onFinish = async (values: any) => {
    setSaving(true);
    const payload = { ...values, phone, whatsapp };
    console.log("Onboarding payload:", payload);
    // TODO: call API
    setTimeout(() => {
      setSaving(false);
      navigate("/project-application");
    }, 1000);
  };

  /* Ant Design theme token override */
  const antdTheme = {
    token: {
      colorPrimary: "#1a0c4f",
      colorLink: "#1a0c4f",
      borderRadius: 4,
      fontFamily: "Inter, system-ui, sans-serif",
    },
    components: {
      Form: {
        labelColor: "#374151",
        labelFontSize: 13,
        itemMarginBottom: 20,
        requiredMarkColor: "#ef4444",
      },
      Input: {
        borderRadius: 4,
        paddingBlock: 9,
      },
      Select: {
        borderRadius: 4,
        optionPadding: "6px 12px",
      },
      DatePicker: {
        borderRadius: 4,
        paddingBlock: 9,
      },
      Button: {
        borderRadius: 6,
        paddingBlock: 10,
        paddingInline: 32,
        fontWeight: 600,
      },
    },
  };

  /* Shared phone input style */
  const phoneInputStyle: React.CSSProperties = {
    width: "100%",
    height: "40px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #d9d9d9",
    paddingLeft: "48px",
    backgroundColor: "#fff",
    color: "#111827",
  };
  const phoneBtnStyle: React.CSSProperties = {
    backgroundColor: "#fff",
    border: "1px solid #d9d9d9",
    borderRight: "none",
    borderRadius: "4px 0 0 4px",
  };

  return (
    <ConfigProvider theme={antdTheme}>
      <div
        style={{
          background: "#f5f6fa",
          minHeight: "100vh",
          padding: "40px 16px",
        }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          {/* ── Page header ── */}
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "#9ca3af",
              textTransform: "uppercase",
              marginBottom: 4,
            }}
          >
            {t("onboarding.label", "INVESTOR ONBOARDING")}
          </p>
          <Title
            level={2}
            style={{ color: "#1a0c4f", marginBottom: 4, fontWeight: 800 }}
          >
            {t("onboarding.title", "Complete your investor profile")}
          </Title>
          <Text
            style={{
              color: "#6b7280",
              fontSize: 14,
              display: "block",
              marginBottom: 32,
              maxWidth: 560,
            }}
          >
            {t(
              "onboarding.subtitle",
              "We need a few details about you before you can submit an investment project. You can update this information at any time.",
            )}
          </Text>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            requiredMark={(label, { required }) => (
              <>
                {label}
                {required && (
                  <span style={{ color: "#ef4444", marginLeft: 4 }}>*</span>
                )}
              </>
            )}
            initialValues={{
              nationality: "Cameroon",
              countryResidence: "Cameroon",
              countryRegistration: "Cameroon",
            }}
          >
            <div
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 12,
                padding: "24px 28px",
                marginBottom: 24,
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <Title level={5} style={{ marginBottom: 4, color: "#111827" }}>
                {t("onboarding.invest_type.title", "How will you invest?")}
              </Title>
              <Text
                style={{
                  color: "#6b7280",
                  fontSize: 13,
                  display: "block",
                  marginBottom: 20,
                }}
              >
                {t(
                  "onboarding.invest_type.subtitle",
                  "Select the option that best describes your investor profile.",
                )}
              </Text>

              <Form.Item
                name="investorType"
                rules={[
                  {
                    required: true,
                    message: t(
                      "onboarding.invest_type.required",
                      "Please select your investor type",
                    ),
                  },
                ]}
                style={{ marginBottom: 0 }}
              >
                <Radio.Group style={{ width: "100%" }}>
                  <Row gutter={[14, 14]}>
                    {INVESTOR_TYPES.map((type) => {
                      const isSelected = selectedInvestorType === type.value;
                      return (
                        <Col xs={24} sm={12} md={8} key={type.value}>
                          <label
                            style={{
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                              padding: "14px 16px",
                              borderRadius: 10,
                              border: isSelected
                                ? "2px solid #1a0c4f"
                                : "1.5px solid #d1d5db",
                              backgroundColor: isSelected
                                ? "#f6f4fc"
                                : "#fafafa",
                              transition: "all 0.2s ease",
                              boxShadow: isSelected
                                ? "0 4px 12px rgba(26, 12, 79, 0.12)"
                                : "none",
                              userSelect: "none",
                            }}
                          >
                            <Radio
                              value={type.value}
                              style={{
                                transform: "scale(1.2)",
                                margin: 0,
                              }}
                            />
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: isSelected ? 700 : 500,
                                color: isSelected ? "#1a0c4f" : "#374151",
                                lineHeight: "1.35",
                              }}
                            >
                              {t(
                                `onboarding.invest_type.${type.value}`,
                                type.label,
                              )}
                            </span>
                          </label>
                        </Col>
                      );
                    })}
                  </Row>
                </Radio.Group>
              </Form.Item>
            </div>

            <div
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 12,
                padding: "24px 28px",
                marginBottom: 24,
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <Title level={5} style={{ marginBottom: 4, color: "#111827" }}>
                {t("onboarding.personal.title", "Personal information")}
              </Title>
              <Text
                style={{
                  color: "#6b7280",
                  fontSize: 13,
                  display: "block",
                  marginBottom: 24,
                }}
              >
                {t(
                  "onboarding.personal.subtitle",
                  "This information is associated with your investor profile.",
                )}
              </Text>

              <Row gutter={[20, 0]}>
                {/* Surname */}
                <Col xs={24} sm={12}>
                  <Form.Item
                    label={t("onboarding.personal.surname", "Surname")}
                    name="surname"
                    rules={[
                      {
                        required: true,
                        message: t(
                          "onboarding.personal.surname_req",
                          "Surname is required",
                        ),
                      },
                    ]}
                  >
                    <Input
                      placeholder={t(
                        "onboarding.personal.surname_ph",
                        "enter first name",
                      )}
                    />
                  </Form.Item>
                </Col>

                {/* Last Name */}
                <Col xs={24} sm={12}>
                  <Form.Item
                    label={t("onboarding.personal.lastname", "Last Name")}
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: t(
                          "onboarding.personal.lastname_req",
                          "Last name is required",
                        ),
                      },
                    ]}
                  >
                    <Input
                      placeholder={t(
                        "onboarding.personal.lastname_ph",
                        "enter last name(s)",
                      )}
                    />
                  </Form.Item>
                </Col>

                {/* Nationality */}
                <Col xs={24} sm={12}>
                  <Form.Item
                    label={t("onboarding.personal.nationality", "Nationality")}
                    name="nationality"
                    rules={[
                      {
                        required: true,
                        message: t(
                          "onboarding.personal.nationality_req",
                          "Nationality is required",
                        ),
                      },
                    ]}
                  >
                    <Select
                      showSearch
                      placeholder="Select nationality"
                      filterOption={(input, option) =>
                        (option?.children as unknown as string)
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                    >
                      {COUNTRIES.map((c) => (
                        <Option key={c} value={c}>
                          {c}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>

                {/* Country of Residence */}
                <Col xs={24} sm={12}>
                  <Form.Item
                    label={t(
                      "onboarding.personal.country_residence",
                      "Country of Residence",
                    )}
                    name="countryResidence"
                    rules={[
                      {
                        required: true,
                        message: t(
                          "onboarding.personal.country_req",
                          "Country of residence is required",
                        ),
                      },
                    ]}
                  >
                    <Select
                      showSearch
                      placeholder="Select country"
                      filterOption={(input, option) =>
                        (option?.children as unknown as string)
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                    >
                      {COUNTRIES.map((c) => (
                        <Option key={c} value={c}>
                          {c}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>

                {/* Date of Birth */}
                <Col xs={24} sm={12}>
                  <Form.Item
                    label={t("onboarding.personal.dob", "Date of Birth")}
                    name="dateOfBirth"
                    rules={[
                      {
                        required: true,
                        message: t(
                          "onboarding.personal.dob_req",
                          "Date of birth is required",
                        ),
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

                {/* Phone Number */}
                <Col xs={24} sm={12}>
                  <Form.Item
                    label={
                      <>
                        {t("onboarding.personal.phone", "Phone number")}{" "}
                        <span style={{ color: "#ef4444", marginLeft: 4 }}>
                          *
                        </span>
                      </>
                    }
                    required
                  >
                    <PhoneInput
                      country="cm"
                      value={phone}
                      onChange={setPhone}
                      inputProps={{ required: true, name: "phone" }}
                      containerStyle={{ width: "100%" }}
                      inputStyle={phoneInputStyle}
                      buttonStyle={phoneBtnStyle}
                      dropdownStyle={{ zIndex: 50, borderRadius: 4 }}
                    />
                  </Form.Item>
                </Col>

                {/* WhatsApp */}
                <Col xs={24} sm={12}>
                  <Form.Item
                    label={t("onboarding.personal.whatsapp", "WhatsApp Number")}
                  >
                    <PhoneInput
                      country="cm"
                      value={whatsapp}
                      onChange={setWhatsapp}
                      inputProps={{ name: "whatsapp" }}
                      containerStyle={{ width: "100%" }}
                      inputStyle={phoneInputStyle}
                      buttonStyle={phoneBtnStyle}
                      dropdownStyle={{ zIndex: 50, borderRadius: 4 }}
                    />
                  </Form.Item>
                </Col>

                {/* Email */}
                <Col xs={24} sm={12}>
                  <Form.Item
                    label={t("onboarding.personal.email", "Email Address")}
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: t(
                          "onboarding.personal.email_req",
                          "Email is required",
                        ),
                      },
                      {
                        type: "email",
                        message: t(
                          "onboarding.personal.email_invalid",
                          "Please enter a valid email",
                        ),
                      },
                    ]}
                  >
                    <Input
                      type="email"
                      placeholder="example@gmail.com"
                      autoComplete="email"
                    />
                  </Form.Item>
                </Col>

                {/* Full Address */}
                <Col xs={24} sm={12}>
                  <Form.Item
                    label={t(
                      "onboarding.personal.full_address",
                      "Full Address",
                    )}
                    name="fullAddress"
                    rules={[
                      {
                        required: true,
                        message: t(
                          "onboarding.personal.address_req",
                          "Address is required",
                        ),
                      },
                    ]}
                  >
                    <Input
                      placeholder={t(
                        "onboarding.personal.full_address_ph",
                        "enter full location address",
                      )}
                    />
                  </Form.Item>
                </Col>

                {/* City */}
                <Col xs={24} sm={12}>
                  <Form.Item
                    label={t("onboarding.personal.city", "City")}
                    name="city"
                    rules={[
                      {
                        required: true,
                        message: t(
                          "onboarding.personal.city_req",
                          "City is required",
                        ),
                      },
                    ]}
                  >
                    <Input
                      placeholder={t(
                        "onboarding.personal.city_ph",
                        "City location",
                      )}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </div>

            <div
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 12,
                padding: "24px 28px",
                marginBottom: 24,
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <Title level={5} style={{ marginBottom: 4, color: "#111827" }}>
                {t("onboarding.company.title", "Company information")}
              </Title>
              <Text
                style={{
                  color: "#6b7280",
                  fontSize: 13,
                  display: "block",
                  marginBottom: 24,
                }}
              >
                {t(
                  "onboarding.company.subtitle",
                  "Tell us about the company you represent.",
                )}
              </Text>

              <Row gutter={[20, 0]}>
                {/* Company Name */}
                <Col xs={24} sm={12}>
                  <Form.Item
                    label={t("onboarding.company.name", "Company Name")}
                    name="companyName"
                    rules={[
                      {
                        required: true,
                        message: t(
                          "onboarding.company.name_req",
                          "Company name is required",
                        ),
                      },
                    ]}
                  >
                    <Input
                      placeholder={t(
                        "onboarding.company.name_ph",
                        "enter company name",
                      )}
                    />
                  </Form.Item>
                </Col>

                {/* Legal Form */}
                <Col xs={24} sm={12}>
                  <Form.Item
                    label={t("onboarding.company.legal_form", "Legal Form")}
                    name="legalForm"
                    rules={[
                      {
                        required: true,
                        message: t(
                          "onboarding.company.legal_req",
                          "Legal form is required",
                        ),
                      },
                    ]}
                  >
                    <Select
                      placeholder={t(
                        "onboarding.select_option",
                        "Select an option",
                      )}
                    >
                      {LEGAL_FORMS.map((f) => (
                        <Option key={f} value={f}>
                          {f}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>

                {/* Country of Registration */}
                <Col xs={24} sm={12}>
                  <Form.Item
                    label={t(
                      "onboarding.company.country_registration",
                      "Country of registration",
                    )}
                    name="countryRegistration"
                    rules={[
                      {
                        required: true,
                        message: t(
                          "onboarding.company.country_req",
                          "Country is required",
                        ),
                      },
                    ]}
                  >
                    <Select
                      showSearch
                      placeholder="Select country"
                      filterOption={(input, option) =>
                        (option?.children as unknown as string)
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                    >
                      {COUNTRIES.map((c) => (
                        <Option key={c} value={c}>
                          {c}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>

                {/* Registration Number */}
                <Col xs={24} sm={12}>
                  <Form.Item
                    label={t(
                      "onboarding.company.reg_number",
                      "Registration Number",
                    )}
                    name="registrationNumber"
                    rules={[
                      {
                        required: true,
                        message: t(
                          "onboarding.company.reg_req",
                          "Registration number is required",
                        ),
                      },
                    ]}
                  >
                    <Input placeholder="e.g. RC/YAO/2024/B/0000" />
                  </Form.Item>
                </Col>

                {/* Tax Number */}
                <Col xs={24} sm={12}>
                  <Form.Item
                    label={t("onboarding.company.tax_number", "Tax Number")}
                    name="taxNumber"
                    rules={[
                      {
                        required: true,
                        message: t(
                          "onboarding.company.tax_req",
                          "Tax number is required",
                        ),
                      },
                    ]}
                  >
                    <Input placeholder="e.g. RC/YAO/2024/B/0000" />
                  </Form.Item>
                </Col>

                {/* Date of Incorporation */}
                <Col xs={24} sm={12}>
                  <Form.Item
                    label={t(
                      "onboarding.company.date_incorporation",
                      "Date of Incorporation",
                    )}
                    name="dateIncorporation"
                    rules={[
                      {
                        required: true,
                        message: t(
                          "onboarding.company.date_req",
                          "Date of incorporation is required",
                        ),
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

                {/* Head Office Address */}
                <Col xs={24} sm={12}>
                  <Form.Item
                    label={t(
                      "onboarding.company.head_office",
                      "Head Office Address",
                    )}
                    name="headOfficeAddress"
                    rules={[
                      {
                        required: true,
                        message: t(
                          "onboarding.company.head_req",
                          "Head office address is required",
                        ),
                      },
                    ]}
                  >
                    <Input
                      placeholder={t(
                        "onboarding.company.head_office_ph",
                        "enter head office address",
                      )}
                    />
                  </Form.Item>
                </Col>

                {/* Website */}
                <Col xs={24} sm={12}>
                  <Form.Item
                    label={t("onboarding.company.website", "Website")}
                    name="website"
                    rules={[
                      {
                        required: true,
                        message: t(
                          "onboarding.company.website_req",
                          "Website is required",
                        ),
                      },
                      {
                        type: "url",
                        message: t(
                          "onboarding.company.website_invalid",
                          "Please enter a valid URL",
                        ),
                      },
                    ]}
                  >
                    <Input
                      placeholder={t(
                        "onboarding.company.website_ph",
                        "enter URL",
                      )}
                    />
                  </Form.Item>
                </Col>

                {/* Business Sector */}
                <Col xs={24} sm={12}>
                  <Form.Item
                    label={t(
                      "onboarding.company.business_sector",
                      "Business Sector",
                    )}
                    name="businessSector"
                    rules={[
                      {
                        required: true,
                        message: t(
                          "onboarding.company.sector_req",
                          "Business sector is required",
                        ),
                      },
                    ]}
                  >
                    <Select
                      placeholder={t(
                        "onboarding.select_option",
                        "Select an option",
                      )}
                    >
                      {BUSINESS_SECTORS.map((s) => (
                        <Option key={s} value={s}>
                          {s}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>

                {/* Number of Employees */}
                <Col xs={24} sm={12}>
                  <Form.Item
                    label={t(
                      "onboarding.company.employees",
                      "Number of Employees",
                    )}
                    name="numberOfEmployees"
                    rules={[
                      {
                        required: true,
                        message: t(
                          "onboarding.company.employees_req",
                          "Number of employees is required",
                        ),
                      },
                    ]}
                  >
                    <InputNumber
                      min={0}
                      style={{ width: "100%" }}
                      placeholder="0"
                    />
                  </Form.Item>
                </Col>

                {/* Description – full width */}
                <Col xs={24}>
                  <Form.Item
                    label={t(
                      "onboarding.company.description",
                      "Company Description",
                    )}
                    name="description"
                    rules={[
                      {
                        required: true,
                        message: t(
                          "onboarding.company.desc_req",
                          "Description is required",
                        ),
                      },
                    ]}
                  >
                    <TextArea
                      rows={4}
                      placeholder={t(
                        "onboarding.company.description_ph",
                        "Briefly describe the company and its activities...",
                      )}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </div>

            {/* <Divider style={{ margin: "8px 0 24px" }} /> */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                paddingBottom: 40,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                loading={saving}
                size="large"
                style={{
                  backgroundColor: "#1a0c4f",
                  borderColor: "#1a0c4f",
                  paddingLeft: 32,
                  paddingRight: 32,
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                {t("onboarding.save_continue", "Save Profile and Continue")}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default InvestorOnboarding;

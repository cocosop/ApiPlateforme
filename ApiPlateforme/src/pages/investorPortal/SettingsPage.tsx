import React, { useState, useRef } from "react";
import {
  Input,
  Select,
  Button,
  Switch,
  message,
  Popconfirm,
  Tabs,
  ConfigProvider,
  Spin,
} from "antd";
import {
  Paperclip,
  LogOut,
  Shield,
  Bell,
  Sliders,
  UserCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { WORLD_COUNTRIES } from "../investmentApplication/constants/countriesAndCurrencies";
import PhoneInputField from "../investmentApplication/components/PhoneInputField";
import avatarImg from "../../assets/img/avatar.png";
import userService from "../../services/userService";
import accountService from "../../services/accountService";
import { useAuthStore } from "../../store/AuthStore";

const { Option } = Select;

type MainTab =
  | "APPLICATION_INFO"
  | "SECURITY"
  | "NOTIFICATION_PREF"
  | "GENERAL_PREF";
type SubTab = "PERSONAL" | "COMPANY" | "INVESTOR";

const PRIMARY = "#0F0B60";

export const SettingsPage: React.FC = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Main navigation tab (Left sidebar)
  const [mainTab, setMainTab] = useState<MainTab>("APPLICATION_INFO");

  // Sub navigation tab (Inside Application Information)
  const [subTab, setSubTab] = useState<SubTab>("PERSONAL");

  // Profile Photo state
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const [isPhotoEditing, setIsPhotoEditing] = useState<boolean>(false);

  const [loadingProfile, setLoadingProfile] = useState(false);
  const [savingPersonal, setSavingPersonal] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);

  // Load live user profile and onboarding data on mount
  React.useEffect(() => {
    setLoadingProfile(true);
    userService.me()
      .then((res) => {
        const u = res.data;
        if (u) {
          setPersonalForm((prev) => ({
            ...prev,
            surname: u.firstname || prev.surname,
            lastName: u.lastname || prev.lastName,
            email: u.email || prev.email,
            phone: u.phone || prev.phone,
          }));
          if (u.url_image) {
            setProfilePhoto(u.url_image);
          }
        }
      })
      .catch((err) => {
        console.error("Failed to load user profile", err);
      })
      .finally(() => {
        setLoadingProfile(false);
      });

    const saved = localStorage.getItem("investor_onboarding_data");
    if (saved) {
      try {
        const ob = JSON.parse(saved);
        if (ob.companyName) {
          setCompanyForm((prev) => ({
            ...prev,
            companyName: ob.companyName || prev.companyName,
            legalForm: ob.legalForm || prev.legalForm,
            countryOfRegistration: ob.countryRegistration || ob.countryOfRegistration || prev.countryOfRegistration,
            businessSector: ob.businessSector || prev.businessSector,
            registrationNumber: ob.registrationNumber || prev.registrationNumber,
            taxNumber: ob.taxNumber || prev.taxNumber,
            headOfficeAddress: ob.headOfficeAddress || prev.headOfficeAddress,
            website: ob.website || prev.website,
          }));
        }
        if (ob.investorType) {
          setInvestorType(ob.investorType);
        }
      } catch (_) {}
    }
  }, []);

  // Personal Information form state
  const [personalForm, setPersonalForm] = useState({
    surname: "Bah",
    lastName: "Clarkson",
    nationality: "Cameroon",
    city: "Yaoundé",
    email: "clark@investincameroon.cm",
    phone: "+237 123 456 789",
    residentialAddress: "Rue 1234, Bastos",
  });

  // Company Information form state
  const [companyForm, setCompanyForm] = useState({
    companyName: "Tchakounte Agro SARL",
    legalForm: "Cooperation",
    countryOfRegistration: "Canada",
    businessSector: "Select an option",
    registrationNumber: "RC/YAO/2019/B/000",
    taxNumber: "RC/YAO/2024/M/000cfees23453253",
    headOfficeAddress: "Canada",
    website: "tchakounteagroarl@company.com",
  });

  // Investor Information form state
  const [investorType, setInvestorType] = useState<string>(
    "Local Group of Companies",
  );

  // Security form state
  const [securityForm, setSecurityForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactor: true,
  });

  // Notification Preferences state
  const [notificationPrefs, setNotificationPrefs] = useState({
    applicationUpdates: true,
    messagesAndChat: true,
    emailAlerts: true,
    smsAlerts: false,
    marketingNews: false,
  });

  // General Preferences state
  const [generalPrefs, setGeneralPrefs] = useState({
    language: "English",
    timezone: "GMT+1 (West Africa Standard Time)",
    theme: "Light",
  });

  // Photo handlers
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        message.error("File size exceeds 5 MB limit.");
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePhoto(reader.result as string);
        setIsPhotoEditing(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSavePhoto = () => {
    setIsPhotoEditing(false);
    message.success("Profile photo updated successfully!");
  };

  const handleCancelPhoto = () => {
    setIsPhotoEditing(false);
    setProfilePhoto(null);
  };

  const handleSavePersonal = async () => {
    setSavingPersonal(true);
    try {
      await userService.updateProfile({
        firstname: personalForm.surname,
        lastname: personalForm.lastName,
        phone: personalForm.phone,
        url_image: profilePhoto || undefined,
      });
      message.success("Personal information updated successfully!");
    } catch (err: any) {
      console.error("Failed to update profile", err);
      message.error(err?.response?.data?.message || "Failed to update personal information.");
    } finally {
      setSavingPersonal(false);
    }
  };

  const handleSaveCompany = () => {
    try {
      const existing = JSON.parse(localStorage.getItem("investor_onboarding_data") || "{}");
      const updated = {
        ...existing,
        companyName: companyForm.companyName,
        legalForm: companyForm.legalForm,
        countryRegistration: companyForm.countryOfRegistration,
        businessSector: companyForm.businessSector,
        registrationNumber: companyForm.registrationNumber,
        taxNumber: companyForm.taxNumber,
        headOfficeAddress: companyForm.headOfficeAddress,
        website: companyForm.website,
      };
      localStorage.setItem("investor_onboarding_data", JSON.stringify(updated));
    } catch (_) {}
    message.success("Company information updated successfully!");
  };

  const handleSaveInvestor = () => {
    try {
      const existing = JSON.parse(localStorage.getItem("investor_onboarding_data") || "{}");
      const updated = {
        ...existing,
        investorType,
      };
      localStorage.setItem("investor_onboarding_data", JSON.stringify(updated));
    } catch (_) {}
    message.success("Investor information updated successfully!");
  };

  const handleSignOut = async () => {
    message.info("Signing out...");
    try {
      await userService.logout();
    } catch (_) {}
    useAuthStore.getState().clearTokens();
    navigate("/signin");
  };

  const labelClass =
    "text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5 block";
  const inputClass =
    "h-11 w-full rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3.5 text-sm text-[#14112B] dark:text-white placeholder:text-gray-400 focus:border-[#0F0B60] outline-none";

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: PRIMARY,
        },
      }}
    >
    <Spin spinning={loadingProfile}>
    <div className="space-y-6 font-[Poppins,sans-serif] bg-white dark:bg-neutral-900 p-6 lg:p-10 rounded-lg shadow-[0_1px_3px_rgba(20,17,43,0.04)]">
      {/* Hidden file picker */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handlePhotoUpload}
        accept="image/png,image/jpeg,image/jpg"
        style={{ display: "none" }}
      />

      {/* Top Header */}
      <div className="border-b border-[#ECEAF5] dark:border-neutral-800 pb-5">
        <h1 className="text-3xl font-extrabold tracking-tight text-[#14112B] dark:text-white">
          Settings
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Manage your account information, security, and preferences.
        </p>
      </div>

      {/* Ant Design Main Navigation Tabs */}
      <Tabs
        activeKey={mainTab}
        onChange={(key) => setMainTab(key as MainTab)}
        size="large"
        items={[
          {
            key: "APPLICATION_INFO",
            label: (
              <span className="flex items-center gap-2 font-medium">
                <UserCheck className="h-4 w-4" />
                Application Information
              </span>
            ),
          },
          {
            key: "SECURITY",
            label: (
              <span className="flex items-center gap-2 font-medium">
                <Shield className="h-4 w-4" />
                Security
              </span>
            ),
          },
          {
            key: "NOTIFICATION_PREF",
            label: (
              <span className="flex items-center gap-2 font-medium">
                <Bell className="h-4 w-4" />
                Notification Preferences
              </span>
            ),
          },
          {
            key: "GENERAL_PREF",
            label: (
              <span className="flex items-center gap-2 font-medium">
                <Sliders className="h-4 w-4" />
                General Preferences
              </span>
            ),
          },
        ]}
      />

      {/* Content Area */}
      <div className="space-y-6">
        {/* 1. APPLICATION INFORMATION TAB */}
        {mainTab === "APPLICATION_INFO" && (
            <>
              {/* Account Information Top Card */}
              <div className="rounded-2xl border border-[#ECEAF5] dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-[0_1px_3px_rgba(20,17,43,0.04)]">
                <h2 className="text-lg font-bold text-[#14112B] dark:text-white">
                  Account Information
                </h2>
                <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                  Manage your personal details, company information, and
                  investor profile.
                </p>

                {/* Profile Completion Bar */}
                <div className="mt-5">
                  <div className="flex items-center justify-between text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">
                    <span>Profile Completion</span>
                    <span className="font-bold text-[#14112B] dark:text-white">
                      {(() => {
                        const fields = [
                          personalForm.surname,
                          personalForm.lastName,
                          personalForm.nationality,
                          personalForm.city,
                          personalForm.email,
                          personalForm.phone,
                          personalForm.residentialAddress,
                          companyForm.companyName,
                          companyForm.legalForm,
                          companyForm.countryOfRegistration,
                          companyForm.businessSector,
                          companyForm.registrationNumber,
                          investorType,
                          profilePhoto,
                        ];
                        const filled = fields.filter(Boolean).length;
                        return `${Math.round((filled / fields.length) * 100)}% COMPLETE`;
                      })()}
                    </span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-[#ECEAF5] dark:bg-neutral-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#0F0B60]"
                      style={{ width: (() => {
                        const fields = [
                          personalForm.surname, personalForm.lastName, personalForm.nationality,
                          personalForm.city, personalForm.email, personalForm.phone,
                          personalForm.residentialAddress, companyForm.companyName,
                          companyForm.legalForm, companyForm.countryOfRegistration,
                          companyForm.businessSector, companyForm.registrationNumber,
                          investorType, profilePhoto,
                        ];
                        const filled = fields.filter(Boolean).length;
                        return `${Math.round((filled / fields.length) * 100)}%`;
                      })() }}
                    />
                  </div>
                </div>

                {/* Horizontal Sub-tabs using Antd Tabs */}
                <Tabs
                  activeKey={subTab}
                  onChange={(key) => setSubTab(key as SubTab)}
                  className="mt-6"
                  items={[
                    { key: "PERSONAL", label: "Personal Information" },
                    { key: "COMPANY", label: "Company Information" },
                    { key: "INVESTOR", label: "Investor Information" },
                  ]}
                />
              </div>

              {/* Sub-tab 1: PERSONAL INFORMATION */}
              {subTab === "PERSONAL" && (
                <>
                  {/* Profile Photo Card */}
                  <div className="rounded-2xl border border-[#ECEAF5] dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-[0_1px_3px_rgba(20,17,43,0.04)]">
                    <h3 className="text-base font-bold text-[#14112B] dark:text-white">
                      Profile Photo
                    </h3>
                    <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                      Upload a profile photo to personalize your investor
                      account.
                    </p>

                    <div className="mt-5 flex items-center gap-6">
                      {/* Avatar Display */}
                      <div className="relative">
                        {profilePhoto ? (
                          <img
                            src={profilePhoto}
                            alt="Profile"
                            className="h-20 w-20 rounded-full object-cover border-2 border-[#ECEAF5] shadow-sm"
                          />
                        ) : (
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#DCD6F7] text-[#14112B] text-2xl font-bold shadow-sm">
                            BC
                          </div>
                        )}
                      </div>

                      {/* Photo Actions */}
                      <div className="space-y-2">
                        {isPhotoEditing ? (
                          <div className="flex flex-wrap items-center gap-2">
                            <Button
                              onClick={() => fileInputRef.current?.click()}
                              icon={<Paperclip className="h-3.5 w-3.5" />}
                              style={{
                                height: 36,
                                borderRadius: 8,
                                fontSize: 12,
                                fontWeight: 600,
                              }}
                            >
                              Change photo
                            </Button>
                            <Button
                              type="primary"
                              onClick={handleSavePhoto}
                              style={{
                                height: 36,
                                borderRadius: 8,
                                background: PRIMARY,
                                border: "none",
                                fontSize: 12,
                                fontWeight: 600,
                              }}
                            >
                              Save changes
                            </Button>
                            <Button
                              onClick={handleCancelPhoto}
                              style={{
                                height: 36,
                                borderRadius: 8,
                                fontSize: 12,
                              }}
                            >
                              Cancel
                            </Button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Button
                              onClick={() => fileInputRef.current?.click()}
                              icon={<Paperclip className="h-3.5 w-3.5" />}
                              style={{
                                height: 38,
                                borderRadius: 8,
                                fontSize: 12,
                                fontWeight: 600,
                              }}
                            >
                              Upload Photo
                            </Button>
                            <Button
                              type="link"
                              onClick={() => {
                                setProfilePhoto(avatarImg);
                                setIsPhotoEditing(true);
                              }}
                              style={{ fontSize: 12, color: PRIMARY }}
                            >
                              Use default portrait
                            </Button>
                          </div>
                        )}
                        <p className="text-xs text-gray-400">
                          JPG, JPEG or PNG, max. 5 MB.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Personal Information Form Card */}
                  <div className="rounded-2xl border border-[#ECEAF5] dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-[0_1px_3px_rgba(20,17,43,0.04)]">
                    <h3 className="text-base font-bold text-[#14112B] dark:text-white mb-5">
                      Personal information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Surname */}
                      <div>
                        <label className={labelClass}>Surname *</label>
                        <Input
                          style={{ height: 44, borderRadius: 12 }}
                          value={personalForm.surname}
                          onChange={(e) =>
                            setPersonalForm({
                              ...personalForm,
                              surname: e.target.value,
                            })
                          }
                        />
                      </div>

                      {/* Last Name */}
                      <div>
                        <label className={labelClass}>Last Name *</label>
                        <Input
                          style={{ height: 44, borderRadius: 12 }}
                          value={personalForm.lastName}
                          onChange={(e) =>
                            setPersonalForm({
                              ...personalForm,
                              lastName: e.target.value,
                            })
                          }
                        />
                      </div>

                      {/* Nationality */}
                      <div>
                        <label className={labelClass}>Nationality *</label>
                        <Select
                          showSearch
                          value={personalForm.nationality}
                          onChange={(val) =>
                            setPersonalForm({
                              ...personalForm,
                              nationality: val,
                            })
                          }
                          style={{ width: "100%", height: 44 }}
                          optionFilterProp="label"
                          options={WORLD_COUNTRIES.map((c) => ({
                            value: c.name,
                            label: `${c.flag} ${c.name}`,
                          }))}
                        />
                      </div>

                      {/* City */}
                      <div>
                        <label className={labelClass}>City *</label>
                        <Input
                          style={{ height: 44, borderRadius: 12 }}
                          value={personalForm.city}
                          onChange={(e) =>
                            setPersonalForm({
                              ...personalForm,
                              city: e.target.value,
                            })
                          }
                        />
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className={labelClass}>Email Address *</label>
                        <Input
                          type="email"
                          style={{ height: 44, borderRadius: 12 }}
                          value={personalForm.email}
                          onChange={(e) =>
                            setPersonalForm({
                              ...personalForm,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>

                      {/* Phone number */}
                      <div>
                        <label className={labelClass}>Phone number *</label>
                        <PhoneInputField
                          value={personalForm.phone}
                          onChange={(val) =>
                            setPersonalForm({ ...personalForm, phone: val })
                          }
                        />
                      </div>

                      {/* Residential Address */}
                      <div className="md:col-span-1">
                        <label className={labelClass}>
                          Residential address *
                        </label>
                        <Input
                          style={{ height: 44, borderRadius: 12 }}
                          value={personalForm.residentialAddress}
                          onChange={(e) =>
                            setPersonalForm({
                              ...personalForm,
                              residentialAddress: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-8 flex justify-end gap-3 pt-4 border-t border-[#ECEAF5] dark:border-neutral-800">
                      <button
                        type="button"
                        onClick={() => message.info("Changes discarded")}
                        className="rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-6 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={handleSavePersonal}
                        className="rounded-xl bg-[#0F0B60] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1A1675] transition-all"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* Sub-tab 2: COMPANY INFORMATION */}
              {subTab === "COMPANY" && (
                <div className="rounded-2xl border border-[#ECEAF5] dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-[0_1px_3px_rgba(20,17,43,0.04)]">
                  <h3 className="text-base font-bold text-[#14112B] dark:text-white mb-5">
                    Personal information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Company Name */}
                    <div>
                      <label className={labelClass}>Company Name *</label>
                      <Input
                        style={{ height: 44, borderRadius: 12 }}
                        value={companyForm.companyName}
                        onChange={(e) =>
                          setCompanyForm({
                            ...companyForm,
                            companyName: e.target.value,
                          })
                        }
                      />
                    </div>

                    {/* Legal Form */}
                    <div>
                      <label className={labelClass}>Legal Form *</label>
                      <Select
                        value={companyForm.legalForm}
                        onChange={(val) =>
                          setCompanyForm({ ...companyForm, legalForm: val })
                        }
                        style={{ width: "100%", height: 44 }}
                      >
                        <Option value="Cooperation">Cooperation</Option>
                        <Option value="SARL">SARL</Option>
                        <Option value="SA">SA</Option>
                        <Option value="SAS">SAS</Option>
                        <Option value="GIE">GIE</Option>
                        <Option value="Cooperative">Cooperative</Option>
                        <Option value="Other">Other</Option>
                      </Select>
                    </div>

                    {/* Country of registration */}
                    <div>
                      <label className={labelClass}>
                        Country of registration *
                      </label>
                      <Select
                        showSearch
                        value={companyForm.countryOfRegistration}
                        onChange={(val) =>
                          setCompanyForm({
                            ...companyForm,
                            countryOfRegistration: val,
                          })
                        }
                        style={{ width: "100%", height: 44 }}
                        optionFilterProp="label"
                        options={WORLD_COUNTRIES.map((c) => ({
                          value: c.name,
                          label: `${c.flag} ${c.name}`,
                        }))}
                      />
                    </div>

                    {/* Business Sector */}
                    <div>
                      <label className={labelClass}>Business Sector *</label>
                      <Select
                        value={companyForm.businessSector}
                        onChange={(val) =>
                          setCompanyForm({
                            ...companyForm,
                            businessSector: val,
                          })
                        }
                        style={{ width: "100%", height: 44 }}
                      >
                        <Option value="Select an option">
                          Select an option
                        </Option>
                        <Option value="Agriculture">Agriculture</Option>
                        <Option value="Energy">Energy</Option>
                        <Option value="Mining">Mining</Option>
                        <Option value="Manufacturing">Manufacturing</Option>
                        <Option value="Technology">Technology</Option>
                        <Option value="Services">Services</Option>
                      </Select>
                    </div>

                    {/* Registration Number */}
                    <div>
                      <label className={labelClass}>
                        Registration Number *
                      </label>
                      <Input
                        style={{ height: 44, borderRadius: 12 }}
                        value={companyForm.registrationNumber}
                        onChange={(e) =>
                          setCompanyForm({
                            ...companyForm,
                            registrationNumber: e.target.value,
                          })
                        }
                      />
                    </div>

                    {/* Tax Number */}
                    <div>
                      <label className={labelClass}>Tax Number *</label>
                      <Input
                        style={{ height: 44, borderRadius: 12 }}
                        value={companyForm.taxNumber}
                        onChange={(e) =>
                          setCompanyForm({
                            ...companyForm,
                            taxNumber: e.target.value,
                          })
                        }
                      />
                    </div>

                    {/* Head Office Address */}
                    <div>
                      <label className={labelClass}>
                        Head Office Address *
                      </label>
                      <Input
                        style={{ height: 44, borderRadius: 12 }}
                        value={companyForm.headOfficeAddress}
                        onChange={(e) =>
                          setCompanyForm({
                            ...companyForm,
                            headOfficeAddress: e.target.value,
                          })
                        }
                      />
                    </div>

                    {/* Website */}
                    <div>
                      <label className={labelClass}>Website *</label>
                      <Input
                        style={{ height: 44, borderRadius: 12 }}
                        value={companyForm.website}
                        onChange={(e) =>
                          setCompanyForm({
                            ...companyForm,
                            website: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 flex justify-end gap-3 pt-4 border-t border-[#ECEAF5] dark:border-neutral-800">
                    <button
                      type="button"
                      onClick={() => message.info("Changes discarded")}
                      className="rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-6 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleSaveCompany}
                      className="rounded-xl bg-[#0F0B60] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1A1675] transition-all"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              )}

              {/* Sub-tab 3: INVESTOR INFORMATION */}
              {subTab === "INVESTOR" && (
                <div className="rounded-2xl border border-[#ECEAF5] dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-[0_1px_3px_rgba(20,17,43,0.04)]">
                  <h3 className="text-base font-bold text-[#14112B] dark:text-white mb-2">
                    Investor Information
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-5">
                    Select investor type
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Local Individual Investor",
                      "Local Group of Companies",
                      "Foreign group of Companies",
                      "Diaspora",
                      "Foreign Individual Investors",
                    ].map((type) => {
                      const isSelected = investorType === type;
                      return (
                        <div
                          key={type}
                          onClick={() => setInvestorType(type)}
                          className={`flex items-center gap-3.5 rounded-xl border p-4 cursor-pointer transition-all ${
                            isSelected
                              ? "border-[#0F0B60] bg-[#ECEAF8]/40 dark:bg-neutral-800 ring-1 ring-[#0F0B60]"
                              : "border-[#ECEAF5] dark:border-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-800"
                          }`}
                        >
                          <div
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                              isSelected
                                ? "border-[#0F0B60] bg-white"
                                : "border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-800"
                            }`}
                          >
                            {isSelected && (
                              <div className="h-2.5 w-2.5 rounded-full bg-[#0F0B60]" />
                            )}
                          </div>
                          <span
                            className={`text-sm font-medium ${
                              isSelected
                                ? "text-[#0F0B60] dark:text-white font-semibold"
                                : "text-gray-700 dark:text-gray-300"
                            }`}
                          >
                            {type}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Actions */}
                  <div className="mt-8 flex justify-end gap-3 pt-4 border-t border-[#ECEAF5] dark:border-neutral-800">
                    <button
                      type="button"
                      onClick={() => message.info("Changes discarded")}
                      className="rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-6 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleSaveInvestor}
                      className="rounded-xl bg-[#0F0B60] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1A1675] transition-all"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              )}

              {/* Bottom Card: Account Management (Sign Out) */}
              <div className="rounded-2xl border border-[#ECEAF5] dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-[0_1px_3px_rgba(20,17,43,0.04)] flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#14112B] dark:text-white">
                    Account management
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    Sign out of your active session on this device.
                  </p>
                </div>

                <Popconfirm
                  title="Sign out of Investor Portal?"
                  description="You will need to sign in again to access your projects."
                  onConfirm={handleSignOut}
                  okText="Sign out"
                  cancelText="Cancel"
                  okButtonProps={{ danger: true }}
                >
                  <Button
                    icon={<LogOut className="h-4 w-4" />}
                    style={{
                      height: 40,
                      borderRadius: 10,
                      fontWeight: 600,
                      fontSize: 13,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    Sign out
                  </Button>
                </Popconfirm>
              </div>
            </>
          )}

          {/* 2. SECURITY TAB */}
          {mainTab === "SECURITY" && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-[#ECEAF5] dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-[0_1px_3px_rgba(20,17,43,0.04)]">
                <h2 className="text-lg font-bold text-[#14112B] dark:text-white mb-1">
                  Password & Security
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                  Ensure your account is protected with a secure and unique
                  password.
                </p>

                <div className="space-y-4 max-w-md">
                  <div>
                    <label className={labelClass}>Current Password</label>
                    <Input.Password
                      style={{ height: 44, borderRadius: 12 }}
                      placeholder="••••••••"
                      value={securityForm.currentPassword}
                      onChange={(e) =>
                        setSecurityForm({
                          ...securityForm,
                          currentPassword: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className={labelClass}>New Password</label>
                    <Input.Password
                      style={{ height: 44, borderRadius: 12 }}
                      placeholder="••••••••"
                      value={securityForm.newPassword}
                      onChange={(e) =>
                        setSecurityForm({
                          ...securityForm,
                          newPassword: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Confirm New Password</label>
                    <Input.Password
                      style={{ height: 44, borderRadius: 12 }}
                      placeholder="••••••••"
                      value={securityForm.confirmPassword}
                      onChange={(e) =>
                        setSecurityForm({
                          ...securityForm,
                          confirmPassword: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#ECEAF5] dark:border-neutral-800">
                  <button
                    type="button"
                    disabled={savingPassword}
                    onClick={async () => {
                      if (!securityForm.currentPassword) {
                        message.error("Please enter your current password.");
                        return;
                      }
                      if (!securityForm.newPassword) {
                        message.error("Please enter a new password.");
                        return;
                      }
                      if (securityForm.newPassword !== securityForm.confirmPassword) {
                        message.error("New passwords do not match.");
                        return;
                      }
                      setSavingPassword(true);
                      try {
                        await accountService.changePassword(securityForm.currentPassword, securityForm.newPassword);
                        message.success("Password updated successfully!");
                        setSecurityForm({
                          currentPassword: "",
                          newPassword: "",
                          confirmPassword: "",
                        });
                      } catch (err: any) {
                        console.error("Password update failed", err);
                        message.error(err?.response?.data?.message || "Failed to update password.");
                      } finally {
                        setSavingPassword(false);
                      }
                    }}
                    className="rounded-xl bg-[#0F0B60] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1A1675]"
                  >
                    {savingPassword ? "Updating..." : "Update Password"}
                  </button>
                </div>
              </div>

              {/* 2FA Toggle */}
              <div className="rounded-2xl border border-[#ECEAF5] dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-[0_1px_3px_rgba(20,17,43,0.04)] flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#14112B] dark:text-white">
                    Two-Factor Authentication (2FA)
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 max-w-lg">
                    Add an extra layer of security to your investor account
                    using authentication codes.
                  </p>
                </div>
                <Switch
                  checked={securityForm.twoFactor}
                  onChange={(checked) => {
                    setSecurityForm({ ...securityForm, twoFactor: checked });
                    message.success(checked ? "2FA enabled" : "2FA disabled");
                  }}
                  style={{
                    background: securityForm.twoFactor ? "#0F0B60" : undefined,
                  }}
                />
              </div>
            </div>
          )}

          {/* 3. NOTIFICATION PREFERENCES TAB */}
          {mainTab === "NOTIFICATION_PREF" && (
            <div className="rounded-2xl border border-[#ECEAF5] dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-[0_1px_3px_rgba(20,17,43,0.04)]">
              <h2 className="text-lg font-bold text-[#14112B] dark:text-white mb-1">
                Notification Preferences
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                Choose the channels and frequencies for updates regarding your
                investment applications.
              </p>

              <div className="space-y-5 divide-y divide-[#ECEAF5] dark:divide-neutral-800">
                {[
                  {
                    key: "applicationUpdates" as const,
                    title: "Application & Project Milestones",
                    desc: "Receive alerts when your project review stage changes or documents are verified.",
                  },
                  {
                    key: "messagesAndChat" as const,
                    title: "Direct Messages from Account Managers",
                    desc: "Be notified when API officers send inquiries or feedback about your files.",
                  },
                  {
                    key: "emailAlerts" as const,
                    title: "Email Notifications Summary",
                    desc: "Receive weekly summaries of activity and urgent alerts by email.",
                  },
                  {
                    key: "smsAlerts" as const,
                    title: "SMS Alerts for Crucial Milestones",
                    desc: "Receive instant SMS when approvals are granted or immediate action is needed.",
                  },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="pt-4 flex items-center justify-between gap-4"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-[#14112B] dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                    <Switch
                      checked={notificationPrefs[item.key]}
                      onChange={(checked) => {
                        setNotificationPrefs({
                          ...notificationPrefs,
                          [item.key]: checked,
                        });
                        message.success("Preferences saved");
                      }}
                      style={{
                        background: notificationPrefs[item.key]
                          ? "#0F0B60"
                          : undefined,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. GENERAL PREFERENCES TAB */}
          {mainTab === "GENERAL_PREF" && (
            <div className="rounded-2xl border border-[#ECEAF5] dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-[0_1px_3px_rgba(20,17,43,0.04)]">
              <h2 className="text-lg font-bold text-[#14112B] dark:text-white mb-1">
                General Preferences
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                Personalize your display language, timezone and visual settings.
              </p>

              <div className="space-y-5 max-w-lg">
                <div>
                  <label className={labelClass}>Interface Language</label>
                  <Select
                    value={generalPrefs.language}
                    onChange={(val) => {
                      setGeneralPrefs({ ...generalPrefs, language: val });
                      message.success(`Language set to ${val}`);
                    }}
                    style={{ width: "100%", height: 44 }}
                  >
                    <Option value="English">English</Option>
                    <Option value="Français">Français</Option>
                  </Select>
                </div>

                <div>
                  <label className={labelClass}>Timezone</label>
                  <Select
                    value={generalPrefs.timezone}
                    onChange={(val) => {
                      setGeneralPrefs({ ...generalPrefs, timezone: val });
                      message.success("Timezone updated");
                    }}
                    style={{ width: "100%", height: 44 }}
                  >
                    <Option value="GMT+1 (West Africa Standard Time)">
                      GMT+1 (West Africa Standard Time)
                    </Option>
                    <Option value="GMT+0 (Greenwich Mean Time)">
                      GMT+0 (Greenwich Mean Time)
                    </Option>
                    <Option value="GMT+2 (Central Africa Time)">
                      GMT+2 (Central Africa Time)
                    </Option>
                    <Option value="GMT-5 (Eastern Standard Time)">
                      GMT-5 (Eastern Standard Time)
                    </Option>
                  </Select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Spin>
    </ConfigProvider>
  );
};

export default SettingsPage;

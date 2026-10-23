import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import TY_IMG from "../../../assets/img/ty.png";
import AlertComponent, {
  NotificationProvider,
} from "../../../components/alert/AlertComponent";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslation } from "react-i18next";
import userService from "../../../services/userService";
import { getApiErrorMessage } from "../../../utils/apiError";

const Logup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
  });
  const [confirmePassword, setConfirmePassword] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Password visibility toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmePassword, setShowConfirmePassword] = useState(false);

  const history = useNavigate();
  const { t } = useTranslation();
  const { showNotification } = AlertComponent();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePasswordBlur = () => {
    if (confirmePassword) {
      setIsPasswordMatch(formData.password === confirmePassword);
    }
  };

  const isFormValid = Boolean(
    formData.firstname.trim() &&
    formData.lastname.trim() &&
    formData.phone.trim() &&
    formData.email.trim() &&
    formData.password &&
    confirmePassword &&
    formData.password === confirmePassword &&
    agreeTerms,
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== confirmePassword) {
      setIsPasswordMatch(false);
      return;
    }
    if (!agreeTerms) {
      return;
    }

    setStatus("loading");
    setError(null);
    try {
      const res = await userService.register({ ...formData, email: formData.email.trim() });
      if (res.status === 201) {
        showNotification(t("signup.success", "Inscription réussie"), "success");
        setStatus("success");
        history(`/activation-account?email=${encodeURIComponent(formData.email.trim())}`);
      } else {
        setStatus("error");
        setError(
          t(
            "signup.error_message",
            "Email, numéro ou nom d'utilisateur déjà utilisé",
          ),
        );
      }
    } catch (err) {
      setStatus("error");
      setError(
        getApiErrorMessage(
          err,
          t("signup.error_message", "Email, numéro ou nom d'utilisateur déjà utilisé"),
        ),
      );
    }
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-[#fafafc]">
      {/* Left Column: 3D Cameroon Map (ty.png) filling completely */}
      <div className="hidden md:block md:w-1/2 relative min-h-screen bg-[#0e1c2e]">
        <img
          src={TY_IMG}
          alt={t("signup.map_alt", "Cameroon 3D Investment Map")}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      {/* Right Column: Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-8 md:py-12 overflow-y-auto">
        <div className="max-w-[440px] w-full mx-auto">
          {/* Section Header */}
          <div className="mb-6 text-center">
            <span className="text-[11px] font-bold tracking-widest text-gray-400 uppercase block mb-1">
              {t("signup.get_started", "GET STARTED")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a0c4f] tracking-tight mb-2">
              {t(
                "signup.create_investor_account",
                "Create your investor account",
              )}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-normal">
              {t(
                "signup.account_desc",
                "Your account gives you one secure place to manage your investor profile and projects.",
              )}
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white border border-gray-200/80 rounded-xl p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            <NotificationProvider>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Surname */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    {t("signup.surname_label", "Surname")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    required
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder={t(
                      "signup.surname_placeholder",
                      "enter first name",
                    )}
                    className="w-full px-3.5 py-[14px] text-sm text-gray-900 bg-white border border-gray-300 rounded-[4px] focus:outline-none focus:border-[#1a0c4f] focus:ring-1 focus:ring-[#1a0c4f] placeholder:text-gray-400 transition"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    {t("signup.lastname_label", "Last name")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    required
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder={t(
                      "signup.lastname_placeholder",
                      "enter last name(s)",
                    )}
                    className="w-full px-3.5 py-[14px] text-sm text-gray-900 bg-white border border-gray-300 rounded-[4px] focus:outline-none focus:border-[#1a0c4f] focus:ring-1 focus:ring-[#1a0c4f] placeholder:text-gray-400 transition"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    {t("signup.phone_label", "Phone number")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="w-full">
                    <PhoneInput
                      country={"cm"}
                      value={formData.phone}
                      onChange={(value: string) =>
                        setFormData({ ...formData, phone: value })
                      }
                      inputProps={{
                        required: true,
                        name: "phone",
                        id: "phone-input",
                      }}
                      containerStyle={{ width: "100%" }}
                      inputStyle={{
                        width: "100%",
                        height: "52px",
                        fontSize: "14px",
                        borderRadius: "4px",
                        border: "1px solid #c4c4c4",
                        paddingLeft: "48px",
                        backgroundColor: "#ffffff",
                        color: "#111827",
                      }}
                      buttonStyle={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #c4c4c4",
                        borderRight: "none",
                        borderRadius: "4px 0 0 4px",
                        padding: "0 4px",
                      }}
                      dropdownStyle={{
                        zIndex: 50,
                        borderRadius: "6px",
                        textAlign: "left",
                      }}
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    {t("signup.email_label", "Email Address")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t(
                      "signup.email_placeholder",
                      "example@gmail.com",
                    )}
                    className="w-full px-3.5 py-[14px] text-sm text-gray-900 bg-white border border-gray-300 rounded-[4px] focus:outline-none focus:border-[#1a0c4f] focus:ring-1 focus:ring-[#1a0c4f] placeholder:text-gray-400 transition"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    {t("signup.password_label", "Password")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      onBlur={handlePasswordBlur}
                      placeholder="••••••••••••"
                      className="w-full px-3.5 py-[14px] pr-10 text-sm text-gray-900 bg-white border border-gray-300 rounded-[4px] focus:outline-none focus:border-[#1a0c4f] focus:ring-1 focus:ring-[#1a0c4f] placeholder:text-gray-400 transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition"
                    >
                      {showPassword ? (
                        <VisibilityOff sx={{ fontSize: 18 }} />
                      ) : (
                        <Visibility sx={{ fontSize: 18 }} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    {t("signup.confirm_password_label", "Confirm Password")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmePassword ? "text" : "password"}
                      name="confirmePassword"
                      required
                      value={confirmePassword}
                      onChange={(e) => {
                        setConfirmePassword(e.target.value);
                        setIsPasswordMatch(
                          formData.password === e.target.value,
                        );
                      }}
                      placeholder="••••••••••••"
                      className={`w-full px-3.5 py-[14px] pr-10 text-sm text-gray-900 bg-white border ${!isPasswordMatch && confirmePassword ? "border-red-400 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-[#1a0c4f] focus:ring-[#1a0c4f]"} rounded-[4px] focus:outline-none focus:ring-1 placeholder:text-gray-400 transition`}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmePassword(!showConfirmePassword)
                      }
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition"
                    >
                      {showConfirmePassword ? (
                        <VisibilityOff sx={{ fontSize: 18 }} />
                      ) : (
                        <Visibility sx={{ fontSize: 18 }} />
                      )}
                    </button>
                  </div>
                  {!isPasswordMatch && confirmePassword && (
                    <p className="text-[11px] text-red-500 mt-1">
                      {t("signup.password_mismatch", "Passwords do not match")}
                    </p>
                  )}
                </div>

                {/* Password Rules Box */}
                <div className="bg-[#f8f9fc] border border-gray-100 rounded-md p-3">
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    {t(
                      "signup.password_hint",
                      "Password must contain at least 8 characters, one uppercase letter, one number, and one special character.",
                    )}
                  </p>
                </div>

                {/* Terms of Use Checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="agree-terms"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#1a0c4f] focus:ring-[#1a0c4f] accent-[#1a0c4f] cursor-pointer"
                  />
                  <label
                    htmlFor="agree-terms"
                    className="text-xs text-gray-600 leading-normal cursor-pointer select-none"
                  >
                    {t(
                      "signup.terms_agreement",
                      "I agree to the terms of use and declare that the information provided will be accurate.",
                    )}
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading" || !isFormValid}
                  className="w-full mt-4 bg-[#140638] hover:bg-[#250d61] disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-sm font-semibold py-[12px] px-4 rounded-[8px] transition duration-150 flex items-center justify-center gap-2 shadow-sm uppercase tracking-wide"
                >
                  {status === "loading" ? (
                    <>
                      <CircularProgress size={16} sx={{ color: "white" }} />
                      <span>{t("signup.button_loading", "Loading...")}</span>
                    </>
                  ) : (
                    <span>{t("signup.button_create_account", "Create Account")}</span>
                  )}
                </button>
              </form>
            </NotificationProvider>
          </div>

          {/* Footer Link */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-600">
              {t("signup.already_registered", "Already registered?")}{" "}
              <NavLink
                to="/signin"
                className="text-[#1a0c4f] font-semibold underline hover:text-indigo-900 transition"
              >
                {t("signup.sign_in_link", "Sign in")}
              </NavLink>
            </p>
          </div>
        </div>
      </div>

      {/* Error Toast */}
      {error && (
        <NotificationProvider>
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-red-500 text-white px-4 py-2 rounded shadow-lg text-sm">
              {error}
            </div>
          </div>
        </NotificationProvider>
      )}
    </section>
  );
};

export default Logup;

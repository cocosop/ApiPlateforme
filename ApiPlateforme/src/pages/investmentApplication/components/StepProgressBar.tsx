import React from "react";
import { CheckOutlined } from "@ant-design/icons";

export interface StepItem {
  id: number;
  label: string;
}

interface StepProgressBarProps {
  currentStep: number; // 1-based (1..8)
}

const STEPS: StepItem[] = [
  { id: 1, label: "Application" },
  { id: 2, label: "Company" },
  { id: 3, label: "Projects" },
  { id: 4, label: "Location" },
  { id: 5, label: "Financing" },
  { id: 6, label: "Impact" },
  { id: 7, label: "Documents" },
  { id: 8, label: "Validation" },
];

const PRIMARY = "#0F0B60";

const StepProgressBar: React.FC<StepProgressBarProps> = ({ currentStep }) => {
  const percent = Math.round((currentStep / 8) * 100);
  const activeStepLabel = STEPS[currentStep - 1]?.label || "";

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: "20px 24px",
        marginBottom: 24,
        border: "1px solid #ECEAF5",
        boxShadow: "0 1px 3px rgba(15, 11, 96, 0.04)",
        width: "100%",
      }}
    >
      {/* Top row: step label + percent */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 14,
        }}
      >
        <span style={{ fontSize: 13, color: "#6B7280", fontWeight: 500 }}>
          Step {currentStep} of 8 :{" "}
          <span style={{ color: PRIMARY, fontWeight: 700 }}>
            {activeStepLabel}
          </span>
        </span>
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: PRIMARY,
            letterSpacing: "0.04em",
          }}
        >
          {percent}% COMPLETE
        </span>
      </div>

      {/* Progress bar line (exact height: 3px requested) */}
      <div
        style={{
          background: "#ECEAF5",
          borderRadius: 999,
          height: 3,
          marginBottom: 20,
          overflow: "hidden",
          width: "100%",
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            height: "100%",
            background: PRIMARY,
            borderRadius: 999,
            transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>

      {/* 8 Steps tabs spanning the full width of the progress bar */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(8, minmax(0, 1fr))",
          gap: 6,
          width: "100%",
        }}
      >
        {STEPS.map((step) => {
          const isCompleted = step.id < currentStep;
          const isActive = step.id === currentStep;
          const isFuture = step.id > currentStep;

          return (
            <div
              key={step.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                padding: "7px 4px",
                borderRadius: 6,
                background: isActive || isCompleted ? PRIMARY : "#F3F4F6",
                color: isActive || isCompleted ? "#fff" : "#6B7280",
                fontSize: 12,
                fontWeight: 600,
                textAlign: "center",
                width: "100%",
                boxSizing: "border-box",
                transition: "all 0.2s",
              }}
            >
              {/* Icon / number circle */}
              <span
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  border:
                    isCompleted || isActive ? "none" : "1.5px solid #D1D5DB",
                  background: isCompleted
                    ? "rgba(255,255,255,0.25)"
                    : isActive
                      ? "rgba(255,255,255,0.2)"
                      : "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  fontWeight: 700,
                  color: isActive || isCompleted ? "#fff" : "#9CA3AF",
                  flexShrink: 0,
                }}
              >
                {isCompleted ? (
                  <CheckOutlined style={{ fontSize: 9 }} />
                ) : (
                  `0${step.id}`
                )}
              </span>
              <span
                style={{
                  color: isFuture ? "#6B7280" : "#fff",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontSize: 12,
                }}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepProgressBar;

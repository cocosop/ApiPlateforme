import React, { useState } from 'react';
import { Button } from 'antd';
import { CheckCircleFilled, EditOutlined, SendOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const PRIMARY = '#0F0B60';

interface SectionSummary {
  id: string;
  stepNumber: number;
  label: string;
  summary: string;
}

const SECTIONS: SectionSummary[] = [
  { id: 'applicant',  stepNumber: 1, label: 'Applicant',  summary: 'Personal information provided' },
  { id: 'company',   stepNumber: 2, label: 'Company',    summary: 'Company information provided' },
  { id: 'project',   stepNumber: 3, label: 'Project',    summary: 'Project profile & classification' },
  { id: 'location',  stepNumber: 4, label: 'Location',   summary: 'One location verified on map' },
  { id: 'financing', stepNumber: 5, label: 'Financing',  summary: 'Financing plan 100% allocated' },
  { id: 'impact',    stepNumber: 6, label: 'Impact',     summary: 'Jobs, workforce & ESG impact provided' },
  { id: 'documents', stepNumber: 7, label: 'Documents',  summary: 'Required documents uploaded' },
];

interface Step8Props {
  onBack: () => void;
  onSubmit: () => void;
  isEdit?: boolean;
  projectReference?: string;
  onJumpToStep?: (step: number) => void;
}

const Step8Validation: React.FC<Step8Props> = ({ onBack, onSubmit, isEdit, projectReference, onJumpToStep }) => {
  const navigate  = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    const ref = projectReference || `#API-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 900) + 100).padStart(3, '0')}`;
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '80px 40px',
          background: '#fff',
          borderRadius: 12,
          border: '1px solid #ECEAF5',
          boxShadow: '0 2px 8px rgba(15, 11, 96, 0.05)',
        }}
      >
        <CheckCircleFilled style={{ fontSize: 72, color: '#16A34A', marginBottom: 24 }} />
        <h2 style={{ fontSize: 26, fontWeight: 800, color: '#111827', marginBottom: 10 }}>
          {isEdit ? 'Application Updated!' : 'Application Submitted!'}
        </h2>
        <p style={{ fontSize: 14, color: '#6B7280', maxWidth: 460, margin: '0 auto 28px' }}>
          {isEdit
            ? 'Your application changes have been saved and sent to the API Cameroon team.'
            : 'Your application has been received by the API Cameroon team. You will receive a confirmation email shortly.'}
        </p>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 24px', background: '#ECEAF8', borderRadius: 8, border: `1px solid #C6C2EB`, marginBottom: 32 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: PRIMARY }}>Reference: {ref}</span>
        </div>
        <br />
        <Button
          type="primary"
          onClick={() => navigate('/investor-portal/projects')}
          style={{ height: 42, borderRadius: 8, background: PRIMARY, border: 'none', fontWeight: 700, paddingLeft: 32, paddingRight: 32 }}
        >
          Back to Projects
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: '#111827', margin: 0 }}>
          {isEdit ? 'Review your updated application' : 'Review your application'}
        </h2>
        <p style={{ fontSize: 13, color: '#6B7280', margin: '6px 0 0' }}>
          Check each section before {isEdit ? 'saving' : 'submitting'}. You can edit any part of your application with the edit buttons.
        </p>
      </div>

      {/* Section review list */}
      <div
        style={{
          background: '#fff',
          border: '1px solid #ECEAF5',
          borderRadius: 12,
          overflow: 'hidden',
          marginBottom: 24,
          boxShadow: '0 1px 3px rgba(15, 11, 96, 0.04)',
        }}
      >
        {SECTIONS.map((section, idx) => {
          const isLast = idx === SECTIONS.length - 1;
          return (
            <div
              key={section.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '18px 24px',
                borderBottom: isLast ? 'none' : '1px solid #F5F5F5',
              }}
            >
              {/* Checkmark */}
              <CheckCircleFilled style={{ fontSize: 22, color: PRIMARY, flexShrink: 0 }} />

              {/* Section info */}
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: '#111827' }}>{section.label}</div>
                <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 2 }}>{section.summary}</div>
              </div>

              {/* Edit button */}
              <Button
                icon={<EditOutlined />}
                onClick={() => onJumpToStep?.(section.stepNumber)}
                style={{
                  height: 34,
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  border: '1.5px solid #E5E7EB',
                  color: PRIMARY,
                  background: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                Edit
              </Button>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 20,
          borderTop: '1px solid #ECEAF5',
        }}
      >
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={onBack}
          style={{ height: 40, borderRadius: 8, border: '1px solid #D1D5DB', color: '#374151', display: 'flex', alignItems: 'center' }}
        >
          Back
        </Button>

        <Button
          type="primary"
          icon={<SendOutlined />}
          iconPosition="end"
          onClick={() => {
            setSubmitted(true);
            onSubmit();
          }}
          style={{
            height: 42,
            borderRadius: 8,
            fontWeight: 700,
            background: PRIMARY,
            border: 'none',
            paddingLeft: 32,
            paddingRight: 32,
            fontSize: 14,
          }}
        >
          {isEdit ? 'Save Changes' : 'Submit Application'}
        </Button>
      </div>
    </>
  );
};

export default Step8Validation;

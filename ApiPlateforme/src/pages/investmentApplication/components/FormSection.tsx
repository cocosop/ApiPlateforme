import React from 'react';

interface FormSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({ title, subtitle, children }) => {
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #F0F0F0',
        borderRadius: 12,
        padding: '28px 32px',
        marginBottom: 20,
      }}
    >
      <div style={{ marginBottom: 24 }}>
        <h3 style={{ fontSize: 17, fontWeight: 700, color: '#111827', margin: 0 }}>{title}</h3>
        {subtitle && (
          <p style={{ fontSize: 13, color: '#6B7280', margin: '4px 0 0 0' }}>{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  );
};

export default FormSection;

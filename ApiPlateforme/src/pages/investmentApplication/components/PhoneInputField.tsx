import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface PhoneInputFieldProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const PhoneInputField: React.FC<PhoneInputFieldProps> = ({
  value = '',
  onChange,
  placeholder = '699 00 11 22',
  disabled = false,
}) => {
  return (
    <div style={{ width: '100%' }}>
      <PhoneInput
        country="cm"
        value={value}
        onChange={(val) => onChange?.(val ? (val.startsWith('+') ? val : `+${val}`) : '')}
        disabled={disabled}
        enableSearch
        searchPlaceholder="Search country..."
        searchNotFound="No country found"
        prefix="+"
        placeholder={placeholder}
        containerStyle={{
          width: '100%',
          fontFamily: "'Inter', 'Segoe UI', sans-serif",
        }}
        inputStyle={{
          width: '100%',
          height: '42px',
          fontSize: '13px',
          borderRadius: '8px',
          border: '1px solid #d9d9d9',
          paddingLeft: '48px',
          backgroundColor: '#fff',
          color: '#111827',
          transition: 'all 0.2s',
        }}
        buttonStyle={{
          backgroundColor: '#FAFAFA',
          border: '1px solid #d9d9d9',
          borderRight: 'none',
          borderRadius: '8px 0 0 8px',
          padding: '0 4px',
        }}
        dropdownStyle={{
          zIndex: 2000,
          borderRadius: '8px',
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.08)',
          width: '320px',
        }}
      />
    </div>
  );
};

export default PhoneInputField;

import React, { useState, useEffect } from 'react';
import { Form, Input, Select, DatePicker } from 'antd';
import FormSection from '../components/FormSection';
import NavigationButtons from '../components/NavigationButtons';
import PhoneInputField from '../components/PhoneInputField';
import { WORLD_COUNTRIES } from '../constants/countriesAndCurrencies';

const INVESTOR_TYPES = [
  { value: 'local_individual',    label: 'Local Individual Investor' },
  { value: 'local_group',         label: 'Local Group of Companies' },
  { value: 'foreign_individual',  label: 'Foreign Individual Investors' },
  { value: 'foreign_group',       label: 'Foreign group of Companies' },
  { value: 'diaspora',            label: 'Diaspora' },
];

interface Step1Props {
  onNext: (vals?: any) => void;
  initialValues?: any;
  isEdit?: boolean;
}

const PRIMARY = '#0F0B60';

const Step1Application: React.FC<Step1Props> = ({ onNext, initialValues }) => {
  const [form] = Form.useForm();
  const [investorType, setInvestorType] = useState<string>(initialValues?.investorType || 'local_group');

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue({
        ...initialValues,
        surname: initialValues.surname || initialValues.firstName || initialValues.firstname || '',
        lastName: initialValues.lastName || initialValues.lastname || '',
        countryOfResidence: initialValues.countryOfResidence || initialValues.countryResidence || 'Cameroon',
      });
      if (initialValues.investorType) {
        setInvestorType(initialValues.investorType);
      }
    }
  }, [initialValues, form]);

  const handleNext = async () => {
    try {
      const vals = await form.validateFields();
      onNext({ applicant: { ...vals, investorType } });
    } catch (_) {}
  };

  const inputStyle: React.CSSProperties = {
    height: 42,
    borderRadius: 8,
    fontSize: 13,
  };

  const labelStyle: React.CSSProperties = {
    fontWeight: 600,
    fontSize: 13,
    color: '#374151',
  };

  return (
    <Form form={form} layout="vertical" requiredMark={false}>
      {/* How will you invest? */}
      <FormSection
        title="How will you invest?"
        subtitle="Select the option that best describes your investor profile."
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 12,
          }}
        >
          {INVESTOR_TYPES.map((type) => {
            const isSelected = investorType === type.value;
            return (
              <label
                key={type.value}
                onClick={() => setInvestorType(type.value)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '12px 16px',
                  border: `1.5px solid ${isSelected ? PRIMARY : '#D1D5DB'}`,
                  borderRadius: 8,
                  cursor: 'pointer',
                  background: isSelected ? '#ECEAF8' : '#fff',
                  transition: 'all 0.2s',
                }}
              >
                <div
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    border: `2px solid ${isSelected ? PRIMARY : '#D1D5DB'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {isSelected && (
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: PRIMARY,
                      }}
                    />
                  )}
                </div>
                <span style={{ fontSize: 13, color: '#374151', fontWeight: 500 }}>
                  {type.label}
                </span>
              </label>
            );
          })}
        </div>
      </FormSection>

      {/* Personal Information */}
      <FormSection
        title="Personal information"
        subtitle="This information is associated with your investor profile."
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
          {/* Surname */}
          <Form.Item
            name="surname"
            label={<span style={labelStyle}>Surname <span style={{ color: '#EF4444' }}>*</span></span>}
            rules={[{ required: true, message: 'Surname is required' }]}
          >
            <Input placeholder="enter first name" style={inputStyle} />
          </Form.Item>

          {/* Last Name */}
          <Form.Item
            name="lastName"
            label={<span style={labelStyle}>Last Name <span style={{ color: '#EF4444' }}>*</span></span>}
            rules={[{ required: true, message: 'Last name is required' }]}
          >
            <Input placeholder="enter last name(s)" style={inputStyle} />
          </Form.Item>

          {/* Nationality */}
          <Form.Item
            name="nationality"
            label={<span style={labelStyle}>Nationality <span style={{ color: '#EF4444' }}>*</span></span>}
            rules={[{ required: true, message: 'Nationality is required' }]}
            initialValue="Cameroon"
          >
            <Select
              showSearch
              style={{ height: 42 }}
              placeholder="Select nationality"
              optionFilterProp="label"
              filterOption={(input, option) =>
                String(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
              options={WORLD_COUNTRIES.map((c) => ({
                value: c.name,
                label: `${c.flag} ${c.name} (${c.dialCode})`,
              }))}
            />
          </Form.Item>

          {/* Country of Residence */}
          <Form.Item
            name="countryOfResidence"
            label={<span style={labelStyle}>Country of Residence <span style={{ color: '#EF4444' }}>*</span></span>}
            rules={[{ required: true, message: 'Country of residence is required' }]}
            initialValue="Cameroon"
          >
            <Select
              showSearch
              style={{ height: 42 }}
              placeholder="Select country"
              optionFilterProp="label"
              filterOption={(input, option) =>
                String(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
              options={WORLD_COUNTRIES.map((c) => ({
                value: c.name,
                label: `${c.flag} ${c.name}`,
              }))}
            />
          </Form.Item>

          {/* Date of Birth */}
          <Form.Item
            name="dateOfBirth"
            label={<span style={labelStyle}>Date of Birth <span style={{ color: '#EF4444' }}>*</span></span>}
            rules={[{ required: true, message: 'Date of birth is required' }]}
          >
            <DatePicker
              placeholder="dd/mm/yyyy"
              format="DD/MM/YYYY"
              style={{ width: '100%', height: 42, borderRadius: 8 }}
            />
          </Form.Item>

          {/* Phone number */}
          <Form.Item
            name="phone"
            label={<span style={labelStyle}>Phone number <span style={{ color: '#EF4444' }}>*</span></span>}
            rules={[{ required: true, message: 'Phone number is required' }]}
          >
            <PhoneInputField placeholder="699 00 11 22" />
          </Form.Item>

          {/* WhatsApp Number */}
          <Form.Item
            name="whatsapp"
            label={<span style={labelStyle}>WhatsApp Number</span>}
          >
            <PhoneInputField placeholder="699 00 11 22" />
          </Form.Item>

          {/* Email */}
          <Form.Item
            name="email"
            label={<span style={labelStyle}>Email Address <span style={{ color: '#EF4444' }}>*</span></span>}
            rules={[
              { required: true, message: 'Email is required' },
              { type: 'email', message: 'Invalid email' },
            ]}
          >
            <Input placeholder="example@gmail.com" style={inputStyle} />
          </Form.Item>

          {/* Full Address */}
          <Form.Item
            name="fullAddress"
            label={<span style={labelStyle}>Full Address <span style={{ color: '#EF4444' }}>*</span></span>}
            rules={[{ required: true, message: 'Address is required' }]}
          >
            <Input placeholder="enter full location address" style={inputStyle} />
          </Form.Item>

          {/* City */}
          <Form.Item
            name="city"
            label={<span style={labelStyle}>City <span style={{ color: '#EF4444' }}>*</span></span>}
            rules={[{ required: true, message: 'City is required' }]}
          >
            <Input placeholder="City location" style={inputStyle} />
          </Form.Item>
        </div>
      </FormSection>

      <NavigationButtons
        showBack={false}
        onNext={handleNext}
        nextLabel="Continue to Company"
      />
    </Form>
  );
};

export default Step1Application;

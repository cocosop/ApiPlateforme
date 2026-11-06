import React, { useEffect } from 'react';
import { Form, Input, Select, DatePicker, InputNumber } from 'antd';
import FormSection from '../components/FormSection';
import NavigationButtons from '../components/NavigationButtons';
import { WORLD_COUNTRIES } from '../constants/countriesAndCurrencies';

const { Option } = Select;
const { TextArea } = Input;

const LEGAL_FORMS = ['SARL', 'SA', 'SAS', 'SNC', 'GIE', 'Association', 'Cooperative', 'Other'];
const SECTORS     = ['Agriculture', 'Energy', 'Mining', 'Manufacturing', 'Services', 'Technology', 'Finance', 'Healthcare', 'Education'];

interface Step2Props {
  onNext: (vals?: any) => void;
  onBack: () => void;
  initialValues?: any;
  isEdit?: boolean;
}

const Step2Company: React.FC<Step2Props> = ({ onNext, onBack, initialValues }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue({
        ...initialValues,
        countryOfRegistration: initialValues.countryOfRegistration || initialValues.countryRegistration || 'Cameroon',
      });
    }
  }, [initialValues, form]);

  const handleNext = async () => {
    try {
      const vals = await form.validateFields();
      onNext({ company: vals });
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

  const Required = () => <span style={{ color: '#EF4444' }}> *</span>;

  return (
    <Form form={form} layout="vertical" requiredMark={false}>
      <FormSection
        title="Company information"
        subtitle="Tell us about the company you represent."
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>

          {/* Company Name */}
          <Form.Item
            name="companyName"
            label={<span style={labelStyle}>Company Name <Required /></span>}
            rules={[{ required: true, message: 'Company name is required' }]}
          >
            <Input placeholder="enter company name" style={inputStyle} />
          </Form.Item>

          {/* Legal Form */}
          <Form.Item
            name="legalForm"
            label={<span style={labelStyle}>Legal Form <Required /></span>}
            rules={[{ required: true, message: 'Legal form is required' }]}
          >
            <Select style={{ height: 42 }} placeholder="Select an option">
              {LEGAL_FORMS.map((f) => <Option key={f} value={f}>{f}</Option>)}
            </Select>
          </Form.Item>

          {/* Country of Registration */}
          <Form.Item
            name="countryOfRegistration"
            label={<span style={labelStyle}>Country of registration <Required /></span>}
            rules={[{ required: true, message: 'Country is required' }]}
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

          {/* Registration Number */}
          <Form.Item
            name="registrationNumber"
            label={<span style={labelStyle}>Registration Number <Required /></span>}
            rules={[{ required: true, message: 'Registration number is required' }]}
          >
            <Input placeholder="e.g. RC/YAO/2024/B/0000" style={inputStyle} />
          </Form.Item>

          {/* Tax Number */}
          <Form.Item
            name="taxNumber"
            label={<span style={labelStyle}>Tax Number <Required /></span>}
            rules={[{ required: true, message: 'Tax number is required' }]}
          >
            <Input placeholder="e.g. RC/YAO/2024/B/0000" style={inputStyle} />
          </Form.Item>

          {/* Date of Incorporation */}
          <Form.Item
            name="dateOfIncorporation"
            label={<span style={labelStyle}>Date of Incorporation <Required /></span>}
            rules={[{ required: true, message: 'Date is required' }]}
          >
            <DatePicker
              placeholder="dd/mm/yyyy"
              format="DD/MM/YYYY"
              style={{ width: '100%', height: 42, borderRadius: 8 }}
            />
          </Form.Item>

          {/* Head Office Address */}
          <Form.Item
            name="headOfficeAddress"
            label={<span style={labelStyle}>Head Office Address <Required /></span>}
            rules={[{ required: true, message: 'Address is required' }]}
          >
            <Input placeholder="enter head office address" style={inputStyle} />
          </Form.Item>

          {/* Website */}
          <Form.Item
            name="website"
            label={<span style={labelStyle}>Website <Required /></span>}
          >
            <Input placeholder="enter URL" style={inputStyle} />
          </Form.Item>

          {/* Business Sector */}
          <Form.Item
            name="businessSector"
            label={<span style={labelStyle}>Business Sector <Required /></span>}
            rules={[{ required: true, message: 'Business sector is required' }]}
          >
            <Select style={{ height: 42 }} placeholder="Select an option">
              {SECTORS.map((s) => <Option key={s} value={s}>{s}</Option>)}
            </Select>
          </Form.Item>

          {/* Number of Employees */}
          <Form.Item
            name="numberOfEmployees"
            label={<span style={labelStyle}>Number of Employees <Required /></span>}
            rules={[{ required: true, message: 'Required' }]}
          >
            <InputNumber
              min={0}
              placeholder="0"
              style={{ width: '100%', height: 42, borderRadius: 8 }}
            />
          </Form.Item>

          {/* Company Description (full width) */}
          <Form.Item
            name="description"
            label={<span style={labelStyle}>Company Description</span>}
            style={{ gridColumn: '1 / -1' }}
          >
            <TextArea
              rows={4}
              placeholder="Briefly describe the company and its activities."
              style={{ borderRadius: 8, fontSize: 13 }}
            />
          </Form.Item>
        </div>
      </FormSection>

      <NavigationButtons
        onBack={onBack}
        onNext={handleNext}
        nextLabel="Continue to Projects"
      />
    </Form>
  );
};

export default Step2Company;

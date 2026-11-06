import React, { useEffect } from 'react';
import { Form, Input, Select } from 'antd';
import FormSection from '../components/FormSection';
import NavigationButtons from '../components/NavigationButtons';

const { Option }   = Select;
const { TextArea } = Input;

const SECTORS      = ['Agriculture', 'Energy', 'Mining', 'Manufacturing', 'Services', 'Technology', 'Finance', 'Healthcare'];
const SUB_SECTORS  = ['Agro-processing', 'Cocoa', 'Coffee', 'Timber', 'Palm Oil', 'Livestock', 'Fisheries'];
const ACTIVITIES   = ['Production', 'Processing', 'Distribution', 'Export', 'Research', 'Consulting'];
const PROJECT_TYPES = ['Greenfield', 'Expansion', 'Rehabilitation', 'Joint Venture', 'Public-Private Partnership'];
const STATUSES     = ['Concept', 'Feasibility Study', 'Ready to Implement', 'Under Implementation'];

interface Step3Props {
  onNext: (vals?: any) => void;
  onBack: () => void;
  initialValues?: any;
  isEdit?: boolean;
}

const Step3Project: React.FC<Step3Props> = ({ onNext, onBack, initialValues }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues, form]);

  const handleNext = async () => {
    try {
      const vals = await form.validateFields();
      onNext({ project: vals });
    } catch (_) {}
  };

  const inputStyle: React.CSSProperties = { height: 42, borderRadius: 8, fontSize: 13 };
  const labelStyle: React.CSSProperties = { fontWeight: 600, fontSize: 13, color: '#374151' };
  const Required = () => <span style={{ color: '#EF4444' }}> *</span>;

  return (
    <Form form={form} layout="vertical" requiredMark={false}>
      <FormSection
        title="Tell us about your investment project"
        subtitle="Use clear, specific information so the investment team can understand the opportunity."
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>

          {/* Project Name */}
          <Form.Item
            name="projectName"
            label={<span style={labelStyle}>Project name <Required /></span>}
            rules={[{ required: true, message: 'Project name is required' }]}
          >
            <Input placeholder="Enter project name" style={inputStyle} />
          </Form.Item>

          {/* Business Sector */}
          <Form.Item
            name="businessSector"
            label={<span style={labelStyle}>Business Sector <Required /></span>}
            rules={[{ required: true, message: 'Sector is required' }]}
          >
            <Select style={{ height: 42 }} placeholder="Select an option">
              {SECTORS.map((s) => <Option key={s} value={s}>{s}</Option>)}
            </Select>
          </Form.Item>

          {/* Sub Sector */}
          <Form.Item
            name="subSector"
            label={<span style={labelStyle}>Sub Sector <Required /></span>}
            rules={[{ required: true, message: 'Sub sector is required' }]}
          >
            <Select style={{ height: 42 }} placeholder="Select an option">
              {SUB_SECTORS.map((s) => <Option key={s} value={s}>{s}</Option>)}
            </Select>
          </Form.Item>

          {/* Activity */}
          <Form.Item
            name="activity"
            label={<span style={labelStyle}>Activity <Required /></span>}
            rules={[{ required: true, message: 'Activity is required' }]}
          >
            <Select style={{ height: 42 }} placeholder="Select an option">
              {ACTIVITIES.map((a) => <Option key={a} value={a}>{a}</Option>)}
            </Select>
          </Form.Item>

          {/* Project Type */}
          <Form.Item
            name="projectType"
            label={<span style={labelStyle}>Project Type <Required /></span>}
            rules={[{ required: true, message: 'Project type is required' }]}
          >
            <Select style={{ height: 42 }} placeholder="Select an option">
              {PROJECT_TYPES.map((t) => <Option key={t} value={t}>{t}</Option>)}
            </Select>
          </Form.Item>

          {/* Project Status */}
          <Form.Item
            name="projectStatus"
            label={<span style={labelStyle}>Project Status <Required /></span>}
            rules={[{ required: true, message: 'Status is required' }]}
          >
            <Select style={{ height: 42 }} placeholder="Select an option">
              {STATUSES.map((s) => <Option key={s} value={s}>{s}</Option>)}
            </Select>
          </Form.Item>

          {/* Main Option */}
          <Form.Item
            name="mainOption"
            label={<span style={labelStyle}>Main Option <Required /></span>}
            style={{ gridColumn: '1 / -1' }}
          >
            <TextArea
              rows={4}
              placeholder="Explain the main objective"
              style={{ borderRadius: 8, fontSize: 13 }}
            />
          </Form.Item>

          {/* Project Description */}
          <Form.Item
            name="projectDescription"
            label={<span style={labelStyle}>Project Description <Required /></span>}
            rules={[{ required: true, message: 'Description is required' }]}
            style={{ gridColumn: '1 / -1' }}
          >
            <TextArea
              rows={4}
              placeholder="Describe your investment project"
              style={{ borderRadius: 8, fontSize: 13 }}
            />
          </Form.Item>
        </div>
      </FormSection>

      <NavigationButtons
        onBack={onBack}
        onNext={handleNext}
        nextLabel="Continue to Location"
      />
    </Form>
  );
};

export default Step3Project;

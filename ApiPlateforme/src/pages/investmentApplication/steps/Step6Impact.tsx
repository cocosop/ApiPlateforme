import React, { useEffect } from 'react';
import { Form, Input, InputNumber, DatePicker, Checkbox } from 'antd';
import FormSection from '../components/FormSection';
import NavigationButtons from '../components/NavigationButtons';

const { TextArea } = Input;

const TARGET_MARKETS = ['Cameroon', 'Africa', 'Central Africa', 'International'];

const BENEFITS = [
  ['Tax Incentives',            'Customs exemptions'],
  ['Administrative facilitation','Land acquisition'],
  ['License support',           'Local partners'],
  ['Industrial zones',          'Visa assistance'],
  ['PPP',                       'Other'],
];

interface Step6Props {
  onNext: (vals?: any) => void;
  onBack: () => void;
  initialValues?: any;
  isEdit?: boolean;
}

const Step6Impact: React.FC<Step6Props> = ({ onNext, onBack, initialValues }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues, form]);

  const handleNext = async () => {
    try {
      const vals = await form.validateFields();
      onNext({ impact: vals });
    } catch (_) {}
  };

  const labelStyle: React.CSSProperties = { fontWeight: 600, fontSize: 13, color: '#374151' };
  const Required = () => <span style={{ color: '#EF4444' }}> *</span>;

  const sectionLabel = (text: string) => (
    <div style={{ fontWeight: 700, fontSize: 13, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>
      {text} <span style={{ fontWeight: 400, fontSize: 12, textTransform: 'none', letterSpacing: 0, color: '#9CA3AF' }}>(Select option)</span>
    </div>
  );

  return (
    <Form form={form} layout="vertical" requiredMark={false}>
      <FormSection
        title="Describe the impact of your project"
        subtitle="Help us understand the jobs, markets and wider benefits this investment will create."
      >
        {/* Row 1 : Project duration + Start Date */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
          <Form.Item
            name="projectDuration"
            label={<span style={labelStyle}>Project duration <Required /></span>}
            rules={[{ required: true, message: 'Required' }]}
          >
            <Input placeholder="e.g. 24 months" style={{ height: 42, borderRadius: 8 }} />
          </Form.Item>

          <Form.Item
            name="plannedStartDate"
            label={<span style={labelStyle}>Estimated Planned Start Date <Required /></span>}
            rules={[{ required: true, message: 'Required' }]}
          >
            <DatePicker
              placeholder="dd/mm/yyyy"
              format="DD/MM/YYYY"
              style={{ width: '100%', height: 42, borderRadius: 8 }}
            />
          </Form.Item>

          {/* Row 2 : Jobs + Local workforce */}
          <Form.Item
            name="estimatedJobs"
            label={<span style={labelStyle}>Estimated Number of Jobs <Required /></span>}
            rules={[{ required: true, message: 'Required' }]}
          >
            <InputNumber min={0} defaultValue={0} style={{ width: '100%', borderRadius: 8 }} />
          </Form.Item>

          <Form.Item
            name="localWorkforce"
            label={<span style={labelStyle}>Local workforce percentage</span>}
          >
            <InputNumber
              min={0} max={100} defaultValue={0}
              formatter={(v) => `${v}%`}
              parser={(v) => Number((v || '').replace('%', '')) as 0 | 100}
              style={{ width: '100%', borderRadius: 8 }}
            />
          </Form.Item>

          {/* Row 3 : Partners + Other */}
          <Form.Item name="partners" label={<span style={labelStyle}>Partners</span>}>
            <InputNumber min={0} defaultValue={0} style={{ width: '100%', borderRadius: 8 }} />
          </Form.Item>

          <Form.Item name="other" label={<span style={labelStyle}>Other</span>}>
            <InputNumber min={0} defaultValue={0} style={{ width: '100%', borderRadius: 8 }} />
          </Form.Item>
        </div>

        {/* Target Markets */}
        <div style={{ marginTop: 8, marginBottom: 20 }}>
          {sectionLabel('TARGET MARKETS')}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 40px' }}>
            {TARGET_MARKETS.map((m) => (
              <Form.Item key={m} name={['targetMarkets', m]} valuePropName="checked" style={{ margin: 0 }}>
                <Checkbox style={{ fontSize: 13, color: '#374151' }}>{m}</Checkbox>
              </Form.Item>
            ))}
          </div>
        </div>

        {/* Economic, Social, Environmental Impact */}
        {[
          { name: 'economicImpact',    label: 'Economic impact',     placeholder: 'Describe the economic contribution of the project' },
          { name: 'socialImpact',      label: 'Social Impact',       placeholder: 'Describe the social benefits' },
          { name: 'environmentalImpact', label: 'Environmental Impact', placeholder: 'Describe the environment approach' },
        ].map(({ name, label, placeholder }) => (
          <Form.Item
            key={name}
            name={name}
            label={<span style={labelStyle}>{label} <Required /></span>}
            rules={[{ required: true, message: 'Required' }]}
            style={{ marginBottom: 16 }}
          >
            <TextArea rows={4} placeholder={placeholder} style={{ borderRadius: 8, fontSize: 13 }} />
          </Form.Item>
        ))}

        {/* Benefits Sought */}
        <div style={{ marginTop: 4 }}>
          {sectionLabel('BENEFITS SOUGHT')}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 40px' }}>
            {BENEFITS.flat().map((benefit) => (
              <Form.Item key={benefit} name={['benefits', benefit]} valuePropName="checked" style={{ margin: 0 }}>
                <Checkbox style={{ fontSize: 13, color: '#374151' }}>{benefit}</Checkbox>
              </Form.Item>
            ))}
          </div>
        </div>
      </FormSection>

      <NavigationButtons onBack={onBack} onNext={handleNext} nextLabel="Continue to Documents" />
    </Form>
  );
};

export default Step6Impact;

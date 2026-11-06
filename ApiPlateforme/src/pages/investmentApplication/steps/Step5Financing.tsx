import React, { useState, useEffect } from 'react';
import { Form, Select, InputNumber } from 'antd';
import FormSection from '../components/FormSection';
import NavigationButtons from '../components/NavigationButtons';
import { WORLD_CURRENCIES } from '../constants/countriesAndCurrencies';

interface FundingSources {
  personalFunds: number;
  bankFinancing: number;
  partners: number;
  other: number;
}

interface Step5Props {
  onNext: (vals?: any) => void;
  onBack: () => void;
  initialValues?: any;
  isEdit?: boolean;
}

const Step5Financing: React.FC<Step5Props> = ({ onNext, onBack, initialValues }) => {
  const [form] = Form.useForm();
  const [totalAmount, setTotalAmount] = useState<number>(initialValues?.totalAmount || 0);
  const [currency, setCurrency]       = useState<string>(initialValues?.currency || 'FCFA');
  const [sources, setSources]         = useState<FundingSources>(
    initialValues?.sources || {
      personalFunds: 0,
      bankFinancing: 0,
      partners:      0,
      other:         0,
    }
  );

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
      if (initialValues.totalAmount !== undefined) setTotalAmount(initialValues.totalAmount);
      if (initialValues.currency) setCurrency(initialValues.currency);
      if (initialValues.sources) setSources(initialValues.sources);
    }
  }, [initialValues, form]);

  const totalFunding = Object.values(sources).reduce((a, b) => a + b, 0);
  const allocatedPct = totalAmount > 0 ? Math.min(100, Math.round((totalFunding / totalAmount) * 100)) : 0;
  const isComplete   = allocatedPct === 100;

  const handleNext = async () => {
    try {
      const vals = await form.validateFields();
      onNext({ financing: { ...vals, totalAmount, currency, sources } });
    } catch (_) {}
  };

  const labelStyle: React.CSSProperties = { fontWeight: 600, fontSize: 13, color: '#374151' };
  const Required = () => <span style={{ color: '#EF4444' }}> *</span>;

  const numStyle: React.CSSProperties = {
    width: '100%',
    borderRadius: 8,
  };

  return (
    <Form form={form} layout="vertical" requiredMark={false}>
      <FormSection
        title="How will the project be financed?"
        subtitle="Provide the total investment amount and show how it will be allocated across your funding sources."
      >
        {/* Currency + Total */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px', marginBottom: 8 }}>
          <Form.Item
            name="currency"
            label={<span style={labelStyle}>Currency <Required /></span>}
            rules={[{ required: true, message: 'Please select a currency' }]}
            initialValue="FCFA"
          >
            <Select
              showSearch
              style={{ height: 42 }}
              placeholder="Select currency"
              onChange={setCurrency}
              optionFilterProp="label"
              filterOption={(input, option) =>
                String(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
              options={WORLD_CURRENCIES.map((c) => ({
                value: c.code,
                label: `${c.flag} ${c.code} (${c.symbol}) - ${c.name}`,
              }))}
            />
          </Form.Item>

          <Form.Item
            name="totalAmount"
            label={<span style={labelStyle}>Total Investment Amount <Required /></span>}
            rules={[{ required: true, message: 'Required' }]}
          >
            <InputNumber
              min={0}
              defaultValue={0}
              style={{ width: '100%', height: 42, borderRadius: 8 }}
              formatter={(v) => `${v}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              onChange={(v) => setTotalAmount(Number(v) || 0)}
            />
          </Form.Item>
        </div>

        {/* Funding Sources section */}
        <div
          style={{
            border: '1px solid #E5E7EB',
            borderRadius: 10,
            padding: '20px 20px 0',
            marginTop: 8,
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: '#111827' }}>Funding sources</div>
              <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 2 }}>
                Amounts should add up to the total investment.
              </div>
            </div>
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: isComplete ? '#16A34A' : '#EF4444',
              }}
            >
              {allocatedPct}% Allocated
            </span>
          </div>

          {/* 4 source inputs */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px', marginTop: 16 }}>
            {(
              [
                { key: 'personalFunds', label: 'Personal funds' },
                { key: 'bankFinancing', label: 'Bank financing' },
                { key: 'partners',      label: 'Partners' },
                { key: 'other',         label: 'Other' },
              ] as { key: keyof FundingSources; label: string }[]
            ).map(({ key, label }) => (
              <Form.Item key={key} label={<span style={labelStyle}>{label}</span>}>
                <InputNumber
                  min={0}
                  value={sources[key]}
                  style={numStyle}
                  formatter={(v) => `${v}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  onChange={(v) => setSources((prev) => ({ ...prev, [key]: Number(v) || 0 }))}
                />
              </Form.Item>
            ))}
          </div>

          {/* Total funding bar */}
          <div
            style={{
              background: '#ECEAF8',
              borderRadius: '0 0 10px 10px',
              padding: '14px 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: '4px -20px 0',
            }}
          >
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: 1 }}>
                TOTAL FUNDING
              </div>
              <div style={{ fontSize: 18, fontWeight: 800, color: '#111827' }}>
                {totalFunding.toLocaleString()} {currency}
              </div>
            </div>
            <span style={{ fontSize: 13, color: isComplete ? '#16A34A' : '#6B7280', fontWeight: 500 }}>
              {isComplete
                ? '✓ Fully allocated'
                : `Add funding sources until 100% is allocated.`}
            </span>
          </div>
        </div>
      </FormSection>

      <NavigationButtons onBack={onBack} onNext={handleNext} nextLabel="Continue to Impact" />
    </Form>
  );
};

export default Step5Financing;

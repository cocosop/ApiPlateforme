import React, { useState, useEffect } from 'react';
import { Form, Input, Select } from 'antd';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { EnvironmentFilled } from '@ant-design/icons';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import FormSection from '../components/FormSection';
import NavigationButtons from '../components/NavigationButtons';

// Fix Leaflet default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const { Option } = Select;

const REGIONS = [
  'Adamaoua', 'Centre', 'Est', 'Extrême-Nord', 'Littoral',
  'Nord', 'Nord-Ouest', 'Ouest', 'Sud', 'Sud-Ouest',
];

const CITIES: Record<string, string[]> = {
  Centre:    ['Yaoundé', 'Mbalmayo', 'Obala', 'Bafia'],
  Littoral:  ['Douala', 'Edéa', 'Nkongsamba', 'Loum'],
  Adamaoua:  ['Ngaoundéré', 'Meiganga', 'Tibati'],
  Nord:      ['Garoua', 'Guider', 'Pitoa'],
  Est:       ['Bertoua', 'Batouri', 'Abong-Mbang'],
  Ouest:     ['Bafoussam', 'Dschang', 'Mbouda', 'Foumban'],
  'Nord-Ouest': ['Bamenda', 'Kumbo', 'Wum'],
  'Sud-Ouest':  ['Buea', 'Limbe', 'Kumba'],
  Sud:       ['Ebolowa', 'Sangmélima', 'Kribi'],
  'Extrême-Nord': ['Maroua', 'Mokolo', 'Kousseri'],
};

const PRECISE_LOCATIONS = ['Urban area', 'Peri-urban area', 'Rural area', 'Industrial zone', 'Agricultural zone'];

interface LocationState {
  lat: number;
  lng: number;
}

// Map click handler component
const MapClickHandler: React.FC<{ onLocationSelect: (loc: LocationState) => void }> = ({ onLocationSelect }) => {
  useMapEvents({
    click(e) {
      onLocationSelect({ lat: e.latlng.lat, lng: e.latlng.lng });
    },
  });
  return null;
};

interface Step4Props {
  onNext: (vals?: any) => void;
  onBack: () => void;
  initialValues?: any;
  isEdit?: boolean;
}

const PRIMARY = '#0F0B60';
const DEFAULT_CENTER: [number, number] = [3.848, 11.5021]; // Cameroon center

const Step4Location: React.FC<Step4Props> = ({ onNext, onBack, initialValues }) => {
  const [form] = Form.useForm();
  const [selectedRegion, setSelectedRegion] = useState<string>(initialValues?.region || '');
  const [markerPos, setMarkerPos] = useState<LocationState>({
    lat: initialValues?.lat || DEFAULT_CENTER[0],
    lng: initialValues?.lng || DEFAULT_CENTER[1],
  });

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
      if (initialValues.region) {
        setSelectedRegion(initialValues.region);
      }
      if (initialValues.lat && initialValues.lng) {
        setMarkerPos({ lat: initialValues.lat, lng: initialValues.lng });
      }
    }
  }, [initialValues, form]);

  const handleNext = async () => {
    try {
      const vals = await form.validateFields();
      onNext({ location: { ...vals, region: selectedRegion, lat: markerPos.lat, lng: markerPos.lng } });
    } catch (_) {}
  };

  const inputStyle: React.CSSProperties = { height: 42, borderRadius: 8, fontSize: 13 };
  const labelStyle: React.CSSProperties = { fontWeight: 600, fontSize: 13, color: '#374151' };
  const Required = () => <span style={{ color: '#EF4444' }}> *</span>;

  const availableCities = selectedRegion ? CITIES[selectedRegion] ?? [] : [];

  return (
    <Form form={form} layout="vertical" requiredMark={false}>
      <FormSection
        title="Where will the project be located?"
        subtitle="Choose the administrative location, then place the marker as precisely as possible on the map."
      >
        {/* Location fields */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px', marginBottom: 20 }}>

          {/* Region */}
          <Form.Item
            name="region"
            label={<span style={labelStyle}>Region <Required /></span>}
            rules={[{ required: true, message: 'Region is required' }]}
          >
            <Select
              style={{ height: 42 }}
              placeholder="Select region"
              onChange={(val) => {
                setSelectedRegion(val);
                form.setFieldValue('city', undefined);
              }}
            >
              {REGIONS.map((r) => <Option key={r} value={r}>{r}</Option>)}
            </Select>
          </Form.Item>

          {/* City */}
          <Form.Item
            name="city"
            label={<span style={labelStyle}>City <Required /></span>}
            rules={[{ required: true, message: 'City is required' }]}
          >
            <Select style={{ height: 42 }} placeholder="Select an option" disabled={!selectedRegion}>
              {availableCities.map((c) => <Option key={c} value={c}>{c}</Option>)}
            </Select>
          </Form.Item>

          {/* Precise Location */}
          <Form.Item
            name="preciseLocation"
            label={<span style={labelStyle}>Precise Location <Required /></span>}
          >
            <Select style={{ height: 42 }} placeholder="Select an option">
              {PRECISE_LOCATIONS.map((p) => <Option key={p} value={p}>{p}</Option>)}
            </Select>
          </Form.Item>

          {/* Site Address */}
          <Form.Item
            name="siteAddress"
            label={<span style={labelStyle}>Site Address <Required /></span>}
            rules={[{ required: true, message: 'Site address is required' }]}
          >
            <Input placeholder="Road, neighborhood or landmark" style={inputStyle} />
          </Form.Item>
        </div>

        {/* Map */}
        <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #E5E7EB' }}>
          <MapContainer
            center={DEFAULT_CENTER}
            zoom={13}
            style={{ height: 320, width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[markerPos.lat, markerPos.lng]} />
            <MapClickHandler onLocationSelect={setMarkerPos} />
          </MapContainer>
        </div>

        {/* Location info bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 12,
            padding: '10px 16px',
            background: '#F9FAFB',
            borderRadius: 8,
            border: '1px solid #E5E7EB',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <EnvironmentFilled style={{ color: PRIMARY, fontSize: 16 }} />
            <span style={{ fontSize: 13, color: '#374151', fontWeight: 500 }}>
              Location selected
            </span>
            <span style={{ fontSize: 12, color: '#6B7280' }}>
              Move the marker to refine the project site.
            </span>
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 10, color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
                LATITUDE
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>
                {markerPos.lat.toFixed(4)}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 10, color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
                LONGITUDE
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>
                {markerPos.lng.toFixed(4)}
              </div>
            </div>
          </div>
        </div>
      </FormSection>

      <NavigationButtons
        onBack={onBack}
        onNext={handleNext}
        nextLabel="Continue to Financing"
      />
    </Form>
  );
};

export default Step4Location;

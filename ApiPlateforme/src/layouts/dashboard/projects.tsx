import React, { useState, useEffect, useMemo } from 'react';
import {
  Table,
  Button,
  Input,
  Select,
  Space,
  Tooltip,
  Popconfirm,
  message,
  Typography,
  Spin,
  Radio,
  Card,
  Row,
  Col,
  Empty,
  Tag,
  Progress,
  Statistic,
  Badge,
  Divider,
  Popover,
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {
  SearchOutlined,
  FilterOutlined,
  EditOutlined,
  EyeOutlined,
  DeleteOutlined,
  AppstoreAddOutlined,
  UnorderedListOutlined,
  AppstoreOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  DollarOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  FileTextOutlined,
  MessageOutlined,
  ArrowUpOutlined,
  RiseOutlined,
  FundProjectionScreenOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import StatusTag, { ProjectStatus } from '../../pages/investmentApplication/components/StatusTag';
import projectService, { BackendProject, ProjectStageModel, ProjectDocModel } from '../../services/projectService';

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

// ── Types ───────────────────────────────────────────────────────────────────
interface ProjectRow {
  key: string;
  id: number;
  reference: string;
  name: string;
  sector: string;
  region: string;
  city: string;
  quartier?: string;
  description: string;
  submissionDate: string;
  rawDate: string;
  dateDebut?: string;
  dateFin?: string;
  amount: string;
  rawAmount: number;
  budget: string;
  rawBudget: number;
  roi: number;
  status: ProjectStatus;
  rawStatus: string;
  progressPercent: number;
  stages: ProjectStageModel[];
  documents: ProjectDocModel[];
  hasChat: boolean;
}

const PRIMARY = '#0F0B60';

const SECTORS = [
  'All Sectors',
  'Agriculture',
  'Energy',
  'Mining',
  'Manufacturing',
  'Technology',
  'Digital',
  'Logistics',
  'Services',
  'Finance',
];

const REGIONS = [
  'All Regions',
  'Adamaoua',
  'Centre',
  'Est',
  'Extrême-Nord',
  'Littoral',
  'Nord',
  'Nord-Ouest',
  'Ouest',
  'Sud',
  'Sud-Ouest',
];

const STATUSES = ['All Statuses', 'active', 'under review', 'Rejected', 'Submitted'];
const SORTS = [
  'Newest Update',
  'Oldest Update',
  'Budget (High to Low)',
  'Budget (Low to High)',
  'ROI (High to Low)',
];

const SECTOR_TAG_COLORS: Record<string, string> = {
  Agriculture: 'green',
  Energy: 'orange',
  Mining: 'purple',
  Manufacturing: 'geekblue',
  Technology: 'cyan',
  Digital: 'blue',
  Logistics: 'volcano',
  Services: 'magenta',
  Finance: 'gold',
};

const mapBackendStatus = (backendStatus?: string): ProjectStatus => {
  switch (backendStatus) {
    case 'ACCEPTED':
      return 'active';
    case 'STUDYING':
      return 'under review';
    case 'REJECTED':
      return 'Rejected';
    case 'PENDING':
    default:
      return 'Submitted';
  }
};

const calculateProgress = (backendStatus?: string, stages?: ProjectStageModel[]): number => {
  if (stages && stages.length > 0) {
    const completed = stages.filter((s) => s.status === 'COMPLETED').length;
    return Math.round((completed / stages.length) * 100);
  }
  switch (backendStatus) {
    case 'ACCEPTED':
      return 100;
    case 'STUDYING':
      return 65;
    case 'REJECTED':
      return 100;
    case 'PENDING':
    default:
      return 25;
  }
};

const formatDate = (dateStr?: string) => {
  if (!dateStr) return 'N/A';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
};

const isEditable = (status: ProjectStatus) =>
  status === 'active' || status === 'Submitted' || status === 'Pending';

//  Main Component 
const ProjectsAchievements: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All Statuses');
  const [sector, setSector] = useState('All Sectors');
  const [region, setRegion] = useState('All Regions');
  const [sort, setSort] = useState('Newest Update');
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ProjectRow[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (status !== 'All Statuses') count++;
    if (sector !== 'All Sectors') count++;
    if (region !== 'All Regions') count++;
    if (sort !== 'Newest Update') count++;
    return count;
  }, [status, sector, region, sort]);

  const handleResetFilters = () => {
    setStatus('All Statuses');
    setSector('All Sectors');
    setRegion('All Regions');
    setSort('Newest Update');
    setSearch('');
  };

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await projectService.fetchAllProjects();
      const list: BackendProject[] = Array.isArray(res.data) ? res.data : [];
      const mapped: ProjectRow[] = list.map((p, idx) => {
        const dateObj = p.soumissionDate ? new Date(p.soumissionDate) : (p.createdAt ? new Date(p.createdAt) : new Date());
        const year = dateObj.getFullYear();
        const refNumber = String(p.id || idx + 1).padStart(3, '0');
        const budgetNum = p.budget || p.montant || 0;
        const personalNum = p.montant || 0;

        return {
          key: String(p.id || p.titre),
          id: p.id || idx + 1,
          reference: `#API-${year}-${refNumber}`,
          name: p.titre,
          sector: p.secteur || 'General',
          region: p.region || 'Centre',
          city: p.ville || 'Yaoundé',
          quartier: p.quartier || '',
          description: p.description || 'No description provided.',
          submissionDate: formatDate(p.soumissionDate || p.createdAt),
          rawDate: p.soumissionDate || p.createdAt || '',
          dateDebut: formatDate(p.dateDebut),
          dateFin: formatDate(p.dateFin),
          amount: personalNum > 0 ? `${personalNum.toLocaleString('en-US')} FCFA` : 'N/A',
          rawAmount: personalNum,
          budget: budgetNum > 0 ? `${budgetNum.toLocaleString('en-US')} FCFA` : 'N/A',
          rawBudget: budgetNum,
          roi: p.ROI || 0,
          status: mapBackendStatus(p.status),
          rawStatus: p.status || 'PENDING',
          progressPercent: calculateProgress(p.status, p.stages),
          stages: p.stages || [],
          documents: p.documents || [],
          hasChat: Boolean(p.hasChat),
        };
      });
      setData(mapped);
    } catch (err) {
      console.error('Failed to load projects from backend', err);
      message.error('Unable to fetch your projects from the server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Filter & sort logic
  const filtered = useMemo(() => {
    return data
      .filter((r) => {
        const query = search.toLowerCase();
        const matchSearch =
          r.name.toLowerCase().includes(query) ||
          r.reference.toLowerCase().includes(query) ||
          r.city.toLowerCase().includes(query) ||
          r.region.toLowerCase().includes(query) ||
          r.description.toLowerCase().includes(query);

        const matchStatus = status === 'All Statuses' || r.status === status;
        const matchSector = sector === 'All Sectors' || r.sector.toLowerCase() === sector.toLowerCase();
        const matchRegion = region === 'All Regions' || r.region.toLowerCase() === region.toLowerCase();

        return matchSearch && matchStatus && matchSector && matchRegion;
      })
      .sort((a, b) => {
        if (sort === 'Budget (High to Low)') return b.rawBudget - a.rawBudget;
        if (sort === 'Budget (Low to High)') return a.rawBudget - b.rawBudget;
        if (sort === 'ROI (High to Low)') return b.roi - a.roi;
        if (sort === 'Oldest Update') return a.rawDate.localeCompare(b.rawDate);
        return b.rawDate.localeCompare(a.rawDate);
      });
  }, [data, search, status, sector, region, sort]);

  // Statistics calculation
  const stats = useMemo(() => {
    const total = data.length;
    const active = data.filter((p) => p.status === 'active').length;
    const underReview = data.filter((p) => p.status === 'under review').length;
    const totalCapital = data.reduce((acc, p) => acc + (p.rawBudget || p.rawAmount || 0), 0);
    return { total, active, underReview, totalCapital };
  }, [data]);

  const handleDelete = async (titre: string) => {
    try {
      await projectService.disableProject(titre);
      message.success('Project disabled successfully.');
      fetchProjects();
    } catch (err) {
      message.error('Failed to disable project.');
    }
  };

  // ── Table columns with Rich Data 
  const columns: ColumnsType<ProjectRow> = [
    {
      title: <span style={colHeader}>REFERENCE</span>,
      dataIndex: 'reference',
      key: 'reference',
      width: 140,
      render: (v: string) => (
        <Tag
          style={{
            fontFamily: 'monospace',
            fontWeight: 700,
            fontSize: 12,
            color: PRIMARY,
            background: '#ECEAF8',
            border: '1px solid #C6C2EB',
            borderRadius: 6,
            padding: '2px 8px',
          }}
        >
          {v}
        </Tag>
      ),
    },
    {
      title: <span style={colHeader}>PROJECT & OVERVIEW</span>,
      dataIndex: 'name',
      key: 'name',
      render: (name: string, record) => (
        <div style={{ maxWidth: 280 }}>
          <div
            onClick={() => navigate(`/investor-portal/projects/${encodeURIComponent(name)}`)}
            style={{
              fontWeight: 700,
              fontSize: 14,
              color: '#111827',
              cursor: 'pointer',
              lineHeight: 1.3,
            }}
            className="hover:underline hover:text-[#0F0B60]"
          >
            {name}
          </div>
          <p
            style={{
              fontSize: 12,
              color: '#6B7280',
              margin: '3px 0 0',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {record.description}
          </p>
          <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
            {record.hasChat && (
              <Tag color="purple" style={{ fontSize: 10, padding: '0 6px', borderRadius: 4 }}>
                <MessageOutlined style={{ marginRight: 3 }} /> Chat Open
              </Tag>
            )}
            {record.documents.length > 0 && (
              <Tag color="default" style={{ fontSize: 10, padding: '0 6px', borderRadius: 4 }}>
                <FileTextOutlined style={{ marginRight: 3 }} /> {record.documents.length} doc{record.documents.length > 1 ? 's' : ''}
              </Tag>
            )}
          </div>
        </div>
      ),
    },
    {
      title: <span style={colHeader}>SECTOR</span>,
      dataIndex: 'sector',
      key: 'sector',
      width: 130,
      render: (sec: string) => {
        const color = SECTOR_TAG_COLORS[sec] || 'default';
        return (
          <Tag color={color} style={{ fontWeight: 600, fontSize: 12, borderRadius: 6, padding: '2px 8px' }}>
            {sec}
          </Tag>
        );
      },
    },
    {
      title: <span style={colHeader}>LOCATION</span>,
      key: 'location',
      width: 160,
      render: (_, r) => (
        <div>
          <div style={{ fontWeight: 600, fontSize: 13, color: '#111827', display: 'flex', alignItems: 'center', gap: 4 }}>
            <EnvironmentOutlined style={{ color: PRIMARY, fontSize: 12 }} />
            <span>{r.city}</span>
          </div>
          <div style={{ fontSize: 11, color: '#6B7280', paddingLeft: 16 }}>
            {r.region}{r.quartier ? ` · ${r.quartier}` : ''}
          </div>
        </div>
      ),
    },
    {
      title: <span style={colHeader}>FINANCING / BUDGET</span>,
      dataIndex: 'budget',
      key: 'budget',
      width: 170,
      render: (budget: string, r) => (
        <div>
          <div style={{ fontWeight: 700, fontSize: 13, color: PRIMARY }}>
            {budget}
          </div>
          {r.rawAmount > 0 && r.amount !== budget && (
            <div style={{ fontSize: 11, color: '#6B7280' }}>
              Equity: {r.amount}
            </div>
          )}
          {r.roi > 0 && (
            <Tag color="cyan" style={{ fontSize: 10, marginTop: 2, padding: '0 4px', borderRadius: 4 }}>
              <RiseOutlined /> {r.roi}% ROI
            </Tag>
          )}
        </div>
      ),
    },
    {
      title: <span style={colHeader}>REVIEW PROGRESS</span>,
      dataIndex: 'progressPercent',
      key: 'progressPercent',
      width: 150,
      render: (pct: number, r) => {
        let stroke = PRIMARY;
        if (r.rawStatus === 'ACCEPTED') stroke = '#16A34A';
        else if (r.rawStatus === 'REJECTED') stroke = '#DC2626';
        else if (r.rawStatus === 'STUDYING') stroke = '#D97706';

        return (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 2 }}>
              <span style={{ color: '#6B7280' }}>Stage</span>
              <span style={{ fontWeight: 700, color: stroke }}>{pct}%</span>
            </div>
            <Progress percent={pct} showInfo={false} strokeColor={stroke} size="small" />
          </div>
        );
      },
    },
    {
      title: <span style={colHeader}>DATE</span>,
      dataIndex: 'submissionDate',
      key: 'submissionDate',
      width: 120,
      render: (date: string) => (
        <span style={{ color: '#4B5563', fontSize: 12, fontWeight: 500 }}>
          {date}
        </span>
      ),
    },
    {
      title: <span style={colHeader}>STATUS</span>,
      dataIndex: 'status',
      key: 'status',
      width: 130,
      render: (v: ProjectStatus) => <StatusTag status={v} />,
    },
    {
      title: <span style={colHeader}>ACTIONS</span>,
      key: 'action',
      width: 140,
      align: 'right',
      render: (_, record) => (
        <Space size={4}>
          <Tooltip title="View Project Details">
            <Button
              type="text"
              icon={<EyeOutlined style={{ color: '#4B5563', fontSize: 15 }} />}
              onClick={() => navigate(`/investor-portal/projects/${encodeURIComponent(record.name)}`)}
              style={{ width: 32, height: 32 }}
            />
          </Tooltip>
          {isEditable(record.status) && (
            <Tooltip title="Edit Application">
              <Button
                type="text"
                icon={<EditOutlined style={{ color: PRIMARY, fontSize: 15 }} />}
                onClick={() => navigate(`/investor-portal/project-application/edit/${encodeURIComponent(record.name)}`)}
                style={{ width: 32, height: 32 }}
              />
            </Tooltip>
          )}
          {record.hasChat && (
            <Tooltip title="Open Project Chat">
              <Button
                type="text"
                icon={<MessageOutlined style={{ color: '#7C3AED', fontSize: 15 }} />}
                onClick={() => navigate(`/investor-portal/messages?chat=${encodeURIComponent(record.name)}`)}
                style={{ width: 32, height: 32 }}
              />
            </Tooltip>
          )}
          {isEditable(record.status) && (
            <Tooltip title="Disable Project">
              <Popconfirm
                title="Disable this project?"
                description="This project will be archived and hidden from active review."
                onConfirm={() => handleDelete(record.name)}
                okText="Yes, disable"
                cancelText="Cancel"
                okButtonProps={{ danger: true }}
              >
                <Button
                  type="text"
                  icon={<DeleteOutlined style={{ color: '#EF4444', fontSize: 15 }} />}
                  style={{ width: 32, height: 32 }}
                />
              </Popconfirm>
            </Tooltip>
          )}
        </Space>
      ),
    },
  ];

  return (
    <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 0 50px', fontFamily: "'Poppins','Inter',sans-serif" }}>
      {/* Top Banner & Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 24,
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: '#111827', margin: 0, letterSpacing: '-0.02em' }}>
            Investment Projects Directory
          </h1>
          <p style={{ fontSize: 13, color: '#6B7280', margin: '4px 0 0' }}>
            Comprehensive overview, tracking, and management of all your investment applications.
          </p>
        </div>

        <Button
          type="primary"
          icon={<AppstoreAddOutlined />}
          onClick={() => navigate('/investor-portal/project-application')}
          style={{
            height: 44,
            borderRadius: 10,
            fontWeight: 700,
            background: PRIMARY,
            border: 'none',
            fontSize: 14,
            paddingLeft: 22,
            paddingRight: 22,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            boxShadow: '0 2px 8px rgba(15, 11, 96, 0.2)',
          }}
        >
          Create New Project
        </Button>
      </div>

      {/* KPI Overview Metric Cards */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={12} sm={6}>
          <Card
            bordered={false}
            style={{
              borderRadius: 12,
              background: '#fff',
              border: '1px solid #ECEAF5',
              boxShadow: '0 1px 3px rgba(15, 11, 96, 0.04)',
            }}
            bodyStyle={{ padding: '16px 20px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: 12, color: '#6B7280', fontWeight: 600 }}>TOTAL APPLICATIONS</span>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#111827', marginTop: 4 }}>
                  {stats.total}
                </div>
              </div>
              <div style={{ width: 42, height: 42, borderRadius: 10, background: '#ECEAF8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: PRIMARY }}>
                <FundProjectionScreenOutlined style={{ fontSize: 20 }} />
              </div>
            </div>
          </Card>
        </Col>

        <Col xs={12} sm={6}>
          <Card
            bordered={false}
            style={{
              borderRadius: 12,
              background: '#fff',
              border: '1px solid #ECEAF5',
              boxShadow: '0 1px 3px rgba(15, 11, 96, 0.04)',
            }}
            bodyStyle={{ padding: '16px 20px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: 12, color: '#6B7280', fontWeight: 600 }}>ACTIVE & APPROVED</span>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#16A34A', marginTop: 4 }}>
                  {stats.active}
                </div>
              </div>
              <div style={{ width: 42, height: 42, borderRadius: 10, background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16A34A' }}>
                <CheckCircleOutlined style={{ fontSize: 20 }} />
              </div>
            </div>
          </Card>
        </Col>

        <Col xs={12} sm={6}>
          <Card
            bordered={false}
            style={{
              borderRadius: 12,
              background: '#fff',
              border: '1px solid #ECEAF5',
              boxShadow: '0 1px 3px rgba(15, 11, 96, 0.04)',
            }}
            bodyStyle={{ padding: '16px 20px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: 12, color: '#6B7280', fontWeight: 600 }}>UNDER REVIEW</span>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#D97706', marginTop: 4 }}>
                  {stats.underReview}
                </div>
              </div>
              <div style={{ width: 42, height: 42, borderRadius: 10, background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D97706' }}>
                <ClockCircleOutlined style={{ fontSize: 20 }} />
              </div>
            </div>
          </Card>
        </Col>

        <Col xs={12} sm={6}>
          <Card
            bordered={false}
            style={{
              borderRadius: 12,
              background: '#fff',
              border: '1px solid #ECEAF5',
              boxShadow: '0 1px 3px rgba(15, 11, 96, 0.04)',
            }}
            bodyStyle={{ padding: '16px 20px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: 12, color: '#6B7280', fontWeight: 600 }}>TOTAL CAPITAL DECLARED</span>
                <div style={{ fontSize: 18, fontWeight: 800, color: PRIMARY, marginTop: 4 }}>
                  {stats.totalCapital > 0 ? `${(stats.totalCapital / 1000000).toFixed(1)}M FCFA` : '0 FCFA'}
                </div>
              </div>
              <div style={{ width: 42, height: 42, borderRadius: 10, background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7C3AED' }}>
                <DollarOutlined style={{ fontSize: 20 }} />
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Advanced Filter Toolbar */}
      <div
        style={{
          background: '#fff',
          borderRadius: 12,
          padding: '16px 20px',
          marginBottom: 20,
          border: '1px solid #ECEAF5',
          boxShadow: '0 1px 3px rgba(15, 11, 96, 0.04)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          {/* Left: Search input + All filters placed under the exact filter icon */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', flex: 1 }}>
            <Input
              prefix={<SearchOutlined style={{ color: '#9CA3AF' }} />}
              placeholder="Search by project, reference, city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: 280, height: 40, borderRadius: 8, fontSize: 13 }}
              allowClear
            />

            {/* Exact Filter Icon Button with all filters dropdown under it */}
            <Popover
              trigger="click"
              placement="bottomLeft"
              open={filterOpen}
              onOpenChange={setFilterOpen}
              content={
                <div style={{ width: 330, padding: '4px 2px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: 14,
                      paddingBottom: 10,
                      borderBottom: '1px solid #F0F0F0',
                    }}
                  >
                    <span style={{ fontWeight: 700, fontSize: 14, color: '#111827', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <FilterOutlined style={{ color: PRIMARY, fontSize: 16 }} />
                      Filter Options
                    </span>
                    {activeFilterCount > 0 && (
                      <Button
                        type="link"
                        size="small"
                        onClick={handleResetFilters}
                        style={{ color: '#EF4444', padding: 0, height: 'auto', fontSize: 12, fontWeight: 600 }}
                      >
                        Reset all
                      </Button>
                    )}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {/* Status Filter */}
                    <div>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#4B5563', marginBottom: 6 }}>
                        Project Status
                      </label>
                      <Select
                        value={status}
                        onChange={setStatus}
                        style={{ width: '100%', height: 38 }}
                      >
                        {STATUSES.map((s) => (
                          <Option key={s} value={s}>{s}</Option>
                        ))}
                      </Select>
                    </div>

                    {/* Sector Filter */}
                    <div>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#4B5563', marginBottom: 6 }}>
                        Business Sector
                      </label>
                      <Select
                        value={sector}
                        onChange={setSector}
                        style={{ width: '100%', height: 38 }}
                      >
                        {SECTORS.map((s) => (
                          <Option key={s} value={s}>{s}</Option>
                        ))}
                      </Select>
                    </div>

                    {/* Region Filter */}
                    <div>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#4B5563', marginBottom: 6 }}>
                        Region
                      </label>
                      <Select
                        value={region}
                        onChange={setRegion}
                        style={{ width: '100%', height: 38 }}
                      >
                        {REGIONS.map((r) => (
                          <Option key={r} value={r}>{r}</Option>
                        ))}
                      </Select>
                    </div>

                    {/* Sort Filter */}
                    <div>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#4B5563', marginBottom: 6 }}>
                        Sort Order
                      </label>
                      <Select
                        value={sort}
                        onChange={setSort}
                        style={{ width: '100%', height: 38 }}
                      >
                        {SORTS.map((s) => (
                          <Option key={s} value={s}>{s}</Option>
                        ))}
                      </Select>
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: 16,
                      paddingTop: 12,
                      borderTop: '1px solid #F0F0F0',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ fontSize: 12, color: '#6B7280' }}>
                      {filtered.length} project{filtered.length > 1 ? 's' : ''} found
                    </span>
                    <Button
                      type="primary"
                      size="small"
                      onClick={() => setFilterOpen(false)}
                      style={{ background: PRIMARY, borderColor: PRIMARY, borderRadius: 6, fontWeight: 600 }}
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              }
            >
              <Badge count={activeFilterCount} offset={[-2, 2]} color={PRIMARY}>
                <Button
                  icon={<FilterOutlined style={{ fontSize: 15, color: activeFilterCount > 0 ? PRIMARY : '#4B5563' }} />}
                  style={{
                    height: 40,
                    borderRadius: 8,
                    fontWeight: 600,
                    fontSize: 13,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    borderColor: activeFilterCount > 0 ? PRIMARY : '#D1D5DB',
                    color: activeFilterCount > 0 ? PRIMARY : '#374151',
                    background: activeFilterCount > 0 ? '#ECEAF8' : '#fff',
                  }}
                >
                  Filters
                </Button>
              </Badge>
            </Popover>

            {activeFilterCount > 0 && (
              <Button
                type="text"
                size="small"
                onClick={handleResetFilters}
                style={{ color: '#EF4444', fontSize: 12, fontWeight: 600, height: 32 }}
              >
                Clear all
              </Button>
            )}
          </div>

          {/* View Switcher: Table or Cards */}
          <Radio.Group
            value={viewMode}
            onChange={(e) => setViewMode(e.target.value)}
            buttonStyle="solid"
          >
            <Radio.Button value="table" style={{ height: 40, lineHeight: '38px', borderRadius: '8px 0 0 8px' }}>
              <UnorderedListOutlined style={{ marginRight: 6 }} /> Table
            </Radio.Button>
            <Radio.Button value="cards" style={{ height: 40, lineHeight: '38px', borderRadius: '0 8px 8px 0' }}>
              <AppstoreOutlined style={{ marginRight: 6 }} /> Cards
            </Radio.Button>
          </Radio.Group>
        </div>

        {/* Removable Active Filter Tags */}
        {(activeFilterCount > 0 || search) && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginTop: 12, paddingTop: 10, borderTop: '1px solid #F5F5F5' }}>
            <span style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 600 }}>Active filters:</span>
            {search && (
              <Tag closable onClose={() => setSearch('')} style={{ borderRadius: 6, padding: '2px 8px' }}>
                Search: "{search}"
              </Tag>
            )}
            {status !== 'All Statuses' && (
              <Tag closable onClose={() => setStatus('All Statuses')} color="purple" style={{ borderRadius: 6, padding: '2px 8px' }}>
                Status: {status}
              </Tag>
            )}
            {sector !== 'All Sectors' && (
              <Tag closable onClose={() => setSector('All Sectors')} color="blue" style={{ borderRadius: 6, padding: '2px 8px' }}>
                Sector: {sector}
              </Tag>
            )}
            {region !== 'All Regions' && (
              <Tag closable onClose={() => setRegion('All Regions')} color="cyan" style={{ borderRadius: 6, padding: '2px 8px' }}>
                Region: {region}
              </Tag>
            )}
            {sort !== 'Newest Update' && (
              <Tag closable onClose={() => setSort('Newest Update')} color="default" style={{ borderRadius: 6, padding: '2px 8px' }}>
                Sort: {sort}
              </Tag>
            )}
          </div>
        )}
      </div>

      <Spin spinning={loading}>
        {viewMode === 'table' ? (
          /* Rich Ant Design Table with Expandable Row */
          <div
            style={{
              background: '#fff',
              borderRadius: 12,
              border: '1px solid #ECEAF5',
              overflow: 'hidden',
              boxShadow: '0 1px 3px rgba(15, 11, 96, 0.04)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 24px',
                borderBottom: '1px solid #F0F0F0',
                background: '#FAFAFD',
              }}
            >
              <span style={{ fontWeight: 700, fontSize: 14, color: '#111827' }}>
                All Investment Applications ({filtered.length})
              </span>
              <span style={{ fontSize: 12, color: '#6B7280' }}>
                Click on any project to view quick summary or expand details
              </span>
            </div>

            <Table<ProjectRow>
              columns={columns}
              dataSource={filtered}
              pagination={{
                pageSize: 10,
                showSizeChanger: true,
                pageSizeOptions: ['10', '20', '50'],
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} projects`,
              }}
              rowKey="key"
              size="middle"
              style={{ padding: '0 4px' }}
              rowClassName={(_, i) => (i % 2 === 1 ? 'table-row-alt' : '')}
              expandable={{
                expandedRowRender: (record) => (
                  <div
                    style={{
                      padding: '16px 24px',
                      background: '#FAFAFC',
                      borderRadius: 8,
                      border: '1px solid #ECEAF5',
                      margin: '8px 12px',
                    }}
                  >
                    <Row gutter={[24, 16]}>
                      <Col xs={24} md={12}>
                        <h4 style={{ fontSize: 13, fontWeight: 700, color: PRIMARY, marginBottom: 6 }}>
                          Project Scope & Executive Summary
                        </h4>
                        <p style={{ fontSize: 13, color: '#4B5563', lineHeight: 1.6, margin: 0 }}>
                          {record.description}
                        </p>
                        <div style={{ marginTop: 12, display: 'flex', gap: 16 }}>
                          <div>
                            <span style={{ fontSize: 11, color: '#9CA3AF', display: 'block' }}>PLANNED START</span>
                            <span style={{ fontSize: 12, fontWeight: 600, color: '#111827' }}>{record.dateDebut || 'Pending schedule'}</span>
                          </div>
                          <div>
                            <span style={{ fontSize: 11, color: '#9CA3AF', display: 'block' }}>PLANNED COMPLETION</span>
                            <span style={{ fontSize: 12, fontWeight: 600, color: '#111827' }}>{record.dateFin || 'Pending schedule'}</span>
                          </div>
                        </div>
                      </Col>

                      <Col xs={24} md={12}>
                        <h4 style={{ fontSize: 13, fontWeight: 700, color: PRIMARY, marginBottom: 6 }}>
                          Technical & Location Details
                        </h4>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px', fontSize: 12 }}>
                          <div>
                            <span style={{ color: '#9CA3AF' }}>Region:</span> <strong style={{ color: '#111827' }}>{record.region}</strong>
                          </div>
                          <div>
                            <span style={{ color: '#9CA3AF' }}>City:</span> <strong style={{ color: '#111827' }}>{record.city}</strong>
                          </div>
                          <div>
                            <span style={{ color: '#9CA3AF' }}>Sector:</span> <strong style={{ color: '#111827' }}>{record.sector}</strong>
                          </div>
                          <div>
                            <span style={{ color: '#9CA3AF' }}>Estimated ROI:</span> <strong style={{ color: '#16A34A' }}>{record.roi}%</strong>
                          </div>
                          <div>
                            <span style={{ color: '#9CA3AF' }}>Total Budget:</span> <strong style={{ color: PRIMARY }}>{record.budget}</strong>
                          </div>
                          <div>
                            <span style={{ color: '#9CA3AF' }}>Equity Share:</span> <strong style={{ color: '#111827' }}>{record.amount}</strong>
                          </div>
                        </div>

                        <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
                          <Button
                            type="primary"
                            size="small"
                            icon={<EyeOutlined />}
                            onClick={() => navigate(`/investor-portal/projects/${encodeURIComponent(record.name)}`)}
                            style={{ background: PRIMARY, borderColor: PRIMARY, borderRadius: 6, fontWeight: 600 }}
                          >
                            Open Project Profile
                          </Button>
                          <Button
                            size="small"
                            icon={<MessageOutlined />}
                            onClick={() => navigate(`/investor-portal/messages?chat=${encodeURIComponent(record.name)}`)}
                            style={{ borderRadius: 6, fontWeight: 600 }}
                          >
                            Case Officer Discussion
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                ),
              }}
            />
          </div>
        ) : (
          /* Rich Card Grid View */
          <div>
            {filtered.length === 0 ? (
              <div style={{ background: '#fff', borderRadius: 12, padding: '60px 20px', textAlign: 'center' }}>
                <Empty description="No projects match your search or filter criteria." />
              </div>
            ) : (
              <Row gutter={[18, 18]}>
                {filtered.map((item) => (
                  <Col xs={24} sm={12} lg={8} key={item.key}>
                    <Card
                      hoverable
                      style={{
                        borderRadius: 14,
                        border: '1px solid #ECEAF5',
                        boxShadow: '0 2px 6px rgba(15, 11, 96, 0.04)',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                      bodyStyle={{ padding: 22, display: 'flex', flexDirection: 'column', height: '100%' }}
                    >
                      {/* Top Card Header */}
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                          <Tag style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: 11, color: PRIMARY, background: '#ECEAF8', borderRadius: 6 }}>
                            {item.reference}
                          </Tag>
                          <StatusTag status={item.status} />
                        </div>

                        <h3
                          onClick={() => navigate(`/investor-portal/projects/${encodeURIComponent(item.name)}`)}
                          style={{
                            fontSize: 17,
                            fontWeight: 700,
                            color: '#111827',
                            margin: '0 0 6px',
                            lineHeight: 1.3,
                            cursor: 'pointer',
                          }}
                          className="hover:text-[#0F0B60] hover:underline"
                        >
                          {item.name}
                        </h3>

                        <p
                          style={{
                            fontSize: 12,
                            color: '#6B7280',
                            margin: '0 0 14px',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            lineHeight: 1.5,
                          }}
                        >
                          {item.description}
                        </p>

                        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
                          <Tag color={SECTOR_TAG_COLORS[item.sector] || 'default'} style={{ borderRadius: 6, fontWeight: 600 }}>
                            {item.sector}
                          </Tag>
                          <Tag icon={<EnvironmentOutlined />} style={{ borderRadius: 6, color: '#4B5563' }}>
                            {item.city}, {item.region}
                          </Tag>
                          {item.roi > 0 && (
                            <Tag color="cyan" style={{ borderRadius: 6 }}>
                              {item.roi}% ROI
                            </Tag>
                          )}
                        </div>

                        {/* Financial Box */}
                        <div
                          style={{
                            background: '#F9FAFB',
                            borderRadius: 10,
                            padding: '12px 14px',
                            marginBottom: 16,
                            border: '1px solid #F3F4F6',
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                            <span style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 600 }}>TOTAL BUDGET</span>
                            <span style={{ fontSize: 15, fontWeight: 800, color: PRIMARY }}>{item.budget}</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: 11, color: '#9CA3AF' }}>Equity Share</span>
                            <span style={{ fontSize: 12, fontWeight: 600, color: '#4B5563' }}>{item.amount}</span>
                          </div>
                        </div>

                        {/* Review Progress */}
                        <div style={{ marginBottom: 16 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 4 }}>
                            <span style={{ color: '#6B7280' }}>Review Progress</span>
                            <span style={{ fontWeight: 700, color: PRIMARY }}>{item.progressPercent}%</span>
                          </div>
                          <Progress percent={item.progressPercent} showInfo={false} strokeColor={PRIMARY} size="small" />
                        </div>
                      </div>

                      {/* Card Action Buttons */}
                      <div
                        style={{
                          borderTop: '1px solid #F3F4F6',
                          paddingTop: 14,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginTop: 'auto',
                        }}
                      >
                        <span style={{ fontSize: 11, color: '#9CA3AF' }}>{item.submissionDate}</span>
                        <Space size={6}>
                          <Button
                            size="small"
                            icon={<EyeOutlined />}
                            onClick={() => navigate(`/investor-portal/projects/${encodeURIComponent(item.name)}`)}
                            style={{ borderRadius: 6, fontWeight: 600 }}
                          >
                            Details
                          </Button>
                          {isEditable(item.status) && (
                            <Button
                              type="primary"
                              size="small"
                              icon={<EditOutlined />}
                              onClick={() => navigate(`/investor-portal/project-application/edit/${encodeURIComponent(item.name)}`)}
                              style={{ borderRadius: 6, fontWeight: 600, background: PRIMARY, borderColor: PRIMARY }}
                            >
                              Edit
                            </Button>
                          )}
                          {isEditable(item.status) && (
                            <Popconfirm
                              title="Disable this project?"
                              description="Are you sure you want to disable this project?"
                              onConfirm={() => handleDelete(item.name)}
                              okText="Yes"
                              cancelText="Cancel"
                              okButtonProps={{ danger: true }}
                            >
                              <Button
                                danger
                                size="small"
                                icon={<DeleteOutlined />}
                                style={{ borderRadius: 6 }}
                              />
                            </Popconfirm>
                          )}
                        </Space>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </div>
        )}
      </Spin>

      {/* Inline style for alternating rows and clean Antd table theme */}
      <style>{`
        .table-row-alt td { background: #FAFAFD; }
        .ant-table-thead > tr > th {
          background: #F8F7FC !important;
          color: #6B7280;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          border-bottom: 1px solid #ECEAF5 !important;
          padding: 14px 16px !important;
        }
        .ant-table-tbody > tr > td {
          padding: 14px 16px !important;
          border-bottom: 1px solid #F3F4F6 !important;
        }
        .ant-table-tbody > tr:hover > td {
          background: #F5F3FF !important;
        }
        .ant-table-row-expand-icon {
          color: #0F0B60 !important;
        }
      `}</style>
    </div>
  );
};

// Column header style
const colHeader: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: '#6B7280',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
};

export default ProjectsAchievements;

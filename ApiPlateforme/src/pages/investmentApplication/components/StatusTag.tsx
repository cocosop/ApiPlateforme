import React from 'react';
import { Tag } from 'antd';

export type ProjectStatus = 'active' | 'under review' | 'Rejected' | 'Submitted' | 'Pending';

const STATUS_CONFIG: Record<
  ProjectStatus,
  { color: string; bg: string; border: string; label: string }
> = {
  active:         { color: '#15803D', bg: '#DCFCE7', border: '#BBF7D0', label: 'Active' },
  'under review': { color: '#B45309', bg: '#FEF3C7', border: '#FDE68A', label: 'Under Review' },
  Rejected:       { color: '#DC2626', bg: '#FEE2E2', border: '#FECACA', label: 'Rejected' },
  Submitted:      { color: '#0F0B60', bg: '#ECEAF8', border: '#C6C2EB', label: 'Submitted' },
  Pending:        { color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE', label: 'Pending' },
};

interface StatusTagProps {
  status: ProjectStatus;
}

const StatusTag: React.FC<StatusTagProps> = ({ status }) => {
  const cfg = STATUS_CONFIG[status] ?? STATUS_CONFIG['Pending'];
  return (
    <Tag
      style={{
        color: cfg.color,
        background: cfg.bg,
        border: `1px solid ${cfg.border}`,
        borderRadius: 999,
        fontWeight: 600,
        fontSize: 11,
        padding: '2px 10px',
        textTransform: 'capitalize',
      }}
    >
      {cfg.label}
    </Tag>
  );
};

export default StatusTag;

import React, { useState, useEffect } from 'react';
import { Button, message } from 'antd';
import { PlusOutlined, FileTextFilled, CheckCircleFilled, InfoCircleOutlined } from '@ant-design/icons';
import NavigationButtons from '../components/NavigationButtons';

export interface ProjectDocumentUpload {
  id: string;
  title: string;
  description: string;
  fileName: string;
  fileSize?: number;
  url_file: string; // Base64 data URI or remote link
}

interface DocConfig {
  id: string;
  title: string;
  description: string;
  required: boolean;
  accept: string;
  maxSize: string;
}

const DOCUMENTS: DocConfig[] = [
  {
    id:          'company_registration',
    title:       'Company registration documents',
    description: 'Upload the documents that establish your company.',
    required:    true,
    accept:      'PDF, DOCX, XLSX',
    maxSize:     '15 MB',
  },
  {
    id:          'feasibility',
    title:       'Project feasibility or concept note',
    description: 'Provide the most recent project presentation.',
    required:    true,
    accept:      'PDF, DOCX, XLSX',
    maxSize:     '15 MB',
  },
  {
    id:          'financial',
    title:       'Supporting financial documents',
    description: 'Optional documents supporting your financing plan.',
    required:    false,
    accept:      'PDF, DOCX, XLSX',
    maxSize:     '15 MB',
  },
];

interface Step7Props {
  onNext: (vals?: any) => void;
  onBack: () => void;
  initialValues?: ProjectDocumentUpload[] | any;
  isEdit?: boolean;
}

const PRIMARY = '#0F0B60';

const Step7Documents: React.FC<Step7Props> = ({ onNext, onBack, initialValues, isEdit }) => {
  const [uploaded, setUploaded] = useState<Record<string, ProjectDocumentUpload | null>>(() => {
    const initial: Record<string, ProjectDocumentUpload | null> = {};
    if (Array.isArray(initialValues)) {
      initialValues.forEach((d) => {
        if (d && (d.id || d.title)) {
          const key = d.id || (
            d.title.toLowerCase().includes('registration')
              ? 'company_registration'
              : d.title.toLowerCase().includes('feasibility')
              ? 'feasibility'
              : 'financial'
          );
          initial[key] = {
            id: key,
            title: d.title,
            description: d.description || d.title,
            fileName: d.fileName || d.description || `${d.title}.pdf`,
            fileSize: d.fileSize || 2500000,
            url_file: d.url_file || '',
          };
        }
      });
    }
    return initial;
  });

  useEffect(() => {
    if (Array.isArray(initialValues) && initialValues.length > 0) {
      setUploaded((prev) => {
        const next = { ...prev };
        initialValues.forEach((d) => {
          if (d && (d.id || d.title)) {
            const key = d.id || (
              d.title.toLowerCase().includes('registration')
                ? 'company_registration'
                : d.title.toLowerCase().includes('feasibility')
                ? 'feasibility'
                : 'financial'
            );
            if (!next[key]) {
              next[key] = {
                id: key,
                title: d.title,
                description: d.description || d.title,
                fileName: d.fileName || d.description || `${d.title}.pdf`,
                fileSize: d.fileSize || 2500000,
                url_file: d.url_file || '',
              };
            }
          }
        });
        return next;
      });
    }
  }, [initialValues]);

  // Pick and read file as Base64 Data URL
  const handleUpload = (docId: string) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.doc,.docx,.xls,.xlsx';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        if (file.size > 15 * 1024 * 1024) {
          message.error('File exceeds 15 MB limit.');
          return;
        }

        const docConfig = DOCUMENTS.find((d) => d.id === docId);
        const reader = new FileReader();
        reader.onload = () => {
          const base64Data = reader.result as string;
          setUploaded((prev) => ({
            ...prev,
            [docId]: {
              id: docId,
              title: docConfig?.title || docId,
              description: file.name,
              fileName: file.name,
              fileSize: file.size,
              url_file: base64Data,
            },
          }));
          message.success(`"${file.name}" uploaded successfully.`);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const handleNext = () => {
    const missing = DOCUMENTS.filter((d) => d.required && !uploaded[d.id]);
    if (missing.length > 0) {
      message.warning(`Please upload: ${missing.map((d) => d.title).join(', ')}`);
      return;
    }
    const docsList = Object.values(uploaded).filter(Boolean) as ProjectDocumentUpload[];
    onNext({ documents: docsList });
  };

  return (
    <>
      {/* Page section header */}
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: '#111827', margin: 0 }}>
          Add documents to support your application
        </h2>
        <p style={{ fontSize: 13, color: '#6B7280', margin: '6px 0 0' }}>
          Upload the documents available for your project. Required documents must be added before submission.
        </p>
      </div>

      {/* Document items */}
      <div
        style={{
          background: '#fff',
          border: '1px solid #F0F0F0',
          borderRadius: 12,
          overflow: 'hidden',
          marginBottom: 20,
        }}
      >
        {DOCUMENTS.map((doc, idx) => {
          const file = uploaded[doc.id];
          const isLast = idx === DOCUMENTS.length - 1;
          return (
            <div
              key={doc.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                padding: '24px 28px',
                borderBottom: isLast ? 'none' : '1px solid #F5F5F5',
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 10,
                  background: '#ECEAF8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {file
                  ? <CheckCircleFilled style={{ fontSize: 24, color: '#16A34A' }} />
                  : <FileTextFilled style={{ fontSize: 24, color: PRIMARY }} />
                }
              </div>

              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: '#111827', marginBottom: 4 }}>
                  {doc.title}
                </div>
                <div style={{ fontSize: 12, color: '#9CA3AF', marginBottom: 4 }}>
                  {doc.description}
                </div>
                <div style={{ fontSize: 11, fontWeight: 600, color: PRIMARY, letterSpacing: '0.03em' }}>
                  {doc.required ? 'REQUIRED' : 'OPTIONAL'} · {doc.accept} · MAX {doc.maxSize}
                </div>
                {file && (
                  <div style={{ fontSize: 12, color: '#16A34A', marginTop: 4, fontWeight: 600 }}>
                    ✓ {file.fileName} {file.fileSize ? `(${(file.fileSize / 1024 / 1024).toFixed(2)} MB)` : ''}
                  </div>
                )}
              </div>

              {/* Upload button */}
              <Button
                icon={<PlusOutlined />}
                onClick={() => handleUpload(doc.id)}
                style={{
                  height: 38,
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 13,
                  color: PRIMARY,
                  border: `1.5px solid ${PRIMARY}`,
                  background: '#fff',
                  paddingLeft: 16,
                  paddingRight: 16,
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                {file ? 'Replace Document' : '+ Upload Document'}
              </Button>
            </div>
          );
        })}
      </div>

      {/* Note */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 16, color: '#6B7280', fontSize: 12 }}>
        <InfoCircleOutlined style={{ marginTop: 2, flexShrink: 0 }} />
        <span>
          You can replace documents later. Files are securely associated with this application and sent to the API Cameroon server.
        </span>
      </div>

      <NavigationButtons onBack={onBack} onNext={handleNext} nextLabel="Continue to Validation" />
    </>
  );
};

export default Step7Documents;

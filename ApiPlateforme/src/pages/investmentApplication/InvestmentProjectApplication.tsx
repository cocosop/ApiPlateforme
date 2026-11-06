import React, { useState, useMemo, useEffect } from 'react';
import { Button, message, Spin } from 'antd';
import { ArrowLeftOutlined, SaveOutlined } from '@ant-design/icons';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import StepProgressBar from './components/StepProgressBar';
import Step1Application from './steps/Step1Application';
import Step2Company from './steps/Step2Company';
import Step3Project from './steps/Step3Project';
import Step4Location from './steps/Step4Location';
import Step5Financing from './steps/Step5Financing';
import Step6Impact from './steps/Step6Impact';
import Step7Documents from './steps/Step7Documents';
import Step8Validation from './steps/Step8Validation';
import projectService, { ProjectPayload } from '../../services/projectService';
import userService from '../../services/userService';
import docService from '../../services/docService';
import dayjs from 'dayjs';

const PRIMARY = '#0F0B60';
const TOTAL_STEPS = 8;

const InvestmentProjectApplication: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const location = useLocation();

  // Detect whether we are in EDIT mode
  const isEdit = useMemo(() => {
    return Boolean(id || location.pathname.includes('/edit'));
  }, [id, location.pathname]);

  const [loadingProject, setLoadingProject] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  // Application Data State: clean defaults, project fields start empty
  const [formData, setFormData] = useState<any>({
    applicant: {
      investorType: 'local_group',
      surname: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      whatsapp: '',
      nationality: 'Cameroon',
      countryOfResidence: 'Cameroon',
      dateOfBirth: undefined,
      fullAddress: '',
      city: '',
    },
    company: {
      companyName: '',
      legalForm: 'SARL',
      countryOfRegistration: 'Cameroon',
      registrationNumber: '',
      taxNumber: '',
      dateOfIncorporation: undefined,
      headOfficeAddress: '',
      website: '',
      businessSector: 'Agriculture',
      numberOfEmployees: undefined,
      description: '',
    },
    project: {
      projectName: '',
      projectType: undefined,
      sector: undefined,
      subSector: undefined,
      mainActivities: undefined,
      projectStatus: undefined,
      description: '',
    },
    location: {
      region: undefined,
      division: '',
      city: '',
      surfaceArea: '',
      landStatus: undefined,
      siteDescription: '',
      lat: 3.8480,
      lng: 11.5021,
    },
    financing: {
      currency: 'FCFA',
      totalAmount: 0,
      sources: {
        personalFunds: 0,
        bankFinancing: 0,
        partners: 0,
        other: 0,
      },
    },
    impact: {
      projectDuration: '',
      plannedStartDate: undefined,
      estimatedJobs: undefined,
      localWorkforce: undefined,
      partners: 0,
      other: 0,
      targetMarkets: {},
      economicImpact: '',
      socialImpact: '',
      environmentalImpact: '',
      benefits: {},
    },
    documents: [],
  });

  // Load backend project if edit mode, OR pre-fill from user profile & onboarding if creation mode
  useEffect(() => {
    if (isEdit && id) {
      const decodedId = decodeURIComponent(id).trim();
      setLoadingProject(true);
      projectService.getProject(decodedId)
        .then((res) => {
          const p = res.data;
          if (p) {
            setFormData((prev: any) => ({
              ...prev,
              reference: `#API-${new Date(p.soumissionDate || p.createdAt || '').getFullYear() || 2026}-${String(p.id).padStart(3, '0')}`,
              applicant: {
                ...prev.applicant,
                firstName: p.investor?.firstname || prev.applicant.firstName,
                surname: p.investor?.firstname || prev.applicant.surname,
                lastName: p.investor?.lastname || prev.applicant.lastName,
                email: p.investor?.email || prev.applicant.email,
              },
              company: {
                ...prev.company,
                companyName: p.titre,
                businessSector: p.secteur || 'Agriculture',
                description: p.description || '',
              },
              project: {
                ...prev.project,
                projectName: p.titre,
                sector: p.secteur || 'Agriculture',
                description: p.description || '',
              },
              location: {
                ...prev.location,
                region: p.region || 'Centre',
                city: p.ville || 'Yaoundé',
                siteDescription: p.quartier || '',
                lat: p.latitude ? parseFloat(p.latitude) : 3.8480,
                lng: p.longitude ? parseFloat(p.longitude) : 11.5021,
              },
              financing: {
                currency: 'FCFA',
                totalAmount: p.budget || p.montant || 100000000,
                sources: {
                  personalFunds: p.montant || 50000000,
                  bankFinancing: 0,
                  partners: 0,
                  other: 0,
                },
              },
              impact: {
                ...prev.impact,
                plannedStartDate: p.dateDebut ? dayjs(p.dateDebut) : dayjs().add(1, 'month'),
                economicImpact: p.description || '',
              },
              documents: (p.documents || []).map((d: any) => ({
                id: d.title,
                title: d.title,
                description: d.description || d.title,
                fileName: d.description || `${d.title}.pdf`,
                url_file: d.url_file || '',
              })),
            }));
          }
        })
        .catch((err) => {
          console.error('Failed to load project details for editing', err);
          message.warning('Could not load existing project data from server.');
        })
        .finally(() => {
          setLoadingProject(false);
        });
    } else {
      // 2. CREATION MODE: Automatically pre-fill ALL applicant & company info already entered by investor
      // Project fields (Steps 3-7) remain clean/empty for the new project!
      const loadInvestorIdentity = async () => {
        let u: any = null;
        try {
          const res = await userService.me();
          u = res.data;
        } catch (_) {}

        let ob: any = {};
        const savedOnboarding = localStorage.getItem('investor_onboarding_data');
        if (savedOnboarding) {
          try {
            ob = JSON.parse(savedOnboarding);
          } catch (_) {}
        }

        const resolvedSurname = ob.surname || ob.firstName || u?.firstname || '';
        const resolvedLastName = ob.lastName || u?.lastname || '';
        const resolvedEmail = ob.email || u?.email || '';
        const resolvedPhone = ob.phone || u?.phone || '';

        setFormData((prev: any) => ({
          ...prev,
          applicant: {
            ...prev.applicant,
            investorType: ob.investorType || prev.applicant.investorType || 'local_group',
            surname: resolvedSurname,
            firstName: resolvedSurname,
            lastName: resolvedLastName,
            nationality: ob.nationality || 'Cameroon',
            countryOfResidence: ob.countryOfResidence || ob.countryResidence || 'Cameroon',
            dateOfBirth: ob.dateOfBirth ? dayjs(ob.dateOfBirth) : undefined,
            phone: resolvedPhone,
            whatsapp: ob.whatsapp || '',
            email: resolvedEmail,
            fullAddress: ob.fullAddress || ob.residentialAddress || '',
            city: ob.city || '',
          },
          company: {
            ...prev.company,
            companyName: ob.companyName || '',
            legalForm: ob.legalForm || 'SARL',
            countryOfRegistration: ob.countryOfRegistration || ob.countryRegistration || 'Cameroon',
            registrationNumber: ob.registrationNumber || '',
            taxNumber: ob.taxNumber || '',
            dateOfIncorporation: (ob.dateOfIncorporation || ob.dateIncorporation) ? dayjs(ob.dateOfIncorporation || ob.dateIncorporation) : undefined,
            headOfficeAddress: ob.headOfficeAddress || '',
            website: ob.website || '',
            businessSector: ob.businessSector || 'Agriculture',
            numberOfEmployees: ob.numberOfEmployees !== undefined ? ob.numberOfEmployees : undefined,
            description: ob.description || '',
          },
        }));
      };

      loadInvestorIdentity();
    }
  }, [isEdit, id]);

  const goNext = () => setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const goBack = () => setCurrentStep((s) => Math.max(s - 1, 1));
  const jumpToStep = (step: number) => setCurrentStep(step);

  const handleStepNext = (stepVals?: any) => {
    if (stepVals) {
      setFormData((prev: any) => ({
        ...prev,
        ...stepVals,
      }));
    }
    goNext();
  };

  const buildPayload = (): ProjectPayload => {
    const projectName = formData.project?.projectName || formData.company?.companyName || 'Investment Project';
    const sector = formData.project?.sector || formData.company?.businessSector || 'Agriculture';
    const region = formData.location?.region || 'Centre';
    const city = formData.location?.city || 'Yaoundé';
    const quartier = formData.location?.siteDescription || formData.location?.division || 'Bastos';
    const description = formData.project?.description || formData.company?.description || 'Investment Project description';
    const totalAmount = Number(formData.financing?.totalAmount) || 100000000;
    const personalFunds = Number(formData.financing?.sources?.personalFunds) || totalAmount;

    let startDateStr = '';
    if (formData.impact?.plannedStartDate) {
      startDateStr = typeof formData.impact.plannedStartDate.format === 'function'
        ? formData.impact.plannedStartDate.format('YYYY-MM-DD')
        : String(formData.impact.plannedStartDate);
    }

    return {
      titre: projectName,
      secteur: sector,
      region: region,
      ville: city,
      quartier: quartier,
      description: description,
      budget: totalAmount,
      montant: personalFunds,
      latitude: formData.location?.lat ? String(formData.location.lat) : '3.8480',
      longitude: formData.location?.lng ? String(formData.location.lng) : '11.5021',
      dateDebut: startDateStr || undefined,
      status: 'PENDING',
    };
  };

  const uploadDocumentsForProject = async (projectId: number) => {
    if (!formData.documents || !Array.isArray(formData.documents) || formData.documents.length === 0) return;
    for (const doc of formData.documents) {
      if (!doc || !doc.title) continue;
      try {
        await docService.addDoc({
          title: doc.title,
          description: doc.fileName || doc.description || doc.title,
          url_file: doc.url_file || doc.fileName || `${doc.title}.pdf`,
          projectId: projectId,
        });
      } catch (addErr) {
        try {
          await docService.editDoc(doc.title, {
            title: doc.title,
            description: doc.fileName || doc.description || doc.title,
            url_file: doc.url_file || doc.fileName || `${doc.title}.pdf`,
            projectId: projectId,
          });
        } catch (_) {}
      }
    }
  };

  const handleSaveDraft = async () => {
    setSubmitting(true);
    try {
      const payload = buildPayload();
      let savedProject: any = null;
      if (isEdit && id) {
        const res = await projectService.updateProject(decodeURIComponent(id), payload);
        savedProject = res.data;
        message.success('Draft modifications saved successfully!');
      } else {
        const res = await projectService.addProject(payload);
        savedProject = res.data;
        message.success('Project saved as draft successfully!');
      }

      const targetId = savedProject?.id;
      if (targetId) {
        await uploadDocumentsForProject(targetId);
      } else if (payload.titre) {
        try {
          const fetchRes = await projectService.getProject(payload.titre);
          if (fetchRes.data?.id) {
            await uploadDocumentsForProject(fetchRes.data.id);
          }
        } catch (_) {}
      }

      navigate('/investor-portal/projects');
    } catch (err: any) {
      console.error('Failed to save draft', err);
      message.error(err?.response?.data?.message || 'Error saving project draft to the server.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const payload = buildPayload();
      let savedProject: any = null;
      if (isEdit && id) {
        const res = await projectService.updateProject(decodeURIComponent(id), payload);
        savedProject = res.data;
        message.success('Project application updated successfully!');
      } else {
        const res = await projectService.addProject(payload);
        savedProject = res.data;
        message.success('Project application submitted successfully!');
      }

      // Attach all uploaded documents to the project on backend
      const targetId = savedProject?.id;
      if (targetId) {
        await uploadDocumentsForProject(targetId);
      } else if (payload.titre) {
        try {
          const fetchRes = await projectService.getProject(payload.titre);
          if (fetchRes.data?.id) {
            await uploadDocumentsForProject(fetchRes.data.id);
          }
        } catch (_) {}
      }

      // Redirect to investor projects dashboard as requested
      navigate('/investor-portal/projects');
    } catch (err: any) {
      console.error('Failed to submit application', err);
      message.error(err?.response?.data?.message || 'Error submitting project application.');
    } finally {
      setSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1Application
            onNext={handleStepNext}
            initialValues={formData.applicant}
            isEdit={isEdit}
          />
        );
      case 2:
        return (
          <Step2Company
            onNext={handleStepNext}
            onBack={goBack}
            initialValues={formData.company}
            isEdit={isEdit}
          />
        );
      case 3:
        return (
          <Step3Project
            onNext={handleStepNext}
            onBack={goBack}
            initialValues={formData.project}
            isEdit={isEdit}
          />
        );
      case 4:
        return (
          <Step4Location
            onNext={handleStepNext}
            onBack={goBack}
            initialValues={formData.location}
            isEdit={isEdit}
          />
        );
      case 5:
        return (
          <Step5Financing
            onNext={handleStepNext}
            onBack={goBack}
            initialValues={formData.financing}
            isEdit={isEdit}
          />
        );
      case 6:
        return (
          <Step6Impact
            onNext={handleStepNext}
            onBack={goBack}
            initialValues={formData.impact}
            isEdit={isEdit}
          />
        );
      case 7:
        return (
          <Step7Documents
            onNext={handleStepNext}
            onBack={goBack}
            initialValues={formData.documents}
            isEdit={isEdit}
          />
        );
      case 8:
        return (
          <Step8Validation
            onBack={goBack}
            onSubmit={handleSubmit}
            isEdit={isEdit}
            projectReference={formData.reference}
            onJumpToStep={jumpToStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        padding: '0 0 60px 0',
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
      }}
    >
      {/* Top Header Card */}
      <div
        style={{
          background: '#fff',
          borderRadius: 12,
          border: '1px solid #ECEAF5',
          boxShadow: '0 1px 3px rgba(15, 11, 96, 0.04)',
          padding: '20px 28px',
          marginBottom: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        {/* Left: Back button + Title */}
        <div>
          <button
            type="button"
            onClick={() => navigate('/investor-portal/projects')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              color: PRIMARY,
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 8,
              padding: 0,
            }}
          >
            <ArrowLeftOutlined style={{ fontSize: 12 }} />
            Back to Projects
          </button>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: '#111827', margin: 0 }}>
            {isEdit
              ? `Edit investment application ${formData.reference ? `(${formData.reference})` : ''}`
              : 'New investment application'}
          </h1>
          <p style={{ fontSize: 13, color: '#6B7280', margin: '4px 0 0 0' }}>
            {isEdit
              ? 'Update the sections of your application before saving your changes.'
              : 'Complete each section to submit your project to the API Cameroon investment team.'}
          </p>
        </div>

        {/* Right: Save as Draft */}
        <Button
          icon={<SaveOutlined />}
          onClick={handleSaveDraft}
          loading={submitting}
          style={{
            height: 42,
            borderRadius: 8,
            fontWeight: 600,
            background: PRIMARY,
            border: 'none',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            paddingLeft: 20,
            paddingRight: 20,
            boxShadow: '0 2px 6px rgba(15, 11, 96, 0.15)',
          }}
        >
          {isEdit ? 'Save Changes as Draft' : 'Save as Draft'}
        </Button>
      </div>

      {/* Main wizard container */}
      <Spin spinning={loadingProject || submitting}>
        <div style={{ width: '100%' }}>
          <StepProgressBar currentStep={currentStep} />
          {renderStep()}
        </div>
      </Spin>
    </div>
  );
};

export default InvestmentProjectApplication;

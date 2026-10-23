import { Download, Shield, FileText, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PolitiqueCondition = () => {
  const { t } = useTranslation();

  const politiqueSections = t('pages_a_propos.politique_conditions.politique.sections', { returnObjects: true }) as {title: string, content: string}[];
  const conditionsSections = t('pages_a_propos.politique_conditions.conditions.sections', { returnObjects: true }) as {title: string, content: string}[];

  const getPolitiqueContent = () => {
    let content = `${t('pages_a_propos.politique_conditions.politique.title').toUpperCase()}\nInvest in Cameroun\n\n`;
    content += `Dernière mise à jour : ${new Date().toLocaleDateString()}\n\n`;
    
    politiqueSections.forEach((section, index) => {
      content += `${index + 1}. ${section.title.toUpperCase()}\n\n${section.content}\n\n`;
    });
    
    return content;
  };

  const getConditionsContent = () => {
    let content = `${t('pages_a_propos.politique_conditions.conditions.title').toUpperCase()}\nInvest in Cameroun\n\n`;
    content += `Dernière mise à jour : ${new Date().toLocaleDateString()}\n\n`;
    
    conditionsSections.forEach((section, index) => {
      content += `${index + 1}. ${section.title.toUpperCase()}\n\n${section.content}\n\n`;
    });
    
    return content;
  };

  const handleDownload = (type: 'politique' | 'conditions') => {
    const content = type === 'politique' ? getPolitiqueContent() : getConditionsContent();
    const fileName = type === 'politique'
      ? t('pages_a_propos.politique_conditions.politique.filename')
      : t('pages_a_propos.politique_conditions.conditions.filename');

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-light text-gray-900 mb-3 tracking-tight">
              {t('pages_a_propos.politique_conditions.page_title')}
            </h1>
            <p className="text-gray-500 text-sm">
              Invest in Cameroun — {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Politique de Confidentialité */}
        <section className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-10 pb-6 border-b border-gray-200">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-6 h-6 text-gray-400" />
                <h2 className="text-xl font-light text-gray-900">
                  {t('pages_a_propos.politique_conditions.politique.title')}
                </h2>
              </div>
              <p className="text-sm text-gray-500 ml-9">
                {t('pages_a_propos.politique_conditions.politique.subtitle')}
              </p>
            </div>
            <button
              onClick={() => handleDownload('politique')}
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400 rounded-lg transition-colors duration-200 w-full sm:w-auto"
            >
              <Download className="w-4 h-4" />
              {t('pages_a_propos.politique_conditions.download_btn')}
            </button>
          </div>

          <div className="space-y-8">
            {politiqueSections.map((section, index) => (
              <div key={index} className="pb-6 border-b border-gray-100 last:border-b-0">
                <h3 className="text-base font-medium text-gray-900 mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="my-16 border-t border-gray-200"></div>

        {/* Conditions Générales d'Utilisation */}
        <section className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-10 pb-6 border-b border-gray-200">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-6 h-6 text-gray-400" />
                <h2 className="text-xl font-light text-gray-900">
                  {t('pages_a_propos.politique_conditions.conditions.title')}
                </h2>
              </div>
              <p className="text-sm text-gray-500 ml-9">
                {t('pages_a_propos.politique_conditions.conditions.subtitle')}
              </p>
            </div>
            <button
              onClick={() => handleDownload('conditions')}
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400 rounded-lg transition-colors duration-200 w-full sm:w-auto"
            >
              <Download className="w-4 h-4" />
              {t('pages_a_propos.politique_conditions.download_btn')}
            </button>
          </div>

          <div className="space-y-8">
            {conditionsSections.map((section, index) => (
              <div key={index} className="pb-6 border-b border-gray-100 last:border-b-0">
                <h3 className="text-base font-medium text-gray-900 mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="pt-12 border-t border-gray-200">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <Mail className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-light text-gray-900 mb-3">
              {t('pages_a_propos.politique_conditions.contact_section.title')}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
              {t('pages_a_propos.politique_conditions.contact_section.desc')}
            </p>
            <div className="text-center">
              <h6 className="mb-3 text-base font-medium text-gray-900">
                {t('footer.contacts.title', 'Contact')}
              </h6>
              <div className="space-y-1 text-sm text-gray-600">
                <p>{t('footer.contacts.agency_name', 'Agence de Promotion des Investissements')}</p>
                <p>{t('footer.contacts.phone1', '+237 XXX XXX XXX')}</p>
                <p>{t('footer.contacts.phone2', '+237 XXX XXX XXX')}</p>
                <p>
                  {t('footer.contacts.email', 'Email')} :{" "}
                  <a
                    href={`mailto:${t('footer.contacts.email_address', 'contact@investincameroun.com')}`}
                    className="text-amber-500 hover:text-amber-600 underline transition-colors duration-200"
                  >
                    {t('footer.contacts.email_address', 'contact@investincameroun.com')}
                  </a>
                </p>
                <p>{t('footer.contacts.address', 'Yaoundé, Cameroun')}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-sm text-gray-500">
            {t('pages_a_propos.politique_conditions.footer', { year: new Date().getFullYear() })}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PolitiqueCondition;
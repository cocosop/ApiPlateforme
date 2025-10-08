import { Download, Shield, FileText, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PolitiqueCondition = () => {
  const { t } = useTranslation();

  const handleDownload = (type: 'politique' | 'conditions') => {
    const content = type === 'politique' ? getPolitiqueContent() : getConditionsContent();
    const fileName = type === 'politique'
      ? 'Politique_de_Confidentialite.txt'
      : 'Conditions_Generales_Utilisation.txt';

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  };

  const getPolitiqueContent = () => {
    return `POLITIQUE DE CONFIDENTIALITÉ
Invest in Cameroun

Dernière mise à jour : ${new Date().toLocaleDateString('fr-FR')}

1. INTRODUCTION

Invest in Cameroun s'engage à protéger la confidentialité et la sécurité de vos informations personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations.

2. INFORMATIONS COLLECTÉES

Nous collectons les types d'informations suivants :
- Informations d'identification (nom, prénom, adresse e-mail)
- Informations professionnelles (entreprise, secteur d'activité)
- Données de navigation (adresse IP, cookies, pages visitées)
- Informations fournies volontairement via nos formulaires

3. UTILISATION DES INFORMATIONS

Vos informations sont utilisées pour :
- Fournir et améliorer nos services
- Communiquer avec vous concernant les opportunités d'investissement
- Personnaliser votre expérience
- Analyser l'utilisation de notre plateforme
- Respecter nos obligations légales

4. PARTAGE DES INFORMATIONS

Nous ne vendons pas vos informations personnelles. Nous pouvons partager vos données avec :
- Partenaires institutionnels (avec votre consentement)
- Prestataires de services (hébergement, analyse)
- Autorités légales (si requis par la loi)

5. SÉCURITÉ DES DONNÉES

Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations contre l'accès non autorisé, la modification, la divulgation ou la destruction.

6. VOS DROITS

Vous avez le droit de :
- Accéder à vos informations personnelles
- Rectifier vos données
- Supprimer vos informations
- Vous opposer au traitement
- Retirer votre consentement

7. COOKIES

Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.

8. CONTACT

Pour toute question concernant cette politique :
Email : contact@investincameroun.com
Adresse : API - Agence de Promotion des Investissements, Cameroun

9. MODIFICATIONS

Cette politique peut être mise à jour. La date de dernière modification est indiquée en haut du document.
`;
  };

  const getConditionsContent = () => {
    return `CONDITIONS GÉNÉRALES D'UTILISATION
Invest in Cameroun

Dernière mise à jour : ${new Date().toLocaleDateString('fr-FR')}

1. ACCEPTATION DES CONDITIONS

En accédant et en utilisant le site investincameroun.com, vous acceptez d'être lié par ces conditions générales d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.

2. DESCRIPTION DU SERVICE

Invest in Cameroun est une plateforme d'information dédiée à la promotion des opportunités d'investissement au Cameroun, gérée par l'Agence de Promotion des Investissements (API).

3. UTILISATION DU SITE

Vous vous engagez à :
- Utiliser le site de manière légale et appropriée
- Ne pas diffuser de contenu illégal, offensant ou préjudiciable
- Ne pas compromettre la sécurité du site
- Ne pas collecter des données d'autres utilisateurs sans autorisation
- Respecter les droits de propriété intellectuelle

4. PROPRIÉTÉ INTELLECTUELLE

Tous les contenus du site (textes, images, logos, graphiques) sont la propriété d'Invest in Cameroun ou de ses partenaires et sont protégés par les lois sur la propriété intellectuelle.

Vous ne pouvez pas :
- Reproduire le contenu sans autorisation écrite
- Utiliser le contenu à des fins commerciales sans accord préalable
- Modifier ou créer des œuvres dérivées

5. LIMITATION DE RESPONSABILITÉ

Invest in Cameroun ne peut être tenu responsable de :
- L'exactitude ou l'exhaustivité des informations fournies
- Les pertes ou dommages résultant de l'utilisation du site
- Les interruptions de service
- Les liens vers des sites tiers

6. INFORMATIONS FOURNIES

Les informations sur le site sont fournies à titre informatif. Elles ne constituent pas des conseils juridiques, financiers ou d'investissement. Nous vous recommandons de consulter des professionnels qualifiés avant de prendre des décisions d'investissement.

7. LIENS EXTERNES

Notre site peut contenir des liens vers des sites tiers. Nous ne sommes pas responsables du contenu ou des pratiques de ces sites externes.

8. MODIFICATION DES CONDITIONS

Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications entrent en vigueur dès leur publication sur le site. Votre utilisation continue du site après les modifications constitue votre acceptation des nouvelles conditions.

9. RÉSILIATION

Nous nous réservons le droit de suspendre ou de résilier votre accès au site à tout moment, sans préavis, en cas de violation de ces conditions.

10. LOI APPLICABLE

Ces conditions sont régies par les lois de la République du Cameroun. Tout litige sera soumis à la juridiction exclusive des tribunaux camerounais.

11. DIVISIBILITÉ

Si une disposition de ces conditions est jugée invalide ou inapplicable, les autres dispositions restent en vigueur.

12. CONTACT

Pour toute question concernant ces conditions :
Email : contact@investincameroun.com
Téléphone : [À compléter]
Adresse : API - Agence de Promotion des Investissements, Cameroun

13. ACCORD INTÉGRAL

Ces conditions constituent l'intégralité de l'accord entre vous et Invest in Cameroun concernant l'utilisation du site.
`;
  };

  const politiqueSections = [
    {
      title: "Introduction",
      content: "Invest in Cameroun s'engage à protéger la confidentialité et la sécurité de vos informations personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations."
    },
    {
      title: "Informations Collectées",
      content: "Nous collectons les types d'informations suivants : informations d'identification (nom, prénom, adresse e-mail), informations professionnelles (entreprise, secteur d'activité), données de navigation (adresse IP, cookies, pages visitées), et informations fournies volontairement via nos formulaires."
    },
    {
      title: "Utilisation des Informations",
      content: "Vos informations sont utilisées pour fournir et améliorer nos services, communiquer avec vous concernant les opportunités d'investissement, personnaliser votre expérience, analyser l'utilisation de notre plateforme, et respecter nos obligations légales."
    },
    {
      title: "Partage des Informations",
      content: "Nous ne vendons pas vos informations personnelles. Nous pouvons partager vos données avec des partenaires institutionnels (avec votre consentement), des prestataires de services (hébergement, analyse), et des autorités légales (si requis par la loi)."
    },
    {
      title: "Sécurité des Données",
      content: "Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations contre l'accès non autorisé, la modification, la divulgation ou la destruction."
    },
    {
      title: "Vos Droits",
      content: "Vous avez le droit d'accéder à vos informations personnelles, de rectifier vos données, de supprimer vos informations, de vous opposer au traitement, et de retirer votre consentement."
    },
    {
      title: "Cookies",
      content: "Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur."
    },
    {
      title: "Contact",
      content: "Pour toute question concernant cette politique, contactez-nous à contact@investincameroun.com ou à notre adresse : API - Agence de Promotion des Investissements, Cameroun."
    },
    {
      title: "Modifications",
      content: "Cette politique peut être mise à jour. La date de dernière modification est indiquée en haut du document."
    }
  ];

  const conditionsSections = [
    {
      title: "Acceptation des Conditions",
      content: "En accédant et en utilisant le site investincameroun.com, vous acceptez d'être lié par ces conditions générales d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site."
    },
    {
      title: "Description du Service",
      content: "Invest in Cameroun est une plateforme d'information dédiée à la promotion des opportunités d'investissement au Cameroun, gérée par l'Agence de Promotion des Investissements (API)."
    },
    {
      title: "Utilisation du Site",
      content: "Vous vous engagez à utiliser le site de manière légale et appropriée, ne pas diffuser de contenu illégal, offensant ou préjudiciable, ne pas compromettre la sécurité du site, ne pas collecter des données d'autres utilisateurs sans autorisation, et respecter les droits de propriété intellectuelle."
    },
    {
      title: "Propriété Intellectuelle",
      content: "Tous les contenus du site (textes, images, logos, graphiques) sont la propriété d'Invest in Cameroun ou de ses partenaires et sont protégés par les lois sur la propriété intellectuelle. Vous ne pouvez pas reproduire le contenu sans autorisation écrite, l'utiliser à des fins commerciales sans accord préalable, ou modifier ou créer des œuvres dérivées."
    },
    {
      title: "Limitation de Responsabilité",
      content: "Invest in Cameroun ne peut être tenu responsable de l'exactitude ou l'exhaustivité des informations fournies, des pertes ou dommages résultant de l'utilisation du site, des interruptions de service, ou des liens vers des sites tiers."
    },
    {
      title: "Informations Fournies",
      content: "Les informations sur le site sont fournies à titre informatif. Elles ne constituent pas des conseils juridiques, financiers ou d'investissement. Nous vous recommandons de consulter des professionnels qualifiés avant de prendre des décisions d'investissement."
    },
    {
      title: "Liens Externes",
      content: "Notre site peut contenir des liens vers des sites tiers. Nous ne sommes pas responsables du contenu ou des pratiques de ces sites externes."
    },
    {
      title: "Modification des Conditions",
      content: "Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications entrent en vigueur dès leur publication sur le site. Votre utilisation continue du site après les modifications constitue votre acceptation des nouvelles conditions."
    },
    {
      title: "Résiliation",
      content: "Nous nous réservons le droit de suspendre ou de résilier votre accès au site à tout moment, sans préavis, en cas de violation de ces conditions."
    },
    {
      title: "Loi Applicable",
      content: "Ces conditions sont régies par les lois de la République du Cameroun. Tout litige sera soumis à la juridiction exclusive des tribunaux camerounais."
    },
    {
      title: "Divisibilité",
      content: "Si une disposition de ces conditions est jugée invalide ou inapplicable, les autres dispositions restent en vigueur."
    },
    {
      title: "Contact",
      content: "Pour toute question concernant ces conditions, contactez-nous à contact@investincameroun.com, par téléphone [À compléter], ou à notre adresse : API - Agence de Promotion des Investissements, Cameroun."
    },
    {
      title: "Accord Intégral",
      content: "Ces conditions constituent l'intégralité de l'accord entre vous et Invest in Cameroun concernant l'utilisation du site."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-light text-gray-900 mb-3 tracking-tight">
              Mentions Légales
            </h1>
            <p className="text-gray-500 text-sm">
              Invest in Cameroun — {new Date().toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
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
                  Politique de Confidentialité
                </h2>
              </div>
              <p className="text-sm text-gray-500 ml-9">
                Protection et traitement de vos données personnelles
              </p>
            </div>
            <button
              onClick={() => handleDownload('politique')}
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400 rounded-lg transition-colors duration-200 w-full sm:w-auto"
            >
              <Download className="w-4 h-4" />
              Télécharger
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
                  Conditions Générales d'Utilisation
                </h2>
              </div>
              <p className="text-sm text-gray-500 ml-9">
                Règles et modalités d'utilisation de la plateforme
              </p>
            </div>
            <button
              onClick={() => handleDownload('conditions')}
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400 rounded-lg transition-colors duration-200 w-full sm:w-auto"
            >
              <Download className="w-4 h-4" />
              Télécharger
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
              Questions
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
              Pour toute question concernant ces documents ou pour exercer vos droits,
              contactez-nous à l'adresse suivante.
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
            © {new Date().getFullYear()} Invest in Cameroun. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PolitiqueCondition;
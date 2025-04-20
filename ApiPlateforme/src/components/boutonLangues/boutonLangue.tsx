import { useTranslation } from 'react-i18next';
import { GlobeAltIcon } from '@heroicons/react/20/solid';
import { ChevronDownIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

const BoutonLangue = () => {
    
    const {i18n } = useTranslation();
    useEffect(() => {
        console.log(i18n)
        console.log('Current language:', i18n.language);
        console.log('Translations:', i18n.getResourceBundle(i18n.language, 'translation'));
      }, [i18n]);
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'fr', label: 'Français' },
        { code: 'en', label: 'English' },
        { code: 'es', label: 'Español' },
        { code: 'zh', label: '中文' },
        { code: 'ar', label: 'العربية' },
    ];

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center px-4 py-2 rounded-md"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <GlobeAltIcon className="h-5 w-5 mr-2 text-gray-500" />
                {i18n.language.toUpperCase()}
                <ChevronDownIcon className="h-5 w-5 ml-2 text-gray-500" />
            </button>
            {isOpen && (
                <div className="absolute right-0 z-30 mt-2 bg-white rounded-md shadow-lg w-40">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className={`block w-full text-left px-4 py-2 text-sm ${
                                i18n.language === lang.code
                                    ? "bg-blue-100 text-blue-600"
                                    : "text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BoutonLangue;
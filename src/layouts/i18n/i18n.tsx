import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import enLanguage from './Translations/en-US.json';
import ptLanguage from './Translations/pt-BR.json';

const language = () => {
  switch (navigator.language) {
    case 'pt-BR':
      return 'pt-BR';
    default:
      return 'en-US';
  }
};

i18n.use(initReactI18next).init({
  fallbackLng: language,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    'en-US': enLanguage,
    'pt-BR': ptLanguage,
  },
});

export default i18n;

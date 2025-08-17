import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enCommon from './locales/en/common.json';
import enCurriculumPage from './locales/en/curriculumPage.json';
import ptCommon from './locales/pt/common.json';
import ptCurriculumPage from './locales/pt/curriculumPage.json';

const resources = {
  en: {
    common: enCommon,
    curriculumPage: enCurriculumPage,
  },
  pt: {
    common: ptCommon,
    curriculumPage: ptCurriculumPage,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    ns: ['common', 'curriculumPage'], // Namespace
    defaultNS: 'common',
    interpolation: {
      escapeValue: false, // React already does this
    },
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;

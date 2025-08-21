// i18n setup

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(
    resourcesToBackend((language: string, namespace: string) => {
      return import(`./locales/${language}/${namespace}.json`);
    }),
  )
  .init({
    fallbackLng: 'en',
    ns: ['common', 'curriculumPage', 'projectsPage', 'notFoundPage'], // Added notFoundPage namespace
    defaultNS: 'common',
    interpolation: {
      escapeValue: false, // React already does this
    },
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })
  .then(() => {
    // i18n initialized successfully
  })
  .catch((err) => {
    console.error('i18n initialization failed:', err);
  });

import i18n from 'i18next'
// import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next'
import commonEN from './locales/en/common.json'
import navEN from './locales/en/nav.json'
import signinEN from './locales/en/signin.json'

// the translations
const resources = {
  en: {
    ...commonEN,
    ...navEN,
    ...signinEN,
  },
}

i18n
  // .use(Backend)
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    defaultNS: 'app',
    fallbackLng: ['en'],
    fallbackNS: 'common',
    lng: 'en',
    ns: ['signin'],
    react: {
      useSuspense: false,
    },
    returnEmptyString: false,
  })

export default i18n

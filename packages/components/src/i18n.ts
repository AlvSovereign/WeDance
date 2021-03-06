import i18n from 'i18next'
// import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next'
import { ArtistEN, CommonEN, NavEN, SigninEN } from './locales/en'

// the translations
const resources = {
  en: {
    ...ArtistEN,
    ...CommonEN,
    ...NavEN,
    ...SigninEN,
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

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
  en: {
    translation: {
      allEmployees: 'All Employees',
      addEmployee: 'Add Employee',
      addJobPosition: 'Add Job Position',
      signIn: 'Sign In',
      signOut: 'Sign Out',
      translation: 'Translation To Hebrew',
      deleteJob: 'Delete a job',
      download: 'Download Data',
      search: 'Search…',
      firstName: 'First Name',
      lastName: 'Last Name',
      tz: 'Tz',
      startDate: 'Start Date',
      titleSignIn: 'Sign in',
      name: 'Name',
      password: 'Password',
      noResultsFound: 'No results found'
    },
  },
  he: {
    translation: {
      allEmployees: 'כל העובדים',
      addEmployee: 'הוסף עובד',
      addJobPosition: 'הוסף משרה',
      signIn: 'התחברות',
      signOut: 'יציאה',
      translation: 'תרגם לאנגלית',
      deleteJob: 'מחק משרה',
      download: 'הורדת נתונים',
      search: 'חיפוש...',
      firstName: 'שם פרטי',
      lastName: 'שם משפחה',
      tz: 'ת.ז',
      startDate: 'תאריך התחלה',
      titleSignIn: 'כניסה',
      name: 'שם',
      password: 'סיסמה',
      noResultsFound: 'לא נמצאו תוצאות'


    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
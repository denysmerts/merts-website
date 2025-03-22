export const GOOGLE_FORM_CONFIG = {
  URL: import.meta.env.VITE_GOOGLE_FORM_URL || '',
  FIELD_IDS: {
    firstName: import.meta.env.VITE_FIELD_ID_FIRST_NAME || '',
    lastName: import.meta.env.VITE_FIELD_ID_LAST_NAME || '',
    email: import.meta.env.VITE_FIELD_ID_EMAIL || '',
    message: import.meta.env.VITE_FIELD_ID_MESSAGE || '',
  },
};
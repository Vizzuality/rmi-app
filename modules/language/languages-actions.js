import { createAction } from 'redux-tools';

export const setLanguages = createAction('languages/setLanguages');
export const setLanguagesLoading = createAction('languages/setLanguagesLoading');
export const setCurrentLanguage = createAction('languages/setCurrentLanguage');

export default {
  setLanguages,
  setLanguagesLoading,
  setCurrentLanguage
};

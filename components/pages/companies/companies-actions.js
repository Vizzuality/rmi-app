import { createAction } from 'redux-tools';

export const setFilters = createAction('companies-index-page/setFilters');
export const resetFilters = createAction('companies-index-page/resetFilters');
export const setSelectedCompany = createAction('companies-index-page/setSelectedCompany');
export const resetSelectedCompany = createAction('companies-index-page/resetSelectedCompany');

export default {
  setFilters,
  resetFilters,
  setSelectedCompany,
  resetSelectedCompany
};

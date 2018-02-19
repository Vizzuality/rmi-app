import { createAction } from 'redux-tools';

export const setFilters = createAction('companies-index-page/setFilters');
export const resetFilters = createAction('companies-index-page/resetFilters');

export default {
  setFilters,
  resetFilters
};

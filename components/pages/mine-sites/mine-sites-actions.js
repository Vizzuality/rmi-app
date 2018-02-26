import { createAction } from 'redux-tools';

export const setFilters = createAction('mine-sites-index-page/setFilters');
export const resetFilters = createAction('mine-sites-index-page/resetFilters');

export default {
  setFilters,
  resetFilters
};


import { createSelector } from 'reselect';
import orderBy from 'lodash/orderBy';

const companies = state => state.companies.list;

export const parseCompanies = createSelector(
  companies,
  (_companies = []) => orderBy(_companies, 'name', ['asc'])
);

export default { parseCompanies };

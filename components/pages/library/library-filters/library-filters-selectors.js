
import { createSelector } from 'reselect';

const companies = state => state.companies.list;

export const parseCompanies = createSelector(
  [companies],
  (_companies = []) => _companies.map(company => ({ label: company.name, value: company.id }))
);

export default { parseCompanies };

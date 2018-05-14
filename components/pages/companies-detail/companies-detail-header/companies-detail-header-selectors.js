import { createSelector } from 'reselect';

const companies = state => state.companies.list;
const companyId = state => state.routes.query.company;

export const getCompany = createSelector(
  [companies, companyId],
  (_companies, _companyId) => _companies.find(company => company.id === _companyId) || {}
);

export default { getCompany };

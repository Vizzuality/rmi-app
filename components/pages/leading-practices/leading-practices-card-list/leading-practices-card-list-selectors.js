
import { createSelector } from 'reselect';

const leadingPractices = state => state.leadingPracticesPage.leadingPractices.list;

export const parseLeadingPractices = createSelector(
  leadingPractices,
  _leadingPractices => _leadingPractices.map(leadingPractice => ({
    id: leadingPractice.id,
    title: leadingPractice.name,
    description: leadingPractice.description,
    companies: leadingPractice.companies.map(company => ({
      id: company.id,
      name: company.name,
      slug: company.slug
    }))
  }))
);

export default { parseLeadingPractices };

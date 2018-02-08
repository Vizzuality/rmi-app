
import { createSelector } from 'reselect';

const leadingPractices = state => state.leadingPracticesPage.leadingPractices.list;

export const parseLeadingPractices = createSelector(
  leadingPractices,
  _leadingPractices => _leadingPractices.map(leadingPractice => ({
    id: leadingPractice.id,
    title: leadingPractice.name,
    description: leadingPractice.description,
    company: {
      name: leadingPractice.company.name,
      slug: leadingPractice.company.slug
    }
  }))
);

export default {
  parseLeadingPractices
};

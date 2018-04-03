
import { createSelector } from 'reselect';

const leadingPractices = state => state.leadingPracticesPage.leadingPractices.list;
const leadingPracticeId = state => state.leadingPracticesPage.leadingPractices.selectedLeadingPractice;

export const getLeadingPractice = createSelector(
  [leadingPractices, leadingPracticeId],
  (_leadingPractices = [], _leadingPracticeId) => _leadingPractices.find(leadingPractice => leadingPractice.id === _leadingPracticeId)
);

export default { getLeadingPractice };

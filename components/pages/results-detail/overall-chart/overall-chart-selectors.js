
import { createSelector } from 'reselect';

import { getIssueArea } from '../results-detail-selectors';

const selectedCompany = state => state.resultsDetailPage.selectedCompany;

export const parseScores = createSelector(
  [getIssueArea, selectedCompany],
  (_issueArea = {}, _selectedCompany) => ({
    id: _issueArea.id,
    name: _issueArea.name,
    slug: _issueArea.slug,
    scores: (_issueArea.scores || []).filter(score => score.kind === 'overall_indicator').map(score => ({
      id: score.id,
      name: score.company.name,
      companyId: score.company.id,
      value: score.value,
      selected: score.company.id === _selectedCompany
    }))
  })
);

export default { parseScores };


import { createSelector } from 'reselect';
import orderBy from 'lodash/orderBy';

import { getIssueArea } from '../results-detail-selectors';

const selectedCompany = state => state.resultsDetailPage.selectedCompany;

export const parseScores = createSelector(
  [getIssueArea, selectedCompany],
  (_issueArea = {}, _selectedCompany) => ({
    id: _issueArea.id,
    name: _issueArea.name,
    slug: _issueArea.slug,
    scores: orderBy((_issueArea.scores || []).filter(score => score.kind === 'overall_indicator').map(score => ({
      id: score.id,
      name: score.company.name,
      companyId: score.company.id,
      value: score.value,
      selected: score.company.id === _selectedCompany
    })), 'value', ['desc'])
  })
);

export default { parseScores };

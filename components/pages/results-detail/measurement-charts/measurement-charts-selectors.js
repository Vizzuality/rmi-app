
import { createSelector } from 'reselect';
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';

import { getIssueArea } from '../results-detail-selectors';

const selectedCompany = state => state.resultsDetailPage.selectedCompany;

export const parseScores = createSelector(
  [getIssueArea, selectedCompany],
  (_issueArea = {}, _selectedCompany) => {
    const scoresByMeasurement = groupBy((_issueArea.scores || []).filter(score => score.kind === 'measurement_area'), 'label');

    return Object.keys(scoresByMeasurement).map((measurementKey, index) => ({
      id: index,
      name: `${measurementKey} ${(scoresByMeasurement[measurementKey][0] || {})['nbr-indicators']}`,
      indicatorSlug: _issueArea.slug,
      scores: orderBy(scoresByMeasurement[measurementKey].map(score => ({
        id: score.id,
        name: score.company.name,
        value: score.value,
        companyId: score.company.id,
        selected: score.company.id === _selectedCompany
      })), 'value', ['desc'])
    }));
  }
);

export default { parseScores };

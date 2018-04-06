
import { createSelector } from 'reselect';
import orderBy from 'lodash/orderBy';
import groupBy from 'lodash/groupBy';

import { getIssueArea } from '../results-detail-selectors';

const selectedCompany = state => state.resultsDetailPage.selectedCompany;

export const parseScores = createSelector(
  [getIssueArea, selectedCompany],
  (_issueArea = {}, _selectedCompany) => {
    const absoluteScores = _issueArea.scores.filter(score => score.kind === 'absolute_breakdown');

    const scoresByCompanies = groupBy(absoluteScores, 'company-id');
    const totalScores = [];

    Object.values(scoresByCompanies).forEach((company) => {
      const barScore = {};
      let totalScore = 0;
      company.forEach((scoreCell) => {
        totalScore += scoreCell.value;
        Object.assign(barScore, {
          name: scoreCell.company.name,
          ...scoreCell.label === 'Action' && { action: scoreCell.value },
          ...scoreCell.label === 'Effectiveness' && { effectiveness: scoreCell.value },
          ...scoreCell.label === 'Commitment' && { commitment: scoreCell.value },
          total: totalScore,
          companyId: scoreCell.company.id,
          selected: scoreCell.company.id === _selectedCompany
        });
      });

      totalScores.push(barScore);
    });

    return ({
      id: _issueArea.id,
      name: _issueArea.name,
      slug: _issueArea.slug,
      scores: orderBy(totalScores, 'total', 'desc')
    });
  }
);

export default { parseScores };

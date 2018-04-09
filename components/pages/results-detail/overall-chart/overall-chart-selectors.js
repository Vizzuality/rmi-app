
import { createSelector } from 'reselect';
import orderBy from 'lodash/orderBy';
import groupBy from 'lodash/groupBy';

import { getIssueArea } from '../results-detail-selectors';

const selectedCompany = state => state.resultsDetailPage.selectedCompany;

export const parseScores = createSelector(
  [getIssueArea, selectedCompany],
  (_issueArea = {}, _selectedCompany) => {
    const absoluteScores = _issueArea.scores.filter(score => score.kind === 'absolute_breakdown');
    const overallScores = _issueArea.scores.filter(score => score.kind === 'overall_indicator');
    const scoresByCompanies = groupBy(absoluteScores, 'company-id');
    const bestPracticeScore = _issueArea.scores.find(score => score.kind === 'current_best_practice') || {};
    const totalScores = [];

    Object.values(scoresByCompanies).forEach((company) => {
      const barScore = {};
      company.forEach((scoreCell) => {
        Object.assign(barScore, {
          name: scoreCell.company.name,
          ...scoreCell.label === 'Action' && { action: scoreCell.value },
          ...scoreCell.label === 'Effectiveness' && { effectiveness: scoreCell.value },
          ...scoreCell.label === 'Commitment' && { commitment: scoreCell.value },
          companyId: scoreCell.company.id,
          selected: scoreCell.company.id === _selectedCompany,
          overallScore: (overallScores.find(score =>
            score.company.id === scoreCell.company.id) || {}).value
        });
      });

      totalScores.push(barScore);
    });

    return ({
      id: _issueArea.id,
      name: _issueArea.name,
      slug: _issueArea.slug,
      scores: orderBy(totalScores, 'overallScore', 'desc'),
      bestPracticeScore: bestPracticeScore.value
    });
  }
);

export default { parseScores };

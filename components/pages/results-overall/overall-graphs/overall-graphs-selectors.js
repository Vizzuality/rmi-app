
import { createSelector } from 'reselect';
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';

const scores = state => state.resultsOverallPage.breakdownScores.list;
const indicators = state => state.indicators.list;

export const getScoresByIssueArea = createSelector(
  [scores, indicators],
  (_scores = [], _indicators = []) => {
    const scoresByIndicator = groupBy(_scores, 'indicator-id');

    const companiesByIndicator = {};
    Object.keys(scoresByIndicator).forEach((indicatorId) => {
      Object.assign(companiesByIndicator, { [indicatorId]: groupBy(scoresByIndicator[indicatorId], 'company-id') });
    });

    return Object.keys(companiesByIndicator).map((indicatorId) => {
      const issueArea = _indicators.find(indicator => indicator.id === indicatorId) || {};
      const companies = companiesByIndicator[indicatorId];
      const totalScores = [];

      Object.values(companies).forEach((company) => {
        const barScore = {};
        let totalScore = 0;
        company.forEach((scoreCell) => {
          totalScore += scoreCell.value;
          Object.assign(barScore, {
            name: scoreCell.company.name,
            ...scoreCell.label === 'Action' && { action: scoreCell.value },
            ...scoreCell.label === 'Effectiveness' && { effectiveness: scoreCell.value },
            ...scoreCell.label === 'Commitment' && { commitment: scoreCell.value },
            total: totalScore
          });
        });
        totalScores.push(barScore);
      });

      return {
        id: issueArea.id,
        label: issueArea.label,
        slug: issueArea.slug,
        scores: orderBy(totalScores, 'total', 'desc')
      };
    });
  }
);

export default { getScoresByIssueArea };

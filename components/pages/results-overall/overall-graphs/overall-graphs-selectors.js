
import { createSelector } from 'reselect';
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';

const scores = state => state.resultsOverallPage.breakdownScores.list;
const bestPracticesScores = state => state.resultsOverallPage.bestPracticesScores.list;
const overallScores = state => state.resultsOverallPage.overallScores.list;
const indicators = state => state.indicators.list;

export const getScoresByIssueArea = createSelector(
  [scores, indicators, bestPracticesScores, overallScores],
  (_scores = [], _indicators = [], _bestPracticesScores, _overallScores = []) => {
    const scoresByIndicator = groupBy(_scores, 'indicator-id');

    const companiesByIndicator = {};
    Object.keys(scoresByIndicator).forEach((indicatorId) => {
      Object.assign(companiesByIndicator, { [indicatorId]: groupBy(scoresByIndicator[indicatorId], 'company-id') });
    });

    return Object.keys(companiesByIndicator).map((indicatorId) => {
      const issueArea = _indicators.find(indicator => indicator.id === indicatorId) || {};
      const companies = companiesByIndicator[indicatorId];
      const totalScores = [];
      const bestPracticeScore = _bestPracticesScores.find(score =>
        score.indicator.id === issueArea.id) || {};

      Object.values(companies).forEach((company) => {
        const barScore = {};

        company.forEach((scoreCell) => {
          Object.assign(barScore, {
            name: scoreCell.company.name,
            ...scoreCell.label === 'Action' && { action: scoreCell.value },
            ...scoreCell.label === 'Effectiveness' && { effectiveness: scoreCell.value },
            ...scoreCell.label === 'Commitment' && { commitment: scoreCell.value },
            overallScore: (_overallScores.find(score =>
              score.company.id === scoreCell.company.id && score['indicator-id'] === +issueArea.id) || {}).value
          });
        });
        totalScores.push(barScore);
      });

      return {
        id: issueArea.id,
        label: issueArea.label,
        slug: issueArea.slug,
        scores: orderBy(totalScores, 'overallScore', 'desc'),
        bestPracticeScore: bestPracticeScore.value
      };
    });
  }
);

export default { getScoresByIssueArea };

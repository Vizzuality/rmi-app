
import { createSelector } from 'reselect';
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';

const scores = state => state.scores.list;
const indicators = state => state.indicators.list;

export const getScoresByIssueArea = createSelector(
  [scores, indicators],
  (_scores = [], _indicators = []) => {
    const scoresByIndicator = groupBy(_scores, 'indicator-id');
    return Object.keys(scoresByIndicator).map((indicatorId) => {
      const issueArea = _indicators.find(indicator => indicator.id === indicatorId) || {};
      const { slug, label } = issueArea;

      return ({
        id: indicatorId,
        label,
        slug,
        scores: orderBy(scoresByIndicator[indicatorId], ['value'], ['desc'])
          .map(score => ({
            id: score.id,
            company: score.company,
            value: score.value
          }))
      });
    });
  }
);

export default { getScoresByIssueArea };

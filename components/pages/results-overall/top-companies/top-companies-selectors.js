
import { createSelector } from 'reselect';
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';

// constants
import { COMPANIES_COLOURS } from './top-companies-constants';

const scores = state => state.scores.list;
const indicators = state => state.indicators.list;

export const getTopCompanies = createSelector(
  [scores, indicators],
  (_scores = [], _indicators = []) => {
    const scoresByIndicator = groupBy(_scores, 'indicator-id');
    return Object.keys(scoresByIndicator).map((indicatorId) => {
      const issueArea = _indicators.find(indicator => indicator.id === indicatorId) || {};
      const { slug, label } = issueArea;
      // removes duplicated scores
      const scoreValues = [...new Set(scoresByIndicator[indicatorId].map(score => score.value))];
      // sorts scores and limits them
      const topScores = orderBy(scoreValues, [], ['desc']).slice(0, 10);

      let currentPosition = 0;

      return ({
        id: indicatorId,
        label,
        slug,
        companies: orderBy(scoresByIndicator[indicatorId]
          .filter(score => topScores.includes(score.value)), ['value'], ['desc'])
          .map((score, index, scoresArray) => {
            const sharesTop = scoresArray[index - 1] &&
              scoresArray[index - 1].value === score.value;

            if (!sharesTop) currentPosition += 1;

            return ({
              id: score.company.id,
              name: score.company.name,
              slug: score.company.slug,
              score: score.value,
              position: `${currentPosition}.`,
              color: COMPANIES_COLOURS[score.company.slug]
            });
          })
      });
    });
  }
);

export default { getTopCompanies };

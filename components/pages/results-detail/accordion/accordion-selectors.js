import { createSelector } from 'reselect';
import orderBy from 'lodash/orderBy';
// constants
import { SCORE_COMPARISON_CONFIG } from 'components/common/score-comparison/score-comparison-constants';

// selectors
import { getIssueArea } from '../results-detail-selectors';

export const parseIndicators = createSelector(
  [getIssueArea],
  _issueArea => orderBy(_issueArea.children || [], 'code')
    .map((indicator = {}) => ({
      id: indicator.id,
      name: indicator.name,
      children: orderBy(indicator.children || [], 'code')
        .map(child => ({
          id: child.id,
          name: child.name,
          summary: (child || {}).summary,
          avg: child.avg,
          min: child.min,
          max: child.max,
          value: ((child.scores || [])[0] || {}).value,
          color: SCORE_COMPARISON_CONFIG[_issueArea.slug]
        }))
    }))
);

export default { parseIndicators };

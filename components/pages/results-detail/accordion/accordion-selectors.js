import { createSelector } from 'reselect';

// constants
import { SCORE_COMPARISON_CONFIG } from 'components/common/score-comparison/score-comparison-constants';

// selectors
import { getIssueArea } from '../results-detail-selectors';

export const parseIndicators = createSelector(
  [getIssueArea],
  _issueArea => (_issueArea.children || []).map((indicator = {}) => ({
    id: indicator.id,
    name: indicator.name,
    children: (indicator.children || []).map(child => ({
      id: child.id,
      name: child.name,
      observation: (child || {}).observation,
      avg: child.avg,
      min: child.min,
      max: child.max,
      value: ((child.scores || [])[0] || {}).value,
      color: SCORE_COMPARISON_CONFIG[_issueArea.slug]
    }))
  }))
);

export default { parseIndicators };

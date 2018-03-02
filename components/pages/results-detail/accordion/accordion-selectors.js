
import { createSelector } from 'reselect';

import { getIssueArea } from '../results-detail-selectors';

export const parseIndicators = createSelector(
  [getIssueArea],
  _issueArea => _issueArea.children.map(indicator => ({
    id: indicator.id,
    name: indicator.name,
    children: indicator.children.map(child => ({
      id: child.id,
      name: child.name,
      observation: child.observation,
      avg: child.avg,
      min: child.min,
      max: child.max
    }))
  }))
);

export default { parseIndicators };

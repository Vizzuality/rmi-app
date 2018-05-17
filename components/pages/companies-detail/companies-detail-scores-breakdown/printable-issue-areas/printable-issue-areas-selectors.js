
import { createSelector } from 'reselect';

// constants
import { SCORE_COMPARISON_CONFIG } from 'components/common/score-comparison/score-comparison-constants';

const indicators = state => state.indicators.list;
const scores = state => (state.companies.list[0] || {}).scores;

export const getIssueAreasList = createSelector(
  [indicators, scores],
  (_indicators = [], _scores = []) => {
    const issueAreas = _indicators.filter(indicator => indicator.kind === 'issue_areas');

    return issueAreas.map(issueArea => ({
      id: issueArea.id,
      name: issueArea.label,
      slug: issueArea.slug,
      data: _indicators.filter(indicator => indicator['parent-id'] === +issueArea.id)
        .map(subCategory => ({
          id: subCategory.id,
          name: subCategory.name,
          // A.01.1 Lorem ipsum...
          children: _indicators.filter(indicator =>
            indicator['parent-id'] === +subCategory.id)
            .map(ind => ({
              id: ind.id,
              name: ind.name,
              slug: ind.slug,
              min: ind.min,
              max: ind.max,
              avg: ind.avg,
              value: (_scores.find(score => score['indicator-id'] === +ind.id) || {}).value,
              color: SCORE_COMPARISON_CONFIG[issueArea.slug]
            }))
        }))
    }));
  }
);

export default { getIssueAreasList };

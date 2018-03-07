
import { createSelector } from 'reselect';

// constants
import { SCORE_COMPARISON_CONFIG } from 'components/common/score-comparison/score-comparison-constants';

const indicators = state => state.indicators.list;
const currentIssueArea = state => state.companiesDetailPage.issueArea;
const scores = state => (state.companies.list[0] || {}).scores;

export const getIssueAreaTree = createSelector(
  [indicators, currentIssueArea, scores],
  (_indicators, _currentIssueArea, _scores) => {
    // A. Lorem ipsum...
    const category = _indicators.find(indicator => indicator.id === _currentIssueArea) || {};

    // A.01 Lorem ipsum...
    const subCategories = _indicators.filter(indicator => indicator['parent-id'] === +category.id);

    return {
      name: category.label,
      data: subCategories.map(subCategory => ({
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
            color: SCORE_COMPARISON_CONFIG[category.slug]
          }))
      }))
    };
  }
);

export default { getIssueAreaTree };

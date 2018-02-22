
import { createSelector } from 'reselect';

const indicators = state => state.indicators.list;
const currentIssueArea = state => state.companiesDetailPage.issueArea;

export const getIssueAreaTree = createSelector(
  [indicators, currentIssueArea],
  (_indicators, _currentIssueArea) => {
    // A. Lorem ipsum...
    const category = _indicators.find(indicator => indicator.id === _currentIssueArea);

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
      }))
    };
  }
);

export const parseIssueAreas = createSelector(
  [indicators],
  _indicators => _indicators.filter(indicator =>
    indicator.kind === 'issue_areas')
    .map(indicator => ({ id: indicator.id, slug: indicator.slug }))
);

export default {
  getIssueAreaTree,
  parseIssueAreas
};

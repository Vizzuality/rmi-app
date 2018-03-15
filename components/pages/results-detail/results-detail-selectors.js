
import { createSelector } from 'reselect';

const issueAreas = state => state.resultsDetailPage.issueAreas;
const issueAreaId = state => (state.routes.query || {}).id;
const indicators = state => state.indicators.list;
const currentIssueArea = state => state.companiesDetailPage.issueArea;

export const getIssueAreaTree = createSelector(
  [indicators, currentIssueArea],
  (_indicators, _currentIssueArea) => {
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
      }))
    };
  }
);

export const parseIssueAreas = createSelector(
  [issueAreas],
  (_issueAreas = []) => {
    const overallOption = [{
      id: 0,
      label: 'Overall',
      value: 'overall',
      query: {
        route: 'results',
        params: { section: 'overall' }
      }
    }];

    const issueAreasOptions = _issueAreas.map(issueArea => ({
      id: issueArea.id,
      label: issueArea.label,
      value: issueArea.slug,
      query: {
        route: 'results',
        params: {
          section: 'thematic',
          id: issueArea.id
        }
      }
    }));

    return [...overallOption, ...issueAreasOptions];
  }
);

export const getIssueArea = createSelector(
  [issueAreas, issueAreaId],
  (_issueAreas = [], _issueAreaId) => _issueAreas.find(issueArea => issueArea.id === _issueAreaId)
);

export default {
  getIssueAreaTree,
  parseIssueAreas,
  getIssueArea
};

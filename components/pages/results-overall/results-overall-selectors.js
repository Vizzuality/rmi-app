
import { createSelector } from 'reselect';

const issueAreas = state => state.indicators.list;

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

export default { parseIssueAreas };

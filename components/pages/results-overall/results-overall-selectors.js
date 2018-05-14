
import { createSelector } from 'reselect';

const issueAreas = state => state.indicators.list;
const currentLanguage = state => state.language.current;

export const parseIssueAreas = createSelector(
  [issueAreas, currentLanguage],
  (_issueAreas = [], _currentLanguage) => {
    const overallOption = [{
      id: 0,
      label: 'Overall',
      value: 'overall',
      query: {
        route: 'results',
        params: {
          section: 'overall',
          language: _currentLanguage
        }
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
          id: issueArea.id,
          language: _currentLanguage
        }
      }
    }));

    return [...overallOption, ...issueAreasOptions];
  }
);

export default { parseIssueAreas };

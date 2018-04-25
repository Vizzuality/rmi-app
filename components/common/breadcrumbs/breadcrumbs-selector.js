
import { createSelector } from 'reselect';

// constants
import BREADCRUMBS_LABELS from './breadcrumbs-constants';

const routes = state => state.routes;
const currentLanguage = state => state.language.current;

export const getBreadcrumbs = createSelector(
  [routes, currentLanguage],
  (_routes, _currentLanguage) => {
    const breadcrumbs = [];
    const { root, tab, query } = _routes;
    const { section } = query;

    breadcrumbs.push({
      id: 1,
      label: 'Home',
      route: root,
      params: { language: _currentLanguage }
    });

    if (tab) {
      breadcrumbs.push({
        id: 2,
        label: BREADCRUMBS_LABELS[tab],
        route: tab,
        params: { language: _currentLanguage }
      });
    }

    if (section) {
      breadcrumbs.push({
        id: 3,
        label: BREADCRUMBS_LABELS[section],
        route: tab,
        params: {
          language: _currentLanguage,
          section
        }
      });
    }

    return breadcrumbs;
  }
);

export default { getBreadcrumbs };

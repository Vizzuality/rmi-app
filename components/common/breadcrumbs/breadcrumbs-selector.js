
import { createSelector } from 'reselect';

// constants
import BREADCRUMBS_LABELS from './breadcrumbs-constants';

const routes = state => state.routes;

export const getBreadcrumbs = createSelector(
  routes,
  (_routes) => {
    const breadcrumbs = [];
    const { root, tab, query } = _routes;
    const { section } = query;

    breadcrumbs.push({
      id: 1,
      label: 'Home',
      route: root
    });

    if (tab) {
      breadcrumbs.push({
        id: 2,
        label: BREADCRUMBS_LABELS[tab],
        route: tab
      });
    }

    if (section) {
      breadcrumbs.push({
        id: 3,
        label: BREADCRUMBS_LABELS[section],
        route: tab,
        params: { section }
      });
    }

    return breadcrumbs;
  }
);

export default {
  getBreadcrumbs
};

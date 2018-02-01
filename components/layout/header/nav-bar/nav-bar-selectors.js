
import { createSelector } from 'reselect';

// constants
import { INDEX_NAVIGATION, FOUNDATION_NAVIGATION } from './nav-bar-constants';

const routeRoot = state => state.routes.root;

export const getNavigation = createSelector(
  routeRoot,
  _routeRoot => _routeRoot === 'foundation' ? FOUNDATION_NAVIGATION : INDEX_NAVIGATION
);

export default {
  getNavigation
};

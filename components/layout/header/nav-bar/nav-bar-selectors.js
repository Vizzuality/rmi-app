
import { createSelector } from 'reselect';

// constants
import { INDEX_NAVIGATION, FOUNDATION_NAVIGATION } from './nav-bar-constants';

const routeRoot = state => state.routes.root;
const navChildren = state => state.navigation;

export const getNavigation = createSelector(
  [routeRoot, navChildren],
  (_routeRoot, _navChildren) => {
    const { aboutChildren } = _navChildren;
    const mainNav = _routeRoot === 'foundation' ? FOUNDATION_NAVIGATION : INDEX_NAVIGATION;

    if (aboutChildren) {
      const children = aboutChildren.map(aboutChild => ({
        id: aboutChild.id,
        label: aboutChild.title,
        query: {
          route: 'about',
          params: { section: aboutChild.slug }
        }
      }));

      const currentTreeIndex = mainNav.findIndex(tree => tree.query.route === 'about');
      if (currentTreeIndex === -1) return mainNav;
      const currentTree = mainNav.find(tree => tree.query.route === 'about');
      const treeWithChildren = Object.assign({}, currentTree, { children });

      mainNav[currentTreeIndex] = treeWithChildren;
    }

    return mainNav;
  }
);

export default {
  getNavigation
};

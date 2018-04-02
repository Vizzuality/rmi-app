
import { createSelector } from 'reselect';

// constants
import { INDEX_NAVIGATION, FOUNDATION_NAVIGATION } from './nav-bar-constants';

const routeRoot = state => state.routes.root;
const navChildren = state => state.navigation;
const indicators = state => state.indicators.list;

export const getNavigation = createSelector(
  [routeRoot, navChildren, indicators],
  (_routeRoot, _navChildren, _indicators) => {
    const isFoundation = _routeRoot === 'foundation';
    const { resultsChildren, aboutChildren } = _navChildren;
    const mainNav = isFoundation ? [...FOUNDATION_NAVIGATION] : [...INDEX_NAVIGATION];
    let firstStaticPages = [];

    // results tree - other pages
    if (!isFoundation && resultsChildren) {
      const children = resultsChildren.map(resultChildren => ({
        id: resultChildren.id,
        label: resultChildren.title,
        query: {
          route: 'results',
          params: { id: resultChildren.slug }
        }
      }));

      const childrenWithoutFirst = children.slice(2);
      firstStaticPages = [children[0], children[1]];

      const currentTreeIndex = mainNav.findIndex(tree => tree.query.route === 'results');
      if (currentTreeIndex === -1) return mainNav;
      const currentTree = mainNav[currentTreeIndex];
      const treeWithChildren = Object.assign(
        {},
        currentTree,
        {
          children: [
            ...currentTree.children,
            ...childrenWithoutFirst
          ]
        }
      );

      mainNav[currentTreeIndex] = treeWithChildren;
    }

    // results tree - indicators
    if (!isFoundation && _indicators.length) {
      const children = _indicators.filter(ind => ind.kind === 'issue_areas').map(indicatorChild => ({
        id: indicatorChild.id,
        label: indicatorChild.label,
        query: {
          route: 'results',
          params: {
            section: 'thematic',
            id: indicatorChild.id
          }
        }
      }));

      const currentTreeIndex = mainNav.findIndex(tree => tree.query.route === 'results');
      if (currentTreeIndex === -1) return mainNav;

      const subTreeIndex = mainNav[currentTreeIndex].children.findIndex(child => child.slug === 'thematic-areas');
      if (subTreeIndex === -1) return mainNav;

      const subTree = mainNav[currentTreeIndex].children[subTreeIndex];
      const subtreeWithChildren = Object.assign({}, subTree, { children });

      mainNav[currentTreeIndex].children[subTreeIndex] = subtreeWithChildren;

      firstStaticPages.reverse().forEach(sp => {
        mainNav[currentTreeIndex].children.unshift(sp);
      });
    }

    // about tree
    if (isFoundation && aboutChildren) {
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
      const currentTree = mainNav[currentTreeIndex];
      const treeWithChildren = Object.assign({}, currentTree, { children });

      mainNav[currentTreeIndex] = treeWithChildren;
    }

    return mainNav;
  }
);

export default { getNavigation };

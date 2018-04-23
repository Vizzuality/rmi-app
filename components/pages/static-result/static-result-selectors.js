
import { createSelector } from 'reselect';

const currentPage = state => state.routes.query.section;
const staticContents = state => (state.staticContent || {}).content;

export const getCurrentPage = createSelector(
  [currentPage, staticContents],
  (_currentPage, _staticContents = []) =>
    _staticContents.find(sc => sc.slug === _currentPage)
);

export default { getCurrentPage };

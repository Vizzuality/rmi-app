
import { createSelector } from 'reselect';

const indexSections = state => state.navigation.indexChildren;
const currentSection = state => state.routes.query.section;

export const getIndexSection = createSelector(
  [indexSections, currentSection],
  (_indexSections = [], _currentSection) =>
    _indexSections.find(section => section.slug === _currentSection) || {}
);

export default { getIndexSection };


import { createSelector } from 'reselect';

import { getNavigation } from 'components/layout/header/nav-bar/nav-bar-selectors';

export const getMobileNavigation = createSelector(
  [getNavigation],
  _nav => _nav
);

export default { getMobileNavigation };

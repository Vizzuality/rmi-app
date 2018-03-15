
import { createSelector } from 'reselect';

const mineSites = state => (state.companies.list[0] || {})['mine-sites'];

export const getAllMineSites = createSelector(
  mineSites,
  (_mineSites = []) => _mineSites.filter(mineSite => !mineSite['closed-mine'] && !mineSite['sold-after-may-2015'])
);

export const getClosedMineSites = createSelector(
  mineSites,
  (_mineSites = []) => _mineSites.filter(mineSite => mineSite['closed-mine'])
);

export const getAssetsSoldAfterMay = createSelector(
  mineSites,
  (_mineSites = []) => _mineSites.filter(mineSite => mineSite['sold-after-may-2015'])
);

export default {
  getClosedMineSites,
  getAssetsSoldAfterMay,
  getAllMineSites
};

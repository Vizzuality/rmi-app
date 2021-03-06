
import { createSelector } from 'reselect';
import orderBy from 'lodash/orderBy';

const mineSites = state => (state.companies.list[0] || {})['mine-sites'];

export const getAllMineSites = createSelector(
  mineSites,
  (_mineSites = []) =>
    orderBy(_mineSites.filter(mineSite =>
      !mineSite['closed-mine'] && !mineSite['sold-after-may-2015']
    ).map(mineSite =>
      mineSite['in-rmi-scope'] ? ({...mineSite}) : ({...mineSite, name: `${mineSite.name}*`})
    ), 'name', ['asc'])
);

export const getClosedMineSites = createSelector(
  mineSites,
  (_mineSites = []) =>
    orderBy(_mineSites.filter(mineSite =>
      mineSite['closed-mine']
    ), 'name', ['asc'])
);

export const getAssetsSoldAfterMay = createSelector(
  mineSites,
  (_mineSites = []) =>
    orderBy(_mineSites.filter(mineSite =>
      mineSite['sold-after-may-2015']
    ), 'name', ['asc'])
);

export const hasJointVentureExcluded = createSelector(
  mineSites,
  (_mineSites = []) =>
    !!(_mineSites.filter(mineSite =>
      !mineSite['closed-mine'] && !mineSite['sold-after-may-2015']
    ).find(mineSite => !mineSite['in-rmi-scope']))
);

export default {
  getClosedMineSites,
  getAssetsSoldAfterMay,
  getAllMineSites,
  hasJointVentureExcluded
};

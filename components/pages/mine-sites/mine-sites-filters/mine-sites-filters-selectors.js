
import { createSelector } from 'reselect';

const mineSites = state => state.mineSites.list;
const selectedMineSite = state => state.mineSitesPage.filters.selectedMineSite;

export const parseMineSites = createSelector(
  [mineSites],
  (_mineSites = []) => _mineSites.filter(mineSite => mineSite['selected-for-mine-site-indicators'])
    .map(mineSite => ({ label: mineSite.name, value: mineSite.id }))
);

export const geCurrentMineSiteOption = createSelector(
  [mineSites, selectedMineSite],
  (_mineSites = [], _selectedMineSite) => {
    const currentOption = _mineSites.find(mineSite => mineSite.id === _selectedMineSite) || {};

    return {
      label: currentOption.name,
      value: currentOption.id
    };
  }
);


export default {
  parseMineSites,
  geCurrentMineSiteOption
};


import { createSelector } from 'reselect';

const mineSites = state => state.mineSites.list;

export const parseMineSites = createSelector(
  [mineSites],
  (_mineSites = []) => _mineSites.filter(mineSite => mineSite['selected-for-mine-site-indicators'])
    .map(mineSite => ({ label: mineSite.name, value: mineSite.id }))
);


export default { parseMineSites };


import { createSelector } from 'reselect';

const indicators = state => state.indicators.list;
const scores = state => (state.mineSites.list[0] || {}).scores;

export const getMineSiteIndicatorsTree = createSelector(
  [indicators, scores],
  (_indicators, _scores) => {
    // MS.0X Lorem ipsum...
    // change this for kind !
    const parentMineSiteIndicators = _indicators.filter(indicator => indicator.code.includes('MS.') && indicator.level === 1);

    return parentMineSiteIndicators.map(parentIndicator => ({
      id: parentIndicator.id,
      name: parentIndicator.name,
      // MS.0X.X Lorem ipsum...
      children: _indicators.filter(indicator =>
        indicator['parent-id'] === +parentIndicator.id)
        .map(ind => ({
          id: ind.id,
          name: ind.name,
          slug: ind.slug,
          min: ind.min,
          max: ind.max,
          avg: ind.avg,
          value: (_scores.find(score => score['indicator-id'] === +ind.id) || {}).value
        }))
    }));
  }
);

export default { getMineSiteIndicatorsTree };


import { createSelector } from 'reselect';

const indicators = state => state.indicators.list;

export const getMineSiteIndicatorsTree = createSelector(
  [indicators],
  (_indicators) => {
    // MS.0X Lorem ipsum...
    // change this for kind !
    const parentMineSiteIndicators = _indicators.filter(indicator => indicator.code.includes('MS.') && indicator.level === 1);

    return parentMineSiteIndicators.map(parentIndicator => ({
      id: parentIndicator.id,
      name: parentIndicator.name,
      // MS.0X.X Lorem ipsum...
      children: _indicators.filter(indicator =>
        indicator['parent-id'] === +parentIndicator.id)
    }));
  }
);

export default { getMineSiteIndicatorsTree };

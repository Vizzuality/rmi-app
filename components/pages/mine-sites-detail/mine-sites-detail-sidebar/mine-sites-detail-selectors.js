
import { createSelector } from 'reselect';

const mineSite = state => state.mineSites.list[0] || {};

export const parseMineSite = createSelector(
  mineSite,
  _mineSite => ({
    aliases: _mineSite.aliases,
    miningType: _mineSite['mining-type'],
    products: _mineSite.commodities.map(commodity => commodity.name).join(', '),
    openingYear: _mineSite['opening-year'],
    acquisitionYear: _mineSite['acquisition-year'],
    company: _mineSite.company,
    companyShare: _mineSite['company-share']
  })
);

export default { parseMineSite };

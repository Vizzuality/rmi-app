
import { createSelector } from 'reselect';
import { paths } from 'components/common/map/map-helpers';

// constants
import { EXCLUDED_COUNTRIES } from 'constants/map';

const countries = state => state.countries.list;
const company = state => state.companies.list[0];
const indicators = state => state.indicators.list;

export const getUpdatedPaths = createSelector(
  [countries, company],
  (_countries = [], _company = {}) =>
    paths.filter(p => !EXCLUDED_COUNTRIES.includes(p.properties.ISO_A3))
      .map((geography, index) => {
        const {
          country: companyCountry,
          'secondary-country': companySecondaryCountry,
          'producing-countries': companyProducingCountries

        } = _company;
        const homeCountries = [(companyCountry || {}).code, (companySecondaryCountry || {}).code];
        const producingCountries = (companyProducingCountries || []).map(country => country.code);
        const { ISO_A3: iso } = geography.properties;
        const country = _countries.find(_country => _country.code === iso) || {};

        if (!country) return false;

        return {
          ...geography,
          properties: {
            ...geography.properties,
            id: index,
            isHome: homeCountries.includes((country || {}).code),
            isProducing: producingCountries.includes((country || {}).code)
          }
        };
      })
);

export const getIssueAreas = createSelector(
  indicators,
  (_indicators = []) =>
    _indicators.filter(indicator => indicator.kind === 'issue_areas')
);

export const getMarkers = createSelector(
  company,
  (_company = {}) =>
    (_company['mine-sites'] || []).map(mineSite => ({
      id: mineSite.id,
      name: mineSite.name,
      coordinates: [mineSite['coord-y'], mineSite['coord-x']]
    }))
);

export default {
  getUpdatedPaths,
  getIssueAreas,
  getMarkers
};

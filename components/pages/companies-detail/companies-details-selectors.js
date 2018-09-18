import { createSelector } from 'reselect';
import { paths } from 'components/common/map/map-helpers';
import compact from 'lodash/compact';

// constants
import { EXCLUDED_COUNTRIES } from 'constants/map';

const countries = state => state.countries.list;
const companies = state => state.companies.list;
const companyId = state => state.routes.query.company;
const indicators = state => state.indicators.list;

export const getCompany = createSelector(
  [companies, companyId],
  (_companies, _companyId) => _companies.find(comp => comp.id === _companyId) || {}
);

export const getUpdatedPaths = createSelector(
  [countries, getCompany],
  (_countries = [], _company = {}) => {
    // if the company is not found yet or countries are not loaded,
    // return the map without any country filled
    if (!_countries.length && !Object.keys(_company).length) {
      return paths.map((geography, index) => ({
        ...geography,
        properties: {
          ...geography.properties,
          id: index
        }
      }));
    }

    return paths.filter(p => !EXCLUDED_COUNTRIES.includes(p.properties.iso_a3))
      .map((geography, index) => {
        const {
          country: companyCountry,
          'secondary-country': companySecondaryCountry,
          'producing-countries': companyProducingCountries
        } = _company;
        const homeCountries = [(companyCountry || {}).code, (companySecondaryCountry || {}).code];
        const producingCountries = (companyProducingCountries || []).map(country => country.code);
        const { iso_a3: iso } = geography.properties;
        const country = _countries.find(_country => _country.code === iso) || {};

        if (!country) return false;

        return {
          ...geography,
          properties: {
            ...geography.properties,
            id: index,
            isHome: compact(homeCountries).includes((country || {}).code),
            isProducing: producingCountries.includes((country || {}).code)
          }
        };
      });
  }

);

export const getIssueAreas = createSelector(
  indicators,
  (_indicators = []) =>
    _indicators.filter(indicator => indicator.kind === 'issue_areas')
);

export const getMarkers = createSelector(
  getCompany,
  (_company = {}) =>
    (_company['selected-mine-sites'] || []).map(mineSite => ({
      id: mineSite.id,
      name: mineSite.name,
      country: mineSite.country.name,
      coordinates: [mineSite['coord-y'], mineSite['coord-x']]
    }))
);

export default {
  getUpdatedPaths,
  getIssueAreas,
  getMarkers
};

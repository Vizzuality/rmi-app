
import { createSelector } from 'reselect';
import { paths } from 'components/common/map/map-helpers';
import flatten from 'lodash/flatten';

// constants
import { EXCLUDED_COUNTRIES } from 'constants/map';

const countries = state => state.countries.list;
const countriesWithCompanies = state => state.companiesFilters.countries;
const companies = state => state.companies.list;

export const getUpdatedPaths = createSelector(
  [countries, countriesWithCompanies],
  (_countries = [], _countriesWithCompanies) =>
    paths.filter(p => !EXCLUDED_COUNTRIES.includes(p.properties.ISO_A3))
      .map((geography, index) => {
        const geographyProperties = geography.properties;
        const iso = geographyProperties.ISO_A3;
        const country = _countries.find(_country => _country.code === iso) || {};
        const isClicklable = !!(_countriesWithCompanies.find(c => c.code === iso));

        return {
          ...geography,
          properties: {
            ...geography.properties,
            id: index,
            isClicklable,
            countryId: country.id,
            isHome: !!((country.companies || []).length || (country.secondaryCompanies || []).length),
            isProducing: !!((country.producingCompanies || []).length)
          }
        };
      })
);

export const getMarkers = createSelector(
  companies,
  (_companies = {}) =>
    flatten(_companies.map(company =>
        (company['selected-mine-sites'] || []).map(mineSite => ({
          id: mineSite.id,
          name: mineSite.name,
          coordinates: [mineSite['coord-y'], mineSite['coord-x']]
        }))
      )
    )
);

export default {
  getUpdatedPaths,
  getMarkers
};

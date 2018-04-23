
import { createSelector } from 'reselect';
import { paths } from 'components/common/map/map-helpers';
import flatten from 'lodash/flatten';

// constants
import { EXCLUDED_COUNTRIES } from 'constants/map';

// helpers
import { mineSiteFilter } from './mine-sites-helpers';

const countries = state => state.countries.list;
const companies = state => state.companies.list;
const filters = state => state.mineSitesPage.filters;

export const getUpdatedPaths = createSelector(
  countries,
  (_countries = []) =>
    paths.filter(p => !EXCLUDED_COUNTRIES.includes(p.properties.ISO_A3))
      .map((geography, index) => {
        const geographyProperties = geography.properties;
        const iso = geographyProperties.ISO_A3;
        const country = _countries.find(_country => _country.code === iso) || {};

        return {
          ...geography,
          properties: {
            ...geography.properties,
            id: index,
            isHome: !!((country.companies || []).length ||
              (country.secondaryCompanies || []).length),
            isProducing: !!((country.producingCompanies || []).length)
          }
        };
      })
);

export const getMarkers = createSelector(
  [companies, filters],
  (_companies = [], _filters) =>
    flatten(_companies.map(company =>
      (company['selected-mine-sites'] || [])
        .filter(mineSite => mineSiteFilter(mineSite, _filters))
        .map(ms => ({
          id: ms.id,
          name: ms.name,
          country: ms.country.name,
          coordinates: [ms['coord-y'], ms['coord-x']]
        }))))
);

export default {
  getUpdatedPaths,
  getMarkers
};

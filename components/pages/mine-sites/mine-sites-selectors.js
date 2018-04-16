
import { createSelector } from 'reselect';
import { paths } from 'components/common/map/map-helpers';
import flatten from 'lodash/flatten';

// constants
import { EXCLUDED_COUNTRIES } from 'constants/map';

const countries = state => state.countries.list;
const companies = state => state.companies.list;
const selectedCompany = state => state.mineSitesPage.filters.selectedCompany;

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
            isHome: !!((country.companies || []).length || (country.secondaryCompanies || []).length),
            isProducing: !!((country.producingCompanies || []).length)
          }
        };
      })
);

export const getMarkers = createSelector(
  [companies, selectedCompany],
  (_companies = [], _selectedCompany) =>
    flatten(_companies.map(company =>
      (company['selected-mine-sites'] || [])
        .filter(mineSite => (_selectedCompany ? mineSite['company-id'] === _selectedCompany : true))
        .map(mineSite => ({
          id: mineSite.id,
          name: mineSite.name,
          coordinates: [mineSite['coord-y'], mineSite['coord-x']]
        }))))
);

export default {
  getUpdatedPaths,
  getMarkers
};


import { createSelector } from 'reselect';
import { paths } from 'components/common/map/map-helpers';

// constants
import { EXCLUDED_COUNTRIES } from 'constants/map';

const countries = state => state.countries.list;
const companies = state => state.companies.list;

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
  companies,
  (_companies = []) => {
    const mineSites = [];

    _companies.forEach(company =>
      company['selected-mine-sites'].forEach((mineSite) => {
        mineSites.push(({
          id: mineSite.id,
          name: mineSite.name,
          coordinates: [mineSite['coord-y'], mineSite['coord-x']]
        }));
      }));

    return mineSites;
  }
);


export default {
  getUpdatedPaths,
  getMarkers
};

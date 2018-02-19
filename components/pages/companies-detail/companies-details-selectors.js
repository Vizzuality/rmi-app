
import { createSelector } from 'reselect';
import paths from 'components/common/map/map-helpers';

const countries = state => state.countries.list;

export const getUpdatedPaths = createSelector(
  countries,
  (_countries = []) =>
    paths.map((geography, index) => {
      const geographyProperties = geography.properties;
      const iso = geographyProperties.ISO_A3;
      const country = _countries.find(_country => _country.code === iso) || {};

      return {
        ...geography,
        properties: {
          ...geography.properties,
          id: index,
          isHome: !!((country.companies || []).length),
          isProducing: !!((country.producingCompanies || []).length)
        }
      };
    })
);

export default { getUpdatedPaths };


import { createSelector } from 'reselect';

// constants
import { COMPARISON_COUNTRY_KEYS } from './mine-sites-detail-country-comparison-constants';

const mineSite = state => state.mineSites.list[0];

export const getCountries = createSelector(
  [mineSite],
  (_mineSite = {}) => {
    const {
      country: producingCountry,
      company
    } = _mineSite;
    const { country: homeCountry } = company;

    return {
      producingCountryName: producingCountry.name,
      homeCountryName: homeCountry.name
    };
  }
);


export const parseCountries = createSelector(
  [mineSite],
  (_mineSite = {}) => {
    const {
      country: producingCountry,
      company
    } = _mineSite;
    const { country: homeCountry } = company;

    return Object.keys(COMPARISON_COUNTRY_KEYS).map(key => ({
      key: COMPARISON_COUNTRY_KEYS[key](homeCountry),
      producingCountry: producingCountry[key] || '-',
      homeCountry: homeCountry[key] || '-'
    }));
  }
);

export default {
  getCountries,
  parseCountries
};

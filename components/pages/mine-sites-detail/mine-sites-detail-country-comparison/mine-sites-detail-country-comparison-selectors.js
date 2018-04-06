
import { createSelector } from 'reselect';
import groupBy from 'lodash/groupBy';

// constants
import { COMPARISON_COUNTRY_KEYS } from './mine-sites-detail-country-comparison-constants';

const mineSite = state => state.mineSites.list[0];

export const getCountries = createSelector(
  [mineSite],
  (_mineSite = {}) => {
    const { company } = _mineSite;
    const { country: producingCountry } = company;

    return { producingCountryName: producingCountry.name };
  }
);


export const parseCountries = createSelector(
  [mineSite],
  (_mineSite = {}) => {
    const { country: producingCountry } = _mineSite;

    return groupBy(Object.keys(COMPARISON_COUNTRY_KEYS).map(key => ({
      key: COMPARISON_COUNTRY_KEYS[key].title(producingCountry),
      producingCountry: COMPARISON_COUNTRY_KEYS[key].value(producingCountry),
      group: COMPARISON_COUNTRY_KEYS[key].group
    })), 'group');
  }
);

export default {
  getCountries,
  parseCountries
};

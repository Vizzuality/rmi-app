
import { createSelector } from 'reselect';

const countries = state => state.countries.list;
const commodities = state => state.commodities.list;
const filters = state => state.companiesPage.filters;

export const parseCountries = createSelector(
  [countries, filters],
  (_countries = [], _filters = []) => {
    const { country: selectedCountry } = _filters;

    return _countries.map(country => ({
      label: country.name,
      value: country.code,
      selected: country.code === selectedCountry
    }));
  }

);

export const parseCommodities = createSelector(
  commodities,
  (_commodities = []) =>
    _commodities.map(commodity => ({ label: commodity.name, value: commodity.id }))
);


export default {
  parseCountries,
  parseCommodities
};

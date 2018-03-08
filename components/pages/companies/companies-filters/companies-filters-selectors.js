
import { createSelector } from 'reselect';

const countries = state => state.companiesFilters.countries;
const commodities = state => state.commodities.list;

export const parseCountries = createSelector(
  [countries],
  (_countries = []) => _countries.map(country => ({ label: country.name, value: country.id }))
);

export const parseCommodities = createSelector(
  [commodities],
  (_commodities = []) =>
    _commodities.map(commodity => ({ label: commodity.name, value: commodity.id }))
);


export default {
  parseCountries,
  parseCommodities
};

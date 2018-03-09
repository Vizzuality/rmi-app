import { createAction, createThunkAction } from 'redux-tools';
import Jsona from 'jsona';

// services
import countriesService from 'services/countries';

export const setCountries = createAction('companies-filters/setCountries');

export const getCountriesWithCompanies = createThunkAction('companies-filters/getCountriesWithCompanies', _options =>
  dispatch =>
    new Promise((resolve, reject) => {
      countriesService.getCountries(_options)
        .then((data) => {
          const parsedData = new Jsona().deserialize(data);
          resolve(parsedData);
          dispatch(setCountries(parsedData));
        })
        .catch(errors => reject(errors));
    }));

export default {
  setCountries,
  getCountriesWithCompanies
};

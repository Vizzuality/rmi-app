import { createAction, createThunkAction } from 'redux-tools';
import { Deserializer } from 'jsonapi-serializer';

// services
import CountriesService from 'services/countries';

export const setCountries = createAction('companies/setCountries');
export const setCountriesError = createAction('companies/setCountriesError');

export const getCountries = createThunkAction('companies/getCompanies', _options =>
  (dispatch) => {
    const deserializer = new Deserializer({ keyForAttribute: 'camelCase' });

    return new Promise((resolve, reject) => {
      CountriesService.getCountries(_options)
        .then((data) => {
          deserializer.deserialize(data)
            .then((parsedData) => {
              resolve(parsedData);
              dispatch(setCountries(parsedData));
            })
            .catch(errors => reject(errors));
        });
    });
  });

export default {
  setCountries,
  setCountriesError,
  getCountries
};

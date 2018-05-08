import { createAction, createThunkAction } from 'redux-tools';
import Jsona from 'jsona';

// services
import CompaniesService from 'services/companies';
import ScoresService from 'services/scores';

export const setCompanies = createAction('companies/setCompanies');
export const resetCompanies = createAction('companies/resetCompanies');
export const setCompaniesLoading = createAction('companies/setCompaniesLoading');
export const setCompaniesScores = createAction('companies/setCompaniesScores');
export const setCompaniesError = createAction('companies/setCompaniesError');

export const getCompanies = createThunkAction('companies/getCompanies', _options =>
  (dispatch, getState) => {
    const { companiesPage } = getState();
    const { country, commodities } = companiesPage.filters;

    const options = {
      ..._options,
      'filter[country]': country,
      'filter[commodities]': commodities ? commodities.join(',') : undefined
    };

    dispatch(setCompaniesLoading(true));

    return new Promise((resolve, reject) => {
      CompaniesService.getCompanies(options)
        .then((data) => {
          const parsedData = new Jsona().deserialize(data);

          resolve(parsedData);
          dispatch(setCompaniesLoading(false));
          dispatch(setCompanies(parsedData));
        })
        .catch(errors => reject(errors));
    });
  });


export const getCompany = createThunkAction('companies/getCompany', _options =>
  (dispatch) => {
    const { companyId, queryParams } = _options;

    dispatch(setCompaniesLoading(true));

    return new Promise((resolve, reject) => {
      CompaniesService.getCompany(companyId, queryParams)
        .then((data) => {
          const parsedData = new Jsona().deserialize(data);

          resolve([parsedData]);
          dispatch(setCompaniesLoading(false));
          dispatch(setCompanies([parsedData]));
        })
        .catch(errors => reject(errors));
    });
  });

export const getCompaniesScores = createThunkAction('companies/getCompaniesScores', _options =>
  dispatch =>
    new Promise((resolve, reject) => {
      ScoresService.getScores(_options)
        .then((data) => {
          const parsedData = new Jsona().deserialize(data);

          resolve(parsedData);
          dispatch(setCompaniesScores(parsedData));
        })
        .catch(errors => reject(errors));
    }));


export default {
  setCompanies,
  setCompaniesError,
  getCompanies,
  getCompany,
  getCompaniesScores
};

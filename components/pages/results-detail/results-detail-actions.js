import { createAction, createThunkAction } from 'redux-tools';
import Jsona from 'jsona';

// services
import IndicatorsService from 'services/indicators';

export const setIssueAreas = createAction('results-detail-page/setIssueAreas');
export const setIssueAreasLoading = createAction('results-detail-page/setIssueAreasLoading');
export const setIssueAreasError = createAction('results-detail-page/setIssueAreasError');
export const setSelectedCompany = createAction('results-detail-page/setSelectedCompany');
export const resetSelectedCompany = createAction('results-detail-page/resetSelectedCompany');

export const getIssueAreas = createThunkAction('results-detail-page/getIssueAreas', _options =>
  dispatch =>
    new Promise((resolve, reject) => {
      IndicatorsService.getIndicators(_options)
        .then((data) => {
          const parsedData = new Jsona().deserialize(data);

          resolve(parsedData);
          dispatch(setIssueAreas(parsedData));
        })
        .catch(errors => reject(errors));
    }));

export default {
  setIssueAreas,
  setIssueAreasLoading,
  setIssueAreasError,
  setSelectedCompany,
  resetSelectedCompany,
  getIssueAreas
};

import { createAction, createThunkAction } from 'redux-tools';
import Jsona from 'jsona';

// services
import MethodologyService from 'services/foundation/methodology';

export const setContent = createAction('methodology-page/setContent');
export const setLoading = createAction('methodology-page/setLoading');

export const getMethodology = createThunkAction('methodology-page/getMethodology', _options =>
  dispatch =>
    new Promise((resolve, reject) => {
      dispatch(setLoading(true));
      MethodologyService.getMethodology(_options)
        .then((data) => {
          const parsedData = new Jsona().deserialize(data);
          resolve(parsedData);

          dispatch(setContent(parsedData));

          dispatch(setLoading(false));
        })
        .catch(errors => reject(errors));
    }));

export default {
  setContent,
  setLoading,
  getMethodology
};

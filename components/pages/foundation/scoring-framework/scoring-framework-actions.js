import { createAction, createThunkAction } from 'redux-tools';
import Jsona from 'jsona';

// services
import ScoringFrameworkService from 'services/foundation/scoring-framework';

export const setContent = createAction('scoring-framework-page/setContent');
export const setLoading = createAction('scoring-framework-page/setLoading');

export const getScoringFramework = createThunkAction('scoring-framework-page/getScoringFramework', _options =>
  dispatch =>
    new Promise((resolve, reject) => {
      dispatch(setLoading(true));
      ScoringFrameworkService.getScoringFramework(_options)
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
  getScoringFramework
};

import { createAction, createThunkAction } from 'redux-tools';
import Jsona from 'jsona';

// services
import scoresService from 'services/scores';

export const setScores = createAction('overall-results-page/setScores');
export const setLoadingScores = createAction('overall-results-page/setLoadingScores');

export const getScores = createThunkAction('overall-results-page/getScores', _options =>
  dispatch =>
    new Promise((resolve, reject) => {
      const { key, queryParams } = _options;
      dispatch(setLoadingScores({
        key,
        value: true
      }));
      scoresService.getScores(queryParams)
        .then((data) => {
          const parsedData = new Jsona().deserialize(data);
          resolve(parsedData);


          dispatch(setScores({
            key,
            value: parsedData
          }));

          dispatch(setLoadingScores({
            key,
            value: false
          }));
        })
        .catch(errors => reject(errors));
    }));

export default {
  setScores,
  setLoadingScores
};

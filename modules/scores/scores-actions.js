import { createAction, createThunkAction } from 'redux-tools';
import Jsona from 'jsona';

// services
import scoresService from 'services/scores';

export const setScores = createAction('scores/setScores');

export const getScores = createThunkAction('scores/getScores', _options =>
  dispatch =>
    new Promise((resolve, reject) => {
      scoresService.getScores(_options)
        .then((data) => {
          const parsedData = new Jsona().deserialize(data);
          resolve(parsedData);
          dispatch(setScores(parsedData));
        })
        .catch(errors => reject(errors));
    }));

export default {
  setScores,
  getScores
};

import { createAction, createThunkAction } from 'redux-tools';
import Jsona from 'jsona';

// services
import MineSitesService from 'services/mine-sites';

export const setMineSites = createAction('mine-sites/setMineSites');

export const getMineSites = createThunkAction('mine-sites/getMineSites', _options =>
  dispatch =>
    new Promise((resolve, reject) => {
      MineSitesService.getMineSites(_options)
        .then((data) => {
          const parsedData = new Jsona().deserialize(data);

          resolve(parsedData);
          dispatch(setMineSites(parsedData));
        })
        .catch(errors => reject(errors));
    }));

export const getMineSite = createThunkAction('mine-sites/getMineSite', _options =>
  (dispatch) => {
    const { mineSiteId, queryParams } = _options;

    return new Promise((resolve, reject) => {
      MineSitesService.getMineSite(mineSiteId, queryParams)
        .then((data) => {
          const parsedData = new Jsona().deserialize(data);

          resolve([parsedData]);
          dispatch(setMineSites([parsedData]));
        })
        .catch(errors => reject(errors));
    });
  });

export default {
  setMineSites,
  getMineSite
};

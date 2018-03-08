import { createAction, createThunkAction } from 'redux-tools';
import Jsona from 'jsona';

// actions
import { setPaginationSize } from 'modules/documents/documents-actions';

// services
import MineSitesService from 'services/mine-sites';

export const setMineSites = createAction('mine-sites/setMineSites');

export const getMineSite = createThunkAction('mine-sites/getMineSite', _options =>
  (dispatch) => {
    const { mineSiteId, queryParams } = _options;

    return new Promise((resolve, reject) => {
      MineSitesService.getMineSite(mineSiteId, queryParams)
        .then((data) => {
          const parsedData = new Jsona().deserialize(data);
          console.log(parsedData)
          // dispatch(setPaginationSize(data.meta['record-count']));

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

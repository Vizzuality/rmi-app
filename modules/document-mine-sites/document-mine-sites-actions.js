import { createAction, createThunkAction } from 'redux-tools';
import Jsona from 'jsona';

// services
import documentMineSitesService from 'services/document-mine-sites';

export const setDocumentMineSites = createAction('document-mine-sites/setDocumentMineSites');

export const getDocumentMineSites = createThunkAction('document-mine-sites/getDocumentMineSites', _options =>
  dispatch =>
    new Promise((resolve, reject) => {
      documentMineSitesService.getDocumentMineSites(_options)
        .then((data) => {
          const parsedData = new Jsona().deserialize(data);
          resolve(parsedData);
          dispatch(setDocumentMineSites(parsedData));
        })
        .catch(errors => reject(errors));
    }));

export default {
  setDocumentMineSites,
  getDocumentMineSites
};

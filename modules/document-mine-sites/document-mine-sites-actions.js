import { createAction, createThunkAction } from 'redux-tools';
import Jsona from 'jsona';

// services
import documentMineSitesService from 'services/document-mine-sites';

export const setDocumentMineSites = createAction('document-mine-sites/setDocumentMineSites');
export const setLoading = createAction('document-mine-sites/setLoading');

// search
export const setSearch = createAction('document-mine-sites/setSearch');
export const resetSearch = createAction('document-mine-sites/resetSearch');

// pagination
export const setPaginationPage = createAction('document-mine-sites/setPaginationPage');
export const setPaginationSize = createAction('document-mine-sites/setPaginationSize');
export const setPaginationLimit = createAction('document-mine-sites/setPaginationLimit');
export const resetPagination = createAction('document-mine-sites/resetPagination');

export const getDocumentMineSites = createThunkAction('document-mine-sites/getDocumentMineSites', _options =>
  (dispatch, getState) => {
    const { documentMineSites } = getState();
    const { pagination, search } = documentMineSites;
    const { page, limit } = pagination;

    const options = {
      ..._options,
      'page[number]': page,
      'page[size]': limit,
      'filter[name]': search === '' || !search ? undefined : search,
    };

    dispatch(setLoading(true));

    return new Promise((resolve, reject) => {
      documentMineSitesService.getDocumentMineSites(options)
        .then((data) => {
          dispatch(setPaginationSize(data.meta['record-count']));

          const parsedData = new Jsona().deserialize(data);
          resolve(parsedData);
          dispatch(setDocumentMineSites(parsedData));
          dispatch(setLoading(false));
        })
        .catch(errors => reject(errors));
    });
  });

export default {
  setDocumentMineSites,
  getDocumentMineSites
};

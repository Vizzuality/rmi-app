import { createAction, createThunkAction } from 'redux-tools';
import Jsona from 'jsona';

// services
import documentsService from 'services/documents';

export const setDocuments = createAction('documents/setDocuments');
export const setLoading = createAction('documents/setLoading');

// search
export const setSearch = createAction('documents/setSearch');
export const resetSearch = createAction('documents/resetSearch');

// filters
export const setFilters = createAction('documents/setFilters');
export const resetFilters = createAction('documents/resetFilters');

// pagination
export const setPaginationPage = createAction('documents/setPaginationPage');
export const setPaginationSize = createAction('documents/setPaginationSize');
export const setPaginationLimit = createAction('documents/setPaginationLimit');
export const resetPagination = createAction('documents/resetPagination');
export const resetPaginationLimit = createAction('documents/resetPaginationLimit');

export const getDocuments = createThunkAction('documents/getDocuments', _options =>
  (dispatch, getState) => {
    const { documents } = getState();
    const { pagination, search, filters } = documents;
    const { page, limit } = pagination;

    const options = {
      ..._options,
      'page[number]': page,
      'page[size]': limit,
      'filter[name]': search === '' || !search ? undefined : search,
      'filter[company]': filters.company || undefined,
      'filter[mine-site]': filters.mineSite || undefined
    };

    dispatch(setLoading(true));

    return new Promise((resolve, reject) => {
      documentsService.getDocuments(options)
        .then((data) => {
          dispatch(setPaginationSize(data.meta['record-count']));

          const parsedData = new Jsona().deserialize(data);
          resolve(parsedData);
          dispatch(setDocuments(parsedData));
          dispatch(setLoading(false));
        })
        .catch(errors => reject(errors));
    });
  });


export default {
  setDocuments,
  getDocuments
};

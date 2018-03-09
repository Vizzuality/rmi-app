import * as actions from './document-mine-sites-actions';
import initialState from './document-mine-sites-initial-state';

export default { 
  [actions.setDocumentMineSites]: (state, { payload }) => ({ ...state, list: payload }),
  [actions.setLoading]: (state, { payload }) => ({ ...state, loading: payload }),
  [actions.setSearch]: (state, { payload }) => ({ ...state, search: payload }),
  [actions.resetSearch]: state => ({ ...state, search: initialState.search }),
  [actions.setPaginationPage]: (state, { payload }) => ({
    ...state,
    pagination: {
      ...state.pagination,
      page: payload
    }
  }),
  [actions.setPaginationSize]: (state, { payload }) => ({
    ...state,
    pagination: {
      ...state.pagination,
      size: payload
    }
  }),
  [actions.setPaginationLimit]: (state, { payload }) => ({
    ...state,
    pagination: {
      ...state.pagination,
      limit: payload
    }
  }),
  [actions.resetPagination]: state => ({ ...state, pagination: initialState.pagination })
};

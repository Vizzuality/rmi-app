import * as actions from './documents-actions';
import initialState from './documents-initial-state';

export default {
  [actions.setDocuments]: (state, { payload }) => ({ ...state, list: payload }),
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
  [actions.resetPagination]: state => ({ ...state, pagination: initialState.pagination })
};

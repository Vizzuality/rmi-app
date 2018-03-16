import * as actions from './subsidiaries-actions';
import initialState from './subsidiaries-initial-state';

export default {
  [actions.setSubsidiaries]: (state, { payload }) => ({ ...state, list: payload }),
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

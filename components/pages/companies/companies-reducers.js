
import * as actions from './companies-actions';
import initialState from './companies-initial-state';

export default {
  [actions.setFilters]: (state, { payload }) => ({
    ...state,
    filters: {
      ...state.filters,
      ...payload
    }
  }),
  [actions.resetFilters]: state => ({ ...state, filters: initialState.filters })
};

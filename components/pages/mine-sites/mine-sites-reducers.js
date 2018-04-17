
import * as actions from './mine-sites-actions';
import initialState from './mine-sites-initial-state';

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

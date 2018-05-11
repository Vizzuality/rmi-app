
import * as actions from './mine-sites-actions';

export default {
  [actions.setMineSites]: (state, { payload }) => ({
    ...state,
    list: payload,
    error: null
  }),
  [actions.setMineSitesError]: (state, { payload }) => ({ ...state, error: payload })
};

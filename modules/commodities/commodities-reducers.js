
import * as actions from './commodities-actions';

export default {
  [actions.setCommodities]: (state, { payload }) => ({ ...state, list: payload }),
  [actions.setCommoditiesError]: (state, { payload }) => ({ ...state, error: payload })
};


import * as actions from './scoring-framework-actions';

export default {
  [actions.setContent]: (state, { payload }) => ({ ...state, data: payload }),
  [actions.setLoading]: (state, { payload }) => ({ ...state, loading: payload })
};

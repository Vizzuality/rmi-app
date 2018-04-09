
import * as actions from './methodology-actions';

export default {
  [actions.setContent]: (state, { payload }) => ({ ...state, data: payload }),
  [actions.setLoading]: (state, { payload }) => ({ ...state, loading: payload })
};

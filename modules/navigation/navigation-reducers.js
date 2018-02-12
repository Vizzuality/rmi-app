
import * as actions from './navigation-actions';

export default {
  [actions.setContent]: (state, { payload }) => ({ ...state, ...payload })
};

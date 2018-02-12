import * as actions from './static-content-actions';

export default {
  [actions.setPageContent]: (state, { payload }) => ({ ...state, content: payload }),
  [actions.setPageContentLoading]: (state, { payload }) => ({ ...state, loading: payload })
};

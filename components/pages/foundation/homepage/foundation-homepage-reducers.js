import * as actions from './foundation-homepage-actions';

export default {
  [actions.setPageContent]: (state, { payload }) => ({ ...state, content: payload }),
  [actions.setPageContentLoading]: (state, { payload }) => ({ ...state, loading: payload })
};

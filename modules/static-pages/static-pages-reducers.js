import * as actions from './static-pages-actions';

export default {
  [actions.setPageContent]: (state, { payload }) => {
    const { key, content } = payload;

    return ({
      ...state,
      [key]: {
        ...state[key],
        content
      }
    });
  },
  [actions.setPageContentLoading]: (state, { payload }) => {
    const { key, loading } = payload;

    return ({
      ...state,
      [key]: {
        ...state[key],
        loading
      }
    });
  }
};

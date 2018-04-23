
import * as actions from './languages-actions';

export default {
  [actions.setLanguages]: (state, { payload }) => ({ ...state, list: payload }),
  [actions.setLanguagesLoading]: (state, { payload }) => ({ ...state, loading: payload }),
  [actions.setCurrentLanguage]: (state, { payload }) => ({ ...state, current: payload })
};

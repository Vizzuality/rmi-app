
import * as actions from './languages-actions';

export default { [actions.setLanguage]: (state, { payload }) => ({ ...state, current: payload }) };

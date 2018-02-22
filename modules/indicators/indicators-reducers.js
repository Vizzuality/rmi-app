
import * as actions from './indicators-actions';

export default { [actions.setIndicators]: (state, { payload }) => ({ ...state, list: payload }) };


import * as actions from './routes-actions';

export default { [actions.setRoute]: (state, { payload }) => ({ ...state, ...payload }) };

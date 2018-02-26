
import * as actions from './mine-sites-actions';

export default { [actions.setMineSites]: (state, { payload }) => ({ ...state, list: payload }) };

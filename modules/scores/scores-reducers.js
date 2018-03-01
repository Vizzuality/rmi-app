
import * as actions from './scores-actions';

export default { [actions.setScores]: (state, { payload }) => ({ ...state, list: payload }) };

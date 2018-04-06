
import * as actions from './results-overall-actions';

export default {
  [actions.setScores]: (state, { payload }) => ({
    ...state,
    [payload.key]: {
      ...state[payload.key],
      list: payload.value
    }
  }),
  [actions.setLoadingScores]: (state, { payload }) => ({
    ...state,
    [payload.key]: {
      ...state[payload.key],
      loading: payload.value
    }
  })
};

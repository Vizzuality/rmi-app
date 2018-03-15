
import * as actions from './app-actions';

export default {
  [actions.toggleSidebar]: (state, { payload }) => ({
    ...state,
    sidebar: {
      ...state.sidebar,
      open: payload
    }
  })
};

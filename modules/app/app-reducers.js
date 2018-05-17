
import * as actions from './app-actions';

export default {
  [actions.toggleSidebar]: (state, { payload }) => ({
    ...state,
    sidebar: {
      ...state.sidebar,
      open: payload
    }
  }),
  [actions.toggleModal]: (state, { payload }) => ({
    ...state,
    modal: {
      ...state.modal,
      open: payload
    }
  }),
  [actions.togglePrintable]: (state, { payload }) => ({ ...state, printable: payload })
};

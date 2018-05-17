import { createAction } from 'redux-tools';

export const toggleSidebar = createAction('app/toggleSidebar');
export const toggleModal = createAction('app/toggleModal');
export const togglePrintable = createAction('app/togglePrintable');

export default {
  toggleSidebar,
  toggleModal,
  togglePrintable
};

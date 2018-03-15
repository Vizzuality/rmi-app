import { createAction, createThunkAction } from 'redux-tools';

export const setSizes = createAction('responsive/setSizes');

export const setMobileDetect = createThunkAction('responsive/setMobileDetect',
  sizes => (dispatch) => { dispatch(setSizes(sizes)); });

export default {
  setSizes,
  setMobileDetect
};

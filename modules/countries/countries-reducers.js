
import * as actions from './countries-actions';

export default {
  [actions.setCountries]: (state, { payload }) => ({ ...state, list: payload }),
  [actions.setCountriesError]: (state, { payload }) => ({ ...state, error: payload })
};

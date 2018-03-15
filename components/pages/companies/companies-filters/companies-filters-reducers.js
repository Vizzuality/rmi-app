
import * as actions from './companies-filters-actions';

export default {
  [actions.setCountries]: (state, { payload }) =>
    ({ ...state, countries: payload })
};

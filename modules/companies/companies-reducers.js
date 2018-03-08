
import * as actions from './companies-actions';

export default {
  [actions.setCompanies]: (state, { payload }) => ({ ...state, list: payload }),
  [actions.setCompaniesLoading]: (state, { payload }) => ({ ...state, loading: payload }),
  [actions.setCompaniesScores]: (state, { payload }) => ({ ...state, companiesScores: payload }),
  [actions.setCompaniesError]: (state, { payload }) => ({ ...state, error: payload })
};

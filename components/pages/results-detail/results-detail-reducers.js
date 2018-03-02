import * as actions from './results-detail-actions';
import initialState from './results-detail-initial-state';

export default {
  [actions.setIssueAreas]: (state, { payload }) => ({ ...state, issueAreas: payload }),
  [actions.setIssueAreasLoading]: (state, { payload }) => ({ ...state, loading: payload }),
  [actions.setIssueAreasError]: (state, { payload }) => ({ ...state, error: payload }),
  [actions.setSelectedCompany]: (state, { payload }) => ({ ...state, selectedCompany: payload }),
  [actions.resetSelectedCompany]: state =>
    ({ ...state, selectedCompany: initialState.selectedCompany })
};

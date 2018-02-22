
import * as actions from './companies-details-actions';

export default
{ [actions.setIssueArea]: (state, { payload }) => ({ ...state, issueArea: payload }) };

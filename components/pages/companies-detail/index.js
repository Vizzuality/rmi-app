import { connect } from 'react-redux';
import CompaniesDetailPage from './companies-details-component';

// selectors
import { getUpdatedPaths, getIssueAreas, getMarkers } from './companies-details-selectors';

import * as actions from './companies-details-actions';
import * as reducers from './companies-details-reducers';
import initialState from './companies-details-initial-state';

export { actions, reducers, initialState };

export default connect(
  state => ({
    paths: getUpdatedPaths(state),
    issueAreas: getIssueAreas(state),
    mineSites: getMarkers(state)
  }),
  { setIssueArea: actions.setIssueArea }
)(CompaniesDetailPage);


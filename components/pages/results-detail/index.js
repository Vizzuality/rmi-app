import { connect } from 'react-redux';

import * as actions from './results-detail-actions';
import * as reducers from './results-detail-reducers';
import initialState from './results-detail-initial-state';


// selectors
import { parseIssueAreas, getIssueArea } from './results-detail-selectors';

// component
import ResultsDetail from './results-detail-component';

export { actions, reducers, initialState };

export default connect(
  state => ({
    issueAreas: parseIssueAreas(state),
    selectedArea: getIssueArea(state),
    currentLanguage: state.language.current
  }),
  {}
)(ResultsDetail);

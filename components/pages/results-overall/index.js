import { connect } from 'react-redux';
import * as actions from './results-overall-actions';
import * as reducers from './results-overall-reducers';
import initialState from './results-overall-initial-state';

// selectors
import { parseIssueAreas } from './results-overall-selectors';

// component
import ResultsOverall from './results-overall-component';

export { actions, reducers, initialState };

export default connect(
  state => ({ issueAreas: parseIssueAreas(state) })
)(ResultsOverall);

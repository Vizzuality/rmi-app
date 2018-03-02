import { connect } from 'react-redux';

// selectors
import { parseIssueAreas } from './results-overall-selectors';

// component
import ResultsOverall from './results-overall-component';

export default connect(
  state => ({ issueAreas: parseIssueAreas(state) })
)(ResultsOverall);

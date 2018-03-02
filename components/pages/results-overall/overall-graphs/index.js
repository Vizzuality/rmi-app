import { connect } from 'react-redux';

// selectors
import { getScoresByIssueArea } from './overall-graphs-selectors';

// component
import OverallGraphs from './overall-graphs-component';

export default connect(
  state => ({ data: getScoresByIssueArea(state) }),
  {}
)(OverallGraphs);

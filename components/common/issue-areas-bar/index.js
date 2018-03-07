import { connect } from 'react-redux';
import IssueAreasBar from './issue-areas-bar-component';

// selectors
import { parseIssueAreas } from './issue-areas-bar-selectors';

export default connect(
  state => ({ issueAreas: parseIssueAreas(state) }),
  {}
)(IssueAreasBar);

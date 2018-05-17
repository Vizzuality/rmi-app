import { connect } from 'react-redux';
import PrintableIssueAreas from './printable-issue-areas-component';

import { getIssueAreasList } from './printable-issue-areas-selectors';

export default connect(
  state => ({ issueAreasList: getIssueAreasList(state) }),
  null
)(PrintableIssueAreas);

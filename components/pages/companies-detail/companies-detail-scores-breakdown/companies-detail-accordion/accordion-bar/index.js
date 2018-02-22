import { connect } from 'react-redux';
import AccordionBar from './accordion-bar-component';

// selectors
import { parseIssueAreas } from '../companies-detail-accordion-selectors';

// actions
import { setIssueArea } from '../../../companies-details-actions';

export default connect(
  state => ({ issueAreas: parseIssueAreas(state) }),
  { setIssueArea }
)(AccordionBar);

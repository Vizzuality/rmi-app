import { connect } from 'react-redux';
import CompaniesDetailAccordion from './companies-detail-accordion-component';

import { getIssueAreaTree } from './companies-detail-accordion-selectors';

export default connect(
  state => ({ issueAreaTree: getIssueAreaTree(state) }),
  {}
)(CompaniesDetailAccordion);

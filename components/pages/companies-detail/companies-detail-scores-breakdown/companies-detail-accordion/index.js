import { connect } from 'react-redux';
import CompaniesDetailAccordion from './companies-detail-accordion-component';

import { getIssueAreaTree } from './companies-detail-accordion-selectors';

// actions
import { setIssueArea } from '../../companies-details-actions';

export default connect(
  state => ({
    issueAreaTree: getIssueAreaTree(state),
    selectedIssueArea: state.companiesDetailPage.issueArea
  }),
  { setIssueArea }
)(CompaniesDetailAccordion);

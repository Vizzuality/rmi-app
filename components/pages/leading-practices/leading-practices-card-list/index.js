// redux
import { connect } from 'react-redux';

// selectors
import { parseLeadingPractices } from './leading-practices-card-list-selectors';

import LeadingPracticesCardList from './leading-practices-card-list-component';

export default connect(
  state => ({
    leadingPractices: parseLeadingPractices(state),
    loading: state.leadingPracticesPage.leadingPractices.loading
  }),
  {}
)(LeadingPracticesCardList);

// redux
import { connect } from 'react-redux';

// actions
import { toggleModal } from 'modules/app/app-actions';
import { setSelectedLeadingPractice } from '../leading-practices-actions';

// selectors
import { parseLeadingPractices } from './leading-practices-card-list-selectors';

import LeadingPracticesCardList from './leading-practices-card-list-component';

export default connect(
  state => ({
    leadingPractices: parseLeadingPractices(state),
    loading: state.leadingPracticesPage.leadingPractices.loading
  }),
  {
    toggleModal,
    setSelectedLeadingPractice
  }
)(LeadingPracticesCardList);

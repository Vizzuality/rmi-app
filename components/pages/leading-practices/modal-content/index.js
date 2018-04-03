import { connect } from 'react-redux';

// components
import ModalContent from './modal-content-component';

// selectors
import { getLeadingPractice } from './modal-content-selectors';

export default connect(
  state => ({
    leadingPractice: getLeadingPractice(state)
  }),
  {}
)(ModalContent);

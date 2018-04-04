import { connect } from 'react-redux';

// actions
import { toggleModal } from 'modules/app/app-actions';
import { setSelectedLeadingPractice } from '../leading-practices-actions';

// component
import ModalContent from './modal-content-component';

// selectors
import { getLeadingPractice } from './modal-content-selectors';

export default connect(
  state => ({ leadingPractice: getLeadingPractice(state) }),
  {
    toggleModal,
    setSelectedLeadingPractice
  }
)(ModalContent);

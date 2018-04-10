import { connect } from 'react-redux';

// component
import ModalContent from './modal-content-component';

// selectors
import { getMediaRelease } from './modal-content-selectors';

export default connect(
  state => ({ mediaRelease: getMediaRelease(state) }),
  {}
)(ModalContent);

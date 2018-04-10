// redux
import { connect } from 'react-redux';

// actions
import { toggleModal } from 'modules/app/app-actions';
import { setResourceId } from 'modules/static-content/static-content-actions';

import Media from './media-component';

export default connect(
  state => ({
    modalOpen: state.app.modal.open,
    content: state.staticContent.content
  }),
  {
    toggleModal,
    setResourceId
  }
)(Media);

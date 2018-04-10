import { connect } from 'react-redux';

// component
import ModalContent from './modal-content-component';

// selectors
import { getNews } from './modal-content-selectors';

export default connect(
  state => ({ news: getNews(state) }),
  {}
)(ModalContent);

// redux
import { connect } from 'react-redux';

import ContactPage from './contact-component';

export default connect(
  state => ({ content: state.staticContent.content }),
  {}
)(ContactPage);

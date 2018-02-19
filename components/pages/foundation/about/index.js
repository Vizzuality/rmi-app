// redux
import { connect } from 'react-redux';

import About from './about-component';

export default connect(
  state => ({ content: state.staticContent.content }),
  {}
)(About);

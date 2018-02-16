// redux
import { connect } from 'react-redux';

import Media from './media-component';

export default connect(
  state => ({ content: state.staticContent.content }),
  {}
)(Media);

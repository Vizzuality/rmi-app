// redux
import { connect } from 'react-redux';

import MiningSocietyPage from './mining-society-component';

export default connect(
  state => ({ content: state.staticContent.content }),
  {}
)(MiningSocietyPage);

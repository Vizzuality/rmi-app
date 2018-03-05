import { connect } from 'react-redux';

// component
import StaticResult from './static-result-component';

export default connect(
  state => ({ data: ((state.staticContent.content || [])[0] || {}) })
)(StaticResult);

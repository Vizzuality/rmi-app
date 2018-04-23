import { connect } from 'react-redux';

// selectors
import { getCurrentPage } from './static-result-selectors';

// component
import StaticResult from './static-result-component';

export default connect(
  state => ({ data: getCurrentPage(state) })
)(StaticResult);

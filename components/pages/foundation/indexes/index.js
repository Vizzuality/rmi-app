import { connect } from 'react-redux';

// selectors
import { getIndexSection } from './indexes-selector';

import IndexesFoundationPage from './indexes-component';

export default connect(
  state => ({ content: getIndexSection(state) }),
  {}
)(IndexesFoundationPage);

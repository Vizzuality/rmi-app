// redux
import { connect } from 'react-redux';

import MethodologyYearPage from './methodology-year-component';

export default connect(
  state => ({ content: state.staticContent.content }),
  {}
)(MethodologyYearPage);

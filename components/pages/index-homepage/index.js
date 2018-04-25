import { connect } from 'react-redux';

import IndexPage from './index-page';

export default connect(
  state => ({ currentLanguage: state.language.current }),
  null
)(IndexPage);

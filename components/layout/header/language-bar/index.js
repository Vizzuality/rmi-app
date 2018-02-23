import { connect } from 'react-redux';

import LanguageBar from './language-bar-component';

export default connect(
  state => ({ language: state.language.current }),
  {}
)(LanguageBar);

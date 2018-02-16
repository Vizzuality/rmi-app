import { connect } from 'react-redux';

import LanguageBar from './language-bar-component';

const mapStateToProps = state => ({ language: state.language.current });

export default connect(mapStateToProps, {})(LanguageBar);

import { connect } from 'react-redux';

// selectors
import { parseLanguages } from './language-bar-mobile-selectors';

// component
import LanguageBarMobile from './language-bar-mobile-component';

export default connect(
  state => ({
    languages: parseLanguages(state),
    currentLanguage: state.language.current
  }),
  null
)(LanguageBarMobile);

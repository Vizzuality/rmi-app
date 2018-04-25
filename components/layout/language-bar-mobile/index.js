import { connect } from 'react-redux';

// actions
import { setCurrentLanguage } from 'modules/language/languages-actions';

// selectors
import { parseLanguages } from './language-bar-mobile-selectors';

// component
import LanguageBarMobile from './language-bar-mobile-component';

export default connect(
  state => ({
    languages: parseLanguages(state),
    currentLanguage: state.language.current
  }),
  { setCurrentLanguage }
)(LanguageBarMobile);

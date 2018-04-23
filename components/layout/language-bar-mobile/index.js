import { connect } from 'react-redux';

// actions
import { setCurrentLanguage } from 'modules/language/languages-actions';

// component
import LanguageBarMobile from './language-bar-mobile-component';

export default connect(
  state => ({
    languages: state.language.list,
    currentLanguage: state.language.current
  }),
  { setCurrentLanguage }
)(LanguageBarMobile);

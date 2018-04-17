import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// actions
import { setLanguages, setCurrentLanguage } from 'modules/language/languages-actions';

// component
import LanguageBar from './language-bar-component';

class LanguageBarContainer extends PureComponent {
  static propTypes = {
    setLanguages: PropTypes.func.isRequired,
    setCurrentLanguage: PropTypes.func.isRequired
  }

  handleClickLanguage = (e) => {
    const code = e.currentTarget.getAttribute('data-code');
    Transifex.live.translateTo(code);
  }

  render() {
    return (
      <LanguageBar
        {...this.props}
        onClickLanguage={this.handleClickLanguage}
      />
    );
  }
}

export default connect(
  state => ({
    languages: state.language.list,
    currentLanguage: state.language.current,
    loading: state.language.loading
  }),
  {
    setLanguages,
    setCurrentLanguage
  }
)(LanguageBarContainer);

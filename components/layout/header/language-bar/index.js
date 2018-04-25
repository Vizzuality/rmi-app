import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router } from 'routes';

// actions
import { setLanguages, setCurrentLanguage } from 'modules/language/languages-actions';

// selectors
import { parseLanguages } from './language-bar-selectors';

// component
import LanguageBar from './language-bar-component';

class LanguageBarContainer extends PureComponent {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    setLanguages: PropTypes.func.isRequired,
    setCurrentLanguage: PropTypes.func.isRequired
  }

  handleClickLanguage = (e) => {
    const { tab, pathname, query } = this.props.routes;
    const code = e.currentTarget.getAttribute('data-code');

    Transifex.live.translateTo(code);
    this.props.setCurrentLanguage(code);
    Router.pushRoute(tab || pathname || 'index', {
      ...query,
      language: code
    });
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
    languages: parseLanguages(state),
    currentLanguage: state.language.current,
    loading: state.language.loading,
    routes: state.routes
  }),
  {
    setLanguages,
    setCurrentLanguage
  }
)(LanguageBarContainer);

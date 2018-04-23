import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// styles
import styles from './language-bar-mobile-styles.scss';

class LanguageBar extends PureComponent {
  static propTypes = {
    languages: PropTypes.array.isRequired,
    currentLanguage: PropTypes.string.isRequired
  }

  getLanguageClass(languageItem) {
    return classnames({
      'languages-item': true,
      '-selected': languageItem.code === this.props.currentLanguage
    });
  }

  handleClickLanguage = (e) => {
    const code = e.currentTarget.getAttribute('data-code');
    Transifex.live.translateTo(code);
  }

  render() {
    return (
      <div className="c-language-bar">
        <style jsx>{styles}</style>
        <ul className="languages-list">
          {this.props.languages.map(languageItem => (
            <li
              className={this.getLanguageClass(languageItem)}
              key={languageItem.code}
            >
              <button
                type="button"
                data-code={languageItem.code}
                onClick={this.handleClickLanguage}
              >
                {languageItem.name}
              </button>
            </li>))}
        </ul>
      </div>
    );
  }
}

export default LanguageBar;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// styles
import styles from './language-bar-styles.scss';

// constants
import { LANGUAGES } from './language-bar-constants';

class LanguageBar extends PureComponent {
  static propTypes = {
    language: PropTypes.string
  }

  getLanguageClass(languageItem) {
    const { language } = this.props;

    return classnames({
      'languages-item': true,
      '-selected': languageItem.value === language
    });
  }

  render() {
    return (
      <div className="c-language-bar">
        <style jsx>{styles}</style>
        <ul className="languages-list">
          {LANGUAGES.map(languageItem => (
            <li
              className={this.getLanguageClass(languageItem)}
              key={languageItem.id}
            >
              <a href="#">{languageItem.label}</a>
            </li>))}
        </ul>
      </div>
    );
  }
}

export default LanguageBar;

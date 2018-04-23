import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// components
import Spinner from 'components/common/spinner';

// styles
import styles from './language-bar-styles.scss';

class LanguageBar extends PureComponent {
  static propTypes = {
    languages: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    currentLanguage: PropTypes.string.isRequired,
    onClickLanguage: PropTypes.func.isRequired
  }

  getLanguageClass(languageItem) {
    return classnames({
      'languages-item': true,
      '-selected': languageItem.code === this.props.currentLanguage
    });
  }

  render() {
    const { languages, loading, onClickLanguage } = this.props;

    return (
      <div className="c-language-bar">
        <style jsx>{styles}</style>
        {loading && <Spinner className="-small" />}
        <ul className="languages-list" id="language-list">
          {languages.map(languageItem => (
            <li
              className={this.getLanguageClass(languageItem)}
              key={languageItem.code}
            >
              <button
                type="button"
                data-code={languageItem.code}
                onClick={onClickLanguage}
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

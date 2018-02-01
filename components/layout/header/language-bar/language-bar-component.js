import React, { PureComponent } from 'react';

// styles
import styles from './language-bar-styles.scss';

class LanguageBar extends PureComponent {
  render() {
    return (
      <div className="c-language-bar">
        <ul className="languages-list">
          <li className="languages-item"><a href="#">Bahasa</a></li>
          <li className="languages-item"><a href="#">Chinese</a></li>
          <li className="languages-item"><a href="#">English</a></li>
          <li className="languages-item"><a href="#">Español</a></li>
          <li className="languages-item"><a href="#">Français</a></li>
          <li className="languages-item"><a href="#">Russian</a></li>
        </ul>
      </div>
    );
  }
}

export default LanguageBar;

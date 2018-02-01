import React, { PureComponent } from 'react';

// components
import LanguageBar from 'components/layout/header/language-bar';
import NavBar from 'components/layout/header/nav-bar';

// styles
import styles from './header-styles.scss';

class Header extends PureComponent {
  render() {
    return (
      <header className="c-header">
        <style jsx>{styles}</style>
        <div className="header-top">
          <div className="l-layout">
            <LanguageBar />
          </div>
        </div>
        <div className="header-bottom">
          <div className="l-layout">
            <NavBar />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

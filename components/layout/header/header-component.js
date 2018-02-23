import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// components
import LanguageBar from 'components/layout/header/language-bar';
import NavBar from 'components/layout/header/nav-bar';

// styles
import styles from './header-styles.scss';

class Header extends PureComponent {
  static propTypes = { root: PropTypes.string.isRequired }

  render() {
    const { root } = this.props;
    const headerClass = classnames({
      'c-header': true,
      '-theme-1': root === 'index',
      '-theme-2': root !== 'index'
    });

    return (
      <header className={headerClass}>
        <style jsx>{styles}</style>
        <div className="l-layout">
          <div className="header-top">
            <LanguageBar />
          </div>
          <div className="header-bottom">
            {/* <div className="l-layout"> */}
            <NavBar />
            {/* </div> */}
          </div>
        </div>

      </header>
    );
  }
}

export default Header;

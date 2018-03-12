import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'routes';

// components
import Icon from 'components/common/icon';

// styles
import styles from './header-mobile-styles.scss';

class HeaderMobile extends PureComponent {
  static propTypes = { root: PropTypes.string.isRequired }

  render() {
    const { root } = this.props;

    const headerClass = classnames({
      'c-header-mobile': true,
      '-theme-1': root === 'index',
      '-theme-2': root !== 'index'
    });

    const logo = root === 'index' ?
      'RMI_Index_Color' : 'RMI_Foundation_Color';

    return (
      <header className={headerClass}>
        <style jsx>{styles}</style>
        <div className="l-layout">
          <div className="header-mobile-container">
            <div className="logo">
              <Link
                route={root}
              >
                <a><img src={`/static/logos/${logo}.png`} alt="RMI logo" /></a>
              </Link>
            </div>
            <button>
              <Icon
                name="burger-menu"
                className="icon-menu"
              />
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderMobile;

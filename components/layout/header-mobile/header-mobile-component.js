import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'routes';

// components
import Button from 'components/common/button';
import Icon from 'components/common/icon';

// styles
import styles from './header-mobile-styles.scss';

class HeaderMobile extends PureComponent {
  static propTypes = {
    root: PropTypes.string.isRequired,
    sidebarVisibility: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired
  }

  handleToggleSidebar = () => {
    const { toggleSidebar, sidebarVisibility } = this.props;

    toggleSidebar(!sidebarVisibility);
  }

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
            <Link
              route={root}
            >
              <a className="app-logo"><img src={`/static/logos/${logo}.svg`} alt="RMI logo" /></a>
            </Link>
            <Button
              padding={false}
              onClick={this.handleToggleSidebar}
            >
              <Icon
                name="burger-menu"
                className="-small"
              />
            </Button>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderMobile;

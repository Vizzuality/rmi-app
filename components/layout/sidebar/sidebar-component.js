import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// components
import Button from 'components/common/button';
import Icon from 'components/common/icon';
import NavBarMobile from 'components/layout/nav-bar-mobile';

// styles
import styles from './sidebar-styles.scss';

class Sidebar extends PureComponent {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    routes: PropTypes.object.isRequired,
    toggleSidebar: PropTypes.func.isRequired
  }

  handleClose = () => {
    const { toggleSidebar } = this.props;

    toggleSidebar(false);
  }

  render() {
    const { open, routes } = this.props;
    const { root } = routes;

    const sidebarClasses = classnames({
      'c-sidebar': true,
      '-visible': open,
      '-theme-1': root === 'index',
      '-theme-2': root !== 'index'
    });

    return (
      <div className={sidebarClasses}>
        <style jsx>{styles}</style>
        <div className="l-layout">
          <div className="sidebar-menu">
            <Button
              padding={false}
              onClick={this.handleClose}
            >
              <Icon
                name="cross"
                className="-small"
              />
            </Button>
          </div>
          <div className="nav-bar-mobile-container">
            <NavBarMobile />
          </div>
        </div>
      </div>);
  }
}

export default Sidebar;

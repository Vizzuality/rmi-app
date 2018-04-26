import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'routes';

// components
import Button from 'components/common/button';
import Icon from 'components/common/icon';
import NavBarMobile from 'components/layout/nav-bar-mobile';
import LanguageBarMobile from 'components/layout/language-bar-mobile';

// styles
import styles from './sidebar-styles.scss';

class Sidebar extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    routes: PropTypes.object.isRequired,
    currentLanguage: PropTypes.string.isRequired,
    toggleSidebar: PropTypes.func.isRequired
  }

  componentWillReceiveProps(nextProps) {
    const { open: nextOpen } = nextProps;

    document.documentElement.classList.toggle('-no-scroll', nextOpen);
    document.querySelector('body').classList.toggle('-no-scroll', nextOpen);
  }

  handleClose = () => {
    const { toggleSidebar } = this.props;

    toggleSidebar(false);
  }

  render() {
    const { open, routes, currentLanguage } = this.props;
    const { root } = routes;

    const sidebarClasses = classnames({
      'c-sidebar': true,
      '-visible': open,
      '-theme-1': root === 'index',
      '-theme-2': root !== 'index'
    });

    const logo = root === 'index' ?
      'RMI_Index_Color' : 'RMI_Foundation_Color';

    return (
      <div className={sidebarClasses}>
        <style jsx>{styles}</style>
        <div className="sidebar-container">
          <div className="l-layout">
            <div className="sidebar-menu">
              <Link
                route={root}
                params={{ language: currentLanguage }}
              >
                <a className="app-logo"><img src={`/static/logos/${logo}.svg`} alt="RMI logo" /></a>
              </Link>
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
          <div className="language-bar-container">
            <LanguageBarMobile />
          </div>
        </div>
        <div
          className="veil"
          onClick={this.handleClose}
        />
      </div>);
  }
}

export default Sidebar;

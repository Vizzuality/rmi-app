import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'routes';
import classnames from 'classnames';
import Tether from 'react-tether';

// styles
import styles from './nav-bar-styles.scss';

class NavBar extends PureComponent {
  static propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      query: PropTypes.shape({
        route: PropTypes.string.isRequired,
        params: PropTypes.object
      })
    })).isRequired,
    routes: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  getTabClass(linkTab) {
    const { routes } = this.props;
    const { pathname } = routes;

    return classnames({
      'nav-item': true,
      '-selected': linkTab.query.route === pathname,
      '-submenu': linkTab.children,
      '-open': this.state[linkTab.id]
    });
  }

  handleClickTab(key) {
    this.setState({ [key]: this.state[key] ? !this.state[key] : true });
  }

  handleCloseSubMenu(key) {
    this.setState({ [key]: false });
  }

  renderTabs() {
    const { tabs } = this.props;

    const tabElements = tabs.map((tab) => {
      if (!tab.children) {
        return (
          <Fragment key={tab.id}>
            <li className={this.getTabClass(tab)}>
              <Link
                route={tab.query.route}
                params={tab.query.params}
              >
                <a>{tab.label}</a>
              </Link>
            </li>
          </Fragment>);
      }

      const submenuContent = (
        <ul className="submenu">
          {tab.children.map(child => (
            <li
              className={this.getTabClass(child)}
              key={child.id}
              onClick={() => this.handleCloseSubMenu(child.id)}
            >
              {child.noLink ?
                <a>{child.label}</a> :
              <Link
                route={child.query.route}
                params={child.query.params}
              >
                <a>{child.label}</a>
              </Link>
              }


            </li>))}
        </ul>
      );

      return (
        <Fragment
          key={tab.id}
        >
          <Tether
            attachment="top center"
            targetAttachment="bottom center"
            key={tab.id}
            classPrefix="nav-submenu"
            constraints={[{
              to: 'target',
              attachment: 'together'
            }]}
          >
            <li
              className={this.getTabClass(tab)}
            >
              <span
                className="submenu-literal"
                onClick={() => this.handleClickTab(tab.id)}
              >
                {tab.label}
              </span>
            </li>
            {this.state[tab.id] && submenuContent}
          </Tether>
          {this.state[tab.id] &&
            <div
              className="submenu-veil"
              onClick={() => this.handleCloseSubMenu(tab.id)}
            />}
        </Fragment>
      );
    });

    return (
      <ul className="nav-list">
        {tabElements}
      </ul>
    );
  }

  render() {
    const { routes } = this.props;
    const { root } = routes;

    const logo = root === 'index' ?
      'RMI_Index_Color' : 'RMI_Foundation_Color';


    const navBarClass = classnames({
      'c-nav-bar': true,
      '-theme-1': root === 'index',
      '-theme-2': root !== 'index'
    });

    return (
      <nav className={navBarClass}>
        <style jsx global>{styles}</style>
        <div className="logo">
          <Link
            route={root}
          >
            <a><img className="logo-img" src={`/static/logos/${logo}.svg`} alt="RMI logo" /></a>
          </Link>
        </div>
        {this.renderTabs()}
      </nav>
    );
  }
}

export default NavBar;

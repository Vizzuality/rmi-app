import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'routes';
import classnames from 'classnames';
import Tether from 'react-tether';
import debounce from 'lodash/debounce';

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
    routes: PropTypes.object.isRequired,
    currentLanguage: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {};

    this.debouncedHandleHoverTab = debounce(this.handleHoverTab, 150);
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

  handleHoverTab(key, value) {
    this.setState({ [key]: value });
  }

  handleClickTab(key) {
    this.setState({ [key]: !this.state[key] });
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
        <ul
          className="submenu"
          onMouseEnter={() => this.debouncedHandleHoverTab(tab.id, true)}
          onMouseLeave={() => this.debouncedHandleHoverTab(tab.id, false)}
        >
          {tab.children.map(child => (
            <li
              className={this.getTabClass(child)}
              key={child.id}
              onClick={() => this.handleClickTab(child.id)}
            >
              {child.noLink ?
                <a className="submenu-literal">{child.label}</a> :
                <Link
                  route={child.query.route}
                  params={child.query.params}
                >
                  <a>{child.label}</a>
                </Link>
              }
              {!!(child.children || []).length && this.state[child.id] &&
                <ul className="submenu">
                  {child.children.map(c => (
                    <li
                      className={this.getTabClass(c)}
                      key={c.id}
                    >
                      <Link
                        route={c.query.route}
                        params={c.query.params}
                      >
                        <a>{c.label}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
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
              {!tab.noLink ?
                (
                  <Link
                    route={tab.query.route}
                    params={tab.query.params}
                  >
                    <a
                      className="submenu-literal"
                      onMouseEnter={() => this.debouncedHandleHoverTab(tab.id, true)}
                      onMouseLeave={() => this.debouncedHandleHoverTab(tab.id, false)}
                    >
                      {tab.label}
                    </a>
                  </Link>)
                : (
                  <span
                    className="submenu-literal"
                    onMouseEnter={() => this.debouncedHandleHoverTab(tab.id, true)}
                    onMouseLeave={() => this.debouncedHandleHoverTab(tab.id, false)}
                  >
                    {tab.label}
                  </span>
                )}
            </li>
            {this.state[tab.id] && submenuContent}
          </Tether>
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
    const { routes, currentLanguage } = this.props;
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
            params={{ language: currentLanguage }}
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

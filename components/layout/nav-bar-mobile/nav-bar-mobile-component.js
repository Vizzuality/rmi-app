import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'routes';
import classnames from 'classnames';

// styles
import styles from './nav-bar-mobile-styles.scss';

class NavBarMobile extends PureComponent {
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
      '-has-children': linkTab.children,
      '-open': this.state[linkTab.id]
    });
  }

  handleClickTab(key) {
    this.setState({ [key]: this.state[key] ? !this.state[key] : true });
  }

  handleToggleSubMenu(key) {
    this.setState({ [key]: !this.state[key] });
  }

  renderMenu() {
    const { tabs } = this.props;

    const tabElements = tabs.map((tab) => {
      if (!tab.children) {
        return (
          <li
            key={tab.id}
            className={this.getTabClass(tab)}
          >
            <Link
              route={tab.query.route}
              params={tab.query.params}
            >
              <a>{tab.label}</a>
            </Link>
          </li>);
      }

      const submenuContent = (
        <ul className="second-level-list">
          {tab.children.map(child => (
            <li
              className={this.getTabClass(child)}
              key={child.id}
              onClick={() => this.handleToggleSubMenu(child.id)}
            >
              {child.noLink ?
                <span>{child.label}</span> :
                <Link
                  route={child.query.route}
                  params={child.query.params}
                >
                  <a>{child.label}</a>
                </Link>}
              {child.children && this.state[child.id] &&
                <ul className="third-level-list">
                  {(child.children).map(thirdLevelChild => (
                    <li key={thirdLevelChild.id}>
                      <Link
                        route={thirdLevelChild.query.route}
                        params={thirdLevelChild.query.params}
                      >
                        <a>{thirdLevelChild.label}</a>
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
          <li className={this.getTabClass(tab)}>
            <span
              className="submenu-literal"
              onClick={() => this.handleClickTab(tab.id)}
            >
              {tab.label}
            </span>
          </li>
          {this.state[tab.id] && submenuContent}
        </Fragment>
      );
    });

    return (
      <ul className="first-level-list">
        {tabElements}
      </ul>
    );
  }

  render() {
    const { root } = this.props.routes;

    const navBarClass = classnames({
      'c-nav-bar-mobile': true,
      '-theme-1': root === 'index',
      '-theme-2': root !== 'index'
    });

    return (
      <nav className={navBarClass}>
        <style jsx global>{styles}</style>
        {this.renderMenu()}
      </nav>
    );
  }
}

export default NavBarMobile;


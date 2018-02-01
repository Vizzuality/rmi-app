import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'routes';
import classnames from 'classnames';
import Tether from 'react-tether';

// selectors
import { getNavigation } from './nav-bar-selectors';

// styles
import styles from './nav-bar-styles.scss';

class NavBar extends PureComponent {
  static defaultProps = {
    tabs: []
  };

  static propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      query: PropTypes.shape({
        route: PropTypes.string.isRequired,
        params: PropTypes.object
      })
    })),
    routes: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  getTabClass(tab) {
    const { routes } = this.props;
    const { pathname } = routes;

    return classnames({
      'nav-item': true,
      '-selected': tab.query.route === pathname,
      '-submenu': tab.children,
      '-open': this.state[tab.id]
    });
  }

  handleClickTab(key) {
    this.setState({
      [key]: this.state[key] ? !this.state[key] : true
    });
  }

  renderTabs() {
    const { tabs } = this.props;

    const tabElements = tabs.map((tab) => {
      if (!tab.children) {
        return (
          <Fragment
            key={tab.id}
          >
            <style jsx>{styles}</style>
            <li
              className={this.getTabClass(tab)}

            >
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
            >
              <Link
                route={child.query.route}
                params={child.query.params}
              >
                <a>{child.label}</a>
              </Link>
            </li>))}
        </ul>
      );

      return (
        <Tether
          attachment="top center"
          targetAttachment="bottom center"
          key={tab.id}
          constraints={[{
            to: 'target',
            attachment: 'together'
          }]}
        >
          <li
            className={this.getTabClass(tab)}
          >
            <style jsx>{styles}</style>
            <span
              className="submenu-literal"
              onClick={() => this.handleClickTab(tab.id)}
            >
              {tab.label}
            </span>
          </li>
          {this.state[tab.id] && submenuContent}
        </Tether>);
    });

    return (
      <ul className="nav-list">
        <style jsx>{styles}</style>
        {tabElements}
      </ul>
    );
  }

  render() {
    return (
      <nav className="c-nav-bar">
        <style jsx>{styles}</style>
        <div className="logo" />
        {this.renderTabs()}
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  routes: state.routes,
  tabs: getNavigation(state)
});

export default connect(mapStateToProps, {})(NavBar);

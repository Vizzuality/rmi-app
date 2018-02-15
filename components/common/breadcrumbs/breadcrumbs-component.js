import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'routes';
import classnames from 'classnames';

// styles
import styles from './breadcrumbs-styles.scss';

class Breadcrumbs extends PureComponent {
  static propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
      params: PropTypes.object
    })),
    routes: PropTypes.object.isRequired
  }

  static defaultProps = {
    links: []
  }

  getClass(link) {
    const { tab, query } = this.props.routes;
    const { section } = query;

    return classnames({
      'breadcrumbs-item': true,
      '-selected': ((tab && !section && tab === link.route) ||
        (section && (link.params || {}).section === section))
    });
  }

  render() {
    const { links } = this.props;

    return (
      <div className="c-breadcrumbs">
        <style jsx>{styles}</style>
        <nav className="breadcrumbs-list">
          {links.map(link => (
            <li key={link.id} className={this.getClass(link)}>
              <Link
                route={link.route}
                params={link.params}
              >
                <a href="">{link.label}</a>
              </Link>
            </li>
          ))}
        </nav>
      </div>
    );
  }
}

export default Breadcrumbs;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'routes';
// components
import Icon from 'components/common/icon';

// constants
// import { BAR_CONFIG, AREA_ISSUES_COLORS } from './top-companies-constants';

// styles
import styles from './top-companies-styles.scss';

class OverallGraphs extends PureComponent {
  static propTypes = { data: PropTypes.object.isRequired }

  render() {
    const { data } = this.props;
    const { label, companies } = data;

    return (
      <div className="c-top-item">
        <style jsx>{styles}</style>
        <div className="top-header">
          {/* <Icon name={slug}> */}
          <h3 className="top-name">{label}</h3>
        </div>
        <ul className="top-list">
          {companies.map(company => (
            <li
              key={company.id}
              className="top-item"
            >
              <span className="position">{company.position}</span>
              <div className="company-container" style={{ backgroundColor: company.color }}>
                <Link
                  route="companies"
                  params={{ company: company.id }}
                >
                  <a className="company-name">{company.name}</a>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default OverallGraphs;

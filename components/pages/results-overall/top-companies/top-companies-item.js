import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'routes';
// components
import Icon from 'components/common/icon';

// constants
import { AREA_ISSUE_COLOURS } from 'constants/graph-colors';

// styles
import styles from './top-companies-styles.scss';

class OverallGraphs extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    currentLanguage: PropTypes.string.isRequired
  }

  render() {
    const { data, currentLanguage } = this.props;
    const { label, companies, id } = data;

    return (
      <div className="c-top-item">
        <style jsx>{styles}</style>
        <div className="top-header">
          <div
            className="top-icon"
            style={{ background: AREA_ISSUE_COLOURS[id] }}
          >
            <Icon
              name={id}
              className="-big"
            />
          </div>
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
                  params={{
                    language: currentLanguage,
                    company: company.id
                  }}
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

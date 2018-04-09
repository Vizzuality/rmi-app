import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// styles
import styles from './mine-sites-detail-country-comparison-styles.scss';

class MineSitesDetailCountryComparison extends PureComponent {
  static propTypes = {
    countries: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired
  }

  static getRowClass(groupSize, currentIndex) {
    return classnames({
      'first-from-group': currentIndex === 0,
      'last-from-group': groupSize === (currentIndex + 1)
    });
  }

  render() {
    const { countries, data } = this.props;
    const { producingCountryName } = countries;

    return (
      <div className="c-mine-sites-detail-country-comparison">
        <style jsx>{styles}</style>
        <p className="explanation">Mining companies are not the only actors to shape
          reality on the ground. Home country and producing country governments are
          among the powerful players to set the conditions within which companies
          operate. The table below provides a set of proxy indicators on the
          socio-economic, policy, governance and security environments in the
          home country of the company and the producing country of the mine site.
        </p>
        <table className="country-comparison-table">
          <thead>
            <tr>
              <th />
              <th className="country-header">Producing Country</th>
            </tr>
            <tr>
              <th />
              <th className="country-value">{producingCountryName}</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map(group => (
              data[group].map((d, index) => (
                <tr
                  key={d.key}
                  className={MineSitesDetailCountryComparison.getRowClass(data[group].length, index)}
                >
                  <td>{d.key}</td>
                  <td>{d.producingCountry}</td>
                </tr>
              ))
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MineSitesDetailCountryComparison;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './mine-sites-detail-country-comparison-styles.scss';

class MineSitesDetailCountryComparison extends PureComponent {
  static propTypes = {
    countries: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired
  }

  render() {
    const { countries, data } = this.props;
    const { producingCountryName, homeCountryName } = countries;

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
              <th className="country-header">Home Country</th>
              <th />
              <th className="country-header">Producing Country</th>
            </tr>
            <tr>
              <th className="country-value">{producingCountryName}</th>
              <th />
              <th className="country-value">{homeCountryName}</th>
            </tr>
          </thead>
          <tbody>
            {data.map(d => (
              <tr key={d.key}>
                <td>{d.producingCountry}</td>
                <td>{d.key}</td>
                <td>{d.homeCountry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MineSitesDetailCountryComparison;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Spinner from 'components/common/spinner';

class CompaniesDetailSidebar extends PureComponent {
  static propTypes = { company: PropTypes.object }

  static defaultProps = { company: {} }

  render() {
    const { company } = this.props;
    const {
      country,
      'secondary-country': secondaryCountry,
      sector,
      'government-ownership': governmentOwnership,
      'pretax-revenues-busd': preTaxRevenuesBusd,
      'number-workers': workers,
      'number-employees': employees,
      'fatality-reports': fatalityReports,
      'revenues-date': revenuesDate,
      'number-workers-date': workersDate,
      'number-employees-date': employeesDate
    } = company;
    const { name: countryName } = country || {};
    const { name: secondaryCountryName } = secondaryCountry || {};

    return (
      <div className="c-detail-sidebar">
        {!Object.keys(company).length && <Spinner />}
        {Object.keys(company).length &&
          <div className="definitions-container">
            <div className="row">
              <div className="col-xs-6">
                {!!countryName &&
                  <div className="definition-item">
                    <div className="definition-key">Headquarters:</div>
                    <div className="definition-value">{countryName}</div>
                    {!!secondaryCountryName &&
                      <div className="definition-value">{secondaryCountryName}</div>}
                  </div>}
              </div>
              <div className="col-xs-6">
                {!!sector &&
                  <div className="definition-item">
                    <div className="definition-key">Sector:</div>
                    <div className="definition-value">{sector}</div>
                  </div>}
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                {governmentOwnership !== null &&
                  <div className="definition-item">
                    <div className="definition-key">Government Ownership:</div>
                    <div className="definition-value">{governmentOwnership}</div>
                  </div>}
              </div>
              <div className="col-xs-6">
                {preTaxRevenuesBusd !== null &&
                  <div className="definition-item">
                    <div className="definition-key">Pre-tax Revenues (in BUSD):</div>
                    <div className="definition-value">
                      {preTaxRevenuesBusd.toLocaleString()}
                      <span>{revenuesDate && ` (${revenuesDate})`}</span>
                    </div>
                  </div>}
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                {employees !== null &&
                  <div className="definition-item">
                    <div className="definition-key">Number of employees:</div>
                    <div className="definition-value">
                      {parseInt(employees, 10) ? (+employees).toLocaleString() : employees}
                      <span>{employeesDate && ` (${employeesDate})`}</span>
                    </div>
                  </div>}
              </div>
              <div className="col-xs-6">
                {workers !== null &&
                  <div className="definition-item">
                    <div className="definition-key">Number of workers <br />(employees + contract workers):</div>
                    <div className="definition-value">
                      {parseInt(workers, 10) ? (+workers).toLocaleString() : workers}
                      <span>{workersDate && ` (${workersDate})`}</span>
                    </div>
                  </div>}
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                {!!(fatalityReports || []).length &&
                  <div className="definition-item">
                    <div className="definition-key">Company-reported mining worker fatalities:</div>
                    <ul className="definition-sublist">
                      {fatalityReports.map(fatalityReport => (
                        <li key={fatalityReport.id} className="definition-sublist-item">
                          <span>{fatalityReport.year} | </span>
                          <div className="definition-sublist-item-container">
                            {fatalityReport.workers !== null
                              && <span>Workers: {fatalityReport.workers.toLocaleString()}</span>}
                            {fatalityReport.workers === null
                              && <span>Employees: {fatalityReport.employees.toLocaleString()}</span>}
                            {fatalityReport.workers === null
                              &&
                                <span>
                                  Contractors: {fatalityReport.contractors.toLocaleString()}
                                </span>}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>}
              </div>
            </div>
          </div>}
      </div>
    );
  }
}

export default CompaniesDetailSidebar;

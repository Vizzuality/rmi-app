import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Map from 'components/common/map';
import CompaniesList from 'components/common/companies-list';
import CompaniesFilters from './companies-filters';

// constants
import { MAP_LEGEND } from './companies-constants';

// helpers
import { getCompanyCountryColor } from './companies-helpers';

class Companies extends PureComponent {
  static propTypes = {
    paths: PropTypes.array.isRequired,
    setFilters: PropTypes.func.isRequired,
    setSelectedCompany: PropTypes.func.isRequired,
    resetSelectedCompany: PropTypes.func.isRequired
  }

  static setCountryColor = geographyProperties => getCompanyCountryColor(geographyProperties);

  componentWillUnmount() {
    this.props.resetSelectedCompany();
  }

  handleClickGeography = (geography) => {
    const { countryId } = geography.properties;
    this.props.setFilters({ country: countryId });
  };

  render() {
    const {
      paths,
      setSelectedCompany,
      resetSelectedCompany
    } = this.props;

    return (
      <div className="c-companies-page">
        <div className="page-intro">
          <div className="l-layout">
            <div className="row">
              <div className="col-xs-12 col-lg-5">
                <h2 className="title">Companies</h2>
              </div>
              <div className="col-xs-12 col-sm-7">
                <p>
                  This first Index, RMI 2018, covers 30 companies
                  from 16 home countries, including publicly-listed,
                  state-owned and private companies.
                </p>
                <p>
                  These companies operate in more than 850 sites in
                  over 40 producing countries, and the assessment covers
                  most mined commodities, excluding oil and gas.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="page-content">
          <div className="section -dark">
            <div className="l-layout">
              <div className="row">
                <div className="col-xs-12 col-md-3">
                  <CompaniesFilters className="-no-tablet" />
                  <CompaniesList
                    onMouseEnter={({ id }) => { setSelectedCompany(id); }}
                    onMouseLeave={() => { resetSelectedCompany(); }}
                  />
                </div>
                <div className="col-xs-12 col-md-9">
                  <CompaniesFilters className="-no-mobile" />
                  <div className="map-container">
                    <Map
                      paths={paths}
                      setCountryColor={Companies.setCountryColor}
                      legend={MAP_LEGEND}
                      onClickGeography={this.handleClickGeography}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Companies;

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

// styles
import styles from './companies-styles.scss';

class Companies extends PureComponent {
  static propTypes = {
    paths: PropTypes.array.isRequired,
    setFilters: PropTypes.func.isRequired
  }

  static setCountryColor = geographyProperties => getCompanyCountryColor(geographyProperties);

  handleClickGeography = (geography) => {
    const { countryId } = geography.properties;
    this.props.setFilters({ country: countryId });
  };

  render() {
    const { paths } = this.props;

    return (
      <div className="c-companies-page">
        <style jsx>{styles}</style>
        <div className="page-intro">
          <div className="l-layout">
            <div className="row">
              <div className="col-lg-5">
                <h2 className="title">Companies</h2>
              </div>
              <div className="col-lg-7">
                <p>
                  This first Index, RMI 2018, covers 30 companies
                  from 16 home countries, including publicly-listed,
                  state-owned and private companies.
                </p>
                <p>
                  These companies operate in more than 700 sites in
                  over 40 producing countries. The assessment covers
                  most mined commodities, escluding oil and gas. The
                  assessment also focuses on 127 mine sites located
                  in countries with low-income or lower-middle-income
                  economies or high levels of inequality.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="page-content">
          <div className="section -dark">
            <div className="l-layout">
              <div className="row">
                <div className="col-md-5">
                  <CompaniesList />
                </div>
                <div className="col-md-7">
                  <CompaniesFilters />
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

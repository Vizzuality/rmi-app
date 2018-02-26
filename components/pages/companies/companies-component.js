import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Map from 'components/common/map';
import CompaniesList from './companies-list';
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
    const { ISO_A3 } = geography.properties;
    this.props.setFilters({ country: ISO_A3 });
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
                <p>Lorem ipsum companies</p>
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

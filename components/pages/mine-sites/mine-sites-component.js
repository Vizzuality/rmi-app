import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// components
import Map from 'components/common/map';
import CompaniesList from 'components/common/companies-list';

// constants
import { MAP_LEGEND } from './mine-sites-constants';
// helpers
import { getCompanyCountryColor } from './mine-sites-helpers';

// styles
import styles from './mine-sites-styles.scss';

class MineSite extends PureComponent {
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
      <div className="c-mine-site-page">
        <style jsx>{styles}</style>
        <div className="page-intro">
          <div className="l-layout">
            <div className="row">
              <div className="col-md-6">
                <h2 className="title">Mine Sites</h2>
              </div>
              <div className="col-md-6">
                <p>Lorem ipsum mine sites</p>
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
                  <div className="map-container">
                    <Map
                      paths={paths}
                      setCountryColor={MineSite.setCountryColor}
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

export default MineSite;

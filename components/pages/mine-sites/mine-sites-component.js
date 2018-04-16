import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// components
import Map from 'components/common/map';
import CompaniesList from 'components/common/companies-list';

// constants
import { MAP_LEGEND } from './mine-sites-constants';
// helpers
import { getCompanyCountryColor } from './mine-sites-helpers';

class MineSite extends PureComponent {
  static propTypes = {
    paths: PropTypes.array.isRequired,
    markers: PropTypes.array.isRequired,
    setFilters: PropTypes.func.isRequired,
    resetFilters: PropTypes.func.isRequired
  }

  static setCountryColor = geographyProperties => getCompanyCountryColor(geographyProperties);

  componentWillUnmount() {
    this.props.resetFilters();
  }

  handleClickGeography = (geography) => {
    const { ISO_A3 } = geography.properties;
    this.props.setFilters({ country: ISO_A3 });
  };

  handleOpenTooltip = ({ id }) => { this.props.setFilters({ selectedCompany: +id }); }

  handleCloseTooltip = () => { this.props.setFilters({ selectedCompany: null }); };

  render() {
    const { paths, markers } = this.props;

    return (
      <div className="c-mine-site-page">
        <div className="page-intro">
          <div className="l-layout">
            <div className="row">
              <div className="col-md-6">
                <h2 className="title">Mine Sites</h2>
              </div>
              <div className="col-md-6">
                <p>
                  In addition to the company-wide indicators,
                  six indicators are applied at a mine-site
                  level for the individually selected 127 mine
                  sites. Although these indicators are scored
                  to indicate each site’s level of performance,
                  these scores are not included in the thematic-area-level
                  scores for company-wide indicators.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="page-content">
          <div className="section -dark">
            <div className="l-layout">
              <div className="row">
                <div className="col-md-4">
                  <CompaniesList
                    isCompanyPage={false}
                    onOpenTooltip={this.handleOpenTooltip}
                    onCloseTooltip={this.handleCloseTooltip}
                  />
                </div>
                <div className="col-md-8">
                  <div className="map-container">
                    <Map
                      paths={paths}
                      markers={markers}
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

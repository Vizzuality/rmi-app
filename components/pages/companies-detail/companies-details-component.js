import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Map from 'components/common/map';
import CompanyDetailHeader from './companies-detail-header';
import CompaniesDetailSidebar from './companies-detail-sidebar';
import CompaniesDetailScoresBreakDown from './companies-detail-scores-breakdown';

// constants
import { MAP_LEGEND } from './companies-details-constants';

// helpers
import { getCompanyCountryColor } from './companies-details-helpers';

// styles
import styles from './companies-details-styles.scss';

class CompaniesDetail extends PureComponent {
  static propTypes = {
    paths: PropTypes.array.isRequired,
    issueAreas: PropTypes.array.isRequired,
    setIssueArea: PropTypes.func.isRequired
  }

  static setCountryColor = geographyProperties => getCompanyCountryColor(geographyProperties);

  componentWillMount() {
    const initialIssueArea = (this.props.issueAreas[0] || {}).id;
    this.props.setIssueArea(initialIssueArea);
  }

  render() {
    const { paths } = this.props;

    return (
      <div className="c-companies-detail-page">
        <style jsx>{styles}</style>

        <div className="page-content">
          <div className="companies-detail-intro">
            <CompanyDetailHeader />
            <div className="l-layout">
              <div className="companies-detail-preview">
                <div className="row">
                  <div className="col-md-5">
                    <CompaniesDetailSidebar />
                  </div>

                  <div className="col-md-7">
                    <div className="map-container">
                      <Map
                        paths={paths}
                        setCountryColor={CompaniesDetail.setCountryColor}
                        legend={MAP_LEGEND}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CompaniesDetailScoresBreakDown />
        </div>
      </div>
    );
  }
}

export default CompaniesDetail;

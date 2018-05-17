import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Map from 'components/common/map';
import Disclaimer from 'components/common/disclaimer';
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
    mineSites: PropTypes.array.isRequired,
    printable: PropTypes.bool.isRequired,
    setIssueArea: PropTypes.func.isRequired,
    resetCompanies: PropTypes.func.isRequired
  }

  static setCountryColor = geographyProperties => getCompanyCountryColor(geographyProperties);

  componentWillMount() {
    const initialIssueArea = (this.props.issueAreas[0] || {}).id;
    this.props.setIssueArea(initialIssueArea);
  }

  componentDidUpdate(prevProps) {
    const printableChanged = this.props.printable !== prevProps.printable;
    if (this.props.printable && printableChanged) {
      window.setTimeout(() => window.print(), 500);
      window.setTimeout(() => this.props.togglePrintable(false), 500);
    }
  }

  componentWillUnmount() {
    this.props.resetCompanies();
  }

  render() {
    const { paths, mineSites } = this.props;

    return (
      <div className="c-companies-detail-page">
        <style jsx>{styles}</style>

        <div className="page-content">
          <div className="companies-detail-intro">
            <CompanyDetailHeader />
            <div className="l-layout">
              <div className="companies-detail-preview">
                <div className="row">
                  <div className="col-xs-12 col-md-5">
                    <CompaniesDetailSidebar />
                  </div>

                  <div className="col-md-7">
                    <div className="map-container">
                      <Map
                        paths={paths}
                        markers={mineSites}
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
          <div className="section">
            <div className="l-layout">
              <div className="row">
                <div className="col-xs-12">
                  <Disclaimer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompaniesDetail;

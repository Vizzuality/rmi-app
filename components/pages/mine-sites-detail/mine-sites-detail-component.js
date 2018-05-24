import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Disclaimer from 'components/common/disclaimer';
import MineSitesDetailHeader from './mine-sites-detail-header';
import MineSitesDetailSidebar from './mine-sites-detail-sidebar';
import MineSiteSatelliteView from './mine-site-satellite-view';
import MineSitesDetailBars from './mine-sites-detail-bars';
import MineSitesDetailAccordion from './mine-sites-detail-accordion';
import MineSitesDetailAssessmentTable from './mine-sites-detail-assessments-table';
import MineSitesDetailCountryComparison from './mine-sites-detail-country-comparison';

// styles
import styles from './mine-sites-detail-styles.scss';

class MineSitesDetail extends PureComponent {
  static propTypes = {
    printable: PropTypes.bool.isRequired,
    togglePrintable: PropTypes.func.isRequired
  }

  componentDidUpdate(prevProps) {
    const printableChanged = this.props.printable !== prevProps.printable;
    if (this.props.printable && printableChanged) {
      window.setTimeout(() => window.print(), 500);
      window.setTimeout(() => this.props.togglePrintable(false), 500);
    }
  }

  render() {
    return (
      <div className="c-mine-sites-detail-page">
        <style jsx>{styles}</style>
        <div className="page-content">
          <div className="mine-sites-detail-intro">
            <MineSitesDetailHeader />
            <div className="l-layout">
              <div className="mine-sites-detail-preview">
                <div className="row">
                  <div className="col-xs-12 col-md-5">
                    <MineSitesDetailSidebar />
                  </div>
                  <div className="col-xs-12 col-md-7">
                    <div className="map-container" id="mine-site-satellite-view">
                      <MineSiteSatelliteView
                        containerElement={<div style={{ height: '400px' }} />}
                        mapElement={<div style={{ height: '100%' }} />}
                        loadingElement={<div style={{ height: '100%' }} />}
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&v=3.exp`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mine Site Scores BarCharts */}
          <section className="section -dark">
            <div className="l-layout">
              <div className="row">
                <div className="col-xs-12">
                  <MineSitesDetailBars />
                </div>
              </div>
            </div>
          </section>

          {/* Accordion */}
          <div className="page-break" />
          <section className="section -dark">
            <div className="l-layout">
              <div className="row">
                <div className="col-xs-12">
                  <MineSitesDetailAccordion />
                </div>
              </div>
            </div>
          </section>

          {/* Mine Site Assessments */}
          <section className="section">
            <div className="l-layout">
              <div className="row center-xs">
                <div className="col-xs-12">
                  <MineSitesDetailAssessmentTable />
                </div>
              </div>
            </div>
          </section>

          {/* Country comparison */}
          <section className="section -dark">
            <div className="l-layout">
              <div className="row">
                <div className="col-xs-12">
                  <MineSitesDetailCountryComparison />
                </div>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <div className="page-break" />
          <section className="section disclaimer">
            <div className="l-layout">
              <div className="row">
                <div className="col-xs-12">
                  <Disclaimer />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default MineSitesDetail;

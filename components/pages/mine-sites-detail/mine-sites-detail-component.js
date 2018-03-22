import React, { PureComponent } from 'react';

// components
import Disclaimer from 'components/common/disclaimer';
import MineSitesDetailHeader from './mine-sites-detail-header';
import MineSitesDetailSidebar from './mine-sites-detail-sidebar';
import MineSitesDetailBars from './mine-sites-detail-bars';
import MineSitesDetailAccordion from './mine-sites-detail-accordion';
import MineSitesDetailAssessmentTable from './mine-sites-detail-assessments-table';
import MineSitesDetailCountryComparison from './mine-sites-detail-country-comparison';

// styles
import styles from './mine-sites-detail-styles.scss';

class MineSitesDetail extends PureComponent {
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
                  <div className="col-md-5">
                    <MineSitesDetailSidebar />
                  </div>
                  <div className="col-md-7">
                    <div className="map-container" />
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

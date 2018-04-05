import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Bars from 'components/charts/barschart';

// constants
import { CHART_CONFIG, OVERALL_CHARTS_TITLES } from './companies-detail-overall-measurements-constants';

// styles
import styles from './companies-detail-overall-measurements-styles.scss';


class CompaniesDetailOverallMeasurements extends PureComponent {
  static propTypes = { data: PropTypes.array.isRequired }

  render() {
    const { data } = this.props;

    return (
      <div className="c-companies-detail-overall-measurements">
        <style jsx>{styles}</style>
        <div className="row">
          <div className="col-xs-12">
            <h3 className="title">Relative company performance</h3>
          </div>
        </div>
        <div className="charts-container">
          <div className="row">
            {data.map(d => (
              <div key={d.id} className="col-xs-12 col-md-4">
                <Bars
                  config={CHART_CONFIG}
                  data={d.children}
                />
                <div className="chart-legend">
                  <h2 className="title">{OVERALL_CHARTS_TITLES[d.name]}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="overall-legend">
          1.000 = aggregation of best scores for all indicators of this measurement area.
        </div>
      </div>
    );
  }
}

export default CompaniesDetailOverallMeasurements;

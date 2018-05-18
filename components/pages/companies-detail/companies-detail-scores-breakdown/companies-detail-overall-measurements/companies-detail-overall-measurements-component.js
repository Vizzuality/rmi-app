import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// components
import Bars from 'components/charts/barschart';

// constants
import { CHART_CONFIG, OVERALL_CHARTS_TITLES } from './companies-detail-overall-measurements-constants';

// styles
import styles from './companies-detail-overall-measurements-styles.scss';

class CompaniesDetailOverallMeasurements extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    printable: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);

    this.chartConfig = {
      ...CHART_CONFIG,
      width: 225
    };
  }

  render() {
    const { data, printable } = this.props;

    const columnClass = classnames({
      'col-xs-4': printable,
      'col-xs-12': !printable,
      'col-md-4': !printable
    });

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
              <div key={d.id} className={columnClass}>
                <Bars
                  config={this.chartConfig}
                  data={d.children}
                  customTooltip
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

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import MeasurementChartsItem from './measurement-charts-item';

// styles
import styles from './measurement-charts-styles.scss';

class MeasurementCharts extends PureComponent {
  static propTypes = { measurements: PropTypes.array.isRequired }

  renderMeasurementCharts() {
    const { measurements } = this.props;

    return (
      <div className="row">
        {measurements.map((measurement, index) => (
          <div key={measurement.id} className="col-xs-4">
            <MeasurementChartsItem
              data={measurement}
              actionPosition={index}
            />
          </div>
        ))}
      </div>
    );
  }

  render() {
    const measurementCharts = this.renderMeasurementCharts();

    return (
      <div className="c-measurement-charts">
        <style jsx>{styles}</style>
        {measurementCharts}
      </div>
    );
  }
}

export default MeasurementCharts;

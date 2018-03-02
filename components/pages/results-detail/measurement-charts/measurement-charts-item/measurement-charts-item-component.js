import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Bars from 'components/charts/barschart';

// styles
import styles from './measurement-charts-item-styles.scss';

class MeasurementChartsItem extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired
  }

  render() {
    const { data, config } = this.props;
    const { scores, name } = data;

    return (
      <div className="c-measurement-chart-item">
        <style jsx>{styles}</style>
        <Bars
          data={scores}
          config={config}
        />
        <div className="legend-chart">
          <span className="legend-title">{name}</span>
        </div>
      </div>
    );
  }
}

export default MeasurementChartsItem;

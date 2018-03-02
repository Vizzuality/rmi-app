import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Bars from 'components/charts/barschart';

class OverallChart extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired
  }

  render() {
    const { data, config } = this.props;
    const { scores } = data;

    return (
      <div className="c-overall-chart">
        <Bars
          data={scores}
          config={config}
        />
      </div>
    );
  }
}

export default OverallChart;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import StackedBars from 'components/charts/stacked-bars-chart';

// constants
import { BARS } from './overall-chart-constants';

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
        <StackedBars
          data={scores}
          config={config}
          bars={BARS}
        />
      </div>
    );
  }
}

export default OverallChart;

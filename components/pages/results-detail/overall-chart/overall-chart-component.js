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

  componentWillMount() {
    const { data, config } = this.props;
    const { bestPracticeScore } = data;
    this.chartConfig = {
      ...config,
      yReferenceLine: bestPracticeScore
    };
  }

  render() {
    const { data } = this.props;
    const { scores } = data;

    return (
      <div className="c-overall-chart">
        <StackedBars
          data={scores}
          config={this.chartConfig}
          bars={BARS}
        />
      </div>
    );
  }
}

export default OverallChart;

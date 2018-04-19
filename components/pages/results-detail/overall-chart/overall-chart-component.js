import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import StackedBars from 'components/charts/stacked-bars-chart';

// constants
import { BARS } from './overall-chart-constants';

class OverallChart extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
    responsive: PropTypes.object.isRequired
  }

  componentWillMount() {
    const { data, config, responsive } = this.props;
    const { bestPracticeScore } = data;
    const { mobile, tablet } = responsive;

    this.chartConfig = {
      ...config,
      ...(mobile && !tablet) && {
        xAxisInterval: 'preserveEnd',
        xAxisTextAnchor: 'end'
      },
      yReferenceLine: bestPracticeScore
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      data: nextData,
      config: nextConfig,
      responsive: nextResponsive
    } = nextProps;
    const { bestPracticeScore } = nextData;
    const { mobile, tablet } = nextResponsive;

    this.chartConfig = {
      ...this.chartConfig,
      ...nextConfig,
      ...(mobile && !tablet) && {
        xAxisInterval: 'preserveEnd',
        xAxisTextAnchor: 'end'
      },
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

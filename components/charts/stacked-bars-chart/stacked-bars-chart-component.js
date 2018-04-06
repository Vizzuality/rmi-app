/* eslint-disable jsx-a11y/mouse-events-have-key-events */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

// config
import CHART_CONFIG from './stacked-bars-chart-config';

// styles
import styles from './stacked-bars-chart-styles.scss';

class StackedBarsChart extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    bars: PropTypes.arrayOf(
      PropTypes.shape({ dataKey: PropTypes.string.isRequired })
    ).isRequired,
    config: PropTypes.object
  }

  static defaultProps = { config: {} }

  componentWillMount() {
    const { config: customConfig } = this.props;
    this.config = { ...CHART_CONFIG, ...customConfig };
  }

  handleBarFill = (item) => {
    const { setBarFill } = this.props.config;

    return setBarFill(item);
  }

  render() {
    const { data, bars } = this.props;
    const {
      // general chart config
      width,
      height,
      // cartesian grid config
      strokeDasharray,
      // y axis config
      yDomain,
      yAxisTicks,
      yAxisTick,
      yAxisLine,
      // x axis config
      xAxisKey,
      xAxisHeight,
      xAxisTickLine,
      xAxisTextAnchor,
      xAxisTick,
      xAxisTicks,
      xAxisInterval,
      // bar config
      barSize,
      barOnMouseOver,
      barIsAnimationActive
    } = this.config;

    return (
      <div className="c-stacked-bars-chart">
        <style jsx>{styles}</style>
        <ResponsiveContainer width={width} height={height}>
          <BarChart data={data}>
            <CartesianGrid
              vertical={false}
              strokeDasharray={strokeDasharray}
            />
            <YAxis
              domain={yDomain}
              ticks={yAxisTicks}
              tick={yAxisTick}
              tickLine={false}
              axisLine={yAxisLine}
              interval={0}
            />
            <XAxis
              dataKey={xAxisKey}
              height={xAxisHeight}
              tickLine={xAxisTickLine}
              textAnchor={xAxisTextAnchor}
              tick={xAxisTick}
              ticks={xAxisTicks}
              interval={xAxisInterval}
            />
            {bars.map(bar => (
              <Bar
                key={bar.dataKey}
                isAnimationActive={barIsAnimationActive}
                dataKey={bar.dataKey}
                barSize={barSize}
                onMouseOver={barOnMouseOver}
                stackId="stack"
                fill={this.handleBarFill(bar)}
              />
            ))}
            <Tooltip
              isAnimationActive={false}
              cursor={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default StackedBarsChart;

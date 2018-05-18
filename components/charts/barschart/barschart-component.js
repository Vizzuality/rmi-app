/* eslint-disable jsx-a11y/mouse-events-have-key-events */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

// components
import DefaultTooltip from 'components/charts/default-tooltip';
import CustomTooltip from './custom-tooltip';

// config
import defaultConfig from './barschart-config';

// styles
import styles from './barschart-styles.scss';

class BarsChart extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    config: PropTypes.object,
    customTooltip: PropTypes.bool
  }

  static defaultProps = {
    config: {},
    customTooltip: false
  }

  componentWillMount() {
    const { config: customConfig } = this.props;
    this.config = { ...defaultConfig, ...customConfig };
  }

  handleBarFill = (item) => {
    const { setBarFill } = this.props.config;

    return setBarFill(item);
  }

  render() {
    const { data, customTooltip } = this.props;
    const {
      domain,
      isAnimationActive,
      barChartOnMouseLeave,
      xAxisKey,
      xAxisTickLine,
      xAxisTick,
      xAxisHeight,
      xAxisTicks,
      xAxisTextAnchor,
      xAxisInterval,
      width,
      height,
      barDataKey,
      YAxisTicks,
      YAxisTick,
      YAxisHide,
      YaxisLine,
      strokeDasharray,
      barSize,
      barOnMouseOver
    } = this.config;

    return (
      <div className="c-barchart">
        <style jsx>{styles}</style>
        <ResponsiveContainer width={width} height={height}>
          <BarChart
            data={data}
            onMouseLeave={barChartOnMouseLeave}
          >
            <YAxis
              domain={domain}
              ticks={YAxisTicks}
              tick={YAxisTick}
              tickLine={false}
              axisLine={YaxisLine}
              interval={0}
              hide={YAxisHide}
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
            <CartesianGrid
              vertical={false}
              strokeDasharray={strokeDasharray}
            />
            <Bar
              isAnimationActive={isAnimationActive}
              dataKey={barDataKey}
              barSize={barSize}
              onMouseOver={barOnMouseOver}
            >
              {data.map(item => (
                <Cell
                  key={item.id}
                  fill={this.handleBarFill(item)}
                />
              ))}
            </Bar>
            <Tooltip
              {...!customTooltip && { content: <DefaultTooltip /> }}
              {...customTooltip && { content: <CustomTooltip companies={data} /> }}
              isAnimationActive={false}
              cursor={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default BarsChart;

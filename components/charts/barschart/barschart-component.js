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

// config
import defaultConfig from './barschart-config';

// styles
import styles from './barschart-styles.scss';

class BarsChart extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    config: PropTypes.object
  }

  static defaultProps = { config: {} };

  componentWillMount() {
    const { config: customConfig } = this.props;
    this.config = { ...defaultConfig, ...customConfig };
  }

  handleBarFill = (item) => {
    const { setBarFill } = this.props.config;

    return setBarFill(item);
  }

  render() {
    const { data } = this.props;
    const {
      domain,
      xAxis,
      xAxisKey,
      width,
      height,
      barDataKey,
      ticks,
      strokeDasharray,
      barSize,
      YaxisLine
    } = this.config;

    return (
      <div className="c-barchart">
        <style jsx>{styles}</style>
        <ResponsiveContainer width={width} height={height}>
          <BarChart data={data}>
            <YAxis
              domain={domain}
              ticks={ticks}
              tickLine={false}
              interval={0}
              axisLine={YaxisLine}
            />
            {xAxis &&
              <XAxis dataKey={xAxisKey} />}
            <CartesianGrid
              vertical={false}
              strokeDasharray={strokeDasharray}

            />
            <Bar
              dataKey={barDataKey}
              barSize={barSize}
            >
              {data.map(item => (
                <Cell
                  key={item.id}
                  fill={this.handleBarFill(item)}
                />
              ))}
            </Bar>
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

export default BarsChart;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, Cell, YAxis, CartesianGrid, Tooltip } from 'recharts';

// config
import config from './barschart-config';

class BarsChart extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    barDataKey: PropTypes.string.isRequired,
    yAxisDataKey: PropTypes.string.isRequired
  }

  static getFill() {

  }

  render() {
    const { width, height, barSize, strokeDasharray, domain } = config;
    const { data, yAxisDataKey, barDataKey } = this.props;

    return (
      <div className="c-barchart">
        <BarChart width={width} height={height} data={data}>
          <YAxis
            domain={domain}
            ticks={['0', '0.2', '0.4', '0.6', '0.8', '1']}
            tickLine={false}
            interval={0}

          />
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
                fill={item.currentCompany ? '#333' : '#ddd'}
              />
            ))}
          </Bar>
          <Tooltip isAnimationActive={false} cursor={false} />
        </BarChart>
      </div>
    );
  }
}

export default BarsChart;

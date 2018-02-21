import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip, PolarRadiusAxis } from 'recharts';

// constants
import config from './spiderchart-config';

class Piechart extends PureComponent {
  static propTypes = { data: PropTypes.array.isRequired }

  render() {
    const { width, height, dataKeyAxis, dataKeyRadar, outerRadius, fill, stroke, domain } = config;
    const { data } = this.props;

    return (
      <div className="c-spiderchart">
        <RadarChart outerRadius={outerRadius} width={width} height={height} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey={dataKeyAxis} />
          <Radar dataKey={dataKeyRadar} stroke={stroke} fill={fill} />
          <Tooltip />
          <PolarRadiusAxis angle={30} domain={domain} tick={false} />
        </RadarChart>
      </div>
    );
  }
}

export default Piechart;

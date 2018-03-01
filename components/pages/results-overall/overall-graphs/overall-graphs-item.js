import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Bars from 'components/charts/barschart';

// constants
import { BAR_CONFIG, AREA_ISSUES_COLORS } from './overall-graphs-constants';


// styles
import styles from './overall-graphs-styles.scss';

class OverallGraphs extends PureComponent {
  static propTypes = { data: PropTypes.object.isRequired }

  componentWillMount() {
    const { slug } = this.props.data;
    this.chartConfig = {
      ...BAR_CONFIG,
      setBarFill: () => AREA_ISSUES_COLORS[slug]
    };
  }

  render() {
    const { data } = this.props;
    const { scores, label } = data;

    return (
      <div className="graph-item">
        <style jsx>{styles}</style>
        <div className="graph-item-container">
          <Bars
            config={this.chartConfig}
            data={scores}
          />
          <div className="chart-legend">
            <h2 className="title">{label}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default OverallGraphs;

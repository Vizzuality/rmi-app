import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import StackedBars from 'components/charts/stacked-bars-chart';

// constants
import { BAR_CONFIG, STACKED_BAR_COLOURS, BARS } from './overall-graphs-constants';

// styles
import styles from './overall-graphs-styles.scss';

class OverallGraphs extends PureComponent {
  static propTypes = { data: PropTypes.object.isRequired }

  componentWillMount() {
    const { slug } = this.props.data;
    this.chartConfig = {
      ...BAR_CONFIG,
      setBarFill: ({ dataKey }) => STACKED_BAR_COLOURS[slug][dataKey]
    };
  }

  render() {
    const { data } = this.props;
    const { scores, label } = data;

    return (
      <div className="graph-item">
        <style jsx>{styles}</style>
        <div className="graph-item-container">
          <StackedBars
            config={this.chartConfig}
            data={scores}
            bars={BARS}
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

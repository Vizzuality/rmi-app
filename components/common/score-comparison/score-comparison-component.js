import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './score-comparison-styles.scss';

class ScoreComparison extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired
  }

  static getWidth(value) {
    return `${((value * 100) / 6)}%`;
  }

  render() {
    const { data, config } = this.props;
    const { avg, min, max, value } = data;
    const { color } = config;

    return (
      <div className="c-score-comparison">
        <style jsx>{styles}</style>
        <div className="score-bar">
          <div
            className="score-value"
            style={{
              backgroundColor: color,
              width: `calc(${ScoreComparison.getWidth(value)} + 2px)`
            }}
          >
            {!!value && <span className="score-value-string">{value}</span>}
          </div>
          <div
            className="score-avg"
            style={{ left: ScoreComparison.getWidth(avg) }}
          >
            <div className="legend">
              <span>Avg</span>
              <span>{avg}</span>
            </div>
          </div>
          <div
            className="score-min"
            style={{ left: ScoreComparison.getWidth(min) }}
          >
            <div className="legend">
              <span>Min</span>
              <span>{min}</span>
            </div>
          </div>
          <div
            className="score-max"
            style={{ left: `calc(${ScoreComparison.getWidth(max)} + 1px)` }}
          >
            <div className="legend">
              <span>Max</span>
              <span>{max}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScoreComparison;

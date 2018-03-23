import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { fixedValue } from 'utils/value-parser';

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
    const { color, hideInnerValue } = config;

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
            {!hideInnerValue && <span className={`score-value-string ${(value === 0) && 'zero-value'}`}>{fixedValue(value)}</span>}
          </div>
          <div
            className="score-avg"
            style={{ left: ScoreComparison.getWidth(avg) }}
          >
            <div className="legend">
              <span>Avg</span>
              <span>{fixedValue(avg)}</span>
            </div>
          </div>

          {
            (min !== undefined) && <div
              className="score-min"
              style={{ left: ScoreComparison.getWidth(min) }}
            >
              <div className="legend">
                <span>Min</span>
                <span>{fixedValue(min)}</span>
              </div>
            </div>
          }

          <div
            className="score-max"
            style={{ left: `calc(${ScoreComparison.getWidth(max)} + 1px)` }}
          >
            <div className="legend">
              <span>Max</span>
              <span>{fixedValue(max)}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScoreComparison;

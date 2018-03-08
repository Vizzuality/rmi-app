import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Tooltip from 'rc-tooltip';
import Icon from 'components/common/icon';

// constants
import { AREA_ISSUE_COLOURS } from 'constants/graph-colors';

// styles
import styles from './stacked-bars-styles.scss';

class StackedBars extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    colors: PropTypes.array.isRequired
  }

  getBarAttributes(bar, index) {
    const { colors } = this.props;
    const { value } = bar;

    return {
      width: `${(value * 100) / 1}%`,
      backgroundColor: colors[index]
    };
  }

  render() {
    const { data } = this.props;
    const { name, slug, children } = data;
    let totalScore = 0;

    children.forEach((child) => { totalScore += child.value; });

    return (
      <div className="c-stacked-bars">
        <style jsx>{styles}</style>
        <div className="bar-header">
          <div
            className="bar-icon"
            style={{ background: AREA_ISSUE_COLOURS[slug] }}
          >
            <Icon
              name={slug}
              className="-big"
            />
          </div>
          <h3 className="bar-title">{name}</h3>
        </div>
        <div className="stacked-bars-container">
          <div className="bar">
            {(children).map((bar, index) => (
              <Tooltip
                key={bar.id}
                placement="bottom"
                trigger={['hover']}
                overlay={<span>{bar.name}</span>}
                mouseLeaveDelay={0}
              >
                <div
                  className="bar-node"
                  style={this.getBarAttributes(bar, index)}
                />
              </Tooltip>
            ))}
          </div>
          <div className="score">
            <span className="current-score">{totalScore.toFixed(3)} <span className="total-score"> / 1.000</span></span>
          </div>
        </div>
      </div>
    );
  }
}

export default StackedBars;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './custom-tooltip-styles.scss';

class CustomTooltip extends PureComponent {
  static propTypes = { payload: PropTypes.array }

  static defaultProps = { payload: [] }

  render() {
    const { payload } = this.props;
    const { name, overallScore } = (payload[0] || {}).payload || {};

    if (payload[0] && payload[0].payload) {
      return (
        <div className="c-custom-tooltip">
          <style jsx>{styles}</style>
          <span>{name}</span>
          <span>Score: {overallScore}</span>
        </div>
      );
    }

    return null;
  }
}

export default CustomTooltip;

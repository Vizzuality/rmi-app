/* eslint-disable react/no-array-index-key */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './default-tooltip-styles.scss';

class DefaultTooltip extends PureComponent {
  static propTypes = {
    payload: PropTypes.array,
    payloadKeyName: PropTypes.string,
    payloadKeyValue: PropTypes.string,
    labelValue: PropTypes.string
  }

  static defaultProps = {
    payload: [],
    payloadKeyName: 'name',
    payloadKeyValue: 'value',
    labelValue: 'Score'
  }

  render() {
    const { payload, payloadKeyName, payloadKeyValue, labelValue } = this.props;

    if (!payload.length) return null;

    return (
      <div className="c-default-tooltip">
        <style jsx>{styles}</style>
        {payload.map((payloadItem, index) => (

          <div key={index} className="payload-item">
            <span>{payloadItem.payload[payloadKeyName]}</span>
            <span>{labelValue}: {payloadItem.payload[payloadKeyValue]}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default DefaultTooltip;

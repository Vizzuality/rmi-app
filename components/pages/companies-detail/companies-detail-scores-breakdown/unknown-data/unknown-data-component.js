import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './unknown-data-styles.scss';

class Unknowndata extends PureComponent {
  static propTypes = {
    asOf: PropTypes.bool,
    text: PropTypes.string
  }

  static defaultProps = {
    asOf: true,
    text: 'Unknown'
  }

  render() {
    const { asOf, text } = this.props;
    return (
      <div className="c-unknown-data">
        <style jsx>{styles}</style>
        {asOf && <span className="as-of">As of: Unknown</span>}
        <span className="unknown-value">{text}</span>
      </div>
    );
  }
}

export default Unknowndata;

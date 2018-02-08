import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// styles
import styles from './spinner-styles.scss';

class Spinner extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
  }

  render() {
    const { className, style } = this.props;
    const spinnerClasses = classnames({
      'c-spinner': true,
      [className]: !!className
    });

    return (
      <div className={spinnerClasses}>
        <style jsx>{styles}</style>
        <div className="spinner-box" style={style}>
          <div className="icon" />
        </div>
      </div>
    );
  }
}

export default Spinner;

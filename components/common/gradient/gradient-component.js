import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './gradient-styles.scss';

class Gradient extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired
  }

  static defaultProps = { className: null }

  render() {
    const gradientClass = classnames({
      'c-gradient': true,
      [this.props.className]: !!this.props.className
    });

    return (
      <div className={gradientClass}>
        <style jsx global>{styles}</style>
        <div className="overflow-container">
          <div className="component-container">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Gradient;

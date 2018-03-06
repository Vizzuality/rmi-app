import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './custom-content-styles.scss';

class CustomContent extends PureComponent {
  static propTypes = { children: PropTypes.any.isRequired }
  render() {
    return (
      <div className="c-custom-content">
        <style jsx>{styles}</style>
        {this.props.children}
      </div>
    );
  }
}

export default CustomContent;

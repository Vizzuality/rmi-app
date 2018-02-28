import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

// styles
import styles from './icon-styles.scss';

class Icon extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string
  }

  static defaultProps = { className: null }

  render() {
    const { className, name } = this.props;
    const iconClasess = classnames({
      'c-icon': true,
      [className]: !!className
    });

    return (
      <svg className={iconClasess}>
        <style jsx>{styles}</style>
        <use xlinkHref={`#icon-${name}`} />
      </svg>
    );
  }
}

export default Icon;

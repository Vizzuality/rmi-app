import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// styles
import styles from './button-styles.scss';

class Button extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired,
    onClick: PropTypes.func,
    padding: PropTypes.bool, // adds padding to the button
    disabled: PropTypes.bool
  }

  static defaultProps = {
    onClick: () => ({}),
    className: null,
    padding: true,
    disabled: false
  }

  render() {
    const { className, children, onClick, padding, disabled } = this.props;
    const buttonClassClasses = classnames({
      'c-button': true,
      '-padding': padding,
      [className]: !!className
    });

    return (
      <button
        className={buttonClassClasses}
        onClick={onClick}
        disabled={disabled}
      >
        <style jsx>{styles}</style>
        {children}
      </button>
    );
  }
}

export default Button;

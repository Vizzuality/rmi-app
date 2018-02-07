import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';

// styles
import styles from './card-styles.scss';

class Card extends PureComponent {
  static propTypes = {
    children: Proptypes.any.isRequired
  }

  render() {
    const { children } = this.props;
    return (
      <div className="c-card">
        <style jsx>{styles}</style>
        {children}
      </div>
    );
  }
}

export default Card;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import { Carousel } from 'react-responsive-carousel';

// styles
import styles from './carousel-styles.scss';

class CarouselComponent extends PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired
  };

  static defaultProps = {};

  render() {
    const { children } = this.props;

    return (
      <div className="c-carousel">
        <style jsx global>{styles}</style>

        <Carousel
          showStatus={false}
          showIndicators={false}
          infiniteLoop
        >
          {children}
        </Carousel>

      </div>
    );
  }
}

export default CarouselComponent;

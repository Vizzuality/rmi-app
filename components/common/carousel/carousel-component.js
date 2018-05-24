import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import { Carousel } from 'react-responsive-carousel';

// styles
import styles from './carousel-styles.scss';

class CarouselComponent extends PureComponent {
  static propTypes = {
    showArrows: PropTypes.bool,
    selectedItem: PropTypes.number,
    children: PropTypes.any.isRequired
  };

  static defaultProps = {
    showArrows: true,
    selectedItem: 0
  };

  render() {
    const { children, selectedItem, showArrows } = this.props;

    return (
      <div className="c-carousel">
        <style jsx global>{styles}</style>

        <Carousel
          showStatus={false}
          showIndicators={false}
          infiniteLoop
          showArrows={showArrows}
          selectedItem={selectedItem}
        >
          {children}
        </Carousel>

      </div>
    );
  }
}

export default CarouselComponent;

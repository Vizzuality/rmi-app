import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './news-slider-styles.scss';

class NewsSlider extends PureComponent {
  static propTypes = {
    news: PropTypes.array
  }

  render() {
    return (
      <div className="c-news-slider">
        <style jsx>{styles}</style>
        <h4 className="title">News.</h4>
      </div>
    );
  }
}

export default NewsSlider;

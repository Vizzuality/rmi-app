import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// components
import Carousel from 'components/common/carousel';

// styles
import styles from './news-slider-styles.scss';

// constants
const NEWS_PER_SLIDE = 3;

class NewsSlider extends PureComponent {
  static propTypes = {
    news: PropTypes.array
  }

  static defaultProps = {
    news: []
  }

  static parseDate(date) {
    return moment(date).format('MMM.DD.YYYY');
  }

  renderNews(news, key) {
    return (
      <Fragment key={key} >
        <style jsx>{styles}</style>
        <div className="row">
          {news.map(_news => (
            <div key={_news.id} className="col-md-4">
              <div className="news-card" style={{ backgroundImage: `url(${_news.image})` }}>
                <div className="wrapper">
                  <h2 className="title">{_news.title}</h2>
                  <p className="summary">{_news.summary}</p>
                </div>
              </div>
              <div className="date">
                <span>{NewsSlider.parseDate(_news['created-at'])}</span>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }

  renderSlides() {
    const { news } = this.props;
    const totalRows = (news.length / NEWS_PER_SLIDE) > parseInt(news.length / NEWS_PER_SLIDE, 10) ?
      parseInt(news.length / NEWS_PER_SLIDE, 10) + 1 : parseInt(news.length / NEWS_PER_SLIDE, 10);
    const slides = [];

    for (let i = 0; i < totalRows; i++) {
      const limit = ((i * NEWS_PER_SLIDE) + NEWS_PER_SLIDE);
      const slicedNews = news.slice(i * NEWS_PER_SLIDE, limit);
      slides.push(this.renderNews(slicedNews, i));
    }

    return slides;
  }

  render() {
    const slides = this.renderSlides();

    return (
      <div className="c-news-slider">
        <style jsx>{styles}</style>
        <h4 className="title">News.</h4>
        <div className="news-container">
          <Carousel>
            {slides.map(slide => slide)}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default NewsSlider;

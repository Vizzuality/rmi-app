import { connect } from 'react-redux';
import NewsSlider from './news-slider-component';

export default connect(
  state => ({
    news: state.staticContent.content.news
  }),
  {}
)(NewsSlider);

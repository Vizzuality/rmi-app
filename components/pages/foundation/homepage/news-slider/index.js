import { connect } from 'react-redux';
import NewsSlider from './news-slider-component';

import { toggleModal } from 'modules/app/app-actions';
import { setResourceId } from 'modules/static-content/static-content-actions';

export default connect(
  state => ({ news: state.staticContent.content.news }),
  {
    toggleModal,
    setResourceId
  }
)(NewsSlider);

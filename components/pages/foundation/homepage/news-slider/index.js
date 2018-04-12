import { connect } from 'react-redux';

// actions
import { toggleModal } from 'modules/app/app-actions';
import { setResourceId } from 'modules/static-content/static-content-actions';

// component
import NewsSlider from './news-slider-component';

export default connect(
  state => ({ news: state.staticContent.content.news }),
  {
    toggleModal,
    setResourceId
  }
)(NewsSlider);

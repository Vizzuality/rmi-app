// redux
import { connect } from 'react-redux';

import { getHomePageContent } from 'modules/static-content/static-content-actions';
import { toggleModal } from 'modules/app/app-actions';
import { setResourceId } from 'modules/static-content/static-content-actions';

import FoundationHomepage from './foundation-homepage-component';


export default connect(
  state => ({
    modalOpen: state.app.modal.open,
    content: state.staticContent.content,
    news: state.staticContent.content.news
  }),
  {
    toggleModal,
    setResourceId,
    getHomePageContent
  }
)(FoundationHomepage);

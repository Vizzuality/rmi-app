// redux
import { connect } from 'react-redux';

import { getHomePageContent, setResourceId } from 'modules/static-content/static-content-actions';
import { toggleModal } from 'modules/app/app-actions';

import FoundationHomepage from './foundation-homepage-component';

export default connect(
  state => ({
    modalOpen: state.app.modal.open,
    content: state.staticContent.content,
    news: state.staticContent.content.news,
    currentLanguage: state.language.current
  }),
  {
    toggleModal,
    setResourceId,
    getHomePageContent
  }
)(FoundationHomepage);

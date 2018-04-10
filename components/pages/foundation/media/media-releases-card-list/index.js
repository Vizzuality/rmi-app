// redux
import { connect } from 'react-redux';

// actions
import { toggleModal } from 'modules/app/app-actions';
import { setResourceId } from 'modules/static-content/static-content-actions';

// selectors
import { parseMediaReleases } from './media-releases-card-list-selectors';

import MediaReleasesCardList from './media-releases-card-list-component';

export default connect(
  state => ({
    mediaReleases: parseMediaReleases(state),
    loading: state.staticContent.loading
  }),
  {
    toggleModal,
    setResourceId
  }
)(MediaReleasesCardList);

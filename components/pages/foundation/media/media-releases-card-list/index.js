// redux
import { connect } from 'react-redux';

// selectors
import { parseMediaReleases } from './media-releases-card-list-selectors';

import MediaReleasesCardList from './media-releases-card-list-component';

export default connect(
  state => ({
    mediaReleases: parseMediaReleases(state),
    loading: state.staticContent.loading
  }),
  {}
)(MediaReleasesCardList);

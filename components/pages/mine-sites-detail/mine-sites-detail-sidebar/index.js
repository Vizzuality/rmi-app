import { connect } from 'react-redux';

import MineSitesDetail from './mine-sites-detail-sidebar-component';

// selectors
import { parseMineSite } from './mine-sites-detail-selectors';

export default connect(
  state => ({
    mineSite: parseMineSite(state),
    currentLanguage: state.language.current
  }),
  {}
)(MineSitesDetail);


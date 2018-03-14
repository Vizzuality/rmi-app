import { connect } from 'react-redux';

// selectors
import { getMobileNavigation } from './nav-bar-mobile-selectors';

import NavBarMobileComponent from './nav-bar-mobile-component';

export default connect(
  state => ({
    tabs: getMobileNavigation(state),
    routes: state.routes
  }),
  {}
)(NavBarMobileComponent);

import { connect } from 'react-redux';

// selectors
import { getNavigation } from './nav-bar-selectors';

import NavBarComponent from './nav-bar-component';

export default connect(
  state => ({
    tabs: getNavigation(state),
    routes: state.routes
  }),
  {}
)(NavBarComponent);

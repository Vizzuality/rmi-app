import { connect } from 'react-redux';


// selectors
import { getBreadcrumbs } from './breadcrumbs-selector';

import Breadcrumbs from './breadcrumbs-component';

export default connect(
  state => ({
    links: getBreadcrumbs(state),
    routes: state.routes
  }),
  {}
)(Breadcrumbs);

import { connect } from 'react-redux';

// actions
import { toggleSidebar } from 'modules/app/app-actions';

// components
import LayoutComponent from './layout-component';

export default connect(
  state => ({ responsive: state.responsive }),
  { toggleSidebar }
)(LayoutComponent);

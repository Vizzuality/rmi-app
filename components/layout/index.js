import { connect } from 'react-redux';

// actions
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toggleSidebar } from 'modules/app/app-actions';

// components
import LayoutComponent from './layout-component';

export default connect(
  state => ({ responsive: state.responsive }),
  {
    showLoading,
    hideLoading,
    toggleSidebar
  }
)(LayoutComponent);

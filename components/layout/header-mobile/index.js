import { connect } from 'react-redux';

// actions
import { toggleSidebar } from 'modules/app/app-actions';

// component
import HeaderMobile from './header-mobile-component';

export default connect(
  state => ({
    root: state.routes.root,
    sidebarVisibility: state.app.sidebar.open,
    currentLanguage: state.language.current
  }),
  { toggleSidebar }
)(HeaderMobile);

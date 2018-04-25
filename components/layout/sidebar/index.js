import { connect } from 'react-redux';

// actions
import { toggleSidebar } from 'modules/app/app-actions';

// component
import Sidebar from './sidebar-component';

export default connect(
  state => ({
    open: state.app.sidebar.open,
    routes: state.routes,
    currentLanguage: state.language.current
  }),
  { toggleSidebar }
)(Sidebar);

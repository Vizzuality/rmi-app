import { connect } from 'react-redux';
import HeaderMobile from './header-mobile-component';

export default connect(
  state => ({ root: state.routes.root }),
  {}
)(HeaderMobile);

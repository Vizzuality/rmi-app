import { connect } from 'react-redux';
import LayoutComponent from './layout-component';

export default connect(
  state => ({ responsive: state.responsive }),
  {}
)(LayoutComponent);

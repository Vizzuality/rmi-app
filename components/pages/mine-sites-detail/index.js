import { connect } from 'react-redux';
// component
import MineSiteDetail from './mine-sites-detail-component';

export default connect(
  state => ({ mineSite: state.mineSites.list[0] || {} })
)(MineSiteDetail);

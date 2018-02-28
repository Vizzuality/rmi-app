
import { connect } from 'react-redux';
import CompanyDetailHeader from './mine-sites-detail-header-component';

export default connect(
  state => ({ mineSite: state.mineSites.list[0] }),
  {}
)(CompanyDetailHeader);

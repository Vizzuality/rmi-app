
import { connect } from 'react-redux';
import CompanyDetailSidebar from './companies-detail-sidebar-component';

export default connect(
  state => ({ company: state.companies.list }),
  {}
)(CompanyDetailSidebar);

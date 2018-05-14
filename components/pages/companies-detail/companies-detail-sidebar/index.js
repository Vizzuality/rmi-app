import { connect } from 'react-redux';

// selectors
import { getCompany } from './companies-detail-sidebar-selectors';

import CompaniesDetailSidebar from './companies-detail-sidebar-component';

export default connect(
  state => ({ company: getCompany(state) }),
  null
)(CompaniesDetailSidebar);

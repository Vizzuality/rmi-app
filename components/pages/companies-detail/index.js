import { connect } from 'react-redux';
import CompaniesDetailPage from './companies-details-component';

// selectors
import { getUpdatedPaths } from './companies-details-selectors';

export default connect(
  state => ({ paths: getUpdatedPaths(state) }),
  {}
)(CompaniesDetailPage);


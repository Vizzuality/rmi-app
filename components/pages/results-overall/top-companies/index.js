import { connect } from 'react-redux';

// selectors
import { getTopCompanies } from './top-companies-selectors';

// component
import TopCompanies from './top-companies-component';

export default connect(
  state => ({ data: getTopCompanies(state) }),
  {}
)(TopCompanies);

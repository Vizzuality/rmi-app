import { connect } from 'react-redux';

import CompaniesList from './companies-list-component';

export default connect(
  state => ({
    companies: state.companies.list
  }),
  {}
)(CompaniesList);

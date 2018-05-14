
import { connect } from 'react-redux';

// selectors
import { getCompany } from './companies-detail-header-selectors';

import CompanyDetailHeader from './companies-detail-header-component';

export default connect(
  state => ({
    company: getCompany(state),
    currentLanguage: state.language.current
  }),
  {}
)(CompanyDetailHeader);

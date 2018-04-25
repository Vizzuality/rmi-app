
import { connect } from 'react-redux';
import CompanyDetailHeader from './companies-detail-header-component';

export default connect(
  state => ({
    company: state.companies.list,
    currentLanguage: state.language.current
  }),
  {}
)(CompanyDetailHeader);

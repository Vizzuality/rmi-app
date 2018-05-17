
import { connect } from 'react-redux';

// actions
import { togglePrintable } from 'modules/app/app-actions';

import CompanyDetailHeader from './mine-sites-detail-header-component';

export default connect(
  state => ({
    mineSite: state.mineSites.list[0],
    currentLanguage: state.language.current
  }),
  { togglePrintable }
)(CompanyDetailHeader);

import { connect } from 'react-redux';

// actions
import { togglePrintable } from 'modules/app/app-actions';

// component
import MineSiteDetail from './mine-sites-detail-component';

export default connect(
  state => ({
    mineSite: state.mineSites.list[0] || {},
    printable: state.app.printable
  }),
  { togglePrintable }
)(MineSiteDetail);

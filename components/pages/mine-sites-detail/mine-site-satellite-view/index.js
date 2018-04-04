import { connect } from 'react-redux';

// component
import MineSiteSatelliteView from './mine-site-satellite-view-component';

export default connect(
  state => ({ mineSite: state.mineSites.list[0] }),
  {}
)(MineSiteSatelliteView);

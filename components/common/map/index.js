import { connect } from 'react-redux';

import Map from './map-component';

export default connect(
  state => ({ responsive: state.responsive }),
  null
)(Map);

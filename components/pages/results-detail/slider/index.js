import { connect } from 'react-redux';

// selectors
import { parseScores } from '../measurement-charts/measurement-charts-selectors';
// components
import Slider from './slider-component';

export default connect(
  state => ({ measurements: parseScores(state) }),
  {}
)(Slider);

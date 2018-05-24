import { connect } from 'react-redux';

// selectors
import { getOverallMeasurementsScores } from '../companies-detail-overall-measurements/companies-detail-overall-measurements-selectors';
// components
import Slider from './slider-component';

export default connect(
  state => ({ data: getOverallMeasurementsScores(state) }),
  {}
)(Slider);

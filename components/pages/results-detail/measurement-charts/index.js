import { connect } from 'react-redux';

// selectors
import { parseScores } from './measurement-charts-selectors';
// components
import OverallChart from './measurement-charts-component';

export default connect(
  state => ({ measurements: parseScores(state) }),
  {}
)(OverallChart);

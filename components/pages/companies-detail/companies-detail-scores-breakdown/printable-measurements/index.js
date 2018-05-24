import { connect } from 'react-redux';

// selectors
import { getOverallMeasurementsScores } from './companies-detail-overall-measurements-selectors';

// component
import CompaniesDetailOverallMeasurements from './companies-detail-overall-measurements-component';

export default connect(
  state => ({
    data: getOverallMeasurementsScores(state),
    printable: state.app.printable
  }),
  null
)(CompaniesDetailOverallMeasurements);

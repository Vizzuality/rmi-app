import { connect } from 'react-redux';

// selecotors
import { parseIndicators } from './accordion-selectors';

// component
import ResultsDetailAccordion from './accordion-component';

export default connect(
  state => ({
    data: parseIndicators(state),
    responsive: state.responsive
  }),
  null
)(ResultsDetailAccordion);

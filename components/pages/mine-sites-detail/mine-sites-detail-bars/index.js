import { connect } from 'react-redux';

// selectors
import { getOverallScore, getScores } from './mine-sites-detail-bars-selectors';

// component
import MineSitesDetailBars from './mine-sites-detail-bars-component';

export default connect(
  state => ({
    overallScore: getOverallScore(state),
    data: getScores(state)
  }),
  {}
)(MineSitesDetailBars);


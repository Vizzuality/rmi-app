import { connect } from 'react-redux';

import * as actions from './scoring-framework-actions';
import * as reducers from './scoring-framework-reducers';
import initialState from './scoring-framework-initial-state';

import ScoringFrameworkPage from './scoring-framework-component';

export { actions, reducers, initialState };

export default connect(
  state => ({
    data: state.scoringFrameworkPage.data,
    loading: state.scoringFrameworkPage.loading
  }),
  { ...actions }
)(ScoringFrameworkPage);

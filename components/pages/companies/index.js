import { connect } from 'react-redux';

import * as actions from './companies-actions';
import * as reducers from './companies-reducers';
import initialState from './companies-initial-state';

import Companies from './companies-component';

// selectors
import { getUpdatedPaths, getMarkers } from './companies-selectors';

export { actions, reducers, initialState };

export default connect(
  state => ({
    countries: state.countries.list,
    paths: getUpdatedPaths(state),
    mineSites: getMarkers(state)
  }),
  { ...actions }
)(Companies);

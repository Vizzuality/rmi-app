import { connect } from 'react-redux';

import * as actions from './mine-sites-actions';
import * as reducers from './mine-sites-reducers';
import initialState from './mine-sites-initial-state';

import MineSites from './mine-sites-component';

// selectors
import { getUpdatedPaths } from './mine-sites-selectors';

export { actions, reducers, initialState };

export default connect(
  state => ({
    countries: state.countries.list,
    paths: getUpdatedPaths(state)
  }),
  { ...actions }
)(MineSites);

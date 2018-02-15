import { connect } from 'react-redux';

import * as actions from './companies-actions';
import * as reducers from './companies-reducers';
import initialState from './companies-initial-state';

import Companies from './companies-component';

export { actions, reducers, initialState };

export default connect(
  state => ({
    countries: state.countries.list
  }),
  {
    ...actions
  }
)(Companies);

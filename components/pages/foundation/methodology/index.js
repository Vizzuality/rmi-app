import { connect } from 'react-redux';

import * as actions from './methodology-actions';
import * as reducers from './methodology-reducers';
import initialState from './methodology-initial-state';

import MethodologyPage from './methodology-component';

export { actions, reducers, initialState };

export default connect(
  state => ({
    data: state.methodologyPage.data,
    loading: state.methodologyPage.loading
  }),
  { ...actions }
)(MethodologyPage);

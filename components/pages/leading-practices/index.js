// redux
import { connect } from 'react-redux';

import * as actions from './leading-practices-actions';
import * as reducers from './leading-practices-reducers';
import initialState from './leading-practices-initial-state';
import LeadingPracticesPage from './leading-practices-component';

export { actions, reducers, initialState };

export default connect(
  state => state,
  actions
)(LeadingPracticesPage);


// redux
import { connect } from 'react-redux';

import * as actions from './foundation-homepage-actions';
import * as reducers from './foundation-homepage-reducers';
import initialState from './foundation-homepage-initial-state';
import FoundationHomepage from './foundation-homepage-component';

export { actions, reducers, initialState };

export default connect(
  state => ({
    content: state.foundationHomepage.content
  }),
  actions
)(FoundationHomepage);

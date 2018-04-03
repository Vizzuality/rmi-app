
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// actions
import { toggleModal } from 'modules/app/app-actions';

// utils
import isEqual from 'lodash/isEqual';

import * as actions from './leading-practices-actions';
import * as reducers from './leading-practices-reducers';
import initialState from './leading-practices-initial-state';
import LeadingPracticesPage from './leading-practices-component';

// selectors
import { parseTopics } from './leading-practices-selectors';

export { actions, reducers, initialState };

class LeadingPracticesPageContainer extends PureComponent {
  static propTypes = {
    filters: PropTypes.object.isRequired,
    getLeadingPractices: PropTypes.func.isRequired
  }

  componentWillReceiveProps(nextProps) {
    const filtersChanged = !isEqual(this.props.filters, nextProps.filters);

    if (filtersChanged) {
      this.props.getLeadingPractices({ include: ['companies'].join(',') });
    }
  }

  render() {
    return (
      <LeadingPracticesPage
        {...this.props}
      />
    );
  }
}

export default connect(
  state => ({
    modalOpen: state.app.modal.open,
    filters: state.leadingPracticesPage.leadingPractices.filters,
    topics: parseTopics(state)
  }),
  { ...actions, toggleModal }
)(LeadingPracticesPageContainer);

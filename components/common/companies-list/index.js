import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';

import { getCompanies } from 'modules/companies/companies-actions';

// component
import CompaniesList from './companies-list-component';

// selectors
import { parseCompanies } from './companies-list-selectors';

class CompaniesListContainer extends PureComponent {
  static propTypes = {
    filters: PropTypes.object.isRequired,
    getCompanies: PropTypes.func.isRequired
  }

  componentWillReceiveProps(nextProps) {
    const { filters } = this.props;
    const { filters: nextFilters } = nextProps;

    const filtersChanged = !isEqual(filters, nextFilters);

    if (filtersChanged) {
      this.props.getCompanies({ include: ['country', 'mine-sites', 'mine-sites.country', 'mine-sites.commodities'].join(',') });
    }
  }

  render() {
    return (<CompaniesList {...this.props} />);
  }
}

export default connect(
  state => ({
    companies: parseCompanies(state),
    filters: state.companiesPage.filters,
    loading: state.companies.loading
  }),
  { getCompanies }
)(CompaniesListContainer);

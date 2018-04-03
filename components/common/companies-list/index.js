import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';

import { getCompanies } from 'modules/companies/companies-actions';

// component
import CompaniesList from './companies-list-component';

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
      this.props.getCompanies({ include: ['country', 'secondary-country', 'mine-sites', 'mine-sites.country', 'mine-sites.commodities'].join(',') });
    }
  }

  render() {
    return (<CompaniesList {...this.props} />);
  }
}

export default connect(
  state => ({
    companies: state.companies.list,
    filters: state.companiesPage.filters,
    loading: state.companies.loading
  }),
  { getCompanies }
)(CompaniesListContainer);

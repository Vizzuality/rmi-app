import { connect } from 'react-redux';

import * as actions from './companies-filters-actions';
import * as reducers from './companies-filters-reducers';
import initialState from './companies-filters-initial-state';

// selectors
import { parseCountries, parseCommodities } from './companies-filters-selectors';

// actions
import { setFilters, resetFilters } from '../companies-actions';

// component
import CompaniesFilters from './companies-filters-component';

export { actions, reducers, initialState };

export default connect(
  state => ({
    countries: parseCountries(state),
    commodities: parseCommodities(state),
    filters: state.companiesPage.filters
  }),
  {
    setFilters,
    resetFilters
  }
)(CompaniesFilters);

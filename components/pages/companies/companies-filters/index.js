import { connect } from 'react-redux';

// actions
import { setFilters } from 'components/pages/companies/companies-actions';

// selectors
import { parseCountries, parseCommodities } from './companies-filters-selectors';

import CompaniesFilters from './companies-filters-component';

export default connect(
  state => ({
    countries: parseCountries(state),
    commodities: parseCommodities(state)
  }),
  {
    setFilters
  }
)(CompaniesFilters);

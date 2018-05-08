import { connect } from 'react-redux';

// actions
import { setSearch, setPaginationPage } from 'modules/subsidiaries/subsidiaries-actions';

// component
import SubsidiariesFilters from './subsidiaries-filters-component';

export default connect(
  state => ({}),
  {
    setSearch,
    setPaginationPage
  }
)(SubsidiariesFilters);

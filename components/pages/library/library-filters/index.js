import { connect } from 'react-redux';

// actions
import { setSearch, setFilters, setPaginationPage, setPaginationLimit, resetPagination } from 'modules/documents/documents-actions';

// selectors
import { parseCompanies } from './library-filters-selectors';

// component
import LibraryFilters from './library-filters-component';

export default connect(
  state => ({ companies: parseCompanies(state) }),
  {
    setSearch,
    setFilters,
    setPaginationPage,
    setPaginationLimit,
    resetPagination
  }
)(LibraryFilters);

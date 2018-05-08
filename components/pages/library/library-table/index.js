import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';

// actions
import { setPaginationPage, setPaginationLimit, resetPagination, getDocuments, resetSearch } from 'modules/documents/documents-actions';

// selectors
import { parseDocuments } from './library-table-selectors';

// component
import LibraryTable from './library-table-component';

class LibrayTableContainer extends PureComponent {
  static propTypes = {
    search: PropTypes.string.isRequired,
    pagination: PropTypes.object.isRequired,
    filters: PropTypes.object.isRequired,
    getDocuments: PropTypes.func.isRequired,
    resetSearch: PropTypes.func.isRequired
  }

  componentWillReceiveProps(nextProps) {
    const { search, pagination, filters } = this.props;
    const {
      search: nextSearch,
      pagination: nextPagination,
      filters: nextFilters
    } = nextProps;

    const searchChanged = search !== nextSearch;
    const paginationChanged = !isEqual(pagination, nextPagination);
    const filtersChanged = !isEqual(filters, nextFilters);

    if (searchChanged || paginationChanged || filtersChanged) {
      this.props.getDocuments({
        include: ['company', 'mine-sites'].join(','),
        sort: 'name'
      });
    }
  }

  render() {
    return (
      <LibraryTable {...this.props} />
    );
  }
}

export default connect(
  state => ({
    data: parseDocuments(state),
    search: state.documents.search,
    pagination: state.documents.pagination,
    loading: state.documents.loading,
    filters: state.documents.filters
  }),
  {
    getDocuments,
    setPaginationPage,
    setPaginationLimit,
    resetPagination,
    resetSearch
  }
)(LibrayTableContainer);

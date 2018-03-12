import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';

// actions
import {
  getDocumentMineSites,
  setPaginationPage,
  setPaginationLimit,
  resetPagination,
  setSearch,
  resetSearch
} from 'modules/document-mine-sites/document-mine-sites-actions';

// selectors
import { parseAssessments } from './mine-sites-detail-assessments-table-selectors';

// component
import MineSitesDetailAssessmentTable from './mine-sites-detail-assessments-table-component';

class MineSitesDetailAssessmentTableContainer extends PureComponent {
  static propTypes = {
    mineSite: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    pagination: PropTypes.object.isRequired,
    search: PropTypes.string.isRequired,
    getDocumentMineSites: PropTypes.func.isRequired,
    resetPagination: PropTypes.func.isRequired,
    resetSearch: PropTypes.func.isRequired
  }

  componentWillReceiveProps(nextProps) {
    const { pagination, search, mineSite } = this.props;
    const {
      pagination: nextPagination,
      search: nextSearch
    } = nextProps;
    const { id } = mineSite;

    const paginationChanged = !isEqual(pagination, nextPagination);
    const searchChanged = search !== nextSearch;

    if (paginationChanged || searchChanged) this.props.getDocumentMineSites({
      'filter[mine-site]': id,
      include: ['indicators', 'document'].join(',')
    });
  }

  componentWillUnmount() {
    this.props.resetSearch();
    this.props.resetPagination();
  }

  render() {
    return (
      <MineSitesDetailAssessmentTable
        {...this.props}
      />
    );
  }
}

export default connect(
  state => ({
    mineSite: state.mineSites.list[0],
    data: parseAssessments(state),
    pagination: state.documentMineSites.pagination,
    search: state.documentMineSites.search,
    loading: state.documentMineSites.loading
  }),
  {
    getDocumentMineSites,
    setPaginationPage,
    setPaginationLimit,
    resetPagination,
    setSearch,
    resetSearch
  }
)(MineSitesDetailAssessmentTableContainer);

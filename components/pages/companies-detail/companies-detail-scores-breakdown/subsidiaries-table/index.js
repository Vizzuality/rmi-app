import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';

// Actions
import {
  getSubsidiaries,
  setPaginationPage,
  setPaginationLimit,
  resetPagination,
  setSearch,
  resetSearch
} from 'modules/subsidiaries/subsidiaries-actions';

// Components
import SubsidiariesTable from './subsidiaries-table-component';

class SubsidiariesTableContainer extends PureComponent {
  componentWillReceiveProps(nextProps) {
    const { pagination, search, company } = this.props;

    const {
      pagination: nextPagination,
      search: nextSearch
    } = nextProps;
    const { id } = company;

    const paginationChanged = !isEqual(pagination, nextPagination);
    const searchChanged = search !== nextSearch;

    if (paginationChanged || searchChanged) {
      this.props.getSubsidiaries({ 'filter[company]': id });
    }
  }

  componentWillUnmount() {
    this.props.resetSearch();
    this.props.resetPagination();
  }

  render() {
    return (
      <SubsidiariesTable
        {...this.props}
      />
    );
  }
}

export default connect(
  state => ({
    subsidiaries: state.subsidiaries.list,
    subsidiariesDate: (state.companies.list[0] || {})['subsidiaries-date'],
    pagination: state.subsidiaries.pagination,
    company: state.companies.list[0] || {}
  }),
  {
    getSubsidiaries,
    setPaginationPage,
    setPaginationLimit,
    resetPagination,
    setSearch,
    resetSearch
  }
)(SubsidiariesTableContainer);

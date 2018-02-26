import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Table from 'components/common/table';
import Search from 'components/common/search';
import Paginator from 'components/common/paginator';
import Spinner from 'components/common/spinner';

// constants
import { ASSESSMENTS_TABLE_COLUMNS } from './mine-sites-detail-assessments-table-constants';

// styles
import styles from './mine-sites-detail-assessments-table-styles.scss';

class MineSitesDetailAssessmentsTable extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    pagination: PropTypes.object.isRequired,
    setPaginationPage: PropTypes.func.isRequired,
    setSearch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  }

  handlePagination = nextPage => this.props.setPaginationPage(nextPage);

  handleSearch = value => this.props.setSearch(value);

  render() {
    const { data, pagination, loading } = this.props;
    const { size, page, limit } = pagination;

    return (
      <div className="c-mine-sites-detail-assessments-table">
        <style jsx>{styles}</style>
        <h3 className="title">Mine Site Assessments</h3>
        <h4 className="subtitle">Source documents used in scoring</h4>
        <div className="search-container">
          <Search
            onSearch={this.handleSearch}
          />
        </div>
        {loading && <Spinner />}
        <Table
          columns={ASSESSMENTS_TABLE_COLUMNS}
          rows={data}
        />
        <div className="paginator-container">
          <Paginator
            className="-theme-2"
            options={{
              size,
              page,
              limit
            }}
            onChange={this.handlePagination}
          />
        </div>
      </div>
    );
  }
}

export default MineSitesDetailAssessmentsTable;

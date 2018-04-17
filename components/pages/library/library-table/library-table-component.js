import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Table from 'components/common/table';
import Select from 'components/common/select';
import Paginator from 'components/common/paginator';
import Spinner from 'components/common/spinner';

// constants
import { DOCUMENTS_TABLE_COLUMNS, TABLE_SIZE_VALUES } from './library-table-constants';

// styles
import styles from './library-table-styles.scss';

class LibraryTable extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    pagination: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    setPaginationPage: PropTypes.func.isRequired,
    setPaginationLimit: PropTypes.func.isRequired,
    resetPagination: PropTypes.func.isRequired
  }

  componentWillUnmount() {
    this.props.resetPagination();
  }

  handlePagination = nextPage => this.props.setPaginationPage(nextPage);

  handleSize = ({ value }) => {
    if (value == null) {
      this.props.resetPagination();
    } else {
      this.props.setPaginationLimit(value);
      this.props.setPaginationPage(1);
    }
  }

  render() {
    const { data, pagination, loading } = this.props;
    const { size, page, limit } = pagination;

    return (
      <div className="c-library-table">
        <style jsx>{styles}</style>
        <div className="table-container">
          {loading && <Spinner />}
          <Table
            columns={DOCUMENTS_TABLE_COLUMNS}
            rows={data}
          />
        </div>

        <div className="pagination-filter">
          <Select
            placeholder={limit}
            options={TABLE_SIZE_VALUES}
            onChange={this.handleSize}
          />
        </div>

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

export default LibraryTable;

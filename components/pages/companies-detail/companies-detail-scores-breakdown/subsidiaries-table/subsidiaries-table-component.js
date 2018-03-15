import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Paginator from 'components/common/paginator';

// components
import Table from 'components/common/table';

class SubsidiariesTable extends PureComponent {
  handlePagination = nextPage => this.props.setPaginationPage(nextPage);
  handleSearch = value => this.props.setSearch(value);

  render() {
    const {
      subsidiaries,
      subsidiariesDate,
      pagination
    } = this.props;

    const { size, limit, page } = pagination;

    return (
      <div className="subsidiaries-table">
        <Table
          columns={[
            {
              property: 'name',
              header: { label: `As of: ${subsidiariesDate || 'unknown'}` }
            },
            {
              property: 'percent-controlled-ownership',
              header: { label: 'Shares (%)' }
            }
          ]}
          rows={subsidiaries}
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

export default SubsidiariesTable;

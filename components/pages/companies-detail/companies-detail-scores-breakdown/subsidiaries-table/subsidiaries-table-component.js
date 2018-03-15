import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Table from 'components/common/table';
import Paginator from 'components/common/paginator';
import Search from 'components/common/search';

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
      <div className="c-subsidiaries-table">
        <h3 className="title">Selection of Subsidaries</h3>
        <div className="filters-container">
          <Search
            onSearch={this.handleSearch}
          />
        </div>
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

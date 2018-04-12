import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

// components
import Table from 'components/common/table';
import Paginator from 'components/common/paginator';
import Search from 'components/common/search';
import Unknowndata from '../unknown-data'


// styles
import styles from './subsidiaries-table-styles.scss';

class SubsidiariesTable extends PureComponent {

  static renderUnknown = () => (
    <div className="unknown-container">
      <style jsx>{styles}</style>
      <span className="as-of">As of: Unknown</span>
      <span className="unknow-value">Unknown</span>
    </div>)

  handlePagination = nextPage => this.props.setPaginationPage(nextPage);

  handleSearch = value => {
    this.props.setPaginationPage(1);
    this.props.setSearch(value);
  }

  render() {
    const {
      subsidiaries,
      subsidiariesDate,
      pagination
    } = this.props;
    const { size, limit, page } = pagination;

    return (
      <div className="c-subsidiaries-table">
        <style jsx>{styles}</style>
        <h3 className="title">Known Subsidiaries</h3>
        <div className="filters-container">
          <Search
            onSearch={this.handleSearch}
            placeholder="Search for a subsidiary..."
          />
        </div>
        {subsidiaries.length ?
          <Fragment>
            <Table
              columns={[
                {
                  property: 'name',
                  header: { label: `As of: ${subsidiariesDate || 'unknown'}` }
                },
                {
                  property: 'country',
                  header: { label: 'Country' },
                  cell: {
                    formatters: [
                      (country, { rowData }) => (rowData.country ? rowData.country.name : 'unknown')
                    ]
                  },
                  props: {
                      style: {
                      textAlign: 'right',
                      minWidth: 90
                    }
                  }
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
          </Fragment> : <Unknowndata />}
      </div>
    );
  }
}

export default SubsidiariesTable;

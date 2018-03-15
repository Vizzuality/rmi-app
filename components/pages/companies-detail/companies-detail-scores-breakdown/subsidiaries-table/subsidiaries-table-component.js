import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Paginator from 'components/common/paginator';

// components
import Table from 'components/common/table';
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
        <style jsx>{styles}</style>
        {subsidiaries.length ?
          <Fragment>
            <Table
              columns={[
                {
                  property: 'name',
                  header: { label: `As of: ${subsidiariesDate || 'unknown'}` }
                },
                {
                  property: 'percent-controlled-ownership',
                  header: { label: 'Shares (%)' },
                  props: { style: {
                    textAlign: 'right',
                    minWidth: 90
                  } }
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

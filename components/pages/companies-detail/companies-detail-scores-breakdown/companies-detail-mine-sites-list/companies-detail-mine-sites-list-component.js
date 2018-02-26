import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Table from 'components/common/table';

// constants
import {
  ALLMINE_SITE_TABLE_COLUMNS,
  CLOSED_MINE_SITES_TABLE_COLUMNS,
  ASSETS_SOLD_AFTER_MAY_TABLE_COLUMNS
} from './companies-detail-mine-sites-list-constants';

// styles
import styles from './companies-detail-mine-sites-list-styles.scss';

class CompaniesDetailMineSitesList extends PureComponent {
  static propTypes = {
    allMineSites: PropTypes.array,
    closedMineSites: PropTypes.array,
    assetsSoldAfterMay: PropTypes.array
  }

  static defaultProps = {
    allMineSites: [],
    closedMineSites: [],
    assetsSoldAfterMay: []
  }

  render() {
    const { allMineSites, closedMineSites, assetsSoldAfterMay } = this.props;

    return (
      <div className="c-companies-detail-mine-sites-list">
        <style jsx>{styles}</style>
        {!!allMineSites.length &&
          <div className="table all-mine-sites-table">
            <h3 className="table-title">List of all mine sites</h3>
            <Table
              columns={ALLMINE_SITE_TABLE_COLUMNS}
              rows={allMineSites}
              className="-theme-2"
            />
          </div>}
        {!!closedMineSites.length &&
          <div className="table closed-mine-sites-table">
            <h3 className="table-title">
              Closed mine sites (controlled assets under care & maintenance,
              closure or post-closure management)
            </h3>
            <Table
              columns={CLOSED_MINE_SITES_TABLE_COLUMNS}
              rows={closedMineSites}
              className="-theme-2"
            />
          </div>}
        {!!assetsSoldAfterMay.length &&
          <div className="table assets-sold-after-may-table">
            <h3 className="table-title">Assets sold after May 2015</h3>
            <Table
              columns={ASSETS_SOLD_AFTER_MAY_TABLE_COLUMNS}
              rows={assetsSoldAfterMay}
              className="-theme-2"
            />
          </div>}
      </div>
    );
  }
}

export default CompaniesDetailMineSitesList;

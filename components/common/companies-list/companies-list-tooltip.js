import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'routes';

// components
import Table from 'components/common/table';

// constants
import { TOOLTIP_TABLE_COLUMNS } from './companies-list-constants';

// styles
import styles from './companies-list-styles.scss';

class CompaniesListTooltip extends PureComponent {
  static propTypes = {
    company: PropTypes.object.isRequired,
    mineSites: PropTypes.array.isRequired
  }

  render() {
    const { mineSites, company } = this.props;

    return (
      <div className="companies-list-tooltip">
        <style jsx>{styles}</style>
        <Table
          columns={TOOLTIP_TABLE_COLUMNS}
          rows={mineSites}
          className="-theme-2"
        />
        <Link
          route="companies"
          params={{ company: company.id }}
        >
          <a className="company-link">See company detail</a>
        </Link>
      </div>
    );
  }
}

export default CompaniesListTooltip;

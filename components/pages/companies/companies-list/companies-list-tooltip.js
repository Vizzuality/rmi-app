import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'routes';

// components
import { Provider, Header, Body } from 'reactabular-table';

// styles
import styles from './companies-list-styles.scss';

const columns = [
  {
    property: 'name',
    header: {
      label: 'Mine site:'
    },
    cell: {
      formatters: [
        (name, { rowData }) => (
          <Link
            route="mine-sites"
            params={{
              mineSite: rowData.id
            }}
          >
            <a>{name}</a>
          </Link>
        )
      ]
    }
  },
  {
    property: 'country',
    header: {
      label: 'Mine countries:'
    },
    cell: {
      formatters: [
        country => country ? country.name : '-'
      ]
    }
  },
  {
    property: 'name',
    header: {
      label: 'Commodities:'
    }
  }
];

class CompaniesListTooltip extends PureComponent {
  static propTypes = {
    mineSites: PropTypes.array.isRequired
  }

  render() {
    const { mineSites } = this.props;

    return (
      <div className="companies-list-tooltip">
        <style jsx>{styles}</style>
        <Provider
          columns={columns}
        >
          <Header />
          <Body rows={mineSites} rowKey="id" />
        </Provider>
      </div>
    );
  }
}

export default CompaniesListTooltip;

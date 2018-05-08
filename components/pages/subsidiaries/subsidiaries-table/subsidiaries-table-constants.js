import React from 'react';
import { Link } from 'routes';

export const SUBSIDIARIES_TABLE_COLUMNS = [
  {
    property: 'name',
    header: { label: 'Subsidiary' }
  },
  {
    property: 'country',
    header: { label: 'Country'}
  },
  {
    property: 'company',
    header: { label: 'Company' },
    cell: {
      formatters: [
        (name, { rowData }) => (
          <Link
            route="companies"
            params={{
              language: rowData.language,
              company: rowData.companyId
            }}
          >
            <a>{name}</a>
          </Link>
        )
      ]
    }
  }
];

export const TABLE_SIZE_VALUES = [
  {
    label: '5',
    value: 5
  },
  {
    label: '10',
    value: 10
  },
  {
    label: '15',
    value: 15
  },
  {
    label: '20',
    value: 20
  }
];

export default {
  SUBSIDIARIES_TABLE_COLUMNS,
  TABLE_SIZE_VALUES
};

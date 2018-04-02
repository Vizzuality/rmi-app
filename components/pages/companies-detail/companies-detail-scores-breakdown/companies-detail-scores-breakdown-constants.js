import React from 'react';
import { Link } from 'routes';

export const MINE_SITE_TABLE_COLUMNS = [
  {
    property: 'name',
    header: { label: 'Mine Site Name' },
    cell: {
      formatters: [
        (name, { rowData }) => (
          <Link
            route="mine-sites"
            params={{ mineSite: rowData.id }}
          >
            <a>{name}</a>
          </Link>
        )
      ]
    },
    props: { style: { width: 150 } }
  },
  {
    property: 'localProcurment',
    header: { label: 'Local Procurement (score /6.00)' }
  },
  {
    property: 'localEmployment',
    header: { label: 'Local Employment (score /6.00)' }
  },
  {
    property: 'communityGrievance',
    header: { label: 'Community grievance mechanism (score /6.00)' }
  },
  {
    property: 'workersGrievance',
    header: { label: 'Workers grievance mechanism (score /6.00)' }
  },
  {
    property: 'waterQuality',
    header: { label: 'Water quality and quantity (score /6.00)' }
  },
  {
    property: 'biodiversity',
    header: { label: 'Biodiversity management (score /6.00)' }
  },
  {
    property: 'overall',
    header: { label: 'Mine site (score /6.00)' },
    props: {
      style: {
        backgroundColor: '#3b3a40',
        paddingRight: 15,
        color: '#fff',
        textAlign: 'right',
        width: 115
      }
    }
  }
];

export const INVESTMENT_DISPUTES_COLUMNS = [
  {
    property: 'date',
    header: { label: 'Case Date' }
  },
  {
    property: 'number',
    header: { label: 'Case number' }
  },
  {
    property: 'description',
    header: { label: 'Case description' }
  },
  {
    property: 'status',
    header: { label: 'Status' }
  }
];

export const TAX_JURISDICTIONS_COLUMNS = [
  {
    cell: {
      formatters: [
        (countryName, { rowData }) => (rowData.jurisdiction1 || {}).country && rowData.jurisdiction1.country.name
      ]
    }
  },
  {
    cell: {
      formatters: [
        (countryName, { rowData }) => (rowData.jurisdiction2 || {}).country && rowData.jurisdiction2.country.name
      ]
    }
  },
  {
    cell: {
      formatters: [
        (countryName, { rowData }) => (rowData.jurisdiction3 || {}).country && rowData.jurisdiction3.country.name
      ]
    }
  },
  {
    cell: {
      formatters: [
        (countryName, { rowData }) => (rowData.jurisdiction4 || {}).country && rowData.jurisdiction4.country.name
      ]
    }
  },
  {
    cell: {
      formatters: [
        (countryName, { rowData }) => (rowData.jurisdiction5 || {}).country && rowData.jurisdiction5.country.name
      ]
    }
  },
  {
    cell: {
      formatters: [
        (countryName, { rowData }) => (rowData.jurisdiction6 || {}).country && rowData.jurisdiction6.country.name
      ]
    }
  }
];

export default {
  MINE_SITE_TABLE_COLUMNS,
  INVESTMENT_DISPUTES_COLUMNS,
  TAX_JURISDICTIONS_COLUMNS
};

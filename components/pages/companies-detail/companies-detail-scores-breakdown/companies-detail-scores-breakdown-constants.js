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
    header: { label: 'Local Procurement (score /6.0)' }
  },
  {
    property: 'localEmployment',
    header: { label: 'Local Employment (score /6.0)' }
  },
  {
    property: 'communityGrievance',
    header: { label: 'Community grievance mechanism (score /6.0)' }
  },
  {
    property: 'workersGrievance',
    header: { label: 'Workers grievance mechanism (score /6.0)' }
  },
  {
    property: 'waterQuality',
    header: { label: 'Water quality and quantity (score /6.0)' }
  },
  {
    property: 'biodiversity',
    header: { label: 'Biodiversity management (score /6.0)' }
  },
  {
    property: 'overall',
    header: { label: 'Overall (score /6.0)' },
    props: {
      style: {
        backgroundColor: '#3b3a40',
        color: '#fff',
        textAlign: 'right'
      }
    }
  }
];

export const DEFAULT_LIST_HEADERS = [
  { id: 1, name: 'As of:' },
  { id: 2, name: 'Shares (%)' }
];

export const KNOWN_TAX_JURISDICTIONS_LIST_HEADERS = [
  { id: 1, name: 'Country Name' },
  { id: 2, name: 'Type of disclosure' }
];

export const INVESTMENT_DISPUTES_LIST_HEADERS = [
  { id: 1, name: 'Case number' },
  { id: 2, name: 'Case status' }
];

export default {
  MINE_SITE_TABLE_COLUMNS,
  DEFAULT_LIST_HEADERS,
  KNOWN_TAX_JURISDICTIONS_LIST_HEADERS
};

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
      ],
      props: { style: { color: '#000' } }
    },
    props: { style: { color: '#bf3132' } }
  },
  {
    property: 'localProcurment',
    header: { formatters: [() => (<span>Local Procurement <span style={{ display: 'block', whiteSpace: 'pre' }}>(score /6.00)</span></span>)] },
    props: { style: { color: '#bf3132' } },
    cell: { props: { style: { color: '#000' } } }
  },
  {
    property: 'localEmployment',
    header: { formatters: [() => (<span>Local Employment <span style={{ display: 'block', whiteSpace: 'pre' }}>(score /6.00)</span></span>)] },
    props: { style: { color: '#bf3132' } },
    cell: { props: { style: { color: '#000' } } }
  },
  {
    property: 'communityGrievance',
    header: {
      formatters: [() =>
        (<span>Community grievance mechanism <span style={{ display: 'block', whiteSpace: 'pre' }}>(score /6.00)</span></span>)]
    },
    props: { style: { color: '#bf3132' } },
    cell: { props: { style: { color: '#000' } } }
  },
  {
    property: 'workersGrievance',
    header: { formatters: [() => (<span>Workers grievance mechanism <span style={{ display: 'block', whiteSpace: 'pre' }}>(score /6.00)</span></span>)] },
    props: { style: { color: '#bf3132' } },
    cell: { props: { style: { color: '#000' } } }
  },
  {
    property: 'waterQuality',
    header: { formatters: [() => (<span>Water quality and quantity <span style={{ display: 'block', whiteSpace: 'pre' }}>(score /6.00)</span></span>)] },
    props: { style: { color: '#bf3132' } },
    cell: { props: { style: { color: '#000' } } }
  },
  {
    property: 'biodiversity',
    header: { formatters: [() => (<span>Biodiversity management <span style={{ display: 'block', whiteSpace: 'pre' }}>(score /6.00)</span></span>)] },
    props: { style: { color: '#bf3132' } },
    cell: { props: { style: { color: '#000' } } }
  },
  {
    property: 'overall',
    header: { formatters: [() => (<span>Mine site <span style={{ display: 'block', whiteSpace: 'pre' }}>(score /6.00)</span></span>)] },
    props: {
      style: {
        paddingRight: 15,
        backgroundColor: '#3b3a40',
        textAlign: 'right',
        color: '#fff'
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
        (countryName, { rowData }) =>
          (rowData.jurisdiction1 || {}).country && rowData.jurisdiction1.country.name
      ]
    }
  },
  {
    cell: {
      formatters: [
        (countryName, { rowData }) =>
          (rowData.jurisdiction2 || {}).country && rowData.jurisdiction2.country.name
      ]
    }
  },
  {
    cell: {
      formatters: [
        (countryName, { rowData }) =>
          (rowData.jurisdiction3 || {}).country && rowData.jurisdiction3.country.name
      ]
    }
  },
  {
    cell: {
      formatters: [
        (countryName, { rowData }) =>
          (rowData.jurisdiction4 || {}).country && rowData.jurisdiction4.country.name
      ]
    }
  },
  {
    cell: {
      formatters: [
        (countryName, { rowData }) =>
          (rowData.jurisdiction5 || {}).country && rowData.jurisdiction5.country.name
      ]
    }
  },
  {
    cell: {
      formatters: [
        (countryName, { rowData }) =>
          (rowData.jurisdiction6 || {}).country && rowData.jurisdiction6.country.name
      ]
    }
  }
];

export default {
  MINE_SITE_TABLE_COLUMNS,
  INVESTMENT_DISPUTES_COLUMNS,
  TAX_JURISDICTIONS_COLUMNS
};

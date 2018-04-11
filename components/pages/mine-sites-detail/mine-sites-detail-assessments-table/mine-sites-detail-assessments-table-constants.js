import React from 'react';
import Icon from 'components/common/icon';

export const ASSESSMENTS_TABLE_COLUMNS = [
  {
    property: 'title',
    header: { label: 'Source Document' }
  },
  {
    property: 'indicators',
    header: { label: 'Indicators' }
  },
  {
    property: 'downloadLink',
    header: { label: 'Select File' },
    cell: {
      formatters: [
        (downloadLink, { rowData }) => (downloadLink ?
          <a
            href={downloadLink}
            download={rowData.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="download-file" />
          </a> : '-')
      ]
    },
    props: {
      style: {
        textAlign: 'center',
        minWidth: 100
      }
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
  },
];

export default { ASSESSMENTS_TABLE_COLUMNS, TABLE_SIZE_VALUES };

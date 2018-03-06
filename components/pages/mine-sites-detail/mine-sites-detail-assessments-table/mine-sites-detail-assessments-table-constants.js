import React from 'react';
import Icon from 'components/common/icon';

export const ASSESSMENTS_TABLE_COLUMNS = [
  {
    property: 'title',
    header: { label: 'Source Document' }
  },
  {
    property: 'title',
    header: { label: 'Indicators' }
  },
  {
    property: 'url',
    header: { label: 'URL Address' },
    cell: {
      formatters: [
        ({ original, title }) => original ?
          <a href={original} target="_blank" rel="noreferrer noopener">{title}</a> : '-'
      ]
    }
  },
  {
    property: 'downloadLink',
    header: { label: 'Select File' },
    cell: {
      formatters: [
        downloadLink => <a href={downloadLink}><Icon name="download" /></a>
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
  },
];

export default { ASSESSMENTS_TABLE_COLUMNS, TABLE_SIZE_VALUES };

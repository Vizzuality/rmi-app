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

export default { ASSESSMENTS_TABLE_COLUMNS };

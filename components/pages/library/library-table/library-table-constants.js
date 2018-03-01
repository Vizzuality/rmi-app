import React from 'react';

// components
import Icon from 'components/common/icon';

export const DOCUMENTS_TABLE_COLUMNS = [
  {
    property: 'company',
    header: { label: 'Company' }
  },
  {
    property: 'name',
    header: { label: 'Source Document' }
  },
  {
    property: 'url',
    header: { label: 'URL Address' },
    cell: {
      formatters: [
        url => (url ? <a href={url} rel="noopener noreferrer">{url}</a> : '-')
      ]
    }
  },
  {
    property: 'downloadLink',
    header: { label: 'Download' },
    cell: {
      formatters: [
        downloadLink => (downloadLink ? <a href={downloadLink}><Icon name="download" /></a> : '-')
      ]
    },
    props: { style: { textAlign: 'center' } }
  }
];

export default { DOCUMENTS_TABLE_COLUMNS };

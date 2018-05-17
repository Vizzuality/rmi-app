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
    property: 'downloadLink',
    header: { label: 'Download' },
    cell: {
      formatters: [
        (downloadLink, { rowData }) =>
          (downloadLink ? <a href={downloadLink} download={rowData.name}><Icon name="download-file" /></a> : '-')
      ]
    },
    props: { style: { textAlign: 'center' } }
  }
];

export const TABLE_SIZE_VALUES = [
  {
    label: '10',
    value: 10
  },
  {
    label: '20',
    value: 20
  },
  {
    label: '50',
    value: 50
  },
  {
    label: '100',
    value: 100
  }
];

export default {
  DOCUMENTS_TABLE_COLUMNS,
  TABLE_SIZE_VALUES
};

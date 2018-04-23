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
  DOCUMENTS_TABLE_COLUMNS,
  TABLE_SIZE_VALUES
};

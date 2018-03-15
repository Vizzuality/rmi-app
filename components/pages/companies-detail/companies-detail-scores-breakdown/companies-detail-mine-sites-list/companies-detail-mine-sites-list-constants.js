export const ALLMINE_SITE_TABLE_COLUMNS = [
  {
    property: 'name',
    header: { label: 'Mine Site Name' }
  },
  {
    property: 'aliases',
    header: { label: 'Aliases' }
  },
  {
    property: 'country',
    header: { label: 'Country' },
    cell: {
      formatters: [
        country => (country || {}).name
      ]
    }
  },
  {
    property: 'company-share',
    header: { label: 'Company\'s share (%)' }
  },
  {
    property: 'commodities',
    header: { label: 'Products' },
    cell: {
      formatters: [
        commodities => commodities.map(commodity => commodity.name).join(', ')
      ]
    }
  },
  {
    property: 'mining-type',
    header: { label: 'Mining types' }
  }
];

export const CLOSED_MINE_SITES_TABLE_COLUMNS = [
  {
    property: 'name',
    header: { label: 'Mine Site Name' }
  },
  {
    property: 'aliases',
    header: { label: 'Aliases' }
  },
  {
    property: 'country',
    header: { label: 'Country' },
    cell: {
      formatters: [
        country => (country || {}).name
      ]
    }
  },
  {
    property: 'company-share',
    header: { label: 'Company\'s share (%)' }
  },
  {
    property: 'commodities',
    header: { label: 'Products' },
    cell: {
      formatters: [
        commodities => commodities.map(commodity => commodity.name).join(', ')
      ]
    }
  },
  {
    property: 'mining-type',
    header: { label: 'Mining types' }
  },
  {
    property: 'year-of-closure',
    header: { label: 'Year of closure' }
  }
];

export const ASSETS_SOLD_AFTER_MAY_TABLE_COLUMNS = [
  {
    property: 'name',
    header: { label: 'Mine Site Name' }
  },
  {
    property: 'aliases',
    header: { label: 'Aliases' }
  },
  {
    property: 'country',
    header: { label: 'Country' },
    cell: {
      formatters: [
        country => (country || {}).name
      ]
    }
  },
  {
    property: 'commodities',
    header: { label: 'Products' },
    cell: {
      formatters: [
        commodities => commodities.map(commodity => commodity.name).join(', ')
      ]
    }
  },
  {
    property: 'mining-type',
    header: { label: 'Mining types' }
  }
];

export default {
  ALLMINE_SITE_TABLE_COLUMNS,
  CLOSED_MINE_SITES_TABLE_COLUMNS,
  ASSETS_SOLD_AFTER_MAY_TABLE_COLUMNS
};

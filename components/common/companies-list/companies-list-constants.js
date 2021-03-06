import { Link } from 'routes';

export const COMPANIES_PER_ROW = 3;

export const TOOLTIP_TABLE_COLUMNS = [
  {
    property: 'name',
    header: {
      label: 'Mine site',
      props: {
        style: {
          backgroundColor: '#000',
          color: '#fff',
          fontWeight: 500,
          paddingLeft: 15
        }
      }
    },
    cell: {
      formatters: [
        (name, { rowData }) => (
          <Link
            route="mine-sites"
            params={{
              language: rowData.language,
              mineSite: rowData.id
            }}
          >
            <a>{name}</a>
          </Link>
        )
      ],
      props: {
        style: {
          paddingLeft: 15,
          color: '#bf3132'
        }
      }
    }
  },
  {
    property: 'country',
    header: {
      label: 'Mine countries',
      props: {
        style: {
          backgroundColor: '#000',
          color: '#fff',
          fontWeight: 500
        }
      }
    },
    cell: { formatters: [country => (country || {}).name] }
  },
  {
    property: 'commodities',
    header: {
      label: 'Commodities',
      props: {
        style: {
          backgroundColor: '#000',
          color: '#fff',
          fontWeight: 500,
          paddingRight: 15
        }
      }
    },
    cell: {
      formatters: [commodities => commodities.map(commodity => commodity.name).join(', ')],
      props: { style: { paddingRight: 15 } }
    }
  }
];

export default {
  COMPANIES_PER_ROW,
  TOOLTIP_TABLE_COLUMNS
};

import { valueParser, fixedValue } from 'utils/value-parser'

export const COMPARISON_COUNTRY_KEYS = {
  'world-bank-country-classification': {
    title: () => 'World Bank economy classification',
    value: ({ 'world-bank-country-classification-date': year, 'world-bank-country-classification': value }) => `${valueParser(value)} ${year ? `(${year})` : ''}`,
    group: 'group-1'
  },
  'ihdi-score': {
    title: () => 'IHDI (Inequality-adjusted Human Development Index)',
    value: ({ 'ihdi-date': year, 'ihdi-score': value }) => `${valueParser(value)} ${year ? `(${year})` : ''}`,
    group: 'group-1'
  },
  'world-bank-fragile-situations': {
    title: () => 'World Bank list of fragile situations',
    value: ({ 'world-bank-fragile-situations-date': year, 'world-bank-fragile-situations': value }) => `${valueParser(value)} ${year ? `(${year})` : ''}`,
    group: 'group-1'
  },
  'global-peace-index': {
    title: () => 'Global Peace index',
    value: ({ 'global-peace-index-date': year, 'global-peace-index': value }) => `${valueParser(value)} ${year ? `(${year})` : ''}`,
    group: 'group-1'
  },
  'global-hunger-index': {
    title: () => 'Global Hunger index',
    value: ({ 'global-hunger-index-date': year, 'global-hunger-index': value }) => `${valueParser(value)} ${year ? `(${year})` : ''}`,
    group: 'group-1'
  },
  'gdp-per-capita-value': {
    title: () => 'GDP per capita ($)',
    value: ({ 'gdp-date': year, 'gdp-per-capita-value': value }) => `${valueParser(value, true)} ${year ? `(${year})` : ''}`,
    group: 'group-2'
  },
  'gdp-growth-annual-percent': {
    title: () => 'GDP annual growth (%)',
    value: ({ 'gdp-growth-date': year, 'gdp-growth-annual-percent': value }) => `${fixedValue(valueParser(value))} ${year ? `(${year})` : ''}`,
    group: 'group-2'
  },
  'tax-revenue': {
    title: () => 'Tax revenue (% of GDP)',
    value: ({ 'tax-revenue-date': year, 'tax-revenue': value }) => `${fixedValue(valueParser(value))} ${year ? `(${year})` : ''}`,
    group: 'group-2'
  },
  'mining-percent-of-gdp': {
    title: () => 'Mining sector (% of GDP)',
    value: ({ 'mining-percent-of-gdp-date': year, 'mining-percent-of-gdp': value }) => `${fixedValue(valueParser(value))} ${year ? `(${year})` : ''}`,
    group: 'group-2'
  },
  'ores-and-metals-percent-of-exports': {
    title: () => 'Ores and metals percent of export',
    value: ({ 'ores-and-metals-percent-of-exports-date': year, 'ores-and-metals-percent-of-exports': value }) => `${fixedValue(valueParser(value))} ${year ? `(${year})` : ''}`,
    group: 'group-2'
  },
  'ilo-169-status': {
    title: () => 'ILO Convention 169 (Indigenous and Tribal Peoples)',
    value: ({ 'ilo-169-status': value }) => valueParser(value),
    group: 'group-3'
  },
  'ilo-176-status': {
    title: () => 'ILO Convention 176 (Safety and Health in Mines)',
    value: ({ 'ilo-176-status': value }) => valueParser(value),
    group: 'group-3'
  },
  'eiti-status': {
    title: () => 'EITI (Extractive Industry Transparency Initiative)',
    value: ({ 'eiti-date': year, 'eiti-status': value }) => `${valueParser(value)} ${year ? `(${year})` : ''}`,
    group: 'group-3'
  },
  'voluntary-principles-status': {
    title: () => 'Voluntary Principles on Security and Human Rights',
    value: ({ 'voluntary-principles-status': value }) => valueParser(value),
    group: 'group-3'
  },
  'rgi-rank': {
    title: () => 'NRGI Resource Governance Index',
    value: ({ 'rgi-rank-date': year, 'rgi-rank': value }) => `${valueParser(value)} ${year ? `(${year})` : ''}`,
    group: 'group-4'
  },
  'world-bank-control-of-corruption': {
    title: () => 'World Bank WGI Control of Corruption',
    value: ({ 'world-bank-control-of-corruption-date': year, 'world-bank-control-of-corruption': value }) => `${valueParser(value)} ${year ? `(${year})` : ''}`,
    group: 'group-4'
  },
  'corruption-perceptions-index': {
    title: () => 'Corruption Perceptions Index',
    value: ({ 'corruption-perceptions-index-date': year, 'corruption-perceptions-index': value }) => `${valueParser(value)} ${year ? `(${year})` : ''}`,
    group: 'group-4'
  },
  'wef-global-competitiveness-index': {
    title: () => 'WEF Global Competitiveness Index',
    value: ({ 'wef-global-competitiveness-index-date': year, 'wef-global-competitiveness-index': value }) => `${valueParser(value)} ${year ? `(${year})` : ''}`,
    group: 'group-4'
  },
  'country-attractiveness-index': {
    title: () => 'Country Attractiveness Index',
    value: ({ 'country-attractiveness-index-date': year, 'country-attractiveness-index': value }) => `${valueParser(value)} ${year ? `(${year})` : ''}`,
    group: 'group-4'
  },
  'tax-attractiveness-index': {
    title: () => 'Tax Attractiveness Index',
    value: ({ 'tax-attractiveness-index-date': year, 'tax-attractiveness-index': value }) => `${valueParser(value)} ${year ? `(${year})` : ''}`,
    group: 'group-4'
  },
  'financial-secrecy-index': {
    title: () => 'Financial secrecy Index',
    value: ({ 'financial-secrecy-index-date': year, 'financial-secrecy-index': value }) => `${valueParser(value)} ${year ? `(${year})` : ''}`,
    group: 'group-4'
  },
  'enforcing-contracts-rank': {
    title: () => 'Enforcing contracts Index',
    value: ({ 'enforcing-contracts-rank-date': year, 'enforcing-contracts-rank': value }) => `${valueParser(value)} ${year ? `(${year})` : ''}`,
    group: 'group-4'
  },
  'environmental-democracy-index': {
    title: () => 'Environmental Democracy Index',
    value: ({ 'environmental-democracy-index-date': year, 'environmental-democracy-index': value }) => `${valueParser(value)} ${year ? `(${year})` : ''}`,
    group: 'group-4'
  }
};

export default { COMPARISON_COUNTRY_KEYS };

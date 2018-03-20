import { valueParser } from 'utils/value-parser'

export const COMPARISON_COUNTRY_KEYS = {
  'world-bank-country-classification': {
    title: ({ 'world-bank-country-classification-date': year }) => `World Bank economy classification (${year})`,
    value: value => valueParser(value)
  },
  'ihdi-score': {
    title: ({ 'ihdi-date': year }) => `IHDI (Inequality-adjusted Human Development Index)(${year})`,
    value: value => valueParser(value)
  },
  'world-bank-fragile-situations': {
    title: ({ 'world-bank-fragile-situations-date': year }) => `World Bank list of fragile situations (${year})`,
    value: value => valueParser(value)
  },
  'global-peace-index': {
    title: ({ 'global-peace-index-date': year }) => `Global Peace index (${year})`,
    value: value => valueParser(value)
  },
  'global-hunger-index': {
    title: ({ 'global-hunger-index-date': year }) => `Global Hunger index (${year})`,
    value: value => valueParser(value)
  },
  'gdp-per-capita-value': {
    title: () => 'GDP per capita ($)',
    value: value => valueParser(value, true)
  },
  'gdp-growth-annual-percent': {
    title: () => 'GDP annual growth (%)',
    value: value => valueParser(value)
  },
  'mining-percent-of-gdp': {
    title: () => 'Mining sector (% of GDP)',
    value: value => valueParser(value)
  },
  'ores-and-metals-percent-of-exports': {
    title: () => 'Ores and metals percent of export',
    value: value => valueParser(value)
  },
  'ilo-169-status': {
    title: () => 'ILO Convention 169 (Indigenous and Tribal Peoples)',
    value: value => valueParser(value)
  },
  'ilo-176-status': {
    title: () => 'ILO Convention 176 (Safety and Health in Mines)',
    value: value => valueParser(value)
  },
  'eiti-status': {
    title: ({ 'eiti-date': year }) => `EITI (Extractive Industry Transparency Initiative) (${year})`,
    value: value => valueParser(value)
  },
  'voluntary-principles-status': {
    title: () => 'Voluntary Principles on Security and Human Rights',
    value: value => valueParser(value)
  },
  'rgi-rank': {
    title: ({ 'rgi-rank-date': year }) => `NRGI Resource Governance Index (${year})`,
    value: value => valueParser(value)
  },
  'world-bank-control-of-corruption': {
    title: ({ 'world-bank-control-of-corruption-date': year }) => `World Bank WGI Control of Corruption (${year})`,
    value: value => valueParser(value)
  },
  'corruption-perceptions-index': {
    title: ({ 'corruption-perceptions-index-date': year }) => `Corruption Perceptions Index (${year})`,
    value: value => valueParser(value)
  },
  'wef-global-competitiveness-index': {
    title: ({ 'wef-global-competitiveness-index-date': year }) => `WEF Global Competitiveness Index (${year})`,
    value: value => valueParser(value)
  },
  'country-attractiveness-index': {
    title: ({ 'country-attractiveness-index-date': year }) => `Country Attractiveness Index (${year})`,
    value: value => valueParser(value)
  },
  'tax-attractiveness-index': {
    title: ({ 'tax-attractiveness-index-date': year }) => `Tax Attractiveness Index (${year})`,
    value: value => valueParser(value)
  },
  'financial-secrecy-index': {
    title: ({ 'financial-secrecy-index-date': year }) => `Financial secrecy Index ${year}`,
    value: value => valueParser(value)
  },
  'enforcing-contracts-rank': {
    title: ({ 'enforcing-contracts-rank-date': year }) => `Enforcing contracts Index ${year}`,
    value: value => valueParser(value)
  },
  'environmental-democracy-index': {
    title: ({ 'environmental-democracy-index-date': year }) => `Environmental Democracy Index (${year})`,
    value: value => valueParser(value)
  }
};

export default { COMPARISON_COUNTRY_KEYS };

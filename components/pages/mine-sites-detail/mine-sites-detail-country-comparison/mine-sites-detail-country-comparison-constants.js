export const COMPARISON_COUNTRY_KEYS = {
  'world-bank-country-classification': ({ 'world-bank-country-classification-date': year }) => `World Bank economy classification (${year})`,
  'ihdi-score': ({ 'ihdi-date': year }) => `IHDI (Inequality-adjusted Human Development Index)(${year})`,
  'world-bank-fragile-situations': ({ 'world-bank-fragile-situations-date': year }) => `World Bank list of fragile situations (${year})`,
  'global-peace-index': ({ 'global-peace-index-date': year }) => `Global Peace index (${year})`,
  'global-hunger-index': ({ 'global-hunger-index-date': year }) => `Global Hunger index (${year})`,
  'gdp-per-capita-value': () => 'GDP per capita ($)',
  'gdp-growth-annual-percent': () => 'GDP annual growth (%)',
  'mining-percent-of-gdp': () => 'Mining sector (% of GDP)',
  'ores-and-metals-percent-of-exports': () => 'Ores and metals percent of export',
  'ilo-169-status': () => 'ILO Convention 169 (Indigenous and Tribal Peoples)',
  'ilo-176-status': () => 'ILO Convention 176 (Safety and Health in Mines)',
  'eiti-status': ({ 'eiti-date': year }) => `EITI (Extractive Industry Transparency Initiative) (${year})`,
  'voluntary-principles-status': () => 'Voluntary Principles on Security and Human Rights',
  'rgi-rank': ({ 'rgi-rank-date': year }) => `NRGI Resource Governance Index (${year})`,
  'world-bank-control-of-corruption': ({ 'world-bank-control-of-corruption-date': year }) => `World Bank WGI Control of Corruption (${year})`,
  'corruption-perceptions-index': ({ 'corruption-perceptions-index-date': year }) => `Corruption Perceptions Index (${year})`,
  'wef-global-competitiveness-index': ({ 'wef-global-competitiveness-index-date': year }) => `WEF Global Competitiveness Index (${year})`,
  'country-attractiveness-index': ({ 'country-attractiveness-index-date': year }) => `Country Attractiveness Index (${year})`,
  'tax-attractiveness-index': ({ 'tax-attractiveness-index-date': year }) => `Tax Attractiveness Index (${year})`,
  'financial-secrecy-index': ({ 'financial-secrecy-index-date': year }) => `Financial secrecy Index ${year}`,
  'enforcing-contracts-rank': ({ 'enforcing-contracts-rank-date': year }) => `Enforcing contracts Index ${year}`,
  'environmental-democracy-index': ({ 'environmental-democracy-index-date': year }) => `Environmental Democracy Index (${year})`
};

export default { COMPARISON_COUNTRY_KEYS };

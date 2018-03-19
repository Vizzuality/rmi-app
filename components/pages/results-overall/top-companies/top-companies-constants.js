
export const TOPS_PER_ROW = 3;

const generateRandomColour = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const COMPANIES_COLOURS = {
  vale: '#ddc65e',
  'gold-fields': '#6986a5',
  'anglo-american': '#727396',
  evraz: generateRandomColour(),
  nmdc: generateRandomColour(),
  zijin: generateRandomColour(),
  'rio-tinto': '#717b7e',
  'teck-resources': '#7e8849',
  codelco: '#8d505d',
  goldcorp: '#b17399',
  'grupo-mexico': generateRandomColour(),
  'uc-rusal': '#65a1ab',
  'industrias-penoles': generateRandomColour(),
  arcelormittal: '#9a6848',
  'anglogold-ashanti': '#6e7360',
  'eurasian-resources-group-erg': generateRandomColour(),
  'coal-india-cil': generateRandomColour(),
  'newcrest-mining': '#5d505b',
  mmg: generateRandomColour(),
  banpu: generateRandomColour(),
  'freeport-mcmoran': '#2743a0',
  'navoi-mining-metallurgical-combinat': generateRandomColour(),
  'vedanta-resources': '#7ca581',
  'newmont-mining': '#c69385',
  'bumi-resources': generateRandomColour(),
  glencore: '#8f739c',
  'exxaro-resources': '#786563',
  antofagasta: '#c88a74',
  bhp: '#46556d',
  'barrick-gold-corp': '#5d9a87'

};

export default {
  TOPS_PER_ROW,
  COMPANIES_COLOURS
};

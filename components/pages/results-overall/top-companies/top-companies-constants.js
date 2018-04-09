
export const TOPS_PER_ROW = 3;

const generateRandomColour = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const COMPANIES_COLOURS = {
  vale: '#c39675',
  'gold-fields': '#6c89a4',
  'anglo-american': '#727396',
  'rio-tinto': '#778083',
  'teck-resources': '#84895a',
  codelco: '#906064',
  goldcorp: '#b9889c',
  'uc-rusal': '#67a4b1',
  arcelormittal: '#9f7255',
  'anglogold-ashanti': '#6e7360',
  'eurasian-resources-group-erg': generateRandomColour(),
  'newcrest-mining': '#645961',
  mmg: generateRandomColour(),
  'freeport-mcmoran': '#4d67ac',
  'vedanta-resources': '#81a288',
  'newmont-mining': '#b5a3a1',
  glencore: '#927c99',
  'exxaro-resources': '#7d6e6b',
  antofagasta: '#c77e70',
  bhp: '#4b5c70',
  'barrick-gold-corp': '#60988b'

};

export default {
  TOPS_PER_ROW,
  COMPANIES_COLOURS
};

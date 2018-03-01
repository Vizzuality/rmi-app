
export const TOPS_PER_ROW = 3;

const generateRandomColour = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const COMPANIES_COLOURS = {
  vale: generateRandomColour(),
  'gold-fields': generateRandomColour(),
  'anglo-american': generateRandomColour(),
  evraz: generateRandomColour(),
  nmdc: generateRandomColour(),
  zijin: generateRandomColour(),
  'rio-tinto': generateRandomColour(),
  'teck-resources': generateRandomColour(),
  codelco: generateRandomColour(),
  goldcorp: generateRandomColour(),
  'grupo-mexico': generateRandomColour(),
  'uc-rusal': generateRandomColour(),
  'industrias-penoles': generateRandomColour(),
  arcelormittal: generateRandomColour(),
  'anglogold-ashanti': generateRandomColour(),
  'eurasian-resources-group-erg': generateRandomColour(),
  'coal-india-cil': generateRandomColour(),
  'newcrest-mining': generateRandomColour(),
  mmg: generateRandomColour(),
  banpu: generateRandomColour(),
  'freeport-mcmoran': generateRandomColour(),
  'navoi-mining-metallurgical-combinat': generateRandomColour(),
  'vedanta-resources': generateRandomColour(),
  'newmont-mining': generateRandomColour(),
  'bumi-resources': generateRandomColour(),
  glencore: generateRandomColour(),
  'exxaro-resources': generateRandomColour()

};

export default {
  TOPS_PER_ROW,
  COMPANIES_COLOURS
};

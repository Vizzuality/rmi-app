export const GRAPHS_PER_ROW = 3;

export const AREA_ISSUES_COLORS = {
  'a-economic-development': '#0b46dd',
  'b-business-conduct': '#af8862',
  'c-lifecycle-management': '#a3196a',
  'd-community-wellbeing': '#f89d0f',
  'e-working-conditions': '#de1F0a',
  'f-environmental-responsibility': '#69a820'
};

export const BARS = [
  { dataKey: 'commitment' },
  { dataKey: 'action' },
  { dataKey: 'effectiveness' }
];

export const STACKED_BAR_COLOURS = {
  'a-economic-development': {
    commitment: '#4f80fc',
    action: '#255dec',
    effectiveness: '#0b46dd'
  },
  'b-business-conduct': {
    commitment: '#d0a77f',
    action: '#c09872',
    effectiveness: '#af8862'
  },
  'c-lifecycle-management': {
    commitment: '#ce348e',
    action: '#b7247a',
    effectiveness: '#a3196a'
  },
  'd-community-wellbeing': {
    commitment: '#fdbf5f',
    action: '#fab03b',
    effectiveness: '#f89d0f'
  },
  'e-working-conditions': {
    commitment: '#f85948',
    action: '#ef3521',
    effectiveness: '#de1F0a'
  },
  'f-environmental-responsibility': {
    commitment: '#9ccd63',
    action: '#83c13A',
    effectiveness: '#69a820'
  }
};

export const BAR_CONFIG = {
  // x axis config
  xAxisTick: false
};

export default {
  GRAPHS_PER_ROW,
  AREA_ISSUES_COLORS,
  STACKED_BAR_COLOURS,
  BAR_CONFIG,
  BARS
};


export const blue = ['#86a8fe', '#4f80fc', '#255dec', '#0b46dd'];
export const brown = ['#edcaa8', '#d0a77f', '#c09872', '#af8862'];
export const yellow = ['#ffcF85', '#fdbf5f', '#fab03b', '#f89d0f'];
export const pink = ['#eb61B1', '#ce348e', '#b7247a', '#a3196a'];
export const red = ['#fa7d6f', '#f85948', '#ef3521', '#de1F0a'];
export const green = ['#bbdf92', '#9ccd63', '#83c13A', '#69a820'];

export const overallColors = [red[3], blue[3], yellow[3], green[3], pink[3], brown[3]];
export const measurementColors = [blue, brown, pink, yellow, red, green];

export const HOVER_COLOUR = '#000';

export const AREA_ISSUE_COLOURS = {
  145: overallColors[1],
  146: overallColors[5],
  147: overallColors[4],
  148: overallColors[2],
  149: overallColors[0],
  150: overallColors[3]
};

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

export default {
  blue,
  brown,
  yellow,
  pink,
  red,
  green,
  overallColors,
  measurementColors,
  HOVER_COLOUR,
  AREA_ISSUE_COLOURS,
  STACKED_BAR_COLOURS
};

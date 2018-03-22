
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
  'a-economic-development': overallColors[1],
  'b-business-conduct': overallColors[5],
  'c-lifecycle-management': overallColors[4],
  'd-community-wellbeing': overallColors[2],
  'e-working-conditions': overallColors[0],
  'f-environmental-responsibility': overallColors[3]
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
  AREA_ISSUE_COLOURS
};

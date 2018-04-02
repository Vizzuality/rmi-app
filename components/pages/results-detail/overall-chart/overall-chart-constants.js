import { overallColors } from 'constants/graph-colors';

export const CHART_CONFIG = {
  height: 425,
  // xAxis
  xAxisTick: { angle: -45, fill: '#f2f2f2' },
  xAxisHeight: 125,
  xAxisTickSize: 30,
  xAxisInterval: 0,
  xAxisTextAnchor: 'end',
  // yAxis
  YAxisTick: { fill: '#f2f2f2' },
  // bar
  barSize: 15
};

export const AREA_ISSUE_COLOURS = {
  'a-economic-development': overallColors[1],
  'b-business-conduct': overallColors[5],
  'c-lifecycle-management': overallColors[4],
  'd-community-wellbeing': overallColors[2],
  'e-working-conditions': overallColors[0],
  'f-environmental-responsibility': overallColors[3]
};

export default {
  CHART_CONFIG,
  AREA_ISSUE_COLOURS
};

import { blue, brown, pink, yellow, red, green } from 'constants/graph-colors';

export const CHART_CONFIG = {
  height: 225,
  // xAxis
  xAxisTick: false,
  xAxisHeight: 5,
  // bar
  barSize: 5
};

export const MEASUREMENT_AREAS_COLOURS = {
  'a-economic-development': blue.slice(1),
  'b-business-conduct': brown.slice(1),
  'c-lifecycle-management': pink.slice(1),
  'd-community-wellbeing': yellow.slice(1),
  'e-working-conditions': red.slice(1),
  'f-environmental-responsibility': green.slice(1)
};

export default {
  CHART_CONFIG,
  MEASUREMENT_AREAS_COLOURS
};

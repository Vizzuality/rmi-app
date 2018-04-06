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
export const BARS = [
  { dataKey: 'commitment' },
  { dataKey: 'action' },
  { dataKey: 'effectiveness' }
];

export default {
  CHART_CONFIG,
  BARS
};

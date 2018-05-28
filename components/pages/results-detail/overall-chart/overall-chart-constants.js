export const CHART_CONFIG = {
  width: 730,
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
  barSize: 15,
  // reference line config
  showReferenceLine: true,
  yReferenceLine: 0,
  strokeReferenceLine: 'red',
  strokeDasharrayReferenceLine: '3 5',
  labelReferenceLine: 'Current Best Practice'
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

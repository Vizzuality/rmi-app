export const CHART_CONFIG = {
  height: 375,
  barSize: 85,
  setBarFill: () => '#bf3132',
  domain: [0, 6],
  // xAxis
  xAxisKey: 'label',
  xAxisTick: true,
  xAxisHeight: 125,
  xAxisTick: { angle: -45, width: 125, fill: '#f2f2f2' },
  xAxisInterval: 0,
  xAxisTextAnchor: 'end',
  // y Axis
  YAxisTicks: ['0.0', '1.0', '2.0', '3.0', '4.0', '5.0', '6.0'],
  YAxisTick: { fill: '#f2f2f2' }
};

export default { CHART_CONFIG };

export const CHART_CONFIG = {
  height: 375,
  barSize: 85,
  setBarFill: () => '#bf3132',
  domain: [0, 6],
  // xAxis
  xAxisKey: 'label',
  xAxisHeight: 125,
  xAxisTick: { width: 125, fill: '#f2f2f2' },
  xAxisInterval: 0,
  // y Axis
  YAxisTicks: ['0.00', '1.00', '2.00', '3.00', '4.00', '5.00', '6.00'],
  YAxisTick: { fill: '#f2f2f2' }
};

export default { CHART_CONFIG };

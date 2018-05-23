export default {
  isAnimationActive: false,
  barChartOnMouseLeave: undefined,
  // dimensions
  height: 195,
  // xAxis
  xAxisTickLine: false,
  xAxisTick: {},
  xAxisKey: 'name',
  xAxisHeight: 35,
  xAxisTicks: [],
  xAxisTextAnchor: 'middle',
  xAxisInterval: 'preserveEnd',
  // yAxis
  YaxisLine: false,
  YAxisTick: {},
  domain: [0, 6],
  YAxisTicks: ['0.00', '1.00', '2.00', '3.00', '4.00', '5.00', '6.00'],
  YAxisHide: false,
  // styling
  strokeDasharray: '3',
  fill: 'none',
  // bar
  barDataKey: 'value',
  setBarFill: () => '#ddd',
  barSize: undefined,
  barOnMouseOver: undefined
};

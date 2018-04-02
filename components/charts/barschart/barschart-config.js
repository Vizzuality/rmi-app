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
  domain: [0, 1],
  // styling
  strokeDasharray: '3',
  fill: 'none',
  YAxisTicks: ['0.000', '0.200', '0.400', '0.600', '0.800', '1.000'],
  // bar
  barDataKey: 'value',
  setBarFill: () => '#ddd',
  barSize: undefined,
  barOnMouseOver: undefined
};

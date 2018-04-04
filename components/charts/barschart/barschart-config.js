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
  YAxisTicks: ['0.000', '1.000', '2.000', '3.000', '4.000', '5.000', '6.000'],
  // styling
  strokeDasharray: '3',
  fill: 'none',
  // bar
  barDataKey: 'value',
  setBarFill: () => '#ddd',
  barSize: undefined,
  barOnMouseOver: undefined
};

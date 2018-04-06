export default {
  // general chart config
  height: 295,
  // cartesian grid config
  strokeDasharray: '3',
  // y axis config
  yDomain: [0, 6],
  yAxisLine: false,
  yAxisTick: {},
  yAxisTicks: ['0.000', '1.000', '2.000', '3.000', '4.000', '5.000', '6.000'],
  // x axis config
  xAxisTickLine: false,
  xAxisTick: {},
  xAxisKey: 'name',
  xAxisHeight: 35,
  xAxisTicks: [],
  xAxisTextAnchor: 'middle',
  xAxisInterval: 'preserveEnd',
  // bar config
  barSize: undefined,
  setBarFill: () => '#ddd',
  barOnMouseOver: undefined,
  barIsAnimationActive: false
};

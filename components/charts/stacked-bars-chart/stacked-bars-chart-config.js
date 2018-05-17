export default {
  // general chart config
  height: 295,
  // cartesian grid config
  strokeDasharray: null,
  // y axis config
  yDomain: [0, 6],
  yAxisLine: false,
  yAxisTick: {},
  yAxisTicks: ['0.00', '1.00', '2.00', '3.00', '4.00', '5.00', '6.00'],
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
  barIsAnimationActive: false,
  // reference line config
  showReferenceLine: true,
  yReferenceLine: 0,
  strokeReferenceLine: '#bf3132',
  strokeDasharrayReferenceLine: '8',
  strokeWidth: 4,
  // tooltip config
  customTooltip: true
};

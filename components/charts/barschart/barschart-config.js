export default {
  // dimensions
  width: '100%',
  height: 195,
  // xAxis
  xAxis: true,
  xAxisKey: 'name',
  // yAxis
  YaxisLine: false,
  // dataKeyRadar: 'value',
  // radius
  outerRadius: 85,
  domain: [0, 1],
  // styling
  strokeDasharray: '3',
  fill: 'none',
  ticks: ['0', '0.2', '0.4', '0.6', '0.8', '1'],
  // bar
  barDataKey: 'value',
  setBarFill: () => '#ddd',
  barSize: undefined
};

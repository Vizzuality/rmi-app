export const CHART_CONFIG = {
  xAxis: false,
  xAxisHeight: 5,
  domain: [0, 1],
  YAxisTicks: ['0.000', '0.200', '0.400', '0.600', '0.800', '1.000'],
  setBarFill: item => item.currentCompany ? '#272626' : '#9c9aa2'
};

export const OVERALL_CHARTS_TITLES = {
  'Overall commitment': 'Commitment',
  'Overall action': 'Action',
  'Overall effectiveness': 'Effectiveness'
};


export default {
  CHART_CONFIG,
  OVERALL_CHARTS_TITLES
};

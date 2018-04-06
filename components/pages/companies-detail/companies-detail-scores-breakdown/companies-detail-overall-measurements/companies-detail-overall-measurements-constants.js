export const CHART_CONFIG = {
  xAxis: false,
  xAxisHeight: 5,
  domain: [0, 1],
  YAxisTicks: ['0.00', '0.20', '0.40', '0.60', '0.80', '1.00'],
  setBarFill: item => (item.currentCompany ? '#272626' : '#9c9aa2')
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

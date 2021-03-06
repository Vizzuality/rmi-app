export const CHART_CONFIG = {
  width: 215,
  xAxis: false,
  xAxisHeight: 5,
  YAxisHide: false,
  domain: [0, 1],
  YAxisTicks: ['0.00', '0.20', '0.40', '0.60', '0.80', '1.00'],
  setBarFill: item => (item.currentCompany ? '#272626' : '#9c9aa2')
};

export const OVERALL_CHARTS_TITLES = {
  'Overall commitment': 'Commitment (11 indicators)',
  'Overall action': 'Action (41 indicators)',
  'Overall effectiveness': 'Effectiveness (21 indicators)'
};

export default {
  CHART_CONFIG,
  OVERALL_CHARTS_TITLES
};

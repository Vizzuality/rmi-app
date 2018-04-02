export const CHART_CONFIG = {
  xAxis: false,
  xAxisHeight: 5,
  setBarFill: item => item.currentCompany ? '#272626' : '#f2f2f2'
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

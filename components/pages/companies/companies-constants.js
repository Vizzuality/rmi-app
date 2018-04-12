export const MAP_COLORS = {
  color1: '#4ec1c2',
  color2: '#4a5972',
  color3: 'url(#lines)',
  defaultColor: '#e0e0e2'
};

export const MAP_LEGEND = [
  {
    label: 'Home countries, where companies are headquartered',
    color: MAP_COLORS.color1
  },
  {
    label: 'Producing countries, where companies have mining operations',
    color: MAP_COLORS.color2
  }
];

export default {
  MAP_COLORS,
  MAP_LEGEND
};

export const MAP_COLORS = {
  color1: '#4ec1c2',
  color2: '#4a5972',
  color3: 'url(#lines)',
  mineSites: '#bf3132',
  defaultColor: '#e0e0e2'
};

export const MAP_LEGEND = [
  {
    label: 'Home countries, where companies are headquartered',
    color: MAP_COLORS.color1
  },
  {
    label: 'Producing countries',
    color: MAP_COLORS.color2
  },
  {
    label: 'Mine sites selected for mine-site-level assessment',
    color: MAP_COLORS.mineSites,
    type: 'circle'
  }
];


export default {
  MAP_COLORS,
  MAP_LEGEND
};

export const MAP_COLORS = {
  color1: '#bb7ce0',
  color2: '#1077bb',
  color3: '#bf3132',
  color4: 'url(#pattern-hex)',
  defaultColor: '#607d8b'
};

export const MAP_LEGEND = [
  {
    label: 'Producing countries',
    color: MAP_COLORS.color1
  },
  {
    label: 'Home country',
    color: MAP_COLORS.color2
  },
  {
    label: 'Selected mine sites',
    color: MAP_COLORS.color3
  }
];

export default {
  MAP_COLORS,
  MAP_LEGEND
};

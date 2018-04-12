import { MAP_COLORS } from './companies-constants';

export const getCompanyCountryColor = (geographyProperties = {}) => {
  const { isHome, isProducing, isHighlighted } = geographyProperties;
  const { color1, color2, color3, defaultColor } = MAP_COLORS;

  if (isHome && isProducing) return isHighlighted ? '#f00' : color3;

  if (isProducing) return isHighlighted ? '#f00' : color2;

  if (isHome) return isHighlighted ? '#f00' : color1;

  return defaultColor;
};

export default { getCompanyCountryColor };

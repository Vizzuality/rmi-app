import { MAP_COLORS } from './companies-constants';

export const getCompanyCountryColor = (geographyProperties = {}) => {
  const { isHome, isProducing } = geographyProperties;
  const {
    color1, color2, color3, defaultColor
  } = MAP_COLORS;

  if (isHome && isProducing) return color3;

  if (isProducing) return color1;

  if (isHome) return color2;

  return defaultColor;
};

export default {
  getCompanyCountryColor
};

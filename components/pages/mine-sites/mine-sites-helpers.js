import { MAP_COLORS } from './mine-sites-constants';

export const mineSiteFilter = (mineSite, filters) => {
  const { selectedCompany, selectedMineSite } = filters;

  const filterCompany = selectedCompany ? mineSite['company-id'] === selectedCompany : true;
  const filterMineSite = selectedMineSite ? mineSite.id === selectedMineSite : true;

  return filterCompany && filterMineSite;
};

export const getCompanyCountryColor = (geographyProperties = {}) => {
  const { isHome, isProducing } = geographyProperties;
  const { color1, color2, color3, defaultColor } = MAP_COLORS;

  if (isHome && isProducing) return color3;

  if (isProducing) return color2;

  if (isHome) return color1;

  return defaultColor;
};

export default {
  getCompanyCountryColor,
  mineSiteFilter
};

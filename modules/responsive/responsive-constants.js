// Customize your breakpoints here
export const breakPoints = {
  sm: 768, // 48rem
  md: 1024, // 64rem
  lg: 1280 // 80rem
};

export const defaultSizes = {
  phone: breakPoints.sm - 1,
  tablet: breakPoints.md - 1,
  desktop: breakPoints.lg
};

export const defaultSize = defaultSizes.desktop;

export default { breakPoints, defaultSizes, defaultSize };

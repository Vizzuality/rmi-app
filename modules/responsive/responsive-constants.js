// Customize your breakpoints here
export const breakPoints = {
  sm: 320, // 48rem
  md: 768, // 64rem
  lg: 1024 // 80rem
};

export const defaultSizes = {
  phone: breakPoints.sm + 10,
  tablet: breakPoints.md + 10,
  desktop: breakPoints.lg + 10
};

export const defaultSize = defaultSizes.desktop;

export default { breakPoints, defaultSizes, defaultSize };

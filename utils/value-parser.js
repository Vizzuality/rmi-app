export const valueParser = (value, toLocaleString = false) => {
  if (value === 0) return value;

  if (!value) return '-';

  if (toLocaleString) return value.toLocaleString();

  return value;
};

export const fixedValue = (value, decimals = 2) =>
  ((typeof value === 'number') ? value.toFixed(decimals) : '-');

export default {
  valueParser,
  fixedValue
};

export const valueParser = (value, toLocaleString = false) => {
  if (value === 0) return value;

  if (!value) return '-';

  if (toLocaleString) return value.toLocaleString();

  return value;
};

export default { valueParser };

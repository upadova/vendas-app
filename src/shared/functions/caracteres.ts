export const removeSpecialCaracter = (value: string): string => {
  return value.replace(/\D/g, '');
};

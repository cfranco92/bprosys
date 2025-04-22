export const formatCategoryName = (category: string): string => {
  return category.charAt(0).toUpperCase() + category.slice(1);
};

export const formatCurrency = (value: number, currency: string = '$'): string => {
  return `${currency}${value.toLocaleString()}`;
};

export const formatPercentage = (value: number): string => {
  return `${value}%`;
}; 
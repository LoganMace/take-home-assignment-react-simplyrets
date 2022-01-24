export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(price);
};

export const formatDate = (date) => {
  const baseDate = new Date(date);
  const month = baseDate.getMonth() + 1;
  const day = baseDate.getDate();
  const year = baseDate.getFullYear().toString().substring(2, 4);
  const dateString = `${month}/${day}/${year}`;

  return dateString;
};

export const calculateBaths = (fullBaths, halfBaths) => {
  const totalBaths = fullBaths + (halfBaths * .5);

  return totalBaths;
};

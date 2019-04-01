export const quantityCounter = items => {
  let quantit = 0;
  items.forEach(item => (quantit += item.quantity));
  return quantit;
};

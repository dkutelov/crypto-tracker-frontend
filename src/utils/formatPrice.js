export function formatPrice(price) {
  if (price % 1 === 0) return price;
  return price.toFixed(2);
}

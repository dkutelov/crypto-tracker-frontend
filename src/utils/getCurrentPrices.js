export function getCurrentPrices(data) {
  const currentPrices = {};
  data.forEach((x) => {
    currentPrices[x.id] = x.current_price;
  });
  return currentPrices;
}

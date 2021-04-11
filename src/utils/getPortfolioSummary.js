export function getPortfolioSummary(transactions, currentPrices) {
  let data = [];

  const coins = transactions
    .map((x) => x.coinId)
    .filter((v, i, a) => a.indexOf(v) === i);

  // b +, s-
  coins.forEach((coin) => {
    let amount = 0;
    let purchaseAmount = 0;
    let currentAmount = 0;

    transactions.forEach((t) => {
      if (t.coinId === coin) {
        if (t.type === 'b') {
          amount += t.amount;
          purchaseAmount += t.amount * t.price;
          currentAmount += t.amount * currentPrices[coin];
        }
      } else if (t.coinId === 's') {
        amount -= t.amount;
        purchaseAmount -= t.amount * t.price;
        currentAmount -= t.amount * currentPrices[coin];
      }
    });
    data = [
      ...data,
      {
        name: coin,
        amount,
        purchaseAmount,
        currentAmount,
      },
    ];
  });

  return data.sort((a, b) => a.amount - b.amount);
}

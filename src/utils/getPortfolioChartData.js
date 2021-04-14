import add from 'date-fns/add';
import sub from 'date-fns/sub';
import format from 'date-fns/format';

export function getPortfolioChartData(portfolioSummaryData, priceData) {
  if (portfolioSummaryData.length !== Object.keys(priceData).length) return [];

  const chartsData = [];
  let date = sub(Date.now(), {
    days: 6,
  });

  Array.from({ length: 7 }, (_, i) => i).forEach((i) => {
    const currentDate = {
      name: format(date, 'dd-MM'),
    };

    portfolioSummaryData.forEach((coin) => {
      currentDate[coin.name] = coin.amount * priceData[coin.name][i][1];
    });
    chartsData.push(currentDate);
    date = add(date, {
      days: 1,
    });
  });

  return chartsData;
}

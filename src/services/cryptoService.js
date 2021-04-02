const baseURL = 'https://api.coingecko.com/api/v3';
const pageSize = 25;
const currency = 'usd';

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
}

export const getAll = (pageNumber = 1) => {
  let url =
    `${baseURL}/coins/markets?` +
    new URLSearchParams({
      vs_currency: currency,
      order: 'market_cap_desc',
      per_page: pageSize,
      page: pageNumber,
      sparkline: false,
    });

  return fetch(url).then(handleErrors);
};

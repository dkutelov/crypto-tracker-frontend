const baseURL = 'https://api.coingecko.com/api/v3';
const pageSize = 50;
const currency = 'usd';

async function handleErrors(response) {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
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

export const getOne = (id) => {
  let url =
    `${baseURL}/coins/${id}?` +
    new URLSearchParams({
      localization: false,
      sparkline: true,
    });

  return fetch(url).then(handleErrors);
};

export const getCurrentPrice = (id) => {
  let url =
    `${baseURL}/simple/price?` +
    new URLSearchParams({
      ids: id,
      vs_currencies: 'usd',
    });

  return fetch(url).then(handleErrors);
};

export const getLastSevenDaysPrices = (id) => {
  let url =
    `${baseURL}/coins/${id}/market_chart?` +
    new URLSearchParams({
      vs_currency: 'usd',
      days: 7,
      interval: 'daily',
    });

  return fetch(url).then(handleErrors);
};

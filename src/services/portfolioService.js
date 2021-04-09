const baseURL = 'http://localhost:4000/api/portfolios';

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
}

export const getOne = (userId, token) => {
  let url = `${baseURL}?id=${userId}`;
  return fetch(url, {
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }).then(handleErrors);
};

export const addTransaction = (data, token) => {
  let url = `${baseURL}`;
  return fetch(url, {
    method: 'post',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(handleErrors);
};

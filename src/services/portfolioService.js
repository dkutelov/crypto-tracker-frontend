const baseURL = 'http://localhost:4000/api/portfolios';

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
}

export const getOne = (userId, token) => {
  let url = `${baseURL}`;
  return fetch(url, {
    method: 'post',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId }),
  }).then(handleErrors);
};

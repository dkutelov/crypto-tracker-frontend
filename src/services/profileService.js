const baseURL = 'http://localhost:4000/api/profiles';

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
}

export const getProfile = (userId, token) => {
  let url = `${baseURL}?id=${userId}`;
  return fetch(url, {
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(handleErrors);
};

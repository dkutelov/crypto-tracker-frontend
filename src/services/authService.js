const baseURL = 'http://localhost:4000/api/auth/';

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
}

export const login = (username, password) => {
  let url = `${baseURL}/login`;
  return fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  }).then(handleErrors);
};

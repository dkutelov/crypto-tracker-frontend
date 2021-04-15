import { config } from '../config/config';

const baseURL = `${config.apiUrl}/auth`;

async function handleErrors(response) {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
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

export const register = (username, password) => {
  console.log(username, password);
  let url = `${baseURL}/register`;
  return fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  }).then(handleErrors);
};

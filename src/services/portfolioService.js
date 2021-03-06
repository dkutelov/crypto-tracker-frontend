import { config } from '../config/config';

const baseURL = `${config.apiUrl}/portfolios`;

async function handleErrors(response) {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  return response.json();
}

export const getOne = (token) => {
  let url = `${baseURL}`;
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

export const deleteTransaction = (transactionId, token) => {
  let url = `${baseURL}?id=${transactionId}`;
  return fetch(url, {
    method: 'delete',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(handleErrors);
};

export const editTransaction = (data, token) => {
  let url = `${baseURL}`;
  return fetch(url, {
    method: 'put',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(handleErrors);
};

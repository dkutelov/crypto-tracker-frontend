const baseURL = 'http://localhost:4000/api/profiles';

async function handleErrors(response) {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  return response.json();
}

export const getProfile = (token) => {
  let url = `${baseURL}`;
  return fetch(url, {
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(handleErrors);
};

export const createProfile = (data, token) => {
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

export const editProfile = (data, token) => {
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

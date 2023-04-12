const useFetch = (endpoint, data, method = 'GET') => {
  const url = endpoint;

  if (method === 'GET') {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
};

const useFetchToken = (endpoint, data = '', method = 'GET') => {
  const url = endpoint;
  const userData = JSON.parse(localStorage.getItem('userData'));
  if (!userData) {
    return false;
  }
  const token = userData.token;

  if (method === 'GET') {
    return fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
        'x-token': token,
      },
      body: JSON.stringify(data),
    });
  }
};

export { useFetch, useFetchToken };

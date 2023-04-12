import { endpoints } from './endpoints';
import { useFetchToken } from './fetch';

export const fetchData = async (endpoint) => {
  const resp = await useFetchToken(endpoint);
  if (resp.status === 200) {
    const data = await resp.json();
    return data;
  }

  if (resp.status === 401) {
    localStorage.clear();
    location.href = '/';
  }
};

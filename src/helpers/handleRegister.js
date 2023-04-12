import { endpoints } from './endpoints';
import { useFetch } from './fetch';

export const handleRegister = async (email, password, fullName) => {
  const resp = await useFetch(
    endpoints.register,
    { email, password, fullName },
    'POST'
  );
  const data = await resp.json();
  if (resp.status === 200) {
    return data;
  } else {
    return data;
  }
};

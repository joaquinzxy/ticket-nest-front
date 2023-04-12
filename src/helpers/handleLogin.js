import { redirect } from 'react-router-dom';
import { endpoints } from './endpoints';
import { useFetch } from './fetch';

export const handleLogin = async (email, password) => {
  const resp = await useFetch(endpoints.login, { email, password }, 'POST');
  const data = await resp.json();
  const { status } = resp;
  const { message } = data;
  console.log(status);
  if (status === 201 || status === 200) {
    return data;
  } else {
    const messagesArray = message.map((error) => error.toUpperCase());
    throw new Exception(messagesArray);
  }
};

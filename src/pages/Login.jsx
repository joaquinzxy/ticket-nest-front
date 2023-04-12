import React from 'react';
import { LoginForm } from '../components/common/LoginForm';
import { Header } from '../components/common/Header';

export const Login = () => {
  return (
    <>
      <Header activePage="Login" />
      <LoginForm />
    </>
  );
};

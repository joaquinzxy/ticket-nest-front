import React from 'react';
import { Header } from '../components/common/Header';
import { getJWT } from '../helpers/checkLocalStorage';
import { Navigate } from 'react-router-dom';

export const Profile = () => {
  if (!getJWT()) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header activePage={'Profile'} />
    </>
  );
};

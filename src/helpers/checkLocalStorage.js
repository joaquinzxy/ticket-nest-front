export const getJWT = () => {
  const jwt = localStorage.getItem('userData');
  return !!jwt;
};

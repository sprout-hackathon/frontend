const getAccessToken = async () => {
  const token = localStorage.getItem('accessToken');

  return token;
};

export { getAccessToken };

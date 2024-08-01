import { getCookie } from './Cookies';

const getAccessToken = async () => {
  const token = getCookie('user');

  return token;
};

export { getAccessToken };

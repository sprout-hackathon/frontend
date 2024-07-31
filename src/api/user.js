import axios from 'axios';
import { getAccessToken } from './auth';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const getUserInfo = async () => {
  const url = `${BASE_URL}/api/users`;
  const token = await getAccessToken();

  const res = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res?.data;
};

export { getUserInfo };

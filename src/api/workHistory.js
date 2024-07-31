import axios from 'axios';
import { getAccessToken } from './auth';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const getWorkHistoryList = async () => {
  const url = `${BASE_URL}/api/work-histories`;
  const token = await getAccessToken();

  const res = await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res?.data;
};

export { getWorkHistoryList };

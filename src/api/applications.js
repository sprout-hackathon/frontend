import axios from 'axios';
import { getAccessToken } from './auth';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const postApplication = async (recruitmentId) => {
  const url = `${BASE_URL}/api/applications`;
  const token = await getAccessToken();

  const res = await axios.post(
    url,
    { recruitmentId: recruitmentId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return res?.data;
};

const getApplicationList = async () => {
  const url = `${BASE_URL}/api/applications`;
  const token = await getAccessToken();

  const res = await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res?.data;
};

export { postApplication, getApplicationList };

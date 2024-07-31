import axios from 'axios';
import { getAccessToken } from './auth';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const postApplication = async (recruitmentId) => {
  const url = `${BASE_URL}/api/applications`;
  const token = getAccessToken();

  axios.post(
    url,
    { recruitmentId: recruitmentId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return true;
};

export { postApplication };

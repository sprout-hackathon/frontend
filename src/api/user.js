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

const editUserInfo = async (
  nickname,
  nationCode,
  languageCode,
  proficiency
) => {
  const url = `${BASE_URL}/api/users`;
  const token = await getAccessToken();

  const res = await axios.patch(
    url,
    {
      nickname: nickname,
      nationCode: nationCode,
      languageCode: languageCode,
      proficiency: proficiency,
      hasCertification: true,
      certificationCode: 'cert123',
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return res?.data;
};

export { getUserInfo, editUserInfo };

import axios from 'axios';
import { getAccessToken } from './auth';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const getRecruitmentList = async (region, page, size) => {
  const url = `${BASE_URL}/api/recruitments`;
  const token = await getAccessToken();

  const res = await axios.get(url, {
    params: {
      sido: region === '전체' ? '' : region,
      page: page,
      size: size,
      sort: 'recruitmentId',
    },
    headers: { Authorization: `Bearer ${token}` },
  });

  return res?.data;
};

const getRecruitmentDetail = async (recruitmentId) => {
  const url = `${BASE_URL}/api/recruitments/${recruitmentId}`;
  const token = await getAccessToken();

  const res = await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res?.data;
};

const getRecruitmentScrap = async (recruitmentId) => {
  const url = `${BASE_URL}/api/recruitments/${recruitmentId}/scrap`;
  const token = await getAccessToken();

  const res = await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res?.data;
};

const postScrapRecruitment = async (recruitmentId) => {
  const url = `${BASE_URL}/api/recruitments/${recruitmentId}/scrap`;
  const token = await getAccessToken();

  await axios.post(
    url,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return true;
};

const deleteScrapRecruitment = async (recruitmentId) => {
  const url = `${BASE_URL}/api/recruitments/${recruitmentId}/scrap`;
  const token = await getAccessToken();

  await axios.delete(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return true;
};

export {
  getRecruitmentList,
  getRecruitmentDetail,
  getRecruitmentScrap,
  postScrapRecruitment,
  deleteScrapRecruitment,
};

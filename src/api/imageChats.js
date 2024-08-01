import axios from 'axios';
import { getAccessToken } from './auth';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const postCreateImageRoom = async (title, files) => {
  const url = `${BASE_URL}/api/chats/images/rooms`;
  const token = await getAccessToken();

  const formData = new FormData();

  const request = { title: title };
  formData.append('request', JSON.stringify(request));

  files.forEach((file) => formData.append('fileList', file));

  const res = await axios.post(url, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
    timeout: 1000 * 60,
  });

  return res?.data;
};

const postSendImageMessage = async (imageRoomId, content, files) => {
  const url = `${BASE_URL}/api/chats/images/messages`;
  const token = await getAccessToken();

  const formData = new FormData();

  const request = {
    imageRoomId: imageRoomId,
    content: content,
  };
  formData.append('request', JSON.stringify(request));

  files.forEach((file) => formData.append('fileList', file));

  const res = await axios.post(url, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
    timeout: 1000 * 60,
  });

  return res?.data;
};

const getImageRooms = async ({ date }) => {
  const url = `${BASE_URL}/api/chats/images/rooms`;
  const token = await getAccessToken();

  const res = await axios.get(url, {
    params: { date: date },
    headers: { Authorization: `Bearer ${token}` },
  });
};

export { postCreateImageRoom, postSendImageMessage };

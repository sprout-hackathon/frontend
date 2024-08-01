import axios from 'axios';
import { getAccessToken } from './auth';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const postCreateChatRoom = async (title) => {
  const url = `${BASE_URL}/api/chats/rooms`;
  const token = await getAccessToken();
  const res = await axios.post(
    url,
    { title: title },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      timeout: 1000 * 60,
    }
  );

  return res?.data;
};

const postSendMessage = async (chatRoomId, content) => {
  const url = `${BASE_URL}/api/chats/messages`;
  const token = await getAccessToken();

  const res = await axios.post(
    url,
    { content: content, chatRoomId: chatRoomId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      timeout: 1000 * 60,
    }
  );

  return res?.data;
};

const getChatRoomList = async (date) => {
  const url = `${BASE_URL}/api/chats/rooms`;
  const token = await getAccessToken();

  const res = await axios.get(url, {
    params: { date: date },
    headers: { Authorization: `Bearer ${token}` },
  });

  return res?.data;
};

const getChatLog = async (chatRoomId) => {
  const url = `${BASE_URL}/api/chats/rooms/${chatRoomId}`;
  const token = await getAccessToken();

  const res = await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res?.data;
};

export { postCreateChatRoom, postSendMessage, getChatRoomList, getChatLog };

import axios from 'axios';
import { getAccessToken } from './auth';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const postCreateChatRoom = async (title) => {
  const url = `${BASE_URL}/api/chats/rooms`;
  const token = await getAccessToken();

  const res = axios.post(
    url,
    { title: title },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return res?.data;
};

const postSendMessage = async (chatRoomId, content) => {
  const url = `${BASE_URL}/api/chats/messages`;
  const token = await getAccessToken();

  const res = axios.post(
    url,
    { content: content, chatRoomId: chatRoomId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return res?.data;
};

export { postCreateChatRoom, postSendMessage };

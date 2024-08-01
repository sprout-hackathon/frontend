import { useNavigate, useParams } from 'react-router-dom';
import leftChevronIcon from '../assets/icons/left-chevron.svg';
import ChatbotMessage from '../components/chatbot/ChatbotMessage';
import UserMessage from '../components/chatbot/UserMessage';
import { useQuery } from '@tanstack/react-query';
import { getChatLog } from '../api/chats';
import useAuth from '../hooks/useAuth';
import { useEffect } from 'react';

const ChatlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className='flex h-dvh flex-col'>
      <div className='flex w-full flex-row border-b px-5 py-4'>
        <button onClick={() => navigate(-1)}>
          <img src={leftChevronIcon} alt='back icon' />
        </button>
        <h1 className='mx-auto text-lg font-semibold'>제목</h1>
      </div>
      <Chats chatRoomId={id} />
    </div>
  );
};

const Chats = ({ chatRoomId }) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ['chatlog', chatRoomId],
    queryFn: () => getChatLog(chatRoomId),
  });

  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isPending) return <div className='grow p-4'>대화 내역 불러오는 중</div>;
  if (isError)
    return <div className='grow p-4'>대화 내역 불러오기에 실패했어요</div>;

  return (
    <div className='flex grow flex-col gap-3 overflow-y-auto p-4'>
      <ChatbotMessage
        text={`반가워요! 저는 사용자님이 한국에서 생활하실 때 필요한 자격증에 대한 정보를 제공하는 자격증 도우미 챗봇이에요.

언제든  궁금한 점을 물어보세요!`}
      />
      {data.messages.map((message, index) =>
        message.bot ? (
          <ChatbotMessage key={index} text={message.content} />
        ) : (
          <UserMessage key={index} text={message.content} />
        )
      )}
    </div>
  );
};

export default ChatlogDetail;

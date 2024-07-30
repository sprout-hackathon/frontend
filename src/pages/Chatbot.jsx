import { useNavigate } from 'react-router-dom';
import leftChevronIcon from '../assets/icons/left-chevron.svg';
import sendIcon from '../assets/icons/send-gray.svg';
import ChatbotMessage from '../components/chatbot/ChatbotMessage';
import Suggestion from '../components/chatbot/Suggestion';
import { useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import UserMessage from '../components/chatbot/UserMessage';
import showIcon from '../assets/icons/chat-show.svg';
import hideIcon from '../assets/icons/chat-hide.svg';
import GridButton from '../components/chatbot/GridButton';
import documentIcon from '../assets/icons/chat-document.svg';
import noteIcon from '../assets/icons/chat-note.svg';
import summaryIcon from '../assets/icons/chat-summary.svg';
import mindmapIcon from '../assets/icons/chat-mindmap.svg';
import questionIcon from '../assets/icons/chat-question.svg';

const firstMessage = `반가워요! 저는 사용자님이 한국에서 생활하실 때 필요한 자격증에 대한 정보를 제공하는 자격증 도우미 챗봇이에요.

언제든  궁금한 점을 물어보세요!`;

const mostAskedQuestion = [
  '사회복지사 자격증 어떻게 따?',
  '평소에 노인분들을 어떻게 대해야 할지 어려워. 방법을 추천해줄 수 있어?',
  '한국에서 요양보호사로 근무하려면 또 어떤 것들이 필요할까?',
  '사회복지사 시험은 어떻게 보고, 자격 취득 조건이 어떻게 돼?',
];

const ChatbotInit = () => {
  const [inputText, setInputText] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [suggestion, setSuggestion] = useState({
    show: true,
    list: mostAskedQuestion,
  });
  const [showMore, setShowMore] = useState(false);
  const chatRoomId = useRef();
  const navigate = useNavigate();

  const { mutate: createChatroom } = useMutation({
    mutationFn: (title) =>
      fetch(`${import.meta.env.VITE_BASE_URL}/api/chats/rooms`, {
        method: 'POST',
        body: JSON.stringify({ title: title }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json()),
    onSuccess: (data) => {
      chatRoomId.current = data.chatRoomId;
      setMessageList((list) => [
        ...list,
        { content: data.content, isBot: data.isBot },
      ]);
      setSuggestion({ show: true, list: data.recommendedQuestions });
    },
    onError: (error) => console.log(error),
  });

  const { mutate: sendMessage } = useMutation({
    mutationFn: (message) =>
      fetch(`${import.meta.env.VITE_BASE_URL}/api/chats/messages`, {
        method: 'POST',
        body: JSON.stringify({
          content: message,
          chatRoomId: chatRoomId.current,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json()),
    onSuccess: (data) => {
      setMessageList((list) => [
        ...list,
        { content: data.content, isBot: data.isBot },
      ]);
      setSuggestion({ show: true, list: data.recommendedQuestions });
    },
  });

  const handleSendMessage = ({ message }) => {
    setSuggestion((prev) => ({ ...prev, show: false }));
    setMessageList((list) => [...list, { content: message, isBot: false }]);
    if (messageList.length === 0) {
      createChatroom(message); // 채팅방 생성
    } else {
      sendMessage(message); // 채팅 메세지 전송
    }
  };

  return (
    <div className='flex h-dvh flex-col'>
      <div className='flex w-full flex-row border-b px-5 py-4'>
        <button onClick={() => navigate(-1)}>
          <img src={leftChevronIcon} alt='back icon' />
        </button>
        <h1 className='mx-auto text-lg font-semibold'>챗봇과 대화하기</h1>
      </div>
      <div className='flex grow flex-col gap-3 overflow-y-auto p-4'>
        <ChatbotMessage text={firstMessage} />
        {messageList.map((msg) =>
          msg.isBot ? (
            <ChatbotMessage key={msg.content} text={msg.content} />
          ) : (
            <UserMessage key={msg.content} text={msg.content} />
          )
        )}
        {suggestion.show &&
          suggestion.list.map((question) => (
            <Suggestion
              key={question}
              text={question}
              onSelect={() => handleSendMessage(question)}
            />
          ))}
      </div>
      <div className='flex flex-row items-start border-y p-3'>
        <button
          onClick={() => setShowMore((prev) => !prev)}
          className='ml-1 mt-2 flex h-7 w-7'
        >
          {showMore ? (
            <img src={hideIcon} alt='more icon' />
          ) : (
            <img src={showIcon} alt='hide icon' />
          )}
        </button>
        <input
          type='text'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className='grow rounded-lg border bg-gray-100 px-3 py-2 text-sm focus:outline-none'
        />
        <button onClick={() => handleSendMessage(inputText)}>
          <img src={sendIcon} alt='send icon' className='ml-2 mt-1' />
        </button>
      </div>
      {showMore && (
        <div className='grid h-64 grid-cols-3 grid-rows-2 gap-4 p-5'>
          <GridButton
            text='학습자료 및 PDF 파일
           업로드'
          />
          <GridButton
            text='챗봇과
          문제 풀기'
            icon={documentIcon}
          />
          <GridButton text='나의 노트' icon={noteIcon} />
          <GridButton
            text='대화 내용
          전체 요약'
            icon={summaryIcon}
          />
          <GridButton text='마인드맵 만들기' icon={mindmapIcon} />
          <GridButton text='AI 캐릭터에게 질문하기' icon={questionIcon} />
        </div>
      )}
    </div>
  );
};

export default ChatbotInit;

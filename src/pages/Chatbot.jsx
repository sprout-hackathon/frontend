import { useNavigate } from 'react-router-dom';
import leftChevronIcon from '../assets/icons/left-chevron.svg';
import sendIcon from '../assets/icons/send-gray.svg';
import ChatbotMessage from '../components/chatbot/ChatbotMessage';
import Suggestion from '../components/chatbot/Suggestion';
import { useEffect, useRef, useState } from 'react';
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
import Modal from '../components/common/Modal/Modal';
import ModalText from '../components/common/Modal/ModalText';
import ModalButton from '../components/common/Modal/ModalButton';
import { postCreateChatRoom, postSendMessage } from '../api/chats';
import useAuth from '../hooks/useAuth';

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
  const [isLoading, setIsLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const chatRoomId = useRef();
  const navigate = useNavigate();
  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const { mutate: createChatroom } = useMutation({
    mutationFn: (title) => postCreateChatRoom(title),
    onSuccess: (data) => {
      chatRoomId.current = data.chatRoomId;
      setIsLoading(false);
      setMessageList((list) => [
        ...list,
        { content: data.content, isBot: data.bot },
      ]);
      setSuggestion((sug) => ({ ...sug, show: true }));
    },
    onError: (err) => console.log(err),
  });

  const { mutate: sendMessage } = useMutation({
    mutationFn: (content) => postSendMessage(chatRoomId.current, content),
    onSuccess: (data) => {
      setIsLoading(false);
      setMessageList((list) => [
        ...list,
        { content: data.content, isBot: data.bot },
      ]);
      setSuggestion({ show: true, list: data.recommendedQuestions });
    },
  });

  const handleSendMessage = (content) => {
    setSuggestion((prev) => ({ ...prev, show: false }));
    setMessageList((list) => [...list, { content: content, isBot: false }]);
    if (messageList.length === 0) {
      setIsLoading(true);
      createChatroom(content); // 채팅방 생성
    } else {
      setIsLoading(true);
      sendMessage(content); // 채팅 메세지 전송
      setInputText('');
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
        <ChatbotMessage key={0} text={firstMessage} />
        {messageList.map((msg) =>
          msg.isBot ? (
            <ChatbotMessage key={msg.content} text={msg.content} />
          ) : (
            <UserMessage key={msg.content} text={msg.content} />
          )
        )}
        {isLoading && (
          <ChatbotMessage
            key={-1}
            text={'생각하는 중...'}
            style={{ color: '#a3a3a3' }}
          />
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
          onClick={() => setShowMenu((prev) => !prev)}
          className='ml-1 mt-2 flex h-7 w-7'
        >
          {showMenu ? (
            <img src={hideIcon} alt='more icon' />
          ) : (
            <img src={showIcon} alt='hide icon' />
          )}
        </button>
        <input
          type='text'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onFocus={() => setShowMenu}
          className='grow rounded-lg border bg-gray-100 px-3 py-2 text-sm focus:outline-none'
        />
        <button onClick={() => handleSendMessage(inputText)}>
          <img src={sendIcon} alt='send icon' className='ml-2 mt-1' />
        </button>
      </div>
      {showMenu && (
        <div className='grid h-64 grid-cols-3 grid-rows-2 gap-4 p-5'>
          <GridButton
            text='학습자료 및
          PDF 파일
          업로드'
            onClick={() => setShowModal(true)}
          />
          <GridButton
            text='챗봇과
          문제 풀기'
            icon={documentIcon}
            onClick={() => setShowModal(true)}
          />
          <GridButton
            text='나의 노트'
            icon={noteIcon}
            onClick={() => setShowModal(true)}
          />
          <GridButton
            text='대화 내용
          전체 요약'
            icon={summaryIcon}
            onClick={() => setShowModal(true)}
          />
          <GridButton
            text='마인드맵 만들기'
            icon={mindmapIcon}
            onClick={() => setShowModal(true)}
          />
          <GridButton
            text='AI 캐릭터에게
          질문하기'
            icon={questionIcon}
            onClick={() => setShowModal(true)}
          />
        </div>
      )}
      {showModal && (
        <Modal onClickClose={() => setShowModal(false)}>
          <ModalText
            text='프리미엄 회원권을 결제하면
챗봇과 함께 어려운 어휘나
한국 생활의 어려움을
문제로 공부할 수 있어요 :)'
          />
          <ModalButton text='프리미엄 회원 결제하러 가기' />
        </Modal>
      )}
    </div>
  );
};

export default ChatbotInit;

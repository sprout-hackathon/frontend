import { useNavigate } from 'react-router-dom';
import leftChevronIcon from '../assets/icons/left-chevron.svg';
import sendIcon from '../assets/icons/send-gray.svg';
import ChatbotMessage from '../components/chatbot/ChatbotMessage';
import Suggestion from '../components/chatbot/Suggestion';
import UserMessage from '../components/chatbot/UserMessage';

const Chatbot = () => {
  const navigate = useNavigate();

  return (
    <div className='flex h-dvh flex-col'>
      <div className='flex w-full flex-row border-b px-5 py-4'>
        <button onClick={() => navigate(-1)}>
          <img src={leftChevronIcon} alt='back icon' />
        </button>
        <h1 className='mx-auto text-lg font-semibold'>챗봇과 대화하기</h1>
      </div>
      <div className='flex grow flex-col gap-3 overflow-y-auto p-4'>
        <ChatbotMessage
          text={`반가워요! 저는 사용자님이 한국에서 생활하실 때 필요한 자격증에 대한 정보를 제공하는 자격증 도우미 챗봇이에요.

언제든  궁금한 점을 물어보세요!`}
        />
        <Suggestion text={'사회복지사 자격증 어떻게 따?'} selected />
        <Suggestion
          text={
            '평소에 노인분들을 어떻게 대해야 할지 어려워. 방법을 추천해줄 수 있어?'
          }
        />
        <Suggestion
          text={'한국에서 요양보호사로 근무하려면 또 어떤 것들이 필요할까?'}
        />
        <Suggestion
          text={'사회복지사 시험은 어떻게 보고, 자격 취득 조건이 어떻게 돼?'}
        />
        <UserMessage text={'사회복지사 자격증 어떻게 따?'} />
        <UserMessage text={'사회복지사 자격증 어떻게 따?'} />
        <UserMessage text={'사회복지사 자격증 어떻게 따?'} />
        <UserMessage text={'사회복지사 자격증 어떻게 따?'} />
        <UserMessage text={'사회복지사 자격증 어떻게 따?'} />
        <UserMessage text={'사회복지사 자격증 어떻게 따?'} />
        <UserMessage text={'사회복지사 자격증 어떻게 따?'} />
        <UserMessage text={'사회복지사 자격증 어떻게 따?'} />
        <UserMessage text={'사회복지사 자격증 어떻게 따?'} />
      </div>
      <div className='flex flex-row items-start border-t p-3'>
        <input
          type='text'
          className='mb-4 grow rounded-lg border bg-gray-100 px-3 py-2 text-sm focus:mb-0 focus:outline-none'
        />
        <button>
          <img src={sendIcon} alt='send icon' className='ml-2 mt-1' />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

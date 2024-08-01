import { Link, useNavigate } from 'react-router-dom';
import leftChevronIcon from '../assets/icons/left-chevron.svg';
import chatIcon from '../assets/icons/chatbot-chat.svg';
import photoIcon from '../assets/icons/chatbot-photo.svg';

const ChatMenu = () => {
  const navigate = useNavigate();

  return (
    <div className='flex h-dvh flex-col'>
      <div className='flex w-full flex-row border-b px-5 py-4'>
        <button onClick={() => navigate(-1)}>
          <img src={leftChevronIcon} alt='back icon' />
        </button>
        <h1 className='mx-auto text-lg font-semibold'>유니케어 챗봇 도우미</h1>
      </div>
      <h1 className='mb-2 whitespace-pre-line px-5 pt-5 text-3xl font-bold'>
        저는 유니케어의
        <br />
        챗봇 도우미에요!
      </h1>
      <h5 className='mb-3 px-5 text-sm text-blue'>
        한국 생활, 요양보호사에 대해 모르는 점이 있다면 언제든 저를
        활용해주세요.
      </h5>
      <Link
        to='/chatbot/chat'
        className='mx-5 mb-4 flex flex-row gap-5 rounded-xl border-2 border-gray-200 bg-gray-100 p-6'
      >
        <img src={chatIcon} alt='chat icon' />
        <div className='text-left text-gray-500'>
          <p className='text-xl font-bold'>{`챗봇과 
          대화하기`}</p>
          <p className='text-xs'>
            {`챗봇과의 채팅을 통해
자격증, 요양보호사 및 한국 생활에 대해 무엇이든 질문해보세요.`}
          </p>
        </div>
      </Link>
      <Link
        to='/chatbot/photo'
        className='mx-5 flex flex-row gap-5 rounded-xl border-2 border-gray-200 bg-gray-100 p-6'
      >
        <img src={photoIcon} alt='chat icon' />
        <div className='text-left text-gray-500'>
          <p className='text-xl font-bold'>{`사진으로
          질문하기`}</p>
          <p className='text-xs'>
            {`챗봇에게 문서 사진을 전달하면
챗봇이 분석을 통해
알기 쉽게 풀어드려요!`}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ChatMenu;

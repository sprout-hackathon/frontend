import { Link } from 'react-router-dom';

import chatIcon from '../../../assets/icons/chatbot-yellow.svg';

const ChatbotButton = () => {
  return (
    <div className='w-1/5'>
      <Link
        to='/chatbot'
        className='mx-auto flex h-20 w-20 -translate-y-8 transform justify-center rounded-full bg-blue'
      >
        <img src={chatIcon} alt='chatbot icon' className='w-10' />
      </Link>
    </div>
  );
};

export default ChatbotButton;

import { Link } from 'react-router-dom';

const ChatlogCard = ({ data }) => {
  return (
    <li className='rounded-2xl border p-4'>
      <Link to={`/chatlog/detail/${data.chatRoomId}`}>
        <p className='mb-1 text-base font-semibold'>{data.title}</p>
        <p className='h-12 overflow-hidden truncate whitespace-pre-wrap text-sm leading-4 text-gray-400'>
          {data.content}
        </p>
      </Link>
    </li>
  );
};

export default ChatlogCard;

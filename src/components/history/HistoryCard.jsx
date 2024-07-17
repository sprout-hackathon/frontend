import { Link } from 'react-router-dom';

const HistoryCard = () => {
  return (
    <li className='rounded-2xl border p-4'>
      <Link to='/history/detail/0'>
        <p className='mb-1 text-base font-semibold'>
          외국인 요양보호사 자격증의 필요 조건이 뭐야?
        </p>
        <p className='text-sm leading-4 text-gray-400'>
          외국인 요양보호사 자격증 취득을 위해서는 다음과 같은 조건이
          필요합니다:
        </p>
      </Link>
    </li>
  );
};

export default HistoryCard;

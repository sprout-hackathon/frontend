import editIcon from '../../assets/icons/edit-gray.svg';
import deleteIcon from '../../assets/icons/delete-gray.svg';
import { Link } from 'react-router-dom';

const HistoryCard = ({ data, editable = false }) => {
  let id = 0;

  const handleDelete = () => {
    // 삭제 api 호출 후 화면 새로고침?
  };

  return (
    <li className='card mx-5 list-none'>
      <div>
        <p className='mb-0.5 text-base font-bold'>봄봄재가노인복지센터</p>
        <p className='truncate text-xs text-gray-400'>
          전북특별자치도 완주군 봉동읍 완주산단7로 61, 머시기머시기
        </p>
      </div>
      <hr className='mb-3 mt-2' />
      <div className='flex flex-row'>
        <span className='rounded-md border border-gray-400 bg-gray-300 px-2 py-px text-[13px]'>
          5개월
        </span>
        {editable && (
          <>
            <Link to={`edit/${id}`} className='ml-auto'>
              <img src={editIcon} alt='edit icon' />
            </Link>
            <button onClick={handleDelete} className='ml-3'>
              <img src={deleteIcon} alt='delete icon' />
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default HistoryCard;

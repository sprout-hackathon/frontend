import editIcon from '../../assets/icons/edit-gray.svg';
import deleteIcon from '../../assets/icons/delete-gray.svg';

const HistoryCard = ({ data, editable = false }) => {
  let id = 0;

  const handleEdit = () => {
    // 별도의 수정 페이지로 넘어가기?
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
            <button className='ml-auto'>
              <img src={editIcon} alt='edit icon' />
            </button>
            <button className='ml-3'>
              <img src={deleteIcon} alt='delete icon' />
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default HistoryCard;

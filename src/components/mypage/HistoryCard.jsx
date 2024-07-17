import rightChevronIcon from '../../assets/icons/right-chevron.svg';

const HistoryCard = () => {
  return (
    <li className='card mx-5 list-none'>
      <div className='flex flex-row'>
        <div>
          <p className='mb-0.5 text-base font-bold'>봄봄재가노인복지센터</p>
          <p className='truncate text-xs text-gray-400'>
            전북특별자치도 완주군 봉동읍 완주산단7로 61, 머시기머시기
          </p>
        </div>
        <img src={rightChevronIcon} alt='chevron icon' className='mx-5' />
      </div>
      <hr className='my-2' />
      <span className='rounded-md border border-gray-400 bg-gray-300 px-2 py-0.5 text-[13px]'>
        5개월
      </span>
    </li>
  );
};

export default HistoryCard;

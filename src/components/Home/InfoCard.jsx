import rightChevronIcon from '../../assets/icons/right-chevron.svg';

const InfoCard = () => {
  return (
    <li className='rounded-2xl border bg-gray-50 p-4'>
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
      <p className='mb-1 text-sm'>
        <span className='mr-3 font-semibold'>경력</span>
        경력 (최소 1년 0 개월 이상) 우대
      </p>
      <p className='mb-1 text-sm'>
        <span className='mr-3 font-semibold'>근무</span>주 5일 근무 (주
        소정근로시간: 40시간)
      </p>
      <p className='mb-1 text-sm'>
        <span className='mr-3 font-semibold'>월급</span>
        <span className='rounded-md border border-gray-400 bg-gray-300 px-1 py-0.5 text-[13px]'>
          200만원 이상
        </span>
      </p>
    </li>
  );
};

export default InfoCard;

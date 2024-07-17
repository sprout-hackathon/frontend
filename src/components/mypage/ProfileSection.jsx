import checkIcon from '../../assets/icons/check-badge.svg';

const ProfileSection = () => {
  return (
    <div className='card mx-5'>
      <div className='flex flex-row'>
        <div className='grow'>
          <div className='flex flex-row items-center'>
            <p className='text-xl font-bold leading-7'>사용자 님</p>
            <img src={checkIcon} alt='check icon' className='ml-1 h-5 w-5' />
          </div>
          <p className='text-sm font-semibold text-gray-400'>abcde1234</p>
        </div>
        <button className='btn-gray text-xs'>편집하기</button>
      </div>
      <div className='mt-2 flex flex-row items-center gap-2 text-xs'>
        <span>경력</span>
        <span className='badge-gray'>요양보호사</span>
        <span className='badge-gray'>0~6개월</span>
      </div>
      <div className='mt-2 flex flex-row items-center gap-2 text-xs'>
        <span>국가</span>
        <span className='badge-gray'>중국</span>
        <span className='badge-gray'>중국어</span>
      </div>
    </div>
  );
};

export default ProfileSection;

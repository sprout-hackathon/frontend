import { Link } from 'react-router-dom';
import checkIcon from '../../assets/icons/check-badge.svg';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '../../api/user';

const ProfileSection = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ['user'],
    queryFn: getUserInfo,
  });

  if (isPending) return <div className='card mx-5 h-[175px] shrink-0'></div>;
  if (isError)
    return (
      <div className='card mx-5 h-[175px] shrink-0'>
        프로필 정보 불러오기에 실패했어요
      </div>
    );

  return (
    <div className='card mx-5'>
      <div className='flex flex-row'>
        <div className='grow'>
          <div className='flex flex-row items-center'>
            <p className='text-xl font-bold leading-7'>{data.nickname} 님</p>
            <img src={checkIcon} alt='check icon' className='ml-1 h-5 w-5' />
          </div>
          <p className='text-sm font-semibold text-gray-400'>abcde1234</p>
        </div>
        <Link to='/mypage/edit' className='btn-gray text-xs'>
          편집하기
        </Link>
      </div>
      <div className='mt-2 flex flex-row items-center gap-2 text-xs'>
        <span>경력</span>
        <span className='badge-gray'>
          {data.totalWorkYear}년 {data.totalWorkMonth}개월
        </span>
      </div>
      <div className='mt-2 flex flex-row items-center gap-2 text-xs'>
        <span>국가</span>
        <span className='badge-gray'>{data.nationCode}</span>
        <span className='badge-gray'>{data.languageCode}</span>
      </div>
    </div>
  );
};

export default ProfileSection;

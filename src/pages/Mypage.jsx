import { Link, useNavigate } from 'react-router-dom';
import ApplyCard from '../components/mypage/ApplyCard';
import ProfileSection from '../components/mypage/ProfileSection';
import HistoryCard from '../components/mypage/HistoryCard';
import rightChevron from '../assets/icons/right-chevron-sm.svg';

const Mypage = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => navigate('/mypage/apply');

  const handleHistoryClick = () => navigate('/mypage/history');

  return (
    <div className='-mb-20 flex h-dvh flex-col gap-4 overflow-y-auto pb-32'>
      <h1 className='p-5 pb-0 text-2xl font-bold'>마이페이지</h1>
      <ProfileSection />
      <div className='-mb-2 flex flex-row justify-between px-5'>
        <h2 className='text-xl font-bold'>나의 지원 목록</h2>
        <button onClick={handleApplyClick}>전체보기</button>
      </div>
      <ApplyCard data={''} disabled />
      <div className='-mb-2 flex flex-row justify-between px-5'>
        <h2 className='text-xl font-bold'>나의 근무 이력</h2>
        <button onClick={handleHistoryClick}>전체보기</button>
      </div>
      <HistoryCard />
      <div className='card mx-5 mt-4'>
        <p className='mb-0.5 text-base font-bold'>Feed</p>
        <Link
          to='/mypage/scrap'
          className='my-3 flex flex-row items-center justify-between text-sm font-medium'
        >
          내 스크랩 목록 <img src={rightChevron} alt='' />
        </Link>
        <hr />
        <Link
          to='/mypage/posts'
          className='my-3 flex flex-row items-center justify-between text-sm font-medium'
        >
          내가 작성한 게시글 <img src={rightChevron} alt='' />
        </Link>
        <hr />
        <Link
          to='/mypage/comments'
          className='mt-3 flex flex-row items-center justify-between text-sm font-medium'
        >
          내가 작성한 댓글 <img src={rightChevron} alt='' />
        </Link>
      </div>
      <div className='card mx-5'>
        <Link
          to='/mypage/comments'
          className='flex flex-row items-center justify-between text-sm font-medium'
        >
          서비스 탈퇴하기 <img src={rightChevron} alt='' />
        </Link>
      </div>
    </div>
  );
};

export default Mypage;

import { useNavigate } from 'react-router-dom';
import leftChevronIcon from '../assets/icons/left-chevron.svg';
import searchIcon from '../assets/icons/search-black.svg';
import { useState } from 'react';
import InfoCard from '../components/Home/InfoCard';

const Scrap = () => {
  const [searchValue, setSearchValue] = useState('');
  const [openIndex, setOpenIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <div className='flex h-dvh flex-col overflow-y-auto'>
      <div className='flex w-full flex-row items-center px-5 py-4'>
        <button onClick={() => navigate(-1)} className='mr-8'>
          <img src={leftChevronIcon} alt='back icon' />
        </button>
        <h1 className='mx-auto pr-9 text-lg font-semibold'>내 스크랩 목록</h1>
      </div>
      <div className='mx-5 flex flex-row'>
        <input
          type='search'
          placeholder='검색어로 빠르게 스크랩한 글 찾기'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className='-mr-8 grow rounded-lg border bg-gray-50 px-3 py-2 text-sm focus:outline-blue'
        />
        <img src={searchIcon} alt='search icon' className='mr-3' />
      </div>
      <div className='flex flex-row'>
        <button
          onClick={() => setOpenIndex(0)}
          className={
            openIndex === 0
              ? 'grow border-b-[3px] border-b-blue pb-2 pt-4 text-base font-bold text-blue'
              : 'grow border-b-[3px] border-b-gray-200 pb-2 pt-4 text-base font-bold text-gray-200'
          }
        >
          스크랩한 공고
        </button>
        <button
          onClick={() => setOpenIndex(1)}
          className={
            openIndex === 1
              ? 'grow border-b-[3px] border-b-blue pb-2 pt-4 text-base font-bold text-blue'
              : 'grow border-b-[3px] border-b-gray-200 pb-2 pt-4 text-base font-bold text-gray-200'
          }
        >
          스크랩한 게시글
        </button>
      </div>
      {openIndex === 0 && (
        <ul className='flex flex-col gap-4 overflow-y-auto p-5'>
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </ul>
      )}
    </div>
  );
};

export default Scrap;

import { useState } from 'react';
import { Link } from 'react-router-dom';

const PhotoLog = () => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  return (
    <div className='-mb-20 flex h-dvh flex-col pb-20'>
      <h1 className='mb-2 whitespace-pre-line px-5 pt-5 text-3xl font-bold'>
        사진 질문 내역
      </h1>
      <h5 className='mb-3 px-5 text-sm text-blue'>
        날짜를 선택해 사진으로 질문한 내역을 다시 볼 수 있어요
      </h5>
      <hr />
      {/* <p className='px-5 pb-0 pt-3 text-lg font-bold'>2024.07.18.</p> */}
      <input
        type='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className='mx-5 my-4 text-lg font-bold hover:cursor-pointer focus:outline-none'
      />
      <ListContainer />
    </div>
  );
};

const ListContainer = () => {
  return (
    <ul className='flex grow flex-col gap-4 overflow-y-auto p-5 pt-0'>
      <Link>
        <li className='rounded-2xl border p-4'>
          <p className='mb-2 text-base font-semibold'>제목</p>
          <div className='mb-2 flex flex-row gap-3'>
            <div className='rounded-x h-36 w-32 rounded-xl border' />
            <div className='rounded-x h-36 w-32 rounded-xl border' />
            <div className='my-auto'>+2</div>
          </div>
          <p className='h-12 overflow-hidden truncate whitespace-pre-wrap text-sm leading-4 text-gray-400'>
            내용
          </p>
        </li>
      </Link>
    </ul>
  );
};

export default PhotoLog;

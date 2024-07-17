import { useState } from 'react';
import HistoryCard from '../components/history/HistoryCard';

const History = () => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  return (
    <div className='-mb-20 flex h-dvh flex-col pb-20'>
      <h1 className='mb-2 whitespace-pre-line px-5 pt-5 text-3xl font-bold'>
        챗봇 대화 내역
      </h1>
      <h5 className='mb-3 px-5 text-sm text-blue'>
        챗봇과의 대화 내역을 다시 볼 수 있어요.
      </h5>
      <hr />
      {/* <p className='px-5 pb-0 pt-3 text-lg font-bold'>2024.07.18.</p> */}
      <input
        type='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className='mx-5 my-4 text-lg font-bold hover:cursor-pointer focus:outline-none'
      />
      <ul className='flex grow flex-col gap-4 overflow-y-auto p-5 pt-0'>
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </ul>
    </div>
  );
};

export default History;

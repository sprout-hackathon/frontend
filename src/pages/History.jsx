import { Link, useNavigate } from 'react-router-dom';
import leftChevronIcon from '../assets/icons/left-chevron.svg';
import addIcon from '../assets/icons/add-gray.svg';
import { useState } from 'react';
import HistoryCard from '../components/mypage/HistoryCard';

const dataList = [0, 1, 2, 3, 4];

const History = () => {
  const [isEditing, setEditing] = useState(false);
  const navigate = useNavigate();

  const handleEdit = () => {
    setEditing((editing) => !editing);
  };

  return (
    <div className='flex h-dvh flex-col overflow-y-auto pb-5'>
      <div className='flex w-full flex-row items-center px-5 py-4'>
        <button onClick={() => navigate(-1)} className='mr-8'>
          <img src={leftChevronIcon} alt='back icon' />
        </button>
        <h1 className='mx-auto text-lg font-semibold'>나의 근무 이력</h1>
        {isEditing ? (
          <button onClick={handleEdit} className='btn-gray text-xs'>
            완료하기
          </button>
        ) : (
          <button onClick={handleEdit} className='btn-gray text-xs'>
            편집하기
          </button>
        )}
      </div>
      {isEditing && (
        <Link to='add' className='mb-3 ml-auto mr-5 mt-2'>
          <img src={addIcon} alt='add icon' />
        </Link>
      )}
      <ul className='flex flex-col gap-4'>
        {dataList.map((data, index) => (
          <HistoryCard key={index} data={data} editable={isEditing} />
        ))}
      </ul>
    </div>
  );
};

export default History;

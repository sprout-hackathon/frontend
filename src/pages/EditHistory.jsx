import { useMatch, useNavigate } from 'react-router-dom';
import leftChevronIcon from '../assets/icons/left-chevron.svg';
import { useEffect, useRef, useState } from 'react';

const EditHistory = () => {
  const [hospitalName, setHospitalName] = useState('');
  const [period, setPeriod] = useState('');
  const historyId = useRef(null);
  const navigate = useNavigate();
  const match = useMatch('/mypage/history/edit/:id');

  useEffect(() => {
    if (match) {
      historyId.current = match.params.id;
      // 기존 근무이력 데이터 불러와서 input에 표시
    }
  }, []);

  const handleSubmit = () => {
    // 기존 정보와 같다면 그냥 종료
    // 변경사항 있다면 서버로 보내고 종료
  };

  return (
    <div className='flex h-dvh flex-col overflow-y-auto pb-5'>
      <div className='flex w-full flex-row items-center px-5 py-4'>
        <button onClick={() => navigate(-1)} className='mr-8'>
          <img src={leftChevronIcon} alt='back icon' />
        </button>
        <h1 className='mx-auto text-lg font-semibold'>나의 근무 이력</h1>
        <button onClick={handleSubmit} className='btn-gray text-xs'>
          완료하기
        </button>
      </div>
      <div className='flex flex-col p-5'>
        <h2 className='mb-1 text-xl font-semibold'>병원 이름</h2>
        <input
          placeholder='병원 이름을 입력해주세요'
          value={hospitalName}
          onChange={(e) => setHospitalName(e.target.value)}
          className='mb-6 rounded-lg border bg-gray-50 px-4 py-3 text-base focus:border-blue focus:outline-none'
        />
        <h2 className='mb-1 text-xl font-semibold'>근무 기간</h2>
        <input
          placeholder='근무 기간을 입력해주세요'
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className='mb-6 rounded-lg border bg-gray-50 px-4 py-3 text-base focus:border-blue focus:outline-none'
        />
      </div>
    </div>
  );
};

export default EditHistory;

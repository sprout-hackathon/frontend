import { useNavigate } from 'react-router-dom';
import leftChevronIcon from '../assets/icons/left-chevron.svg';
import { useState } from 'react';

const EditProfile = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [career, setCareer] = useState('요양보호사');
  const [period, setPeriod] = useState('');
  const [nation, setNation] = useState('');
  const [language, setLanguage] = useState('');
  const [level, setLevel] = useState(0);

  const handleSubmit = () => {
    // 서버에 데이터 전송 후 뒤로가기
    navigate(-1);
  };

  return (
    <div className='flex h-dvh flex-col overflow-y-auto pb-5'>
      <div className='flex w-full flex-row items-center px-5 py-4'>
        <button onClick={() => navigate(-1)} className='mr-8'>
          <img src={leftChevronIcon} alt='back icon' />
        </button>
        <h1 className='mx-auto text-lg font-semibold'>내 프로필 편집하기</h1>
        <button onClick={handleSubmit} className='btn-gray text-xs'>
          완료
        </button>
      </div>
      <h2 className='profile-heading mt-0'>닉네임</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='profile-input mx-5'
      />
      <h2 className='profile-heading'>아이디</h2>
      <input className='profile-input mx-5' />
      <h2 className='profile-heading'>경력</h2>
      <div className='mx-5 flex flex-row gap-4'>
        <select
          value={career}
          onChange={(e) => setCareer(e.target.value)}
          className='profile-input grow'
        >
          <option className='text-base'>요양보호사</option>
        </select>
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className='profile-input grow'
        >
          <option>~6개월</option>
          <option>1년</option>
          <option>2년</option>
        </select>
      </div>
      <h2 className='profile-heading'>국가 이름</h2>
      <input
        value={nation}
        onChange={(e) => setNation(e.target.value)}
        className='profile-input mx-5'
      />
      <h2 className='profile-heading'>사용 언어 (한국어 제외)</h2>
      <input
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className='profile-input mx-5'
      />
      <h2 className='profile-heading'>한국어 능숙도</h2>
      <div className='mx-5 mb-2 flex flex-row justify-between'>
        <span>매우 서툴러요</span>
        <span>능숙해요</span>
      </div>
      <div className='mx-5 flex flex-row justify-between'>
        {[1, 2, 3, 4, 5].map((x) =>
          x === level ? (
            <input key={x} type='radio' className='profile-radio bg-blue' />
          ) : (
            <input
              key={x}
              type='radio'
              onClick={() => setLevel(x)}
              className='profile-radio'
            />
          )
        )}
      </div>
    </div>
  );
};

export default EditProfile;

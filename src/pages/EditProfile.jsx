import { useNavigate } from 'react-router-dom';
import leftChevronIcon from '../assets/icons/left-chevron.svg';
import { useEffect, useState } from 'react';
import { editUserInfo, getUserInfo } from '../api/user';
import { useMutation } from '@tanstack/react-query';

const EditProfile = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [career, setCareer] = useState('');
  const [nation, setNation] = useState('');
  const [language, setLanguage] = useState('');
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const initForm = async () => {
      try {
        const {
          nickname,
          nationCode,
          languageCode,
          proficiency,
          totalWorkYear,
          totalWorkMonth,
        } = await getUserInfo();
        setUsername(nickname);
        setCareer(`${totalWorkYear}년 ${totalWorkMonth}개월`);
        setNation(nationCode);
        setLanguage(languageCode);
        setLevel(proficiency);
      } catch (err) {
        console.error(err);
      }
    };
    initForm();
  }, []);

  const { mutate: patchUser } = useMutation({
    mutationFn: () => editUserInfo(username, nation, language, level),
    onSuccess: () => navigate(-1),
  });

  return (
    <div className='flex h-dvh flex-col overflow-y-auto pb-5'>
      <div className='flex w-full flex-row items-center px-5 py-4'>
        <button onClick={() => navigate(-1)} className='mr-8'>
          <img src={leftChevronIcon} alt='back icon' />
        </button>
        <h1 className='mx-auto text-lg font-semibold'>내 프로필 편집하기</h1>
        <button onClick={patchUser} className='btn-gray text-xs'>
          완료
        </button>
      </div>
      <h2 className='profile-heading mt-0'>닉네임</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='profile-input mx-5'
      />
      <h2 className='profile-heading'>경력</h2>
      <input
        value={career}
        onChange={(e) => setCareer(e.target.value)}
        className='profile-input mx-5'
      />
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

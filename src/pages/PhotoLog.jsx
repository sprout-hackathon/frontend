import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { getImageRoomList } from '../api/imageChats';
import Spinner from '../components/common/Spinner';
import { getKoreanDate } from '../utils/getKoreanDate';

const PhotoLog = () => {
  const [date, setDate] = useState(getKoreanDate());
  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

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
      <ListContainer date={date} />
    </div>
  );
};

const ListContainer = ({ date }) => {
  const { data, isPending, isError } = useQuery({
    queryKey: [date],
    queryFn: () => getImageRoomList(date),
  });

  if (isPending)
    return (
      <ul className='flex grow p-5 pt-0'>
        <Spinner className='m-auto' />
      </ul>
    );
  if (isError)
    return <ul className='grow p-5 pt-0'>사진 내역 불러오기에 실패했어요</ul>;

  if (!data || data.length === 0)
    return <p className='mx-5'>해당 날짜의 내역이 존재하지 않아요</p>;

  return (
    <ul className='flex grow flex-col gap-4 overflow-y-auto p-5 pt-0'>
      {data.map((room) => (
        <Link
          to={`/photolog/detail/${room.imageRoomId}`}
          key={room.imageRoomId}
        >
          <li className='rounded-2xl border p-4'>
            <p className='mb-2 text-base font-semibold'>{room.title}</p>
            <div className='gap mb-2 grid grid-cols-2 gap-3 overflow-hidden rounded-xl border'>
              {room.imageUrls.map((url) => (
                <img
                  key={url}
                  src={url}
                  alt='uploaded'
                  className='h-48 object-cover'
                />
              ))}
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default PhotoLog;

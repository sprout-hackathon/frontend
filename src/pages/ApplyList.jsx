import { useNavigate } from 'react-router-dom';
import leftChevronIcon from '../assets/icons/left-chevron.svg';
import ApplyCard from '../components/mypage/ApplyCard';
import { useState } from 'react';
import Modal from '../components/common/Modal/Modal';
import ModalText from '../components/common/Modal/ModalText';
import ModalButton from '../components/common/Modal/ModalButton';
import { useQuery } from '@tanstack/react-query';
import { getApplicationList } from '../api/applications';

const dataList = [0, 1, 2, 3, 4];

const ApplyList = () => {
  const [isEditing, setEditing] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  let showModal = 0 <= selectedIndex && selectedIndex < dataList.length;
  const navigate = useNavigate();

  const ListContainer = () => {
    const { data, isPending, isError } = useQuery({
      queryKey: ['applicationList'],
      queryFn: getApplicationList,
    });

    if (isPending) return <ul className='flex flex-col gap-4'></ul>;
    if (isError) return <ul className='flex flex-col gap-4'></ul>;

    return (
      <ul className='flex flex-col gap-4'>
        {data.map((item, index) =>
          index === selectedIndex ? (
            <ApplyCard key={index} data={item} selected />
          ) : (
            <ApplyCard
              key={index}
              data={item}
              disabled={!isEditing}
              onSelect={() => setSelectedIndex(index)}
            />
          )
        )}
      </ul>
    );
  };

  const handleEdit = () => {
    setEditing((editing) => !editing);
  };

  const handleModalClose = () => {
    setSelectedIndex(-1);
  };

  return (
    <div className='flex h-dvh flex-col'>
      <div className='flex w-full flex-row items-center px-5 py-4'>
        <button onClick={() => navigate(-1)} className='mr-8'>
          <img src={leftChevronIcon} alt='back icon' />
        </button>
        <h1 className='mx-auto text-lg font-semibold'>나의 지원목록</h1>
        {isEditing ? (
          <button onClick={handleEdit} className='btn-blue text-xs'>
            편집완료
          </button>
        ) : (
          <button onClick={handleEdit} className='btn-gray text-xs'>
            편집하기
          </button>
        )}
      </div>
      <div className='overflow-y-auto pb-5'>
        <ListContainer />
        {showModal && (
          <Modal onClickClose={handleModalClose}>
            <ModalText text='지원 현황을 수정해주세요' />
            <ModalButton text='지원중' />
            <ModalButton text='합격' />
            <ModalButton text='탈락' />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ApplyList;

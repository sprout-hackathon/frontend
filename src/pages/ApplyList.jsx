import { useNavigate } from 'react-router-dom';
import leftChevronIcon from '../assets/icons/left-chevron.svg';
import ApplyCard from '../components/mypage/ApplyCard';
import { useState } from 'react';
import Modal from '../components/common/Modal/Modal';
import ModalText from '../components/common/Modal/ModalText';
import ModalButton from '../components/common/Modal/ModalButton';
import { useMutation, useQuery } from '@tanstack/react-query';
import { editApplicationState, getApplicationList } from '../api/applications';

const ApplyList = () => {
  const [isEditing, setEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  let showModal = Boolean(selectedId);
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (state) => editApplicationState(selectedId, state),
    onSuccess: () => navigate(0),
  });

  const handleEdit = () => {
    setEditing((editing) => !editing);
  };

  const handleModalClose = () => {
    setSelectedId(null);
  };

  const ListContainer = () => {
    const { data, isPending, isError } = useQuery({
      queryKey: ['applicationList'],
      queryFn: getApplicationList,
    });

    if (isPending) return <ul className='flex flex-col gap-4'></ul>;
    if (isError) return <ul className='flex flex-col gap-4'></ul>;

    return (
      <ul className='flex flex-col gap-4'>
        {data.map((item) =>
          item.applicationId === selectedId ? (
            <ApplyCard key={item.applicationId} data={item} selected />
          ) : (
            <ApplyCard
              key={item.applicationId}
              data={item}
              disabled={!isEditing}
              onSelect={() => setSelectedId(item.applicationId)}
            />
          )
        )}
      </ul>
    );
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
            <ModalButton text='접수완료' onClick={() => mutate('접수완료')} />
            <ModalButton text='심사중' onClick={() => mutate('심사중')} />
            <ModalButton text='합격' onClick={() => mutate('합격')} />
            <ModalButton text='불합격' onClick={() => mutate('불합격')} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ApplyList;

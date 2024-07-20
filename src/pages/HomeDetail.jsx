import { useNavigate, useParams } from 'react-router-dom';
import leftChevronIcon from '../assets/icons/left-chevron.svg';
import InfoCard from '../components/Home/InfoCard';
import { useState } from 'react';
import Modal from '../components/common/Modal/Modal';
import ModalText from '../components/common/Modal/ModalText';
import ModalButton from '../components/common/Modal/ModalButton';
import scrapGrayIcon from '../assets/icons/scrap-gray.svg';
import scrapBlackIcon from '../assets/icons/scrap-black.svg';
import { useQuery } from '@tanstack/react-query';

const HomeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrapped, setIsScrapped] = useState(false);
  const { data, isPending, isError } = useQuery({
    queryKey: ['recruitment', id],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_BASE_URL}/api/recruitments/${id}`).then(
        (res) => res.json()
      ),
  });

  // TODO: id로 실제 데이터 fetch해서 보여주기

  const handleScrap = () => {
    setIsScrapped((prev) => !prev);
  };

  const handleSubmit = () => {
    // 지원하기
    // 지원 성공 여부에 따라 모달 표시
    setIsOpen(true);
  };

  return (
    <div className='relative h-dvh p-5 pb-0'>
      <div className='h-full overflow-y-auto pb-20'>
        <div className='mb-3 flex flex-row justify-between'>
          <button onClick={() => navigate(-1)}>
            <img src={leftChevronIcon} alt='leftchevron icon' />
          </button>
          {isScrapped ? (
            <button
              onClick={handleScrap}
              className='rounded-xl border border-yellow-dark bg-yellow px-2 py-1 text-sm text-black'
            >
              <img src={scrapBlackIcon} alt='scrap icon' className='inline' />
              취소
            </button>
          ) : (
            <button
              onClick={handleScrap}
              className='rounded-xl border border-gray-400 px-2 py-1 text-sm text-gray-600'
            >
              <img
                src={scrapGrayIcon}
                alt='scrap icon'
                className='mr-1 inline'
              />
              스크랩
            </button>
          )}
        </div>
        <Container data={data} isPending={isPending} isError={isError} />
      </div>
      <button
        onClick={handleSubmit}
        className='absolute bottom-5 left-1/2 h-12 w-11/12 -translate-x-1/2 transform rounded-xl bg-blue text-lg text-white'
      >
        지원하기
      </button>
      {isOpen && (
        <Modal onClickClose={() => setIsOpen(false)}>
          <ModalText
            text='지원이 완료되었어요!
          좋은 결과를 기대할게요 :)'
          />
          <ModalButton text='홈으로' onClick={() => navigate('/')} />
          <ModalButton
            text='나의 지원 내역 확인하기'
            onClick={() => navigate('/mypage')}
          />
          {/* TODO: 지원내역 path 수정 */}
        </Modal>
      )}
    </div>
  );
};

const Container = ({ data, isPending, isError }) => {
  if (isPending) return <p>공고 정보를 불러오는 중이에요</p>;
  if (isError) return <p>공고 정보를 불러오는 데 실패했어요</p>;

  return (
    <>
      <InfoCard data={data} />
      <div className='mt-4 rounded-2xl border p-4'>
        <h4 className='mb-4 text-lg font-bold'>
          봄봄재가노인복지센터에서 외국인 요양보호사를 모집합니다!
        </h4>
        <p className='whitespace-pre-line text-base'>{data.content}</p>
      </div>
    </>
  );
};

export default HomeDetail;

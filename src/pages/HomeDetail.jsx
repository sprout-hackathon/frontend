import { useNavigate, useParams } from 'react-router-dom';
import leftChevronIcon from '../assets/icons/left-chevron.svg';
import InfoCard from '../components/Home/InfoCard';
import { useEffect, useState } from 'react';
import Modal from '../components/common/Modal/Modal';
import ModalText from '../components/common/Modal/ModalText';
import ModalButton from '../components/common/Modal/ModalButton';
import scrapGrayIcon from '../assets/icons/scrap-gray.svg';
import scrapBlackIcon from '../assets/icons/scrap-black.svg';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  deleteScrapRecruitment,
  getRecruitmentDetail,
  getRecruitmentScrap,
  postScrapRecruitment,
} from '../api/recruitments';
import { postApplication } from '../api/applications';
import useAuth from '../hooks/useAuth';
import Spinner from '../components/common/Spinner';

const HomeDetail = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // 공고 내용 불러오기
  const { data, isPending, isError } = useQuery({
    queryKey: ['recruitment', id],
    queryFn: () => getRecruitmentDetail(id),
  });

  // 해당 공고에 지원하기
  const { mutate: apply } = useMutation({
    mutationFn: () => postApplication(id),
    onSuccess: () => setIsOpen(true),
  });

  return (
    <div className='relative h-dvh p-5 pb-0'>
      <div className='h-full overflow-y-auto pb-20'>
        <div className='mb-3 flex flex-row justify-between'>
          <button onClick={() => navigate(-1)}>
            <img src={leftChevronIcon} alt='leftchevron icon' />
          </button>
          <ScrapButton recruitmentId={id} />
        </div>
        <Container data={data} isPending={isPending} isError={isError} />
      </div>
      <button
        onClick={apply}
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
            onClick={() => navigate('/mypage/apply')}
          />
          {/* TODO: 지원내역 path 수정 */}
        </Modal>
      )}
    </div>
  );
};

const Container = ({ data, isPending, isError }) => {
  if (isPending) return <Spinner className='m-auto mt-60' />;
  if (isError) return <p>공고 정보를 불러오는 데 실패했어요</p>;

  return (
    <>
      <InfoCard data={data} />
      <div className='mt-4 rounded-2xl border p-4'>
        <h4 className='mb-4 text-lg font-bold'>{data.title}</h4>
        <p className='whitespace-pre-line text-base'>{data.content}</p>
      </div>
    </>
  );
};

const ScrapButton = ({ recruitmentId }) => {
  const [isScrapped, setIsScrapped] = useState(false);

  // 공고 스크랩 상태 불러오기
  const { scrapped } = useQuery({
    queryKey: ['recruitment', recruitmentId, 'scrap'],
    queryFn: () => getRecruitmentScrap(recruitmentId),
    onSuccess: () => setIsScrapped(scrapped),
  });

  // 해당 공고 스크랩하기
  const { mutate: scrap } = useMutation({
    mutationFn: () => postScrapRecruitment(recruitmentId),
    onSuccess: () => setIsScrapped(true),
  });

  // 해당 공고 스크랩 취소하기
  const { mutate: unscrap } = useMutation({
    mutationFn: () => deleteScrapRecruitment(recruitmentId),
    onSuccess: () => setIsScrapped(false),
  });

  const handleScrap = () => {
    if (isScrapped) unscrap();
    else scrap();
  };

  return (
    <button
      onClick={handleScrap}
      className={
        isScrapped
          ? 'rounded-xl border border-yellow-dark bg-yellow px-2 py-1 text-sm text-black'
          : 'rounded-xl border border-gray-400 px-2 py-1 text-sm text-gray-600'
      }
    >
      {isScrapped ? (
        <>
          <img src={scrapBlackIcon} alt='scrap icon' className='inline' />
          취소
        </>
      ) : (
        <>
          <img src={scrapGrayIcon} alt='scrap icon' className='mr-1 inline' />
          스크랩
        </>
      )}
    </button>
  );
};

export default HomeDetail;

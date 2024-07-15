import { useNavigate, useParams } from 'react-router-dom';
import leftChevronIcon from '../assets/icons/left-chevron.svg';
import InfoCard from '../components/Home/InfoCard';

const HomeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // TODO: id로 실제 데이터 fetch해서 보여주기

  return (
    <div className='relative h-dvh p-5 pb-0'>
      <div className='h-full overflow-y-auto pb-20'>
        <div className='mb-3'>
          <button onClick={() => navigate('/')}>
            <img src={leftChevronIcon} alt='leftchevron icon' />
          </button>
        </div>
        <InfoCard />
        <div className='mt-4 rounded-2xl border p-4'>
          <h4 className='mb-4 text-lg font-bold'>
            봄봄재가노인복지센터에서 외국인 요양보호사를 모집합니다!
          </h4>
          <p className='whitespace-pre-line text-base'>{`1. 주 업무
        주간보호센터 요양보호사 업무
        이용대상자에 대한 신체활동, 인지활동, 일상생활 수발등의 서비스 제공.
        송영서비스
        센터장인 지시한 업무
        수습기간(3개월) 있음
        
        2. 필요자격 및 요건
        - 주간보호센터 요양보호사 경력  1년이상 우대(경력에 따른 급여 협의 가능)
        - 운전필수(송영서비스), 자차 소유 필수
        * 송영업무 차량유지비 지원됩니다.

[근무시간]
근무시간 협의가능
※ 상세 근무시간
근무시간 협의가능

근무시간 : 08:00 ~ 17:00
휴게시간 : 12:30 ~ 13:30
*토요일 근무 시 : 평일 대체 휴무 (주5일 근무)

휴게시간( (오후) 12시30분~(오후) 01시30분)

주 소정근로시간 
툴팁
 : 40시간`}</p>
        </div>
      </div>
      <button className='absolute bottom-5 left-1/2 h-12 w-11/12 -translate-x-1/2 transform rounded-xl bg-blue text-lg text-white'>
        지원하기
      </button>
    </div>
  );
};

export default HomeDetail;

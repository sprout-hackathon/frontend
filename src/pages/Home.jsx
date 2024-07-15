import InfoCard from '../components/Home/InfoCard';

const Home = () => {
  return (
    <div className='-mb-20 h-dvh overflow-y-auto pb-20'>
      <h1 className='mb-2 whitespace-pre-line px-5 pt-5 text-3xl font-bold'>
        반가워요,
        <br />
        서비스에 오신 걸 환영해요!
      </h1>
      <h5 className='mb-3 px-5 text-sm text-blue'>
        전국의 요양보호사 관련 소식을 한 번에 확인해보세요.
      </h5>
      <hr />
      <h3 className='px-5 py-4 text-2xl font-bold'>내 근처 찾아보기</h3>
      <ul className='flex flex-col gap-3 p-5'>
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </ul>
    </div>
  );
};

export default Home;

import RegionTag from './RegionTag';

const regions = [
  '전체',
  '서울',
  '부산',
  '대구',
  '인천',
  '광주',
  '대전',
  '울산',
  '경기',
  '강원',
  '충청',
  '전라',
  '경상',
  '제주',
  '세종',
];

const TagContainer = () => {
  return (
    <div className='flex w-full flex-row gap-2 overflow-x-scroll whitespace-nowrap bg-gray-200 px-2 py-2'>
      {regions.map((region) => (
        <RegionTag key={region} text={region} />
      ))}
    </div>
  );
};

export default TagContainer;
